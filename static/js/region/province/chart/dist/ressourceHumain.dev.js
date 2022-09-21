"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _chart;

  // VARIABLES
  var wholeData = $('#dataProvince').data('carte'),
      province = $('#province-chart').data('province'),
      provinceList = $('#data').data('list'),
      type = '',
      // init data
  dataFixeMedecin = wholeData.fixeMedecin.data,
      // fixeInfirmier
  dataFixeInfirmier = wholeData.fixeInfirmier.data,
      // fixeSageFemme
  dataFixeSageFemme = wholeData.fixeSageFemme.data,
      // fixeTechnicien
  dataFixeTechnicien = wholeData.fixeTechnicien.data,
      // fixeChauffeur
  dataFixeChauffeur = wholeData.fixeChauffeur.data,
      // fixeAppuie
  dataFixeAppuie = wholeData.fixeAppuie.data,
      // mobileMedecin
  dataMobileMedecin = wholeData.mobileMedecin.data,
      // mobileInfirmier
  dataMobileInfirmier = wholeData.mobileInfirmier.data,
      // mobileSageFemme
  dataMobileSageFemme = wholeData.mobileSageFemme.data,
      // mobileTechnicien
  dataMobileTechnicien = wholeData.mobileTechnicien.data,
      // mobileChauffeur
  dataMobileChauffeur = wholeData.mobileChauffeur.data,
      // mobileAppuie
  dataMobileAppuie = wholeData.mobileAppuie.data,
      // mobileEmOperationnelle
  dataMobileEmOperationnelle = wholeData.mobileEmOperationnelle.data,
      data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < province.length; i++) {
    var element = province[i];

    if (provinceList.includes(element.codeProvince)) {
      data.data.push(getData([dataFixeMedecin[element.codeProvince], dataFixeInfirmier[element.codeProvince], dataFixeSageFemme[element.codeProvince], dataFixeTechnicien[element.codeProvince], dataFixeChauffeur[element.codeProvince], dataFixeAppuie[element.codeProvince]]));
      data.categories.push(element.province);
    }
  } // SUM DATA
  // GET DATA


  function getData(dataset) {
    var data = 0;

    for (var _i = 0; _i < dataset.length; _i++) {
      var dataElement = dataset[_i];
      data += dataElement;
    }

    return data;
  } // CHART OPTION


  var options = {
    series: [{
      data: data.data
    }],
    chart: (_chart = {
      toolbar: {
        show: false
      }
    }, _defineProperty(_chart, "toolbar", {
      show: false
    }), _defineProperty(_chart, "toolbar", {
      show: false
    }), _defineProperty(_chart, "type", 'bar'), _defineProperty(_chart, "height", 40 * provinceList.length), _chart),
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: '70%'
      }
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#000']
      },
      formatter: function formatter(val, opt) {
        return val + type;
      },
      offsetX: 0
    },
    xaxis: {
      categories: data.categories
    },
    colors: ['#6294ed'],
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '15px',
        fontFamily: undefined
      },
      marker: {
        show: false
      },
      y: {
        formatter: function formatter(value, _ref) {
          var series = _ref.series,
              seriesIndex = _ref.seriesIndex,
              dataPointIndex = _ref.dataPointIndex,
              w = _ref.w;
          return value + type;
        },
        title: {
          formatter: function formatter() {
            return '';
          }
        }
      }
    }
  }; // RENDER CHART

  var chart = new ApexCharts(document.querySelector('#province-chart'), options);
  chart.render(); // EVENT LISTNER

  $('input[type=radio][name=data]').change(function () {
    data.data = [];
    data.categories = []; // change te data

    if (this.value === 'fixe') {
      for (var _i2 = 0; _i2 < province.length; _i2++) {
        var element = province[_i2];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataFixeMedecin[element.codeProvince], dataFixeInfirmier[element.codeProvince], dataFixeSageFemme[element.codeProvince], dataFixeTechnicien[element.codeProvince], dataFixeChauffeur[element.codeProvince], dataFixeAppuie[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'mobile') {
      for (var _i3 = 0; _i3 < province.length; _i3++) {
        var element = province[_i3];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataMobileMedecin[element.codeProvince], dataMobileInfirmier[element.codeProvince], dataMobileSageFemme[element.codeProvince], dataMobileTechnicien[element.codeProvince], dataMobileChauffeur[element.codeProvince], dataMobileAppuie[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'emOperationnelle') {
      for (var _i4 = 0; _i4 < province.length; _i4++) {
        var element = province[_i4];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataMobileEmOperationnelle[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    }

    chart.updateSeries([{
      data: data.data
    }]);
  });
});