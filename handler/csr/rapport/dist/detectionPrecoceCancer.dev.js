"use strict";

// SET UP
var csrData = require('../../../data/csr/csr');

var detectionPrecoceCancerData = require('../../../data/csr/rapport/detectionPrecoceCancer');

var _require = require('../util'),
    detectionPrecoceCancerForm = _require.detectionPrecoceCancerForm; // REDIRECT


function redirectTodata(req, res, next) {
  var document;
  return regeneratorRuntime.async(function redirectTodata$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(detectionPrecoceCancerData.getDetectionPrecoceCancerBySortie(req.params.sortie));

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
} // FORM PAGE


function detectionPrecoceCancer(req, res, next) {
  var data, today, trimestre;
  return regeneratorRuntime.async(function detectionPrecoceCancer$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // variables
          data = {}, today = new Date(), trimestre = parseInt(req.params.trimestre); // get the document of the csr

          _context2.next = 4;
          return regeneratorRuntime.awrap(csrData.getDocument(req.params.id));

        case 4:
          data.document = _context2.sent;
          return _context2.abrupt("return", res.status(200).render('csr/rapport/addDetectionPrecoceCancer', {
            // title
            title: data.document.csr + ' | Consultations m??dicales | Trimestre ' + trimestre + ' | ' + today.getFullYear(),
            // url
            url: req.originalUrl,
            // trimestre
            trimestre: trimestre,
            // sortie
            sortie: req.params.sortie,
            // form
            form: detectionPrecoceCancerForm,
            // data
            data: data
          }));

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", next(_context2.t0));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // GET


function getDetectionPrecoceCancer(req, res, next) {
  var data, today, trimestre;
  return regeneratorRuntime.async(function getDetectionPrecoceCancer$(_context3) {
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
          return regeneratorRuntime.awrap(detectionPrecoceCancerData.getDetectionPrecoceCancerById(req.params.detectionPrecoceCancer));

        case 7:
          data.detectionPrecoceCancer = _context3.sent;
          return _context3.abrupt("return", res.status(200).render('csr/rapport/addDetectionPrecoceCancer', {
            // title
            title: data.document.csr + ' | Consultations m??dicales | Trimestre ' + trimestre + ' | ' + today.getFullYear(),
            // url
            url: req.originalUrl,
            // trimestre
            trimestre: trimestre,
            // sortie
            sortie: req.params.sortie,
            // form
            form: detectionPrecoceCancerForm,
            // data
            data: data
          }));

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", next(_context3.t0));

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // ADD


function addDetectionPrecoceCancer(req, res, next) {
  return regeneratorRuntime.async(function addDetectionPrecoceCancer$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(detectionPrecoceCancerData.addDetectionPrecoceCancer(req.params.id, req.params.sortie, parseInt(req.params.trimestre), req.body));

        case 3:
          _context4.t0 = _context4.sent;
          _context4.t1 = {
            detectionPrecoceCancer: _context4.t0
          };
          _context4.t2 = {
            body: _context4.t1
          };
          res.locals = {
            sortie: _context4.t2
          };
          return _context4.abrupt("return", next());

        case 10:
          _context4.prev = 10;
          _context4.t3 = _context4["catch"](0);
          console.log(_context4.t3);
          return _context4.abrupt("return", next(_context4.t3));

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // EDIT


function editDetectionPrecoceCancer(req, res, next) {
  return regeneratorRuntime.async(function editDetectionPrecoceCancer$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(detectionPrecoceCancerData.editDetectionPrecoceCancerById(req.params.detectionPrecoceCancer, req.body));

        case 3:
          return _context5.abrupt("return", res.redirect(req.originalUrl));

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", next(_context5.t0));

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // DELETE


function deleteDetectionPrecoceCancer(req, res, next) {
  return regeneratorRuntime.async(function deleteDetectionPrecoceCancer$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(detectionPrecoceCancerData.deleteDetectionPrecoceCancerById(res.locals.sortie.deleted.detectionPrecoceCancer));

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
  redirectTodata: redirectTodata,
  detectionPrecoceCancer: detectionPrecoceCancer,
  addDetectionPrecoceCancer: addDetectionPrecoceCancer,
  getDetectionPrecoceCancer: getDetectionPrecoceCancer,
  editDetectionPrecoceCancer: editDetectionPrecoceCancer,
  deleteDetectionPrecoceCancer: deleteDetectionPrecoceCancer
};