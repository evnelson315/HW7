var trainData = new Firebase("https://shiningtimestation.firebaseio.com/");

// 2. Button for adding Employees
$("#addtrainBtn").on("click", function(){

	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var trainDestination = $("#trainDestinationInput").val().trim();
	var trainTime = $("#trainTimeInput").val().trim(); 
	var trainMin = $("#trainMinInput").val().trim();
	var minutesToBoard;

	// Creates local "temporary" object for holding train data
	var newtrain = {
		name:  trainName,
		destination: trainDestination,
		initialTime: trainTime,
		minutes: trainMin
		 
	}

	// Uploads train data to the database
	trainData.push(newtrain);

	// Logs everything to console
	console.log(newtrain.name);
	console.log(newtrain.destination);
	console.log(newtrain.initialTime);
	console.log(newtrain.minutes)

	// Alert
	alert("Train successfully added");

	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#trainDestinationInput").val("");
	$("#trainTimeInput").val("");
	$("#trainMinInput").val("");

	// Prevents moving to new page
	return false;
});


// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
trainData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var trainName = childSnapshot.val().name;
	var trainDestination = childSnapshot.val().destination;
	var trainTime = childSnapshot.val().initialTime;
	var trainMin = childSnapshot.val().minutes;

	// Employee Info
	console.log(trainName);
	console.log(trainDestination);
	console.log(trainTime);
	console.log(trainMin);




	// // To calculate the next train time:

		// convert train start time to decimal (ex. 8:45am = 8.75)
		// multiply train start time by 60 to get minutes ( 8. 75 x 60 = 525)

		// convert current  *military* time to decimal (ex. 17:30 = 17.5)
		// multiply current military time by 60 to get minutes ( 17.5 x 60 = 1050)

		// subtract train start time from current time to get "divisible minutes"
		// 	1050 - 525 = 525min


		// divide "divisible minutes" by 60 to find out how many times it has run already

		// 	525min / 60 = 8.75

		// subtract the decimal from 1

		// 	1 - .75

		// then multiply by 60 to get time to minutesToBoard

		// 	.25 x 60 = 15

		// Add minutesToBoard to currentTime to get nextTrainTime

		// in this case 15 minutes plus current time would make my next train come at 5:45pm



	// Add each train's data into the table
	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainMin + "</td><td>" + trainTime + "</td>");

});


//