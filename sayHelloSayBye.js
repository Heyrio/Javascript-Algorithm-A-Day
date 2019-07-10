//Write a function that takes a string name and a number num (either 0 or 1) and 
//return "Hello" + name if num is 1, otherwise return "Bye" + name.

function sayHelloBye (name, num) {
	if(num === 0 ){
		return "Bye " + name.charAt(0).toUpperCase() + name.slice(1)
	}
	if(num === 1){
		 return "Hello " + name.charAt(0).toUpperCase() + name.slice(1)
		 }
}