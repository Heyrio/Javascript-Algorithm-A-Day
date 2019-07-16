//Create a function that takes in an array (slot machine outcome) and returns true //if all elements in the array are identical, and false otherwise. The array will 
//contain 4 elements.

function testJackpot(result) {
	let answer = [];
	let counter = 0;
	 answer = result.map((elm)=>{
		if(elm !== result[0]){
			counter += 1;
		}
	 	});
		if(counter > 0){
			return false;
		}
		return true;
}