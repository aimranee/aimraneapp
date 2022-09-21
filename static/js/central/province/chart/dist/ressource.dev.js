"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _chart;

  // VARIABLES
  var wholeData = $('#dataProvince').data('carte'),
      province = $('#province-chart').data('province'),
      type = '',
      // init data
  dataBesoinUsm = wholeData.besoinUsm.data,
      dataBudgetKmsParcourir = wholeData.budgetKmsParcourir.data,
      dataBudgetBesoinCarburant = wholeData.budgetBesoinCarburant.data,
      dataType = wholeData.type.data,
      data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < province.length; i++) {
    var element = province[i];
    data.data.push(getDataType([dataType[element.codeProvince]]));
    data.categories.push(element.province);
  } // SUM DATA
  // GET DATA TYPE


  function getDataType(dataset) {
    var data = 0;

    for (var _i = 0; _i < dataset.length; _i++) {
      var dataElement = dataset[_i];

      for (var key in dataElement) {
        data += dataElement[key].appartenance.ms.age.moins5ans + dataElement[key].appartenance.ms.age.plus5ans + dataElement[key].appartenance.commune.age.moins5ans + dataElement[key].appartenance.commune.age.plus5ans;
      }
    }

    return data;
  }

  function getData(dataset) {
    var data = 0;

    for (var _i2 = 0; _i2 < dataset.length; _i2++) {
      var dataElement = dataset[_i2];
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
    data.categories = [];

    if (this.value === 'ressource') {
      for (var _i3 = 0; _i3 < province.length; _i3++) {
        var element = province[_i3];
        data.data.push(getDataType([dataType[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'budget') {
      for (var _i4 = 0; _i4 < province.length; _i4++) {
        var element = province[_i4];
        data.data.push(getData([dataBudgetBesoinCarburant[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = ' MAD';
    } else if (this.value === 'besoinUsm') {
      for (var _i5 = 0; _i5 < province.length; _i5++) {
        var element = province[_i5];
        data.data.push(getData([dataBesoinUsm[element.codeProvince]]));
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