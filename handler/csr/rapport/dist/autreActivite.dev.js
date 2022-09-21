"use strict";

// SET UP
var csrData = require('../../../data/csr/csr');

var autreActiviteData = require('../../../data/csr/rapport/autreActivite');

var _require = require('../util'),
    autreActiviteForm = _require.autreActiviteForm; // REDIRECT


function redirectTodata(req, res, next) {
  var document;
  return regeneratorRuntime.async(function redirectTodata$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(autreActiviteData.getAutreActiviteBySortie(req.params.sortie));

        case 3:
          document = _context.sent;

          if (!document) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.redirect(req.originalUrl + '/' + document.id));

        case 6:
          return _context.abrupt("return", next());

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", next(_context.t0));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // REDIRECT


function redirect(req, res, next) {
  return regeneratorRuntime.async(function redirect$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          return _context2.abrupt("return", res.redirect('..'));

        case 4:
          _context2.prev = 4;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", next(_context2.t0));

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 4]]);
} // FORM PAGE


function autreActivite(req, res, next) {
  var data, today, trimestre;
  return regeneratorRuntime.async(function autreActivite$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // variables
          data = {}, today = new Date(), trimestre = parseInt(req.params.trimestre); // get the document of the csr

          _context3.next = 4;
          return regeneratorRuntime.awrap(csrData.getDocument(req.params.id));

        case 4:
          data.document = _context3.sent;
          return _context3.abrupt("return", res.status(200).render('csr/rapport/addAutreActivite', {
            // title
            title: data.document.csr + ' | Autre activités | Trimestre ' + trimestre + ' | ' + today.getFullYear(),
            // url
            url: req.originalUrl,
            // trimestre
            trimestre: trimestre,
            // sortie
            sortie: req.params.sortie,
            // form
            form: autreActiviteForm,
            // data
            data: data
          }));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", next(_context3.t0));

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // GET


function getAutreActivite(req, res, next) {
  var data, today, trimestre;
  return regeneratorRuntime.async(function getAutreActivite$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          // variables
          data = {}, today = new Date(), trimestre = parseInt(req.params.trimestre); // get the document of the csr

          _context4.next = 4;
          return regeneratorRuntime.awrap(csrData.getDocument(req.params.id));

        case 4:
          data.document = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(autreActiviteData.getAutreActiviteById(req.params.autreActivite));

        case 7:
          data.autreActivite = _context4.sent;
          return _context4.abrupt("return", res.status(200).render('csr/rapport/addAutreActivite', {
            // title
            title: data.document.csr + ' | Autre activités | Trimestre ' + trimestre + ' | ' + today.getFullYear(),
            // url
            url: req.originalUrl,
            // trimestre
            trimestre: trimestre,
            // sortie
            sortie: req.params.sortie,
            // form
            form: autreActiviteForm,
            // data
            data: data
          }));

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", next(_context4.t0));

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // ADD


function addAutreActivite(req, res, next) {
  return regeneratorRuntime.async(function addAutreActivite$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(autreActiviteData.addAutreActivite(req.params.id, req.params.sortie, parseInt(req.params.trimestre), req.body));

        case 3:
          _context5.t0 = _context5.sent;
          _context5.t1 = {
            autreActivite: _context5.t0
          };
          _context5.t2 = {
            body: _context5.t1
          };
          res.locals = {
            sortie: _context5.t2
          };
          return _context5.abrupt("return", next());

        case 10:
          _context5.prev = 10;
          _context5.t3 = _context5["catch"](0);
          console.log(_context5.t3);
          return _context5.abrupt("return", next(_context5.t3));

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // EDIT


function editAutreActivite(req, res, next) {
  return regeneratorRuntime.async(function editAutreActivite$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(autreActiviteData.editAutreActiviteById(req.params.autreActivite, req.body));

        case 3:
          return _context6.abrupt("return", res.redirect(req.originalUrl));

        case 6:
          _context6.prev = 6;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          return _context6.abrupt("return", next(_context6.t0));

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // DELETE


function deleteAutreActivite(req, res, next) {
  return regeneratorRuntime.async(function deleteAutreActivite$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(autreActiviteData.deleteAutreActiviteById(res.locals.sortie.deleted.autreActivite));

        case 3:
          return _context7.abrupt("return", next());

        case 6:
          _context7.prev = 6;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          return _context7.abrupt("return", next(_context7.t0));

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // IGNORE


function ignoreAutreActivite(req, res, next) {
  return regeneratorRuntime.async(function ignoreAutreActivite$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(autreActiviteData.ignoreAutreActivite(req.params.id, req.params.trimestre, req.params.sortie));

        case 3:
          _context8.t0 = _context8.sent;
          _context8.t1 = {
            autreActivite: _context8.t0
          };
          _context8.t2 = {
            body: _context8.t1
          };
          res.locals = {
            sortie: _context8.t2
          };
          return _context8.abrupt("return", next());

        case 10:
          _context8.prev = 10;
          _context8.t3 = _context8["catch"](0);
          console.log(_context8.t3);
          return _context8.abrupt("return", next(_context8.t3));

        case 14:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // ---------- activity
// ADD ACTIVITY


function addActivity(req, res, next) {
  try {
    // edit body
    req.body = {
      $push: req.body
    };
    return next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
} // EDIT ACTIVITY


function editActivity(req, res, next) {
  return regeneratorRuntime.async(function editActivity$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return regeneratorRuntime.awrap(autreActiviteData.editActivityById(req.params.autreActivite, req.query.id, req.body));

        case 3:
          // notif
          req.flash('succ', 'Informations ajoutées avec succès'); // redirect

          return _context9.abrupt("return", res.redirect(req.baseUrl + '/' + req.params.id + '/trimestre/' + req.params.trimestre + '/sortie/' + req.params.sortie + '/autre-activite'));

        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          return _context9.abrupt("return", next(_context9.t0));

        case 11:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function deleteActivity(req, res, next) {
  return regeneratorRuntime.async(function deleteActivity$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return regeneratorRuntime.awrap(autreActiviteData.deleteActivityById(req.params.autreActivite, req.query.id));

        case 3:
          // notif
          req.flash('succ', 'Informations supprimées avec succès'); // redirect

          return _context10.abrupt("return", res.redirect(req.baseUrl + '/' + req.params.id + '/trimestre/' + req.params.trimestre + '/sortie/' + req.params.sortie + '/autre-activite'));

        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          return _context10.abrupt("return", next(_context10.t0));

        case 11:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // OUTPUT


module.exports = {
  redirect: redirect,
  redirectTodata: redirectTodata,
  autreActivite: autreActivite,
  addAutreActivite: addAutreActivite,
  getAutreActivite: getAutreActivite,
  editAutreActivite: editAutreActivite,
  deleteAutreActivite: deleteAutreActivite,
  ignoreAutreActivite: ignoreAutreActivite,
  // ---------- activity
  addActivity: addActivity,
  editActivity: editActivity,
  deleteActivity: deleteActivity
};