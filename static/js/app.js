// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  //clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

//variable to keep track of all the filters as an object.
var filters = {};

//function to update the filters. 
function updateFilters() {

    //Saves the element that was changed as a variable.
    let elementChanged = d3.select(this);
    //Saves the value that was changed as a variable.
    let elementValue = elementChanged.property("value");
    console.log(elementValue);
    //Saves the id of the filter that was changed as a variable.
    let filteredID = elementChanged.attr("id");
  
    //If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue){

      filters[filteredID] = elementValue;

    }else{

      delete filters[filteredID];
    }
  
    //Calls function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  //function to filter the table when data is entered.
  function filterTable() {
  
    //Sets the filtered data to the tableData.
    var filteredData = tableData;
  
    //Loops through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) =>{
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    //rebuilds the table using the filtered data
    buildTable(filteredData);
  }
  
  //event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);

  
  //Builds the table when the page loads
  buildTable(tableData);
