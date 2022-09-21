"use strict";

// --- DATA
var csData = require('../data/cs');

var planActionData = require('../data/planAction'); // const localiteData = require('../data/localite');
// const pdrData = require('../data/pdr');
// const rapportData = require('../data/rapport');
// --- ERROR


var _require = require('../util/error'),
    newError = _require.newError; // ==================================================================== GENERAL
// // check the date
// function checkDate(today) {
// 	try {
// 		var thisDay = today.getDay();
// 		if (![0, 3, 6, 8].includes(today.getMonth())) return false;
// 		if (thisDay < 1 || thisDay > 15) return false;
// 		return true;
// 	} catch (error) {
// 		return false;
// 	}
// }
// // get the trimestre
// function getTrimestre(today) {
// 	try {
// 		var thisMonth = today.getMonth();
// 		if (thisMonth === 0) return 4;
// 		else if (thisMonth === 3) return 1;
// 		else if (thisMonth === 6) return 2;
// 		else if (thisMonth === 8) return 3;
// 		else return 0;
// 	} catch (error) {
// 		return false;
// 	}
// }
// dashboard


function dashboard(req, res, next) {
  var data, today;
  return regeneratorRuntime.async(function dashboard$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document of the central

          _context.next = 4;
          return regeneratorRuntime.awrap(csData.getDocument(req.params.id));

        case 4:
          data.document = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(csData.getPlanActionByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 7:
          data.planAction = _context.sent;
          _context.next = 10;
          return regeneratorRuntime.awrap(csData.getRapportByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 10:
          data.rapport = _context.sent;
          // render the page
          res.status(200).render('user/cs/dashboard', {
            title: data.document.cs + ' | tableau de bord',
            data: data
          });
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", next(_context.t0));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
} // settings


function settings(req, res, next) {
  var data;
  return regeneratorRuntime.async(function settings$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // collect data
          data = {}; // get the document of the central

          _context2.next = 4;
          return regeneratorRuntime.awrap(csData.getDocument(req.params.id));

        case 4:
          data.document = _context2.sent;
          // render the page
          res.status(200).render('user/cs/settings', {
            title: data.document.cs + ' | paramètres',
            data: data
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", next(_context2.t0));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // ==================================================================== PLAN ACTION
// get plan action of this year


function planAction(req, res, next) {
  var data, today;
  return regeneratorRuntime.async(function planAction$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document of the cs

          _context3.next = 4;
          return regeneratorRuntime.awrap(csData.getDocument(req.params.id));

        case 4:
          data.document = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(csData.getPlanActionByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 7:
          data.planAction = _context3.sent;
          // render the page
          res.status(200).render('user/cs/planAction', {
            title: data.document.cs + " | plan d'action",
            data: data
          });
          _context3.next = 14;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", next(_context3.t0));

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // get the plan action form


function addPlanAction(req, res, next) {
  var data, today;
  return regeneratorRuntime.async(function addPlanAction$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document of the cs

          _context4.next = 4;
          return regeneratorRuntime.awrap(csData.getDocument(req.params.id));

        case 4:
          data.document = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(planActionData.getPopulationByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 7:
          data.population = _context4.sent;
          _context4.next = 10;
          return regeneratorRuntime.awrap(planActionData.getProgrammeByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 10:
          data.programme = _context4.sent;
          _context4.next = 13;
          return regeneratorRuntime.awrap(planActionData.getRessourceByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 13:
          data.ressource = _context4.sent;
          _context4.next = 16;
          return regeneratorRuntime.awrap(planActionData.getRessourceHumainByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 16:
          data.ressourceHumain = _context4.sent;
          return _context4.abrupt("return", res.status(200).render('user/cs/addPlanAction', {
            title: data.document.cs + " | ajouter le plan d'action",
            url: req.originalUrl,
            data: data
          }));

        case 20:
          _context4.prev = 20;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", next(_context4.t0));

        case 23:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 20]]);
} // add plan action to the database


function addPlanActionData(req, res, next) {
  return regeneratorRuntime.async(function addPlanActionData$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;

          if (!(req.query.direction === 'population')) {
            _context5.next = 4;
            break;
          }

          _context5.next = 4;
          return regeneratorRuntime.awrap(planActionData.addUpdatePopulation(req.body, req.params.id, req.query.id));

        case 4:
          if (!(req.query.direction === 'programme')) {
            _context5.next = 7;
            break;
          }

          _context5.next = 7;
          return regeneratorRuntime.awrap(planActionData.addUpdateProgramme(req.body, req.params.id, req.query.id));

        case 7:
          if (!(req.query.direction === 'ressource')) {
            _context5.next = 10;
            break;
          }

          _context5.next = 10;
          return regeneratorRuntime.awrap(planActionData.addUpdateRessource(req.body, req.params.id, req.query.id));

        case 10:
          if (!(req.query.direction === 'ressourceHumain')) {
            _context5.next = 13;
            break;
          }

          _context5.next = 13;
          return regeneratorRuntime.awrap(planActionData.addUpdateRessourceHumain(req.body, req.params.id, req.query.id));

        case 13:
          req.flash('succ', 'informations ajoutées avec succès'); // send data

          return _context5.abrupt("return", res.redirect(req.baseUrl + '/' + req.params.id + '/add-plan-action'));

        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", next(_context5.t0));

        case 20:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 17]]);
} // delete plan action from the database


function deleteProgramme(req, res, next) {
  return regeneratorRuntime.async(function deleteProgramme$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(planActionData.deleteProgramme(req.params.pid));

        case 3:
          _context6.next = 5;
          return regeneratorRuntime.awrap(planActionData. // send data
          res.redirect(req.baseUrl + '/' + req.params.id + '/add-plan-action'));

        case 5:
          _context6.next = 10;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", next(_context6.t0));

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // submit plan action


function submitPlanAction(req, res, next) {
  var data, today;
  return regeneratorRuntime.async(function submitPlanAction$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document of the cs

          _context7.next = 4;
          return regeneratorRuntime.awrap(csData.getDocument(req.params.id));

        case 4:
          data.document = _context7.sent;
          _context7.next = 7;
          return regeneratorRuntime.awrap(planActionData.getPopulationByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 7:
          data.population = _context7.sent;
          _context7.next = 10;
          return regeneratorRuntime.awrap(planActionData.getProgrammeByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 10:
          data.programme = _context7.sent;
          _context7.next = 13;
          return regeneratorRuntime.awrap(planActionData.getRessourceByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 13:
          data.ressource = _context7.sent;
          _context7.next = 16;
          return regeneratorRuntime.awrap(planActionData.getRessourceHumainByCsAndYear(req.params.id, today.getFullYear().toString()));

        case 16:
          data.ressourceHumain = _context7.sent;
          return _context7.abrupt("return", res.status(200).render('user/cs/submitPlanAction', {
            title: data.document.cs + " | ajouter le plan d'action",
            url: req.originalUrl,
            data: data
          }));

        case 20:
          _context7.prev = 20;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", next(_context7.t0));

        case 23:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 20]]);
} // 


function submitPlanActionData(req, res, next) {
  return regeneratorRuntime.async(function submitPlanActionData$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(planActionData.addPlanAction(req.body, req.params.id));

        case 3:
          req.flash('succ', 'Plan d\'action ajouté avec succès');
          return _context8.abrupt("return", res.redirect(req.baseUrl + '/' + req.params.id));

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          return _context8.abrupt("return", next(_context8.t0));

        case 11:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // // get the edit plan action form
// async function editPlanAction(req, res, next) {
// 	try {
// 		var data = {};
// 		// get the document of the central
// 		data.document = await csData.getDocument(req.params.id);
// 		data.planAction = await planActionData.getPlanActionById(
// 			req.params.pid
// 		);
// 		// render the page
// 		res.status(200).render('user/cs/editPlanAction', {
// 			title: 'central',
// 			data,
// 		});
// 	} catch (error) {
// 		return next(error);
// 	}
// }
// // edit plan action in the database
// async function editPlanActionData(req, res, next) {
// 	try {
// 		// add the plan d'action
// 		await planActionData.editPlanAction(req.body, req.params.pid);
// 		// send data
// 		res.redirect(req.baseUrl + '/' + req.params.id + 'plan-action');
// 	} catch (error) {
// 		return next(error);
// 	}
// }
// ==================================================================== RAPPORT
// // get the rapport of this year
// async function rapport(req, res, next) {
// 	try {
// 		// collect data
// 		var data = {},
// 			today = new Date();
// 		// get the document of the central
// 		data.document = await csData.getDocument(req.params.id);
// 		// get the plan adction of this year
// 		data.rapport = await csData.getRapportByCsAndYear(
// 			req.params.id,
// 			today.getFullYear().toString()
// 		);
// 		// render the page
// 		res.status(200).render('user/cs/rapport', {
// 			title: 'central | Rapport',
// 			data,
// 		});
// 	} catch (error) {
// 		return next(error);
// 	}
// }
// get the rapport form


function addRapport(req, res, next) {
  var data;
  return regeneratorRuntime.async(function addRapport$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          // collect data
          data = {}; // get the document of the central

          _context9.next = 4;
          return regeneratorRuntime.awrap(csData.getDocument(req.params.id));

        case 4:
          data.document = _context9.sent;
          // render the page
          res.status(200).render('user/cs/addRapport', {
            title: data.document.cs + " | ajouter le rapport",
            data: data
          });
          _context9.next = 11;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", next(_context9.t0));

        case 11:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // add rapport to the database


function addRapportData(req, res, next) {
  var today;
  return regeneratorRuntime.async(function addRapportData$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          today = new Date();
          req.body.trimestre = getTrimestre(today); // get the rapport of this year

          _context10.next = 5;
          return regeneratorRuntime.awrap(rapportData.addRapport(req.body, req.params.id));

        case 5:
          // send data
          res.redirect(req.baseUrl);
          _context10.next = 11;
          break;

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", next(_context10.t0));

        case 11:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 8]]);
} // // get the edit rapport form
// async function editRapport(req, res, next) {
// 	try {
// 		var data = {};
// 		// get the document of the central
// 		data.document = await csData.getDocument(req.params.id);
// 		data.rapport = await rapportData.getRapportById(req.params.rid);
// 		// render the page
// 		res.status(200).render('user/cs/editRapport', {
// 			title: 'central',
// 			data,
// 		});
// 	} catch (error) {
// 		return next(error);
// 	}
// }
// // edit rapport in the database
// async function editRapportData(req, res, next) {
// 	try {
// 		// add the plan d'action
// 		await rapportData.editRapport(req.body, req.params.rid);
// 		// send data
// 		res.redirect(req.baseUrl + '/' + req.params.id + 'rapport');
// 	} catch (error) {
// 		return next(error);
// 	}
// }
// ==================================================================== PROTECTOR
// add the plan action only if the month is January


function planActionProtectorTime(req, res, next) {
  try {
    var today = new Date(); // check if this month is January

    if (today.getMonth() != 0) return next(newError(401, 'vous avez dépassé le délai'));
    return next();
  } catch (error) {
    return next(error);
  }
} // async function rapportProtectorExist(req, res, next) {
// 	try {
// 		var rapportThisYear = await rapportData.getRapportByTrimestre(
// 			getTrimestre(today)
// 		);
// 		// check if the plan action is already sent
// 		if (rapportThisYear.length)
// 			return next(newError(400, 'vous avez déjà envoyé votre rapport'));
// 		return next();
// 	} catch (error) {
// 		return next(error);
// 	}
// }
// // reappo
// function rapportProtectorTime(req, res, next) {
// 	try {
// 		var today = new Date();
// 		if (checkDate(today) === false)
// 			return next(newError(400, 'vous avez dépassé le délai'));
// 		return next();
// 	} catch (error) {
// 		return next(error);
// 	}
// }
// ==================================================================== LOCALITE
// // add rapport to the database
// async function addLocaliteData(req, res, next) {
// 	try {
// 		await localiteData.addUpdateLocalite(req.body, req.params.id);
// 		// send data
// 		req.flash('succ', 'localité ajoutée avec succès');
// 		res.redirect(req.originalUrl);
// 	} catch (error) {
// 		return next(error);
// 	}
// }
// async function addLocalite(req, res, next) {
// 	try {
// 		// collect data
// 		var data = {};
// 		// get the document of the central
// 		data.document = await csData.getDocument(req.params.id);
// 		// get localite by cs
// 		data.localite = await localiteData.getLocaliteByCs(req.params.id);
// 		// render the page
// 		res.status(200).render('user/cs/addLocalite', {
// 			title: 'central',
// 			url: req.originalUrl,
// 			data,
// 		});
// 	} catch (error) {
// 		return next(error);
// 	}
// }
// ==================================================================== PDR
// async function addPdr(req, res, next) {
// 	try {
// 		// collect data
// 		var data = {};
// 		// get the document of the central
// 		data.document = await csData.getDocument(req.params.id);
// 		// get localite by cs
// 		data.localite = await localiteData.getLocaliteByCs(req.params.id);
// 		// get pdr by cs
// 		data.pdr = await pdrData.getPdrByCs(req.params.id);
// 		// render the page
// 		res.status(200).render('user/cs/addPdr', {
// 			title: 'add',
// 			url: req.originalUrl,
// 			data,
// 		});
// 	} catch (error) {
// 		return next(error);
// 	}
// }
// async function addPdrData(req, res, next) {
// 	try {
// 		await pdrData.addUpdatePdr(req.body, req.params.id);
// 		// send data
// 		req.flash('succ', 'points de rassemblement ajoutée avec succès');
// 		res.redirect(req.originalUrl);
// 	} catch (error) {
// 		return next(error);
// 	}
// }


module.exports = {
  dashboard: dashboard,
  settings: settings,
  planAction: planAction,
  // rapport,
  // add
  addPlanAction: addPlanAction,
  // protector
  planActionProtectorTime: planActionProtectorTime,
  // rapportProtectorTime,
  // rapportProtectorExist,
  // // add data
  addPlanActionData: addPlanActionData,
  submitPlanAction: submitPlanAction,
  submitPlanActionData: submitPlanActionData,
  // // edit
  // editPlanAction,
  // editRapport,
  addRapport: addRapport,
  addRapportData: addRapportData // // edit data
  // editPlanActionData,
  // editRapportData,
  // // localite
  // addLocalite,
  // addLocaliteData,
  // // pdr
  // addPdr,
  // addPdrData,

};