//Given a total due and an array representing the amount of change in your pocket, //etermine whether or not you are able to pay for the item. Change will always be //represented in the following order: quarters, dimes, nickels, pennies.



function changeEnough(change, amountDue) {
	let wallet = 0;
	let quarters = change[0] * 0.25;
	let dimes = change[1] * 0.10;
	let nickles = change[2] * 0.05;
	let pennies = change[3] * 0.01;
	wallet = quarters + dimes + nickles + pennies;
	if(wallet >= amountDue){
		return true;
	}else{
		return false;
	}
}