"use strict";

// SET UP
var centralData = require('../data/central');

var articleData = require('../data/article'); // ERROR


var _require = require('../util/error'),
    newError = _require.newError; // IMAGE


var multer = require('multer');

var sharp = require('sharp'); // IMAGE UPLOAD


var multerStorage = multer.memoryStorage(); //

var multerFilter = function multerFilter(req, file, cb) {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('Pas une image! Veuillez télécharger uniquement des images.', false);
  }
}; //


var upload = multer({
  fileFilter: multerFilter,
  storage: multerStorage
}); //

var uploadImage = upload.single('image'); //

function shapeImage(req, res, next) {
  return regeneratorRuntime.async(function shapeImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log(req.file);

          if (req.file) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.redirect(req.originalUrl));

        case 4:
          req.file.filename = "article-".concat(Date.now(), ".png");
          _context.next = 7;
          return regeneratorRuntime.awrap(sharp(req.file.buffer).resize(1200, 600).toFormat('jpg').jpeg({
            quality: 90
          }).toFile("".concat(__dirname, "/../../static/image/article/").concat(req.file.filename)));

        case 7:
          return _context.abrupt("return", next());

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // redirection


function addArticle(req, res, next) {
  var data, today;
  return regeneratorRuntime.async(function addArticle$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document

          _context2.next = 4;
          return regeneratorRuntime.awrap(centralData.getDocument(req.params.id));

        case 4:
          data.document = _context2.sent;
          // render the page
          res.status(200).render('central/article', {
            title: 'Ajouter un article | ' + today.getFullYear(),
            url: req.originalUrl,
            data: data
          });
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // redirection


function addArticleData(req, res, next) {
  var article;
  return regeneratorRuntime.async(function addArticleData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          req.body.image = req.file.filename;
          _context3.next = 4;
          return regeneratorRuntime.awrap(articleData.addArticle(req.body));

        case 4:
          article = _context3.sent;
          return _context3.abrupt("return", res.redirect(req.baseUrl + '/article/' + article.id));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // redirection


function getArticles(req, res, next) {
  var data, today;
  return regeneratorRuntime.async(function getArticles$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document

          _context4.next = 4;
          return regeneratorRuntime.awrap(centralData.getDocument(req.params.id));

        case 4:
          data.document = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(articleData.getArticles());

        case 7:
          data.document = _context4.sent;
          // render the page
          res.status(200).render('central/article', {
            title: 'Ajouter un article | ' + today.getFullYear(),
            url: req.originalUrl,
            data: data
          });
          _context4.next = 15;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

module.exports = {
  addArticle: addArticle,
  addArticleData: addArticleData,
  uploadImage: uploadImage,
  shapeImage: shapeImage,
  getArticles: getArticles
};