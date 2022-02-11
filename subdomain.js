const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || '3003';
const HOST = process.env.HOST || "localhost";
// app.use(visitor);
app.use(express.static('subdomain'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'subdomain', 'index.html'));
});

app.listen(PORT, HOST, () => console.log(`Server started on port ${PORT}`));
