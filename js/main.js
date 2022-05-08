// slider section

$(document).ready(function(){
    $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<i class="slick-prev fas fa-angle-left"></i>',
    nextArrow: '<i class="slick-next fas fa-angle-right"></i>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
    });
  });





  // ================================swiper slider===============
        var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          
        },
        
      });
  


// hame burger
// ===========================nav bar========================:-
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});







