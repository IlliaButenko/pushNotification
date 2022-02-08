const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');
// const visitor = require('./middleware/visitor');
const activeUser = require('./middleware/activeUser');
const useragent = require('express-useragent');
const bodyParser = require('body-parser')
const webpush = require('web-push')

const app = express();

app.use(cors())
app.use(useragent.express());
app.use(bodyParser.json())

// Connect Database
connectDB();

// const BlockchainUser = require('./models/BlockchainUser');
webpush.setVapidDetails("mailto: `rStarboy0809@gmail.com`", "BKIYNnyV8kwAYKkyw8ubJt8d1XoAhTjVEOtmq4LKVEPjTK1e2xwiMXf8TA6FJLrjvjrKsSJroLt9WXzIlNQ1fwY", "DC4mL784GIrxufhvdIs0A9_8PGMB1ub5JeUMNlyvAo0")

app.use('/users/api/users', require('./routes/api/visitor'));
app.use('/users/api/urls', require('./routes/api/settings'));
app.use('/users/api/notification', require('./routes/api/notification'));


// Configuration
const PORT = process.env.PORT || '3002';
const HOST = process.env.HOST || "localhost";
// app.use(visitor);
app.use(express.static('client'));

// app.get('/admin/api/notification', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'lib', 'index.html'));
// });

app.get('*', [activeUser], (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.listen(PORT, HOST, () => console.log(`Server started on port ${PORT}`));
