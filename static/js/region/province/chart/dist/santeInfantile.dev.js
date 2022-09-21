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

  for (var i = 0; i < province.length; i++) {
    var element = province[i];

    if (provinceList.includes(element.codeProvince)) {
      data.data.push(getData([dataEnfantPrisesCharge[element.codeProvince]]));
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

    if (this.value === 'enfantPrisesCharge') {
      for (var _i2 = 0; _i2 < province.length; _i2++) {
        var element = province[_i2];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataEnfantPrisesCharge[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'vaccination') {
      for (var _i3 = 0; _i3 < province.length; _i3++) {
        var element = province[_i3];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataVaccinationPentavalent[element.codeProvince], dataVaccinationRr[element.codeProvince], dataVaccinationBcg[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'vitamineA') {
      for (var _i4 = 0; _i4 < province.length; _i4++) {
        var element = province[_i4];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataVitamineA[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'vitamineD') {
      for (var _i5 = 0; _i5 < province.length; _i5++) {
        var element = province[_i5];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataVitamineD[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'enfantsAvecInsuffisancePonderale') {
      for (var _i6 = 0; _i6 < province.length; _i6++) {
        var element = province[_i6];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataEnfantsAvecInsuffisancePonderale[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'enfantsAvecRetardCroissance') {
      for (var _i7 = 0; _i7 < province.length; _i7++) {
        var element = province[_i7];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataEnfantsAvecRetardCroissance[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'diarrhe') {
      for (var _i8 = 0; _i8 < province.length; _i8++) {
        var element = province[_i8];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataDiarrhe[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'ira') {
      for (var _i9 = 0; _i9 < province.length; _i9++) {
        var element = province[_i9];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataIra[element.codeProvince]]));
          data.categories.push(element.province);
        }
      }

      type = '';
    } else if (this.value === 'reference') {
      for (var _i10 = 0; _i10 < province.length; _i10++) {
        var element = province[_i10];

        if (provinceList.includes(element.codeProvince)) {
          data.data.push(getData([dataReference[element.codeProvince]]));
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