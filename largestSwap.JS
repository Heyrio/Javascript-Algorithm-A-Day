//Write a function that takes a two-digit number and 
//determines if it's the largest of two possible digit swaps.

function largestSwap(num) {
	let a = num.toString().charAt(0).slice();
	let b = num.toString().charAt(1).slice();
	let ba = b + a;
	if(ba > num){
		return false;
	}else {
		return true;
	}
}