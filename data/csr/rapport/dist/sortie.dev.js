"use strict";

// SET UP
var sortie = require('../../../model/csr/rapport/sortie'); // ERROR


var _require = require('../../../util/error'),
    newError = _require.newError; // GET


function getSortieById(id) {
  return regeneratorRuntime.async(function getSortieById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(sortie.findById(id).select('-csr').populate({
            path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire consultationMedical detectionPrecoceCancer maladieDepiste autreActivite',
            populate: {
              path: 'pdrVisite'
            }
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
} // NEW


function newSortie(csr, trimestre) {
  var document;
  return regeneratorRuntime.async(function newSortie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(sortie.create({
            csr: csr,
            trimestre: trimestre
          }));

        case 3:
          document = _context2.sent;
          return _context2.abrupt("return", document.id);

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
} // GET


function getSortieSubmitedById(id) {
  return regeneratorRuntime.async(function getSortieSubmitedById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(sortie.findOne({
            _id: id,
            submit: true
          }));

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
} // SUBMIT


function submitSortieById(id) {
  return regeneratorRuntime.async(function submitSortieById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(sortie.findByIdAndUpdate(id, {
            submit: true
          }));

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
} // ADD


function addDataToSortie(id, body) {
  var document;
  return regeneratorRuntime.async(function addDataToSortie$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(sortie.findByIdAndUpdate(id, body));

        case 3:
          document = _context5.sent;
          return _context5.abrupt("return", document.id);

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // SUBMIT


function deleteSortieById(id) {
  return regeneratorRuntime.async(function deleteSortieById$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(sortie.findByIdAndDelete(id));

        case 3:
          return _context6.abrupt("return", _context6.sent);

        case 6:
          _context6.prev = 6;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // OUTPUT


module.exports = {
  getSortieById: getSortieById,
  newSortie: newSortie,
  getSortieSubmitedById: getSortieSubmitedById,
  addDataToSortie: addDataToSortie,
  submitSortieById: submitSortieById,
  deleteSortieById: deleteSortieById
};