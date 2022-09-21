"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  // FUNCTION
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


    function generateMulPdf(region, province, year) {
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

      doc.text('Plan d’action des unités médicales mobiles (UMM)', 50, 50); // SET FONT SIZE FOR THE TEXT

      doc.setFontSize(12); // INSERT THE YEAR

      doc.text('Année : ' + year, 90, 56); // IDENTITY

      doc.text('Direction Régionale de la Santé : ' + region, 15, 66); // ADD ALL TABLES

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
          doc.text(_i + 1 + '- ' + listTable[_i].title, 15, 76);
          doc.autoTable({
            html: '#' + listTable[_i].id,
            startY: 79,
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


      doc.save("plan d'action des unités médicales mobiles (umm) - " + year + '.pdf');
    } // call the function


    $('#downloadPlanActionAllPdf').click(function () {
      var today = new Date(); // DOWNLOAD ALL PDFS

      generateMulPdf($('#data').data('region'), $('#data').data('province'), today.getFullYear());
    });
  }

  function arraySize(array) {
    var out = 0;

    for (var i = 0; i < array.length; i++) {
      var element = array[i];
      out += element.localite.length;
    }

    return out;
  } // GET THE RESSOURCE


  function ressourceData(ressource) {
    var strOut = '';

    for (var cs in ressource) {
      if (Object.hasOwnProperty.call(ressource, cs)) {
        var vehicules = ressource[cs];
        strOut += '<tr><td rowspan="' + vehicules.length + '">' + cs + '</td>';
        strOut += '<td>' + vehicules[0].csr.name + '</td>';
        strOut += '<td>' + vehicules[0].csr.category + '</td>';
        strOut += '<td>' + vehicules[0].type + '</td>';
        strOut += '<td>' + vehicules[0].age + '</td></tr>';

        for (var i = 1; i < vehicules.length; i++) {
          var vehicule = vehicules[i];
          strOut += '<tr><td>' + vehicule.csr.name + '</td>';
          strOut += '<td>' + vehicule.csr.category + '</td>';
          strOut += '<td>' + vehicule.type + '</td>';
          strOut += '<td>' + vehicule.age + '</td></tr>';
        }
      }
    }

    if (strOut === '') {
      strOut = '<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>Aucune</td><td>0</td></tr>';
    }

    return strOut;
  }

  function pdrData(pdr) {
    var strOut = '';

    for (var key in pdr) {
      var commune = pdr[key];
      strOut += "<tr>\n\t\t\t\t\t\t\t<td rowspan=\"".concat(arraySize(commune), "\">").concat(key, "</td>\n\t\t\t\t\t\t\t<td rowspan=\"").concat(commune[0].localite.length, "\">").concat(commune[0].pdr, "</td>\n\t\t\t\t\t\t\t<td>").concat(commune[0].localite[0], "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t");

      for (var i = 1; i < commune[0].localite.length; i++) {
        strOut += "\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>".concat(commune[0].localite[i], "</td>\n\t\t\t\t\t\t</tr>");
      }

      for (var j = 1; j < commune.length; j++) {
        var pdrElement = commune[j];
        strOut += "<tr>\n\t\t\t\t\t\t\t\t<td rowspan=\"".concat(pdrElement.localite.length, "\">").concat(pdrElement.pdr, "</td>\n\t\t\t\t\t\t\t\t<td>").concat(pdrElement.localite[0], "</td>\n\t\t\t\t\t\t\t</tr>");

        for (var _i4 = 1; _i4 < pdrElement.localite.length; _i4++) {
          strOut += "\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>".concat(pdrElement.localite[_i4], "</td>\n\t\t\t\t\t\t</tr>");
        }
      }
    }

    if (strOut === '') {
      strOut = '<tr><td>Aucune</td><td>Aucune</td><td>Aucune</td></tr>';
    }

    return strOut;
  } // PDR DATA


  function programmeData(programme) {
    var strOut = '';

    for (var cs in programme) {
      if (Object.hasOwnProperty.call(programme, cs)) {
        var pdrs = programme[cs];
        strOut += '<tr><td rowspan="' + pdrs.length + '">' + cs + '</td>';
        strOut += '<td>' + pdrs[0].pdr + '</td>';
        strOut += '<td>' + pdrs[0].t1 + '</td>';
        strOut += '<td>' + pdrs[0].t2 + '</td>';
        strOut += '<td>' + pdrs[0].t3 + '</td>';
        strOut += '<td>' + pdrs[0].t4 + '</td></tr>';

        for (var i = 1; i < pdrs.length; i++) {
          var pdr = pdrs[i];
          strOut += '<tr><td>' + pdr.pdr + '</td>';
          strOut += '<td>' + pdr.t1 + '</td>';
          strOut += '<td>' + pdr.t2 + '</td>';
          strOut += '<td>' + pdr.t3 + '</td>';
          strOut += '<td>' + pdr.t4 + '</td></tr>';
        }
      }
    }

    if (strOut === '') {
      strOut = '<tr><td>Aucune</td><td>Aucune</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>';
    }

    return strOut;
  } // SHOW TABLE


  function showModal(planAction, code) {
    $('#modalPlace').empty().append("\n\t\t\t\t<div class=\"modal fade p-0 m-0\" id=\"modalTable\" tabindex=\"-1\" aria-labelledby=\"modalTableLabel\" aria-hidden=\"true\">\n\t\t\t\t\t<div class=\"modal-dialog modal-fullscreen\">\n\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t<div class=\"modal-header border-0 p-2 bg-5\">\n\t\t\t\t\t\t\t\t<span class=\"modal-title text-white fw-bold fs-7\" id=\"modalTableLabel\">Plan d\u2019action des unit\xE9s m\xE9dicales mobiles (UMM) de la r\xE9gion ".concat($('#data').data('region'), "</span>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm p-1 text-white\" data-bs-dismiss=\"modal\" aria-label=\"Close\"><ion-icon class=\"fs-5 align-middle\" name=\"close-outline\"></ion-icon></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"modal-body bg-body\">\n\t\t\t\t\t\t\t\t<div class=\"row g-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-light\" id=\"downloadPlanActionAllPdf\">\n\t\t\t\t\t\t\t\t\t\t\t<div class='d-flex align-items-center'>\n\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"me-2\" src=\"/../../image/pdf.svg\", alt=\"pdf\" width=\"20px\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>PDF</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class='text-1 fs-6 me-2' name='people-circle-outline'></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fs-7 text-dark\">Population \xE0 couvrir</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class='table thisTable table-bordered' id='population' data-title='Population \xE0 couvrir' data-id='population' data-align='left'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Population rurale</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.population.rurale, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Population cible</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.population.cible, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Population habitant \xE0 moins de 3km</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.population.habitantMoins3km, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Population habitant entre 3km et 6km</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.population.habitantEntre3km6km, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Population habitant entre 6km et 10km</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.population.habitantEntre6km10km, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Population habitant \xE0 plus de 10km</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.population.habitantPlus10km, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Distance moyenne \xE0 la route goudronn\xE9e la plus proche</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.distanceMoyenneRouteProche, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Naissances attendues</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.enfant.naissancesAttendues, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Enfants moins de 1ans</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.enfant.moins1ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Enfants moins de 5ans</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.enfant.moins5ans, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nombre de FAR</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.femme.far, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nombre de FMAR</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.femme.fmar, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Femmes enceintes</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].population.femme.femmeEnceinte, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"location-outline\"></ion-icon><span class=\"fs-7 text-dark\">Points de rassemblement \xE0 couvrir</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"pdrCover\" data-title=\"Points de rassemblement \xE0 couvrir\" data-id=\"pdrCover\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commune</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>PDR \xE0 visiter</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Localit\xE9</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(pdrData(planAction[code].pdr), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"list-outline\"></ion-icon><span class=\"fs-7 text-dark\">Programme pr\xE9visionnel des UMM</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"programme\" data-title=\"Programme pr\xE9visionnel des UMM\" data-id=\"programme\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\">Commune</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\">PDR \xE0 visiter</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"4\">Nombre des UMM programm\xE9es</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T1</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T2</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T3</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T4</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(programmeData(planAction[code].programme), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"car-outline\"></ion-icon><span class=\"fs-7 text-dark\">Situation des moyens de mobilit\xE9</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-10 me-2\" name=\"ellipse\"></ion-icon><span class=\"fs-7 text-dark\">Moyens de mobilit\xE9\xA0du Minist\xE8re de la Sant\xE9</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"ressourceMs\" data-title=\"Situation des moyens de mobilit\xE9 du Minist\xE8re de la Sant\xE9\" data-id=\"ressourceMs\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\">CS</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Centre de sant\xE9</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Informations sur le v\xE9hicule</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nom</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cat\xE9gorie</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Age</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(ressourceData(planAction[code].ressource.ms), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center my-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-10 me-2\" name=\"ellipse\"></ion-icon><span class=\"fs-7 text-dark\">Moyens de mobilit\xE9\xA0de la Commune</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"ressourceCommune\" data-title=\"Situation des moyens de mobilit\xE9 de la Commune\" data-id=\"ressourceCommune\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\">CS</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Centre de sant\xE9</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Informations sur le v\xE9hicule</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nom</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cat\xE9gorie</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Age</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(ressourceData(planAction[code].ressource.commune), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center my-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-10 me-2\" name=\"ellipse\"></ion-icon><span class=\"fs-7 text-dark\">Moyens de mobilit\xE9\xA0d'une organisation non gouvernementale (ONG)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"ressourceCommune\" data-title=\"Situation des moyens de mobilit\xE9 d'une organisation non gouvernementale (ONG)\" data-id=\"ressourceCommune\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th rowspan=\"2\">CS</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Centre de sant\xE9</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Informations sur le v\xE9hicule</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nom</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cat\xE9gorie</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Age</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(ressourceData(planAction[code].ressource.commune), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center fw-bold\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon class=\"text-1 fs-6 me-2\" name=\"people-outline\"></ion-icon><span class=\"fs-7 text-dark\">Ressources humaines \xE0 mobiliser</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table thisTable table-bordered\" id=\"ressourceHumain\" data-title=\"Ressources humaines \xE0 mobiliser\" data-id=\"ressourceHumain\" data-align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>M\xE9decin</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Infirmi\xE8re(er)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Sage Femme</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Technicien</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chauffeur</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Ressources humaines d'appuie</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Mode Fixe</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.fixe.medecin, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.fixe.infirmier, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.fixe.sageFemme, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.fixe.technicien, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.fixe.chauffeur, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.fixe.appuie, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Mode Mobile</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.mobile.medecin, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.mobile.infirmier, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.mobile.sageFemme, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.mobile.technicien, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.mobile.chauffeur, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.mobile.appuie, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-start\" colspan=\"6\"> Nombre d\u2019\xE9quipes mobile op\xE9rationnelle</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>").concat(planAction[code].ressourceHumain.mobile.emOperationnelle, "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t"));
    var modal = new bootstrap.Modal(document.getElementById('modalTable'));
    modal.show();
    pdf();
  }

  function showErrorModal() {
    $('#modalPlace').empty().append("\n\t\t<div class=\"modal fade p-0 m-0\" id=\"modalTable\" tabindex=\"-1\" aria-labelledby=\"modalTableLabel\" aria-hidden=\"true\">\n\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-body justify-content-between align-items-centre d-flex\">\n\t\t\t\t\t\t<span class=\"modal-title text-dark fw-bold fs-7\" id=\"modalTableLabel\">vous ne pouvez pas voir ce plan d'action</span>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm p-1 text-body\" data-bs-dismiss=\"modal\" aria-label=\"Close\"><ion-icon class=\"fs-5 align-middle\" name=\"close-outline\"></ion-icon></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t");
    var modal = new bootstrap.Modal(document.getElementById('modalTable'));
    modal.show();
  } // VARIABLES


  var data = $('#dataRegion').data('carte'),
      planAction = $('#dataRegion').data('planaction'),
      codeRegion = parseInt($('#data').data('code')),
      region = $('#data').data('region'),
      title = "Taux de remplissage du plan d'action",
      // other
  max = 100,
      scale = ['#FF4646', '#FFF891', '#fcf75a', '#7DFE69', '#169a01', '#0a4600'];
  ; // MAP

  $('#region-map').vectorMap({
    map: 'region',
    series: {
      regions: [{
        values: _defineProperty({}, codeRegion, data[codeRegion]),
        scale: scale,
        normalizeFunction: 'polynomial',
        max: 100,
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
        'stroke-width': 8,
        fill: '#c6cacd'
      },
      hover: {
        stroke: '#000000',
        'stroke-width': 8,
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
      if (code == codeRegion) {
        label.html("\n\t\t\t\t\t<div class=\"bg-white shadow-sm p-1 rounded\">\n\t\t\t\t\t<table class=\"table table-sm table-bordered fs-8 text-center text-dark\">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t<th colspan=\"3\">R\xE9gion : ".concat(label.html(), "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t<th colspan=\"3\">").concat(title, " : <span class=\"fs-7\"> <span class=\"badge bg-5\">").concat(data[code], " %</span></span></th>\n\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t\t"));
      }
    },
    onRegionClick: function onRegionClick(e, code) {
      if (code == codeRegion) {
        showModal(planAction, code);
      } else {
        showErrorModal();
      }
    }
  });
});