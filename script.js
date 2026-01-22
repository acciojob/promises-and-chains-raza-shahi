//your JS code here. If required.
const myForm = document.getElementById("form");

const button = document.getElementById("btn");

myForm.addEventListener('submit',(e)=>{
	const age = document.getElementById("age").value.trim();
const name = document.getElementById("name").value.trim();
	if (age === "" || name === "") {
		alert("Please enter valid details");
		e.preventDefault();
	}else{
		setTimeout(()=>{
			if (age>18) {
				alert("Welcome, John. You can vote.");
			}else{
				alert("Oh sorry Doe. You aren't old enough.");
			}
		},4000)
	}
})


