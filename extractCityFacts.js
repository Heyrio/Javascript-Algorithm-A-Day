
//Create a function that takes an object as an argument and returns a string with facts about the city.
// The city facts will need to be extracted from the object's three properties:
// https://edabit.com/challenge/FzDAgSR84zeyRa278
function cityFacts(city) {
let tempV = city.name.toString() + " has a population of " + city.population.toString() +
		" and is situated in " + city.continent.toString();
	return tempV;
}
