$(document).ready(() =>{
    $('.hamburger').click( () =>{
        $('.mobile').css({'right': '0', 'transition': '0.7s'});
    })
    $('.fechar').click( () =>{
        $('.mobile').css({'right': '-100%', 'transition': '0.7s'});
    })
    

});