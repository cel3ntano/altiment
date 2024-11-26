const { createServer } = require('http');
const next = require('next');

const isDevMode = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextjsApp = next({ dev: isDevMode });
const nextjsRequestHandler = nextjsApp.getRequestHandler();

nextjsApp
  .prepare()
  .then(() => {
    createServer((req, res) => {
      nextjsRequestHandler(req, res);
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Server running on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
