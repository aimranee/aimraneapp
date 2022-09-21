"use strict";

// --- SET UP
var firebase = require('firebase/app');

require('firebase/auth');

var _require = require('../conf'),
    firebaseConfig = _require.firebaseConfig;

var db = firebase.initializeApp(firebaseConfig);

var jwt = require('../util/jwt');

var _require2 = require('../util/error'),
    newError = _require2.newError; // authentication


function authentication(req, res, next) {
  try {
    db.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then(function (userCredential) {
      // get the user
      res.locals.user = userCredential.user; // sign out

      db.auth().signOut();
      return next();
    })["catch"](function (error) {
      console.log(error);
      return next(newError(400, 'mot de passe ou e-mail incorrect'));
    });
  } catch (error) {
    return next(newError(500, 'quelque chose s\'est mal passé'));
  }
} // send new password


function newPasswordEmail(req, res, next) {
  try {
    db.auth().sendPasswordResetEmail(req.body.email).then(function () {
      return res.status(200).render('./index/emailSent', {
        title: 'E-mail envoyé avec succès',
        url: req.originalUrl
      });
    })["catch"](function (error) {
      console.log(error);
      return next(newError(400, 'e-mail incorrect'));
    });
  } catch (error) {
    return next(newError(500, 'quelque chose s\'est mal passé'));
  }
} // generate a cookie


function cookie(req, res, next) {
  var token;
  return regeneratorRuntime.async(function cookie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(jwt.creatTokenById(res.locals.user.uid));

        case 3:
          token = _context.sent;
          res.cookie('welcome', token, jwt.cookieOption);
          res.cookie('baseUrl', getBaseUrl(res.locals.user.displayName)); // redirection

          return _context.abrupt("return", res.redirect("/".concat(getBaseUrl(res.locals.user.displayName), "/").concat(res.locals.user.uid)));

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", next(newError(500, 'quelque chose s\'est mal passé')));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // protector


function protector(req, res, next) {
  var id;
  return regeneratorRuntime.async(function protector$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (req.cookies.welcome) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.redirect('/sign-in'));

        case 3:
          if (!(req.cookies.baseUrl != req.baseUrl.slice(1))) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", res.redirect('/' + req.cookies.baseUrl));

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(jwt.getIdByToken(req.cookies.welcome));

        case 7:
          id = _context2.sent;

          if (!(id != req.params.id)) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", res.redirect('/' + req.cookies.baseUrl));

        case 10:
          return _context2.abrupt("return", next());

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.redirect('/sign-out'));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 13]]);
} // sign protect


function signProtector(req, res, next) {
  var id;
  return regeneratorRuntime.async(function signProtector$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;

          if (req.cookies.welcome) {
            _context3.next = 3;
            break;
          }

          return _context3.abrupt("return", next());

        case 3:
          _context3.next = 5;
          return regeneratorRuntime.awrap(jwt.getIdByToken(req.cookies.welcome));

        case 5:
          id = _context3.sent;
          return _context3.abrupt("return", res.redirect("".concat(req.cookies.baseUrl, "/").concat(id)));

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.redirect('/sign-out'));

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // sign out


function signOut(req, res, next) {
  try {
    // clear all cookies
    for (var key in req.cookies) {
      res.clearCookie("".concat(key));
    } // redirect to sign in


    return res.redirect('/sign-in');
  } catch (error) {
    return next(newError(500, 'quelque chose s\'est mal passé'));
  }
}

function getBaseUrl(displayName) {
  try {
    if (displayName == 'c') return 'cs';
    if (displayName == 'r') return 'region';
    if (displayName == 'p') return 'province';
    if (displayName == 'a') return 'centre';
  } catch (error) {
    throw newError(500, 'quelque chose s\'est mal passé');
  }
} // // get the redirection url
// function redirectUrl(req, res, next) {
// 	try {
//         // get the object
//         const dataObj = { redirectionUrl: `/${getBaseUrl(res.local.user.displayName)}/${res.local.user.uid}`}
// 		// redirect to sign in
// 		return res.send(dataObj);
// 	} catch (error) {
//         return next(newError(500, 'quelque chose s\'est mal passé'));
// 	}
// }


module.exports = {
  authentication: authentication,
  cookie: cookie,
  protector: protector,
  signProtector: signProtector,
  signOut: signOut,
  newPasswordEmail: newPasswordEmail
};