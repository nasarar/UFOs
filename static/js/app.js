// import the data from data.js
const tableData = data;

//reference the HTML table using D3 library
//tbody is used since it is a standard HTML table tag w/ or w/o  JS enhancements
var tbody = d3.select("tbody");

function buildTable(data){
    // clears the table of pre-existing filters
    tbody.html("");

    // function iterating through the data
    data.forEach((dataRow) => {
        let row = tbody.append('tr'); // adds row to the table body.. (tr) is HTML for table row
        
        //adds each value from the object into a cell
        Object.values(dataRow).forEach((val)=> {
            let cell = row.append('td');
            cell.text(val);

        });
    
    });

}