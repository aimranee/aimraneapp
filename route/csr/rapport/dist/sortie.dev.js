"use strict";

// SET UP
var express = require('express');

var router = express.Router(); // HANDLER

var handler = require('../../../handler/csr/rapport/sortie');

var trimestreHandler = require('../../../handler/csr/rapport/trimestre');

var planActionHandler = require('../../../handler/csr/planAction/planAction'); // - delete the rapport


var pdrVisiteHandler = require('../../../handler/csr/rapport/pdrVisite');

var populationCibleHandler = require('../../../handler/csr/rapport/populationCible');

var ressourceHumainMobileHandler = require('../../../handler/csr/rapport/ressourceHumainMobile');

var santeMaternelleHandler = require('../../../handler/csr/rapport/santeMaternelle');

var santeInfantileHandler = require('../../../handler/csr/rapport/santeInfantile');

var planificationFamilialeHandler = require('../../../handler/csr/rapport/planificationFamiliale');

var santeScolaireHandler = require('../../../handler/csr/rapport/santeScolaire');

var consultationMedicalHandler = require('../../../handler/csr/rapport/consultationMedical');

var detectionPrecoceCancerHandler = require('../../../handler/csr/rapport/detectionPrecoceCancer');

var maladieDepisteHandler = require('../../../handler/csr/rapport/maladieDepiste');

var autreActiviteHandler = require('../../../handler/csr/rapport/autreActivite'); // - error handler


var authHandler = require('../../../handler/auth');

var errorHandler = require('../../../handler/error'); // SORTIE


router.route('/:id/trimestre/:trimestre/sortie').post(authHandler.protector, trimestreHandler.trimestreUrl, // trimestreHandler.trimestreDead,
planActionHandler.planActionNotSubmited, handler.newSortie, trimestreHandler.addDataToTrimestre, errorHandler.throwError);
router.route('/:id/trimestre/:trimestre/sortie/:sortie').get(authHandler.protector, trimestreHandler.trimestreUrl, // trimestreHandler.trimestreDead,
handler.sortie, errorHandler.throwError); // submit

router.route('/:id/trimestre/:trimestre/sortie/:sortie/submit').post(authHandler.protector, trimestreHandler.trimestreUrl, // trimestreHandler.trimestreDead,
handler.sortieSubmited, handler.sortieReadyToSubmit, handler.submitSortie, errorHandler.throwError); // delete

router.route('/:id/trimestre/:trimestre/sortie/:sortie/delete').post(authHandler.protector, trimestreHandler.trimestreUrl, // trimestreHandler.trimestreDead,
handler.sortieSubmited, handler.deleteSortie, pdrVisiteHandler.deletePdrVisite, populationCibleHandler.deletePopulationCible, ressourceHumainMobileHandler.deleteRessourceHumainMobile, santeMaternelleHandler.deleteSanteMaternelle, santeInfantileHandler.deleteSanteInfantile, planificationFamilialeHandler.deletePlanificationFamiliale, santeScolaireHandler.deleteSanteScolaire, consultationMedicalHandler.deleteConsultationMedical, detectionPrecoceCancerHandler.deleteDetectionPrecoceCancer, maladieDepisteHandler.deleteMaladieDepiste, autreActiviteHandler.deleteAutreActivite, trimestreHandler.editTrimestre, errorHandler.throwError); // OUTPUT

module.exports = router;