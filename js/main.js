$(document).ready(function(){$(".hero-slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,fade:!0,prevArrow:$(".previous"),nextArrow:$(".nextus")}),$(".gallery-pics").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,lazyLoad:"ondemand",prevArrow:$(".prev-slide"),nextArrow:$(".next-slide"),responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}}]}),$(".comments-carousel").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,prevArrow:$(".prev-comment"),nextArrow:$(".next-comment"),responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}}]}),$(".gallery-pics").magnificPopup({delegate:"a",type:"image"}),$(".menu-btn").on("click",function(e){e.preventDefault(),$(".main-menu").addClass("active")}),$(".close").on("click",function(e){e.preventDefault(),$(".main-menu").removeClass("active")}),$(".menu-btn_mob").on("click",function(e){e.preventDefault(),$(".main-menu").addClass("active")}),$(".menu__list a").on("click",function(e){$(".main-menu").removeClass("active")}),$(".limit.items > div > a").on("click",e=>{e.preventDefault();e=$(e.target).attr("href"),e=$(e).offset().top;$("body,html").animate({scrollTop:e},1500)})});