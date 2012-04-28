/**
 * @author Chris Neigh
 */
$(document).ready(function( ){
	$('.heading').click(function() {
		$(this).parent().children('.accordian').toggle();
	});
});