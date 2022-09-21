"use strict";

// SET UP
var fs = require('fs');

var centralData = require('../../data/central');

var planActionData = require('../../data/csr/planAction/planAction'); // ERROR


var _require = require('../../util/error'),
    newError = _require.newError; // JSON


var region = JSON.parse(fs.readFileSync("".concat(__dirname, "/../../static/json/region.json")));
var province = JSON.parse(fs.readFileSync("".concat(__dirname, "/../../static/json/province.json")));
var csr = JSON.parse(fs.readFileSync("".concat(__dirname, "/../../static/json/csr.json"))); // DATA REGION

function dataRegion() {
  var data, planAction, i, regionElement, j, planActionElement, r, vehiculeElement, p, programmeElement, _p, _programmeElement;

  return regeneratorRuntime.async(function dataRegion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          data = {
            1: {
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
            },
            2: {
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
            },
            3: {
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
            },
            4: {
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
            },
            5: {
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
            },
            6: {
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
            },
            7: {
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
            },
            8: {
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
            },
            9: {
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
            },
            10: {
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
            },
            11: {
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
            },
            12: {
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
            }
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(planActionData.getPlanAction());

        case 4:
          planAction = _context.sent;

          // ------------------------
          // region
          for (i = 0; i < region.length; i++) {
            regionElement = region[i]; // planAction

            for (j = 0; j < planAction.length; j++) {
              planActionElement = planAction[j];

              if (regionElement.region === planActionElement.csr.region) {
                // POPULATION
                if (planActionElement.population) {
                  data[regionElement.codeRegion].population.population.rurale += planActionElement.population.population.rurale; // --

                  data[regionElement.codeRegion].population.population.cible += planActionElement.population.population.cible; // --

                  data[regionElement.codeRegion].population.population.habitantMoins3km += planActionElement.population.population.habitantMoins3km; // --

                  data[regionElement.codeRegion].population.population.habitantEntre3km6km += planActionElement.population.population.habitantEntre3km6km; // --

                  data[regionElement.codeRegion].population.population.habitantEntre6km10km += planActionElement.population.population.habitantEntre6km10km; // --

                  data[regionElement.codeRegion].population.population.habitantPlus10km += planActionElement.population.population.habitantPlus10km; // --

                  data[regionElement.codeRegion].population.distanceMoyenneRouteProche += planActionElement.population.distanceMoyenneRouteProche; // --

                  data[regionElement.codeRegion].population.enfant.naissancesAttendues += planActionElement.population.enfant.naissancesAttendues; // --

                  data[regionElement.codeRegion].population.enfant.moins1ans += planActionElement.population.enfant.moins1ans; // --

                  data[regionElement.codeRegion].population.enfant.moins5ans += planActionElement.population.enfant.moins5ans; // --

                  data[regionElement.codeRegion].population.femme.far += planActionElement.population.femme.far; // --

                  data[regionElement.codeRegion].population.femme.fmar += planActionElement.population.femme.fmar; // --

                  data[regionElement.codeRegion].population.femme.femmeEnceinte += planActionElement.population.femme.femmeEnceinte;
                } // --
                // RESSOURCE


                if (planActionElement.ressource) {
                  for (r = 0; r < planActionElement.ressource.vehicule.length; r++) {
                    vehiculeElement = planActionElement.ressource.vehicule[r];

                    if (vehiculeElement.appartenance === 'Commune') {
                      if (data[regionElement.codeRegion].ressource.commune[planActionElement.csr.cs]) {
                        data[regionElement.codeRegion].ressource.commune[planActionElement.csr.cs].push({
                          type: vehiculeElement.type,
                          age: vehiculeElement.age,
                          csr: {
                            name: planActionElement.csr.csr,
                            category: planActionElement.csr.category
                          }
                        });
                      } else {
                        data[regionElement.codeRegion].ressource.commune[planActionElement.csr.cs] = [];
                        data[regionElement.codeRegion].ressource.commune[planActionElement.csr.cs].push({
                          type: vehiculeElement.type,
                          age: vehiculeElement.age,
                          csr: {
                            name: planActionElement.csr.csr,
                            category: planActionElement.csr.category
                          }
                        });
                      }
                    } else if (vehiculeElement.appartenance === 'Ministère de la Santé') {
                      if (data[regionElement.codeRegion].ressource.ms[planActionElement.csr.cs]) {
                        data[regionElement.codeRegion].ressource.ms[planActionElement.csr.cs].push({
                          type: vehiculeElement.type,
                          age: vehiculeElement.age,
                          csr: {
                            name: planActionElement.csr.csr,
                            category: planActionElement.csr.category
                          }
                        });
                      } else {
                        data[regionElement.codeRegion].ressource.ms[planActionElement.csr.cs] = [];
                        data[regionElement.codeRegion].ressource.ms[planActionElement.csr.cs].push({
                          type: vehiculeElement.type,
                          age: vehiculeElement.age,
                          csr: {
                            name: planActionElement.csr.csr,
                            category: planActionElement.csr.category
                          }
                        });
                      }
                    } else if (vehiculeElement.appartenance === 'Organisation Non Gouvernementale (ONG)') {
                      if (data[regionElement.codeRegion].ressource.ong[planActionElement.csr.cs]) {
                        data[regionElement.codeRegion].ressource.ong[planActionElement.csr.cs].push({
                          type: vehiculeElement.type,
                          age: vehiculeElement.age,
                          csr: {
                            name: planActionElement.csr.csr,
                            category: planActionElement.csr.category
                          }
                        });
                      } else {
                        data[regionElement.codeRegion].ressource.ong[planActionElement.csr.cs] = [];
                        data[regionElement.codeRegion].ressource.ong[planActionElement.csr.cs].push({
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
                }

                if (planActionElement.ressourceHumain) {
                  // ressource humain
                  // --
                  data[regionElement.codeRegion].ressourceHumain.fixe.medecin += planActionElement.ressourceHumain.fixe.medecin; // --

                  data[regionElement.codeRegion].ressourceHumain.fixe.infirmier += planActionElement.ressourceHumain.fixe.infirmier; // --

                  data[regionElement.codeRegion].ressourceHumain.fixe.sageFemme += planActionElement.ressourceHumain.fixe.sageFemme; // --

                  data[regionElement.codeRegion].ressourceHumain.fixe.technicien += planActionElement.ressourceHumain.fixe.technicien; // --

                  data[regionElement.codeRegion].ressourceHumain.fixe.chauffeur += planActionElement.ressourceHumain.fixe.chauffeur; // --

                  data[regionElement.codeRegion].ressourceHumain.fixe.appuie += planActionElement.ressourceHumain.fixe.appuie; // --

                  data[regionElement.codeRegion].ressourceHumain.mobile.medecin += planActionElement.ressourceHumain.mobile.medecin; // --

                  data[regionElement.codeRegion].ressourceHumain.mobile.infirmier += planActionElement.ressourceHumain.mobile.infirmier; // --

                  data[regionElement.codeRegion].ressourceHumain.mobile.sageFemme += planActionElement.ressourceHumain.mobile.sageFemme; // --

                  data[regionElement.codeRegion].ressourceHumain.mobile.technicien += planActionElement.ressourceHumain.mobile.technicien; // --

                  data[regionElement.codeRegion].ressourceHumain.mobile.chauffeur += planActionElement.ressourceHumain.mobile.chauffeur; // --

                  data[regionElement.codeRegion].ressourceHumain.mobile.appuie += planActionElement.ressourceHumain.mobile.appuie; // --

                  data[regionElement.codeRegion].ressourceHumain.mobile.appuie += planActionElement.ressourceHumain.mobile.appuie; // --

                  data[regionElement.codeRegion].ressourceHumain.mobile.emOperationnelle += planActionElement.ressourceHumain.mobile.emOperationnelle;
                } // PDR


                for (p = 0; p < planActionElement.programme.length; p++) {
                  programmeElement = planActionElement.programme[p];

                  if (data[regionElement.codeRegion].pdr[planActionElement.csr.commune]) {
                    data[regionElement.codeRegion].pdr[planActionElement.csr.commune].push({
                      pdr: programmeElement.pdr,
                      localite: programmeElement.localite
                    });
                  } else {
                    data[regionElement.codeRegion].pdr[planActionElement.csr.commune] = [];
                    data[regionElement.codeRegion].pdr[planActionElement.csr.commune].push({
                      pdr: programmeElement.pdr,
                      localite: programmeElement.localite
                    });
                  }
                } // PROGRAMME


                for (_p = 0; _p < planActionElement.programme.length; _p++) {
                  _programmeElement = planActionElement.programme[_p];

                  if (data[regionElement.codeRegion].programme[planActionElement.csr.commune]) {
                    data[regionElement.codeRegion].programme[planActionElement.csr.commune].push({
                      pdr: _programmeElement.pdr,
                      t1: _programmeElement.t1,
                      t2: _programmeElement.t2,
                      t3: _programmeElement.t3,
                      t4: _programmeElement.t4
                    });
                  } else {
                    data[regionElement.codeRegion].programme[planActionElement.csr.commune] = [];
                    data[regionElement.codeRegion].programme[planActionElement.csr.commune].push({
                      pdr: _programmeElement.pdr,
                      t1: _programmeElement.t1,
                      t2: _programmeElement.t2,
                      t3: _programmeElement.t3,
                      t4: _programmeElement.t4
                    });
                  }
                }
              }
            }
          }

          return _context.abrupt("return", data);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
} // DATA REGION


function dataProvince() {
  var data, planAction, i, provinceElement, j, planActionElement, r, vehiculeElement, p, programmeElement, _p2, _programmeElement2;

  return regeneratorRuntime.async(function dataProvince$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          data = {
            1: {
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
            },
            2: {
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
            },
            3: {
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
            },
            4: {
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
            },
            5: {
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
            },
            6: {
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
            },
            7: {
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
            },
            8: {
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
            },
            9: {
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
            },
            10: {
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
            },
            11: {
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
            },
            12: {
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
            },
            13: {
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
            },
            14: {
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
            },
            15: {
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
            },
            16: {
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
            },
            17: {
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
            },
            18: {
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
            },
            19: {
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
            },
            20: {
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
            },
            21: {
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
            },
            22: {
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
            },
            23: {
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
            },
            24: {
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
            },
            25: {
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
            },
            26: {
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
            },
            27: {
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
            },
            28: {
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
            },
            29: {
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
            },
            30: {
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
            },
            31: {
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
            },
            32: {
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
            },
            33: {
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
            },
            34: {
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
            },
            35: {
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
            },
            36: {
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
            },
            37: {
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
            },
            38: {
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
            },
            39: {
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
            },
            40: {
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
            },
            41: {
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
            },
            42: {
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
            },
            43: {
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
            },
            44: {
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
            },
            45: {
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
            },
            46: {
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
            },
            47: {
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
            },
            48: {
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
            },
            49: {
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
            },
            50: {
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
            },
            51: {
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
            },
            52: {
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
            },
            53: {
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
            },
            54: {
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
            },
            55: {
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
            },
            56: {
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
            },
            57: {
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
            },
            58: {
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
            },
            59: {
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
            },
            60: {
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
            },
            61: {
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
            },
            62: {
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
            },
            63: {
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
            },
            64: {
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
            },
            65: {
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
            },
            66: {
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
            },
            67: {
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
            },
            68: {
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
            },
            69: {
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
            },
            70: {
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
            },
            71: {
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
            },
            72: {
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
            },
            73: {
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
            },
            74: {
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
            },
            75: {
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
            }
          };
          _context2.next = 4;
          return regeneratorRuntime.awrap(planActionData.getPlanAction());

        case 4:
          planAction = _context2.sent;

          // ------------------------
          // province
          for (i = 0; i < province.length; i++) {
            provinceElement = province[i]; // planAction

            for (j = 0; j < planAction.length; j++) {
              planActionElement = planAction[j]; // POPULATION

              if (planActionElement.population) {
                data[provinceElement.codeProvince].population.population.rurale += planActionElement.population.population.rurale; // --

                data[provinceElement.codeProvince].population.population.cible += planActionElement.population.population.cible; // --

                data[provinceElement.codeProvince].population.population.habitantMoins3km += planActionElement.population.population.habitantMoins3km; // --

                data[provinceElement.codeProvince].population.population.habitantEntre3km6km += planActionElement.population.population.habitantEntre3km6km; // --

                data[provinceElement.codeProvince].population.population.habitantEntre6km10km += planActionElement.population.population.habitantEntre6km10km; // --

                data[provinceElement.codeProvince].population.population.habitantPlus10km += planActionElement.population.population.habitantPlus10km; // --

                data[provinceElement.codeProvince].population.distanceMoyenneRouteProche += planActionElement.population.distanceMoyenneRouteProche; // --

                data[provinceElement.codeProvince].population.enfant.naissancesAttendues += planActionElement.population.enfant.naissancesAttendues; // --

                data[provinceElement.codeProvince].population.enfant.moins1ans += planActionElement.population.enfant.moins1ans; // --

                data[provinceElement.codeProvince].population.enfant.moins5ans += planActionElement.population.enfant.moins5ans; // --

                data[provinceElement.codeProvince].population.femme.far += planActionElement.population.femme.far; // --

                data[provinceElement.codeProvince].population.femme.fmar += planActionElement.population.femme.fmar; // --

                data[provinceElement.codeProvince].population.femme.femmeEnceinte += planActionElement.population.femme.femmeEnceinte;
              } // --
              // RESSOURCE


              if (planActionElement.ressource) {
                for (r = 0; r < planActionElement.ressource.vehicule.length; r++) {
                  vehiculeElement = planActionElement.ressource.vehicule[r];

                  if (vehiculeElement.appartenance === 'Commune') {
                    if (data[provinceElement.codeProvince].ressource.commune[planActionElement.csr.cs]) {
                      data[provinceElement.codeProvince].ressource.commune[planActionElement.csr.cs].push({
                        type: vehiculeElement.type,
                        age: vehiculeElement.age,
                        csr: {
                          name: planActionElement.csr.csr,
                          category: planActionElement.csr.category
                        }
                      });
                    } else {
                      data[provinceElement.codeProvince].ressource.commune[planActionElement.csr.cs] = [];
                      data[provinceElement.codeProvince].ressource.commune[planActionElement.csr.cs].push({
                        type: vehiculeElement.type,
                        age: vehiculeElement.age,
                        csr: {
                          name: planActionElement.csr.csr,
                          category: planActionElement.csr.category
                        }
                      });
                    }
                  } else if (vehiculeElement.appartenance === 'Ministère de la Santé') {
                    if (data[provinceElement.codeProvince].ressource.ms[planActionElement.csr.cs]) {
                      data[provinceElement.codeProvince].ressource.ms[planActionElement.csr.cs].push({
                        type: vehiculeElement.type,
                        age: vehiculeElement.age,
                        csr: {
                          name: planActionElement.csr.csr,
                          category: planActionElement.csr.category
                        }
                      });
                    } else {
                      data[provinceElement.codeProvince].ressource.ms[planActionElement.csr.cs] = [];
                      data[provinceElement.codeProvince].ressource.ms[planActionElement.csr.cs].push({
                        type: vehiculeElement.type,
                        age: vehiculeElement.age,
                        csr: {
                          name: planActionElement.csr.csr,
                          category: planActionElement.csr.category
                        }
                      });
                    }
                  } else if (vehiculeElement.appartenance === 'Organisation Non Gouvernementale (ONG)') {
                    if (data[provinceElement.codeProvince].ressource.ong[planActionElement.csr.cs]) {
                      data[provinceElement.codeProvince].ressource.ong[planActionElement.csr.cs].push({
                        type: vehiculeElement.type,
                        age: vehiculeElement.age,
                        csr: {
                          name: planActionElement.csr.csr,
                          category: planActionElement.csr.category
                        }
                      });
                    } else {
                      data[provinceElement.codeProvince].ressource.ong[planActionElement.csr.cs] = [];
                      data[provinceElement.codeProvince].ressource.ong[planActionElement.csr.cs].push({
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


              if (provinceElement.ressourceHumain) {
                data[provinceElement.codeProvince].ressourceHumain.fixe.medecin += planActionElement.ressourceHumain.fixe.medecin; // --

                data[provinceElement.codeProvince].ressourceHumain.fixe.infirmier += planActionElement.ressourceHumain.fixe.infirmier; // --

                data[provinceElement.codeProvince].ressourceHumain.fixe.sageFemme += planActionElement.ressourceHumain.fixe.sageFemme; // --

                data[provinceElement.codeProvince].ressourceHumain.fixe.technicien += planActionElement.ressourceHumain.fixe.technicien; // --

                data[provinceElement.codeProvince].ressourceHumain.fixe.chauffeur += planActionElement.ressourceHumain.fixe.chauffeur; // --

                data[provinceElement.codeProvince].ressourceHumain.fixe.appuie += planActionElement.ressourceHumain.fixe.appuie; // --

                data[provinceElement.codeProvince].ressourceHumain.mobile.medecin += planActionElement.ressourceHumain.mobile.medecin; // --

                data[provinceElement.codeProvince].ressourceHumain.mobile.infirmier += planActionElement.ressourceHumain.mobile.infirmier; // --

                data[provinceElement.codeProvince].ressourceHumain.mobile.sageFemme += planActionElement.ressourceHumain.mobile.sageFemme; // --

                data[provinceElement.codeProvince].ressourceHumain.mobile.technicien += planActionElement.ressourceHumain.mobile.technicien; // --

                data[provinceElement.codeProvince].ressourceHumain.mobile.chauffeur += planActionElement.ressourceHumain.mobile.chauffeur; // --

                data[provinceElement.codeProvince].ressourceHumain.mobile.appuie += planActionElement.ressourceHumain.mobile.appuie; // --

                data[provinceElement.codeProvince].ressourceHumain.mobile.appuie += planActionElement.ressourceHumain.mobile.appuie; // --

                data[provinceElement.codeProvince].ressourceHumain.mobile.emOperationnelle += planActionElement.ressourceHumain.mobile.emOperationnelle;
              } // PDR


              for (p = 0; p < planActionElement.programme.length; p++) {
                programmeElement = planActionElement.programme[p];

                if (data[provinceElement.codeProvince].pdr[planActionElement.csr.commune]) {
                  data[provinceElement.codeProvince].pdr[planActionElement.csr.commune].push({
                    pdr: programmeElement.pdr,
                    localite: programmeElement.localite
                  });
                } else {
                  data[provinceElement.codeProvince].pdr[planActionElement.csr.commune] = [];
                  data[provinceElement.codeProvince].pdr[planActionElement.csr.commune].push({
                    pdr: programmeElement.pdr,
                    localite: programmeElement.localite
                  });
                }
              } // PROGRAMME


              for (_p2 = 0; _p2 < planActionElement.programme.length; _p2++) {
                _programmeElement2 = planActionElement.programme[_p2];

                if (data[provinceElement.codeProvince].programme[planActionElement.csr.commune]) {
                  data[provinceElement.codeProvince].programme[planActionElement.csr.commune].push({
                    pdr: _programmeElement2.pdr,
                    t1: _programmeElement2.t1,
                    t2: _programmeElement2.t2,
                    t3: _programmeElement2.t3,
                    t4: _programmeElement2.t4
                  });
                } else {
                  data[provinceElement.codeProvince].programme[planActionElement.csr.commune] = [];
                  data[provinceElement.codeProvince].programme[planActionElement.csr.commune].push({
                    pdr: _programmeElement2.pdr,
                    t1: _programmeElement2.t1,
                    t2: _programmeElement2.t2,
                    t3: _programmeElement2.t3,
                    t4: _programmeElement2.t4
                  });
                }
              }
            }
          }

          return _context2.abrupt("return", data);

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function tauxDataRegion() {
  var data, planAction, listData, i, csrElement, exist, j, planActionElement, key, array, res, total, a;
  return regeneratorRuntime.async(function tauxDataRegion$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          data = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0
          };
          _context3.next = 4;
          return regeneratorRuntime.awrap(planActionData.getPlanAction());

        case 4:
          planAction = _context3.sent;
          listData = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: []
          };

          for (i = 0; i < csr.length; i++) {
            csrElement = csr[i];
            exist = false; // planAction

            for (j = 0; j < planAction.length; j++) {
              planActionElement = planAction[j]; // -----------------------------------

              if (planActionElement.csr.region === csrElement.region && planActionElement.csr.province === csrElement.province && planActionElement.csr.csr === csrElement.name) {
                exist = true;
              }
            }

            if (exist) {
              listData[csrElement.codeRegion].push(100);
            } else {
              listData[csrElement.codeRegion].push(0);
            }
          }

          for (key in listData) {
            array = listData[key];
            total = 0;

            for (a = 0; a < array.length; a++) {
              total += array[a];
            }

            res = parseFloat(total / array.length);

            if (res === 0) {
              data[key] = 0;
            } else if (res < 1) {
              data[key] = res.toFixed(1);
            } else {
              data[key] = parseInt(res);
            }
          }

          return _context3.abrupt("return", data);

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

function tauxDataProvince() {
  var data, planAction, listData, i, csrElement, exist, j, planActionElement, key, array, res, total, a;
  return regeneratorRuntime.async(function tauxDataProvince$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          data = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0,
            14: 0,
            15: 0,
            16: 0,
            17: 0,
            18: 0,
            19: 0,
            20: 0,
            21: 0,
            22: 0,
            23: 0,
            24: 0,
            25: 0,
            26: 0,
            27: 0,
            28: 0,
            29: 0,
            30: 0,
            31: 0,
            32: 0,
            33: 0,
            34: 0,
            35: 0,
            36: 0,
            37: 0,
            38: 0,
            39: 0,
            40: 0,
            41: 0,
            42: 0,
            43: 0,
            44: 0,
            45: 0,
            46: 0,
            47: 0,
            48: 0,
            49: 0,
            50: 0,
            51: 0,
            52: 0,
            53: 0,
            54: 0,
            55: 0,
            56: 0,
            57: 0,
            58: 0,
            59: 0,
            60: 0,
            61: 0,
            62: 0,
            63: 0,
            64: 0,
            65: 0,
            66: 0,
            67: 0,
            68: 0,
            69: 0,
            70: 0,
            71: 0,
            72: 0,
            73: 0,
            74: 0,
            75: 0
          };
          _context4.next = 4;
          return regeneratorRuntime.awrap(planActionData.getPlanAction());

        case 4:
          planAction = _context4.sent;
          listData = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
            32: [],
            33: [],
            34: [],
            35: [],
            36: [],
            37: [],
            38: [],
            39: [],
            40: [],
            41: [],
            42: [],
            43: [],
            44: [],
            45: [],
            46: [],
            47: [],
            48: [],
            49: [],
            50: [],
            51: [],
            52: [],
            53: [],
            54: [],
            55: [],
            56: [],
            57: [],
            58: [],
            59: [],
            60: [],
            61: [],
            62: [],
            63: [],
            64: [],
            65: [],
            66: [],
            67: [],
            68: [],
            69: [],
            70: [],
            71: [],
            72: [],
            73: [],
            74: [],
            75: []
          };

          for (i = 0; i < csr.length; i++) {
            csrElement = csr[i];
            exist = false; // planAction

            for (j = 0; j < planAction.length; j++) {
              planActionElement = planAction[j]; // -----------------------------------

              if (planActionElement.csr.region === csrElement.region && planActionElement.csr.province === csrElement.province && planActionElement.csr.csr === csrElement.name) {
                exist = true;
              }
            }

            if (exist) {
              listData[csrElement.codeProvince].push(100);
            } else {
              listData[csrElement.codeProvince].push(0);
            }
          }

          for (key in listData) {
            array = listData[key];
            total = 0;
            if (!array.length) listData[key].push(0);

            for (a = 0; a < array.length; a++) {
              total += array[a];
            }

            res = parseFloat(total / array.length);

            if (res === 0) {
              data[key] = 0;
            } else if (res < 1) {
              data[key] = res.toFixed(1);
            } else {
              data[key] = parseInt(res);
            }
          }

          return _context4.abrupt("return", data);

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // get the dashbord


function planAction(req, res, next) {
  var data, today;
  return regeneratorRuntime.async(function planAction$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document of the central

          _context5.next = 4;
          return regeneratorRuntime.awrap(centralData.getDocument(req.params.id));

        case 4:
          data.document = _context5.sent;
          _context5.next = 7;
          return regeneratorRuntime.awrap(tauxDataRegion());

        case 7:
          _context5.t0 = _context5.sent;
          _context5.next = 10;
          return regeneratorRuntime.awrap(tauxDataProvince());

        case 10:
          _context5.t1 = _context5.sent;
          data.carte = {
            region: _context5.t0,
            province: _context5.t1
          };
          _context5.next = 14;
          return regeneratorRuntime.awrap(dataRegion());

        case 14:
          _context5.t2 = _context5.sent;
          _context5.next = 17;
          return regeneratorRuntime.awrap(dataProvince());

        case 17:
          _context5.t3 = _context5.sent;
          data.planAction = {
            region: _context5.t2,
            province: _context5.t3
          };
          // render the page
          res.status(200).render('central/planAction', {
            title: 'Tableau de bord | Plan Action | ' + today.getFullYear(),
            url: req.originalUrl,
            data: data,
            region: region,
            province: province,
            page: 'planAction',
            listItem: 'planAction'
          });
          _context5.next = 26;
          break;

        case 22:
          _context5.prev = 22;
          _context5.t4 = _context5["catch"](0);
          console.log(_context5.t4);
          return _context5.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 26:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 22]]);
} // output


module.exports = {
  planAction: planAction
};