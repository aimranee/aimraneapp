"use strict";

// --- SET UP
var mongoose = require('mongoose');

var _require = require('./conf'),
    db = _require.db; // --- CONNECT TO THE CLOUD


mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(function () {
  console.log('database connected succefully...');
})["catch"](function (err) {
  console.log(err);
});