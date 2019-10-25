$(document).ready(function(){

	$(document).ready(function(){
		$('.experience__wrap').slick({
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: false,
			slidesToShow: 2,
			responsive: [
		{
			breakpoint: 1170,
			settings: {
				slidesToShow: 1,
			}
		},
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	    ]
		});
	})

	$('.btn-toggle').click(function(){
		$('.header__mobile-menu').toggleClass('header__mobile-menu--active');
		$('body').toggleClass('body-overflow');
	});

	$(window).load(function(){
		$ (".header").sticky({ topSpacing: 0, className: 'sticky' });
	});

	$('.mask').mask("+380 999-99-99-99");

	$('.nav__link').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-119 }, 500); // анимируем скроолинг к элементу scroll_el
		    	$(".nav__link").removeClass('nav__link--active');
            		$(this).addClass('nav__link--active');
	        }
		    return false; // выключаем стандартное действие
    });

    $('.buying__icon').click(function() {
	    $('html, body').animate({
            scrollTop: $(".contracting").offset().top
        }, 500);
	});

	$('.competition__btn').click(function() {
	    $('html, body').animate({
            scrollTop: $(".benefit").offset().top-119
        }, 500);
	});

	$( "#slider" ).slider({
		value: 8,
		min: 8,
		max: 64,
		step: 8
	}).each(function() {
	  	var opt = $(this).data().uiSlider.options;

	  	var vals = opt.max - opt.min;
	  
		for (var i = 0; i <= vals; i += 8) {
	    	var el = $('<label>'+(i + 8)+'</label>').css('left',(i/vals*100)+'%');
	    	$( "#slider" ).append(el);
		}
		});

	$('form').each(function() {
		$(this).submit(function () {
            var formID = $(this).attr('id'); // Получение ID формы
            var formNm = $('#' + formID);
            $.ajax({
                type: 'POST',
                url: 'form.php', // Обработчик формы отправки
                data: formNm.serialize(),
                success: function (data) {
                    // Вывод текста результата отправки в текущей форме
                    $(formNm).html(data);
                }
            });
            return false;
        });

		$(this).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				number: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					minlength: 2
				},
				textarea: {
					required: true,
					minlength: 2
				}
			},
			messages: {
				name: {
					required: "",
				},
				number: {
					required: "",
				},
				email: {
					required: "",
					email: "" 
				},
				textarea: {
					required: "",
				},
			}
		});
	});
})