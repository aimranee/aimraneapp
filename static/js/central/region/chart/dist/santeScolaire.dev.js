"use strict";

$(document).ready(function () {
  // VARIABLES
  var wholeData = $('#dataRegion').data('carte'),
      region = $('#region-chart').data('region'),
      type = '',
      // init data
  dataEtablissementVisite = wholeData.etablissementVisite.data,
      dataEleveExamineVmsCible = wholeData.eleveExamineVmsCible.data,
      dataEleveExamineVmsRealisation = wholeData.eleveExamineVmsRealisation.data,
      dataLutteContreDeficienceVisuelleEchelleMetriqueCible = wholeData.lutteContreDeficienceVisuelleEchelleMetriqueCible.data,
      dataLutteContreDeficienceVisuelleEchelleMetriqueRealisation = wholeData.lutteContreDeficienceVisuelleEchelleMetriqueRealisation.data,
      dataLutteContreDeficienceVisuelleRefractionAutomatiqueCible = wholeData.lutteContreDeficienceVisuelleRefractionAutomatiqueCible.data,
      dataLutteContreDeficienceVisuelleRefractionAutomatiqueRealisation = wholeData.lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation.data,
      data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < region.length; i++) {
    var element = region[i];
    data.data.push(getData([dataEtablissementVisite[element.codeRegion]]));
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

    if (this.value === 'etablissementVisite') {
      for (var _i2 = 0; _i2 < region.length; _i2++) {
        var element = region[_i2];
        data.data.push(getData([dataEtablissementVisite[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'visiteEleveVue') {
      for (var _i3 = 0; _i3 < region.length; _i3++) {
        var element = region[_i3];
        data.data.push(getData([dataVisiteEleveVue[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'eleveExamineVms') {
      for (var _i4 = 0; _i4 < region.length; _i4++) {
        var element = region[_i4];
        data.data.push(getData([dataEleveExamineVmsCible[element.codeRegion], dataEleveExamineVmsRealisation[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'lutteContreDeficienceVisuelle') {
      for (var _i5 = 0; _i5 < region.length; _i5++) {
        var element = region[_i5];
        data.data.push(getData([dataLutteContreDeficienceVisuelleEchelleMetriqueCible[element.codeRegion], dataLutteContreDeficienceVisuelleEchelleMetriqueRealisation[element.codeRegion], dataLutteContreDeficienceVisuelleRefractionAutomatiqueCible[element.codeRegion], dataLutteContreDeficienceVisuelleRefractionAutomatiqueRealisation[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    }

    chart.updateSeries([{
      data: data.data
    }]);
  });
});