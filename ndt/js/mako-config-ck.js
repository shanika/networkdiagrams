function isMobile(){var e=/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase());e?setup_widgets_mobile():setup_widgets_desktop()}function setup_popovers(){$(".popover-js").length&&$(".popover-js").popover()}function setup_widgets_desktop(){$("#widget-grid").length&&$("#widget-grid").jarvisWidgets({grid:"article",widgets:".jarviswidget",localStorage:!1,deleteSettingsKey:"#deletesettingskey-options",settingsKeyLabel:"Reset settings?",deletePositionKey:"#deletepositionkey-options",positionKeyLabel:"Reset position?",sortable:!0,buttonsHidden:!1,toggleButton:!0,toggleSpeed:200,onToggle:function(){},deleteButton:!0,deleteSpeed:200,onDelete:function(){},editButton:!0,editPlaceholder:".jarviswidget-editbox",editSpeed:200,onEdit:function(){},fullscreenButton:!0,fullscreenDiff:3,onFullscreen:function(){},customButton:!1,customClass:"folder-10 | next-10",customStart:function(){alert("Hello you, this is a custom button...")},customEnd:function(){alert("bye, till next time...")},buttonOrder:"%refresh% %delete% %custom% %edit% %fullscreen% %toggle%",opacity:.5,dragHandle:"> header",placeholderClass:"jarviswidget-placeholder",indicator:!0,indicatorTime:600,ajax:!0,timestampPlaceholder:".jarviswidget-timestamp",timestampFormat:"Last update: %m%/%d%/%y% %h%:%i%:%s%",refreshButton:!0,refreshButtonClass:"refresh-10",labelError:"Sorry but there was a error:",labelUpdated:"Last Update:",labelRefresh:"Refresh",labelDelete:"Delete widget:",afterLoad:function(){},rtl:!1})}function setup_widgets_mobile(){$("#widget-grid").length&&$("#widget-grid").jarvisWidgets({grid:"article",widgets:".jarviswidget",localStorage:!1,deleteSettingsKey:"#deletesettingskey-options",settingsKeyLabel:"Reset settings?",deletePositionKey:"#deletepositionkey-options",positionKeyLabel:"Reset position?",sortable:!0,buttonsHidden:!1,toggleButton:!0,toggleSpeed:200,onToggle:function(){},deleteButton:!0,deleteSpeed:200,onDelete:function(){},editButton:!0,editPlaceholder:".jarviswidget-editbox",editSpeed:200,onEdit:function(){},fullscreenButton:!0,fullscreenDiff:3,onFullscreen:function(){},customButton:!1,customClass:"folder-10 | next-10",customStart:function(){alert("Hello you, this is a custom button...")},customEnd:function(){alert("bye, till next time...")},buttonOrder:"%refresh% %delete% %custom% %edit% %fullscreen% %toggle%",opacity:1,dragHandle:"> header",placeholderClass:"jarviswidget-placeholder",indicator:!0,indicatorTime:600,ajax:!0,timestampPlaceholder:".jarviswidget-timestamp",timestampFormat:"Last update: %m%/%d%/%y% %h%:%i%:%s%",refreshButton:!0,refreshButtonClass:"refresh-10",labelError:"Sorry but there was a error:",labelUpdated:"Last Update:",labelRefresh:"Refresh",labelDelete:"Delete widget:",afterLoad:function(){},rtl:!1})}function resetWidget(){var e=confirm("Would you like to RESET all your saved widgets and clear LocalStorage?");if(e&&localStorage){localStorage.clear();location.reload()}}function setup_sparklines(){if($(".licence-chart").length){$("#licence1").sparkline([80,20],{type:"pie",width:"18",height:"18",sliceColors:["#44b3b7","#ebd04f","#e35559"],offset:0,borderWidth:0,borderColor:"#c9c9c9"});$("#licence2").sparkline([80,20],{type:"pie",width:"18",height:"18",sliceColors:["#44b3b7","#ebd04f","#e35559"],offset:0,borderWidth:0,borderColor:"#c9c9c9"});$("#licence3").sparkline([70,30],{type:"pie",width:"18",height:"18",sliceColors:["#44b3b7","#ebd04f","#e35559"],offset:0,borderWidth:0,borderColor:"#c9c9c9"});$("#licence4").sparkline([50,50],{type:"pie",width:"18",height:"18",sliceColors:["#44b3b7","#ebd04f","#e35559"],offset:0,borderWidth:0,borderColor:"#c9c9c9"});$("#licence5").sparkline([0,20,80],{type:"pie",width:"18",height:"18",sliceColors:["#44b3b7","#ebd04f","#e35559"],offset:0,borderWidth:0,borderColor:"#c9c9c9"});$("#licence6").sparkline([80,20],{type:"pie",width:"18",height:"18",sliceColors:["#44b3b7","#ebd04f","#e35559"],offset:0,borderWidth:0,borderColor:"#c9c9c9"});$("#licence7").sparkline([80,20],{type:"pie",width:"18",height:"18",sliceColors:["#44b3b7","#ebd04f","#e35559"],offset:-20,borderWidth:0,borderColor:"#c9c9c9"});$("#licence8").sparkline([0,0,20],{type:"pie",width:"18",height:"18",sliceColors:["#44b3b7","#ebd04f","#e35559"],offset:0,borderWidth:0,borderColor:"#c9c9c9"})}}function progressbar_animate(){$(".progress .bar.filled-text").progressbar({display_text:1,transition_delay:1e3});$(".slim .bar").progressbar({transition_delay:300});$(".delay .bar").progressbar({display_text:1,transition_delay:2e3});$(".value .bar").progressbar({display_text:1,use_percentage:!1,transition_delay:1e3});$(".progress .bar.centered-text").progressbar({display_text:2});$(".progress .no-text").progressbar()}function setup_toastr(){toastr.options={tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,fadeIn:250,fadeOut:200,extendedTimeOut:0,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-bottom-right",timeOut:8e3,titleClass:"toast-title",messageClass:"toast-message"}}function execute_idevice_functions(){if(!navigator.userAgent.match(/iPhone/i)&&!navigator.userAgent.match(/iPod/i))return!1;window.addEventListener("load",function(){setTimeout(function(){window.scrollTo(0,1)},0)})}function setup_custom_form_elements(){$(".themed").length&&$(".themed select.with-search").select2()}function setup_uislider(){$("#warning-threshold-average").slider({range:"min",min:100,max:800,step:20,value:0,slide:function(e,t){$("#warning-threshold-average-value").val(t.value+" %");$("#slider-range-max .ui-slider-handle:first").html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+t.value+"</div></div>")}});$("#warning-threshold-day").slider({range:"min",min:5,max:340,step:20,value:0,slide:function(e,t){$("#warning-threshold-day-value").val(t.value+" %");$("#slider-range-max .ui-slider-handle:first").html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+t.value+"</div></div>")}});$("#warning-temperature").slider({range:"min",min:50,max:70,step:1,value:65,slide:function(e,t){$("#warning-threshold-day-value").val(t.value+"°");$("#slider-range-max .ui-slider-handle:first").html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+t.value+"</div></div>")}});$("#slider-range").slider({range:!0,min:100,max:500,values:[176,329],slide:function(e,t){$("#amount").val("$"+t.values[0]+" - $"+t.values[1]);$("#slider-range .ui-slider-handle:first").html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+t.values[0]+"</div></div>");$("#slider-range .ui-slider-handle:last").html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+t.values[1]+"</div></div>")}});$("#amount").val("$"+$("#slider-range").slider("values",0)+" - $"+$("#slider-range").slider("values",1));$("#slider-range-min").slider({range:"min",value:30,min:1,max:31,slide:function(e,t){$("#amount2").val(""+t.value);$("#slider-range-min .ui-slider-handle:first").html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+t.value+"</div></div>")}});$("#amount2").val(""+$("#slider-range-min").slider("value"));$("#slider-range-max").slider({range:"max",min:100,max:999,value:507,slide:function(e,t){$("#amount3").val("$"+t.value);$("#slider-range-max .ui-slider-handle:first").html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+t.value+"</div></div>")}});$("#amount3").val("$"+$("#slider-range-max").slider("value"));$("#slider-range-step").slider({range:!0,min:100,max:999,step:100,values:[500,550],slide:function(e,t){$("#amount4").val(""+t.values[0]+" - "+t.values[1]);$("#slider-range-step .ui-slider-handle:first").html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+t.values[0]+"</div></div>");$("#slider-range-step .ui-slider-handle:last").html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+t.values[1]+"</div></div>")}});$("#amount4").val(""+$("#slider-range-step").slider("values",0)+" - "+$("#slider-range-step").slider("values",1))}function validation_setup_demo(){$(".form-validation").length&&$(".form-validation").validate({rules:{simple:"required",minString:{required:!0,minlength:3},maxString:{required:!0,maxlength:5},minNumber:{required:!0,min:3},maxNumber:{required:!0,max:5},rangeValue:{required:!0,range:[5,10]},emailValidation:{required:!0,email:!0},urlValidation:{required:!0,url:!0},dateValidation:{required:!0,date:!0},noStrings:{required:!0,digits:!0},password:{required:!0,minlength:5},passwordRepeat:{required:!0,minlength:5,equalTo:"#password"},topic:{required:"#newsletter:checked",minlength:2},agree:"required"},highlight:function(e){$(e).closest(".control-group").removeClass("success");$(e).closest(".control-group").addClass("error")},success:function(e){e.text("").addClass("valid").closest(".control-group").addClass("success")}})}function parseValue(){$(this).val($(this).siblings("#isp0-bandwidth-down").val()+" ")}var $pop_sound=new Audio("sounds/sound-pop-clear.mp3"),$smallbox=new Audio("sounds/smallbox.mp3"),$messagebox=new Audio("sounds/messagebox.mp3"),$bigbox=new Audio("sounds/bigbox.mp3");$(document).ready(function(){setup_popovers();setup_toastr();execute_idevice_functions();isMobile();setup_sparklines();progressbar_animate();setup_uislider();validation_setup_demo();setup_custom_form_elements()});$(function(){$(".accordion").on("show",function(e){$(e.target).prev(".accordion-heading").find(".accordion-toggle").addClass("active")});$(".accordion").on("hide",function(e){$(this).find(".accordion-toggle").not($(e.target)).removeClass("active")})});$(window).resize(function(){});$(window).load(function(){});$(document).ready(function(){$(".tablefiltering").length&&$(".tablefiltering").dataTable({sDom:"<'row-fluid dt-header'<'span12'f>r>t<'row-fluid dt-footer'<'span6'p><'span4 visible-desktop'l>>",sPaginationType:"bootstrap",oLanguage:{sLengthMenu:"Show: _MENU_",sSearch:"Filter Makos"},fnDrawCallback:function(e){var t=$(".tablefiltering").footable({breakpoints:{phone:480,tablet:1024}});t.trigger("footable_resize")}});$(".dataTables_filter input").attr("placeholder","Enter search terms");if($(".columnfiltering").length){var e;$("thead input").keyup(function(){e.fnFilter(this.value,e.oApi._fnVisibleToColumnIndex(e.fnSettings(),$("thead input").index(this)))});$("thead input").each(function(e){this.initVal=this.value});$("thead input").focus(function(){if(this.className=="search_init"){this.className="";this.value=""}});$("thead input").blur(function(e){if(this.value===""){this.className="search_init";this.value=this.initVal}});e=$(".columnfiltering").dataTable({sDom:"t<'row-fluid dt-footer'<'span6 visible-desktop'i><'span6'p>>",oLanguage:{sSearch:"Search all columns:"},bSortCellsTop:!0})}});$(document).ready(function(){if($(".table-row-dragging").length){$(".table-row-dragging").dataTable({sDom:"<'row-fluid dt-header'<'span12'f>>t<'row-fluid dt-footer'<'span3'p><'span3 visible-desktop'i><'span3'l><'span3'T>>",sPaginationType:"bootstrap",bSort:!1,oLanguage:{sSearch:"",sLengthMenu:"_MENU_"},oTableTools:{aButtons:[{sExtends:"print",sButtonText:'<i class="icon-external-link"></i> Show all',sInfo:"<h6>Press escape when finished.</h6>"}]}}).rowGrouping({iGroupingColumnIndex:0,bExpandableGrouping:!0,bExpandSingleGroup:!1,iExpandGroupOffset:-1,asExpandedGroups:["none"]}).rowReordering({bGroupingUsed:!0,iIndexColumn:1});$(".dataTables_filter input").attr("placeholder","Filter")}});$(document).ready(function(){if($(".table-grouping").length){$(".table-grouping").dataTable({sDom:"<'row-fluid dt-header'<'span12'f>>t<'row-fluid dt-footer'<'span3'p><'span3 visible-desktop'i><'span3'l><'span3'T>>",sPaginationType:"bootstrap",bSort:!0,aoColumnDefs:[{bSortable:!1,aTargets:[4]}],oLanguage:{sSearch:"",sLengthMenu:"_MENU_"},oTableTools:{aButtons:[{sExtends:"print",sButtonText:'<i class="icon-external-link"></i> Show all',sInfo:"<h6>Press escape when finished.</h6>"}]}}).rowGrouping({iGroupingColumnIndex:0,bExpandableGrouping:!0,bExpandSingleGroup:!1,iExpandGroupOffset:-1,asExpandedGroups:["none"]});$(".dataTables_filter input").attr("placeholder","Filter")}});$(document).ready(function(){$(".footable").footable()});$(document).ready(function(){$("#slider_list").sliderNav({height:"370"})});$(function(){$('[rel="popoverx"]').popoverx({fire_on:"click"})});$(function(){$(".main-menu").popoverx({fire_on:"hover",hover_delay_close:2e3,ensure_visiable:!0,class_name:"main-menu-popover"})});$(function(){$("#billing-day-isp0").popoverx({fire_on:"click",class_name:"calendar-popover"})});$(".show-tooltip").tooltip();$(".mask-password").hideShowPassword({show:!1,innerToggle:!0,toggleClass:"hideShowPassword",states:{shown:{inputClass:"hideShowPassword-shown",eventName:"passwordShown",toggleClass:"hideShowPassword-toggle-hide",toggleText:"",attr:{type:"text",autocapitalize:"off",autocomplete:"off",autocorrect:"off",spellcheck:"false"}},hidden:{inputClass:"hideShowPassword-hidden",eventName:"passwordHidden",toggleClass:"hideShowPassword-toggle-show",toggleText:"",attr:{type:"password"}}},hideToggleUntil:"focus"});$(document).ready(function(){$(".isp0-tour-start").click(function(){bootstro.start(".isp0-tour",{nextButtonText:"",prevButtonText:"",finishButtonText:""})})});$("#isp0-bandwidth-down").spinner({min:2,step:1,spin:function(){$(this).siblings("#isp0-bandwidth-down-value").val($(this).val()+"")},stop:function(){$(this).siblings("#isp0-bandwidth-down-value").val($(this).val()+" ")}}).parent().append('<input type="text" id="isp0-bandwidth-down-value" placeholder="(0 to Autodetect)" class="spinner-text span12"/>');$("#isp0-bandwidth-down-value").each(parseValue);$("#isp0-bandwidth-down-value").change(function(){$(this).siblings("#isp0-bandwidth-down").val(parseInt($(this).val()))});$("#isp0-bandwidth-down-value").blur(parseValue);