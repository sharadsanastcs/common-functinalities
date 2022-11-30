# tab functionlaity

Please find all details related tab functionlity

youtube url: https://www.youtube.com/watch?v=UPJsbVPntcA


# scroll functionlaity

Please find all details related tab functionlity

youtube url: https://www.youtube.com/watch?v=yCSDAySvR3Q

JS code: 
jQuery("a[href^='#']").click(function(e) {
    e.preventDefault();
      var position = jQuery(jQuery(this).attr("href")).offset().top - 0 ;
    jQuery("body, html").animate({
      scrollTop: position
    } );
  });

  $(".back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 500);
 });
 
 
 Html: in html link href and section id should be same


