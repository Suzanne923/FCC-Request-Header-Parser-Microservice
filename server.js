const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(process.cwd() + '/views'));

function getIp(header) {
  return header.substring(0, header.indexOf(','));
}

function getLanguage(header) {
  return header.substring(0, header.indexOf(','));
}


app.get('/api/whoami', (req, res) => {
  const ip = getIp(req.headers['x-forwarded-for']);
  const language = getLanguage(req.headers['accept-language']);
  console.log(req.headers);
  res.json({
    ipaddress: ip,
    language: language,
    software: ''
  });
});

app.listen(process.env.PORT, () => {
  console.log('Node.js listening ...');
});

