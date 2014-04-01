shape_designer.dialog.About = Class.extend(
{
    NAME : "shape_designer.dialog.About", 

    init:function(){
     },

	show:function(){
		
	    this.splash = $(
	            '<div id="splash">'+
	            '<div>Draw2D Designer<br>'+
	            '4.4.1'+
	            '</div>'+
	            '</div>');
	    this.splash.hide();
	    $("body").append(this.splash);
	    
	    this.splash.fadeIn("fast");
	    
	},
	
	hide: function(){
        this.splash.delay(2500)
        .fadeOut( "slow", $.proxy(function() {
            this.splash.remove();
        },this));
	}

      
});  