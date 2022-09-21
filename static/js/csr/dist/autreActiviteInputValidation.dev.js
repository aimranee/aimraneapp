"use strict";

// document ready
$(document).ready(function () {
  // functions
  function invalidInput(element) {
    event.preventDefault();
    element.addClass('is-invalid');
    element.next('.invalid-feedback').text('*Entrée invalide');
  } // -- submit


  $('input[type=radio]').change(function () {
    if ($(this).val() == 'Acte') $('label[for=activityBeneficier]').text('Nombre d’actes');else $('label[for=activityBeneficier]').text('Nombre de bénéficiaires');
  });
});