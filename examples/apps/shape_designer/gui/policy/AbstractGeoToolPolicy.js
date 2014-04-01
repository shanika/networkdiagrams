shape_designer.policy.AbstractGeoToolPolicy = shape_designer.policy.AbstractToolPolicy.extend({
	
	init:function(){
	    this._super();
	    this.firstFigure = null;
	},
	
    
    onInstall: function(canvas){
        this.setToolHeader("");
        this.setToolMessage("Select first figure..");
    },
    
    select: function(canvas, figure){
        if(canvas.getSelection().getAll().contains(figure)){
            return; // nothing to to
        }
        
        // check if the element an valid polygon. otherwise an boolean operation
        // isn't possible
        if(!(figure instanceof shape_designer.figure.ExtPolygon)){
            return;
        }
        
        if(canvas.getSelection().getPrimary()!==null){
            this.unselect(canvas, canvas.getSelection().getPrimary());
        }
      
        if(figure !==null) {
            figure.select(true); // primary selection
        }
        
        canvas.getSelection().setPrimary(figure);

        // inform all selection listeners about the new selection.
        //
        canvas.selectionListeners.each(function(i,w){
            w.onSelectionChanged(figure);
        });
    },
    
    executeGeometryOperation: function(canvas, figure1, figure2, operationFunc){
        var p1 = this.getGeometry(figure1);
        var p2 = this.getGeometry(figure2);
        var union = eval("p1."+operationFunc+"(p2)");
        var geo = new jsts.io.GeoJSONWriter().write(union);
        var memento = figure1.getPersistentAttributes();
        var cmd =new draw2d.command.CommandCollection();
        cmd.add(new draw2d.command.CommandDelete(figure1));
        cmd.add(new draw2d.command.CommandDelete(figure2));
        $.each(geo.coordinates, $.proxy(function(i,poly){
            var figure = new shape_designer.figure.ExtPolygon();
            figure.setPersistentAttributes(memento);
            figure.vertices   = new draw2d.util.ArrayList();
            $.each(poly, function(i,vertex){
                figure.addVertex(vertex[0],vertex[1]);
            });
            var command = new draw2d.command.CommandAdd(canvas, figure, figure.getX(), figure.getY());
            cmd.add(command);
        },this));
        canvas.getCommandStack().execute(cmd);
    
    },
    
    getGeometry: function(figure){
        var reader = new jsts.io.WKTReader();  
        var v= figure.vertices.asArray();
        v.push(v[0]);
        return reader.read("POLYGON(("+$.map(v, function(e){return e.x+" "+e.y;}).join(", ")+"))");
    }
   
});




