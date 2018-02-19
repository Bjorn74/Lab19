/**
 * 
 */

var total = 0;
var items = [];
var itemsConsole = [];
var pricesConsole = [];

function addItem(item) {
	var itemName;
	var price;
	switch (item) {
	case "cool":
		items.push("Cool Beans - One Pound $3.99 <br>");
		price = 3.99;
		itemName = "Cool Beans";
		break;
	case 'hill':
		items.push("Hill of Beans - One Pound $4.99 <br>");
		price = 4.99;
		itemName = "Hill of Beans";
		break;
	case 'spill':
		items.push("Spill the Beans - One Pound $7.80 <br>");
		price = 7.80;
		itemName = "Spill the Beans";
		break;
	case 'fool':
		items.push("Fool of Beans - One Pound $88.73 <br>");
		price = 88.73;
		itemName = "Fool of Beans";
		break;
	default:
		break;
	}

	total = total + price;
	total = (Math.round(total * 100));
	total = (total / 100);
	pricesConsole.push(price);
	itemsConsole.push(itemName);
	document.getElementById(1).innerHTML = "$" + total;
	document.getElementById(2).innerHTML = items;
	alert("You have added a pound of " + itemName);

}

function purchase() {
	console.log("Items Purchased   Prices");
	for (var i = 0; i < itemsConsole.length; i++) {
		console.log(itemsConsole[i] + "   $" + pricesConsole[i]);
	}
	console.log("Amount Due is $" + total)
alert("Total Due is $" + total)	;
}