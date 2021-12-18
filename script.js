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
    $('.owl-carousel').owlCarousel({
        nav: true, // Show next and prev buttons
        loop: true,
        autoplay: true,
        slideSpeed : 300,
        autoplaySpeed : 1000,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        items : 1, 
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



// message

$('#TombolPesan').click( function(e){

    e.preventDefault();
    $(this).html('Sending..');
    
    var noWa = $('#noWa').val();
    var nama = $('#nama').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

        window.location = 'https://api.whatsapp.com/send?phone='+noWa+'&text=Nama:%20'+nama+'%20%0DEmail:%20'+email+'%20%0DSubject:%20'+subject+'%20%0DPesan:%20'+message

  })