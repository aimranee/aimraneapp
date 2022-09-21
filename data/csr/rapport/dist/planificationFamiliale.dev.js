"use strict";

// SET UP
var planificationFamiliale = require('../../../model/csr/rapport/planificationFamiliale'); // ERROR


var _require = require('../../../util/error'),
    newError = _require.newError; // REDIRECT


function getPlanificationFamilialeBySortie(sortie) {
  return regeneratorRuntime.async(function getPlanificationFamilialeBySortie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(planificationFamiliale.findOne({
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


function getPlanificationFamilialeById(id) {
  return regeneratorRuntime.async(function getPlanificationFamilialeById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(planificationFamiliale.findById(id).select('-csr'));

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


function addPlanificationFamiliale(csr, sortie, trimestre, body) {
  var document;
  return regeneratorRuntime.async(function addPlanificationFamiliale$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // update the body
          body.csr = csr;
          body.trimestre = trimestre;
          body.sortie = sortie; // add document

          _context3.next = 6;
          return regeneratorRuntime.awrap(planificationFamiliale.create(body));

        case 6:
          document = _context3.sent;
          return _context3.abrupt("return", document.id);

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // EDIT


function editPlanificationFamilialeById(id, body) {
  var document;
  return regeneratorRuntime.async(function editPlanificationFamilialeById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(planificationFamiliale.findByIdAndUpdate(id, body));

        case 3:
          document = _context4.sent;
          return _context4.abrupt("return", document.id);

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // DELETE


function deletePlanificationFamilialeById(id) {
  return regeneratorRuntime.async(function deletePlanificationFamilialeById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(planificationFamiliale.findByIdAndDelete(id));

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
  getPlanificationFamilialeBySortie: getPlanificationFamilialeBySortie,
  addPlanificationFamiliale: addPlanificationFamiliale,
  getPlanificationFamilialeById: getPlanificationFamilialeById,
  editPlanificationFamilialeById: editPlanificationFamilialeById,
  deletePlanificationFamilialeById: deletePlanificationFamilialeById
};