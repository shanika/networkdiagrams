
	
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
		
		/* setup toastr responsive alerts */
		setup_toastr();
		
		/* idevice */
		execute_idevice_functions();	
		
		/* detect if mobile */
		isMobile();
		
		/* activate sparklines */
		setup_sparklines();
		
		/* progress bar animate */
		progressbar_animate();
				
		/* masked input */

		
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
				toggleSpeed: 200,
				onToggle: function(){},
				deleteButton: true,
				deleteSpeed: 200,
				onDelete: function(){},
				editButton: true,
				editPlaceholder: '.jarviswidget-editbox',
				editSpeed: 200,
				onEdit: function(){},
				fullscreenButton: true,
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
				toggleSpeed: 200,
				onToggle: function(){},
				deleteButton: true,
				deleteSpeed: 200,
				onDelete: function(){},
				editButton: true,
				editPlaceholder: '.jarviswidget-editbox',
				editSpeed: 200,
				onEdit: function(){},
				fullscreenButton: true,
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
				timeOut : 8000, // Set timeOut to 0 to make it sticky
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
	/*	Enable Select2
	/* ---------------------------------------------------------------------- */
	
	function setup_custom_form_elements() {
		if ($('.themed').length) {

			$(".themed select.with-search").select2();

		}// end if
	}
	
	/* end select2 */

	
	/* ---------------------------------------------------------------------- */
	/*	Setup_masked_input
	/* ---------------------------------------------------------------------- */	
	

	
	/* end setup_masked_input */
	
	/* end setup_timepicker */

	/* ---------------------------------------------------------------------- */
	/*	Setup_uislider
	/* ---------------------------------------------------------------------- */	
	
	//reference: https://groups.google.com/forum/?fromgroups=#!topic/twitter-bootstrap-stackoverflow/ko8GIGczZ54

	function setup_uislider() {	

			$( "#warning-threshold-average" ).slider({
			        range: "min",
			        min: 100,
			        max: 800,
			        step: 20,
			        value: 0,
			        slide: function( event, ui ) {
			            $( "#warning-threshold-average-value" ).val( ui.value + " %" );
			            $('#slider-range-max .ui-slider-handle:first').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + ui.value + '</div></div>');
			        }
			    });
			$( "#warning-threshold-day" ).slider({
			        range: "min",
			        min: 5,
			        max: 340,
			        step: 20,
			        value: 0,
			        slide: function( event, ui ) {
			            $( "#warning-threshold-day-value" ).val( ui.value + " %" );
			            $('#slider-range-max .ui-slider-handle:first').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + ui.value + '</div></div>');
			        }
			    });
			$( "#warning-temperature" ).slider({
			        range: "min",
			        min: 50,
			        max: 70,
			        step: 1,
			        value: 65,
			        slide: function( event, ui ) {
			            $( "#warning-threshold-day-value" ).val( ui.value + "°" );
			            $('#slider-range-max .ui-slider-handle:first').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + ui.value + '</div></div>');
			        }
			    });
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
		            value: 30,
		            min: 1,
		            max: 31,
		            slide: function( event, ui ) {
		                $( "#amount2" ).val( "" + ui.value );
		                $('#slider-range-min .ui-slider-handle:first').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + ui.value + '</div></div>');
		            }
		        });
		    $("#amount2").val( "" + $( "#slider-range-min" ).slider("value"));
			
			
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
	
	
/* ---------------------------------------------------------------------- */
/*	Datatables Functions
/* ---------------------------------------------------------------------- */

$(document).ready(function () {
         if ($(".tablefiltering").length) {
             $(".tablefiltering").dataTable({
                     sDom: "<'row-fluid dt-header'<'span12'f>r>t<'row-fluid dt-footer'<'span6'p><'span4 visible-desktop'l>>",
                     sPaginationType: "bootstrap",
                     oLanguage: {
                         sLengthMenu: "Show: _MENU_",
                         sSearch: "Filter Makos"
                     },
                     "fnDrawCallback": function (oSettings) {  
                                var $dt = $('.tablefiltering').footable({  
                                  breakpoints: { 
                                    phone: 480,  
                                    tablet: 1024  
                                  }  
                                });  
                                $dt.trigger('footable_resize');  
                              }
                 })
         }
         $(".dataTables_filter input").attr("placeholder", "Enter search terms");
         if ($(".columnfiltering").length) {
             var a;
             $("thead input").keyup(function () {
                     a.fnFilter(this.value, a.oApi._fnVisibleToColumnIndex(a.fnSettings(), $("thead input").index(this)))
                 });
             $("thead input").each(function (b) {
                     this.initVal = this.value
                 });
             $("thead input").focus(function () {
                     if (this.className == "search_init") {
                         this.className = "";
                         this.value = ""
                     }
                 });
             $("thead input").blur(function (b) {
                     if (this.value === "") {
                         this.className = "search_init";
                         this.value = this.initVal
                     }
                 });
             a = $(".columnfiltering").dataTable({
                     sDom: "t<'row-fluid dt-footer'<'span6 visible-desktop'i><'span6'p>>",
                     oLanguage: {
                         sSearch: "Search all columns:"
                     },
                     bSortCellsTop: true
                 })
         }
     });
