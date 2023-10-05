(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.transparencia = {
    attach: function (context, settings) {
      const transparencia = $(".node--type-transparency", context);

      if (transparencia.length != 0) {
        $("a[href^='#']").once().on("click", function (e) {
          e.preventDefault();
          var id = $(this).attr('href').split('#');
          var data_target = 'false';

          if (id[1].length != 0) {
            if (id[1] == 'balanco') {
              var target = $("#"+ id[1]).offset().top - 200;
              data_target = 'balanco';
            } else if (id[1] == 'fundoptr') {
              var target = $("#"+ id[1]).offset().top - 290;
              data_target = 'fundoptr';
            } else if (id[1] == 'painelindicadores') {
              var target = $("#"+ id[1]).offset().top - 200;
              data_target = 'painelindicadores';
            } else if (id[1] == 'poligonais') {
              var target = $("#"+ id[1]).offset().top - 100;
              data_target = 'poligonais';
            } else if (id[1] == 'cadastro') {
              var target = $("#"+ id[1]).offset().top - 100;
              data_target = 'cadastro';
            } else if (id[1] == 'atendimentos') {
              var target = $("#"+ id[1]).offset().top - 100;
              data_target = 'atendimentos';
            } else if (id[1] == 'equipe') {
              var target = $("#"+ id[1]).offset().top - 200;
              data_target = 'equipe';
            } else {
              var target = $("#"+ id[1]).offset().top - 250;
            }

            $("#scroll-mode").attr('data-status', 'off');
            $('html, body').animate({scrollTop: target}, 800, function() {
              $("#scroll-mode").attr('data-status', 'on');
            });
          }
        });

        $(window).once().on("scroll", function(e) {
          var ptrnumeros = $("#ptrnumeros", context).offset().top;
          var balanco = $("#balanco", context).offset().top - 300;
          var fundoptr = $("#fundoptr", context).offset().top - 300;
          var painelindicadores = $("#painelindicadores", context).offset().top - 300;
          var poligonais = $("#poligonais", context).offset().top - 300;
          var cadastro = $("#cadastro", context).offset().top - 300;
          var atendimentos = $("#atendimentos", context).offset().top - 300;
          var equipe = $("#equipe", context).offset().top - 300;

          if ($("#scroll-mode").attr('data-status') == 'on') {
            if ($(this).scrollTop() >= ptrnumeros && $(this).scrollTop() <= balanco) {  
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link").removeClass('active');
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link[href='#ptrnumeros']").addClass('active');
            } else if ($(this).scrollTop() >= balanco && $(this).scrollTop() <= fundoptr) {
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link").removeClass('active');
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link[href='#balanco']").addClass('active');
            } else if ($(this).scrollTop() >= fundoptr && $(this).scrollTop() <= painelindicadores) {
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link").removeClass('active');
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link[href='#fundoptr']").addClass('active');
            } else if ($(this).scrollTop() >= painelindicadores && $(this).scrollTop() <= poligonais) {
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link").removeClass('active');
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link[href='#painelindicadores']").addClass('active');
            } else if ($(this).scrollTop() >= poligonais && $(this).scrollTop() <= cadastro) {
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link").removeClass('active');
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link[href='#poligonais']").addClass('active');
            } else if ($(this).scrollTop() >= cadastro && $(this).scrollTop() <= atendimentos) {
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link").removeClass('active');
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link[href='#cadastro']").addClass('active');
            } else if ($(this).scrollTop() >= atendimentos && $(this).scrollTop() <= equipe) {
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link").removeClass('active');
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link[href='#atendimentos']").addClass('active');
            } else if ($(this).scrollTop() >= equipe) {
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link").removeClass('active');
              $("#nav-internal-menu .navbar-nav .nav-item .nav-link[href='#equipe']").addClass('active');
            }            
          }
        });
      }
    }
  }

  Drupal.behaviors.scripts_glossario = {
    attach: function (context, settings) {
      const glossary_menu = $(".css-glossary-menu", context);
      const glossary_view = $(".css-glossary", context);
      const glossary_recent = $(".css-glossary-recent", context);

      if (glossary_menu.length != 0) {
        glossary_menu.find("#sticky-menu #nav-internal-menu .navbar-nav .nav-item .nav-link").on("click", function (e) {
          e.preventDefault();

          glossary_menu.find("#sticky-menu #nav-internal-menu .navbar-nav .nav-item .nav-link").removeClass('active open show');
          $(this).addClass('active');
          var id = $(this).attr('href').split('#');
          if (id[1].length != 0) {
            var target = $(".wrap-row[data-group='" + id[1] + "']").offset().top;
            $('html, body').animate({ scrollTop: target - 200 }, 800);
          }
        });
      }

      if (glossary_view.length != 0) {
        glossary_view.find(".wrap-row .views-row .glossary-item").on("click", function (e) {
          e.preventDefault();
          glossary_view.find(".wrap-row .views-row .glossary-item").removeClass("active");
          $(this).addClass('active');
          glossary_view.find(".wrap-row .bottom .bottom-content .item").addClass("hidden");
          glossary_view.find(".wrap-row .bottom .bottom-content .item[data-id='" + $(this).attr('data-id') + "']").removeClass('hidden');
        });

        glossary_view.find(".wrap-row .bottom-content .bottom-content-header .btn-close").on("click", function (e) {
          e.preventDefault();
          glossary_view.find(".wrap-row .views-row .glossary-item").removeClass("active");
          glossary_view.find(".wrap-row .bottom .bottom-content .item").addClass("hidden");
        });
      }

      if (glossary_recent.length != 0) {
        glossary_recent.find(".view-content .views-row .views-field-title .btn-recent").on("click", function (e) {
          e.preventDefault();
          var id = $(this).attr('data-id');
          var group = $(this).attr('data-group');

          $(".css-glossary .view-content .wrap-row[data-group='" + group + "']").find('.bottom .bottom-content .item').each(function (index, value) {
            if ($(this).attr('data-id') == id) {
              var target_glossary = $(".css-glossary .view-content .wrap-row[data-group='" + group + "'] .bottom .bottom-content .item[data-id='" + id + "']").parent().parent().parent();

              $(".css-glossary .view-content .wrap-row[data-group='" + group + "'] .top .row-field .glossary-item[data-id='" + id + "']").trigger("click");
              $('html, body').animate({
                scrollTop: target_glossary.offset().top + 50
              }, 500);
            }
          });
        });
      }
    }
  };

  Drupal.behaviors.scripts_glossario = {
    attach: function (context, settings) {

      $(".navbar-brand").click(function (event) {
        event.preventDefault();
        var year = $(this).text();
        $(".list-group-item").hide();
        $(".data-relatorio p:contains('" + year + "')").closest(".list-group-item").show();
      });
    }
  };

})(jQuery, Drupal);
