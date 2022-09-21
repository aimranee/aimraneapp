"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _chart;

  // FUNCTION
  function getData(data, csrList) {
    // variable
    var objOut = {
      data: [],
      categories: []
    },
        listTemp = {};

    for (var i = 0; i < csrList.length; i++) {
      var element = csrList[i];
      listTemp[element.csr] = 0;
    } // loop


    for (var _i = 0; _i < data.length; _i++) {
      var dataeElement = data[_i];

      for (var key in dataeElement.data) {
        if (Object.hasOwnProperty.call(dataeElement.data, key)) {
          var _element = dataeElement.data[key];
          listTemp[key] += _element.value;
        }
      }
    }

    for (var _key in listTemp) {
      if (Object.hasOwnProperty.call(listTemp, _key)) {
        var _element2 = listTemp[_key];
        objOut.data.push(_element2);
        objOut.categories.push(_key);
      }
    }

    return objOut;
  } // VARIABLES


  var wholeData = $('#data').data('provincedata'),
      csrList = $('#data').data('csrlist'),
      // init data
  // DATA LOADING
  data = getData([wholeData.autreActivite], csrList),
      extraText = ''; // CHART OPTION

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
    }), _defineProperty(_chart, "type", 'bar'), _defineProperty(_chart, "height", 30 * data.categories.length), _chart),
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
        return val + extraText;
      },
      offsetX: 0
    },
    xaxis: {
      categories: data.categories
    },
    yaxis: {
      min: 0
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
          return value + extraText;
        },
        title: {
          formatter: function formatter() {
            return '';
          }
        }
      }
    }
  }; // RENDER CHART

  var chart = new ApexCharts(document.querySelector('#csr-chart'), options);
  chart.render();
});