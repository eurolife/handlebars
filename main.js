$(function() {
	// This tutorial is at http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/
	
	//var shoesData = [{name:"Nike", price:199.00 }, {name:"Loafers", price:59.00 }, {name:"Wing Tip", price:259.00 }];
	var shoesData = {allShoes:[{name:"Nike", price:199.00, color:"black", size:10 }, {name:"Loafers", price:59.00, color:"blue", size:9 }, {name:"Wing Tip", price:259.00, color:"brown", size:11 }]};
	var sitePages = {nav: [{name: "home", link: "index.html"}, {name: "about", link: "about.html"}, {name: "services", link: "services.html"}, {name: "contact", link: "contact.html"}]}
	
	//custom helper
	Handlebars.registerHelper('capitalize', function(str) {
		// str is the argument passed to the helper when called
    	str = str || '';
    	//return str.slice(0,1).toUpperCase() + str.slice(1);
    	return str.toUpperCase();
	});
	// block helper
	 Handlebars.registerHelper('uppercase', function(options) {

	    // "this" is the context that existed when calling the helper.

	    // The options object has a special function - fn. This is a
	    // compiled version of the template that is contained between the opening and closing
	    // blocks of this helper. To get a string, call fn with the context:

	    return options.fn(this).toUpperCase();

	  });

	//Get the HTML from the template   in the script tag
	var theTemplateScript = $("#shoe-template").html();
	var theNavScript = $("#navigation").html();


	// compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);
	Handlebars.registerPartial("description", $("#shoe-description").html());
	$(".shoesNav").append(theTemplate(shoesData));

	var theNavTemplate = Handlebars.compile(theNavScript);
	$(".main-nav").append(theNavTemplate(sitePages));
});


$(document).ready(function(){

	
});