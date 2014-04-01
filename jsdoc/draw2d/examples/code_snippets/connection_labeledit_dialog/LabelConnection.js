/**
 * @class example.connection_labeledit.LabelConnection
 * 
 * A simple Connection with a label wehich sticks in the middle of the connection..
 *
 * @author Andreas Herz
 * @extend draw2d.Connection
 */
var LabelConnection= draw2d.Connection.extend({
    
    init:function()
    {
      this._super();
    
      // Create any Draw2D figure as decoration for the connection
      //
      this.label = new draw2d.shape.basic.Label("I'm a Label");
      this.label.setColor("#0d0d0d");
      this.label.setFontColor("#0d0d0d");
 //     this.label.setBold(true);
      this.label.setBackgroundColor("#f0f0f0");
      
      // add the new decoration to the connection with a position locator.
      //
      this.addFigure(this.label, new draw2d.layout.locator.ManhattanMidpointLocator(this));
      
      // Register a label editor with a dialog
      //
      this.label.installEditor(new draw2d.ui.LabelEditor());
      
      this.setRouter(new draw2d.layout.connection.InteractiveManhattanConnectionRouter());
      this.setOutlineStroke(1);
      this.setOutlineColor("#303030");
      this.setStroke(2);
      this.setColor('#00A8F0');
      this.setRadius(4);
    }
});
