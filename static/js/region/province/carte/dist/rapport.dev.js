"use strict";

$(document).ready(function () {
  Object.size = function (obj) {
    var size = 0,
        key;

    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }

    return size;
  };

  function pdf() {
    // --------------------------------------- download one pdf
    function getPng() {
      var url = document.URL,
          len = url.split('/').length - 4,
          outStr = '';

      for (var i = 0; i < len; i++) {
        outStr += '../';
      }

      outStr += 'image/ms.png';
      return outStr;
    } // ------------------------------------------------- download multiple pdfs


    function generateMulPdf(region, province, trimestre, year) {
      // VARIABLES
      var listTable = []; // GET ALL TABLES

      $('.table.thisTable').each(function () {
        var obj = {};
        obj.id = $(this).data('id');
        obj.title = $(this).data('title');
        obj.align = $(this).data('align');
        listTable.push(obj);
      }); // INIT THE DOCUMENT

      var doc = new jsPDF('p', 'mm', 'a4'); // INSERT THE IMAGE HEADER

      var img = new Image();
      img.src = getPng();
      doc.addImage(img, 'PNG', 30, 15, 0, 0); // SET FONT STYLE

      doc.setFont('times'); // SET FONT SIZE FOR THE HEADER

      doc.setFontSize(15); // INSERT THE HEADER

      doc.text('Rapport des activités des Unités Médical Mobile (UMM)', 45, 50); // SET FONT SIZE FOR THE TEXT

      doc.setFontSize(12); // INSERT THE YEAR

      doc.text('Année : ' + year, 90, 56); // IDENTITY

      doc.text('Direction Régionale de la Santé : ' + region, 15, 66);
      doc.text('Délégation du Ministère de la Santé : ' + province, 15, 72);
      doc.text('Trimester : ' + $('#data').data('trimestre'), 15, 78); // ADD ALL TABLES

      for (var _i = 0; _i < listTable.length; _i++) {
        // ADD CONTENT
        if (_i != 0) {
          doc.text(_i + 1 + ' - ' + listTable[_i].title, 15, doc.lastAutoTable.finalY + 15);
          doc.autoTable({
            html: '#' + listTable[_i].id,
            startY: doc.lastAutoTable.finalY + 18,
            theme: 'grid',
            styles: {
              halign: listTable[_i].align,
              textColor: [0, 0, 0],
              font: 'times'
            },
            willDrawCell: function willDrawCell(data) {
              for (var _i2 = 0; _i2 < data.cell.text.length; _i2++) {
                var element = data.cell.text[_i2];

                if (element.includes('...Observations')) {
                  data.cell.text[_i2] = data.cell.text[_i2].split('...Observations')[1];
                }
              }
            }
          });
        } else {
          doc.text(_i + 1 + '- ' + listTable[_i].title, 15, 88);
          doc.autoTable({
            html: '#' + listTable[_i].id,
            startY: 91,
            theme: 'grid',
            styles: {
              halign: listTable[_i].align,
              textColor: [0, 0, 0],
              font: 'times'
            },
            willDrawCell: function willDrawCell(data) {
              for (var _i3 = 0; _i3 < data.cell.text.length; _i3++) {
                var element = data.cell.text[_i3];

                if (element.includes('...Observations')) {
                  data.cell.text[_i3] = data.cell.text[_i3].split('...Observations')[1];
                }
              }
            }
          });
        } // PREVENT SPLITING THE TABLE


        if (doc.lastAutoTable.finalY >= 260) {
          doc.addPage();
          doc.lastAutoTable.finalY = 0;
        }
      } // PAGINATION


      var pageCount = doc.internal.getNumberOfPages();
      doc.setFontSize(10);

      for (var i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.text('Page ' + String(i) + ' of ' + String(pageCount), 131 - 20, 318 - 30, null, null, 'right');
      } // GENERATE THE FINALE PDF


      doc.save('rapport des activités des unités médical mobile (umm)  - ' + province + ' - ' + year + '.pdf');
    } // call the function


    $('#downloadRapportAllPdf').click(function () {
      var today = new Date(); // DOWNLOAD ALL PDFS

      generateMulPdf($(this).data('region'), $(this).data('province'), $(this).data('trimestre'), today.getFullYear());
    });
  }

  function getDataBeneficierTable(data) {
    var strOut = '';

    for (var csr in data) {
      if (Object.hasOwnProperty.call(data, csr)) {
        if (data[csr].activity && data[csr].activity.length) {
          var include = false;

          for (var i = 0; i < data[csr].activity.length; i++) {
            var element = data[csr].activity[i];

            if (element.typeBeneficier === 'Bénéficiaire') {
              include = true;
            }
          }

          if (include) {
            strOut += '<tr><td rowspan="' + data[csr].activity.length + '">' + csr + '</td>';
            strOut += '<td>' + data[csr].activity[0].type + '</td>';
            strOut += '<td>' + data[csr].activity[0].beneficier + '</td>';
            strOut += '<td>' + (data[csr].activity[0].observation.length ? data[csr].activity[0].observation : 'Aucune') + '</td></tr>'; //

            for (var _i4 = 1; _i4 < data[csr].activity.length; _i4++) {
              var activityElement = data[csr].activity[_i4];
              strOut += '<tr><td>' + activityElement.type + '</td>';
              strOut += '<td>' + activityElement.beneficier + '</td>';
              strOut += '<td>' + (activityElement.observation.length ? activityElement.observation : 'Aucune') + '</td></tr>';
            }
          }
        }
      }
    }

    if (!strOut.length) {
      return '<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>Aucune</td></tr>';
    }

    return strOut;
  }

  function getDataActeTable(data) {
    var strOut = '';

    for (var csr in data) {
      if (Object.hasOwnProperty.call(data, csr)) {
        if (data[csr].activity && data[csr].activity.length) {
          var include = false;

          for (var i = 0; i < data[csr].activity.length; i++) {
            var element = data[csr].activity[i];

            if (element.typeBeneficier === 'Acte') {
              include = true;
            }
          }

          if (include) {
            strOut += '<tr><td rowspan="' + data[csr].activity.length + '">' + csr + '</td>';
            strOut += '<td>' + data[csr].activity[0].type + '</td>';
            strOut += '<td>' + data[csr].activity[0].beneficier + '</td>';
            strOut += '<td>' + data[csr].activity[0].observation.length ? data[csr].activity[0].observation : 'Aucune' + '</td></tr>'; //

            for (var _i5 = 1; _i5 < data[csr].activity.length; _i5++) {
              var activityElement = data[csr].activity[_i5];
              strOut += '<tr><td>' + activityElement.type + '</td>';
              strOut += '<td>' + activityElement.beneficier + '</td>';
              strOut += '<td>' + activityElement.observation.length ? activityElement.observation : 'Aucune' + '</td></tr>';
            }
          }
        }
      }
    }

    if (!strOut.length) {
      return '<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>Aucune</td></tr>';
    }

    return strOut;
  }

  function getValue(data, provinceList) {
    var out = {};

    for (var i = 0; i < provinceList.length; i++) {
      var element = provinceList[i];
      out[element] = data[element];
    }

    return out;
  } // VARIABLES


  var data = $('#dataProvince').data('carte'),
      rapport = $('#dataProvince').data('rapport'),
      province = $('#province-chart').data('province'),
      region = $('#data').data('region'),
      provinceList = $('#data').data('list'),
      trimestre = $('#dataProvince').data('trimestre'),
      title = 'Taux de remplissage du rapport - Trimestre ' + trimestre,
      // other
  max = 100,
      scale = ['#FF4646', '#FFF891', '#fcf75a', '#a9a403', '#7DFE69', '#169a01', '#0a4600']; // MAP

  $('#province-map').vectorMap({
    map: 'province',
    series: {
      regions: [{
        values: getValue(data, provinceList),
        scale: scale,
        normalizeFunction: 'polynomial',
        max: max,
        min: 0,
        legend: {
          horizontal: true,
          labelRender: function labelRender(v) {
            return v;
          }
        }
      }]
    },
    regionStyle: {
      initial: {
        stroke: '#000000',
        'stroke-width': 3,
        fill: '#c6cacd'
      },
      hover: {
        stroke: '#000000',
        'stroke-width': 3,
        fill: '#6294ed'
      }
    },
    backgroundColor: '#a5bfdd',
    regionLabelStyle: {
      initial: {
        fill: '#000000'
      }
    },
    onRegionTipShow: function onRegionTipShow(event, label, code) {
      if (provinceList.includes(parseInt(code))) {
        label.html("\n\t\t\t\t<div class=\"bg-white shadow-sm p-1 rounded\">\n\t\t\t\t\t<table class=\"table table-sm table-bordered fs-8 text-center text-dark\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"3\">Province : ".concat(label.html(), "</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"3\">").concat(title, " : <span class=\"fs-7\"> <span class=\"badge bg-5\">").concat(data[code], " %</span></span></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t\t"));
      }
    },
    onRegionClick: function onRegionClick(e, code) {
      if (provinceList.includes(parseInt(code))) showModal(code);else showErrorModal();
    }
  });

  function showErrorModal() {
    $('#modalPlace').empty().append("\n\t\t\t<div class=\"modal fade p-0 m-0\" id=\"modalTable\" tabindex=\"-1\" aria-labelledby=\"modalTableLabel\" aria-hidden=\"true\">\n\t\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t<div class=\"modal-body justify-content-between align-items-centre d-flex\">\n\t\t\t\t\t\t\t<span class=\"modal-title text-dark fw-bold fs-7\" id=\"modalTableLabel\">Vous ne pouvez pas voir ce rapport</span>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm p-1 text-body\" data-bs-dismiss=\"modal\" aria-label=\"Close\"><ion-icon class=\"fs-5 align-middle\" name=\"close-outline\"></ion-icon></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t");
    var modal = new bootstrap.Modal(document.getElementById('modalTable'));
    modal.show();
  } // ADD PDR


  function pdrVisiteData(pdrVisite) {
    var out = '';
    console.log(pdrVisite);

    for (var key1 in pdrVisite) {
      var commune = pdrVisite[key1];
      out += "<td rowspan=\"".concat(Object.size(commune), "\">").concat(key1, "</td>\n\t\t\t\t\t\t<td>").concat(commune[Object.keys(commune)[0]].pdr, "</td>\n\t\t\t\t\t\t<td>").concat(commune[Object.keys(commune)[0]].programme, "</td>\n\t\t\t\t\t\t<td>").concat(commune[Object.keys(commune)[0]].realise, "</td>\n\t\t\t\t\t</tr>");

      for (var j = 1; j < Object.keys(commune).length; j++) {
        out += "\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>".concat(commune[Object.keys(commune)[j]].pdr, "</td>\n\t\t\t\t\t\t\t<td>").concat(commune[Object.keys(commune)[j]].programme, "</td>\n\t\t\t\t\t\t\t<td>").concat(commune[Object.keys(commune)[j]].realise, "</td>\n\t\t\t\t\t\t</tr>");
      }
    }

    if (out === '') {
      out = '<tr><td>Aucune</td><td>Aucune</td><td>0</td><td>0</td></tr>';
    }

    return out;
  } // SHOW TABLE


  function showModal(code) {
    var title = 'Rapport des activités des Unités Médical Mobile (UMM) de la province ',
        provinceElement;

    for (var i = 0; i < province.length; i++) {
      var element = province[i];

      if (code == element.codeProvince) {
        provinceElement = element.province;
      }
    }

    $('#modalPlace').empty().append("\n\t\t<div class=\"modal fade p-0 m-0\" id=\"modalTable\" tabindex=\"-1\" aria-labelledby=\"modalTableLabel\" aria-hidden=\"true\">\n\t\t\t<div class=\"modal-dialog modal-fullscreen\">\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-header border-0 p-2 bg-5\">\n\t\t\t\t\t\t<span class=\"modal-title text-white fw-bold fs-7\" id=\"modalTableLabel\">".concat(title + provinceElement, "</span>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm p-1 text-white\" data-bs-dismiss=\"modal\" aria-label=\"Close\"><ion-icon class=\"fs-5 align-middle\" name=\"close-outline\"></ion-icon></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body bg-body\">\n\t\t\t\t\t\t<div class=\"row g-3\">\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-light\"  id=\"downloadRapportAllPdf\" data-header='Rapport de suivi des activit\xE9s de l\u2019\xE9quipe mobile' data-region='").concat(region, "' data-province='").concat(provinceElement, "'>\n\t\t\t\t\t\t\t\t\t<div class='d-flex align-items-center'>\n\t\t\t\t\t\t\t\t\t\t<img class=\"me-2\" src=\"/../../image/pdf.svg\", alt=\"pdf\" width=\"20px\">\n\t\t\t\t\t\t\t\t\t\t<span>PDF</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"location-outline\"></ion-icon><span class=\"fs-7 text-dark\">PDR programm\xE9e de visiter</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"pdrProgrammeVisite\" data-title=\"PDR programm\xE9e de visiter\" data-id=\"pdrProgrammeVisite\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\">Commune</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\">PDR visit\xE9</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Sortie</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>programm\xE9e</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>r\xE9alis\xE9e</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(pdrVisiteData(rapport[code].pdrVisite), "\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"people-circle-outline\"></ion-icon><span class=\"fs-7 text-dark\">Population cibl\xE9e par l'\xE9quipe mobile</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"populationCible\" data-id=\"populationCible\" data-title=\"Population cibl\xE9e par l'\xE9quipe mobile\" data-align=\"left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Population cible</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> ").concat(rapport[code].populationCible.populationCible, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Femmes mari\xE9es en age de reproduction</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> ").concat(rapport[code].populationCible.fmar, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Naissances attendus</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> ").concat(rapport[code].populationCible.enfant.naissanceAttendu, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Enfants moins de 1ans</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> ").concat(rapport[code].populationCible.enfant.moins1ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Enfants moins de 5ans</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> ").concat(rapport[code].populationCible.enfant.moins5ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"people-outline\"></ion-icon><span class=\"fs-7 text-dark\">Ressources humaines mobilis\xE9es</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"ressourceHumainMobile\" data-title=\"Ressources humaines mobilis\xE9es\" data-id=\"ressourceHumainMobile\" data-align=\"centre\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>M\xE9decin</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Infirmier</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Sages femmes</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Technicien</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chauffeur</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Ressources humaines d'appuie</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].ressourceHumainMobile.medecin, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].ressourceHumainMobile.infirmier, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].ressourceHumainMobile.sageFemme, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].ressourceHumainMobile.technicien, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].ressourceHumainMobile.chauffeur, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].ressourceHumainMobile.appuie, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"5\">Nombre d\u2019\xE9quipe mobile op\xE9rationnelle\xA0</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].ressourceHumainMobile.emOperationnelle, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"woman-outline\"></ion-icon><span class=\"fs-7 text-dark\">Sant\xE9 maternelle</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"santeMaternelle\" data-title=\"Sant\xE9 maternelle\" data-id=\"santeMaternelle\" data-align=\"left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Nombre de femmes prises en charge</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.femmePriseCharge, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"6\" style=\"vertical-align: middle;\">Nombre de consultations pr\xE9natales (CPN)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"3\" style=\"vertical-align: middle;\">Nouvelles inscrites</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T1</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.cpn.nouvelleInscrite.t1, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T2</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.cpn.nouvelleInscrite.t2, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T3</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.cpn.nouvelleInscrite.t3, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"3\" style=\"vertical-align: middle;\">Anciennes inscrites</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T1</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.cpn.ancienneInscrite.t1, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T2</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.cpn.ancienneInscrite.t2, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T3</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.cpn.ancienneInscrite.t3, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Nombre de femmes examin\xE9es en post natal</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.femmeExaminePostNatal, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Nombre de Grossesses \xE0 risque (GAR) d\xE9pist\xE9es</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.garDepiste, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Vaccination antit\xE9tanique (VAT)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.vat, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Nombre de femmes r\xE9f\xE9r\xE9es</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeMaternelle.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"accessibility-outline\"></ion-icon><span class=\"fs-7 text-dark\">Sant\xE9 infantile\xA0</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"santeInfantile\" data-title=\"Sant\xE9 infantile\xA0\" data-id=\"santeInfantile\" data-align=\"left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Nombre d\u2019enfants pris en charge</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.enfantPrisesCharge, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"3\" style=\"vertical-align:middle;\">Vaccination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DTC3-Hib3-HB3 (pentavalent)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.vaccination.pentavalent, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>RR</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.vaccination.rr, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>BCG</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.vaccination.bcg, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Vitamine A (2\xE8me prise)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.vitamineA, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Vitamine D (2\xE8me prise)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.vitamineD, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Nombre d\u2019enfants avec insuffisance Pond\xE9rale (P/A&lt;-2DS)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.enfantsAvecInsuffisancePonderale, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Nombre d\u2019enfants avec retard de croissance (T/A&lt;-2DS)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.enfantsAvecRetardCroissance, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Nombre de cas de diarrh\xE9e</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.diarrhe, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Nombre de cas d\u2019infections respiratoires aigu\xEBs (IRA)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.ira, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Nombre des enfants r\xE9f\xE9r\xE9es</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].santeInfantile.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"people-circle-outline\"></ion-icon><span class=\"fs-7 text-dark\">Planification familiale</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"planificationFamiliale\" data-title=\"Planification familiale\" data-id=\"planificationFamiliale\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Pilule</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Progestatifs Injectables</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">DIU</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">condom</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">R\xE9f\xE9rences</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>NA</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AA</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>NA</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AA</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>NA</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AA</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>NA</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AA</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DIU</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>L.T</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].planificationFamiliale.pilule.na, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].planificationFamiliale.pilule.aa, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].planificationFamiliale.injectable.na, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].planificationFamiliale.injectable.aa, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].planificationFamiliale.diu.na, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].planificationFamiliale.diu.aa, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].planificationFamiliale.condom.na, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].planificationFamiliale.condom.aa, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].planificationFamiliale.reference.diu, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].planificationFamiliale.reference.lt, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"school-outline\"></ion-icon><span class=\"fs-7 text-dark\">Sant\xE9 scolaire</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"santeScolaire\" data-title=\"Sant\xE9 scolaire\" data-id=\"santeScolaire\" data-align=\"left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\">Etablissements visit\xE9s</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\"></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\">El\xE8ves examin\xE9s lors de la VMS</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Lutte contre les d\xE9ficiences visuelles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Echelle M\xE9trique</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>R\xE9fraction automatique</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td rowspan=\"2\">").concat(rapport[code].santeScolaire.etablissementVisite, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>cible</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeScolaire.eleveExamineVms.cible, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeScolaire.lutteContreDeficienceVisuelle.echelleMetrique.cible, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeScolaire.lutteContreDeficienceVisuelle.refractionAutomatique.cible, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>r\xE9alisation</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeScolaire.eleveExamineVms.realisation, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeScolaire.lutteContreDeficienceVisuelle.echelleMetrique.realisation, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].santeScolaire.lutteContreDeficienceVisuelle.refractionAutomatique.realisation, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"pulse-outline\"></ion-icon><span class=\"fs-7 text-dark\">D\xE9tection pr\xE9coce des cancers du sein et du col de l\u2019ut\xE9rus</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" data-align=\"center\" data-title=\"D\xE9tection pr\xE9coce des cancers du sein et du col de l\u2019ut\xE9rus\" data-id=\"detectionPrecoceCancer\" id=\"detectionPrecoceCancer\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>D\xE9tection pr\xE9coce du cancer du sein</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>D\xE9tection pr\xE9coce du cancer du col</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nombre de femmes examin\xE9es</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].detectionPrecoceCancer.femmeExamine.cancerSein, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].detectionPrecoceCancer.femmeExamine.cancerCol, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nombre de femmes r\xE9f\xE9r\xE9es</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].detectionPrecoceCancer.femmeRefere.cancerSein, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">").concat(rapport[code].detectionPrecoceCancer.femmeRefere.cancerCol, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"pulse-outline\"></ion-icon><span class=\"fs-7 text-dark\">Consultations m\xE9dicales</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"consultationMedical\" data-title=\"Consultations m\xE9dicales\" data-id=\"consultationMedical\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\"></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Consultations r\xE9alis\xE9es</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\">Nombre de patients pris en charge par l'\xE9quipe mobile</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"4\">Nombre de patients R\xE9f\xE9r\xE9s</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Masculin</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>F\xE9minin</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consultation sp\xE9cialis\xE9e</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Urgence</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Examen De laboratoire</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Examen radiologique</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Moins de 5 ans</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.consultationRealise.m.moins5ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.consultationRealise.f.moins5ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.pecParPem.moins5ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.consSpec.moins5ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.urgence.moins5ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.exLabo.moins5ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.exRadio.moins5ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Entre 5ans et 18ans</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.consultationRealise.m.entre5ans18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.consultationRealise.f.entre5ans18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.pecParPem.entre5ans18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.consSpec.entre5ans18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.urgence.entre5ans18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.exLabo.entre5ans18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.exRadio.entre5ans18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Plus de 18 ans</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.consultationRealise.m.plus18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.consultationRealise.f.plus18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.pecParPem.plus18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.consSpec.plus18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.urgence.plus18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.exLabo.plus18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.reference.exRadio.plus18ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(parseInt(rapport[code].consultationMedical.consultationRealise.m.moins5ans) + parseInt(rapport[code].consultationMedical.consultationRealise.m.entre5ans18ans) + parseInt(rapport[code].consultationMedical.consultationRealise.m.plus18ans), "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(parseInt(rapport[code].consultationMedical.consultationRealise.f.moins5ans) + parseInt(rapport[code].consultationMedical.consultationRealise.f.entre5ans18ans) + parseInt(rapport[code].consultationMedical.consultationRealise.f.plus18ans), "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(parseInt(rapport[code].consultationMedical.pecParPem.moins5ans) + parseInt(rapport[code].consultationMedical.pecParPem.entre5ans18ans) + parseInt(rapport[code].consultationMedical.pecParPem.plus18ans), "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(parseInt(rapport[code].consultationMedical.reference.consSpec.moins5ans) + parseInt(rapport[code].consultationMedical.reference.consSpec.entre5ans18ans) + parseInt(rapport[code].consultationMedical.reference.consSpec.plus18ans), "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(parseInt(rapport[code].consultationMedical.reference.urgence.moins5ans) + parseInt(rapport[code].consultationMedical.reference.urgence.entre5ans18ans) + parseInt(rapport[code].consultationMedical.reference.urgence.plus18ans), "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(parseInt(rapport[code].consultationMedical.reference.exLabo.moins5ans) + parseInt(rapport[code].consultationMedical.reference.exLabo.entre5ans18ans) + parseInt(rapport[code].consultationMedical.reference.exLabo.plus18ans), "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(parseInt(rapport[code].consultationMedical.reference.exRadio.moins5ans) + parseInt(rapport[code].consultationMedical.reference.exRadio.entre5ans18ans) + parseInt(rapport[code].consultationMedical.reference.exRadio.plus18ans), "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"7\">Budget estim\xE9 en m\xE9dicaments dispens\xE9s</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(rapport[code].consultationMedical.budgetMedicamentDispenseEm, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"clipboard-outline\"></ion-icon><span class=\"fs-7 text-dark\">Maladies d\xE9pist\xE9es</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"maladieDepiste\" data-title=\"Maladies d\xE9pist\xE9es\" data-id=\"maladieDepiste\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\"></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"text-align: center;\">Nombre de cas</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"text-align: center;\">Nombre de cas PEC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"text-align: center;\">r\xE9f\xE9rences</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Diab\xE8te</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.diabete.cas, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.diabete.casPec, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.diabete.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">HTA</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.hta.cas, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.hta.casPec, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.hta.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Angine</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.angine.cas, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.angine.casPec, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.angine.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Caries</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.carie.cas, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.carie.casPec, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.carie.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Parodontopathie</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.parodontopathie.cas, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.parodontopathie.casPec, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.parodontopathie.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Maladies mentales</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.maladieMentale.cas, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.maladieMentale.casPec, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.maladieMentale.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">IST</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.ist.cas, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.ist.casPec, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.ist.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\" style=\"vertical-align:middle;\">RAA</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Avec cardites</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.raa.avecCardites.cas, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.raa.avecCardites.casPec, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.raa.avecCardites.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Sans cardites</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.raa.sansCardites.cas, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.raa.sansCardites.casPec, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.raa.sansCardites.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Tuberculose pulmonaire</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.tuberculosePolmonaire.cas, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.tuberculosePolmonaire.casPec, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;\">").concat(rapport[code].maladieDepiste.tuberculosePolmonaire.reference, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"clipboard-outline\"></ion-icon><span class=\"text-dark fs-7\">Autre activit\xE9s</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class='table thisTable table-bordered' id=\"autreAvtiviteBenefier\" data-id=\"autreAvtiviteBenefier\" data-title=\"Autre activit\xE9s (B\xE9n\xE9ficiaires)\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Centre de sant\xE9</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Type d\u2019activit\xE9</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nombre de b\xE9n\xE9ficiaires</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Observations</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(getDataBeneficierTable(rapport[code].autreActivite), "\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t<table class='table thisTable table-bordered' id=\"autreAvtiviteActe\" data-id=\"autreAvtiviteActe\" data-title=\"Autre activit\xE9s (Actes)\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Centre de sant\xE9</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Type d\u2019activit\xE9</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nombre d\u2019actes</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Observations</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(getDataActeTable(rapport[code].autreActivite), "\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t"));
    var modal = new bootstrap.Modal(document.getElementById('modalTable'));
    modal.show();
    pdf();
  }
});