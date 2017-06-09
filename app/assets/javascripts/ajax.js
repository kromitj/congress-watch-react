$( document ).ready(function() {
   $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') )  {
    		if( $(e.target).hasClass('actionable') )  {
	        $(this).collapse('hide');
      	}
    }
});
});