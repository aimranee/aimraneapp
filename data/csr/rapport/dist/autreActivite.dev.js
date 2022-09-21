"use strict";

// SET UP
var autreActivite = require('../../../model/csr/rapport/autreActivite'); // ERROR


var _require = require('../../../util/error'),
    newError = _require.newError; // REDIRECT


function getAutreActiviteBySortie(sortie) {
  return regeneratorRuntime.async(function getAutreActiviteBySortie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(autreActivite.findOne({
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
} // ADD


function addAutreActivite(csr, sortie, trimestre, body) {
  var document;
  return regeneratorRuntime.async(function addAutreActivite$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // update the body
          body.csr = csr;
          body.trimestre = trimestre;
          body.sortie = sortie;
          body.ignore = false; // add document

          _context2.next = 7;
          return regeneratorRuntime.awrap(autreActivite.create(body));

        case 7:
          document = _context2.sent;
          return _context2.abrupt("return", document.id);

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // GET


function getAutreActiviteById(id) {
  return regeneratorRuntime.async(function getAutreActiviteById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(autreActivite.findById(id).select('-csr'));

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
} // EDIT


function editAutreActiviteById(id, body) {
  return regeneratorRuntime.async(function editAutreActiviteById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          body.ignore = false; // edit document

          _context4.next = 4;
          return regeneratorRuntime.awrap(autreActivite.findByIdAndUpdate(id, body));

        case 4:
          return _context4.abrupt("return", _context4.sent);

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


function deleteAutreActiviteById(id) {
  return regeneratorRuntime.async(function deleteAutreActiviteById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(autreActivite.findByIdAndDelete(id));

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
} // IGNORE


function ignoreAutreActivite(csr, trimestre, sortie) {
  var doc;
  return regeneratorRuntime.async(function ignoreAutreActivite$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(autreActivite.findOneAndUpdate({
            csr: csr,
            trimestre: trimestre,
            sortie: sortie
          }, {
            ignore: true,
            activity: []
          }, {
            upsert: true,
            "new": true,
            setDefaultsOnInsert: true
          }));

        case 3:
          doc = _context6.sent;
          return _context6.abrupt("return", doc.id);

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // ------------ ACTIVITY
// EDIT ACTIVITY


function editActivityById(id, subId, body) {
  var document, index, i, element;
  return regeneratorRuntime.async(function editActivityById$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(autreActivite.findById(id));

        case 3:
          document = _context7.sent;

          // get the subdoc
          for (i = 0; i < document.activity.length; i++) {
            element = document.activity[i];
            if (element.id == subId) index = i;
          } // updating the subdoc


          document.activity[index].type = body.activity.type;
          document.activity[index].typeBeneficier = body.activity.typeBeneficier;
          document.activity[index].beneficier = body.activity.beneficier;
          document.activity[index].observation = body.activity.observation; // save the document

          _context7.next = 11;
          return regeneratorRuntime.awrap(document.save());

        case 11:
          return _context7.abrupt("return", _context7.sent);

        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 18:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 14]]);
} // DELETE ACTIVITY


function deleteActivityById(id, subId, body) {
  var document, index, i, element;
  return regeneratorRuntime.async(function deleteActivityById$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(autreActivite.findById(id));

        case 3:
          document = _context8.sent;

          // get the subdoc
          for (i = 0; i < document.activity.length; i++) {
            element = document.activity[i];
            if (element.id == subId) index = i;
          } // updating the subdoc


          document.activity.splice(index, 1); // save the document

          _context8.next = 8;
          return regeneratorRuntime.awrap(document.save());

        case 8:
          return _context8.abrupt("return", _context8.sent);

        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // ----------------------
// GET BY PROVINCE


function getAutreActiviteByProvince(province) {
  var today, result, query, i, element;
  return regeneratorRuntime.async(function getAutreActiviteByProvince$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          // variable
          today = new Date(), result = []; // get query

          _context9.next = 4;
          return regeneratorRuntime.awrap(autreActivite.find({
            year: today.getFullYear()
          }).populate({
            path: 'csr',
            select: '-email'
          }));

        case 4:
          query = _context9.sent;

          // get only result fo the province
          for (i = 0; i < query.length; i++) {
            element = query[i];

            if (element.csr.province === province) {
              result.push(element);
            }
          }

          return _context9.abrupt("return", result);

        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 13:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // GET BY REGION


function getAutreActiviteByRegion(region) {
  var today, result, query, i, element;
  return regeneratorRuntime.async(function getAutreActiviteByRegion$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          // variable
          today = new Date(), result = []; // get query

          _context10.next = 4;
          return regeneratorRuntime.awrap(autreActivite.find({
            year: today.getFullYear()
          }).populate({
            path: 'csr',
            select: '-email'
          }));

        case 4:
          query = _context10.sent;

          // get only result fo the region
          for (i = 0; i < query.length; i++) {
            element = query[i];

            if (element.csr.region === region) {
              result.push(element);
            }
          }

          return _context10.abrupt("return", result);

        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 13:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // OUTPUT


module.exports = {
  getAutreActiviteBySortie: getAutreActiviteBySortie,
  addAutreActivite: addAutreActivite,
  getAutreActiviteById: getAutreActiviteById,
  editAutreActiviteById: editAutreActiviteById,
  deleteAutreActiviteById: deleteAutreActiviteById,
  ignoreAutreActivite: ignoreAutreActivite,
  // ------------ ACTIVITY
  editActivityById: editActivityById,
  deleteActivityById: deleteActivityById,
  // -------------
  getAutreActiviteByProvince: getAutreActiviteByProvince,
  getAutreActiviteByRegion: getAutreActiviteByRegion
};