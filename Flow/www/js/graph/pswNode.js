// PswNode.js

function PswNode(pswType, edges, lineRep) {
	this.pswType = pswType; //door, sliding, open, etc, not currently supported, so we just default to door
	this.lineRep = lineRep; //2d line representation of the door

	GraphNode.call(this, "psw", edges, "psw");
}

PswNode.prototype = new GraphNode();
PswNode.prototype.constructor = PswNode;