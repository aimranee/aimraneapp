"use strict";

// SET UP
var fs = require('fs');

var centralData = require('../../data/central');

var articleData = require('../../data/article'); // ERROR


var _require = require('../../util/error'),
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

          if (req.file) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.redirect(req.originalUrl));

        case 3:
          req.file.filename = "article-".concat(Date.now(), ".png");
          _context.next = 6;
          return regeneratorRuntime.awrap(sharp(req.file.buffer).resize(1200, 600).toFormat('jpg').jpeg({
            quality: 90
          }).toFile("".concat(__dirname, "/../../static/image/article/").concat(req.file.filename)));

        case 6:
          return _context.abrupt("return", next());

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
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
          res.status(200).render('central/addArticle', {
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
          return _context3.abrupt("return", res.redirect(req.baseUrl + '/' + req.params.id + '/article/' + article.id));

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
          return regeneratorRuntime.awrap(articleData.getArticles(parseInt(req.query.page)));

        case 7:
          data.articles = _context4.sent;
          return _context4.abrupt("return", res.status(200).render('central/articles', {
            title: 'Articles | ' + today.getFullYear(),
            url: req.originalUrl,
            data: data
          }));

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
} // redirection


function getArticle(req, res, next) {
  var data, today;
  return regeneratorRuntime.async(function getArticle$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document

          _context5.next = 4;
          return regeneratorRuntime.awrap(centralData.getDocument(req.params.id));

        case 4:
          data.document = _context5.sent;
          _context5.next = 7;
          return regeneratorRuntime.awrap(articleData.getArticleById(req.params.article));

        case 7:
          data.article = _context5.sent;
          return _context5.abrupt("return", res.status(200).render('central/article', {
            title: data.article.title + ' | ' + today.getFullYear(),
            url: req.originalUrl,
            data: data
          }));

        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // redirection


function deleteArticle(req, res, next) {
  var article;
  return regeneratorRuntime.async(function deleteArticle$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(articleData.deleteArticleById(req.params.article));

        case 3:
          article = _context6.sent;
          // delete image
          fs.unlink("".concat(__dirname, "/../../static/image/article/").concat(article.image), function (error) {
            if (error) {
              console.log(error);
              return next(newError(500, "quelque chose s'est mal passé"));
            }
          });
          req.flash('succ', "L'article a été supprimé avec succès."); // render the page

          return _context6.abrupt("return", res.redirect(req.baseUrl + '/' + req.params.id + '/articles'));

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          return _context6.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // redirection


function editArticle(req, res, next) {
  var data, today;
  return regeneratorRuntime.async(function editArticle$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document

          _context7.next = 4;
          return regeneratorRuntime.awrap(centralData.getDocument(req.params.id));

        case 4:
          data.document = _context7.sent;
          _context7.next = 7;
          return regeneratorRuntime.awrap(articleData.getArticleById(req.params.article));

        case 7:
          data.article = _context7.sent;
          return _context7.abrupt("return", res.status(200).render('central/editArticle', {
            title: data.article.title + ' | ' + today.getFullYear(),
            url: req.originalUrl,
            data: data
          }));

        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          return _context7.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // redirection


function editArticleData(req, res, next) {
  var data, today, article;
  return regeneratorRuntime.async(function editArticleData$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document

          fs.unlink("".concat(__dirname, "/../../static/image/article/").concat(req.query.image), function (error) {
            if (error) {
              console.log(error);
              return next(newError(500, "quelque chose s'est mal passé"));
            }
          });
          req.body.image = req.file.filename;
          _context8.next = 6;
          return regeneratorRuntime.awrap(articleData.editArticleById(req.params.article, req.body));

        case 6:
          article = _context8.sent;
          return _context8.abrupt("return", res.redirect(req.baseUrl + '/' + req.params.id + '/article/' + article.id));

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          return _context8.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 14:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

module.exports = {
  addArticle: addArticle,
  addArticleData: addArticleData,
  uploadImage: uploadImage,
  shapeImage: shapeImage,
  getArticles: getArticles,
  getArticle: getArticle,
  deleteArticle: deleteArticle,
  editArticle: editArticle,
  editArticleData: editArticleData
};