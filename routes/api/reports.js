const express = require('express');
const router = express.Router();
const Reports = require('../../models/Reports')

router.get('/getdata', async (req, res) => {
    const search = req.query.search;
    const page = req.query.page;
    const userCount = await Reports.find({
        $or: [
            { title: { $regex: search, $options: 'i' } },
            { image: { $regex: '.*' + search + '.*' } },
            { text: { $regex: '.*' + search + '.*' } },
            { url: { $regex: '.*' + search + '.*' } }
        ]
    }).countDocuments();
    const users = await Reports.find({
        $or: [
            { title: { $regex: search, $options: 'i' } },
            { image: { $regex: '.*' + search + '.*' } },
            { text: { $regex: '.*' + search + '.*' } },
            { url: { $regex: '.*' + search + '.*' } },
        ]
    })
        .skip(page * 10)
        .limit(10);

    return res.json({ data: { users, userCount } })
})

module.exports = router;
