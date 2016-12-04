// A diner object with:
// Name
// list of dishes (what they ate, and how much it cost)
// A method to add the total of the dishes
// A method to calculate tax for this diner
// A method to calculate the tip for this diner
// A bill object with:
// list of diners
// method to total and print the total of all diners, including tax
// method to total and print diners tips
// method to print a breakdown for each diner including their name, total, tax and tip
// Dummy data that creates:
// 1 bill
// 3 diners that are on the same bill
// 2 dishes for each diner
// Print the total for the bill
// Print the total tip for the waitress
// Print a breakdown for each person
// 
var Diner = function(name, dishesList) { 
	return {
		name: name,
		dishes: dishesList,
		addTotal: function() {
			return this.dishes.reduce(function(total, dish) {
				return total + dish.cost;
			}, 0);
		},
		calcTax: function() {
			var cost = this.addTotal();
			return cost * 0.06;
		},
		calcTip: function() {
			var cost = this.addTotal();
			return cost * 0.16
		},
	}
}

var Bill = function(diners) {
	return {	
		diners: diners,
		total: function() {
			var totalCost = this.diners.reduce(function(total, diner) {
				return total + diner.addTotal() + diner.calcTax();
			}, 0);
			console.log(totalCost.toFixed(2));
			return totalCost.toFixed(2);
		},
		totalTips: function() {
			var totalCost = this.diners.reduce(function(total, diner) {
				return total + diner.calcTip();
			}, 0);
			console.log(totalCost.toFixed(2));
			return totalCost.toFixed(2);
		},
		printDiner: function(diner) {
			string = `name: ${diner.name}, total: ${diner.addTotal().toFixed(2)} tax: ${diner.calcTax().toFixed(2)} tip: ${diner.calcTip().toFixed(2)}`;
			console.log(string);
		},
	}
}

var michael = Diner("Michael", 
	[{dish:"Beer", cost:3.50}, {dish: "Steak", cost:21.75}]);
var jem = Diner("Jem", 
	[{dish:"Wine", cost:6.00}, {dish: "Spaghetti", cost:13.99}]);
var tia = Diner("Tia",
	[{dish:"Cake", cost:4.25}, {dish: "Ravioli", cost:11.99}]);

var bill = Bill([jem, michael, tia]);
bill.total();
bill.totalTips();
bill.printDiner(jem);
bill.printDiner(michael);
bill.printDiner(tia);
