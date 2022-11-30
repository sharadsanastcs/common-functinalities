$( document ).ready(function() {

	//adding data section to tab links div
	jQuery('.tab-link').each(function (i) {
		jQuery(this).attr('data-section', 'section' + i);
	});
	

	//adding data section to tab content div
	jQuery('.tab-content').each(function (i) {
		jQuery(this).attr('data-section', 'section' + i);
	});
	

	//adding active class to first visible div
	jQuery('.tab-link:first-child').addClass('active');
	jQuery('.tab-content:first-child').addClass('active');
	

	//adding active class on click to this link and content
	jQuery('.tab-link').on('click', function () {
		//adding active class to tab
		jQuery(this).addClass('active');
		jQuery(this).prevAll().removeClass('active');
		jQuery(this).nextAll().removeClass('active');
	
		//panel adding active class
		var target = jQuery(this).attr('data-section');
		var a = jQuery('.tab-content[data-section="' + target + '"]');
		jQuery(a).addClass('active');
		jQuery(a).prevAll().removeClass('active');
		jQuery(a).nextAll().removeClass('active');
		return false;
	});
});