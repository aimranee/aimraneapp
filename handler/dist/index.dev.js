"use strict";

// DATA
var articleData = require('../data/article'); // ERROR


var _require = require('../util/error'),
    newError = _require.newError; // REDIRECTION


function redirection(req, res, next) {
  try {
    // redirection
    return res.status(200).redirect('/');
  } catch (error) {
    console.log(error);
    return next(newError(500, "quelque chose s'est mal passé"));
  }
} // LANDING PAGE


function landingPage(req, res, next) {
  var data;
  return regeneratorRuntime.async(function landingPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // get data
          data = {}; // get articles

          _context.next = 4;
          return regeneratorRuntime.awrap(articleData.getArticles(parseInt(req.query.page)));

        case 4:
          data.articles = _context.sent;
          // get current user
          data.user = req.cookies.welcome ? true : false; // render page

          return _context.abrupt("return", res.status(200).render('index/landingPage', {
            title: 'Plateforme nationale de la santé mobile',
            data: data
          }));

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
} // LANDING PAGE


function cms(req, res, next) {
  var data;
  return regeneratorRuntime.async(function cms$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // get data
          data = {}; // get articles

          _context2.next = 4;
          return regeneratorRuntime.awrap(articleData.getArticles(parseInt(req.query.page)));

        case 4:
          data.articles = _context2.sent;
          // get current user
          data.user = req.cookies.welcome ? true : false; // render page

          return _context2.abrupt("return", res.status(200).render('index/cms', {
            title: 'Plateforme nationale de la santé mobile',
            data: data
          }));

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // SIGN IN


function signIn(req, res, next) {
  try {
    // render page
    return res.status(200).render('./index/signIn', {
      title: 'Se connecter',
      url: req.originalUrl
    });
  } catch (error) {
    console.log(error);
    return next(newError(500, "quelque chose s'est mal passé"));
  }
} // ARTICLE


function article(req, res, next) {
  var data;
  return regeneratorRuntime.async(function article$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // get data
          data = {}; // get article

          _context3.next = 4;
          return regeneratorRuntime.awrap(articleData.getArticleById(req.params.article));

        case 4:
          data.article = _context3.sent;
          // get current user
          data.user = req.cookies.welcome ? true : false; // render page

          return _context3.abrupt("return", res.status(200).render('index/article', {
            title: 'Plateforme nationale de la santé mobile | ' + data.article.title,
            data: data
          }));

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

module.exports = {
  redirection: redirection,
  landingPage: landingPage,
  signIn: signIn,
  article: article,
  cms: cms
};