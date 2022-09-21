"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// SET UP
var fs = require('fs');

var regionData = require('../../data/region');

var planActionData = require('../../data/csr/planAction/planAction'); // ERROR


var _require = require('../../util/error'),
    newError = _require.newError; // JSON


var region = JSON.parse(fs.readFileSync("".concat(__dirname, "/../../static/json/region.json")));
var province = JSON.parse(fs.readFileSync("".concat(__dirname, "/../../static/json/province.json")));
var csr = JSON.parse(fs.readFileSync("".concat(__dirname, "/../../static/json/csr.json")));

function getRegionCode(reg) {
  for (var i = 0; i < region.length; i++) {
    var regElement = region[i];

    if (regElement.region === reg) {
      return regElement.codeRegion;
    }
  }
}

function getProvinceList(reg) {
  var list = [];

  for (var i = 0; i < province.length; i++) {
    var provinceElement = province[i];

    if (provinceElement.region === reg) {
      list.push(provinceElement.codeProvince);
    }
  }

  return list;
}

function getDataInitPlanActionProvince(list) {
  var datainit = {};

  for (var i = 0; i < list.length; i++) {
    var listElement = list[i];
    datainit[listElement] = {
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
    };
  }

  return datainit;
}

function getProvinceCode(pro) {
  for (var i = 0; i < province.length; i++) {
    var provinceElement = province[i];

    if (provinceElement.province === pro) {
      return provinceElement.codeProvince;
    }
  }
} // DATA REGION


