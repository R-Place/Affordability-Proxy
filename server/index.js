const express = require('express');
const path = require('path');

const proxy = express();
const port = 3000;

const { createProxyMiddleware } = require('http-proxy-middleware');

proxy.use(express.static('public'));
proxy.use('/:id', express.static(path.join(__dirname, 'public')));

proxy.use('/api/affordability',
  createProxyMiddleware({
    target: 'http://3.88.85.5:3003',
    changeOrigin: true,
  })
);

proxy.use('/api/affordability/:id',
  createProxyMiddleware({
    target: 'http://3.88.85.5:3003',
    changeOrigin: true,
  })
);
proxy.use('/api/similarhomes',
  createProxyMiddleware({
    target: 'http://18.216.126.142:80',
    changeOrigin: true,
  })
);

proxy.use('/api/addresses',
  createProxyMiddleware({
    target: 'http://54.176.5.242/',
    changeOrigin: true,
  })
);

// proxy.use('/api/addresses/:id=7',
//   createProxyMiddleware({
//     target: 'http://54.176.5.242/',
//     changeOrigin: true,
//   })
// );


proxy.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})