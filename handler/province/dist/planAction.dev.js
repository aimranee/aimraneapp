"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// SET UP
// const fs = require('fs');
var provinceData = require('../../data/province');

var planActionData = require('../../data/csr/planAction/planAction');

var _require = require('../../class/carte'),
    Carte = _require.Carte;

var carte = new Carte(); // ERROR

var _require2 = require('../../util/error'),
    newError = _require2.newError; // DATA REGION


function dataProvince(province) {
  var codeProvince, data, planAction, j, planActionElement, r, vehiculeElement, p, programmeElement, _p, _programmeElement, csrList, taux, tauxByCsr, i, _planActionElement, exist, _j, csrElement, temp;

  return regeneratorRuntime.async(function dataProvince$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          codeProvince = carte.getCodeProvince(province);
          data = _defineProperty({}, codeProvince, {
            population: {
              population: {
                rurale: 0,
                cible: 0,
                habitantMoins3km: 0,
                habitantEntre3km6km: 0,
                habitantEntre6km10km: 0,
                habitantPlus10km: 0
              },
              distanceMoyenneRouteProche: 0,
              femme: {
                far: 0,
                fmar: 0,
                femmeEnceinte: 0
              },
              enfant: {
                naissancesAttendues: 0,
                moins1ans: 0,
                moins5ans: 0
              }
            },
            programme: {},
            pdr: {},
            ressource: {
              ms: {},
              commune: {},
              ong: {}
            },
            ressourceHumain: {
              fixe: {
                medecin: 0,
                infirmier: 0,
                sageFemme: 0,
                technicien: 0,
                chauffeur: 0,
                appuie: 0
              },
              mobile: {
                medecin: 0,
                infirmier: 0,
                sageFemme: 0,
                technicien: 0,
                chauffeur: 0,
                appuie: 0,
                emOperationnelle: 0
              }
            }
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(planActionData.getPlanActionByProvince(province));

        case 5:
          planAction = _context.sent;

          // planAction
          for (j = 0; j < planAction.length; j++) {
            planActionElement = planAction[j];

            if (planActionElement.population) {
              // POPULATION
              // --
              data[codeProvince].population.population.rurale += planActionElement.population.population.rurale; // --

              data[codeProvince].population.population.cible += planActionElement.population.population.cible; // --

              data[codeProvince].population.population.habitantMoins3km += planActionElement.population.population.habitantMoins3km; // --

              data[codeProvince].population.population.habitantEntre3km6km += planActionElement.population.population.habitantEntre3km6km; // --

              data[codeProvince].population.population.habitantEntre6km10km += planActionElement.population.population.habitantEntre6km10km; // --

              data[codeProvince].population.population.habitantPlus10km += planActionElement.population.population.habitantPlus10km; // --

              data[codeProvince].population.distanceMoyenneRouteProche += planActionElement.population.distanceMoyenneRouteProche; // --

              data[codeProvince].population.enfant.naissancesAttendues += planActionElement.population.enfant.naissancesAttendues; // --

              data[codeProvince].population.enfant.moins1ans += planActionElement.population.enfant.moins1ans; // --

              data[codeProvince].population.enfant.moins5ans += planActionElement.population.enfant.moins5ans; // --

              data[codeProvince].population.femme.far += planActionElement.population.femme.far; // --

              data[codeProvince].population.femme.fmar += planActionElement.population.femme.fmar; // --

              data[codeProvince].population.femme.femmeEnceinte += planActionElement.population.femme.femmeEnceinte; // --
            }

            if (planActionElement.ressource) {
              // RESSOURCE
              for (r = 0; r < planActionElement.ressource.vehicule.length; r++) {
                vehiculeElement = planActionElement.ressource.vehicule[r];
                console.log(vehiculeElement);

                if (vehiculeElement.appartenance === 'Commune') {
                  if (data[codeProvince].ressource.commune[planActionElement.csr.cs]) {
                    data[codeProvince].ressource.commune[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  } else {
                    data[codeProvince].ressource.commune[planActionElement.csr.cs] = [];
                    data[codeProvince].ressource.commune[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  }
                } else if (vehiculeElement.appartenance === 'Ministère de la Santé') {
                  if (data[codeProvince].ressource.ms[planActionElement.csr.cs]) {
                    data[codeProvince].ressource.ms[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  } else {
                    data[codeProvince].ressource.ms[planActionElement.csr.cs] = [];
                    data[codeProvince].ressource.ms[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  }
                } else if (vehiculeElement.appartenance === 'Organisation Non Gouvernementale (ONG)') {
                  if (data[codeProvince].ressource.ong[planActionElement.csr.cs]) {
                    data[codeProvince].ressource.ong[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  } else {
                    data[codeProvince].ressource.ong[planActionElement.csr.cs] = [];
                    data[codeProvince].ressource.ong[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  }
                }
              }
            } // ressource humain
            // --


            if (planActionElement.ressourceHumain) {
              data[codeProvince].ressourceHumain.fixe.medecin += planActionElement.ressourceHumain.fixe.medecin; // --

              data[codeProvince].ressourceHumain.fixe.infirmier += planActionElement.ressourceHumain.fixe.infirmier; // --

              data[codeProvince].ressourceHumain.fixe.sageFemme += planActionElement.ressourceHumain.fixe.sageFemme; // --

              data[codeProvince].ressourceHumain.fixe.technicien += planActionElement.ressourceHumain.fixe.technicien; // --

              data[codeProvince].ressourceHumain.fixe.chauffeur += planActionElement.ressourceHumain.fixe.chauffeur; // --

              data[codeProvince].ressourceHumain.fixe.appuie += planActionElement.ressourceHumain.fixe.appuie; // --

              data[codeProvince].ressourceHumain.mobile.medecin += planActionElement.ressourceHumain.mobile.medecin; // --

              data[codeProvince].ressourceHumain.mobile.infirmier += planActionElement.ressourceHumain.mobile.infirmier; // --

              data[codeProvince].ressourceHumain.mobile.sageFemme += planActionElement.ressourceHumain.mobile.sageFemme; // --

              data[codeProvince].ressourceHumain.mobile.technicien += planActionElement.ressourceHumain.mobile.technicien; // --

              data[codeProvince].ressourceHumain.mobile.chauffeur += planActionElement.ressourceHumain.mobile.chauffeur; // --

              data[codeProvince].ressourceHumain.mobile.appuie += planActionElement.ressourceHumain.mobile.appuie; // --

              data[codeProvince].ressourceHumain.mobile.appuie += planActionElement.ressourceHumain.mobile.appuie; // --

              data[codeProvince].ressourceHumain.mobile.emOperationnelle += planActionElement.ressourceHumain.mobile.emOperationnelle;
            } // PDR


            for (p = 0; p < planActionElement.programme.length; p++) {
              programmeElement = planActionElement.programme[p];

              if (data[codeProvince].pdr[planActionElement.csr.commune]) {
                data[codeProvince].pdr[planActionElement.csr.commune].push({
                  pdr: programmeElement.pdr,
                  localite: programmeElement.localite
                });
              } else {
                data[codeProvince].pdr[planActionElement.csr.commune] = [];
                data[codeProvince].pdr[planActionElement.csr.commune].push({
                  pdr: programmeElement.pdr,
                  localite: programmeElement.localite
                });
              }
            } // PROGRAMME


            for (_p = 0; _p < planActionElement.programme.length; _p++) {
              _programmeElement = planActionElement.programme[_p];

              if (data[codeProvince].programme[planActionElement.csr.commune]) {
                data[codeProvince].programme[planActionElement.csr.commune].push({
                  pdr: _programmeElement.pdr,
                  t1: _programmeElement.t1,
                  t2: _programmeElement.t2,
                  t3: _programmeElement.t3,
                  t4: _programmeElement.t4
                });
              } else {
                data[codeProvince].programme[planActionElement.csr.commune] = [];
                data[codeProvince].programme[planActionElement.csr.commune].push({
                  pdr: _programmeElement.pdr,
                  t1: _programmeElement.t1,
                  t2: _programmeElement.t2,
                  t3: _programmeElement.t3,
                  t4: _programmeElement.t4
                });
              }
            }
          } // taux de remplissage


          csrList = carte.getCsrListByProvince(province), taux = 0, tauxByCsr = {};

          for (i = 0; i < planAction.length; i++) {
            _planActionElement = planAction[i];
            exist = false;

            for (_j = 0; _j < csrList.length; _j++) {
              csrElement = csrList[_j];

              if (csrElement.csr === _planActionElement.csr.csr) {
                exist = true;
              }
            }

            if (exist) {
              temp = 0;
              if (_planActionElement.population) temp += 25;
              if (_planActionElement.programme.length) temp += 25;
              if (_planActionElement.ressource) temp += 25;
              if (_planActionElement.ressourceHumain) temp += 25;
              tauxByCsr[_planActionElement.csr.csr] = {
                taux: temp,
                submit: _planActionElement.submit
              };
              taux += temp;
            } else {
              tauxByCsr[_planActionElement.csr.csr] = {
                taux: 0,
                submit: _planActionElement.submit
              };
            }
          }

          return _context.abrupt("return", {
            planAction: data,
            tauxRemplissage: Math.ceil(taux / csrList.length),
            tauxRemplissageByCsr: tauxByCsr
          });

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
} // get the dashbord


function planAction(req, res, next) {
  var data, today;
  return regeneratorRuntime.async(function planAction$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document of the region

          _context2.next = 4;
          return regeneratorRuntime.awrap(provinceData.getDocument(req.params.id));

        case 4:
          data.document = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(dataProvince(data.document.province));

        case 7:
          data.provinceData = _context2.sent;
          // render the page
          res.status(200).render('province/planAction', {
            title: 'Tableau de bord | Plan Action | ' + today.getFullYear(),
            url: req.originalUrl,
            data: data,
            codeProvince: carte.getCodeProvince(data.document.province),
            csrList: carte.getCsrListByProvince(data.document.province),
            page: 'planAction',
            listItem: 'planAction'
          });
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // output


module.exports = {
  planAction: planAction
};