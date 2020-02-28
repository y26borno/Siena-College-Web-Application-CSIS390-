function makeTextNode(text) {
	return document.createTextNode(text);
}


function makeLabel(label, id) {
	var newLabel = document.createElement("label");
	if (id !== undefined && id != "") {
		newLabel.setAttribute("for", id);
	}
	newLabel.appendChild(makeTextNode(label));
	return newLabel;
}


function makeInput(type,id,value,label) {
	
	
	var newInput = document.createElement("input");
	var newDiv;
	if (type !== undefined && type != "") {
		newInput.setAttribute("type", type);
	}
	
	
	if (id !== undefined && id != "") {
		newInput.setAttribute("id", id);
	}
	
	if (value!== undefined && value != "") {
		newInput.setAttribute("name", value);
	}
	
	if (value!== undefined && value != "") {
		newInput.setAttribute("value", value);
	}
	
	
	if (label!== undefined && label != "") {
		var  newLabel= makeLabel(label, id);
		
		newDiv = document.createElement("div");
		newDiv.appendChild(newLabel);
		newDiv.appendChild(newInput);
		
	}
	
	
	return newDiv;
}