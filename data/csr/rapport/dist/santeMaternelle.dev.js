"use strict";

// SET UP
var santeMaternelle = require('../../../model/csr/rapport/santeMaternelle'); // ERROR


var _require = require('../../../util/error'),
    newError = _require.newError;

function getSanteMaternelleBySortie(sortie) {
  return regeneratorRuntime.async(function getSanteMaternelleBySortie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(santeMaternelle.findOne({
            sortie: sortie
          }));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // GET


function getSanteMaternelleById(id) {
  return regeneratorRuntime.async(function getSanteMaternelleById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(santeMaternelle.findById(id).select('-csr'));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // ADD


function addSanteMaternelle(csr, sortie, trimestre, body) {
  var document;
  return regeneratorRuntime.async(function addSanteMaternelle$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // update the body
          body.csr = csr;
          body.trimestre = trimestre;
          body.sortie = sortie;
          body.femmePriseCharge = parseInt(body.autreConsultation) + parseInt(body.garDepiste) + parseInt(body.femmeExaminePostNatal) + parseInt(body.vat) + parseInt(body.cpn.nouvelleInscrite.t1) + parseInt(body.cpn.nouvelleInscrite.t2) + parseInt(body.cpn.nouvelleInscrite.t3) + parseInt(body.cpn.ancienneInscrite.t1) + parseInt(body.cpn.ancienneInscrite.t2) + parseInt(body.cpn.ancienneInscrite.t3); // edit document
          // add document

          _context3.next = 7;
          return regeneratorRuntime.awrap(santeMaternelle.create(body));

        case 7:
          document = _context3.sent;
          return _context3.abrupt("return", document.id);

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // EDIT


function editSanteMaternelleById(id, body) {
  var document;
  return regeneratorRuntime.async(function editSanteMaternelleById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          body.femmePriseCharge = parseInt(body.autreConsultation) + parseInt(body.garDepiste) + parseInt(body.femmeExaminePostNatal) + parseInt(body.vat) + parseInt(body.cpn.nouvelleInscrite.t1) + parseInt(body.cpn.nouvelleInscrite.t2) + parseInt(body.cpn.nouvelleInscrite.t3) + parseInt(body.cpn.ancienneInscrite.t1) + parseInt(body.cpn.ancienneInscrite.t2) + parseInt(body.cpn.ancienneInscrite.t3); // edit document

          _context4.next = 4;
          return regeneratorRuntime.awrap(santeMaternelle.findByIdAndUpdate(id, body));

        case 4:
          document = _context4.sent;
          return _context4.abrupt("return", document.id);

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // DELETE


function deleteSanteMaternelleById(id) {
  return regeneratorRuntime.async(function deleteSanteMaternelleById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(santeMaternelle.findByIdAndDelete(id));

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
} // OUTPUT


module.exports = {
  getSanteMaternelleBySortie: getSanteMaternelleBySortie,
  addSanteMaternelle: addSanteMaternelle,
  getSanteMaternelleById: getSanteMaternelleById,
  editSanteMaternelleById: editSanteMaternelleById,
  deleteSanteMaternelleById: deleteSanteMaternelleById
};