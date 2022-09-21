"use strict";

$(document).ready(function () {
  // VARIABLES
  var wholeData = $('#dataProvince').data('carte'),
      title = $('#title').text(),
      provinceList = $('#data').data('list'),
      // init data
  dataEnfantPrisesCharge = wholeData.enfantPrisesCharge.data,
      dataVaccinationDtc3Hib3 = wholeData.vaccinationDtc3Hib3.data,
      dataVaccinationVar = wholeData.vaccinationVar.data,
      dataVitamineA = wholeData.vitamineA.data,
      dataVitamineD = wholeData.vitamineD.data,
      dataPesee = wholeData.pesee.data,
      dataDiarrhe = wholeData.diarrhe.data,
      dataIra = wholeData.ira.data,
      dataReference = wholeData.reference.data,
      // other
  scale = ['#FFF891', '#fcf75a', '#a9a403', '#7DFE69', '#169a01', '#0a4600'],
      data = getData([dataEnfantPrisesCharge]),
      max = getMax(data),
      table = 1;

  function getValue(data, provinceList) {
    var out = {};

    for (var i = 0; i < provinceList.length; i++) {
      var element = provinceList[i];
      out[element] = data[element];
    }

    return out;
  } // MAP


  $('#province-map').vectorMap({
    map: 'province',
    series: {
      regions: [{
        values: getValue(data, provinceList),
        scale: scale,
        normalizeFunction: 'polynomial',
        max: max,
        min: 0,
        legend: {
          horizontal: true,
          labelRender: function labelRender(v) {
            return v;
          }
        }
      }]
    },
    regionStyle: {
      initial: {
        stroke: '#000000',
        'stroke-width': 3,
        fill: '#c6cacd'
      },
      hover: {
        stroke: '#000000',
        'stroke-width': 3,
        fill: '#6294ed'
      }
    },
    backgroundColor: '#a5bfdd',
    regionLabelStyle: {
      initial: {
        fill: '#000000'
      }
    },
    onRegionTipShow: function onRegionTipShow(event, label, code) {
      if (provinceList.includes(parseInt(code))) {
        if (table === 1) {
          label.html("\n\t\t\t\t\t<div class=\"bg-white shadow-sm p-1 rounded\">\n\t\t\t\t\t<table class=\"table table-sm table-bordered fs-8 text-dark\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\" class=\"text-center\">Province : ".concat(label.html(), "</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\" class=\"text-center\">").concat(title, " : <span class=\"fs-7\"><span class=\"badge bg-5\">").concat(data[code], "</span></span></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t\t"));
        } else if (table === 2) {
          label.html("\n\t\t\t\t\t<div class=\"bg-white shadow-sm p-1 rounded\">\n\t\t\t\t\t<table class=\"table table-sm table-bordered fs-8 text-dark\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\" class=\"text-center\">Province : ".concat(label.html(), "</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\" class=\"text-center\">").concat(title, " : <span class=\"fs-7\"><span class=\"badge bg-5\">").concat(data[code], "</span></span></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>DTC3-Hib3</td>\n\t\t\t\t\t\t\t\t<td class=\"fs-7 text-center\"><span class=\"badge bg-5\">").concat(dataVaccinationDtc3Hib3[code], "</span></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>VAR</td>\n\t\t\t\t\t\t\t\t<td class=\"fs-7 text-center\"><span class=\"badge bg-5\">").concat(dataVaccinationVar[code], "</span></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t\t"));
        }
      }
    }
  }); // GET DATA

  function getData(dataset) {
    var data = {
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

    for (var i = 0; i < dataset.length; i++) {
      var dataElement = dataset[i];

      for (var key in dataElement) {
        data[key] += dataElement[key];
      }
    }

    return data;
  } // GET THE MAX VALUE OF ARRAY


  function getMax(data) {
    var max = 0;

    for (var key in data) {
      var element = data[key];
      if (element > max) max = element;
    }

    return max + 1;
  } // EVENT LISTNER


  $('input[type=radio][name=data]').change(function () {
    // get the map
    var map = $('#province-map').vectorMap('get', 'mapObject'); // get the title for tooltip /

    title = $(this).next('span').text(); // change the title in the tooltip

    $('#title').text(title); // hide the dropdown

    $('.dropdown-toggle').dropdown('hide'); // ----------------------------------------------------
    // change te data

    if (this.value === 'enfantPrisesCharge') {
      data = getData([dataEnfantPrisesCharge]);
      table = 1;
    } else if (this.value === 'vaccination') {
      data = getData([dataVaccinationDtc3Hib3, dataVaccinationVar]);
      table = 2;
    } else if (this.value === 'vitamineA') {
      data = getData([dataVitamineA]);
      table = 1;
    } else if (this.value === 'vitamineD') {
      data = getData([dataVitamineD]);
      table = 1;
    } else if (this.value === 'pesee') {
      data = getData([dataPesee]);
      table = 1;
    } else if (this.value === 'diarrhe') {
      data = getData([dataDiarrhe]);
      table = 1;
    } else if (this.value === 'ira') {
      data = getData([dataIra]);
      table = 1;
    } else if (this.value === 'reference') {
      data = getData([dataReference]);
      table = 1;
    } // ----------------------------------------------------
    // apply changes


    map.series.regions[0].params.max = getMax(data);
    map.series.regions[0].setValues(getValue(data, provinceList));
    map.series.regions[0].legend.render();
  });
  $('.thisProvince').addClass('d-none');
});