const express = require('express');
const fs = require('fs')
const path = require('path')
const router = express.Router();
const { check, validationResult } = require('express-validator');

const filePath = path.resolve('/root/proxies.json');
const filePathB = path.resolve('/root/proxies.json');
router.post(
    '/',
    [
        check('country', 'Country is required').not().isEmpty(),
        check('ip', 'IP is required').not().isEmpty(),
        check('port', 'PORT is required').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array()[0].msg });
        }

        const { country, ip, port, fullname } = req.body;
        let data = [];
        if (fs.existsSync(filePath)) {
            try {
                data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            } catch (e) {

            }
        }

        var exists = data.find((proxy) => (proxy.ip == ip && proxy.port == port));
        var origin = 8001;
        for (var i = 0; i < 9000; i++) {
            var samePort = data.find(proxy => parseInt(proxy.origin) == origin);
            if (samePort) {
                origin++;
                continue;
            }

            break;
        }
        if (!exists) {
            const id = ip + ':' + port;
            data.push({
                country,
                ip,
                port,
                fullname,
                id,
                origin
            })
        }

        fs.writeFile(filePath, JSON.stringify(data), err => {
            const { exec } = require('child_process');
            exec('pm2 restart proxy', (error, stdout, stderr) => { })
        });
        fs.writeFile(filePathB, JSON.stringify(data), err => { });
        res.json(data)
    }
);

router.get('/', async (req, res) => {
    const search = req.query.search;
    const page = req.query.page;
    let data = [];
    try {
        if (fs.existsSync(filePath)) {
            data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }
    } catch (err) {
        console.error(err)
    }

    let searchedData = data.filter((proxy) => (proxy.fullname.indexOf(search) > -1
        || proxy.ip.indexOf(search) > -1
        || proxy.port.indexOf(search) > -1));

    const { exec } = require('child_process');
    let result = searchedData.slice(10 * page, 10 * (page + 1));
    exec('sudo lsof -i -P | grep LISTEN', (error, stdout, stderr) => {
        if (error) {
            res.json({
                proxies: result,
                proxyCount: searchedData.length
            })
            return;
        }

        result = result.map((p, index) => {
            p.status = stdout.indexOf('localhost:' + p.origin) > -1 ||
                stdout.indexOf('127.0.0.1:' + p.origin) > -1 ? 'running' : 'stopped';
            return p;
        })

        res.json({
            proxies: result,
            proxyCount: searchedData.length
        })
    });
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    let data = [];
    try {
        if (fs.existsSync(filePath)) {
            data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }
    } catch (err) {
        console.error(err)
    }
    data = data.filter((proxy) => (proxy.id != id));
    fs.writeFile(filePath, JSON.stringify(data), err => {
        const { exec } = require('child_process');
        exec('pm2 restart proxy', (error, stdout, stderr) => { })
    });
    res.json(data);
})

router.get('/start/:id', async (req, res) => {
    const id = req.params.id;
    let data = [];
    try {
        if (fs.existsSync(filePath)) {
            data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }
    } catch (err) {
        console.error(err)
    }

    const proxy = data.find(item => item.id == id);
    if (!proxy) {
        return res.json("Country does not exists!");
    }

    const { exec } = require('child_process');
    const cwd = path.resolve(__dirname + '../../../server.js');
    const command = `NODE_ENV=production PORT=${proxy.origin} PROXY_HOST=${proxy.ip} PROXY_PORT=${proxy.port} node ${cwd}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            // res.json(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        // res.json(`stderr: ${stderr}`);
        return;
    });
    res.json('success');
})

router.get('/stop/:id', async (req, res) => {
    const id = req.params.id;
    let data = [];
    try {
        if (fs.existsSync(filePath)) {
            data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }
    } catch (err) {
        console.error(err)
    }

    const proxy = data.find(item => item.id == id);
    if (!proxy) {
        return res.json("Country does not exists!");
    }

    const { exec } = require('child_process');
    exec('sudo lsof -i -P | grep LISTEN', (error, stdout, stderr) => {
        if (error) {
            console.log(`exec error: ${error}`);
            return;
        }

        let str = stdout.split('localhost:' + proxy.origin);
        if (str.length == 2) {
            str = str[0].split('node');
            str = str[str.length - 1];
            try {
                str = str.split('root')[0].trim();
            } catch (e) {

            }
            exec('kill ' + str, (error1, stdout1, stderr1) => {
                if (error) {
                    console.log(`exec error: ${error1}`);
                    return;
                }
                console.log(stdout1);
                // res.json(stdout1);
            });
        }
    });
    res.json('success');
})

module.exports = router;
