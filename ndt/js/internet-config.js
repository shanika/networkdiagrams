
	
	//turn this on if your browser supports audio
	
	var $pop_sound = new Audio("sounds/sound-pop-clear.mp3"); // buffers automatically when created
	var $smallbox = new Audio("sounds/smallbox.mp3"); // buffers automatically when created
	var $messagebox = new Audio("sounds/messagebox.mp3"); // buffers automatically when created
	var $bigbox = new Audio("sounds/bigbox.mp3"); // buffers automatically when created
	
	/* ---------------------------------------------------------------------- */
	/*	On Page Load
	/* ---------------------------------------------------------------------- */
	
	$(document).ready( function() {   

	}); 

	
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
	/*	Enable Select2
	/* ---------------------------------------------------------------------- */

			$(".with-search").select2();
	/* end select2 */


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
	
	$(function() {
		
		// credit: http://stackoverflow.com/questions/10918801/twitter-bootstrap-adding-a-class-to-the-open-accordion-title
	    $('.accordion').on('show', function (e) {
	         $(e.target).prev('.accordion-heading').find('.btn').addClass('active');
	    });
	    
	    $('.accordion').on('hide', function (e) {
	        $(this).find('.btn').not($(e.target)).removeClass('active');
	    });
	        
	});


$(function () {
$('.billing-day-calendar').popoverx({
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

$(document).ready(function(){
	$(".isp1-tour-start").click(function(){
	    bootstro.start('.isp1-tour', {
	        nextButtonText : '',
	        prevButtonText : '',
	        finishButtonText : ''
	    });    
	});
});

$(document).ready(function(){
	$(".isp2-tour-start").click(function(){
	    bootstro.start('.isp2-tour', {
	        nextButtonText : '',
	        prevButtonText : '',
	        finishButtonText : ''
	    });    
	});
});

$.widget( "ui.kbpsSpinner", $.ui.spinner, {
    _format: function( value ) { return value + ' kbps'; },
    
    _parse: function(value) { return parseInt(value); }
});

function createKbpsSpinner(element){
    return element.kbpsSpinner({ 
        min: 0,
        step: 100,
        stop: function() {
            $(this).siblings().val($(this).val());
        }
     });
}
var kbpsSpinners = [ {id:'isp0-bandwidth-down', field:'isp0-bandwidth-down-value'},
                     {id:'isp0-bandwidth-up', field:'isp0-bandwidth-up-value'},
                     {id:'isp1-bandwidth-down', field:'isp1-bandwidth-down-value'},
                     {id:'isp1-bandwidth-up', field:'isp1-bandwidth-up-value'},
                     {id:'isp2-bandwidth-down', field:'isp2-bandwidth-down-value'},
                     {id:'isp2-bandwidth-up', field:'isp2-bandwidth-up-value'}];
$.each(kbpsSpinners,function(index,item){
    createKbpsSpinner($("#"+item.id)).parent().append('<input type="text" id="'+item.field+'" placeholder="(0 to Autodetect)" class="spinner-text span12"/>');
});

$.widget( "ui.percentageSpinner", $.ui.spinner, {
    _format: function( value ) { return value + ' %'; },
    
    _parse: function(value) { return parseInt(value); }
});

function createpercentageSpinner(element){
    return element.percentageSpinner({ 
        min: 0,
        step: 100,
        stop: function() {
            $(this).siblings().val($(this).val());
        }
     });
}
var percentageSpinners = [ {id:'isp0-warning-threshold', field:'isp0-warning-threshold-value'},
                     {id:'isp0-absolute-threshold', field:'isp0-absolute-threshold-value'},
                     {id:'isp0-warning-threshold-average', field:'isp0-warning-threshold-average-value'},
                     {id:'isp0-warning-threshold-day', field:'isp0-warning-threshold-day-value'},
                     {id:'isp1-warning-threshold', field:'isp1-warning-threshold-value'},
		             {id:'isp1-absolute-threshold', field:'isp1-absolute-threshold-value'},
		             {id:'isp1-warning-threshold-average', field:'isp1-warning-threshold-average-value'},
		             {id:'isp1-warning-threshold-day', field:'isp1-warning-threshold-day-value'},
		             {id:'isp2-warning-threshold', field:'isp2-warning-threshold-value'},
		             {id:'isp2-absolute-threshold', field:'isp2-absolute-threshold-value'},
		             {id:'isp2-warning-threshold-average', field:'isp2-warning-threshold-average-value'},
		             {id:'isp2-warning-threshold-day', field:'isp2-warning-threshold-day-value'}];
$.each(percentageSpinners,function(index,item){
    createpercentageSpinner($("#"+item.id)).parent().append('<input type="text" id="'+item.field+'" placeholder="Percentage" class="spinner-text span12"/>');
});
$.widget( "ui.MinutesSpinner", $.ui.spinner, {
    _format: function( value ) { return value + ' Minutes'; },
    
    _parse: function(value) { return parseInt(value); }
});

function createMinutesSpinner(element){
    return element.MinutesSpinner({ 
        min: 0,
        step: 1,
        stop: function() {
            $(this).siblings().val($(this).val());
        }
     });
}
var MinutesSpinners = [ {id:'isp-failover-switch-delay', field:'isp-failover-switch-delay-value'},
                     {id:'isp-failover-restore-delay', field:'isp-failover-restore-delay-value'},
                     {id:'isp-failover-health-test', field:'isp-failover-health-test-value'},
                     {id:'isp-failover-unhealthy-test', field:'isp-failover-unhealthy-test'}];
$.each(MinutesSpinners,function(index,item){
    createMinutesSpinner($("#"+item.id)).parent().append('<input type="text" id="'+item.field+'" placeholder="Minutes" class="spinner-text span12"/>');
});