function dataRegion(region) {
  var codeRegion, data, planAction, j, planActionElement, r, vehiculeElement, p, programmeElement, _p, _programmeElement;

  return regeneratorRuntime.async(function dataRegion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          codeRegion = getRegionCode(region);
          data = _defineProperty({}, codeRegion, {
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
          return regeneratorRuntime.awrap(planActionData.getPlanActionByRegion(region));

        case 5:
          planAction = _context.sent;

          // ------------------------
          // planAction
          for (j = 0; j < planAction.length; j++) {
            planActionElement = planAction[j]; // POPULATION

            if (planActionElement.population) {
              data[codeRegion].population.population.rurale += planActionElement.population.population.rurale; // --

              data[codeRegion].population.population.cible += planActionElement.population.population.cible; // --

              data[codeRegion].population.population.habitantMoins3km += planActionElement.population.population.habitantMoins3km; // --

              data[codeRegion].population.population.habitantEntre3km6km += planActionElement.population.population.habitantEntre3km6km; // --

              data[codeRegion].population.population.habitantEntre6km10km += planActionElement.population.population.habitantEntre6km10km; // --

              data[codeRegion].population.population.habitantPlus10km += planActionElement.population.population.habitantPlus10km; // --

              data[codeRegion].population.distanceMoyenneRouteProche += planActionElement.population.distanceMoyenneRouteProche; // --

              data[codeRegion].population.enfant.naissancesAttendues += planActionElement.population.enfant.naissancesAttendues; // --

              data[codeRegion].population.enfant.moins1ans += planActionElement.population.enfant.moins1ans; // --

              data[codeRegion].population.enfant.moins5ans += planActionElement.population.enfant.moins5ans; // --

              data[codeRegion].population.femme.far += planActionElement.population.femme.far; // --

              data[codeRegion].population.femme.fmar += planActionElement.population.femme.fmar; // --

              data[codeRegion].population.femme.femmeEnceinte += planActionElement.population.femme.femmeEnceinte; // --
            } // RESSOURCE


            if (planActionElement.ressource) {
              for (r = 0; r < planActionElement.ressource.vehicule.length; r++) {
                vehiculeElement = planActionElement.ressource.vehicule[r];
                console.log(vehiculeElement);

                if (vehiculeElement.appartenance === 'Commune') {
                  if (data[codeRegion].ressource.commune[planActionElement.csr.cs]) {
                    data[codeRegion].ressource.commune[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  } else {
                    data[codeRegion].ressource.commune[planActionElement.csr.cs] = [];
                    data[codeRegion].ressource.commune[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  }
                } else if (vehiculeElement.appartenance === 'Ministère de la Santé') {
                  if (data[codeRegion].ressource.ms[planActionElement.csr.cs]) {
                    data[codeRegion].ressource.ms[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  } else {
                    data[codeRegion].ressource.ms[planActionElement.csr.cs] = [];
                    data[codeRegion].ressource.ms[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  }
                } else if (vehiculeElement.appartenance === 'Organisation Non Gouvernementale (ONG)') {
                  if (data[codeRegion].ressource.ong[planActionElement.csr.cs]) {
                    data[codeRegion].ressource.ong[planActionElement.csr.cs].push({
                      type: vehiculeElement.type,
                      age: vehiculeElement.age,
                      csr: {
                        name: planActionElement.csr.csr,
                        category: planActionElement.csr.category
                      }
                    });
                  } else {
                    data[codeRegion].ressource.ong[planActionElement.csr.cs] = [];
                    data[codeRegion].ressource.ong[planActionElement.csr.cs].push({
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


            if (planActionElement.ressourceHumain) {
              // --
              data[codeRegion].ressourceHumain.fixe.medecin += planActionElement.ressourceHumain.fixe.medecin; // --

              data[codeRegion].ressourceHumain.fixe.infirmier += planActionElement.ressourceHumain.fixe.infirmier; // --

              data[codeRegion].ressourceHumain.fixe.sageFemme += planActionElement.ressourceHumain.fixe.sageFemme; // --

              data[codeRegion].ressourceHumain.fixe.technicien += planActionElement.ressourceHumain.fixe.technicien; // --

              data[codeRegion].ressourceHumain.fixe.chauffeur += planActionElement.ressourceHumain.fixe.chauffeur; // --

              data[codeRegion].ressourceHumain.fixe.appuie += planActionElement.ressourceHumain.fixe.appuie; // --

              data[codeRegion].ressourceHumain.mobile.medecin += planActionElement.ressourceHumain.mobile.medecin; // --

              data[codeRegion].ressourceHumain.mobile.infirmier += planActionElement.ressourceHumain.mobile.infirmier; // --

              data[codeRegion].ressourceHumain.mobile.sageFemme += planActionElement.ressourceHumain.mobile.sageFemme; // --

              data[codeRegion].ressourceHumain.mobile.technicien += planActionElement.ressourceHumain.mobile.technicien; // --

              data[codeRegion].ressourceHumain.mobile.chauffeur += planActionElement.ressourceHumain.mobile.chauffeur; // --

              data[codeRegion].ressourceHumain.mobile.appuie += planActionElement.ressourceHumain.mobile.appuie; // --

              data[codeRegion].ressourceHumain.mobile.appuie += planActionElement.ressourceHumain.mobile.appuie; // --

              data[codeRegion].ressourceHumain.mobile.emOperationnelle += planActionElement.ressourceHumain.mobile.emOperationnelle;
            } // PDR


            for (p = 0; p < planActionElement.programme.length; p++) {
              programmeElement = planActionElement.programme[p];

              if (data[codeRegion].pdr[planActionElement.csr.commune]) {
                data[codeRegion].pdr[planActionElement.csr.commune].push({
                  pdr: programmeElement.pdr,
                  localite: programmeElement.localite
                });
              } else {
                data[codeRegion].pdr[planActionElement.csr.commune] = [];
                data[codeRegion].pdr[planActionElement.csr.commune].push({
                  pdr: programmeElement.pdr,
                  localite: programmeElement.localite
                });
              }
            } // PROGRAMME


            for (_p = 0; _p < planActionElement.programme.length; _p++) {
              _programmeElement = planActionElement.programme[_p];

              if (data[codeRegion].programme[planActionElement.csr.commune]) {
                data[codeRegion].programme[planActionElement.csr.commune].push({
                  pdr: _programmeElement.pdr,
                  t1: _programmeElement.t1,
                  t2: _programmeElement.t2,
                  t3: _programmeElement.t3,
                  t4: _programmeElement.t4
                });
              } else {
                data[codeRegion].programme[planActionElement.csr.commune] = [];
                data[codeRegion].programme[planActionElement.csr.commune].push({
                  pdr: _programmeElement.pdr,
                  t1: _programmeElement.t1,
                  t2: _programmeElement.t2,
                  t3: _programmeElement.t3,
                  t4: _programmeElement.t4
                });
              }
            }
          }

          return _context.abrupt("return", data);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          throw newError(500, "quelque chose s'est mal passé");

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // DATA REGION


function dataProvince(region, provinceList) {
  var data, planAction, i, provinceListElement, j, planActionElement, r, vehiculeElement, p, programmeElement, _p2, _programmeElement2;

  return regeneratorRuntime.async(function dataProvince$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          data = getDataInitPlanActionProvince(provinceList);
          _context2.next = 4;
          return regeneratorRuntime.awrap(planActionData.getPlanActionByRegion(region));

        case 4:
          planAction = _context2.sent;

          // ------------------------
          // province
          for (i = 0; i < provinceList.length; i++) {
            provinceListElement = provinceList[i]; // planAction

            for (j = 0; j < planAction.length; j++) {
              planActionElement = planAction[j];

              if (provinceListElement === getProvinceCode(planActionElement.csr.province)) {
                // POPULATION;
                // --
                if (planActionElement.population) {
                  data[provinceListElement].population.population.rurale += planActionElement.population.population.rurale; // --

                  data[provinceListElement].population.population.cible += planActionElement.population.population.cible; // --

                  data[provinceListElement].population.population.habitantMoins3km += planActionElement.population.population.habitantMoins3km; // --

                  data[provinceListElement].population.population.habitantEntre3km6km += planActionElement.population.population.habitantEntre3km6km; // --

                  data[provinceListElement].population.population.habitantEntre6km10km += planActionElement.population.population.habitantEntre6km10km; // --

                  data[provinceListElement].population.population.habitantPlus10km += planActionElement.population.population.habitantPlus10km; // --

                  data[provinceListElement].population.distanceMoyenneRouteProche += planActionElement.population.distanceMoyenneRouteProche; // --

                  data[provinceListElement].population.enfant.naissancesAttendues += planActionElement.population.enfant.naissancesAttendues; // --

                  data[provinceListElement].population.enfant.moins1ans += planActionElement.population.enfant.moins1ans; // --

                  data[provinceListElement].population.enfant.moins5ans += planActionElement.population.enfant.moins5ans; // --

                  data[provinceListElement].population.femme.far += planActionElement.population.femme.far; // --

                  data[provinceListElement].population.femme.fmar += planActionElement.population.femme.fmar; // --

                  data[provinceListElement].population.femme.femmeEnceinte += planActionElement.population.femme.femmeEnceinte;
                } // --
                // RESSOURCE


                if (planActionElement.ressource) {
                  for (r = 0; r < planActionElement.ressource.vehicule.length; r++) {
                    vehiculeElement = planActionElement.ressource.vehicule[r];
                    console.log(vehiculeElement);

                    if (vehiculeElement.appartenance === 'Commune') {
                      if (data[provinceListElement].ressource.commune[planActionElement.csr.cs]) {
                        data[provinceListElement].ressource.commune[planActionElement.csr.cs].push({
                          type: vehiculeElement.type,
                          age: vehiculeElement.age,
                          csr: {
                            name: planActionElement.csr.csr,
                            category: planActionElement.csr.category
                          }
                        });
                      } else {
                        data[provinceListElement].ressource.commune[planActionElement.csr.cs] = [];
                        data[provinceListElement].ressource.commune[planActionElement.csr.cs].push({
                          type: vehiculeElement.type,
                          age: vehiculeElement.age,
                          csr: {
                            name: planActionElement.csr.csr,
                            category: planActionElement.csr.category
                          }
                        });
                      }
                    } else if (vehiculeElement.appartenance === 'Ministère de la Santé') {
                      if (data[provinceListElement].ressource.ms[planActionElement.csr.cs]) {
                        data[provinceListElement].ressource.ms[planActionElement.csr.cs].push({
                          type: vehiculeElement.type,
                          age: vehiculeElement.age,
                          csr: {
                            name: planActionElement.csr.csr,
                            category: planActionElement.csr.category
                          }
                        });
                      } else {
                        data[provinceListElement].ressource.ms[planActionElement.csr.cs] = [];
                        data[provinceListElement].ressource.ms[planActionElement.csr.cs].push({
                          type: vehiculeElement.type,
                          age: vehiculeElement.age,
                          csr: {
                            name: planActionElement.csr.csr,
                            category: planActionElement.csr.category
                          }
                        });
                      }
                    } else if (vehiculeElement.appartenance === 'Organisation Non Gouvernementale (ONG)') {
                      if (data[provinceListElement].ressource.ong[planActionElement.csr.cs]) {
                        data[provinceListElement].ressource.ong[planActionElement.csr.cs].push({
                          type: vehiculeElement.type,
                          age: vehiculeElement.age,
                          csr: {
                            name: planActionElement.csr.csr,
                            category: planActionElement.csr.category
                          }
                        });
                      } else {
                        data[provinceListElement].ressource.ong[planActionElement.csr.cs] = [];
                        data[provinceListElement].ressource.ong[planActionElement.csr.cs].push({
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
                  data[provinceListElement].ressourceHumain.fixe.medecin += planActionElement.ressourceHumain.fixe.medecin; // --

                  data[provinceListElement].ressourceHumain.fixe.infirmier += planActionElement.ressourceHumain.fixe.infirmier; // --

                  data[provinceListElement].ressourceHumain.fixe.sageFemme += planActionElement.ressourceHumain.fixe.sageFemme; // --

                  data[provinceListElement].ressourceHumain.fixe.technicien += planActionElement.ressourceHumain.fixe.technicien; // --

                  data[provinceListElement].ressourceHumain.fixe.chauffeur += planActionElement.ressourceHumain.fixe.chauffeur; // --

                  data[provinceListElement].ressourceHumain.fixe.appuie += planActionElement.ressourceHumain.fixe.appuie; // --

                  data[provinceListElement].ressourceHumain.mobile.medecin += planActionElement.ressourceHumain.mobile.medecin; // --

                  data[provinceListElement].ressourceHumain.mobile.infirmier += planActionElement.ressourceHumain.mobile.infirmier; // --

                  data[provinceListElement].ressourceHumain.mobile.sageFemme += planActionElement.ressourceHumain.mobile.sageFemme; // --

                  data[provinceListElement].ressourceHumain.mobile.technicien += planActionElement.ressourceHumain.mobile.technicien; // --

                  data[provinceListElement].ressourceHumain.mobile.chauffeur += planActionElement.ressourceHumain.mobile.chauffeur; // --

                  data[provinceListElement].ressourceHumain.mobile.appuie += planActionElement.ressourceHumain.mobile.appuie; // --

                  data[provinceListElement].ressourceHumain.mobile.appuie += planActionElement.ressourceHumain.mobile.appuie; // --

                  data[provinceListElement].ressourceHumain.mobile.emOperationnelle += planActionElement.ressourceHumain.mobile.emOperationnelle;
                } // PDR


                for (p = 0; p < planActionElement.programme.length; p++) {
                  programmeElement = planActionElement.programme[p];

                  if (data[provinceListElement].pdr[planActionElement.csr.commune]) {
                    data[provinceListElement].pdr[planActionElement.csr.commune].push({
                      pdr: programmeElement.pdr,
                      localite: programmeElement.localite
                    });
                  } else {
                    data[provinceListElement].pdr[planActionElement.csr.commune] = [];
                    data[provinceListElement].pdr[planActionElement.csr.commune].push({
                      pdr: programmeElement.pdr,
                      localite: programmeElement.localite
                    });
                  }
                } // PROGRAMME


                for (_p2 = 0; _p2 < planActionElement.programme.length; _p2++) {
                  _programmeElement2 = planActionElement.programme[_p2];

                  if (data[provinceListElement].programme[planActionElement.csr.commune]) {
                    data[provinceListElement].programme[planActionElement.csr.commune].push({
                      pdr: _programmeElement2.pdr,
                      t1: _programmeElement2.t1,
                      t2: _programmeElement2.t2,
                      t3: _programmeElement2.t3,
                      t4: _programmeElement2.t4
                    });
                  } else {
                    data[provinceListElement].programme[planActionElement.csr.commune] = [];
                    data[provinceListElement].programme[planActionElement.csr.commune].push({
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

function tauxDataRegion(region) {
  var data, planAction, listData, i, csrElement, exist, j, planActionElement, key, array, res, total, a;
  return regeneratorRuntime.async(function tauxDataRegion$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          data = {};
          _context3.next = 4;
          return regeneratorRuntime.awrap(planActionData.getPlanActionByRegion(region));

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

            if (array.length) res = parseFloat(total / array.length);

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

function tauxDataProvince(region) {
  var data, planAction, listData, i, csrElement, exist, j, planActionElement, key, array, res, total, a;
  return regeneratorRuntime.async(function tauxDataProvince$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          data = {};
          _context4.next = 4;
          return regeneratorRuntime.awrap(planActionData.getPlanActionByRegion(region));

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
  var data, today, provinceList;
  return regeneratorRuntime.async(function planAction$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          // collect data
          data = {}, today = new Date(); // get the document of the region

          _context5.next = 4;
          return regeneratorRuntime.awrap(regionData.getDocument(req.params.id));

        case 4:
          data.document = _context5.sent;
          // list province
          provinceList = getProvinceList(data.document.region); // taux de remplissage

          _context5.next = 8;
          return regeneratorRuntime.awrap(tauxDataRegion(data.document.region));

        case 8:
          _context5.t0 = _context5.sent;
          _context5.next = 11;
          return regeneratorRuntime.awrap(tauxDataProvince(data.document.region));

        case 11:
          _context5.t1 = _context5.sent;
          data.carte = {
            region: _context5.t0,
            province: _context5.t1
          };
          _context5.next = 15;
          return regeneratorRuntime.awrap(dataRegion(data.document.region));

        case 15:
          _context5.t2 = _context5.sent;
          _context5.next = 18;
          return regeneratorRuntime.awrap(dataProvince(data.document.region, provinceList));

        case 18:
          _context5.t3 = _context5.sent;
          data.planAction = {
            region: _context5.t2,
            province: _context5.t3
          };
          // render the page
          res.status(200).render('region/planAction', {
            title: 'Tableau de bord | Plan Action | ' + today.getFullYear(),
            url: req.originalUrl,
            data: data,
            region: region,
            province: province,
            provinceList: provinceList,
            page: 'planAction',
            listItem: 'planAction'
          });
          _context5.next = 27;
          break;

        case 23:
          _context5.prev = 23;
          _context5.t4 = _context5["catch"](0);
          console.log(_context5.t4);
          return _context5.abrupt("return", next(newError(500, "quelque chose s'est mal passé")));

        case 27:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 23]]);
} // output


module.exports = {
  planAction: planAction
};