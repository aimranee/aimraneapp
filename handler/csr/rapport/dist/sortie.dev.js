"use strict";

// SET UP
var csrData = require('../../../data/csr/csr');

var sortieData = require('../../../data/csr/rapport/sortie');

var rapportData = require('../../../data/csr/rapport/rapport'); // ADD


function newSortie(req, res, next) {
  return regeneratorRuntime.async(function newSortie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(sortieData.newSortie(req.params.id, parseInt(req.params.trimestre)));

        case 3:
          _context.t0 = _context.sent;
          _context.t1 = {
            sortie: _context.t0
          };
          _context.t2 = {
            $addToSet: _context.t1
          };
          _context.t3 = {
            body: _context.t2
          };
          res.locals = {
            trimestre: _context.t3
          };
          return _context.abrupt("return", next());

        case 11:
          _context.prev = 11;
          _context.t4 = _context["catch"](0);
          console.log(_context.t4);
          return _context.abrupt("return", next(_context.t4));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // GET


function sortie(req, res, next) {
  var data, today, trimestre;
  return regeneratorRuntime.async(function sortie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // collect data
          data = {}, today = new Date(), trimestre = parseInt(req.params.trimestre); // get the document of the csr

          _context2.next = 4;
          return regeneratorRuntime.awrap(csrData.getDocument(req.params.id));

        case 4:
          data.document = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(sortieData.getSortieById(req.params.sortie));

        case 7:
          data.sortie = _context2.sent;
          // render the page
          res.status(200).render('csr/rapport/sortie', {
            // page title
            title: data.document.csr + ' | Rapport des activités des Unités Médical Mobile (UMM) - Trimestre ' + trimestre + ' | ' + today.getFullYear(),
            // trimestre
            trimestre: trimestre,
            // url
            url: req.originalUrl,
            // whole data
            data: data
          });
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", next(_context2.t0));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // SUBMIT


function sortieSubmited(req, res, next) {
  var sortieSubmited;
  return regeneratorRuntime.async(function sortieSubmited$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(sortieData.getSortieSubmitedById(req.params.sortie));

        case 3:
          sortieSubmited = _context3.sent;

          if (!sortieSubmited) {
            _context3.next = 7;
            break;
          }

          req.flash('err', 'Vous avez déjà soumis le rapport de sortie');
          return _context3.abrupt("return", res.status(401).redirect(req.baseUrl + '/' + req.params.id + '/trimestre/' + req.params.trimestre + '/sortie/' + req.params.sortie));

        case 7:
          return _context3.abrupt("return", next());

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", next(_context3.t0));

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // SUBMIT


function sortieReadyToSubmit(req, res, next) {
  var sortie;
  return regeneratorRuntime.async(function sortieReadyToSubmit$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(sortieData.getSortieById(req.params.sortie));

        case 3:
          sortie = _context4.sent;

          if (!(!sortie.pdrVisite || !sortie.populationCible || !sortie.ressourceHumainMobile || !sortie.santeMaternelle || !sortie.santeInfantile || !sortie.planificationFamiliale || !sortie.santeScolaire || !sortie.consultationMedical || !sortie.detectionPrecoceCancer || !sortie.maladieDepiste || !sortie.autreActivite)) {
            _context4.next = 7;
            break;
          }

          req.flash('err', 'Veuillez remplir tout le rapport de la sortie');
          return _context4.abrupt("return", res.status(401).redirect(req.baseUrl + '/' + req.params.id + '/trimestre/' + req.params.trimestre + '/sortie/' + req.params.sortie));

        case 7:
          return _context4.abrupt("return", next());

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", next(_context4.t0));

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // SUBMIT


function submitSortie(req, res, next) {
  return regeneratorRuntime.async(function submitSortie$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(sortieData.submitSortieById(req.params.sortie));

        case 3:
          // redirect to rapport page
          req.flash('succ', 'Le rapport de la sortie a été soumis avec succès');
          return _context5.abrupt("return", res.status(401).redirect(req.baseUrl + '/' + req.params.id + '/trimestre/' + req.params.trimestre + '/sortie/' + req.params.sortie));

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", next(_context5.t0));

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // ADD


function addDataToSortie(req, res, next) {
  return regeneratorRuntime.async(function addDataToSortie$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(sortieData.addDataToSortie(req.params.sortie, res.locals.sortie.body));

        case 3:
          req.flash('succ', 'Informations ajoutées avec succès'); // send data

          return _context6.abrupt("return", res.redirect(req.originalUrl));

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          return _context6.abrupt("return", next(_context6.t0));

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // DELETE


function deleteSortie(req, res, next) {
  return regeneratorRuntime.async(function deleteSortie$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(sortieData.deleteSortieById(req.params.sortie));

        case 3:
          _context7.t0 = _context7.sent;
          _context7.t1 = {
            deleted: _context7.t0
          };
          res.locals = {
            sortie: _context7.t1
          };
          return _context7.abrupt("return", next());

        case 9:
          _context7.prev = 9;
          _context7.t2 = _context7["catch"](0);
          console.log(_context7.t2);
          return _context7.abrupt("return", next(_context7.t2));

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // OUTPUT


module.exports = {
  newSortie: newSortie,
  sortie: sortie,
  sortieSubmited: sortieSubmited,
  addDataToSortie: addDataToSortie,
  sortieReadyToSubmit: sortieReadyToSubmit,
  submitSortie: submitSortie,
  deleteSortie: deleteSortie
};