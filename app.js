const debug = require('debug')('cbs:home');
const path = require('path');
const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');

const handleErrors = require('./server/handle-errors.js');
const inlineAndMinify = require('./server/inline-min.js');

const home = require('./server/home.js');

process.on('warning', (warning) => {
  debug(`Warning name: ${warning.name}`);
  debug(`Warning message: ${warning.message}`);
  debug(`Warning stack: ${warning.stack}`);
  process.exit(1);
});

const appName = 'APN Front Server';

debug('booting %s', appName);

const port = process.env.PORT || 4002;
const app = new Koa();
const router = new Router();

app.proxy = true;

app.use(logger());
if (process.env.NODE_ENV === 'development') {
  const serve = require('koa-static');
  app.use(serve(path.resolve(process.cwd(), 'public')));
}
app.use(handleErrors);
app.use(inlineAndMinify);

router.use('/', home.routes());

app.use(router.routes());

// Create HTTP server
const server = app.listen(port);

// Logging server error.
server.on('error', (error) => {
  debug(`Server error: %O`, error);
});

// Listening event handler
server.on('listening', () => {
  debug(`${appName} running on %o`, server.address());
});





