Ext.data.JsonP.draw2d_command_CommandReplaceVertices({"requires":[],"uses":[],"superclasses":["draw2d.command.Command"],"extends":"draw2d.command.Command","alternateClassNames":[],"mixins":[],"tagname":"class","meta":{},"files":[{"href":"CommandReplaceVertices.html#draw2d-command-CommandReplaceVertices","filename":"CommandReplaceVertices.js"}],"component":false,"members":[{"owner":"draw2d.command.CommandReplaceVertices","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"draw2d.command.CommandReplaceVertices","tagname":"method","meta":{},"name":"canExecute","id":"method-canExecute"},{"owner":"draw2d.command.Command","tagname":"method","meta":{"template":true},"name":"cancel","id":"method-cancel"},{"owner":"draw2d.command.CommandReplaceVertices","tagname":"method","meta":{},"name":"execute","id":"method-execute"},{"owner":"draw2d.command.Command","tagname":"method","meta":{},"name":"getLabel","id":"method-getLabel"},{"owner":"draw2d.command.CommandReplaceVertices","tagname":"method","meta":{},"name":"redo","id":"method-redo"},{"owner":"draw2d.command.CommandReplaceVertices","tagname":"method","meta":{},"name":"undo","id":"method-undo"}],"author":[{"email":null,"tagname":"author","name":"Andreas Herz"}],"autodetected":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.command.Command' rel='draw2d.command.Command' class='docClass'>draw2d.command.Command</a><div class='subclass '><strong>draw2d.command.CommandReplaceVertices</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/CommandReplaceVertices.html#draw2d-command-CommandReplaceVertices' target='_blank'>CommandReplaceVertices.js</a></div></pre><div class='doc-contents'><p>Replace the vertices of a polyline.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReplaceVertices'>draw2d.command.CommandReplaceVertices</span><br/><a href='source/CommandReplaceVertices.html#draw2d-command-CommandReplaceVertices-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.command.CommandReplaceVertices-method-constructor' class='name expandable'>draw2d.command.CommandReplaceVertices</a>( <span class='pre'>line, originalVertices, newVertices</span> ) : <a href=\"#!/api/draw2d.command.CommandReplaceVertices\" rel=\"draw2d.command.CommandReplaceVertices\" class=\"docClass\">draw2d.command.CommandReplaceVertices</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new Command objects which add a segment to a PolyLine / Polygon. ...</div><div class='long'><p>Create a new Command objects which add a segment to a PolyLine / Polygon.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>line</span> : <a href=\"#!/api/draw2d.shape.basic.PolyLine\" rel=\"draw2d.shape.basic.PolyLine\" class=\"docClass\">draw2d.shape.basic.PolyLine</a><div class='sub-desc'><p>the related line</p>\n</div></li><li><span class='pre'>originalVertices</span> : <a href=\"#!/api/draw2d.util.ArrayList\" rel=\"draw2d.util.ArrayList\" class=\"docClass\">draw2d.util.ArrayList</a><div class='sub-desc'><p>the original vertices of the polyline</p>\n</div></li><li><span class='pre'>newVertices</span> : <a href=\"#!/api/draw2d.util.ArrayList\" rel=\"draw2d.util.ArrayList\" class=\"docClass\">draw2d.util.ArrayList</a><div class='sub-desc'><p>the new vertices of the polyline</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.command.CommandReplaceVertices\" rel=\"draw2d.command.CommandReplaceVertices\" class=\"docClass\">draw2d.command.CommandReplaceVertices</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.command.Command-method-constructor\" rel=\"draw2d.command.Command-method-constructor\" class=\"docClass\">draw2d.command.Command.constructor</a></p></div></div></div><div id='method-canExecute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReplaceVertices'>draw2d.command.CommandReplaceVertices</span><br/><a href='source/CommandReplaceVertices.html#draw2d-command-CommandReplaceVertices-method-canExecute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.CommandReplaceVertices-method-canExecute' class='name expandable'>canExecute</a>( <span class='pre'></span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns [true] if the command can be execute and the execution of the\ncommand modify the model. ...</div><div class='long'><p>Returns [true] if the command can be execute and the execution of the\ncommand modify the model. A CommandMove with [startX,startX] == [endX,endY] should\nreturn false. <br>\nthe execution of the Command doesn't modify the model.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.command.Command-method-canExecute\" rel=\"draw2d.command.Command-method-canExecute\" class=\"docClass\">draw2d.command.Command.canExecute</a></p></div></div></div><div id='method-cancel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.command.Command' rel='draw2d.command.Command' class='defined-in docClass'>draw2d.command.Command</a><br/><a href='source/Command.html#draw2d-command-Command-method-cancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.Command-method-cancel' class='name expandable'>cancel</a>( <span class='pre'></span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Will be called if the user cancel the operation. ...</div><div class='long'><p>Will be called if the user cancel the operation.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n</div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReplaceVertices'>draw2d.command.CommandReplaceVertices</span><br/><a href='source/CommandReplaceVertices.html#draw2d-command-CommandReplaceVertices-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.CommandReplaceVertices-method-execute' class='name expandable'>execute</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Execute the command the first time ...</div><div class='long'><p>Execute the command the first time</p>\n<p>Overrides: <a href=\"#!/api/draw2d.command.Command-method-execute\" rel=\"draw2d.command.Command-method-execute\" class=\"docClass\">draw2d.command.Command.execute</a></p></div></div></div><div id='method-getLabel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.command.Command' rel='draw2d.command.Command' class='defined-in docClass'>draw2d.command.Command</a><br/><a href='source/Command.html#draw2d-command-Command-method-getLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.Command-method-getLabel' class='name expandable'>getLabel</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a label of the Command. ...</div><div class='long'><p>Returns a label of the Command. e.g. \"move figure\".</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the label for this command</p>\n</div></li></ul></div></div></div><div id='method-redo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReplaceVertices'>draw2d.command.CommandReplaceVertices</span><br/><a href='source/CommandReplaceVertices.html#draw2d-command-CommandReplaceVertices-method-redo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.CommandReplaceVertices-method-redo' class='name expandable'>redo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Redo the move command after the user has undo this command ...</div><div class='long'><p>Redo the move command after the user has undo this command</p>\n<p>Overrides: <a href=\"#!/api/draw2d.command.Command-method-redo\" rel=\"draw2d.command.Command-method-redo\" class=\"docClass\">draw2d.command.Command.redo</a></p></div></div></div><div id='method-undo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReplaceVertices'>draw2d.command.CommandReplaceVertices</span><br/><a href='source/CommandReplaceVertices.html#draw2d-command-CommandReplaceVertices-method-undo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.CommandReplaceVertices-method-undo' class='name expandable'>undo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Undo the move command ...</div><div class='long'><p>Undo the move command</p>\n<p>Overrides: <a href=\"#!/api/draw2d.command.Command-method-undo\" rel=\"draw2d.command.Command-method-undo\" class=\"docClass\">draw2d.command.Command.undo</a></p></div></div></div></div></div></div></div>","mixedInto":[],"name":"draw2d.command.CommandReplaceVertices","id":"class-draw2d.command.CommandReplaceVertices","parentMixins":[],"subclasses":[],"aliases":{},"inheritable":true});