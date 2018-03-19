$(function(){
      $('.slider').bxSlider({
		nextText: '', // отключаем текст кнопки Next
 		prevText: '', // отключаем текст кнопки Prev
 		slideMargin: 0, 
        auto: true,
        pause: 4000
      });
});

$(function(){
		$('.phone__wrapper').click(function(){
			$('#exampleModal').arcticmodal();
		})
})

$(function(){
    $('.footer__confidentialiti').click(function(){
    $('#exampleModal4').arcticmodal();
    })
})

// Плавная прокрутка по клику на якорь

$(document).ready(function(){
    $('.header__arrow_link').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

// Скрипт меню-бургер

$(function(){
            $('.menu__icon').click(function(){
                $('.heading__wrapper').toggleClass('menu_state_open');
            });
        });



// Маска ввода номера телефона (плагин maskedinput)
$(function($){
    $('[name="phone"]').mask("+7(999) 999-9999");
});

// Отправка заявки 
$(document).ready(function() {
    $('.form__wrapper_sub').submit(function() {  // для несколькоих форм на одной страницу лучше указывать не id а class
        $.ajax({
            type: "POST",
            url: "mail/mail.php",
            data: $(this).serialize()
        }).done(function() {            // если форма отправилась
            $('#exampleModal1').arcticmodal();
            $(this).find('input').val(''); // очистака формы
            $('.form__wrapper_sub').trigger('reset');  // очистака формы
        }).fail(function() {              // если форма не отправилась
            $('#exampleModal1').arcticmodal2();
            $(this).find('input').val('');
            $('.form__wrapper_sub').trigger('reset');
        });
        return false;
    });
});




