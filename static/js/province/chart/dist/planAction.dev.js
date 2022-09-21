"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _chart;

  // VARIABLES
  var wholeData = $('#data').data('provincedata'),
      csrList = $('#data').data('csrlist'),
      // init data
  data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < csrList.length; i++) {
    var csr = csrList[i].csr;
    data.categories.push(csr);
    if (wholeData.tauxRemplissageByCsr[csr]) data.data.push(wholeData.tauxRemplissageByCsr[csr].taux);else data.data.push(0);
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
        return val + '%';
      },
      offsetX: 0
    },
    xaxis: {
      categories: data.categories
    },
    yaxis: {
      min: 0,
      max: 100
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
          return value + '%' + (wholeData.tauxRemplissageByCsr[data.categories[dataPointIndex]].submit ? ' (soumis)' : ' (non soumis)');
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