"use strict";

$(document).ready(function () {
  // VARIABLES
  var wholeData = $('#dataRegion').data('carte'),
      region = $('#region-chart').data('region'),
      type = '',
      // init data
  dataPopulationCible = wholeData.populationCible.data,
      dataPopulationRurale = wholeData.populationRurale.data,
      dataPopulationHabitantMoins3km = wholeData.populationHabitantMoins3km.data,
      dataPopulationHabitantEntre3km6km = wholeData.populationHabitantEntre3km6km.data,
      dataPopulationHabitantEntre6km10km = wholeData.populationHabitantEntre6km10km.data,
      dataPopulationHabitantPlus10km = wholeData.populationHabitantPlus10km.data,
      dataEnfantMoins1ans = wholeData.enfantMoins1ans.data,
      dataEnfantMoins5ans = wholeData.enfantMoins5ans.data,
      dataNaissancesAttendues = wholeData.naissancesAttendues.data,
      dataFar = wholeData.far.data,
      dataFmar = wholeData.fmar.data,
      dataFemmeEnceinte = wholeData.femmeEnceinte.data,
      dataDistanceMoyenneRouteProche = wholeData.distanceMoyenneRouteProche.data,
      data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < region.length; i++) {
    var element = region[i];
    data.data.push(getData([dataPopulationCible[element.codeRegion]]));
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

    if (this.value === 'populationCible') {
      for (var _i2 = 0; _i2 < region.length; _i2++) {
        var element = region[_i2];
        data.data.push(getData([dataPopulationCible[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'enfant') {
      for (var _i3 = 0; _i3 < region.length; _i3++) {
        var element = region[_i3];
        data.data.push(getData([dataEnfantMoins1ans[element.codeRegion], dataEnfantMoins5ans[element.codeRegion], dataNaissancesAttendues[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'femme') {
      for (var _i4 = 0; _i4 < region.length; _i4++) {
        var element = region[_i4];
        data.data.push(getData([dataFar[element.codeRegion], dataFmar[element.codeRegion], dataFemmeEnceinte[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'distanceMoyenneRouteProche') {
      for (var _i5 = 0; _i5 < region.length; _i5++) {
        var element = region[_i5];
        data.data.push(getData([dataDistanceMoyenneRouteProche[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = 'Km';
    } else if (this.value === 'indiceSynthetiqueFecondite') {
      for (var _i6 = 0; _i6 < region.length; _i6++) {
        var element = region[_i6];
        data.data.push(getData([dataIndiceSynthetiqueFecondite[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'personneAge') {
      for (var _i7 = 0; _i7 < region.length; _i7++) {
        var element = region[_i7];
        data.data.push(getData([dataPersonneAge[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    }

    chart.updateSeries([{
      data: data.data
    }]);
  });
});