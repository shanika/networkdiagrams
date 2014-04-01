Ext.data.JsonP.draw2d_layout_connection_InteractiveManhattanConnectionRouter({"requires":[],"short_doc":"Route the connection in an Manhattan style and add resize handles to all vertex for interactive alignment of the\nrout...","uses":[],"superclasses":["draw2d.layout.connection.ConnectionRouter","draw2d.layout.connection.ManhattanConnectionRouter"],"extends":"draw2d.layout.connection.ManhattanConnectionRouter","alternateClassNames":[],"mixins":[],"tagname":"class","meta":{},"files":[{"href":"InteractiveManhattanConnectionRouter.html#draw2d-layout-connection-InteractiveManhattanConnectionRouter","filename":"InteractiveManhattanConnectionRouter.js"}],"component":false,"members":[{"owner":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"draw2d.layout.connection.ManhattanConnectionRouter","tagname":"method","meta":{"private":true},"name":"_route","id":"method-_route"},{"owner":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","tagname":"method","meta":{},"name":"canRemoveSegmentAt","id":"method-canRemoveSegmentAt"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{},"name":"canRemoveVertexAt","id":"method-canRemoveVertexAt"},{"owner":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","tagname":"method","meta":{},"name":"getPersistentAttributes","id":"method-getPersistentAttributes"},{"owner":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","tagname":"method","meta":{},"name":"halfRoute","id":"method-halfRoute"},{"owner":"draw2d.layout.connection.ManhattanConnectionRouter","tagname":"method","meta":{"template":true},"name":"onInstall","id":"method-onInstall"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{"template":true},"name":"onUninstall","id":"method-onUninstall"},{"owner":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","tagname":"method","meta":{},"name":"route","id":"method-route"},{"owner":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","tagname":"method","meta":{},"name":"setPersistentAttributes","id":"method-setPersistentAttributes"}],"author":[{"email":null,"tagname":"author","name":"Andreas Herz"}],"autodetected":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='docClass'>draw2d.layout.connection.ConnectionRouter</a><div class='subclass '><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter' rel='draw2d.layout.connection.ManhattanConnectionRouter' class='docClass'>draw2d.layout.connection.ManhattanConnectionRouter</a><div class='subclass '><strong>draw2d.layout.connection.InteractiveManhattanConnectionRouter</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/InteractiveManhattanConnectionRouter.html#draw2d-layout-connection-InteractiveManhattanConnectionRouter' target='_blank'>InteractiveManhattanConnectionRouter.js</a></div></pre><div class='doc-contents'><p>Route the connection in an Manhattan style and add resize handles to all vertex for interactive alignment of the\nrouting.</p>\n        <p>Available since: <b>4.0.2</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.InteractiveManhattanConnectionRouter'>draw2d.layout.connection.InteractiveManhattanConnectionRouter</span><br/><a href='source/InteractiveManhattanConnectionRouter.html#draw2d-layout-connection-InteractiveManhattanConnectionRouter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.connection.InteractiveManhattanConnectionRouter-method-constructor' class='name expandable'>draw2d.layout.connection.InteractiveManhattanConnectionRouter</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.layout.connection.InteractiveManhattanConnectionRouter\" rel=\"draw2d.layout.connection.InteractiveManhattanConnectionRouter\" class=\"docClass\">draw2d.layout.connection.InteractiveManhattanConnectionRouter</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new Router object. ...</div><div class='long'><p>Creates a new Router object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.connection.InteractiveManhattanConnectionRouter\" rel=\"draw2d.layout.connection.InteractiveManhattanConnectionRouter\" class=\"docClass\">draw2d.layout.connection.InteractiveManhattanConnectionRouter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ManhattanConnectionRouter-method-constructor\" rel=\"draw2d.layout.connection.ManhattanConnectionRouter-method-constructor\" class=\"docClass\">draw2d.layout.connection.ManhattanConnectionRouter.constructor</a></p></div></div></div><div id='method-_route' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter' rel='draw2d.layout.connection.ManhattanConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ManhattanConnectionRouter</a><br/><a href='source/ManhattanConnectionRouter.html#draw2d-layout-connection-ManhattanConnectionRouter-method-_route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter-method-_route' class='name expandable'>_route</a>( <span class='pre'>conn, fromPt, fromDir, toPt, toDir</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Internal routing algorithm. ...</div><div class='long'><p>Internal routing algorithm.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromDir</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>toPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>toDir</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-canRemoveSegmentAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.InteractiveManhattanConnectionRouter'>draw2d.layout.connection.InteractiveManhattanConnectionRouter</span><br/><a href='source/InteractiveManhattanConnectionRouter.html#draw2d-layout-connection-InteractiveManhattanConnectionRouter-method-canRemoveSegmentAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.InteractiveManhattanConnectionRouter-method-canRemoveSegmentAt' class='name expandable'>canRemoveSegmentAt</a>( <span class='pre'>index</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback method for the PolyLine or Connection to verify that a segment is deletable. ...</div><div class='long'><p>Callback method for the PolyLine or Connection to verify that a segment is deletable.</p>\n        <p>Available since: <b>4.2.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter-method-canRemoveSegmentAt\" rel=\"draw2d.layout.connection.ConnectionRouter-method-canRemoveSegmentAt\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter.canRemoveSegmentAt</a></p></div></div></div><div id='method-canRemoveVertexAt' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-canRemoveVertexAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-canRemoveVertexAt' class='name expandable'>canRemoveVertexAt</a>( <span class='pre'>index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback method for the PolyLine or Connection to check if it possible to remove a vertex from\nthe list. ...</div><div class='long'><p>Callback method for the PolyLine or Connection to check if it possible to remove a vertex from\nthe list. The router can send an veto for this.\nPer default it is not possible to remove any vertex from the PolyLine exceptional if any interactive\nrouter is installed.</p>\n        <p>Available since: <b>4.2.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPersistentAttributes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.InteractiveManhattanConnectionRouter'>draw2d.layout.connection.InteractiveManhattanConnectionRouter</span><br/><a href='source/InteractiveManhattanConnectionRouter.html#draw2d-layout-connection-InteractiveManhattanConnectionRouter-method-getPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.InteractiveManhattanConnectionRouter-method-getPersistentAttributes' class='name expandable'>getPersistentAttributes</a>( <span class='pre'>line, memento</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Tweak or enrich the polyline persistence data with routing information ...</div><div class='long'><p>Tweak or enrich the polyline persistence data with routing information</p>\n        <p>Available since: <b>2.10.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>line</span> : <a href=\"#!/api/draw2d.shape.basic.PolyLine\" rel=\"draw2d.shape.basic.PolyLine\" class=\"docClass\">draw2d.shape.basic.PolyLine</a><div class='sub-desc'>\n</div></li><li><span class='pre'>memento</span> : Object<div class='sub-desc'><p>The memento data of the polyline</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter-method-getPersistentAttributes\" rel=\"draw2d.layout.connection.ConnectionRouter-method-getPersistentAttributes\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter.getPersistentAttributes</a></p></div></div></div><div id='method-halfRoute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.InteractiveManhattanConnectionRouter'>draw2d.layout.connection.InteractiveManhattanConnectionRouter</span><br/><a href='source/InteractiveManhattanConnectionRouter.html#draw2d-layout-connection-InteractiveManhattanConnectionRouter-method-halfRoute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.InteractiveManhattanConnectionRouter-method-halfRoute' class='name expandable'>halfRoute</a>( <span class='pre'>conn, oldVertices</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The routing algorithm if the user has changed at least on of the vertices manually. ...</div><div class='long'><p>The routing algorithm if the user has changed at least on of the vertices manually.\nThis kind of routing just align the start and end vertices to the new source/target port\nlocation.\nThe vertices between keep untouched. Modification of this vertices are done by the\n<a href=\"#!/api/draw2d.policy.line.OrthogonalSelectionFeedbackPolicy\" rel=\"draw2d.policy.line.OrthogonalSelectionFeedbackPolicy\" class=\"docClass\">draw2d.policy.line.OrthogonalSelectionFeedbackPolicy</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the connection to route</p>\n</div></li><li><span class='pre'>oldVertices</span> : <a href=\"#!/api/draw2d.util.ArrayList\" rel=\"draw2d.util.ArrayList\" class=\"docClass\">draw2d.util.ArrayList</a><div class='sub-desc'><p>the vertices of the routing before</p>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter' rel='draw2d.layout.connection.ManhattanConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ManhattanConnectionRouter</a><br/><a href='source/ManhattanConnectionRouter.html#draw2d-layout-connection-ManhattanConnectionRouter-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>connection</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback method if the router has been assigned to a connection. ...</div><div class='long'><p>Callback method if the router has been assigned to a connection.</p>\n        <p>Available since: <b>2.7.2</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The assigned connection</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter-method-onInstall\" rel=\"draw2d.layout.connection.ConnectionRouter-method-onInstall\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter.onInstall</a></p></div></div></div><div id='method-onUninstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>connection</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback method if the router has been removed from the connection. ...</div><div class='long'><p>Callback method if the router has been removed from the connection.</p>\n        <p>Available since: <b>2.7.2</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The related connection</p>\n</div></li></ul></div></div></div><div id='method-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.InteractiveManhattanConnectionRouter'>draw2d.layout.connection.InteractiveManhattanConnectionRouter</span><br/><a href='source/InteractiveManhattanConnectionRouter.html#draw2d-layout-connection-InteractiveManhattanConnectionRouter-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.InteractiveManhattanConnectionRouter-method-route' class='name expandable'>route</a>( <span class='pre'>conn, oldVertices</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Layout the hands over connection in a manhattan like layout ...</div><div class='long'><p>Layout the hands over connection in a manhattan like layout</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the connection to layout</p>\n</div></li><li><span class='pre'>oldVertices</span> : <a href=\"#!/api/draw2d.util.ArrayList\" rel=\"draw2d.util.ArrayList\" class=\"docClass\">draw2d.util.ArrayList</a><div class='sub-desc'><p>old/existing vertices of the Connection</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ManhattanConnectionRouter-method-route\" rel=\"draw2d.layout.connection.ManhattanConnectionRouter-method-route\" class=\"docClass\">draw2d.layout.connection.ManhattanConnectionRouter.route</a></p></div></div></div><div id='method-setPersistentAttributes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.InteractiveManhattanConnectionRouter'>draw2d.layout.connection.InteractiveManhattanConnectionRouter</span><br/><a href='source/InteractiveManhattanConnectionRouter.html#draw2d-layout-connection-InteractiveManhattanConnectionRouter-method-setPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.InteractiveManhattanConnectionRouter-method-setPersistentAttributes' class='name expandable'>setPersistentAttributes</a>( <span class='pre'>memento</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set the attributes for the polyline with routing information of the interactive manhattan router. ...</div><div class='long'><p>set the attributes for the polyline with routing information of the interactive manhattan router.</p>\n        <p>Available since: <b>4..0.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>memento</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter-method-setPersistentAttributes\" rel=\"draw2d.layout.connection.ConnectionRouter-method-setPersistentAttributes\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter.setPersistentAttributes</a></p></div></div></div></div></div></div></div>","mixedInto":[],"since":"4.0.2","name":"draw2d.layout.connection.InteractiveManhattanConnectionRouter","id":"class-draw2d.layout.connection.InteractiveManhattanConnectionRouter","parentMixins":[],"subclasses":[],"aliases":{}});