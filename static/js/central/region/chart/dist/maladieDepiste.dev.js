"use strict";

$(document).ready(function () {
  // VARIABLES
  var wholeData = $('#dataRegion').data('carte'),
      region = $('#region-chart').data('region'),
      type = '',
      // init data
  dataDiabeteCas = wholeData.diabeteCas.data,
      dataDiabeteCasPec = wholeData.diabeteCasPec.data,
      dataDiabeteReference = wholeData.diabeteReference.data,
      dataHtaCas = wholeData.htaCas.data,
      dataHtaCasPec = wholeData.htaCasPec.data,
      dataHtaReference = wholeData.htaReference.data,
      dataAngineCas = wholeData.angineCas.data,
      dataAngineCasPec = wholeData.angineCasPec.data,
      dataAngineReference = wholeData.angineReference.data,
      dataCarieCas = wholeData.carieCas.data,
      dataCarieCasPec = wholeData.carieCasPec.data,
      dataCarieReference = wholeData.carieReference.data,
      dataParodontopathieCas = wholeData.parodontopathieCas.data,
      dataParodontopathieCasPec = wholeData.parodontopathieCasPec.data,
      dataParodontopathieReference = wholeData.parodontopathieReference.data,
      dataMaladieMentaleCas = wholeData.maladieMentaleCas.data,
      dataMaladieMentaleCasPec = wholeData.maladieMentaleCasPec.data,
      dataMaladieMentaleReference = wholeData.maladieMentaleReference.data,
      dataIstCas = wholeData.istCas.data,
      dataIstCasPec = wholeData.istCasPec.data,
      dataIstReference = wholeData.istReference.data,
      dataRaaAvecCarditesCas = wholeData.raaAvecCarditesCas.data,
      dataRaaAvecCarditesCasPec = wholeData.raaAvecCarditesCasPec.data,
      dataRaaAvecCarditesReference = wholeData.raaAvecCarditesReference.data,
      dataRaaSansCarditesCas = wholeData.raaSansCarditesCas.data,
      dataRaaSansCarditesCasPec = wholeData.raaSansCarditesCasPec.data,
      dataRaaSansCarditesReference = wholeData.raaSansCarditesReference.data,
      dataTuberculosePolmonaireCas = wholeData.tuberculosePolmonaireCas.data,
      dataTuberculosePolmonaireCasPec = wholeData.tuberculosePolmonaireCasPec.data,
      dataTuberculosePolmonaireReference = wholeData.tuberculosePolmonaireReference.data,
      data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < region.length; i++) {
    var element = region[i];
    data.data.push(getData([dataDiabeteCas[element.codeRegion], dataDiabeteCasPec[element.codeRegion], dataDiabeteReference[element.codeRegion]]));
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

    if (this.value === 'diabete') {
      for (var _i2 = 0; _i2 < region.length; _i2++) {
        var element = region[_i2];
        data.data.push(getData([dataDiabeteCas[element.codeRegion], dataDiabeteCasPec[element.codeRegion], dataDiabeteReference[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'hta') {
      for (var _i3 = 0; _i3 < region.length; _i3++) {
        var element = region[_i3];
        data.data.push(getData([dataHtaCas[element.codeRegion], dataHtaCasPec[element.codeRegion], dataHtaReference[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'angine') {
      for (var _i4 = 0; _i4 < region.length; _i4++) {
        var element = region[_i4];
        data.data.push(getData([dataAngineCas[element.codeRegion], dataAngineCasPec[element.codeRegion], dataAngineReference[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'carie') {
      for (var _i5 = 0; _i5 < region.length; _i5++) {
        var element = region[_i5];
        data.data.push(getData([dataCarieCas[element.codeRegion], dataCarieCasPec[element.codeRegion], dataCarieReference[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'parodontopathie') {
      for (var _i6 = 0; _i6 < region.length; _i6++) {
        var element = region[_i6];
        data.data.push(getData([dataParodontopathieCas[element.codeRegion], dataParodontopathieCasPec[element.codeRegion], dataParodontopathieReference[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'maladieMentale') {
      for (var _i7 = 0; _i7 < region.length; _i7++) {
        var element = region[_i7];
        data.data.push(getData([dataMaladieMentaleCas[element.codeRegion], dataMaladieMentaleCasPec[element.codeRegion], dataMaladieMentaleReference[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'ist') {
      for (var _i8 = 0; _i8 < region.length; _i8++) {
        var element = region[_i8];
        data.data.push(getData([dataIstCas[element.codeRegion], dataIstCasPec[element.codeRegion], dataIstReference[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'raa') {
      for (var _i9 = 0; _i9 < region.length; _i9++) {
        var element = region[_i9];
        data.data.push(getData([dataRaaAvecCarditesCas[element.codeRegion], dataRaaAvecCarditesCasPec[element.codeRegion], dataRaaAvecCarditesReference[element.codeRegion], dataRaaSansCarditesCas[element.codeRegion], dataRaaSansCarditesCasPec[element.codeRegion], dataRaaSansCarditesReference[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    } else if (this.value === 'tuberculose') {
      for (var _i10 = 0; _i10 < region.length; _i10++) {
        var element = region[_i10];
        data.data.push(getData([dataTuberculosePolmonaireCas[element.codeRegion], dataTuberculosePolmonaireCasPec[element.codeRegion], dataTuberculosePolmonaireReference[element.codeRegion]]));
        data.categories.push(element.region);
      }

      type = '';
    }

    chart.updateSeries([{
      data: data.data
    }]);
  });
});