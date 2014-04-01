Ext.data.JsonP.draw2d_layout_connection_ConnectionRouter({"requires":[],"uses":[],"superclasses":[],"alternateClassNames":[],"mixins":[],"tagname":"class","meta":{},"files":[{"href":"ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter","filename":"ConnectionRouter.js"}],"component":false,"members":[{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{},"name":"canRemoveSegmentAt","id":"method-canRemoveSegmentAt"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{},"name":"canRemoveVertexAt","id":"method-canRemoveVertexAt"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{},"name":"getPersistentAttributes","id":"method-getPersistentAttributes"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{"template":true},"name":"onInstall","id":"method-onInstall"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{"template":true},"name":"onUninstall","id":"method-onUninstall"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{"template":true},"name":"route","id":"method-route"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{},"name":"setPersistentAttributes","id":"method-setPersistentAttributes"}],"author":[{"email":null,"tagname":"author","name":"Andreas Herz"}],"autodetected":{},"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/draw2d.layout.connection.DirectRouter' rel='draw2d.layout.connection.DirectRouter' class='docClass'>draw2d.layout.connection.DirectRouter</a></div><div class='dependency'><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter' rel='draw2d.layout.connection.ManhattanConnectionRouter' class='docClass'>draw2d.layout.connection.ManhattanConnectionRouter</a></div><div class='dependency'><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='docClass'>draw2d.layout.connection.MazeConnectionRouter</a></div><div class='dependency'><a href='#!/api/draw2d.layout.connection.VertexRouter' rel='draw2d.layout.connection.VertexRouter' class='docClass'>draw2d.layout.connection.VertexRouter</a></div><h4>Files</h4><div class='dependency'><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter' target='_blank'>ConnectionRouter.js</a></div></pre><div class='doc-contents'><p>Routes a <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a>, possibly using a constraint.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-constructor' class='name expandable'>draw2d.layout.connection.ConnectionRouter</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter\" rel=\"draw2d.layout.connection.ConnectionRouter\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new Router object ...</div><div class='long'><p>Creates a new Router object</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.connection.ConnectionRouter\" rel=\"draw2d.layout.connection.ConnectionRouter\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-canRemoveSegmentAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-canRemoveSegmentAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-canRemoveSegmentAt' class='name expandable'>canRemoveSegmentAt</a>( <span class='pre'>index</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback method for the PolyLine or Connection to verify that a segment is deletable. ...</div><div class='long'><p>Callback method for the PolyLine or Connection to verify that a segment is deletable.</p>\n        <p>Available since: <b>4.2.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-canRemoveVertexAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-canRemoveVertexAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-canRemoveVertexAt' class='name expandable'>canRemoveVertexAt</a>( <span class='pre'>index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback method for the PolyLine or Connection to check if it possible to remove a vertex from\nthe list. ...</div><div class='long'><p>Callback method for the PolyLine or Connection to check if it possible to remove a vertex from\nthe list. The router can send an veto for this.\nPer default it is not possible to remove any vertex from the PolyLine exceptional if any interactive\nrouter is installed.</p>\n        <p>Available since: <b>4.2.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPersistentAttributes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-getPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-getPersistentAttributes' class='name expandable'>getPersistentAttributes</a>( <span class='pre'>line, memento</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Tweak or enrich the polyline persistence data with routing information ...</div><div class='long'><p>Tweak or enrich the polyline persistence data with routing information</p>\n        <p>Available since: <b>2.10.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>line</span> : <a href=\"#!/api/draw2d.shape.basic.PolyLine\" rel=\"draw2d.shape.basic.PolyLine\" class=\"docClass\">draw2d.shape.basic.PolyLine</a><div class='sub-desc'>\n</div></li><li><span class='pre'>memento</span> : Object<div class='sub-desc'><p>The memento data of the polyline</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>connection</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback method if the router has been assigned to a connection. ...</div><div class='long'><p>Callback method if the router has been assigned to a connection.</p>\n        <p>Available since: <b>2.7.2</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The assigned connection</p>\n</div></li></ul></div></div></div><div id='method-onUninstall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>connection</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback method if the router has been removed from the connection. ...</div><div class='long'><p>Callback method if the router has been removed from the connection.</p>\n        <p>Available since: <b>2.7.2</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The related connection</p>\n</div></li></ul></div></div></div><div id='method-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-route' class='name expandable'>route</a>( <span class='pre'>connection, oldVertices</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Routes the Connection. ...</div><div class='long'><p>Routes the Connection.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The Connection to route</p>\n</div></li><li><span class='pre'>oldVertices</span> : <a href=\"#!/api/draw2d.util.ArrayList\" rel=\"draw2d.util.ArrayList\" class=\"docClass\">draw2d.util.ArrayList</a><div class='sub-desc'><p>old/existing vertices of the Connection</p>\n</div></li></ul></div></div></div><div id='method-setPersistentAttributes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-setPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-setPersistentAttributes' class='name expandable'>setPersistentAttributes</a>( <span class='pre'>memento</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set the attributes for the polyline with routing information ...</div><div class='long'><p>set the attributes for the polyline with routing information</p>\n        <p>Available since: <b>2.10.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>memento</span> : Object<div class='sub-desc'><p>the JSON data to read</p>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"name":"draw2d.layout.connection.ConnectionRouter","id":"class-draw2d.layout.connection.ConnectionRouter","parentMixins":[],"subclasses":["draw2d.layout.connection.DirectRouter","draw2d.layout.connection.ManhattanConnectionRouter","draw2d.layout.connection.MazeConnectionRouter","draw2d.layout.connection.VertexRouter"],"aliases":{}});