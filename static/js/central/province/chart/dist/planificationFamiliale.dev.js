"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _chart;

  // VARIABLES
  var wholeData = $('#dataProvince').data('carte'),
      province = $('#province-chart').data('province'),
      type = '',
      // init data
  dataPiluleNa = wholeData.piluleNa.data,
      dataPiluleAa = wholeData.piluleAa.data,
      dataInjectableNa = wholeData.injectableNa.data,
      dataInjectableAa = wholeData.injectableAa.data,
      dataDiuNa = wholeData.diuNa.data,
      dataDiuAa = wholeData.diuAa.data,
      dataCondomNa = wholeData.condomNa.data,
      dataCondomAa = wholeData.condomAa.data,
      dataReferenceDiu = wholeData.referenceDiu.data,
      dataReferenceLt = wholeData.referenceLt.data,
      data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < province.length; i++) {
    var element = province[i];
    data.data.push(getData([dataPiluleNa[element.codeProvince], dataPiluleAa[element.codeProvince]]));
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

    if (this.value === 'pilule') {
      for (var _i2 = 0; _i2 < province.length; _i2++) {
        var element = province[_i2];
        data.data.push(getData([dataPiluleAa[element.codeProvince], dataPiluleNa[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'injectable') {
      for (var _i3 = 0; _i3 < province.length; _i3++) {
        var element = province[_i3];
        data.data.push(getData([dataInjectableAa[element.codeProvince], dataInjectableNa[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'diu') {
      for (var _i4 = 0; _i4 < province.length; _i4++) {
        var element = province[_i4];
        data.data.push(getData([dataDiuAa[element.codeProvince], dataDiuNa[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'condom') {
      for (var _i5 = 0; _i5 < province.length; _i5++) {
        var element = province[_i5];
        data.data.push(getData([dataCondomAa[element.codeProvince], dataCondomNa[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'reference') {
      for (var _i6 = 0; _i6 < province.length; _i6++) {
        var element = province[_i6];
        data.data.push(getData([dataReferenceLt[element.codeProvince], dataReferenceDiu[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    }

    chart.updateSeries([{
      data: data.data
    }]);
  });
  $('.thisProvince').addClass('d-none');
});