	/* ---------------------------------------------------------------------- */
	/*	On Page Load
	/* ---------------------------------------------------------------------- */
	
	$(document).ready( function() {   
		
		/* activate popovers */
		setup_popovers();
				
		/* detect if mobile */
		isMobile()
		
		/* progress bar animate */
		progressbar_animate();

	}); 

	/* end on page load */
	
	/* ---------------------------------------------------------------------- */
	/*	isMobile
	/* ---------------------------------------------------------------------- */
	
	/** NOTE: Notice we have separated function calls based on user platform. 
	 		  This significantly cuts down on memory usage and prolongs a healthy 
	 		  user experience. 
	**/
		
	function isMobile() {
		/* so far this is covering most hand held devices */
		var ismobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));	
	    if(!ismobile){
		    //console.log("NOT mobile version - message from config.js");
		    
		    /* widgets for desktop */
		    setup_widgets_desktop();
			
		} else {
			//console.log("IS mobile version - message from config.js");
			
			/* widgets for desktop */
			setup_widgets_mobile();
		}
	}
	
	/* end isMobile */

	/* ---------------------------------------------------------------------- */
	/*	Popovers
	/* ---------------------------------------------------------------------- */
	
	function setup_popovers(){
		
		if ($('.popover-js').length){
			/* popovers */
			$('.popover-js').popover();
		}
		
	}
	
	
	
	/* ---------------------------------------------------------------------- */
	/*	Widgets Desktop
	/* ---------------------------------------------------------------------- */	
	
	function setup_widgets_desktop() {
		
		if ($('#widget-grid').length){
			
			$('#widget-grid').jarvisWidgets({	
							
				grid: 'article',
				widgets: '.jarviswidget',
				localStorage: false,
				deleteSettingsKey: '#deletesettingskey-options',
				settingsKeyLabel: 'Reset settings?',
				deletePositionKey: '#deletepositionkey-options',
				positionKeyLabel: 'Reset position?',
				sortable: true,
				buttonsHidden: false,
				toggleButton: true,
				toggleClass: 'min-10 | plus-10',
				toggleSpeed: 200,
				onToggle: function(){},
				deleteButton: true,
				deleteClass: 'trashcan-10',
				deleteSpeed: 200,
				onDelete: function(){},
				editButton: true,
				editPlaceholder: '.jarviswidget-editbox',
				editClass: 'pencil-10 | edit-clicked',
				editSpeed: 200,
				onEdit: function(){},
				fullscreenButton: true,
				fullscreenClass: 'fullscreen-10 | normalscreen-10',	
				fullscreenDiff: 3,		
				onFullscreen: function(){},
				customButton: false,
				customClass: 'folder-10 | next-10',
				customStart: function(){ alert('Hello you, this is a custom button...') },
				customEnd: function(){ alert('bye, till next time...') },
				buttonOrder: '%refresh% %delete% %custom% %edit% %fullscreen% %toggle%',
				opacity: 0.5,
				dragHandle: '> header',
				placeholderClass: 'jarviswidget-placeholder',
				indicator: true,
				indicatorTime: 600,
				ajax: true,
				timestampPlaceholder:'.jarviswidget-timestamp',
				timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
			    refreshButton: true,
			    refreshButtonClass: 'refresh-10',
				labelError:'Sorry but there was a error:',
				labelUpdated: 'Last Update:',
				labelRefresh: 'Refresh',
				labelDelete: 'Delete widget:',
				afterLoad: function(){},
				rtl: false
				
			});
			
		} // end if
		
	}
	
	/* end widgets desktop */

	/* ---------------------------------------------------------------------- */
	/*	Widgets Mobile
	/* ---------------------------------------------------------------------- */
	
	function setup_widgets_mobile() {	
		
		if ($('#widget-grid').length){
			
			$('#widget-grid').jarvisWidgets({	
							
				grid: 'article',
				widgets: '.jarviswidget',
				localStorage: false,
				deleteSettingsKey: '#deletesettingskey-options',
				settingsKeyLabel: 'Reset settings?',
				deletePositionKey: '#deletepositionkey-options',
				positionKeyLabel: 'Reset position?',
				sortable: true,
				buttonsHidden: false,
				toggleButton: true,
				toggleClass: 'min-10 | plus-10',
				toggleSpeed: 200,
				onToggle: function(){},
				deleteButton: true,
				deleteClass: 'trashcan-10',
				deleteSpeed: 200,
				onDelete: function(){},
				editButton: true,
				editPlaceholder: '.jarviswidget-editbox',
				editClass: 'pencil-10 | edit-clicked',
				editSpeed: 200,
				onEdit: function(){},
				fullscreenButton: true,
				fullscreenClass: 'fullscreen-10 | normalscreen-10',	
				fullscreenDiff: 3,		
				onFullscreen: function(){},
				customButton: false,
				customClass: 'folder-10 | next-10',
				customStart: function(){ alert('Hello you, this is a custom button...') },
				customEnd: function(){ alert('bye, till next time...') },
				buttonOrder: '%refresh% %delete% %custom% %edit% %fullscreen% %toggle%',
				opacity: 1.0,
				dragHandle: '> header',
				placeholderClass: 'jarviswidget-placeholder',
				indicator: true,
				indicatorTime: 600,
				ajax: true,
				timestampPlaceholder:'.jarviswidget-timestamp',
				timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
				refreshButton: true,
				refreshButtonClass: 'refresh-10',
				labelError:'Sorry but there was a error:',
				labelUpdated: 'Last Update:',
				labelRefresh: 'Refresh',
				labelDelete: 'Delete widget:',
				afterLoad: function(){},
				rtl: false
				
			});
			
		}// end if
		
	}
		
	/* end widgets Mobile */



	/* ---------------------------------------------------------------------- */
	/*	Progress bar
	/* ---------------------------------------------------------------------- */	

	function progressbar_animate(){
		$('.progress .bar.filled-text').progressbar({
	        display_text: 1,
	        transition_delay: 1000,
	    });
		
		$('.slim .bar').progressbar({
			 transition_delay: 300
		});
		
		$('.delay .bar').progressbar({
			display_text: 1,
	        transition_delay: 2000
	    });
		
		$('.value .bar').progressbar({
			display_text: 1,
	        use_percentage: false,
	        transition_delay: 1000
	    });
		
		$('.progress .bar.centered-text').progressbar({
	        display_text: 2,
	    });
		
		$('.progress .no-text').progressbar();
	}
	
	/* end progress bar */



	/* ---------------------------------------------------------------------- */
	/*	Window.resize functions
	/* ---------------------------------------------------------------------- */	
		
	$(window).resize(function(){


	});
	
	/* end window.resize functions */
	
	/* ---------------------------------------------------------------------- */
	/*	Window.load functions
	/* ---------------------------------------------------------------------- */	
	
	$(window).load(function(){


	});
	
	/* end window.load functions */
	
	
var showRightPush = document.getElementById( 'showRightPush' ),
body = document.body;
showRightPush.onclick = function() {
classie.toggle( this, 'active' );
classie.toggle( body, 'cbp-spmenu-push-toleft' );
}

$(function () {
$('[rel="popoverx"]').popoverx({
  fire_on: 'click',
  hover_delay_close : 2000,
  ensure_visiable: true,
  title:null,          
}); 
});

$('#hLayout').layout({
type: 'horizontal',
resizable: true,
helper: false,
panes: [
['#history', {minHeight: 80}],
['#favorites', {minHeight: 80}]
]
});
