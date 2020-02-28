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


function makeSelect(id,value,label) {
	
	
	var newSelect = document.createElement("select");
	var newDiv = document.createElement("div");;
	var  newLabel; 
	
	
	if (id !== undefined && id != "") {
		newSelect.setAttribute("id", id);
	}
	
	//if (value!== undefined && value != "") {
	//	newSelect.setAttribute("name", value);
	//}
	
	
	for (var i = 0; i < value.length;i++ ){
		var makeOption = document.createElement("option");
	if (value[i]!== undefined && value[i] != "") {
		makeOption.setAttribute("value", value[i]);
	}
	
	   makeOption.appendChild(makeTextNode(value[i]));
	   newSelect.appendChild(makeOption);
	}
	
	if (label!== undefined && label != "") {
		newLabel= makeLabel(label, id);
		newDiv.appendChild(newLabel);
		
		//newDiv = document.createElement("div");
		//newDiv.appendChild(newLabel);
		//newDiv.appendChild(newSelect);
		
	}
	
	
	//var  newLabel= makeLabel(label, id);
	newDiv.appendChild(newSelect);
	
	
	
	
	return newDiv;
}



