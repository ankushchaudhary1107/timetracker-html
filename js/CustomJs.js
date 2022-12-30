const deleteSelected= () =>{
	swal({
		title: "Are you sure?",
		text: "You want to delete Selected Data!!",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	  })
	  .then((willDelete) => {
		if (willDelete) {
		  window.location="/admin/delete/"+studentId;
	  
		} else {
		  swal("Data is safe!");
		}
	  });
  };

/*Js for multipart form*/

  var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("submit").style.display = "inline";
  } else {
    document.getElementById("submit").style.display = "none";
    document.getElementById("nextBtn").style.display = "inline";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, z, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = document.getElementById("superior");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {

    
    // If a field is empty...
    if (y[i].value == "" && y[i] != z) {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }

  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
/*Multipart form JS end*/


//Superior Field Modification
let arr = [];
var textbox = document.getElementById("textbox");
var remove = document.getElementById("remove");
textbox.style.display = 'none';
remove.style.display = 'none';

//Add Superior Ids
function addMore() {
  var x = document.getElementById("superior").value;

  if (x != "") {
    arr.push(x);
    console.log(arr);
    console.log(arr.length);
    textbox.style.display = 'block';
    remove.style.display = 'block';
    textbox.innerText = arr;
    document.getElementById("superior").value = "";
  }
}

//Remove Superior Ids
function removeItems() {
  arr.pop();
  textbox.innerText = arr;
  if (arr.length == 0) {
    textbox.style.display = 'none';
    remove.style.display = 'none';
  }
}
//Superior Field Modification End