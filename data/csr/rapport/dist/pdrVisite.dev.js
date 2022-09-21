"use strict";

// SET UP
var pdrVisite = require('../../../model/csr/rapport/pdrVisite'); // ERROR


var _require = require('../../../util/error'),
    newError = _require.newError; // GET


function getPdrVisiteByCsrAndTrimestre(csr, trimestre) {
  var today;
  return regeneratorRuntime.async(function getPdrVisiteByCsrAndTrimestre$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          today = new Date();
          _context.next = 4;
          return regeneratorRuntime.awrap(pdrVisite.find({
            csr: csr,
            trimestre: trimestre,
            year: today.getFullYear()
          }).populate('pdrVisite').select('-csr'));

        case 4:
          return _context.abrupt("return", _context.sent);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // ADD


function addPdrVisite(csr, sortie, trimestre, body) {
  var document;
  return regeneratorRuntime.async(function addPdrVisite$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // update the body
          body.csr = csr;
          body.trimestre = trimestre;
          body.sortie = sortie;
          body.budgetCarburantEmConsomme = parseFloat(body.kmParcouru * 1.5); // add document

          _context2.next = 7;
          return regeneratorRuntime.awrap(pdrVisite.create(body));

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


function getPdrVisiteById(id) {
  return regeneratorRuntime.async(function getPdrVisiteById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(pdrVisite.findById(id).populate('pdrVisite').select('-csr'));

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


function editPdrVisiteById(id, body) {
  var document;
  return regeneratorRuntime.async(function editPdrVisiteById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          // edit document
          body.budgetCarburantEmConsomme = parseFloat(body.kmParcouru * 1.5);
          _context4.next = 4;
          return regeneratorRuntime.awrap(pdrVisite.findByIdAndUpdate(id, body));

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
} // GET


function getPdrVisiteBySortie(sortie) {
  return regeneratorRuntime.async(function getPdrVisiteBySortie$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(pdrVisite.findOne({
            sortie: sortie
          }));

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
} // DELETE


function deletePdrVisiteById(id) {
  return regeneratorRuntime.async(function deletePdrVisiteById$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(pdrVisite.findByIdAndDelete(id));

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
} // // GET
// async function getPdrVisiteByYear() {
// 	try {
// 		var today = new Date();
// 		return await pdrVisite
// 			.find({
// 				year: today.getFullYear(),
// 			})
// 			.populate({ path: 'pdrVisite csr', select: '-email -password' });
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }
// // GET
// async function getPdrVisiteByRegionAndYear(region) {
// 	try {
// 		var today = new Date(),
// 			all = await pdrVisite
// 				.find({
// 					year: today.getFullYear(),
// 				})
// 				.populate({
// 					path: 'pdrVisite csr',
// 					select: '-email -password',
// 				});
// 		out = [];
// 		for (let i = 0; i < all.length; i++) {
// 			const element = all[i];
// 			if (element.csr.region === region) {
// 				out.push(element);
// 			}
// 		}
// 		return out
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }
// async function getPdrVisiteByProvinceAndYear(province) {
// 	try {
// 		var today = new Date(),
// 			all = await pdrVisite
// 				.find({
// 					year: today.getFullYear(),
// 				})
// 				.populate({
// 					path: 'pdrVisite csr',
// 					select: '-email -password',
// 				});
// 		out = [];
// 		for (let i = 0; i < all.length; i++) {
// 			const element = all[i];
// 			if (element.csr.province === province) {
// 				out.push(element);
// 			}
// 		}
// 		return out
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }
// // DELETE
// async function deletePdrVisite(_id, csr, sortie, trimestre) {
// 	try {
// 		// delete document
// 		var document = await pdrVisite.findOneAndDelete({
// 			_id,
// 			csr,
// 			sortie,
// 			trimestre,
// 		});
// 		// return the id of document
// 		return document.id;
// 	} catch (error) {
// 		console.log(error);
// 		throw newError(500, "quelque chose s'est mal passé");
// 	}
// }
// OUTPUT


module.exports = {
  getPdrVisiteByCsrAndTrimestre: getPdrVisiteByCsrAndTrimestre,
  addPdrVisite: addPdrVisite,
  getPdrVisiteById: getPdrVisiteById,
  editPdrVisiteById: editPdrVisiteById,
  getPdrVisiteBySortie: getPdrVisiteBySortie,
  deletePdrVisiteById: deletePdrVisiteById
};