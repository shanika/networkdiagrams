
	
	//turn this on if your browser supports audio
	
	var $pop_sound = new Audio("sounds/sound-pop-clear.mp3"); // buffers automatically when created
	var $smallbox = new Audio("sounds/smallbox.mp3"); // buffers automatically when created
	var $messagebox = new Audio("sounds/messagebox.mp3"); // buffers automatically when created
	var $bigbox = new Audio("sounds/bigbox.mp3"); // buffers automatically when created
	

	/* ---------------------------------------------------------------------- */
	/*	On Page Load
	/* ---------------------------------------------------------------------- */
	
	$(document).ready( function() {   
		
		/* activate popovers */
		setup_popovers();
		
		/* slimscroll */
		setup_slimscroll();

		/* expand search input on focus */
//		execute_idevice_functions();	
		
		/* detect if mobile */
		isMobile() 
		
		/* activate sparklines */
		setup_sparklines();
		
		/* progress bar animate */
		progressbar_animate();
		
		/* wysihtml5 editor */
//		setup_wysihtml5();
		
		/* start justguage */
//		setup_jarvisGuage();
		
		/* start chatbox */
//		setup_chatbox_demo();
		
		/* start bootbox */
//		setup_bootbox_demo();
		
		/* datepicker for forms */
//		setup_datepicker_demo();
		
		/* colorpicker for forms */
//		setup_colorpicker_demo();
		
		/* masked input */
		setup_masked_input();
		
		/* setup_uislider */
		setup_uislider();
		
		/* validation_setup_demo */
		validation_setup_demo();
		
		
		/* custom form elements */
		setup_custom_form_elements();

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
	/*	Reset widgets script
	/* ---------------------------------------------------------------------- */
		
	function resetWidget() {
			
		var cls = confirm("Would you like to RESET all your saved widgets and clear LocalStorage?");
		if(cls && localStorage){
			localStorage.clear();
			//alert('Local storage has been cleared! Refreshing page...');
			location.reload();
		}

	}
	
	/* end reset widgets script */


	/* ---------------------------------------------------------------------- */
	/*	Flot charts
	/* ---------------------------------------------------------------------- */	
	
//
	/* end flot charts */

	/* ---------------------------------------------------------------------- */
	/*	Sparklines setup
	/* ---------------------------------------------------------------------- */	
	
	function setup_sparklines(){
		
		if ($('.licence-chart').length){
			$("#licence1").sparkline([80,20 ], {
			    type: 'pie',
			    width: '18',
			    height: '18',
			    sliceColors: ['#44b3b7','#ebd04f','#e35559'],
			    offset: 0,
			    borderWidth: 0,
			    borderColor: '#c9c9c9'});
			$("#licence2").sparkline([80,20 ], {
			    type: 'pie',
			    width: '18',
			    height: '18',
			    sliceColors: ['#44b3b7','#ebd04f','#e35559'],
			    offset: 0,
			    borderWidth: 0,
			    borderColor: '#c9c9c9'});
			$("#licence3").sparkline([70,30 ], {
			    type: 'pie',
			    width: '18',
			    height: '18',
			    sliceColors: ['#44b3b7','#ebd04f','#e35559'],
			    offset: 0,
			    borderWidth: 0,
			    borderColor: '#c9c9c9'});
			$("#licence4").sparkline([50,50 ], {
			    type: 'pie',
			    width: '18',
			    height: '18',
			    sliceColors: ['#44b3b7','#ebd04f','#e35559'],
			    offset: 0,
			    borderWidth: 0,
			    borderColor: '#c9c9c9'});
			$("#licence5").sparkline([0,20,80 ], {
			    type: 'pie',
			    width: '18',
			    height: '18',
			    sliceColors: ['#44b3b7','#ebd04f','#e35559'],
			    offset: 0,
			    borderWidth: 0,
			    borderColor: '#c9c9c9'});
			$("#licence6").sparkline([80,20 ], {
			    type: 'pie',
			    width: '18',
			    height: '18',
			    sliceColors: ['#44b3b7','#ebd04f','#e35559'],
			    offset: 0,
			    borderWidth: 0,
			    borderColor: '#c9c9c9'});
			$("#licence7").sparkline([80,20 ], {
			    type: 'pie',
			    width: '18',
			    height: '18',
			    sliceColors: ['#44b3b7','#ebd04f','#e35559'],
			    offset: -20,
			    borderWidth: 0,
			    borderColor: '#c9c9c9'});
			$("#licence8").sparkline([0,0,20 ], {
			    type: 'pie',
			    width: '18',
			    height: '18',
			    sliceColors: ['#44b3b7','#ebd04f','#e35559'],
			    offset: 0,
			    borderWidth: 0,
			    borderColor: '#c9c9c9'});
		} // end if
	}

	/* end sparklines */

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
		
	}
	
	/* end all button functions */

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
	/*	Enable Select2
	/* ---------------------------------------------------------------------- */
	
	function setup_custom_form_elements() {
		if ($('.themed').length) {

			$(".themed select.with-search").select2();

		}// end if
	}
	
	/* end select2 */

	/* ---------------------------------------------------------------------- */
	/*	Setup_datepicker_demo
	/* ---------------------------------------------------------------------- */	
	
	function setup_datepicker_demo() {
		if ($('#datepicker-js').length){
			$('#datepicker-js, #datepicker-js-2').datepicker()
		}// end if
	}	
	
	/* end setup_datepicker_demo */
	
	/* ---------------------------------------------------------------------- */
	/*	Setup_colorpicker_demo
	/* ---------------------------------------------------------------------- */	
	
	function setup_colorpicker_demo() {
		if ($('#colorpicker-js').length){
			$('#colorpicker-js, #colorpicker-js-2, #colorpicker-js-3').colorpicker()
		}// end if
	}	
	
	/* end setup_datepicker_demo */
	
	/* ---------------------------------------------------------------------- */
	/*	Setup_masked_input
	/* ---------------------------------------------------------------------- */	
	
	function setup_masked_input() {
		if ($('#masked-inputs-js').length){
			
			$.mask.definitions['~'] = "[+-]";
			$(".date-masked").mask("99/99/9999", {
				completed : function() {
					toastr.success('Date entry was correct!', 'Correct Date');
				}
			});
			$(".phone-masked").mask("(999) 999-9999");
			$(".ssn-masked").mask("999-99-9999");
			$(".productkey-masked").mask("a*-999-a999", {
				placeholder : " "
			});
			$(".purchase-order-masked").mask("PO: aaa-999-***");
			//console.log("masked input fired!")
		}// end if
	}	
	
	/* end setup_masked_input */
	
	/* end setup_timepicker */

	/* ---------------------------------------------------------------------- */
	/*	Setup_uislider
	/* ---------------------------------------------------------------------- */	
	
	//reference: https://groups.google.com/forum/?fromgroups=#!topic/twitter-bootstrap-stackoverflow/ko8GIGczZ54

	function setup_uislider() {
		if ($('#uislider-demo').length) {	

			$("#slider-range").slider({
			    range: true,
			    min: 100,
			    max: 500,
			    values: [176, 329],
			    slide: function(event, ui) {
			        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			
			        $('#slider-range .ui-slider-handle:first').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + ui.values[0] + '</div></div>');
			        $('#slider-range .ui-slider-handle:last').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + ui.values[1] + '</div></div>');
			    }
			});
			$("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

				
			$( "#slider-range-min" ).slider({
		            range: "min",
		            value: 461,
		            min: 100,
		            max: 900,
		            slide: function( event, ui ) {
		                $( "#amount2" ).val( "$" + ui.value );
		                $('#slider-range-min .ui-slider-handle:first').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + ui.value + '</div></div>');
		            }
		        });
		    $("#amount2").val( "$" + $( "#slider-range-min" ).slider("value"));
			
			
			$( "#slider-range-max" ).slider({
		            range: "max",
		            min: 100,
		            max: 999,
		            value: 507,
		            slide: function( event, ui ) {
		                $( "#amount3" ).val( "$" + ui.value );
		                $('#slider-range-max .ui-slider-handle:first').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + ui.value + '</div></div>');
		            }
		        });
		    $("#amount3" ).val( "$" + $( "#slider-range-max" ).slider( "value" ));
		    
			$("#slider-range-step").slider({
			    range: true,
			    min: 100,
			    max: 999,
			    step:100,
			    values: [500, 550],
			    slide: function(event, ui) {
			        $("#amount4").val("" + ui.values[0] + " - " + ui.values[1]);
			
			        $('#slider-range-step .ui-slider-handle:first').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + ui.values[0] + '</div></div>');
			        $('#slider-range-step .ui-slider-handle:last').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + ui.values[1] + '</div></div>');
			    }
			});
			$("#amount4").val("" + $("#slider-range-step").slider("values", 0) + " - " + $("#slider-range-step").slider("values", 1));
			
		}
	}
	
	/* end setup_uislider */

	/* ---------------------------------------------------------------------- */
	/*	Validation_setup_demo
	/* ---------------------------------------------------------------------- */
	
	//documentation: http://docs.jquery.com/Plugins/Validation/

	function validation_setup_demo() {
		if ($('.form-validation').length) {
			$(".form-validation").validate({
				rules : {
					simple : "required",
					minString : {
						required : true,
						minlength : 3
					},
					maxString : {
						required : true,
						maxlength : 5
					},
					minNumber : {
						required : true,
						min : 3
					},
					maxNumber : {
						required : true,
						max : 5
					},
					rangeValue : {
						required : true,
						range : [5, 10]
					},
					emailValidation : {
						required : true,
						email : true
					},
					urlValidation : {
						required : true,
						url : true
					},
					dateValidation : {
						required : true,
						date : true
					},
					noStrings : {
						required : true,
						digits : true
					},
					password : {
						required : true,
						minlength : 5
					},
					passwordRepeat : {
						required : true,
						minlength : 5,
						equalTo : "#password"
					},
					topic : {
						required : "#newsletter:checked",
						minlength : 2
					},
					agree : "required"
				}, // end rules
				highlight : function(label) {
					$(label).closest('.control-group').removeClass('success');
					$(label).closest('.control-group').addClass('error');
				},
				success : function(label) {
					label.text('').addClass('valid').closest('.control-group').addClass('success');
				}
			});
		}// end if

	} 
	
	/* end validation_setup_demo */

	/* ---------------------------------------------------------------------- */
	/*	Setup_wizard_demo
	/* ---------------------------------------------------------------------- */	
	
	function setup_wizard_demo() {
		if ($('#wizard_name').length) {
			$('#wizard_name').bootstrapWizard({
				'tabClass' : 'nav',
				'debug' : false,
				onShow : function(tab, navigation, index) {
					//console.log('onShow');
				},
				onNext : function(tab, navigation, index) {
					//console.log('onNext');
					if (index == 1) {
						// Make sure we entered the name
						if (!$('#name').val()) {
							//alert('You must enter your name');
							$('#name').focus();
							$('#name').closest('.control-group').removeClass('success');
							$('#name').closest('.control-group').addClass('error');
							return false;
						}
						if (!$('#lname').val()) {
							//alert('You must enter your last name');
							$('#lname').focus();
							$('#lname').closest('.control-group').removeClass('success');
							$('#lname').closest('.control-group').addClass('error');
							return false;
						}
					}
					$.jGrowl("Its nice to finally meet you! Please remember <b>"+$('#name').val()+",</b> this is only a demo. Not all the functions will work. For full documentation please see the link on top of the page", { 
						header: 'Hey there ' + $('#name').val()+'!', 
						sticky: true,
						theme: 'with-icon',
						easing: 'easeOutBack',
						animateOpen: { 
							height: "show"
						},
						animateClose: { 
							opacity: 'hide' 
						}
					});	
					// Set the name for the next tab
					//$('#inverse-tab3').html('Hello, ' + $('#name').val());
	
				},
				onPrevious : function(tab, navigation, index) {
					//console.log('onPrevious');
				},
				onLast : function(tab, navigation, index) {
					//console.log('onLast');
				},
				onTabClick : function(tab, navigation, index) {
					//console.log('onTabClick');
					alert('on tab click disabled');
					return false;
				},
				onTabShow : function(tab, navigation, index) {
					//console.log('onTabShow');
					var $total = navigation.find('li').length;
					var $current = index + 1;
					var $percent = ($current / $total) * 100;
					$('#wizard_name').find('.bar').css({
						width : $percent + '%'
					});
				}
			});
		}// end if
	
	}
	
	/* end setup_wizard_demo */

	/* ---------------------------------------------------------------------- */
	/*	Setup checkedin tables
	/* ---------------------------------------------------------------------- */
	
	function setup_checkedin_tables_demo() {
		
		if ($("table.checked-in").length){
		 	$("td input[type='checkbox']").click(function(){
		        if ($(this).is(':checked')){
		              $(this).parent().addClass("highlighted");
		              $(this).parent().siblings().addClass("highlighted");
		        } else if($(this).parent().is(".highlighted")) {
		             $(this).parent().removeClass("highlighted");
		             $(this).parent().siblings().removeClass("highlighted");
		        }
		    });
		}// end if
		
	}
	
	/* end checkedin tables */

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
