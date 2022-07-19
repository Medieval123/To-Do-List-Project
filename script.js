var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
}

function listLength(){
	return item.Length;
}

function createListElement() {
	var li = document.createElement("li"); //This creates a "li"element
	li.appendChild(document.createTextNode(input.value));
	//This makes the text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //This Resets the text input field


	//BEGIN  STRIKETHROUGH
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH

	//DELETE BUTTON START
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("x"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	//END

	//ADD CLASS DELETE (DISPLAY:NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}

}

function addListAfterClick(){
	if (inputLength() > 0) { //Making sure that an empty input field does not create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength > 0 && event.which ===13) { //Confirms if you hit "enter"  13 == enter key's keycode
		createListElement();
	}
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);