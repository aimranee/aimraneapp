"use strict";

// --- SET UP
var article = require('../model/article'); // --- ERROR


var _require = require('../util/error'),
    newError = _require.newError; // ==================================================================== GENERAL
// get the user document


function addArticle(body) {
  return regeneratorRuntime.async(function addArticle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log(body);
          _context.next = 4;
          return regeneratorRuntime.awrap(article.create(body));

        case 4:
          return _context.abrupt("return", _context.sent);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // get articles


function getArticles(page) {
  return regeneratorRuntime.async(function getArticles$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (!page) page = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(article.paginate({}, {
            page: page,
            limit: 12
          }));

        case 4:
          return _context2.abrupt("return", _context2.sent);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // get article by id


function getArticleById(id) {
  return regeneratorRuntime.async(function getArticleById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(article.findById(id));

        case 3:
          return _context3.abrupt("return", _context3.sent);

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // get article by id


function editArticleById(id, body) {
  return regeneratorRuntime.async(function editArticleById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(article.findByIdAndUpdate(id, body));

        case 3:
          return _context4.abrupt("return", _context4.sent);

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // delete article by id


function deleteArticleById(id) {
  return regeneratorRuntime.async(function deleteArticleById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(article.findByIdAndDelete(id));

        case 3:
          return _context5.abrupt("return", _context5.sent);

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

module.exports = {
  addArticle: addArticle,
  getArticles: getArticles,
  getArticleById: getArticleById,
  deleteArticleById: deleteArticleById,
  editArticleById: editArticleById
};