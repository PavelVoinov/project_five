$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/carousel_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/carousel_right.svg"></button>'
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault(e);
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    })
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    })

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    })

    function validForm (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                  required: true,
                  email: true
                }
            },
            messages: {
                name: {
                required: "Введите имя",
                minlength: jQuery.validator.format("Введите минимум {0} символа")
                },
                phone: "Введите номер телефона",
                email: {
                  required: "Введите почту",
                  email: "Ваша почта должна быть формата name@domain.com"
                }
            }
        });
    }

    validForm('#form-consult');
    validForm('#consultation form');
    validForm('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
  });