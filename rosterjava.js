//FUNCTIONS TO OUTPUT THE EMPLOYEES

$(function Emp1(){

// Get a database reference to our posts
var employeeref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp1");

// Attach an asynchronous callback to read the data at our posts reference
employeeref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

 $(function Emp2(){

// Get a database reference to our posts
var employee2ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp2");

// Attach an asynchronous callback to read the data at our posts reference
employee2ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

  $(function Emp3(){

// Get a database reference to our posts
var employee3ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp3");

// Attach an asynchronous callback to read the data at our posts reference
employee3ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp3').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

   $(function Emp4(){

// Get a database reference to our posts
var employee4ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp4");

// Attach an asynchronous callback to read the data at our posts reference
employee4ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp4').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

   $(function Emp5(){

// Get a database reference to our posts
var employee5ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp5");

// Attach an asynchronous callback to read the data at our posts reference
employee5ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp5').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

 //ROSTERS SAVING 
 //ROSTERS FOR MONDAYS
 $(function Monday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateMondayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date1Field = $('#date1Input');
  var emp1put1Field = $('#emp1Input1');
  var emp2put1Field = $('#emp2Input1');
  var emp3put1Field = $('#emp3Input1');
  var emp4put1Field = $('#emp4Input1');
  var emp5put1Field = $('#emp5Input1');
  var enter1Field = $('#enter1');

  // LISTEN FOR KEYPRESS EVENT
  enter1Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateMonday = date1Field.val();
      var emp1put1 = emp1put1Field.val();
      var emp2put1 = emp2put1Field.val();
      var emp3put1 = emp3put1Field.val();
      var emp4put1 = emp4put1Field.val();
      var emp5put1 = emp5put1Field.val();
      var enter1 = enter1Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
		var obj1 = {};
		obj1[dateMonday] = {
    	emp1:emp1put1, 
    	emp2:emp2put1, 
    	emp3:emp3put1, 
    	emp4:emp4put1, 
    	emp5:emp5put1
		}

		dateMondayRef.child(dateMonday).update({
      emp1:emp1put1, 
    	emp2:emp2put1, 
    	emp3:emp3put1, 
    	emp4:emp4put1, 
    	emp5:emp5put1});
		enter1Field.val('');
    	}
  	});

});

//REFERENCE FOR TUESDAY
$(function Tuesday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateTuesdayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date2Field = $('#date2Input');
  var emp1put2Field = $('#emp1Input2');
  var emp2put2Field = $('#emp2Input2');
  var emp3put2Field = $('#emp3Input2');
  var emp4put2Field = $('#emp4Input2');
  var emp5put2Field = $('#emp5Input2');
  var enter2Field = $('#enter2');

  // LISTEN FOR KEYPRESS EVENT
  enter2Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateTuesday = date2Field.val();
      var emp1put2 = emp1put2Field.val();
      var emp2put2 = emp2put2Field.val();
      var emp3put2 = emp3put2Field.val();
      var emp4put2 = emp4put2Field.val();
      var emp5put2 = emp5put2Field.val();
      var enter2 = enter2Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
		var obj2 = {};
		obj2[dateTuesday] = {
    	emp1:emp1put2, 
    	emp2:emp2put2,
    	emp3:emp3put2, 
    	emp4:emp4put2, 
    	emp5:emp5put2
		}

		dateTuesdayRef.child(dateTuesday).update({emp1:emp1put2, 
    	emp2:emp2put2, 
    	emp3:emp3put2, 
    	emp4:emp4put2, 
    	emp5:emp5put2});
		enter2Field.val('');
    	}
  	});

});

//REFERENCE FOR WEDNESDAY
$(function Wednesday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateWednesdayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date3Field = $('#date3Input');
  var emp1put3Field = $('#emp1Input3');
  var emp2put3Field = $('#emp2Input3');
  var emp3put3Field = $('#emp3Input3');
  var emp4put3Field = $('#emp4Input3');
  var emp5put3Field = $('#emp5Input3');
  var enter3Field = $('#enter3');

  // LISTEN FOR KEYPRESS EVENT
  enter3Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateWednesday = date3Field.val();
      var emp1put3 = emp1put3Field.val();
      var emp2put3 = emp2put3Field.val();
      var emp3put3 = emp3put3Field.val();
      var emp4put3 = emp4put3Field.val();
      var emp5put3 = emp5put3Field.val();
      var enter3 = enter3Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
		var obj3 = {};
		obj3[dateWednesday] = {
    	emp1:emp1put3, 
    	emp2:emp2put3,
    	emp3:emp3put3, 
    	emp4:emp4put3, 
    	emp5:emp5put3
		}

		dateWednesdayRef.child(dateWednesday).update({emp1:emp1put3, 
    	emp2:emp2put3, 
    	emp3:emp3put3, 
    	emp4:emp4put3, 
    	emp5:emp5put3});
		enter3Field.val('');
    	}
  	});

});

