function askQuestions () {


	var firstName = prompt('What is your first name?');
	var lastName = prompt ('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log('User is named ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13) {
		console.log('User is a teenager');
	}
	 else {
		console.log('User is a child');
	}

	// var firstName = prompt ('What is your first name');

	if (firstName == "General" && lastName != "Assembly") {
		console.log('Hello General');
	}

	if (lastName === "Kadra") {
		console.log('Hi Kadra');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase(); 
	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'green' ||
		faveColour === 'yellow') {
		$('h1').css('color', faveColour);
	}

}

// When the page has loaded
$(function  () {

	// Hide the content
	$('h3').next().hide();

	// When the user clicks the image, ask questions
	$('img').on('click', askQuestions);

	// When the user clicks an H3
	$('h3').on('click', function () {

		// Toggle the next element
		$(this).next().slideToggle();

	});

});