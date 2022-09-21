"use strict";

// SET UP
var csrData = require('../../../data/csr/csr');

var trimestreData = require('../../../data/csr/rapport/trimestre');

var trimestreClass = require('../../../class/trimestre');

var rapportData = require('../../../data/csr/rapport/rapport');

var pdrVisiteData = require('../../../data/csr/rapport/pdrVisite');

var programmeData = require('../../../data/csr/planAction/programme'); // CHECK THE TRIMESTTRE URL


function trimestreUrl(req, res, next) {
  try {
    if (req.params.trimestre != '1' && req.params.trimestre != '2' && req.params.trimestre != '3' && req.params.trimestre != '4') {
      return res.status(400).redirect(req.baseUrl + '/' + req.params.id + '/rapport');
    }

    return next();
  } catch (error) {
    console.log(error);
    return next(newError(500, "quelque chose s'est mal passé"));
  }
} // TAUX DE COVERTURE DES PDRs


function coverturePdr(trimestre, csr) {
  var programme, pdrVisite, objOut, i, programmeElement, j, pdrVisiteElement;
  return regeneratorRuntime.async(function coverturePdr$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(programmeData.getProgrammeByCsr(csr));

        case 3:
          programme = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(pdrVisiteData.getPdrVisiteByCsrAndTrimestre(csr, trimestre));

        case 6:
          pdrVisite = _context.sent;
          // variable for calculation
          objOut = {
            pdr: [],
            tauxCover: 0
          }; // loop on all pdr

          for (i = 0; i < programme.length; i++) {
            // pdr element
            programmeElement = programme[i]; // init pdr element and push to array

            objOut.pdr[i] = {
              id: programmeElement.id,
              pdr: programmeElement.pdr,
              sortieProgramme: programmeElement['t' + trimestre],
              sortieEffectue: {
                total: 0,
                observation: []
              }
            }; // loop on all pdr visite

            for (j = 0; j < pdrVisite.length; j++) {
              pdrVisiteElement = pdrVisite[j];

              if (programmeElement.id === pdrVisiteElement.pdrVisite.id) {
                objOut.pdr[i].sortieEffectue.total++;
                objOut.pdr[i].sortieEffectue.observation.push(pdrVisiteElement.observation.length ? pdrVisiteElement.observation : 'Aucune');
              }
            }

            objOut.tauxCover += Math.ceil(parseFloat(objOut.pdr[i].sortieEffectue.total / objOut.pdr[i].sortieProgramme * 100));
          }

          objOut.tauxCover = Math.ceil(parseFloat(objOut.tauxCover / objOut.pdr.length));
          return _context.abrupt("return", objOut);

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          throw _context.t0;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
} // GET RAPPORT OF TRIMESTTRE


function trimestre(req, res, next) {
  var data, today, trimestre, global;
  return regeneratorRuntime.async(function trimestre$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // collect data
          data = {}, today = new Date(), trimestre = parseInt(req.params.trimestre), global = new trimestreClass.GlobalTable(); // get the document of the csr

          _context2.next = 4;
          return regeneratorRuntime.awrap(csrData.getDocument(req.params.id));

        case 4:
          data.document = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(trimestreData.getTrimestreByCsr(req.params.id, trimestre));

        case 7:
          data.trimestre = _context2.sent;
          _context2.next = 10;
          return regeneratorRuntime.awrap(coverturePdr(trimestre, req.params.id));

        case 10:
          data.pdrVisite = _context2.sent;
          // render the page
          res.status(200).render('csr/rapport/trimestre', {
            // page title
            title: data.document.csr + ' | Rapport des activités des Unités Médical Mobile (UMM) - Trimestre ' + trimestre + ' | ' + today.getFullYear(),
            // trimestre
            trimestre: trimestre,
            // url
            url: req.originalUrl,
            // get global table
            pdrVisite: data.trimestre && data.trimestre.sortie.length ? global.globalPdrVisite(data.trimestre.sortie, data.pdrVisite.pdr) : null,
            populationCible: data.trimestre && data.trimestre.sortie.length ? global.globalPopulationCible(data.trimestre.sortie) : null,
            ressourceHumainMobile: data.trimestre && data.trimestre.sortie.length ? global.globalRessourceHumainMobile(data.trimestre.sortie) : null,
            santeMaternelle: data.trimestre && data.trimestre.sortie.length ? global.globalSanteMaternelle(data.trimestre.sortie) : null,
            santeInfantile: data.trimestre && data.trimestre.sortie.length ? global.globalSanteInfantile(data.trimestre.sortie) : null,
            planificationFamiliale: data.trimestre && data.trimestre.sortie.length ? global.globalPlanificationFamiliale(data.trimestre.sortie) : null,
            santeScolaire: data.trimestre && data.trimestre.sortie.length ? global.globalSanteScolaire(data.trimestre.sortie) : null,
            consultationMedical: data.trimestre && data.trimestre.sortie.length ? global.globalConsultationMedical(data.trimestre.sortie) : null,
            detectionPrecoceCancer: data.trimestre && data.trimestre.sortie.length ? global.globalDetectionPrecoceCancer(data.trimestre.sortie) : null,
            maladieDepiste: data.trimestre && data.trimestre.sortie.length ? global.globalMaladieDepiste(data.trimestre.sortie) : null,
            autreActivite: data.trimestre && data.trimestre.sortie.length ? global.globalAutreActivite(data.trimestre.sortie) : null,
            // couverture pdr
            tauxCoverturePdr: data.pdrVisite.tauxCover,
            // data
            data: data
          });
          _context2.next = 18;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", next(_context2.t0));

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
} // THE TRIMESTTRE DEADLINE


function trimestreDead(req, res, next) {
  try {
    // variables
    var today = new Date(),
        month = today.getMonth(),
        DeadTrimestre,
        trimestre; // get the trimestre

    trimestre = parseInt(req.params.trimestre); // get the dead line trimestre

    if (month < 2) {
      DeadTrimestre = 1;
    } else if (month < 5) {
      DeadTrimestre = 2;
    } else if (month < 8) {
      DeadTrimestre = 3;
    } else {
      DeadTrimestre = 4;
    } // output


    if (DeadTrimestre > trimestre) {
      req.flash('err', 'La date limite de remplissage du rapport de sortie du trimestre ' + trimestre + ' est dépassée');
      return res.status(401).redirect(req.baseUrl + '/' + req.params.id + '/trimestre/' + trimestre);
    }

    return next();
  } catch (error) {
    console.log(error);
    return next(newError(500, "quelque chose s'est mal passé"));
  }
} // ADD TO THE TRIMESTRE


function addDataToTrimestre(req, res, next) {
  return regeneratorRuntime.async(function addDataToTrimestre$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(trimestreData.addDataToTrimestre(req.params.id, parseInt(req.params.trimestre), res.locals.trimestre.body));

        case 3:
          return _context3.abrupt("return", res.redirect('/csr/' + req.params.id + '/trimestre/' + req.params.trimestre + '/sortie/' + res.locals.trimestre.body['$addToSet'].sortie));

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", next(_context3.t0));

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // SUBMIT


function editTrimestre(req, res, next) {
  return regeneratorRuntime.async(function editTrimestre$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(trimestreData.editTrimestreByCsr(req.params.id, req.params.trimestre, res.locals.sortie.deleted.id));

        case 3:
          // redirect to rapport page
          req.flash('succ', 'Le rapport de la sortie a été supprimé avec succès.');
          return _context4.abrupt("return", res.redirect(req.baseUrl + '/' + req.params.id + '/trimestre/' + req.params.trimestre));

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", next(_context4.t0));

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // OUTPUT


module.exports = {
  trimestreUrl: trimestreUrl,
  trimestre: trimestre,
  trimestreDead: trimestreDead,
  addDataToTrimestre: addDataToTrimestre,
  editTrimestre: editTrimestre
};