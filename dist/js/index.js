$(function(){$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover(),$(".carousel").carousel({interval:2e3}),$("#exampleModal").on("show.bs.modal",function(o){console.log("el modal se esta mostrando"),$("#contactoBtn").removeClass("btn-outline-dark"),$("#contactoBtn").addClass("btn-outline-success"),$("#contactoBtn").prop("disabled",!0)})});