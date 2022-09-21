"use strict";

$(document).ready(function () {
  // VARIABLES
  var wholeData = $('#dataRegion').data('carte'),
      region = $('#region-chart').data('region'),
      type = '',
      // init data
  dataEnfantPrisesCharge = wholeData.enfantPrisesCharge.data,
      dataVaccinationPentavalent = wholeData.vaccinationPentavalent.data,
      dataVaccinationRr = wholeData.vaccinationRr.data,
      dataVaccinationBcg = wholeData.vaccinationBcg.data,
      dataVitamineA = wholeData.vitamineA.data,
      dataVitamineD = wholeData.vitamineD.data,
      dataEnfantsAvecInsuffisancePonderale = wholeData.enfantsAvecInsuffisancePonderale.data,
      dataEnfantsAvecRetardCroissance = wholeData.enfantsAvecRetardCroissance.data,
      dataDiarrhe = wholeData.diarrhe.data,
      dataIra = wholeData.ira.data,
      dataReference = wholeData.reference.data,
      data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < region.length; i++) {
    var element = region[i];
    data.data.push(getData([dataEnfantPrisesCharge[element.codeRegion]]));
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

    if (this.value === 'enfantPrisesCharge') {
      for (var _i2 = 0; _i2 < region.length; _i2++) {
        var element = region[_i2];
        data.data.push(getData([dataEnfantPrisesCharge[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'vaccination') {
      for (var _i3 = 0; _i3 < region.length; _i3++) {
        var element = region[_i3];
        data.data.push(getData([dataVaccinationPentavalent[element.codeRegion], dataVaccinationRr[element.codeRegion], dataVaccinationBcg[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'vitamineA') {
      for (var _i4 = 0; _i4 < region.length; _i4++) {
        var element = region[_i4];
        data.data.push(getData([dataVitamineA[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'vitamineD') {
      for (var _i5 = 0; _i5 < region.length; _i5++) {
        var element = region[_i5];
        data.data.push(getData([dataVitamineD[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'enfantsAvecInsuffisancePonderale') {
      for (var _i6 = 0; _i6 < region.length; _i6++) {
        var element = region[_i6];
        data.data.push(getData([dataEnfantsAvecInsuffisancePonderale[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'enfantsAvecRetardCroissance') {
      for (var _i7 = 0; _i7 < region.length; _i7++) {
        var element = region[_i7];
        data.data.push(getData([dataEnfantsAvecRetardCroissance[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'diarrhe') {
      for (var _i8 = 0; _i8 < region.length; _i8++) {
        var element = region[_i8];
        data.data.push(getData([dataDiarrhe[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'ira') {
      for (var _i9 = 0; _i9 < region.length; _i9++) {
        var element = region[_i9];
        data.data.push(getData([dataIra[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'reference') {
      for (var _i10 = 0; _i10 < region.length; _i10++) {
        var element = region[_i10];
        data.data.push(getData([dataReference[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    }

    chart.updateSeries([{
      data: data.data
    }]);
  });
});