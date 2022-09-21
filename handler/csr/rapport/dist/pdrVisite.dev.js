"use strict";

// SET UP
var csrData = require('../../../data/csr/csr');

var pdrVisiteData = require('../../../data/csr/rapport/pdrVisite');

var programmeData = require('../../../data/csr/planAction/programme');

var _require = require('../util'),
    pdrVisiteForm = _require.pdrVisiteForm; // pdrVisite


function pdrVisite(req, res, next) {
  var data, today, trimestre;
  return regeneratorRuntime.async(function pdrVisite$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // variables
          data = {}, today = new Date(), trimestre = parseInt(req.params.trimestre); // get the document of the csr

          _context.next = 4;
          return regeneratorRuntime.awrap(csrData.getDocument(req.params.id));

        case 4:
          data.document = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(programmeData.getProgrammeByCsr(req.params.id));

        case 7:
          data.pdr = _context.sent;
          return _context.abrupt("return", res.status(200).render('csr/rapport/addPdrVisite', {
            // title
            title: data.document.csr + ' | Point de rassemblement (PDR) visité | Trimestre ' + trimestre + ' | ' + today.getFullYear(),
            // url
            url: req.originalUrl,
            // trimestre
            trimestre: trimestre,
            // sortie
            sortie: req.params.sortie,
            // form
            form: pdrVisiteForm,
            // data
            data: data
          }));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", next(_context.t0));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // ADD pdrVisite


function addPdrVisite(req, res, next) {
  return regeneratorRuntime.async(function addPdrVisite$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(pdrVisiteData.addPdrVisite(req.params.id, req.params.sortie, parseInt(req.params.trimestre), req.body));

        case 3:
          _context2.t0 = _context2.sent;
          _context2.t1 = {
            pdrVisite: _context2.t0
          };
          _context2.t2 = {
            body: _context2.t1
          };
          res.locals = {
            sortie: _context2.t2
          };
          return _context2.abrupt("return", next());

        case 10:
          _context2.prev = 10;
          _context2.t3 = _context2["catch"](0);
          console.log(_context2.t3);
          return _context2.abrupt("return", next(_context2.t3));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // GET PdrVisite


function getPdrVisite(req, res, next) {
  var data, today, trimestre;
  return regeneratorRuntime.async(function getPdrVisite$(_context3) {
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
          _context3.next = 7;
          return regeneratorRuntime.awrap(pdrVisiteData.getPdrVisiteById(req.params.pdrVisite));

        case 7:
          data.pdrVisite = _context3.sent;
          _context3.next = 10;
          return regeneratorRuntime.awrap(programmeData.getProgrammeByCsr(req.params.id));

        case 10:
          data.pdr = _context3.sent;
          return _context3.abrupt("return", res.status(200).render('csr/rapport/addPdrVisite', {
            // title
            title: data.document.csr + ' | Point de rassemblement (PDR) visité | Trimestre ' + trimestre + ' | ' + today.getFullYear(),
            // url
            url: req.originalUrl,
            // trimestre
            trimestre: trimestre,
            // sortie
            sortie: req.params.sortie,
            // form
            form: pdrVisiteForm,
            // data
            data: data
          }));

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", next(_context3.t0));

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 14]]);
} // EDIT


function editPdrVisite(req, res, next) {
  return regeneratorRuntime.async(function editPdrVisite$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(pdrVisiteData.editPdrVisiteById(req.params.pdrVisite, req.body));

        case 3:
          return _context4.abrupt("return", res.redirect(req.originalUrl));

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", next(_context4.t0));

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // REDIRECT


function redirectTodata(req, res, next) {
  var document;
  return regeneratorRuntime.async(function redirectTodata$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(pdrVisiteData.getPdrVisiteBySortie(req.params.sortie));

        case 3:
          document = _context5.sent;

          if (!document) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", res.redirect(req.originalUrl + '/' + document.id));

        case 6:
          return _context5.abrupt("return", next());

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", next(_context5.t0));

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // DELETE 


function deletePdrVisite(req, res, next) {
  return regeneratorRuntime.async(function deletePdrVisite$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(pdrVisiteData.deletePdrVisiteById(res.locals.sortie.deleted.pdrVisite));

        case 3:
          return _context6.abrupt("return", next());

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
} // OUTPUT


module.exports = {
  pdrVisite: pdrVisite,
  addPdrVisite: addPdrVisite,
  getPdrVisite: getPdrVisite,
  editPdrVisite: editPdrVisite,
  redirectTodata: redirectTodata,
  deletePdrVisite: deletePdrVisite
};