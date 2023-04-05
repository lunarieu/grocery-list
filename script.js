let addFood=document.getElementById("item");
let addButton=document.getElementById("btn");
let addList=document.getElementById("list");

let groceryList=[];

addButton.addEventListener("click", addItem);

function addItem(){
	const newItem=addFood.value.trim();
	
	if(newItem !==" "){
		groceryList.push(newItem);
		addFood.value=" ";
		updateList();
	}
}
function deleteItem(event){
	const item=event.target.parentNode.firstChild.textContent;
	const index=groceryList.indexOf(item);
	groceryList.splice(index, 1);
	event.target.parentNode.remove();
}


function updateList(){
	
	addList.innerHTML=" ";
	
	for(let i=0;i<groceryList.length;i++){
		const li=document.createElement("li");
		const itemText=document.createTextNode(groceryList[i]);
		const removeBtn=document.createElement("button");
		removeBtn.addEventListener("click", function(event){
			deleteItem(event);
		});
		removeBtn.textContent="Remove";
		li.appendChild(itemText);
		li.appendChild(removeBtn);
		addList.appendChild(li);
		}
}