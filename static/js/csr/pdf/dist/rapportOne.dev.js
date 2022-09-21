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


  function generateOnePdf(id, region, province, csr, category, year) {
    // VARIABLES
    var table = {}; // GET THE TABLE

    table.title = $('.table.thisTable#' + id).data('title');
    table.align = $('.table.thisTable#' + id).data('align'); // INIT THE DOCUMENT

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
    doc.text(doc.page + '', 105, 285); // ADD TABLE

    doc.text('1- ' + table.title, 15, 88);
    doc.autoTable({
      html: '#' + id,
      startY: 91,
      theme: 'grid',
      styles: {
        halign: table.align,
        textColor: [0, 0, 0],
        font: 'times'
      },
      willDrawCell: function willDrawCell(data) {
        for (var i = 0; i < data.cell.text.length; i++) {
          var element = data.cell.text[i];

          if (element.includes('...Observations')) {
            data.cell.text[i] = data.cell.text[i].split('...Observations')[1];
          }
        }
      }
    }); // GENERATE THE FINALE PDF

    doc.save(table.title.toLowerCase() + ' - ' + csr + ' - ' + year + '.pdf');
  } // call the function


  $('.downloadPlanActionPdf').click(function () {
    var today = new Date(); // DOWNLOAD ALL PDFS

    generateOnePdf($(this).data('id'), $(this).data('region'), $(this).data('province'), $(this).data('csr'), $(this).data('category'), today.getFullYear());
  });
});