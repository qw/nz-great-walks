//space out letter and word to stetch text over entire length of the line.
$.fn.strech_text = function(){
    var elmt          = $(this),
        cont_width    = elmt.width(),
        txt           = elmt.html(),
        one_line      = $('<span class="stretch_it">' + txt + '</span>'),
        nb_char       = elmt.text().length,
        spacing       = cont_width/nb_char,
        txt_width;
    
    elmt.html(one_line);
    txt_width = one_line.width();
    
    if (txt_width < cont_width){
        var  char_width     = txt_width/nb_char,
             ltr_spacing    = spacing - char_width + (spacing - char_width)/nb_char ; 
  
        one_line.css({'letter-spacing': ltr_spacing});
    } else {
        one_line.contents().unwrap();
        elmt.addClass('justify');
    }
};

//smooth anchor scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if(!$(this).hasClass('no-smooth-scroll')){
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    }
  });
});

//exceutes the stretch text slightly after the page is loaded to prevent a bug shown in the log
$(document).ready(function () {
  setTimeout(function(){
    $('.stretch').each(function(){
      $(this).strech_text();
    });
  }, 10);
});

