//A group of friends
// have decided to start a secret society. 
//The name will be the first letter of each of their names, sorted in 
//alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society.


function societyName(friends) {
	let arr = [];
	let answer = '';
	arr = friends.map((elm)=>{
		return elm.charAt(0);
	});
	arr.sort()
	arr.forEach((elm)=>{
		answer = answer + elm;
		
	});
	return answer;
}