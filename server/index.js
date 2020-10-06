const express = require('express');

const proxy = express();

const port = 3000;

proxy.use(express.static('public'));
proxy.use(express.static('client'))

proxy.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})