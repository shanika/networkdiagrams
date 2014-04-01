Ext.data.JsonP.draw2d_decoration_connection_Decorator({"requires":[],"uses":[],"superclasses":[],"alternateClassNames":[],"mixins":[],"tagname":"class","meta":{},"files":[{"href":"Decorator.html#draw2d-decoration-connection-Decorator","filename":"Decorator.js"}],"component":false,"members":[{"owner":"draw2d.decoration.connection.Decorator","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"draw2d.decoration.connection.Decorator","tagname":"method","meta":{},"name":"paint","id":"method-paint"},{"owner":"draw2d.decoration.connection.Decorator","tagname":"method","meta":{"chainable":true},"name":"setBackgroundColor","id":"method-setBackgroundColor"},{"owner":"draw2d.decoration.connection.Decorator","tagname":"method","meta":{"chainable":true},"name":"setColor","id":"method-setColor"},{"owner":"draw2d.decoration.connection.Decorator","tagname":"method","meta":{"chainable":true},"name":"setDimension","id":"method-setDimension"}],"author":[{"email":null,"tagname":"author","name":"Andreas Herz"}],"autodetected":{},"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/draw2d.decoration.connection.ArrowDecorator' rel='draw2d.decoration.connection.ArrowDecorator' class='docClass'>draw2d.decoration.connection.ArrowDecorator</a></div><div class='dependency'><a href='#!/api/draw2d.decoration.connection.BarDecorator' rel='draw2d.decoration.connection.BarDecorator' class='docClass'>draw2d.decoration.connection.BarDecorator</a></div><div class='dependency'><a href='#!/api/draw2d.decoration.connection.CircleDecorator' rel='draw2d.decoration.connection.CircleDecorator' class='docClass'>draw2d.decoration.connection.CircleDecorator</a></div><div class='dependency'><a href='#!/api/draw2d.decoration.connection.DiamondDecorator' rel='draw2d.decoration.connection.DiamondDecorator' class='docClass'>draw2d.decoration.connection.DiamondDecorator</a></div><h4>Files</h4><div class='dependency'><a href='source/Decorator.html#draw2d-decoration-connection-Decorator' target='_blank'>Decorator.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.decoration.connection.Decorator'>draw2d.decoration.connection.Decorator</span><br/><a href='source/Decorator.html#draw2d-decoration-connection-Decorator-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.decoration.connection.Decorator-method-constructor' class='name expandable'>draw2d.decoration.connection.Decorator</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.decoration.connection.Decorator\" rel=\"draw2d.decoration.connection.Decorator\" class=\"docClass\">draw2d.decoration.connection.Decorator</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.decoration.connection.Decorator\" rel=\"draw2d.decoration.connection.Decorator\" class=\"docClass\">draw2d.decoration.connection.Decorator</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-paint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.decoration.connection.Decorator'>draw2d.decoration.connection.Decorator</span><br/><a href='source/Decorator.html#draw2d-decoration-connection-Decorator-method-paint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.decoration.connection.Decorator-method-paint' class='name expandable'>paint</a>( <span class='pre'>paper</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Paint the decoration for a connector. ...</div><div class='long'><p>Paint the decoration for a connector. The Connector starts always in\n[0,0] and ends in [x,0].\nIt is not necessary to consider any rotation of the connection. This will be done by the\nframework.</p>\n\n<pre>               | -Y\n               |\n               |\n --------------+-----------------------------&gt; +X\n               |\n               |\n               |\n               V +Y\n\n\n</pre>\n\n\n<p>See in ArrowConnectionDecorator for example implementation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>paper</span> : Raphael<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setBackgroundColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.decoration.connection.Decorator'>draw2d.decoration.connection.Decorator</span><br/><a href='source/Decorator.html#draw2d-decoration-connection-Decorator-method-setBackgroundColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.decoration.connection.Decorator-method-setBackgroundColor' class='name expandable'>setBackgroundColor</a>( <span class='pre'>c</span> ) : <a href=\"#!/api/draw2d.decoration.connection.Decorator\" rel=\"draw2d.decoration.connection.Decorator\" class=\"docClass\">draw2d.decoration.connection.Decorator</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set the background color for the decoration ...</div><div class='long'><p>Set the background color for the decoration</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/draw2d.util.Color\" rel=\"draw2d.util.Color\" class=\"docClass\">draw2d.util.Color</a>|String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.decoration.connection.Decorator\" rel=\"draw2d.decoration.connection.Decorator\" class=\"docClass\">draw2d.decoration.connection.Decorator</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.decoration.connection.Decorator'>draw2d.decoration.connection.Decorator</span><br/><a href='source/Decorator.html#draw2d-decoration-connection-Decorator-method-setColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.decoration.connection.Decorator-method-setColor' class='name expandable'>setColor</a>( <span class='pre'>c</span> ) : <a href=\"#!/api/draw2d.decoration.connection.Decorator\" rel=\"draw2d.decoration.connection.Decorator\" class=\"docClass\">draw2d.decoration.connection.Decorator</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set the stroke color for the decoration ...</div><div class='long'><p>Set the stroke color for the decoration</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/draw2d.util.Color\" rel=\"draw2d.util.Color\" class=\"docClass\">draw2d.util.Color</a>|String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.decoration.connection.Decorator\" rel=\"draw2d.decoration.connection.Decorator\" class=\"docClass\">draw2d.decoration.connection.Decorator</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setDimension' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.decoration.connection.Decorator'>draw2d.decoration.connection.Decorator</span><br/><a href='source/Decorator.html#draw2d-decoration-connection-Decorator-method-setDimension' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.decoration.connection.Decorator-method-setDimension' class='name expandable'>setDimension</a>( <span class='pre'>width, height</span> ) : <a href=\"#!/api/draw2d.decoration.connection.Decorator\" rel=\"draw2d.decoration.connection.Decorator\" class=\"docClass\">draw2d.decoration.connection.Decorator</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Change the dimension of the decoration shape ...</div><div class='long'><p>Change the dimension of the decoration shape</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>width</span> : Number<div class='sub-desc'><p>The new width of the decoration</p>\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'><p>The new height of the decoration</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.decoration.connection.Decorator\" rel=\"draw2d.decoration.connection.Decorator\" class=\"docClass\">draw2d.decoration.connection.Decorator</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"name":"draw2d.decoration.connection.Decorator","id":"class-draw2d.decoration.connection.Decorator","parentMixins":[],"subclasses":["draw2d.decoration.connection.ArrowDecorator","draw2d.decoration.connection.BarDecorator","draw2d.decoration.connection.CircleDecorator","draw2d.decoration.connection.DiamondDecorator"],"aliases":{},"inheritable":true});