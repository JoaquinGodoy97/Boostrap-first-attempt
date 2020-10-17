    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
      $('[data-toggle="popover"]').popover()
      $('.carousel').carousel({
        interval: 2000
      });

      $('#exampleModal').on('show.bs.modal', function (e){
        console.log("el modal se esta mostrando");

        $('#contactoBtn').removeClass('btn-outline-dark');
        $('#contactoBtn').addClass('btn-outline-success');
        $('#contactoBtn').prop('disabled', true);

      });

    });