Printer = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128);
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/printer.svg",0,0,128,128));
	this.createPort('input', new draw2d.layout.locator.CenterLocator(this) );
	this.setResizeable(false);
        return set;
    }
});



Cloud = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128);
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/cloud.svg",0,0,128,128));
	this.createPort('output', new draw2d.layout.locator.CenterLocator(this));
	this.setResizeable(false);
        return set;
    }
});

DesktopPC = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128);
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/desktop-pc.svg",0,0,128,128));
	this.createPort('input', new draw2d.layout.locator.CenterLocator(this));
	this.setResizeable(false);
        return set;
    }
});

EFTPos = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128);
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/eftpos.svg",0,0,128,128));
	this.createPort('input', new draw2d.layout.locator.CenterLocator(this));
	this.setResizeable(false);
        return set;
    }
});

InternetGlobe = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128);
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/internet-globe.svg",0,0,128,128));
	this.createPort('output', new draw2d.layout.locator.CenterLocator(this));
	this.setResizeable(false);
        return set;
    }
});

Mako6500 = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128);
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/mako-6500.svg",0,0,128,128));
	this.createPort('input', new draw2d.layout.locator.CenterLocator(this));
	this.createPort('output', new draw2d.layout.locator.BottomLocator(this));
	$.extend( this.getOutputPort(0), {} );
	this.setResizeable(false);
        return set;
    }
});

Mako7550 = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128, new draw2d.layout.locator.CenterLocator(this));
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/mako-7550.svg",0,0,128,128));
	this.createPort('input', new draw2d.layout.locator.CenterLocator(this));
	this.createPort('output', new draw2d.layout.locator.CenterLocator(this));
	this.setResizeable(false);
        return set;
    }
});

CMSServer = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128);
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/mako-cms-server.svg",0,0,128,128));
	this.createPort('output', new draw2d.layout.locator.CenterLocator(this));
	this.setResizeable(false);
        return set;
    }
});

MobilePhone = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128);
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/mobile-phone.svg",0,0,128,128));
	this.createPort('output', new draw2d.layout.locator.CenterLocator(this));
	this.setResizeable(false);
        return set;
    }
});


NetworkSwitch = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128);
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/network-switch.svg",0,0,128,128));
	this.createPort('input', new draw2d.layout.locator.CenterLocator(this));
	this.createPort('output', new draw2d.layout.locator.CenterLocator(this));
	this.setResizeable(false);
        return set;
    }
});

NotebookPC = draw2d.SetFigure.extend({
    NAME: "Printer",

    init : function()
    {
        this._super();
        this.setDimension(128,128);
    },

    createSet: function(){
        var set = this._super();
        set.push( this.canvas.paper.image("img/notebook-pc.svg",0,0,128,128));
	this.createPort('input', new draw2d.layout.locator.CenterLocator(this));
	this.setResizeable(false);
        return set;
    }
});