//REFERENCE TO THURSDAY
$(function Thurday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateThursdayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date4Field = $('#date4Input');
  var emp1put4Field = $('#emp1Input4');
  var emp2put4Field = $('#emp2Input4');
  var emp3put4Field = $('#emp3Input4');
  var emp4put4Field = $('#emp4Input4');
  var emp5put4Field = $('#emp5Input4');
  var enter4Field = $('#enter4');

  // LISTEN FOR KEYPRESS EVENT
  enter4Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateThursday = date4Field.val();
      var emp1put4 = emp1put4Field.val();
      var emp2put4 = emp2put4Field.val();
      var emp3put4 = emp3put4Field.val();
      var emp4put4 = emp4put4Field.val();
      var emp5put4 = emp5put4Field.val();
      var enter4 = enter4Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
		var obj4 = {};
		obj4[dateThursday] = {
    	emp1:emp1put4, 
    	emp2:emp2put4,
    	emp3:emp3put4, 
    	emp4:emp4put4, 
    	emp5:emp5put4
		}

		dateThursdayRef.child(dateThursday).update({
		emp1:emp1put4, 
    	emp2:emp2put4, 
    	emp3:emp3put4, 
    	emp4:emp4put4, 
    	emp5:emp5put4});
		enter4Field.val('');
    	}
  	});

});

//REFERENCE FOR FRIDAY
$(function Friday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateFridayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date5Field = $('#date5Input');
  var emp1put5Field = $('#emp1Input5');
  var emp2put5Field = $('#emp2Input5');
  var emp3put5Field = $('#emp3Input5');
  var emp4put5Field = $('#emp4Input5');
  var emp5put5Field = $('#emp5Input5');
  var enter5Field = $('#enter5');

  // LISTEN FOR KEYPRESS EVENT
  enter5Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateFriday = date5Field.val();
      var emp1put5 = emp1put5Field.val();
      var emp2put5 = emp2put5Field.val();
      var emp3put5 = emp3put5Field.val();
      var emp4put5 = emp4put5Field.val();
      var emp5put5 = emp5put5Field.val();
      var enter5 = enter5Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
		var obj5 = {};
		obj5[dateFriday] = {
    	emp1:emp1put5, 
    	emp2:emp2put5,
    	emp3:emp3put5, 
    	emp4:emp4put5, 
    	emp5:emp5put5
		}

		dateFridayRef.child(dateFriday).update({
		emp1:emp1put5, 
    	emp2:emp2put5, 
    	emp3:emp3put5, 
    	emp4:emp4put5, 
    	emp5:emp5put5});
		enter5Field.val('');
    	}
  	});

});

//REFERENCE FOR SATURDAY
$(function Saturday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateSaturdayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date6Field = $('#date6Input');
  var emp1put6Field = $('#emp1Input6');
  var emp2put6Field = $('#emp2Input6');
  var emp3put6Field = $('#emp3Input6');
  var emp4put6Field = $('#emp4Input6');
  var emp5put6Field = $('#emp5Input6');
  var enter6Field = $('#enter6');

  // LISTEN FOR KEYPRESS EVENT
  enter6Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateSaturday = date6Field.val();
      var emp1put6 = emp1put6Field.val();
      var emp2put6 = emp2put6Field.val();
      var emp3put6 = emp3put6Field.val();
      var emp4put6 = emp4put6Field.val();
      var emp5put6 = emp5put6Field.val();
      var enter6 = enter6Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
		var obj6 = {};
		obj6[dateSaturday] = {
    	emp1:emp1put6, 
    	emp2:emp2put6,
    	emp3:emp3put6, 
    	emp4:emp4put6, 
    	emp5:emp5put6
		}

		dateSaturdayRef.child(dateSaturday).update({
		emp1:emp1put6, 
    	emp2:emp2put6, 
    	emp3:emp3put6, 
    	emp4:emp4put6, 
    	emp5:emp5put6});
		enter6Field.val('');
    	}
  	});

});

