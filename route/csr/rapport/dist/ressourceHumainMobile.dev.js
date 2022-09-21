"use strict";

// SET UP
var express = require('express');

var router = express.Router(); // HANDLER

var handler = require('../../../handler/csr/rapport/ressourceHumainMobile');

var sortieHandler = require('../../../handler/csr/rapport/sortie');

var trimestreHandler = require('../../../handler/csr/rapport/trimestre');

var authHandler = require('../../../handler/auth');

var errorHandler = require('../../../handler/error'); // ADD MALADIE DEPISTE


router.route('/:id/trimestre/:trimestre/sortie/:sortie/ressource-humain-mobile').get(authHandler.protector, trimestreHandler.trimestreUrl, // trimestreHandler.trimestreDead,
sortieHandler.sortieSubmited, handler.redirectTodata, handler.ressourceHumainMobile, errorHandler.throwError).post(authHandler.protector, trimestreHandler.trimestreUrl, // trimestreHandler.trimestreDead,
sortieHandler.sortieSubmited, handler.redirectTodata, handler.addRessourceHumainMobile, sortieHandler.addDataToSortie, errorHandler.throwError); // EDIT MALADIE DEPISTE

router.route('/:id/trimestre/:trimestre/sortie/:sortie/ressource-humain-mobile/:ressourceHumainMobile').get(authHandler.protector, trimestreHandler.trimestreUrl, // trimestreHandler.trimestreDead,
sortieHandler.sortieSubmited, handler.getRessourceHumainMobile, errorHandler.throwError).post(authHandler.protector, trimestreHandler.trimestreUrl, // trimestreHandler.trimestreDead,
sortieHandler.sortieSubmited, handler.editRessourceHumainMobile, errorHandler.throwError); // OUTPUT

module.exports = router;