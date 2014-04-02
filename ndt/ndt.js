$(document).ready(function () {
	$.initDiagram();
});


(function ($){
	$.canvas = null,
	$.initDiagram = function () {	
		$.canvas = new draw2d.Canvas("gfx_holder");
		$('.add-printer-element').click (function () {
			$.addPrinter();
		});
		$('.add-cloud-element').click (function () {
			$.addCloud();
		});
		$('.add-desktop-pc-element').click (function () {
			$.addDesttopPC();
		});
		$('.add-mako-6500-element').click (function () {
			$.addMako6500();
		});
		$('.add-eftpos-element').click (function () {
			$.addFTPos();
		});
		$('.add-internet-globe-element').click (function () {
			$.addInternetGlobe();
		});
		$('.add-mako-7550-element').click (function () {
			$.addMako7550();
		});
		$('.add-cms-server-element').click (function () {
			$.addCMSServer();
		});
		$('.add-mobile-phone-element').click (function () {
			$.addMobilePhone();
		});
		$('.add-network-switch-element').click (function () {
			$.addNetworkSwitch();
		});
		$('.add-notebook-pc-element').click (function () {
			$.addNotebookPC();
		});
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