//REFERENCE FOR SUNDAY
$(function Sunday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateSundayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date7Field = $('#date7Input');
  var emp1put7Field = $('#emp1Input7');
  var emp2put7Field = $('#emp2Input7');
  var emp3put7Field = $('#emp3Input7');
  var emp4put7Field = $('#emp4Input7');
  var emp5put7Field = $('#emp5Input7');
  var enter7Field = $('#enter7');

  // LISTEN FOR KEYPRESS EVENT
  enter7Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateSunday = date7Field.val();
      var emp1put7 = emp1put7Field.val();
      var emp2put7 = emp2put7Field.val();
      var emp3put7 = emp3put7Field.val();
      var emp4put7 = emp4put7Field.val();
      var emp5put7 = emp5put7Field.val();
      var enter7 = enter7Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
		var obj7 = {};
		obj7[dateSunday] = {
    	emp1:emp1put7, 
    	emp2:emp2put7,
    	emp3:emp3put7, 
    	emp4:emp4put7, 
    	emp5:emp5put7
		}

		dateSundayRef.child(dateSunday).update({
		emp1:emp1put7, 
    	emp2:emp2put7, 
    	emp3:emp3put7, 
    	emp4:emp4put7, 
    	emp5:emp5put7});
		enter7Field.val('');
    	}
  	});

});

// START OF 2401.php DATES //

