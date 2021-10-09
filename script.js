var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("#items li");
var del = document.querySelectorAll("li + .delete")

function inputLength() {
	return input.value.trim().length && input.value.length;
}

function additem(){
    var newitem = document.createElement("li");
    newitem.appendChild(document.createTextNode(input.value));
    newitem.addEventListener("click", toggleDone);
    ul.appendChild(newitem);
    input.value = "";

    let db = document.createElement("button");
    // db.innerHTML = "🗑️";
    db.classList.add("delete");
    db.appendChild(document.createTextNode("🗑️"));
    db.addEventListener("click", deleteItem);
    ul.appendChild(db);
}

function additemAfterClick(){
    if(inputLength() > 0)
        additem();
}

function additemAfterPress(event){
    if(inputLength() > 0 && event.keyCode === 13)
        additem();
    if(event.keyCode === 27)
        input.value = "";
}

function toggleDone() {
	event.target.classList.toggle("done");
}

function deleteItem() {
	event.target.previousElementSibling.remove();
	event.target.remove();
}

enter.addEventListener("click", additemAfterClick);
input.addEventListener("keypress", additemAfterPress);

for(let li of list) {
	li.addEventListener("click", toggleDone);
}
for(let db of del) {
	db.addEventListener("click", deleteItem);	
}