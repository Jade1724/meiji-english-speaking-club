$(document).ready(function () {
  $('.hamburger-menu').click(function () {
    $('.animated-icon').toggleClass('show');
  });
});

$(document).ready(function(){
  $('main').click(function(){
  	$('.navbar-toggler').addClass('collapsed');
    $('.navbar-collaplse').removeClass('show');
  });
});

$(document).ready(function () {
	$('#headingOne').click(function () {
		$('#chevronOne').toggleClass('rotate')
	})
})

$(document).ready(function () {
	$('#headingTwo').click(function () {
		$('#chevronTwo').toggleClass('rotate')
	})
})

$(document).ready(function () {
	$('#headingThree').click(function () {
		$('#chevronThree').toggleClass('rotate')
	})
})

