document.getElementById('menuicon').addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('open');
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 90
        }, 1000);
    }
});;


// $( ".service-box" ).hover(
//     function() {
//       $( this ).append( $( "<span> ***</span>" ) );
//     }, function() {
//       $( this ).find( "span:last" ).remove();
//     }
//   );
   
// $(".service-box").hover(function(){
    
//     $('.service-text').show(100);
// },function(){
//     $('.service-text').hide(100);
// });