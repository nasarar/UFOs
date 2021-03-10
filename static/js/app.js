// import the data from data.js
const tableData = data;

//reference the HTML table using D3 library
//tbody is used since it is a standard HTML table tag w/ or w/o  JS enhancements
var tbody = d3.select("tbody");

function buildTable(data){
    // clears the table of pre-existing filters
    tbody.html("");

    // function iterating through each Object in the data
    // adds a row and cells for each values in the row
    data.forEach((dataRow) => {
        let row = tbody.append('tr'); // adds row to the table body.. (tr) is HTML for table row
        
        // loops through each field in the dataRow and
        //adds each value from the object into a table cell
        Object.values(dataRow).forEach((val)=> {
            let cell = row.append('td');
            cell.text(val);

        });
    
    });

}

// function to handling after an input is given
function handleClick(){

    // selects first 'datetime' id in the HTML script and grabs information to store into date variable 
    let date = d3.select('#datetime').property('value'); 

    // set to raw data to use as blank slate incase no filters are selected. All data wil be displayed
    let filteredData = tableData;
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //calls the buildTable function and applies it on the filteredData
    //if no filter is selected then original tableData will be displayed
    buildTable(filteredData);

};

// listens if a button is clicked
d3.selectAll('#filter-btn').on('click', handleClick);

//builds the table when web page loads
buildTable(tableData);