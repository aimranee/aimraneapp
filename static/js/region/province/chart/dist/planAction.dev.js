"use strict";

$(document).ready(function () {
  // VARIABLES
  var wholeData = $('#dataProvince').data('carte'),
      province = $('#province-chart').data('province'),
      provinceList = $('#data').data('list'),
      // init data
  data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < province.length; i++) {
    var element = province[i];

    if (provinceList.includes(element.codeProvince)) {
      data.data.push(wholeData[element.codeProvince]);
      data.categories.push(element.province);
    }
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
      height: 40 * provinceList.length
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
          return value + '%';
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
  chart.render();
  $('.thisProvince').addClass('d-none');
});