// Table Exercise

// Capturing the form:
var myForm = document.getElementById("table-form");

function deleteRow( element ) { // Element will be the button we pressed
    var tableRow = element.parentNode.parentNode; // 2 level up from our button to get our row
    tableRow.parentNode.removeChild( tableRow ); // An element cannot delete itself, we have to tell the parent to do that
    }

var allButtons = document.querySelectorAll( "td > button");

// Loop through our query

for (var i=0; i < allButtons.length; i++)
    {
        //Adding listeners to these:
        allButtons[i].addEventListener( "click", function (event) { deleteRow(this);
        });

    }

myForm.addEventListener( "submit", function ( event) 
    {
    // prevent the   form from refreshing, terminating the script and loosing the data
    event.preventDefault();
    // grabbing the input elements; THE FOLLOWING CAN BE DONE WITH QUERY SELECTOR AS WELL AS WITH getElementById:
    //var nameField = document.querySelector( "form > label > input" )  GET FIRST INPUT (NAME FIELD)
    var nameField = document.getElementById( "name" );
    var ageField = document.getElementById( "age" );
    var schoolclassField = document.getElementById( "school-class" );
    var cityField = document.getElementById( "city" );

    // Extract the values
    var nameValue = nameField.value;
    var ageValue = ageField.value;
    var schoolclassValue = schoolclassField.value;
    var cityValue = cityField.value;

    // Creating a row in the table:
    var newRow = document.createElement( "TR" );

    // Create new cell for the row (table data)
    var nameCell = document.createElement( "TD");
    nameCell.textContent = nameValue; // Add our text to the cell
    newRow.appendChild( nameCell ); // Add our cell to the table

    // Create new cell for the row (table data)
    var ageCell = document.createElement( "TD");
    ageCell.textContent = ageValue; // Add our text to the cell
    newRow.appendChild( ageCell ); // Add our cell to the table
    
    // Create new cell for the row (table data)
    var schoolclassCell = document.createElement( "TD");
    schoolclassCell.textContent = schoolclassValue; // Add our text to the cell
    newRow.appendChild( schoolclassCell ); // Add our cell to the table

    // Create new cell for the row (table data)
    var cityCell = document.createElement( "TD");
    cityCell.textContent = cityValue; // Add our text to the cell
    newRow.appendChild( cityCell ); // Add our cell to the table

// ===================================================================================

//Creating our Delete button
var deleteButton = document.createElement( "BUTTON");
deleteButton.textContent = "Delete Row"; // Adding the text
var actionCell = document.createElement( "TD" ); // Create the actions cell!
actionCell.appendChild( deleteButton ); // add the button inside
newRow.appendChild( actionCell ); // Add this new cell to the row too

// ===================================================================================

    // Targeting the table body
    var tableBody = document.getElementById( "table-body");
    tableBody.appendChild( newRow); // Injecting the brand new row, so the user can see it

    });




