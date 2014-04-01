$(window).load(function () {
	$.initDiagram();
});


(function ($){
	$.canvas = null,
	$.initDiagram = function () {	
		$.canvas = new draw2d.Canvas("gfx_holder");
	},
	$.addRectangle = function(){
		$.canvas.addFigure( new draw2d.shape.basic.Rectangle(),150,150);	
	}
	,
	$.addPrinter = function () {
			
	}
})(jQuery);
