"use strict";

// --- SET UP
var rapport = require('../../../model/csr/rapport/rapport'); // --- ERROR


var _require = require('../../../util/error'),
    newError = _require.newError; // ADD


function addDataToTrimestre(csr, trimestre, body) {
  var today, document;
  return regeneratorRuntime.async(function addDataToTrimestre$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // update the body
          today = new Date(); // create a document

          _context.next = 4;
          return regeneratorRuntime.awrap(rapport.findOneAndUpdate({
            csr: csr,
            year: today.getFullYear(),
            trimestre: trimestre
          }, body, {
            upsert: true,
            "new": true,
            setDefaultsOnInsert: true
          }));

        case 4:
          document = _context.sent;
          return _context.abrupt("return", document.id);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // GET


function getTrimestreByCsr(csr, trimestre) {
  var today;
  return regeneratorRuntime.async(function getTrimestreByCsr$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // variables
          today = new Date(); // return document

          _context2.next = 4;
          return regeneratorRuntime.awrap(rapport.findOne({
            csr: csr,
            trimestre: trimestre,
            year: today.getFullYear()
          }).select('-csr').populate({
            path: 'sortie',
            populate: [{
              path: 'pdrVisite populationCible ressourceHumainMobile santeMaternelle santeInfantile planificationFamiliale santeScolaire consultationMedical detectionPrecoceCancer maladieDepiste autreActivite',
              populate: 'pdrVisite'
            }]
          }));

        case 4:
          return _context2.abrupt("return", _context2.sent);

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
} // SUBMIT


function editTrimestreByCsr(csr, trimestre, sortie) {
  var today;
  return regeneratorRuntime.async(function editTrimestreByCsr$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          today = new Date(); // update the plan action

          _context3.next = 4;
          return regeneratorRuntime.awrap(rapport.findOneAndUpdate({
            csr: csr,
            trimestre: trimestre,
            year: today.getFullYear()
          }, {
            $pullAll: {
              sortie: [sortie]
            }
          }));

        case 4:
          return _context3.abrupt("return", _context3.sent);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // OUTPUT


module.exports = {
  addDataToTrimestre: addDataToTrimestre,
  getTrimestreByCsr: getTrimestreByCsr,
  editTrimestreByCsr: editTrimestreByCsr
};