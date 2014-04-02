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
		rect.addCssClass('printer');
		$.canvas.addFigure( rect,150,150);	
	},
	$.addPrinter = function () {
		$.canvas.addFigure(new Printer(),150,150); 	
	},
	$.addCloud = function () {
		$.canvas.addFigure(new Cloud(),150,150);
	},
	$.addDesttopPC = function () {
		$.canvas.addFigure(new DesktopPC(),150,150);
	},
	$.addMako6500 = function () {
		$.canvas.addFigure(new Mako6500(),150,150);
	},
	$.addFTPos = function () {
		$.canvas.addFigure(new EFTPos(),150,150);
	},
	$.addInternetGlobe = function () {
		$.canvas.addFigure(new InternetGlobe(),150,150);
	},
	$.addMako7550 = function () {
		$.canvas.addFigure(new Mako7550(),150,150);
	},
	$.addCMSServer = function () {
		$.canvas.addFigure(new CMSServer(),150,150);
	},
	$.addMobilePhone = function () {
		$.canvas.addFigure(new MobilePhone(),150,150);
	},
	$.addNetworkSwitch = function () {
		$.canvas.addFigure(new NetworkSwitch(),150,150);
	},
	$.addNotebookPC = function () {
		$.canvas.addFigure(new NotebookPC(),150,150);
	}
})(jQuery);

