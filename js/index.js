$('document').ready(function(){


    $('document').submit(function(e){
      e.preventDefault();
    });



    $('.readmore').click(function(){

      $('#show-this-on-click').slideDown("slow");

      $('#readlessLink').show();

      $('.readmore').hide();

    });


    $('#readlessLink').click(function(){

      $('#show-this-on-click').slideUp("slow");

      $('#readlessLink').hide();

      $('.readmore').show('slow');

    });


    $('.learnmore').click(function(){

      $('#learnmoretext').slideDown("slow");

      $('.learnmore').hide();

    });


    //HOW TO STOP JUMPING UP THE PAGE WHEN LEARN MORE IS CLICKED?
      //PREVENT DEFAULT
    //CSS display inline block???
      //FIX MARGINS
    //Select the appropriate DOM elements with CSS selectors upon a user's click using the $.click() handler?










});
