$(window).load(function () {
	$.initDiagram();
});


(function ($){
	$.canvas = null,
	$.initDiagram = function () {	
		$.canvas = new draw2d.Canvas("gfx_holder");
	},
	$.addRectangle = function(){
		var rect = new draw2d.shape.basic.Rectangle();
		rect.createPort('output');
		$.canvas.addFigure( rect,150,150);	
	}
	,
	$.addPrinter = function () {
		var printer = new draw2d.shape.widget.Widget();
		// add Class
		$.canvas.addFigure(printer,150,150); 	
	}
})(jQuery);
