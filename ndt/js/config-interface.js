	/* ---------------------------------------------------------------------- */
	/*	On Page Load
	/* ---------------------------------------------------------------------- */
	
	$(document).ready( function() {   
				
		/* setup toastr responsive alerts */
		setup_toastr();

		/* expand search input on focus */
		execute_idevice_functions();	
		
		/* detect if mobile */
		isMobile() 
		
		/* all buttons */
		setup_all_buttons()
        
		/*progress bar animate*/
		progressbar_animate();
		
		/* start bootbox */
		setup_bootbox_demo();
	}); 

	/* end on page load */
	
	/* ---------------------------------------------------------------------- */
	/*	isMobile
	/* ---------------------------------------------------------------------- */
	
	/** NOTE: Notice we have seperated funtion calls based on user platform. 
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
				sortable: false, // sorting disabled for mobile
				buttonsHidden: false,
				toggleButton: true,
				toggleClass: 'min-10 | plus-10',
				toggleSpeed: 200,
				onToggle: function(){},
				deleteButton: false,
				deleteClass: 'trashcan-10',
				deleteSpeed: 200,
				onDelete: function(){},
				editButton: true,
				editPlaceholder: '.jarviswidget-editbox',
				editClass: 'pencil-10 | edit-clicked',
				editSpeed: 200,
				onEdit: function(){},
				fullscreenButton: false,
				fullscreenClass: 'fullscreen-10 | normalscreen-10',	
				fullscreenDiff: 3,		
				onFullscreen: function(){},
				customButton: false, // custom button disabled for mobile
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
	/*	Toastr setup
	/* ---------------------------------------------------------------------- */	
	
	function setup_toastr() {
	
		toastr.options = {
			tapToDismiss : true,
			toastClass : 'toast',
			containerId : 'toast-container',
			debug : false,
			fadeIn : 250,
			fadeOut : 200,
			extendedTimeOut : 0,
			iconClasses : {
				error : 'toast-error',
				info : 'toast-info',
				success : 'toast-success',
				warning : 'toast-warning'
			},
			iconClass : 'toast-info',
			positionClass : 'toast-bottom-right',
			timeOut : 4500, // Set timeOut to 0 to make it sticky
			titleClass : 'toast-title',
			messageClass : 'toast-message'
		};
		
	}

	/* end toastr */

	/* ---------------------------------------------------------------------- */
	/*	Functions for idevice
	/* ---------------------------------------------------------------------- */	
	
	function execute_idevice_functions() {
		
		/* Function Detect iDevice 
		   Documentation: http://ivaynberg.github.com/select2/	*/
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
				
			/*	Initialize Hide iDevice Address bar */
			window.addEventListener("load",function() {			  
			  setTimeout(function(){
			    window.scrollTo(0, 1);  // Hide the address bar to increase user experience!
			  }, 0);
			});			
			/*end hide address*/
				  	
		} else {
			// do nothing
		 	return false;
		}
		/* end if */
	}
	
	/* end functions for idevice*/
	
	
	/* ---------------------------------------------------------------------- */
	/*	All button functions
	/* ---------------------------------------------------------------------- */	
	
	function setup_all_buttons() {
		
		/* buttons */		
		$("#refresh-js").click(function() {
		  toastr.warning('Please try again later', 'Database offline. No data available!');
		  return false; 
				
		});
		
		$("#save-notes-btn-js").click(function() {
			toastr.success('Message have been saved to notes', 'Saved');
			return false; 
		});
		
		$("#post-btn-js").click(function() {
			toastr.error('Database is currently offline', 'Error');
			return false; 
		});
		
		/* end buttons */
		
		/* theme switcher */
		
		$('#theme-switcher ul#theme-links-js li a').bind('click',
			function(e) {
				$("#switch-theme-js").attr("href", "css/themes/"+$(this).data('rel')+".css");
				return false;
			}
		);
		
		/* end theme switcher */
		
		/* stop inbox tool bar dropdown from closing when clicked on a link */
		
		$('#theme-switcher ul.mailbox li a').bind('click',
			function(e) {
				return false;
			}
		);
		
		/* end inbox tool bar adjustment*/
		
		/* calendar buttons */

		$('div#calendar-buttons #btn-prev').click(function(){
		    $('.fc-button-prev').click();
		    return false;
		});
		
		$('div#calendar-buttons #btn-next').click(function(){
		    $('.fc-button-next').click();
		    return false; 
		});

		$('div#calendar-buttons #btn-today').click(function(){
		    $('.fc-button-today').click();
		    return false; 
		});
		
		$('div#calendar-buttons #btn-month').click(function(){
		    $('#calendar').fullCalendar('changeView', 'month');
		});
		
		$('div#calendar-buttons #btn-agenda').click(function(){
		    $('#calendar').fullCalendar('changeView', 'agendaWeek');
		});
		
		$('div#calendar-buttons #btn-day').click(function(){
		   $('#calendar').fullCalendar('changeView', 'agendaDay');
		});
		
		/* end calendar buttons */
		
		/* inbox buttons */
		
		$('ul#mailbox-js > li > a').click(function(){
			show_inbox_menu_header();
		});
		
		$('#inbox-menu-header-js a.slashc-sliding-menu-home').click(function(){
			hide_inbox_menu_header();
		});
		
		/* end inbox buttons */
		
		/* logout button click */
		
		$('.logout-js').click(function(){
		   $('body').addClass('logout');
		   setTimeout(logout,400)
		   return false; 
		});
		
		/* end logout button click */
		
		/* reset widget */
		$('a#reset-widget').click(function(){
			resetWidget();
			return false;
		});
		
		/* loading state button */
	
		$('#fat-btn').click(function() {
			var btn = $(this)
			btn.button('loading')
			setTimeout(function() {
				btn.button('reset')
			}, 3000)
		})
		
	}
	
	/* end all button functions */

	/* ---------------------------------------------------------------------- */
	/*	Logout
	/* ---------------------------------------------------------------------- */

	function logout(){
		
		var linky = $('.logout-js').data('rel');
		window.location.href = linky;
		
	}

	/* end logout */

	/* ---------------------------------------------------------------------- */
	/*	sound effects
	/* ---------------------------------------------------------------------- */
		
	function popsound() {
	  	//$pop_sound.play();
	  	$('embed').remove();
	    $('body').append('<embed src="sounds/sound-pop-clear.mp3" autostart="true" hidden="true" loop="false">');
	}
	
	function play_sound_message_box(){
		//$messagebox.play(); //turn this on if your browser supports audio
	}

	function play_sound_big_box(){
		//$bigbox.play(); //turn this on if your browser supports audio
	}
	
	function play_sound_small_box(){
		//$smallbox.play(); //turn this on if your browser supports audio
	}
           
    /* sound effect */

	/* ---------------------------------------------------------------------- */
	/*	Slimscroll
	/* ---------------------------------------------------------------------- */	
	
	function setup_slimscroll(){
		
		/* mini inbox dropdown */
		$('ul#mailbox-slimscroll-js').slimScroll({
			height: '277px',
			width: '240px',
			disableFadeOut: true,
			distance: 3,
			size: 7
		});
		
		/* chat message box */
		$('div.chat-messages').slimScroll({
			height: '370px',
			disableFadeOut: true,
			railVisible:true, 
			distance: 3,
			size: 7
		});
		
		if ($('#inbox-menu-js').length){
			
			//$('h1#inbox-menu-header-js').slideUp(2200, 'easeOutSine');
			$('#inbox-menu-js').slimScroll({
			height: '518px',
			width: '249',
			disableFadeOut: true,
			distance: 3,
			size: 7
			});
			hide_inbox_menu_header()
			
			$('#inbox-loading-panel-js').slimScroll({
			height: '518px',
			width: 'auto',
			disableFadeOut: true,
			distance: 5,
			size: 7
			});
			
			
		}// end if
		
	}
	
	function hide_inbox_menu_header() {
		$('#inbox-menu-header-js').animate({"top" : "-42px"}, 250);
		$('#mailbox-js').animate({"top" : "-42px"}, 250);
	}
	
	function show_inbox_menu_header() {
		$('#inbox-menu-header-js').animate({"top" : "0px"}, 250);
		$('#mailbox-js').animate({"top" : "0px"}, 250);
	}
	
	/* end slimscroll */

	/* ---------------------------------------------------------------------- */
	/*	Easypie
	/* ---------------------------------------------------------------------- */	
	
	function setup_easypie(){

       /* lighter version */
		if ($('.percentage').length) { 
			$.percentage_easy_pie = $('.percentage');	
			$.percentage_easy_pie.easyPieChart({
				animate: 2000,
				trackColor:	"#515151",
				scaleColor:	"#515151",
				lineCap: 'butt',
				lineWidth: 20,
				barColor: function(percent) {
				    percent /= 100;
				    return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
				},
				size: 150
			});
			
		}// end if	
        
	}
	
	/* end easypie */
	
	/* ---------------------------------------------------------------------- */
	/*	Randomize easy pie
	/* ---------------------------------------------------------------------- */		
	
	function easypie_randomize(){
		
		var items = $.percentage_easy_pie;
	    for (var i = 0; i < items.length; i++) {
	        //do stuff
	        var newValue = Math.round(100*Math.random());
	        $(this).data('easyPieChart').update(newValue);
	        $('span', this).text(newValue);
	    } 
		//console.log(items.length);
	
	}

	/* end randomize */    	
	
	/* ---------------------------------------------------------------------- */
	/*	Chat message
	/* ---------------------------------------------------------------------- */
	
	function setup_wysihtml5() {
		
		if ($('#wysihtml5').length) {
			$('#wysihtml5').wysihtml5();
		}
		
	}
		
	/* end tooltips */
	
	/* ---------------------------------------------------------------------- */
	/*	Chat message
	/* ---------------------------------------------------------------------- */
	
	function setup_chatbox_demo() {
		
		/* message id */
		var id = 0;
		
		$.istying.focus(function() {
			$('.type-effect').show();
		});
	
		$.istying.blur(function() {
			$('.type-effect').hide();
		});
	
		/* on button press */
		$('#send-msg-js').click(function() {
			var msg_input = $.istying.val();
			if (msg_input.length) {
				var msg_input = $.istying.val();
				id++;
				$('.tab-pane.active > div > .chat-messages').prepend('<p id="message-dynamic-' + id + '" class="message-box you"><img src="img/avatar/avatar_0.jpg" alt=""><span class="message"><strong>Me</strong><span class="message-time">by Victoria at 14:25pm, 4th Jan 2013</span><span class="message-text">' + msg_input + '</span></span></p>')
				$('.tab-pane.active > div > .chat-messages #message-dynamic-' + id).hide().fadeIn(750);
				//console.log(msg_input.trim() + id);
				$.istying.val('');
				play_sound_small_box();
			}
			return false; 
	
		});
	
		/* on key press enter */
		$.istying.on('keyup', function(e) {
			
			if (e.keyCode == 13) {
				var msg_input = $.istying.val();
				if (msg_input.length) {
					var msg_input = $.istying.val();
					id++;
					$('.tab-pane.active > div > .chat-messages').prepend('<p id="message-dynamic-' + id + '" class="message-box you"><img src="img/avatar/avatar_0.jpg" alt=""><span class="message"><strong>Me</strong><span class="message-time">by Victoria at 14:25pm, 4th Jan 2013</span><span class="message-text">' + msg_input + '</span></span></p>')
					$('.tab-pane.active > div > .chat-messages #message-dynamic-' + id).hide().fadeIn(750);
					//console.log(msg_input.trim() + id);
					$.istying.val('');
					play_sound_small_box();
				}
			}// end if
		});
	
	}
	
	/* end chat message */
	
	/* ---------------------------------------------------------------------- */
	/*	Bootbox examples
	/* ---------------------------------------------------------------------- */	
	
	function setup_bootbox_demo() {
		if ($('ul#bootbox-js').length){
			
			$('ul#bootbox-js a#bootbox-basic-js').click(function(e) {
				e.preventDefault();
				play_sound_message_box();
				bootbox.alert("Hello world!", function() {
					//console.log("Hello world callback");
				});
			});
			
			$('ul#bootbox-js a#bootbox-confirm-js').click(function(e) {
				e.preventDefault();
				play_sound_message_box();
				bootbox.confirm("Are you sure?", function(result) {
					 //console.log("Confirm result: "+result);
					  toastr.info("Confirm result: "+result);
				});
			});
			
			$('ul#bootbox-js a#bootbox-prompt-js').click(function(e) {
				e.preventDefault();
				play_sound_message_box();
				bootbox.prompt("What is your favourite website?", "None!", "Alright!", function(result) {
				    //console.log(result);
				    toastr.info('You have picked '+result)
				}, "makonetworks.com");
			}); 
			
			$('ul#bootbox-js a#bootbox-cust-js').click(function(e) {
				e.preventDefault();
				play_sound_message_box();
				bootbox.dialog("I am a custom dialog", [{
				    "label" : "Success!",
				    "class" : "btn-success medium",
				    "callback": function() {
				        //console.log("great success");
				        toastr.success("Great Success!");
				    }
				}, {
				    "label" : "Danger!",
				    "class" : "btn-danger medium",
				    "callback": function() {
				        //console.log("uh oh, look out!");
				        toastr.error("uh oh, look out!");
				    }
				}, {
				    "label" : "Click ME!",
				    "class" : "btn-primary medium",
				    "callback": function() {
				        //console.log("Primary button");
				        toastr.info("You clicked the blue button :)");
				    }
				}]);
			});
			
			$("ul#bootbox-js a#bootbox-icon-js").click(function(e) {
				e.preventDefault();
				play_sound_message_box();
				bootbox.dialog("Custom dialog with icons passed into <b>bootbox.dialog</b>.", [{
					"label" : "Success!",
					"class" : "btn-success medium",
					"icon"  : "cus-bell",
					"callback": function() {
				        //console.log("great success");
				        toastr.success("Great Success!");
				    }
				}, {
					"label" : "Danger!",
					"class" : "btn-danger medium",
					"icon"  : "cus-delete",
					"callback": function() {
				        //console.log("uh oh, look out!");
				        toastr.error("uh oh, look out!");
				    }
				}, {
					"label" : "Click ME!",
					"class" : "btn-primary medium",
					"icon"  : "cus-cursor",
					"callback": function() {
				        //console.log("Primary button");
				        toastr.info("You clicked the blue button :)");
				    }
				}, {
					"label" : "Just a button...",
					"icon"  : "cus-image-2",
					"callback": function() {
				        //console.log("Primary button");
				        toastr.warning("Just a button...");
				    }
				}]);
			});
	
		}// end if
	}

	
	/* ---------------------------------------------------------------------- */
	/*	Activate_bt_accordion_hack
	/* ---------------------------------------------------------------------- */	
		
	$(function() {
		
		// credit: http://stackoverflow.com/questions/10918801/twitter-bootstrap-adding-a-class-to-the-open-accordion-title
	    $('.accordion').on('show', function (e) {
	         $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
	    });
	    
	    $('.accordion').on('hide', function (e) {
	        $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
	    });
	        
	});

	/* end activate_bt_accordion_hack */
	
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
	
	$(function () {
	$('[rel="clickover"]').clickover();
	});
