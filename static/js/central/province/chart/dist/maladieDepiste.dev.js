"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _chart;

  // VARIABLES
  var wholeData = $('#dataProvince').data('carte'),
      province = $('#province-chart').data('province'),
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

  for (var i = 0; i < province.length; i++) {
    var element = province[i];
    data.data.push(getData([dataDiabeteCas[element.codeProvince], dataDiabeteCasPec[element.codeProvince], dataDiabeteReference[element.codeProvince]]));
    data.categories.push(element.province);
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
    }), _defineProperty(_chart, "type", 'bar'), _defineProperty(_chart, "height", 1500), _chart),
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

    if (this.value === 'diabete') {
      for (var _i2 = 0; _i2 < province.length; _i2++) {
        var element = province[_i2];
        data.data.push(getData([dataDiabeteCas[element.codeProvince], dataDiabeteCasPec[element.codeProvince], dataDiabeteReference[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'hta') {
      for (var _i3 = 0; _i3 < province.length; _i3++) {
        var element = province[_i3];
        data.data.push(getData([dataHtaCas[element.codeProvince], dataHtaCasPec[element.codeProvince], dataHtaReference[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'angine') {
      for (var _i4 = 0; _i4 < province.length; _i4++) {
        var element = province[_i4];
        data.data.push(getData([dataAngineCas[element.codeProvince], dataAngineCasPec[element.codeProvince], dataAngineReference[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'carie') {
      for (var _i5 = 0; _i5 < province.length; _i5++) {
        var element = province[_i5];
        data.data.push(getData([dataCarieCas[element.codeProvince], dataCarieCasPec[element.codeProvince], dataCarieReference[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'parodontopathie') {
      for (var _i6 = 0; _i6 < province.length; _i6++) {
        var element = province[_i6];
        data.data.push(getData([dataParodontopathieCas[element.codeProvince], dataParodontopathieCasPec[element.codeProvince], dataParodontopathieReference[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'maladieMentale') {
      for (var _i7 = 0; _i7 < province.length; _i7++) {
        var element = province[_i7];
        data.data.push(getData([dataMaladieMentaleCas[element.codeProvince], dataMaladieMentaleCasPec[element.codeProvince], dataMaladieMentaleReference[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'ist') {
      for (var _i8 = 0; _i8 < province.length; _i8++) {
        var element = province[_i8];
        data.data.push(getData([dataIstCas[element.codeProvince], dataIstCasPec[element.codeProvince], dataIstReference[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'raa') {
      for (var _i9 = 0; _i9 < province.length; _i9++) {
        var element = province[_i9];
        data.data.push(getData([dataRaaAvecCarditesCas[element.codeProvince], dataRaaAvecCarditesCasPec[element.codeProvince], dataRaaAvecCarditesReference[element.codeProvince], dataRaaSansCarditesCas[element.codeProvince], dataRaaSansCarditesCasPec[element.codeProvince], dataRaaSansCarditesReference[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'tuberculose') {
      for (var _i10 = 0; _i10 < province.length; _i10++) {
        var element = province[_i10];
        data.data.push(getData([dataTuberculosePolmonaireCas[element.codeProvince], dataTuberculosePolmonaireCasPec[element.codeProvince], dataTuberculosePolmonaireReference[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    }

    chart.updateSeries([{
      data: data.data
    }]);
  });
});