$(document).ready(function () {
        if ($(".table-row-dragging").length) {
            	$('.table-row-dragging').dataTable({
            		sDom: "<'row-fluid dt-header'<'span12'f>>t<'row-fluid dt-footer'<'span3'p><'span3 visible-desktop'i><'span3'l><'span3'T>>",
            		sPaginationType: "bootstrap",
            		"bSort": false,
            		oLanguage: {
            		    sSearch: "",
            		    sLengthMenu: "_MENU_",
            		  },
                   oTableTools: {
                       aButtons: [{
                               sExtends: "print",
                               sButtonText: '<i class="icon-external-link"></i> Show all',
                               sInfo: '<h6>Press escape when finished.</h6>'
                           }
                       ]
                   }
            	})
            	.rowGrouping({	
            		iGroupingColumnIndex: 0,
            		bExpandableGrouping: true,
            		bExpandSingleGroup: false,
            		iExpandGroupOffset: -1,
            		asExpandedGroups: ["none"]
            	})
            	.rowReordering({ 
            		bGroupingUsed: true,
            		iIndexColumn: 1 });
            	$('.dataTables_filter input').attr("placeholder", "Filter");
        }
    });
$(document).ready(function () {
        if ($(".table-grouping").length) {
            	$('.table-grouping').dataTable({
            		sDom: "<'row-fluid dt-header'<'span12'f>>t<'row-fluid dt-footer'<'span3'p><'span3 visible-desktop'i><'span3'l><'span3'T>>",
            		sPaginationType: "bootstrap",
            		"bSort": true,
            		"aoColumnDefs": [
            		        { 'bSortable': false, 'aTargets': [ 4 ] }
            		    ],
            		oLanguage: {
            		    sSearch: "",
            		    sLengthMenu: "_MENU_",
            		  },
                   oTableTools: {
                       aButtons: [{
                               sExtends: "print",
                               sButtonText: '<i class="icon-external-link"></i> Show all',
                               sInfo: '<h6>Press escape when finished.</h6>'
                           }
                       ]
                   }
            	})
            	.rowGrouping({	
            		iGroupingColumnIndex: 0,
            		bExpandableGrouping: true,
            		bExpandSingleGroup: false,
            		iExpandGroupOffset: -1,
            		asExpandedGroups: ["none"]
            	})
            	$('.dataTables_filter input').attr("placeholder", "Filter");
        }
    });

$(document).ready(function() {
$('.footable').footable();
});
    
/* End datatables */
//
//$(document).ready(function() {
//$('#pacs-selection').multiSelect({});
//});
//
$(document).ready(function(){
	$('#slider_list').sliderNav({height:'370'});
});


$(function () {
$('[rel="popoverx"]').popoverx({
  fire_on: 'click',    
}); 
});

$(function () {
$('.main-menu').popoverx({
  fire_on: 'hover',
  hover_delay_close : 2000,
  ensure_visiable: true,
  class_name: 'main-menu-popover'          
})
});

$(function () {
$('#billing-day-isp0').popoverx({
  fire_on: 'click',
  class_name: 'calendar-popover'          
})
});

$('.show-tooltip').tooltip()


// Example 2
$('.mask-password').hideShowPassword({
  // Make the password visible right away.
  show: false,
  // Create the toggle goodness.
  innerToggle: true,
  // Give the toggle a custom class so we can style it
  // separately from the previous example.
  toggleClass: 'hideShowPassword',
  states: {
  
        // These settings are applied when the password text is
        // visible (show: true).
        shown: {
  
          // Class to apply to the input element.
          inputClass: 'hideShowPassword-shown',
  
          // Event to trigger on the input.
          eventName: 'passwordShown',
  
          // Class to apply to the toggle.
          toggleClass: 'hideShowPassword-toggle-hide',
  
          // Text of the toggle element.
          toggleText: '',
  
          // Property values to apply to the input element.
          attr: {
            'type': 'text',
            'autocapitalize': 'off',
            'autocomplete': 'off',
            'autocorrect': 'off',
            'spellcheck': 'false'
          }
        },
  
        // Settings when text is hidden (show: false).
        hidden: {
          inputClass: 'hideShowPassword-hidden',
          eventName: 'passwordHidden',
          toggleClass: 'hideShowPassword-toggle-show',
          toggleText: '',
          attr: { 'type': 'password' }
        }
      },
  
  // Don't show the toggle until the input triggers
  // the 'focus' event.
  hideToggleUntil: 'focus'
});

$(document).ready(function(){
	$(".isp0-tour-start").click(function(){
	    bootstro.start('.isp0-tour', {
	        nextButtonText : '',
	        prevButtonText : '',
	        finishButtonText : ''
	    });    
	});
});

$( "#isp0-bandwidth-down" ).spinner({ 
    min: 2,
    step: 1,
    spin: function() {
        $(this).siblings('#isp0-bandwidth-down-value').val($(this).val()+'');
    },
    stop: function() {
        $(this).siblings('#isp0-bandwidth-down-value').val($(this).val()+' ');
    }
 }).parent().append('<input type="text" id="isp0-bandwidth-down-value" placeholder="(0 to Autodetect)" class="spinner-text span12"/>');

$('#isp0-bandwidth-down-value').each(parseValue);

$('#isp0-bandwidth-down-value').change(function() {
    $(this).siblings('#isp0-bandwidth-down').val(parseInt($(this).val()));
});
$('#isp0-bandwidth-down-value').blur(parseValue);

function parseValue() {
    $(this).val($(this).siblings('#isp0-bandwidth-down').val()+' ');
};