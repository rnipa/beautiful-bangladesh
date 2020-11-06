function openMenu(){
    document.getElementById ('navbar') .style.width="100%";
}
function closeHem(){
    document.getElementById ('navbar') .style.width="0%";
}

$('[data-fancybox]').fancybox({
	toolbar  : false,
	smallBtn : true,
	iframe : {
		preload : false
	}
});
//about section show
$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect" ).show( selectedEffect, options, 500, callback );
    }
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    }
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect" ).hide();
  } )
  function closeMenu(){
    document.getElementById ('button') .style.opacity="0%";
};
var wow = new WOW(
	{
	  boxClass:     'wow',      // animated element css class (default is wow)
	  animateClass: 'animated', // animation css class (default is animated)
	  offset:       0,          // distance to the element when triggering the animation (default is 0)
	  mobile:       true,       // trigger animations on mobile devices (default is true)
	  live:         true,       // act on asynchronously loaded content (default is true)
	  callback:     function(box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	  },
	  scrollContainer: null,    // optional scroll container selector, otherwise use window,
	  resetAnimation: true,     // reset animation on end (default is true)
	}
  );
  wow.init();

  var owl = $('.owl-carousel');
  owl.owlCarousel({
	  items:4,
	  loop:true,
	  margin:10,
    autoplay:true,
	  autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },            
      960:{
          items:3
      },
      1200:{
          items:4
      }
  }
  });
  $('.play').on('click',function(){
	  owl.trigger('play.owl.autoplay',[1000])
  });
  $('.stop').on('click',function(){
	  owl.trigger('stop.owl.autoplay');
  });
  //fancy box
  $('[data-fancybox="images"]').fancybox({
    afterLoad : function(instance, current) {
      var pixelRatio = window.devicePixelRatio || 1;
  
      if ( pixelRatio > 1.5 ) {
        current.width  = current.width  / pixelRatio;
        current.height = current.height / pixelRatio;
      }
    }
  });

  //effect
  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect" ).hide();
  } );