$(function Date9(){

// Get a database reference to our posts
var Date9ref = new Firebase("https://shiftsapp.firebaseio.com/date/0905");

// Attach an asynchronous callback to read the data at our posts reference
Date9ref.on("value", function(snapshot) {
  $('#Date9').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date10(){

// Get a database reference to our posts
var Date10ref = new Firebase("https://shiftsapp.firebaseio.com/date/1005");

// Attach an asynchronous callback to read the data at our posts reference
Date10ref.on("value", function(snapshot) {
  $('#Date10').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date11(){

// Get a database reference to our posts
var Date11ref = new Firebase("https://shiftsapp.firebaseio.com/date/1105");

// Attach an asynchronous callback to read the data at our posts reference
Date11ref.on("value", function(snapshot) {
  $('#Date11').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date12(){

// Get a database reference to our posts
var Date12ref = new Firebase("https://shiftsapp.firebaseio.com/date/1205");

// Attach an asynchronous callback to read the data at our posts reference
Date12ref.on("value", function(snapshot) {
  $('#Date12').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date13(){

// Get a database reference to our posts
var Date13ref = new Firebase("https://shiftsapp.firebaseio.com/date/1305");

// Attach an asynchronous callback to read the data at our posts reference
Date13ref.on("value", function(snapshot) {
  $('#Date13').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date14(){

// Get a database reference to our posts
var Date14ref = new Firebase("https://shiftsapp.firebaseio.com/date/1405");

// Attach an asynchronous callback to read the data at our posts reference
Date14ref.on("value", function(snapshot) {
  $('#Date14').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date15(){

// Get a database reference to our posts
var Date15ref = new Firebase("https://shiftsapp.firebaseio.com/date/1505");

// Attach an asynchronous callback to read the data at our posts reference
Date15ref.on("value", function(snapshot) {
  $('#Date15').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function DateEnd1(){

// Get a database reference to our posts
var DateEnd1ref = new Firebase("https://shiftsapp.firebaseio.com/date/1505");

// Attach an asynchronous callback to read the data at our posts reference
DateEnd1ref.on("value", function(snapshot) {
  $('#DateEnd1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

//END OF 2401.php DATES //
// START OF 3101.php DATES //

$(function Date16(){

// Get a database reference to our posts
var Date1ref = new Firebase("https://shiftsapp.firebaseio.com/date/1605");

// Attach an asynchronous callback to read the data at our posts reference
Date1ref.on("value", function(snapshot) {
  $('#Date1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date17(){

// Get a database reference to our posts
var Date2ref = new Firebase("https://shiftsapp.firebaseio.com/date/1705");

// Attach an asynchronous callback to read the data at our posts reference
Date2ref.on("value", function(snapshot) {
  $('#Date2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date18(){

// Get a database reference to our posts
var Date3ref = new Firebase("https://shiftsapp.firebaseio.com/date/1805");

// Attach an asynchronous callback to read the data at our posts reference
Date3ref.on("value", function(snapshot) {
  $('#Date3').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date19(){

// Get a database reference to our posts
var Date4ref = new Firebase("https://shiftsapp.firebaseio.com/date/1905");

// Attach an asynchronous callback to read the data at our posts reference
Date4ref.on("value", function(snapshot) {
  $('#Date4').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date20(){

// Get a database reference to our posts
var Date5ref = new Firebase("https://shiftsapp.firebaseio.com/date/2005");

// Attach an asynchronous callback to read the data at our posts reference
Date5ref.on("value", function(snapshot) {
  $('#Date5').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date21(){

// Get a database reference to our posts
var Date6ref = new Firebase("https://shiftsapp.firebaseio.com/date/2105");

// Attach an asynchronous callback to read the data at our posts reference
Date6ref.on("value", function(snapshot) {
  $('#Date6').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date22(){

// Get a database reference to our posts
var Date7ref = new Firebase("https://shiftsapp.firebaseio.com/date/2205");

// Attach an asynchronous callback to read the data at our posts reference
Date7ref.on("value", function(snapshot) {
  $('#Date7').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function DateEnd(){

// Get a database reference to our posts
var DateEndref = new Firebase("https://shiftsapp.firebaseio.com/date/2205");

// Attach an asynchronous callback to read the data at our posts reference
DateEndref.on("value", function(snapshot) {
  $('#DateEnd').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

//END OF 3101.php DATES //
// START OF 0702.php DATES //

$(function Date23(){

// Get a database reference to our posts
var Date23ref = new Firebase("https://shiftsapp.firebaseio.com/date/2305");

// Attach an asynchronous callback to read the data at our posts reference
Date23ref.on("value", function(snapshot) {
  $('#Date23').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date24(){

// Get a database reference to our posts
var Date24ref = new Firebase("https://shiftsapp.firebaseio.com/date/2405");

// Attach an asynchronous callback to read the data at our posts reference
Date24ref.on("value", function(snapshot) {
  $('#Date24').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date25(){

// Get a database reference to our posts
var Date25ref = new Firebase("https://shiftsapp.firebaseio.com/date/2505");

// Attach an asynchronous callback to read the data at our posts reference
Date25ref.on("value", function(snapshot) {
  $('#Date25').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date26(){

// Get a database reference to our posts
var Date26ref = new Firebase("https://shiftsapp.firebaseio.com/date/2605");

// Attach an asynchronous callback to read the data at our posts reference
Date26ref.on("value", function(snapshot) {
  $('#Date26').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date27(){

// Get a database reference to our posts
var Date27ref = new Firebase("https://shiftsapp.firebaseio.com/date/2705");

// Attach an asynchronous callback to read the data at our posts reference
Date27ref.on("value", function(snapshot) {
  $('#Date27').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date28(){

// Get a database reference to our posts
var Date28ref = new Firebase("https://shiftsapp.firebaseio.com/date/2805");

// Attach an asynchronous callback to read the data at our posts reference
Date28ref.on("value", function(snapshot) {
  $('#Date28').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date29(){

// Get a database reference to our posts
var Date29ref = new Firebase("https://shiftsapp.firebaseio.com/date/2905");

// Attach an asynchronous callback to read the data at our posts reference
Date29ref.on("value", function(snapshot) {
  $('#Date29').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function DateEnd2(){

// Get a database reference to our posts
var DateEnd2ref = new Firebase("https://shiftsapp.firebaseio.com/date/2905");

// Attach an asynchronous callback to read the data at our posts reference
DateEnd2ref.on("value", function(snapshot) {
  $('#DateEnd2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

//END OF 0702.php DATES //

// START OF 2401.php inputs //

$(function Emp1Mon1(){

// Get a database reference to our posts
var Emp1Mon1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/09-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Mon1ref.on("value", function(snapshot) {
  $('#Emp1Mon1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Mon1(){

// Get a database reference to our posts
var Emp2Mon1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/09-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Mon1ref.on("value", function(snapshot) {
  $('#Emp2Mon1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Mon1(){

// Get a database reference to our posts
var Emp3Mon1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/09-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Mon1ref.on("value", function(snapshot) {
  $('#Emp3Mon1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Mon1(){

// Get a database reference to our posts
var Emp4Mon1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/09-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Mon1ref.on("value", function(snapshot) {
  $('#Emp4Mon1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Mon1(){

// Get a database reference to our posts
var Emp5Mon1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/09-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Mon1ref.on("value", function(snapshot) {
  $('#Emp5Mon1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp1Tue1(){

// Get a database reference to our posts
var Emp1Tue1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/10-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Tue1ref.on("value", function(snapshot) {
  $('#Emp1Tue1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Tue1(){

// Get a database reference to our posts
var Emp2Tue1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/10-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Tue1ref.on("value", function(snapshot) {
  $('#Emp2Tue1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Tue1(){

// Get a database reference to our posts
var Emp3Tue1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/10-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Tue1ref.on("value", function(snapshot) {
  $('#Emp3Tue1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Tue1(){

// Get a database reference to our posts
var Emp4Tue1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/10-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Tue1ref.on("value", function(snapshot) {
  $('#Emp4Tue1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Tue1(){

// Get a database reference to our posts
var Emp5Tue1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/10-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Tue1ref.on("value", function(snapshot) {
  $('#Emp5Tue1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp1Wed1(){

// Get a database reference to our posts
var Emp1Wed1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/11-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Wed1ref.on("value", function(snapshot) {
  $('#Emp1Wed1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Wed1(){

// Get a database reference to our posts
var Emp2Wed1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/11-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Wed1ref.on("value", function(snapshot) {
  $('#Emp2Wed1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Wed1(){

// Get a database reference to our posts
var Emp3Wed1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/11-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Wed1ref.on("value", function(snapshot) {
  $('#Emp3Wed1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Wed1(){

// Get a database reference to our posts
var Emp4Wed1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/11-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Wed1ref.on("value", function(snapshot) {
  $('#Emp4Wed1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Wed1(){

// Get a database reference to our posts
var Emp5Wed1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/11-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Wed1ref.on("value", function(snapshot) {
  $('#Emp5Wed1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 

$(function Emp1Thur1(){

// Get a database reference to our posts
var Emp1Thur1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/12-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Thur1ref.on("value", function(snapshot) {
  $('#Emp1Thur1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Thur1(){

// Get a database reference to our posts
var Emp2Thur1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/12-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Thur1ref.on("value", function(snapshot) {
  $('#Emp2Thur1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Thur1(){

// Get a database reference to our posts
var Emp3Thur1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/12-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Thur1ref.on("value", function(snapshot) {
  $('#Emp3Thur1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Thur1(){

// Get a database reference to our posts
var Emp4Thur1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/12-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Thur1ref.on("value", function(snapshot) {
  $('#Emp4Thur1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Thur1(){

// Get a database reference to our posts
var Emp5Thur1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/12-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Thur1ref.on("value", function(snapshot) {
  $('#Emp5Thur1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 

$(function Emp1Fri1(){

// Get a database reference to our posts
var Emp1Fri1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/13-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Fri1ref.on("value", function(snapshot) {
  $('#Emp1Fri1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Fri1(){

// Get a database reference to our posts
var Emp2Fri1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/13-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Fri1ref.on("value", function(snapshot) {
  $('#Emp2Fri1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Fri1(){

// Get a database reference to our posts
var Emp3Fri1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/13-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Fri1ref.on("value", function(snapshot) {
  $('#Emp3Fri1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Fri1(){

// Get a database reference to our posts
var Emp4Fri1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/13-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Fri1ref.on("value", function(snapshot) {
  $('#Emp4Fri1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Fri1(){

// Get a database reference to our posts
var Emp5Fri1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/13-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Fri1ref.on("value", function(snapshot) {
  $('#Emp5Fri1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 


$(function Emp1Sat1(){

// Get a database reference to our posts
var Emp1Sat1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/14-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Sat1ref.on("value", function(snapshot) {
  $('#Emp1Sat1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Sat1(){

// Get a database reference to our posts
var Emp2Sat1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/14-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Sat1ref.on("value", function(snapshot) {
  $('#Emp2Sat1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Sat1(){

// Get a database reference to our posts
var Emp3Sat1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/14-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Sat1ref.on("value", function(snapshot) {
  $('#Emp3Sat1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Sat1(){

// Get a database reference to our posts
var Emp4Sat1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/14-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Sat1ref.on("value", function(snapshot) {
  $('#Emp4Sat1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Sat1(){

// Get a database reference to our posts
var Emp5Sat1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/14-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Sat1ref.on("value", function(snapshot) {
  $('#Emp5Sat1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 


$(function Emp1Sun1(){

// Get a database reference to our posts
var Emp1Sun1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/15-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Sun1ref.on("value", function(snapshot) {
  $('#Emp1Sun1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Sun1(){

// Get a database reference to our posts
var Emp2Sun1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/15-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Sun1ref.on("value", function(snapshot) {
  $('#Emp2Sun1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Sun1(){

// Get a database reference to our posts
var Emp3Sun1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/15-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Sun1ref.on("value", function(snapshot) {
  $('#Emp3Sun1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Sun1(){

// Get a database reference to our posts
var Emp4Sun1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/15-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Sun1ref.on("value", function(snapshot) {
  $('#Emp4Sun1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Sun1(){

// Get a database reference to our posts
var Emp5Sun1ref = new Firebase("https://shiftsapp.firebaseio.com/roster/15-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Sun1ref.on("value", function(snapshot) {
  $('#Emp5Sun1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 

// END OF 2401.php inputs //

// START OF 3101.php inputs //

$(function Emp1Mon(){

// Get a database reference to our posts
var Emp1Monref = new Firebase("https://shiftsapp.firebaseio.com/roster/16-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Monref.on("value", function(snapshot) {
  $('#Emp1Mon').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Mon(){

// Get a database reference to our posts
var Emp2Monref = new Firebase("https://shiftsapp.firebaseio.com/roster/16-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Monref.on("value", function(snapshot) {
  $('#Emp2Mon').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Mon(){

// Get a database reference to our posts
var Emp3Monref = new Firebase("https://shiftsapp.firebaseio.com/roster/16-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Monref.on("value", function(snapshot) {
  $('#Emp3Mon').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Mon(){

// Get a database reference to our posts
var Emp4Monref = new Firebase("https://shiftsapp.firebaseio.com/roster/16-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Monref.on("value", function(snapshot) {
  $('#Emp4Mon').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Mon(){

// Get a database reference to our posts
var Emp5Monref = new Firebase("https://shiftsapp.firebaseio.com/roster/16-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Monref.on("value", function(snapshot) {
  $('#Emp5Mon').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp1Tue(){

// Get a database reference to our posts
var Emp1Tueref = new Firebase("https://shiftsapp.firebaseio.com/roster/17-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Tueref.on("value", function(snapshot) {
  $('#Emp1Tue').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Tue(){

// Get a database reference to our posts
var Emp2Tueref = new Firebase("https://shiftsapp.firebaseio.com/roster/17-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Tueref.on("value", function(snapshot) {
  $('#Emp2Tue').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Tue(){

// Get a database reference to our posts
var Emp3Tueref = new Firebase("https://shiftsapp.firebaseio.com/roster/17-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Tueref.on("value", function(snapshot) {
  $('#Emp3Tue').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Tue(){

// Get a database reference to our posts
var Emp4Tueref = new Firebase("https://shiftsapp.firebaseio.com/roster/17-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Tueref.on("value", function(snapshot) {
  $('#Emp4Tue').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Tue(){

// Get a database reference to our posts
var Emp5Tueref = new Firebase("https://shiftsapp.firebaseio.com/roster/17-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Tueref.on("value", function(snapshot) {
  $('#Emp5Tue').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp1Wed(){

// Get a database reference to our posts
var Emp1Wedref = new Firebase("https://shiftsapp.firebaseio.com/roster/18-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Wedref.on("value", function(snapshot) {
  $('#Emp1Wed').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Wed(){

// Get a database reference to our posts
var Emp2Wedref = new Firebase("https://shiftsapp.firebaseio.com/roster/18-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Wedref.on("value", function(snapshot) {
  $('#Emp2Wed').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Wed(){

// Get a database reference to our posts
var Emp3Wedref = new Firebase("https://shiftsapp.firebaseio.com/roster/18-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Wedref.on("value", function(snapshot) {
  $('#Emp3Wed').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Wed(){

// Get a database reference to our posts
var Emp4Wedref = new Firebase("https://shiftsapp.firebaseio.com/roster/18-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Wedref.on("value", function(snapshot) {
  $('#Emp4Wed').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Wed(){

// Get a database reference to our posts
var Emp5Wedref = new Firebase("https://shiftsapp.firebaseio.com/roster/18-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Wedref.on("value", function(snapshot) {
  $('#Emp5Wed').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 

$(function Emp1Thur(){

// Get a database reference to our posts
var Emp1Thurref = new Firebase("https://shiftsapp.firebaseio.com/roster/19-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Thurref.on("value", function(snapshot) {
  $('#Emp1Thur').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Thur(){

// Get a database reference to our posts
var Emp2Thurref = new Firebase("https://shiftsapp.firebaseio.com/roster/19-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Thurref.on("value", function(snapshot) {
  $('#Emp2Thur').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Thur(){

// Get a database reference to our posts
var Emp3Thurref = new Firebase("https://shiftsapp.firebaseio.com/roster/19-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Thurref.on("value", function(snapshot) {
  $('#Emp3Thur').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Thur(){

// Get a database reference to our posts
var Emp4Thurref = new Firebase("https://shiftsapp.firebaseio.com/roster/19-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Thurref.on("value", function(snapshot) {
  $('#Emp4Thur').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Thur(){

// Get a database reference to our posts
var Emp5Thurref = new Firebase("https://shiftsapp.firebaseio.com/roster/19-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Thurref.on("value", function(snapshot) {
  $('#Emp5Thur').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 

$(function Emp1Fri(){

// Get a database reference to our posts
var Emp1Friref = new Firebase("https://shiftsapp.firebaseio.com/roster/20-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Friref.on("value", function(snapshot) {
  $('#Emp1Fri').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Fri(){

// Get a database reference to our posts
var Emp2Friref = new Firebase("https://shiftsapp.firebaseio.com/roster/20-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Friref.on("value", function(snapshot) {
  $('#Emp2Fri').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Fri(){

// Get a database reference to our posts
var Emp3Friref = new Firebase("https://shiftsapp.firebaseio.com/roster/20-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Friref.on("value", function(snapshot) {
  $('#Emp3Fri').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Fri(){

// Get a database reference to our posts
var Emp4Friref = new Firebase("https://shiftsapp.firebaseio.com/roster/20-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Friref.on("value", function(snapshot) {
  $('#Emp4Fri').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Fri(){

// Get a database reference to our posts
var Emp5Friref = new Firebase("https://shiftsapp.firebaseio.com/roster/20-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Friref.on("value", function(snapshot) {
  $('#Emp5Fri').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 


$(function Emp1Sat(){

// Get a database reference to our posts
var Emp1Satref = new Firebase("https://shiftsapp.firebaseio.com/roster/21-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Satref.on("value", function(snapshot) {
  $('#Emp1Sat').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Sat(){

// Get a database reference to our posts
var Emp2Satref = new Firebase("https://shiftsapp.firebaseio.com/roster/21-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Satref.on("value", function(snapshot) {
  $('#Emp2Sat').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Sat(){

// Get a database reference to our posts
var Emp3Satref = new Firebase("https://shiftsapp.firebaseio.com/roster/21-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Satref.on("value", function(snapshot) {
  $('#Emp3Sat').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Sat(){

// Get a database reference to our posts
var Emp4Satref = new Firebase("https://shiftsapp.firebaseio.com/roster/21-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Satref.on("value", function(snapshot) {
  $('#Emp4Sat').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Sat(){

// Get a database reference to our posts
var Emp5Satref = new Firebase("https://shiftsapp.firebaseio.com/roster/21-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Satref.on("value", function(snapshot) {
  $('#Emp5Sat').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 


$(function Emp1Sun(){

// Get a database reference to our posts
var Emp1Sunref = new Firebase("https://shiftsapp.firebaseio.com/roster/22-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Sunref.on("value", function(snapshot) {
  $('#Emp1Sun').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Sun(){

// Get a database reference to our posts
var Emp2Sunref = new Firebase("https://shiftsapp.firebaseio.com/roster/22-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Sunref.on("value", function(snapshot) {
  $('#Emp2Sun').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Sun(){

// Get a database reference to our posts
var Emp3Sunref = new Firebase("https://shiftsapp.firebaseio.com/roster/22-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Sunref.on("value", function(snapshot) {
  $('#Emp3Sun').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Sun(){

// Get a database reference to our posts
var Emp4Sunref = new Firebase("https://shiftsapp.firebaseio.com/roster/22-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Sunref.on("value", function(snapshot) {
  $('#Emp4Sun').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Sun(){

// Get a database reference to our posts
var Emp5Sunref = new Firebase("https://shiftsapp.firebaseio.com/roster/22-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Sunref.on("value", function(snapshot) {
  $('#Emp5Sun').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 

// END OF 3101.php inputs //

// START OF 0702.php inputs //

$(function Emp1Mon2(){

// Get a database reference to our posts
var Emp1Mon2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/23-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Mon2ref.on("value", function(snapshot) {
  $('#Emp1Mon2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Mon2(){

// Get a database reference to our posts
var Emp2Mon2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/23-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Mon2ref.on("value", function(snapshot) {
  $('#Emp2Mon2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Mon2(){

// Get a database reference to our posts
var Emp3Mon2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/23-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Mon2ref.on("value", function(snapshot) {
  $('#Emp3Mon2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Mon2(){

// Get a database reference to our posts
var Emp4Mon2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/23-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Mon2ref.on("value", function(snapshot) {
  $('#Emp4Mon2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Mon2(){

// Get a database reference to our posts
var Emp5Mon2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/23-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Mon2ref.on("value", function(snapshot) {
  $('#Emp5Mon2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp1Tue2(){

// Get a database reference to our posts
var Emp1Tue2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/24-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Tue2ref.on("value", function(snapshot) {
  $('#Emp1Tue2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Tue2(){

// Get a database reference to our posts
var Emp2Tue2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/24-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Tue2ref.on("value", function(snapshot) {
  $('#Emp2Tue2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Tue2(){

// Get a database reference to our posts
var Emp3Tue2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/24-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Tue2ref.on("value", function(snapshot) {
  $('#Emp3Tue2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Tue2(){

// Get a database reference to our posts
var Emp4Tue2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/24-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Tue2ref.on("value", function(snapshot) {
  $('#Emp4Tue2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Tue2(){

// Get a database reference to our posts
var Emp5Tue2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/24-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Tue2ref.on("value", function(snapshot) {
  $('#Emp5Tue2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp1Wed2(){

// Get a database reference to our posts
var Emp1Wed2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/25-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Wed2ref.on("value", function(snapshot) {
  $('#Emp1Wed2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Wed2(){

// Get a database reference to our posts
var Emp2Wed2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/25-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Wed2ref.on("value", function(snapshot) {
  $('#Emp2Wed2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Wed2(){

// Get a database reference to our posts
var Emp3Wed2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/25-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Wed2ref.on("value", function(snapshot) {
  $('#Emp3Wed2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Wed2(){

// Get a database reference to our posts
var Emp4Wed2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/25-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Wed2ref.on("value", function(snapshot) {
  $('#Emp4Wed2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Wed2(){

// Get a database reference to our posts
var Emp5Wed2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/25-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Wed2ref.on("value", function(snapshot) {
  $('#Emp5Wed2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 

$(function Emp1Thur2(){

// Get a database reference to our posts
var Emp1Thur2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/26-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Thur2ref.on("value", function(snapshot) {
  $('#Emp1Thur2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Thur2(){

// Get a database reference to our posts
var Emp2Thur2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/26-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Thur2ref.on("value", function(snapshot) {
  $('#Emp2Thur2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Thur2(){

// Get a database reference to our posts
var Emp3Thur2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/26-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Thur2ref.on("value", function(snapshot) {
  $('#Emp3Thur2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Thur2(){

// Get a database reference to our posts
var Emp4Thur2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/26-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Thur2ref.on("value", function(snapshot) {
  $('#Emp4Thur2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Thur2(){

// Get a database reference to our posts
var Emp5Thur2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/26-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Thur2ref.on("value", function(snapshot) {
  $('#Emp5Thur2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 

$(function Emp1Fri2(){

// Get a database reference to our posts
var Emp1Fri2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/27-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Fri2ref.on("value", function(snapshot) {
  $('#Emp1Fri2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Fri2(){

// Get a database reference to our posts
var Emp2Fri2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/27-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Fri2ref.on("value", function(snapshot) {
  $('#Emp2Fri2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Fri2(){

// Get a database reference to our posts
var Emp3Fri2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/27-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Fri2ref.on("value", function(snapshot) {
  $('#Emp3Fri2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Fri2(){

// Get a database reference to our posts
var Emp4Fri2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/27-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Fri2ref.on("value", function(snapshot) {
  $('#Emp4Fri2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Fri2(){

// Get a database reference to our posts
var Emp5Fri2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/27-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Fri2ref.on("value", function(snapshot) {
  $('#Emp5Fri2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 


$(function Emp1Sat2(){

// Get a database reference to our posts
var Emp1Sat2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/28-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Sat2ref.on("value", function(snapshot) {
  $('#Emp1Sat2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Sat2(){

// Get a database reference to our posts
var Emp2Sat2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/28-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Sat2ref.on("value", function(snapshot) {
  $('#Emp2Sat2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Sat2(){

// Get a database reference to our posts
var Emp3Sat2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/28-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Sat2ref.on("value", function(snapshot) {
  $('#Emp3Sat2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Sat2(){

// Get a database reference to our posts
var Emp4Sat2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/28-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Sat2ref.on("value", function(snapshot) {
  $('#Emp4Sat2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Sat2(){

// Get a database reference to our posts
var Emp5Sat2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/28-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Sat2ref.on("value", function(snapshot) {
  $('#Emp5Sat2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 


$(function Emp1Sun2(){

// Get a database reference to our posts
var Emp1Sun2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/29-05/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Sun2ref.on("value", function(snapshot) {
  $('#Emp1Sun2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Sun2(){

// Get a database reference to our posts
var Emp2Sun2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/29-05/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Sun2ref.on("value", function(snapshot) {
  $('#Emp2Sun2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Sun2(){

// Get a database reference to our posts
var Emp3Sun2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/29-05/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Sun2ref.on("value", function(snapshot) {
  $('#Emp3Sun2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Sun2(){

// Get a database reference to our posts
var Emp4Sun2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/29-05/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Sun2ref.on("value", function(snapshot) {
  $('#Emp4Sun2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp5Sun2(){

// Get a database reference to our posts
var Emp5Sun2ref = new Firebase("https://shiftsapp.firebaseio.com/roster/29-05/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Sun2ref.on("value", function(snapshot) {
  $('#Emp5Sun2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}); 

// END OF 0702.php inputs //

$(function Testing(){
  return 'Testing Is Working'
});