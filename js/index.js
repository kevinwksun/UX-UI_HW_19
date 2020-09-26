console.log("Your index.js file is loaded correctly!")
  ;

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 250);

// Bouncing Down Arrow
$(window).bind('scroll', function() {
  if ($(window).scrollTop() > 30) {
      $('.bounceMe').hide();
  }
  else {
      $('.bounceMe').show();
  }
 });
