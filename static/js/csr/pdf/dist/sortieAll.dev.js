"use strict";

$(document).ready(function () {
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


  function generateMulPdf(region, province, csr, category, createdat) {
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

    doc.text('Année : ' + createdat.getFullYear(), 90, 56); // IDENTITY

    doc.text('Direction Régionale de la Santé : ' + region, 15, 66);
    doc.text('Délégation du Ministère de la Santé : ' + province, 15, 72);
    doc.text('Centre de santé (' + category + ') : ' + csr, 15, 78);
    doc.text('Fait le : ' + createdat.getDate() + '/' + createdat.getMonth() + '/' + createdat.getFullYear(), 15, 84);
    doc.text('Soumis le : ' + createdat.getDate() + '/' + createdat.getMonth() + '/' + createdat.getFullYear(), 15, 84); // PDF PAGINATION INIT

    doc.page = 1;
    doc.text(doc.page + '', 105, 285); // ADD ALL TABLES

    for (var i = 0; i < listTable.length; i++) {
      // ADD CONTENT
      if (i != 0) {
        doc.text(i + 1 + ' - ' + listTable[i].title, 15, doc.lastAutoTable.finalY + 15);
        doc.autoTable({
          html: '#' + listTable[i].id,
          startY: doc.lastAutoTable.finalY + 18,
          theme: 'grid',
          styles: {
            halign: listTable[i].align,
            textColor: [0, 0, 0],
            font: 'times'
          },
          willDrawCell: function willDrawCell(data) {
            for (var _i = 0; _i < data.cell.text.length; _i++) {
              var element = data.cell.text[_i];

              if (element.includes('...Observations')) {
                data.cell.text[_i] = data.cell.text[_i].split('...Observations')[1];
              }
            }
          }
        });
      } else {
        doc.text(i + 1 + '- ' + listTable[i].title, 15, 94);
        doc.autoTable({
          html: '#' + listTable[i].id,
          startY: 91,
          theme: 'grid',
          styles: {
            halign: listTable[i].align,
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
      } // PREVENT SPLITING THE TABLE


      if (doc.lastAutoTable.finalY >= 260) {
        doc.addPage();
        doc.lastAutoTable.finalY = 0; // PDF PAGINATION

        doc.page++;
        doc.text(doc.page + '', 105, 285);
      }

      ;
    } // GENERATE THE FINALE PDF


    doc.save("rapport des activités des unités médical mobile (umm)  - " + csr + ' - ' + createdat.getFullYear() + '.pdf');
  } // call the function


  $('#downloadRapportAllPdf').click(function () {
    // DOWNLOAD ALL PDFS
    generateMulPdf($(this).data('region'), $(this).data('province'), $(this).data('csr'), $(this).data('category'), new Date($(this).data('createdat')), new Date($(this).data('updatedat')), $(this).data('submit'));
  });
});