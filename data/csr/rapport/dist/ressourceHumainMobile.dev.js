"use strict";

// SET UP
var ressourceHumainMobile = require('../../../model/csr/rapport/ressourceHumainMobile'); // ERROR


var _require = require('../../../util/error'),
    newError = _require.newError; // GET


function getRessourceHumainMobileById(id) {
  return regeneratorRuntime.async(function getRessourceHumainMobileById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(ressourceHumainMobile.findById(id).select('-csr'));

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
}

function getRessourceHumainMobileBySortie(sortie) {
  return regeneratorRuntime.async(function getRessourceHumainMobileBySortie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(ressourceHumainMobile.findOne({
            sortie: sortie
          }));

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


function addRessourceHumainMobile(csr, sortie, trimestre, body) {
  var document;
  return regeneratorRuntime.async(function addRessourceHumainMobile$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // update the body
          body.csr = csr;
          body.trimestre = trimestre;
          body.sortie = sortie; // add document

          _context3.next = 6;
          return regeneratorRuntime.awrap(ressourceHumainMobile.create(body));

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


function editRessourceHumainMobileById(id, body) {
  var document;
  return regeneratorRuntime.async(function editRessourceHumainMobileById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(ressourceHumainMobile.findByIdAndUpdate(id, body));

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


function deleteRessourceHumainMobileById(id) {
  return regeneratorRuntime.async(function deleteRessourceHumainMobileById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(ressourceHumainMobile.findByIdAndDelete(id));

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
  getRessourceHumainMobileBySortie: getRessourceHumainMobileBySortie,
  addRessourceHumainMobile: addRessourceHumainMobile,
  getRessourceHumainMobileById: getRessourceHumainMobileById,
  editRessourceHumainMobileById: editRessourceHumainMobileById,
  deleteRessourceHumainMobileById: deleteRessourceHumainMobileById
};