"use strict";

// SET UP
var santeInfantile = require('../../../model/csr/rapport/santeInfantile'); // ERROR


var _require = require('../../../util/error'),
    newError = _require.newError; // GET


function getSanteInfantileBySortie(sortie) {
  return regeneratorRuntime.async(function getSanteInfantileBySortie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(santeInfantile.findOne({
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
} // GET;


function getSanteInfantileById(id) {
  return regeneratorRuntime.async(function getSanteInfantileById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(santeInfantile.findById(id).select('-csr'));

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


function addSanteInfantile(csr, sortie, trimestre, body) {
  var document;
  return regeneratorRuntime.async(function addSanteInfantile$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // update the body
          body.csr = csr;
          body.trimestre = trimestre;
          body.sortie = sortie;
          body.enfantPrisesCharge = parseInt(body.vitamineA) + parseInt(body.vitamineD) + parseInt(body.enfantsAvecInsuffisancePonderale) + parseInt(body.enfantsAvecRetardCroissance) + parseInt(body.diarrhe) + parseInt(body.ira) + parseInt(body.vaccination.pentavalent) + parseInt(body.vaccination.rr) + parseInt(body.vaccination.bcg); // add document

          _context3.next = 7;
          return regeneratorRuntime.awrap(santeInfantile.create(body));

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


function editSanteInfantileById(id, body) {
  var document;
  return regeneratorRuntime.async(function editSanteInfantileById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          body.enfantPrisesCharge = parseInt(body.vitamineA) + parseInt(body.vitamineD) + parseInt(body.enfantsAvecInsuffisancePonderale) + parseInt(body.enfantsAvecRetardCroissance) + parseInt(body.diarrhe) + parseInt(body.ira) + parseInt(body.vaccination.pentavalent) + parseInt(body.vaccination.rr) + parseInt(body.vaccination.bcg); // edit document

          _context4.next = 4;
          return regeneratorRuntime.awrap(santeInfantile.findByIdAndUpdate(id, body));

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


function deleteSanteInfantileById(id) {
  return regeneratorRuntime.async(function deleteSanteInfantileById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(santeInfantile.findByIdAndDelete(id));

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
  getSanteInfantileBySortie: getSanteInfantileBySortie,
  addSanteInfantile: addSanteInfantile,
  getSanteInfantileById: getSanteInfantileById,
  editSanteInfantileById: editSanteInfantileById,
  deleteSanteInfantileById: deleteSanteInfantileById
};