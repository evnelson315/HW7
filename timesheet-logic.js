var employeeData = new Firebase("https://shiningtimestation.firebaseio.com/");

// 2. Button for adding Employees
$("#addtrainBtn").on("click", function(){

	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var trainDestination = $("#trainDestinationInput").val().trim();
	var trainFreq = $("#trainFreqInput").val().trim(); 
	var trainMin = $("#trainMinInput").val().trim();

	// Creates local "temporary" object for holding train data
	var newtrain = {
		name:  trainName,
		destination: trainDestination,
		frequency: trainFreq,
		minutes: trainMin
	}

	// Uploads train data to the database
	employeeData.push(newtrain);

	// Logs everything to console
	console.log(newtrain.name);
	console.log(newtrain.destination);
	console.log(newtrain.frequency);
	console.log(newtrain.minutes)

	// Alert
	alert("Train successfully added");

	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#trainDestinationInput").val("");
	$("#trainFreqInput").val("");
	$("#trainMinInput").val("");

	// Prevents moving to new page
	return false;
});


// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
employeeData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var trainName = childSnapshot.val().name;
	var trainDestination = childSnapshot.val().destination;
	var trainFreq = childSnapshot.val().frequency;
	var trainMin = childSnapshot.val().minutes;

	// Employee Info
	console.log(trainName);
	console.log(trainDestination);
	console.log(trainFreq);
	console.log(trainMin);

	// // Prettify the employee start
	// var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

	// // Calculate the months worked using hardcore math
	// // To calculate the months worked
	// var empMonths = moment().diff(moment.unix(empStart, 'X'), "months");
	// console.log(empMonths);
		// // Assumptions
		// var tFrequency = 3; 
		// var firstTime = "03:30"; // Time is 3:30 AM

		// // First Time (pushed back 1 year to make sure it comes before current time)
		// var firstTimeConverted = moment(firstTime,"hh:mm").subtract(1, "years");
		// console.log(firstTimeConverted);

		// // Current Time
		// var currentTime = moment();
		// console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

		// // Difference between the times
		// var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		// console.log("DIFFERENCE IN TIME: " + diffTime);

		// // Time apart (remainder)
		// var tRemainder = diffTime % tFrequency; 
		// console.log(tRemainder);

		// // Minute Until Train
		// var tMinutesTillTrain = tFrequency - tRemainder;
		// console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

		// // Next Train
		// var nextTrain = moment().add(tMinutesTillTrain, "minutes")
		// console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"))



	// Add each train's data into the table
	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFreq + "</td><td>" + trainMin + "</td>");

});


// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case