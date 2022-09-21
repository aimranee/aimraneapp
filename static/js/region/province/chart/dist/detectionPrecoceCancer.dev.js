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
  dataFemmeExamineCancerSein = wholeData.femmeExamineCancerSein.data,
      dataFemmeExamineCancerCol = wholeData.femmeExamineCancerCol.data,
      dataFemmeRefereCancerSein = wholeData.femmeRefereCancerSein.data,
      dataFemmeRefereCancerCol = wholeData.femmeRefereCancerCol.data,
      data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < province.length; i++) {
    var element = province[i];

    if (provinceList.includes(element.codeProvince)) {
      data.data.push(getData([dataFemmeExamineCancerSein[element.codeProvince], dataFemmeExamineCancerCol[element.codeProvince]]));
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

    if (this.value === 'femmeExamine') {
      for (var _i2 = 0; _i2 < province.length; _i2++) {
        var element = province[_i2];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataFemmeExamineCancerSein[element.codeProvince], dataFemmeExamineCancerCol[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'femmeRefere') {
      for (var _i3 = 0; _i3 < province.length; _i3++) {
        var element = province[_i3];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataFemmeRefereCancerSein[element.codeProvince], dataFemmeRefereCancerCol[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    }

    chart.updateSeries([{
      data: data.data
    }]);
  });
  $('.thisProvince').addClass('d-none');
});