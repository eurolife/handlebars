$(function() {
	//var shoesData = [{name:"Nike", price:199.00 }, {name:"Loafers", price:59.00 }, {name:"Wing Tip", price:259.00 }];
	var shoesData = {allShoes:[{name:"Nike", price:199.00, color:"black", size:10 }, {name:"Loafers", price:59.00, color:"blue", size:9 }, {name:"Wing Tip", price:259.00, color:"brown", size:11 }]};

	/* function updateAllShoes(shoes) {
		var theHTMLListOfShoes = "";

		shoesData.forEach (function (eachShoe) {
			theHTMLListOfShoes += '<li class="shoes">' + '<a href="/' + eachShoe.name.toLowerCase() + '">' + eachShoe.name + ' -- Price: ' + eachShoe.price + '</a></li>';
		});
		return theHTMLListOfShoes;
	}
	$(".shoesNav").append(updateAllShoes(shoesData)); */

	//Get the HTML from the template   in the script tag
	var theTemplateScript = $("#shoe-template").html();

	// compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);
	Handlebars.registerPartial("description", $("#shoe-description").html());
	$(".shoesNav").append(theTemplate(shoesData));
});