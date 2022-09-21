"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _chart;

  // VARIABLES
  var wholeData = $('#dataProvince').data('carte'),
      province = $('#province-chart').data('province'),
      type = '',
      // init data
  dataFemmePriseCharge = wholeData.femmePriseCharge.data,
      dataCpnNouvelleInscriteT1 = wholeData.cpnNouvelleInscriteT1.data,
      dataCpnNouvelleInscriteT2 = wholeData.cpnNouvelleInscriteT2.data,
      dataCpnNouvelleInscriteT3 = wholeData.cpnNouvelleInscriteT3.data,
      dataCpnAncienneInscriteT1 = wholeData.cpnAncienneInscriteT1.data,
      dataCpnAncienneInscriteT2 = wholeData.cpnAncienneInscriteT2.data,
      dataCpnAncienneInscriteT3 = wholeData.cpnAncienneInscriteT3.data,
      dataAutreConsultation = wholeData.autreConsultation.data,
      dataFemmeExaminePostNatal = wholeData.femmeExaminePostNatal.data,
      dataGahrDepiste = wholeData.garDepiste.data,
      dataVat = wholeData.vat.data,
      dataReference = wholeData.reference.data,
      data = {
    data: [],
    categories: []
  }; // DATA LOADING

  for (var i = 0; i < province.length; i++) {
    var element = province[i];
    data.data.push(getData([dataFemmePriseCharge[element.codeProvince]]));
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

    if (this.value === 'femmePriseCharge') {
      for (var _i2 = 0; _i2 < province.length; _i2++) {
        var element = province[_i2];
        data.data.push(getData([dataFemmePriseCharge[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'cpn') {
      for (var _i3 = 0; _i3 < province.length; _i3++) {
        var element = province[_i3];
        data.data.push(getData([dataCpnNouvelleInscriteT1[element.codeProvince], dataCpnNouvelleInscriteT2[element.codeProvince], dataCpnNouvelleInscriteT3[element.codeProvince], dataCpnAncienneInscriteT1[element.codeProvince], dataCpnAncienneInscriteT2[element.codeProvince], dataCpnAncienneInscriteT3[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'femmeExaminePostNatal') {
      for (var _i4 = 0; _i4 < province.length; _i4++) {
        var element = province[_i4];
        data.data.push(getData([dataFemmeExaminePostNatal[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'garDepiste') {
      for (var _i5 = 0; _i5 < province.length; _i5++) {
        var element = province[_i5];
        data.data.push(getData([dataGahrDepiste[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'autreConsultation') {
      for (var _i6 = 0; _i6 < province.length; _i6++) {
        var element = province[_i6];
        data.data.push(getData([dataAutreConsultation[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'vat') {
      for (var _i7 = 0; _i7 < province.length; _i7++) {
        var element = province[_i7];
        data.data.push(getData([dataVat[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    } else if (this.value === 'reference') {
      for (var _i8 = 0; _i8 < province.length; _i8++) {
        var element = province[_i8];
        data.data.push(getData([dataReference[element.codeProvince]]));
        data.categories.push(element.province);
      }

      type = '';
    }

    chart.updateSeries([{
      data: data.data
    }]);
  });
});