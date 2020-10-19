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

      $('#exampleModal').on('shown.bs.modal',function(e){
        console.log('El modal se mostro');
      });
      
      $('#exampleModal').on('hide.bs.modal',function(e){
        console.log('El modal se oculta');
      });

      $('#exampleModal').on('hidden.bs.modal',function(e){
        console.log('El modal se oculto');
        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-outline-dark');
        $('#contactoBtn').prop('disabled', false);
      });

    });