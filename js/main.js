$(document).ready(function(){

    $('#header-menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.header-navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

       /*  $('#header-menu-bar').removeClass('fa-times');
        $('.header-navbar').removeClass('nav-toggle'); */

        if($(window).scrollTop() > 68){
            $('.header .header-bottom').addClass('header-active');
        }else{
            $('.header .header-bottom').removeClass('header-active');
        }

        $('.section').each(function(){

            let height = $(this).height();
            let offset = $(this).offset().top -200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.header-navbar ul li a').removeClass('active');
                $('.header-navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.slider-container').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    });

   $('.small-image img').click(function(){

        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);

    }); 

    $('.gallery .btn').click(function(){

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.gallery .box-container_item').show(400);
        }else{
            $('.gallery .box-container_item').not('.'+filter).hide(200);
            $('.gallery .box-container_item').filter('.'+filter).show(400);
        }

        $(this).addClass('button-active').siblings().removeClass('button-active');

    });

});

   /*=====SCROLL TOP======*/
   const scrollTop = document.querySelector(".scroll-top");

   window.addEventListener("scroll", function(e) {
       if (this.scrollY >= 500) {
           scrollTop.classList.add("scrolltop-active");
       } else {
           scrollTop.classList.remove("scrolltop-active");
       }
   });
 