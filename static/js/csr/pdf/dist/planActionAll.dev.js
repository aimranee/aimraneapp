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


  function generateMulPdf(region, province, csr, category, year) {
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

    doc.text('Direction Régionale de la Santé : ' + region, 15, 66);
    doc.text('Délégation du Ministère de la Santé : ' + province, 15, 72);
    doc.text('Centre de santé (' + category + ') : ' + csr, 15, 78); // PDF PAGINATION INIT

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
          }
        });
      } else {
        doc.text(i + 1 + '- ' + listTable[i].title, 15, 88);
        doc.autoTable({
          html: '#' + listTable[i].id,
          startY: 91,
          theme: 'grid',
          styles: {
            halign: listTable[i].align,
            textColor: [0, 0, 0],
            font: 'times'
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


    doc.save("plan d'action des unités médicales mobiles (umm) - " + csr + ' - ' + year + '.pdf');
  } // call the function


  $('#downloadPlanActionAllPdf').click(function () {
    // DOWNLOAD ALL PDFS
    console.log($(this).data('createdat'));
    generateMulPdf($(this).data('region'), $(this).data('province'), $(this).data('csr'), $(this).data('category'), new Date($(this).data('createdat')));
  });
});