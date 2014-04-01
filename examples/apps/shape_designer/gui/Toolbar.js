
shape_designer.Toolbar = Class.extend({
    
    init:function(elementId, view){
        this.html = $("#"+elementId);
        this.view = view;

        // register this class as event listener for the canvas
        // CommandStack. This is required to update the state of 
        // the Undo/Redo Buttons.
        //
        view.getCommandStack().addEventListener(this);

        // Register a Selection listener for the state hnadling
        // of the Delete Button
        //
        view.addSelectionListener(this);
        
        this.fileName = null;

        this.html.append(
                '<span id="currentTool_container" class="media pull-left">'+
                ' <span class="pull-left" >'+
                '    <img id="currentTool_image" class="media-object" src="" >'+
                ' </span>'+
                ' <div class="media-body">'+
                '   <h4 id="currentTool_heading" class="media-heading">Media heading</h4>'+
                '    <div id="currentTool_message" class="highlight" ></div>'+
                '  </div>'+
                '</span>');
          

        this.toolbarDiv=$("<div class=\"toolbarGroup pull-right\"></div>");
        this.html.append(this.toolbarDiv);
        
        var buttonGroup=$("<div class=\"btn-group\"></div>");
        this.toolbarDiv.append(buttonGroup);
        this.openButton  = $('<button  data-toggle="tooltip" data-size="xs" data-style="zoom-in" title="Load <span class=\'highlight\'> [ Ctrl+O ]</span>" class=\"btn btn-default\" ><img src="./icons/toolbar_download.png"></button>');
        buttonGroup.append(this.openButton);
        this.openButton.on("click",$.proxy(function(){
            var button = this.openButton;
            button.addClass("ladda-button");
            var l = Ladda.create(  button[0]  );
            l.start();
            app.fileOpen(
                   // success 
                   function(){
                       l.stop();
                       setTimeout( function() {  button.removeClass("ladda-button");}, 1000);
                    },
                    // error
                    function(){
                        l.stop();
                        setTimeout( function() {  button.removeClass("ladda-button");}, 1000);
                        alert("Unable to load file");
                    },
                    // abort
                    function(){
                        l.stop();
                        setTimeout( function() {  button.removeClass("ladda-button");}, 1000);
                    });
        },this));
        Mousetrap.bind("ctrl+o", $.proxy(function (event) {this.openButton.click();return false;},this));

        this.saveButton  = $('<button data-toggle="tooltip" data-size="xs" data-style="zoom-in" title="Save <span class=\'highlight\'> [ Ctrl+S ]</span>" class=\"btn btn-default\" ><img src="./icons/toolbar_upload.png"></button>');
        buttonGroup.append(this.saveButton);
        this.saveButton.on("click",$.proxy(function(){
            var button = this.saveButton;
            button.addClass("ladda-button");
        	var l = Ladda.create(  button[0]  );
        	l.start();
        	app.fileSave(
        	        // success callback
        	        $.proxy(function(){
                         l.stop();
                         setTimeout( function() {  button.removeClass("ladda-button");}, 1000);
                	},this),
                	// error callback
                	function(){
                        l.stop();
                        setTimeout( function() {  button.removeClass("ladda-button");}, 1000);
                        alert("unable to save document");
       	            },
       	            // abort callback
       	            function(){
                        l.stop();
                        setTimeout( function() {  button.removeClass("ladda-button");}, 1000);
       	            }
        	        );
        },this));
        Mousetrap.bind("ctrl+s", $.proxy(function (event) {this.saveButton.click();return false;},this));

        // Inject the UNDO Button and the callbacks
        //
        var buttonGroup=$('<div class="btn-group" ></div>');
        this.toolbarDiv.append(buttonGroup);
        this.undoButton  = $('<button  data-toggle="tooltip" title="Undo <span class=\'highlight\'> [ Ctrl+Z ]</span>" class=\"btn btn-default\" ><img src="./icons/toolbar_undo.png"></button>');
        buttonGroup.append(this.undoButton);
        this.undoButton.on("click",$.proxy(function(){
               this.view.getCommandStack().undo();
        },this)).button( "option", "disabled", true );
        Mousetrap.bind("ctrl+z", $.proxy(function (event) {this.undoButton.click();return false;},this));

        
        // Inject the REDO Button and the callback
        //
        this.redoButton  = $('<button data-toggle="tooltip" title="Redo <span class=\'highlight\'> [ Ctrl+Y ]</span>"  class=\"btn btn-default\" ><img src="./icons/toolbar_redo.png"></button>');
        buttonGroup.append(this.redoButton);
        this.redoButton.on("click",$.proxy(function(){
            this.view.getCommandStack().redo();
        },this)).button( "option", "disabled", true );
        Mousetrap.bind("ctrl+y", $.proxy(function (event) {this.redoButton.click();return false;},this));
        
        this.delimiter  = $("<span class='toolbar_delimiter'>&nbsp;</span>");
        this.toolbarDiv.append(this.delimiter);
        
        this.testButton  = $('<button  data-toggle="tooltip" title="Test</span>" class=\"btn btn-default\" ><img src="./icons/toolbar_test.png"></button>');
        this.toolbarDiv.append(this.testButton);
        this.testButton.on("click",$.proxy(function(){
            new shape_designer.dialog.FigureTest().show();
        },this));
  
        this.codeButton  = $('<button  data-toggle="tooltip" title="JS Code</span>" class=\"btn btn-default\" ><img src="./icons/toolbar_js.png"></button>');
        this.toolbarDiv.append(this.codeButton);
        this.codeButton.on("click",$.proxy(function(){
            new shape_designer.dialog.FigureCode().show();
        },this));

        this.delimiter  = $("<span class='toolbar_delimiter'>&nbsp;</span>");
        this.toolbarDiv.append(this.delimiter);

        // Inject the DELETE Button
        //
        this.deleteButton  = $('<button  data-toggle="tooltip" title="Delete <span class=\'highlight\'> [ Del ]</span>" class=\"btn btn-default\" ><img src="./icons/toolbar_delete.png"></button>');
        this.toolbarDiv.append(this.deleteButton);
        this.deleteButton.on("click",$.proxy(function(){
            var node = this.view.getCurrentSelection();
            var command= new draw2d.command.CommandDelete(node);
            this.view.getCommandStack().execute(command);
        },this)).button( "option", "disabled", true );
        Mousetrap.bind(["del"], $.proxy(function (event) {this.deleteButton.click();return false;},this));
       
    /*    
        //<button onclick="TogetherJS(this); return false;">Start TogetherJS</button>
        this.shareButton  = $('<button class=\"btn btn-default\" >share</button>');
        this.toolbarDiv.append(this.shareButton);
        this.shareButton.on("click",$.proxy(function(){
            TogetherJS(this);
        },this.shareButton));
*/
    

        this.delimiter  = $("<span class='toolbar_delimiter'>&nbsp;</span>");
        this.toolbarDiv.append(this.delimiter);

        
       
        var buttonGroup=$('<div class="btn-group" data-toggle="buttons"></div>');
        this.toolbarDiv.append(buttonGroup);

        this.shapeButton = $(
                             '<label id="tool_shape" class="dropdown btn btn-sm btn-primary">'+
                             '    <input id="tool_shape_button"  data-policy="shape_designer.policy.RectangleToolPolicy" class="btn-default btn"  type="radio">'+
                             '    <img   id="tool_shape_image" data-toggle="tooltip" title="Rectangle <span class=\'highlight\'> [ R ]</span>"  src="./icons/tools/POLYGON_DIAGONALS_032.png">'+
                             '    <span data-toggle="dropdown" role="button" href="#" id="tool_shape_caret"><span class="caret">&nbsp;</span></span>'+
                             '    <ul class="dropdown-menu" role="menu" >'+
                             '       <li class="tool_shape_entry" data-policy="shape_designer.policy.RectangleToolPolicy" data-toggle="tooltip" title="Rectangle <span class=\'highlight\'> [ R ]</span>"><a href="#"><img  src="./icons/tools/POLYGON_DIAGONALS_032.png">Rectangle</a></li>'+
                             '       <li class="tool_shape_entry" data-policy="shape_designer.policy.CircleToolPolicy"    data-toggle="tooltip" title="Circle <span class=\'highlight\'> [ C ]</span>">   <a href="#"><img  src="./icons/tools/CIRCLE_1_032.png">Circle</a></li>'+
                             '       <li class="tool_shape_entry" data-policy="shape_designer.policy.LineToolPolicy"      data-toggle="tooltip" title="Line <span class=\'highlight\'> [ L ]</span>">     <a href="#"><img  src="./icons/tools/LINE_032.png">Line</a></li>'+
                             '       <li class="tool_shape_entry" data-policy="shape_designer.policy.TextToolPolicy"      data-toggle="tooltip" title="Text <span class=\'highlight\'> [ T ]</span>">     <a href="#"><img  src="./icons/tools/TEXT_032.png">Text</a></li>'+
                             '       <li class="tool_shape_entry" data-policy="shape_designer.policy.PortToolPolicy"      data-toggle="tooltip" title="Port <span class=\'highlight\'> [ P ]</span>">     <a href="#"><img  src="./icons/tools/PORT_032.png">Port</a></li>'+
                             '    </ul>'+
                             '</label>'
                          );
        buttonGroup.append(this.shapeButton);
        $(".tool_shape_entry").on("click",$.proxy(function(event){
           var $target = $(event.currentTarget);
           $("#tool_shape_image").attr("src", $target.find("img").attr("src"));
           $("#tool_shape_button").data("policy", $target.data("policy"));
           $("#tool_shape_image").click();
           
           $("#tool_shape_image")
               .attr('data-original-title', $target.data("original-title"))
               .tooltip('fixTitle');
        },this));
       
        $("#tool_shape_image").on("click",$.proxy(function(){
            this.view.installEditPolicy(eval("new "+$("#tool_shape_button").data("policy")+"()"));
        },this));
        Mousetrap.bind(["R","r"], $.proxy(function (event) {
            $('*[data-policy="shape_designer.policy.RectangleToolPolicy"]').click();
            return false;
        },this));
        Mousetrap.bind(["C","c"], $.proxy(function (event) {
            $('*[data-policy="shape_designer.policy.CircleToolPolicy"]').click();
            return false;
        },this));
        Mousetrap.bind(["T","t"], $.proxy(function (event) {
            $('*[data-policy="shape_designer.policy.TextToolPolicy"]').click();
            return false;
        },this));
        Mousetrap.bind(["P","p"], $.proxy(function (event) {
            $('*[data-policy="shape_designer.policy.PortToolPolicy"]').click();
            return false;
        },this));
        Mousetrap.bind(["L","l"], $.proxy(function (event) {
            $('*[data-policy="shape_designer.policy.LineToolPolicy"]').click();
            return false;
        },this));
        
        
        this.selectButton = $('<label data-toggle="tooltip" title="Select mode <span class=\'highlight\'> [ spacebar ]</span>" class="btn btn-sm btn-primary active"><input type="radio" name="selected_tool" id="tool1" class="btn-default btn" ><img src="./icons/tools/SELECT_TOOL_032.png"></label>');
        buttonGroup.append(this.selectButton);
        this.selectButton.on("click",$.proxy(function(){
            this.view.installEditPolicy(new shape_designer.policy.SelectionToolPolicy());
        },this));
        Mousetrap.bind("space", $.proxy(function (event) {this.selectButton.click();return false;},this));
        
        this.unionButton = $('<label data-toggle="tooltip" title="Polygon Union <span class=\'highlight\'> [ U ]</span>" class="btn btn-sm btn-primary"><input type="radio" name="selected_tool" id="tool1" class="btn-default btn" ><img src="./icons/tools/SURFACE_BOOL_ADD_032.png"></label>');
        buttonGroup.append(this.unionButton);
        this.unionButton.on("click",$.proxy(function(){
           this.view.installEditPolicy(new shape_designer.policy.GeoUnionToolPolicy());
        },this));
        Mousetrap.bind(["U", "u"], $.proxy(function (event) {this.unionButton.click();return false;},this));

       this.differenceButton = $('<label data-toggle="tooltip" title="Polygon Difference <span class=\'highlight\'> [ D ]</span>"  class="btn btn-sm btn-primary"><input type="radio" name="selected_tool" id="tool2" class="btn-default btn" ><img src="./icons/tools/SURFACE_BOOL_SUBTRACT_032.png"></label>');
       buttonGroup.append(this.differenceButton);
       this.differenceButton.on("click",$.proxy(function(){
           this.view.installEditPolicy(new shape_designer.policy.GeoDifferenceToolPolicy());
       },this));
       Mousetrap.bind(["D", "d"], $.proxy(function (event) {this.differenceButton.click();return false;},this));
        
       this.intersectionButton = $('<label data-toggle="tooltip" title="Polygon Intersection <span class=\'highlight\'> [ I ]</span>"  class="btn btn-sm btn-primary"><input type="radio" name="selected_tool" id="too3" class="btn-default btn" ><img src="./icons/tools/SURFACE_BOOL_INTERSECT_032.png"></label>');
       buttonGroup.append(this.intersectionButton);
       this.intersectionButton.on("click",$.proxy(function(){
           this.view.installEditPolicy(new shape_designer.policy.GeoIntersectionToolPolicy());
       },this));
       Mousetrap.bind(["I", "i"], $.proxy(function (event) {this.intersectionButton.click();return false;},this));

       buttonGroup.find(".btn").button();
       
       // enable the tooltip for all buttons
       //
       $('*[data-toggle="tooltip"]').tooltip({placement:"bottom", container:"body",delay: { show: 1000, hide: 10 }, html:true});

    },

    /**
     * @method
     * Called if the selection in the cnavas has been changed. You must register this
     * class on the canvas to receive this event.
     * 
     * @param {draw2d.Figure} figure
     */
    onSelectionChanged : function(figure){
        this.deleteButton.button( "option", "disabled", figure===null );
    },
    
    /**
     * @method
     * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail() 
     * can be used to identify the type of event which has occurred.
     * 
     * @template
     * 
     * @param {draw2d.command.CommandStackEvent} event
     **/
    stackChanged:function(event)
    {
        this.undoButton.button( "option", "disabled", !event.getStack().canUndo() );
        this.redoButton.button( "option", "disabled", !event.getStack().canRedo() );
    }
    
});