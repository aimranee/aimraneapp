"use strict";

$(document).ready(function () {
  // VARIABLES
  var wholeData = $('#dataRegion').data('carte'),
      region = $('#region-chart').data('region'),
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

  for (var i = 0; i < region.length; i++) {
    var element = region[i];
    data.data.push(getData([dataFixeMedecin[element.codeRegion], dataFixeInfirmier[element.codeRegion], dataFixeSageFemme[element.codeRegion], dataFixeTechnicien[element.codeRegion], dataFixeChauffeur[element.codeRegion], dataFixeAppuie[element.codeRegion]]));
    data.categories.push(element.region);
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
    chart: {
      toolbar: {
        show: false
      },
      type: 'bar',
      height: 350
    },
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

  var chart = new ApexCharts(document.querySelector('#region-chart'), options);
  chart.render(); // EVENT LISTNER

  $('input[type=radio][name=data]').change(function () {
    data.data = [];
    data.categories = []; // change te data

    if (this.value === 'fixe') {
      for (var _i2 = 0; _i2 < region.length; _i2++) {
        var _element = region[_i2];
        data.data.push(getData([dataFixeMedecin[_element.codeRegion], dataFixeInfirmier[_element.codeRegion], dataFixeSageFemme[_element.codeRegion], dataFixeTechnicien[_element.codeRegion], dataFixeChauffeur[_element.codeRegion], dataFixeAppuie[_element.codeRegion]]));
        data.categories.push(_element.region);
      }

      type = '';
    } else if (this.value === 'mobile') {
      for (var _i3 = 0; _i3 < region.length; _i3++) {
        var _element2 = region[_i3];
        data.data.push(getData([dataMobileMedecin[_element2.codeRegion], dataMobileInfirmier[_element2.codeRegion], dataMobileSageFemme[_element2.codeRegion], dataMobileTechnicien[_element2.codeRegion], dataMobileChauffeur[_element2.codeRegion], dataMobileAppuie[_element2.codeRegion]]));
        data.categories.push(_element2.region);
      }

      type = '';
    } else if (this.value === 'emOperationnelle') {
      for (var _i4 = 0; _i4 < region.length; _i4++) {
        var _element3 = region[_i4];
        data.data.push(getData([dataMobileEmOperationnelle[_element3.codeRegion]]));
        data.categories.push(_element3.region);
      }

      type = '';
    }

    chart.updateSeries([{
      data: data.data
    }]);
  });
});