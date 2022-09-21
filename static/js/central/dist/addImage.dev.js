"use strict";

$(document).ready(function () {
  $('#image').change(function () {
    var picture = $(this)[0].files[0];

    if (!picture) {
      event.preventDefault();
      $('#image').val(null).addClass('is-invalid').next('.invalid-feedback').text('Les images PNG, JPG ou JPEG sont acceptées');
      $('#preview').addClass('d-none');
      return 0;
    }

    var type = picture.type.split('/');

    if (type[0] != 'image' && type[1] != 'png' && type[1] != 'jpg' && type[1] != 'jpeg') {
      $('#image').val(null).addClass('is-invalid').next('.invalid-feedback').text('Les images PNG, JPG ou JPEG sont acceptées');
      $('#preview').addClass('d-none');
      return 0;
    }

    var reader = new FileReader();
    reader.addEventListener('load', function () {
      $('#imagePreview').attr('src', this.result);
    });
    $(this).removeClass('is-invalid');
    $('#preview').removeClass('d-none');
    reader.readAsDataURL(picture);
    $('#remove').click(function () {
      $('#image').addClass('is-invalid').val(null);
      $('#preview').addClass('d-none');
    });
  });
});