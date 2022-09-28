require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const api = require('./api');
const createFakeData = require('./createFakeData');

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    createFakeData();
  })
  .catch((e) => {
    console.log(e);
  });

const app = new Koa();
const router = new Router();

// set router
router.use('/api', api.routes());

// set body parser
app.use(bodyParser());

// apply router
app.use(router.routes()).use(router.allowedMethods());

// listen
const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
