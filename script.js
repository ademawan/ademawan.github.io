$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        nav: true, // Show next and prev buttons
        loop: true,
      slideSpeed : 300,
      paginationSpeed : 400,
 
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
    });
});



//galerry 1
// let galleryContent = document.querySelector('.gallery-content');
// let galleryContentKiri = document.querySelector('.kiri img');
// let galleryContentTengah = document.querySelector('.tengah img');
// let galleryContentKanan = document.querySelector('.kanan img');
// galleryContent.addEventListener('click', function(e){
    
//     if(e.target.parentElement='kanan'){
//         let sementara=e.target.src;
//         galleryContentKanan.src=servContentKiri.src;
//         galleryContentKiri.src= servContentTengah.src;
//         galleryContentTengah.src=sementara;
//     }
//     else if(e.target.parentElement='kiri'){
//         let sementara2=e.target.src;
//         galleryContentKiri.src=galleryContentKanan.src;
//         galleryContentKanan.src=galleryContentTengah.src;
//         galleryContentTengah.src=sementara2;
//     }
    
//     console.log(e.target.parentElement);
// });




//gallery cara 2
const container = document.querySelector('.gallery-content');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function(e){
    if(e.target.className == 'thumb'){
        console.log(e.target);
        jumbo.src = e.target.src;
    }
});