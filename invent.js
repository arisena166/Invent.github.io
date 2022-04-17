let oneklik = document.querySelector('.klik');
let menu = document.querySelector('.menu-sidebar');
// let bars = document.querySelector('.bars');
// let closed1 = document.querySelector('.close');
let twoklik = document.querySelector('.klik2');

oneklik.addEventListener('click', function(){
    menu.classList.toggle('menu');
});
twoklik.addEventListener('click', function(){
    menu.classList.remove('menu');
});

$(window).scroll(function(){
    var pscroll = $(this).scrollTop();

    if(pscroll > $('.image').offset().top - 200){
       $('.image').each(function(i){
           setTimeout(function(){
               $('.image').eq(i).addClass('parallax')
           },500 * i);
       });
    }
});
