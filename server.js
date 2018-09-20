const express = require('express');

const pack = require('./package.json');

const app = express();

app.get('/', (req, res) => res.json({
  version: pack.version,
  message: `Welcome to Zee API v${pack.version}`,
}));

module.exports = app;
