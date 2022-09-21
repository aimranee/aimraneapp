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
  }

  function getVehicule(data, csrList) {
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


    for (var _i2 = 0; _i2 < data.length; _i2++) {
      var dataeElement = data[_i2];

      for (var key in dataeElement.data) {
        if (Object.hasOwnProperty.call(dataeElement.data, key)) {
          var _element3 = dataeElement.data[key];
          listTemp[key] += _element3.value.ambulance.appartenance.commune.age.moins5ans;
          listTemp[key] += _element3.value.ambulance.appartenance.commune.age.plus5ans;
          listTemp[key] += _element3.value.ambulance.appartenance.ms.age.moins5ans;
          listTemp[key] += _element3.value.ambulance.appartenance.ms.age.plus5ans;
          listTemp[key] += _element3.value.ambulance.appartenance.ong.age.moins5ans;
          listTemp[key] += _element3.value.ambulance.appartenance.ong.age.plus5ans;
          listTemp[key] += _element3.value.camionMobile.appartenance.commune.age.moins5ans;
          listTemp[key] += _element3.value.camionMobile.appartenance.commune.age.plus5ans;
          listTemp[key] += _element3.value.camionMobile.appartenance.ms.age.moins5ans;
          listTemp[key] += _element3.value.camionMobile.appartenance.ms.age.plus5ans;
          listTemp[key] += _element3.value.camionMobile.appartenance.ong.age.moins5ans;
          listTemp[key] += _element3.value.camionMobile.appartenance.ong.age.plus5ans;
          listTemp[key] += _element3.value.usm.appartenance.commune.age.moins5ans;
          listTemp[key] += _element3.value.usm.appartenance.commune.age.plus5ans;
          listTemp[key] += _element3.value.usm.appartenance.ms.age.moins5ans;
          listTemp[key] += _element3.value.usm.appartenance.ms.age.plus5ans;
          listTemp[key] += _element3.value.usm.appartenance.ong.age.moins5ans;
          listTemp[key] += _element3.value.usm.appartenance.ong.age.plus5ans;
          listTemp[key] += _element3.value.vtt.appartenance.commune.age.moins5ans;
          listTemp[key] += _element3.value.vtt.appartenance.commune.age.plus5ans;
          listTemp[key] += _element3.value.vtt.appartenance.ms.age.moins5ans;
          listTemp[key] += _element3.value.vtt.appartenance.ms.age.plus5ans;
          listTemp[key] += _element3.value.vtt.appartenance.ong.age.moins5ans;
          listTemp[key] += _element3.value.vtt.appartenance.ong.age.plus5ans;
        }
      }
    }

    for (var _key2 in listTemp) {
      if (Object.hasOwnProperty.call(listTemp, _key2)) {
        var _element4 = listTemp[_key2];
        objOut.data.push(_element4);
        objOut.categories.push(_key2);
      }
    }

    return objOut;
  } // VARIABLES


  var wholeData = $('#data').data('provincedata'),
      csrList = $('#data').data('csrlist'),
      // init data
  // DATA LOADING
  data = getVehicule([wholeData.vehicule], csrList); // CHART OPTION

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
        return val;
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
          return value;
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
  chart.render(); // EVENTS

  $('input[type=radio][name=data]').change(function () {
    data = null; // change te data

    if (this.value === 'vehicule') {
      getVehicule([wholeData.vehicule], csrList);
    } else if (this.value === 'kmsParcourir') {
      data = getData([wholeData.budgetKmsParcourir], csrList);
    } else if (this.value === 'besoinCarburant') {
      data = getData([wholeData.budgetBesoinCarburant], csrList);
    } else if (this.value === 'besoinUsm') {
      data = getData([wholeData.besoinUsm], csrList);
    } // apply changes


    chart.updateSeries([{
      data: data.data
    }]);
  });
});