

// match 1
  $(document).ready(function(){
    $("#hide").click(function(){
        $("#fold_p").fadeOut(function () {                  
            $("#fold_p").text(($("#fold_p").text() == 'Hide') ? 'Show Content' : 'Hide').fadeIn();
        })

    $("#p").slideToggle();
    });


  });

// Match2
$(document).ready(function(){
    $("#hide1").click(function(){
        $("#fold_p1").fadeOut(function () {                  
            $("#fold_p1").text(($("#fold_p1").text() == 'Hide') ? 'Show Content' : 'Hide').fadeIn();
        })

    $("#p1").slideToggle();
    });
  });

// Match3
$(document).ready(function(){
    $("#hide2").click(function(){
        $("#fold_p2").fadeOut(function () {                  
            $("#fold_p2").text(($("#fold_p2").text() == 'Hide') ? 'Show Content' : 'Hide').fadeIn();
        })
        
    $("#p2").slideToggle();
    });
  });

// Match4
$(document).ready(function(){
    $("#hide4").click(function(){
        $("#fold_p4").fadeOut(function () {                  
            $("#fold_p4").text(($("#fold_p4").text() == 'Hide') ? 'Show Content' : 'Hide').fadeIn();
        })
        
    $("#p4").slideToggle();
    });
  });

// Match5
$(document).ready(function(){
    $("#hide5").click(function(){
        $("#fold_p5").fadeOut(function () {                  
            $("#fold_p5").text(($("#fold_p5").text() == 'Hide') ? 'Show Content' : 'Hide').fadeIn();
        })
        
    $("#p5").slideToggle();
    });
  });

// Match6
$(document).ready(function(){
    $("#hide6").click(function(){
        $("#fold_p6").fadeOut(function () {                  
            $("#fold_p6").text(($("#fold_p6").text() == 'Hide') ? 'Show Content' : 'Hide').fadeIn();
        })
        
    $("#p6").slideToggle();
    });
  });

// Match 7
$(document).ready(function(){
$("#hide7").click(function(){
    $("#fold_p7").fadeOut(function () {                  
        $("#fold_p7").text(($("#fold_p7").text() == 'Hide') ? 'Show Content' : 'Hide').fadeIn();
    })
    
$("#p7").slideToggle();
});
});

// End Matches

// Start Editing Matches
$(document).ready(function(){
    $("#MT").click(function(){   
    $(header).hide();    
    $("#Matches").show();
    });
    });
// End Editing Matches


// Active Navbar
$(document).ready(function () {
 
    $('ul.navbar-nav > li').click(function (e) {
        $('ul.navbar-nav > li')
            .removeClass('active');
        $(this).addClass('active');
    });
});
// END Active NavBar


