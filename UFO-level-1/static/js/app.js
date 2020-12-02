// from data.js
var tableData = data;

let tbody = d3.select("tbody");

tableData.forEach((item) => {
    var row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      var entry = row.append("td");
      entry.text(value);
    });
  });
//assign variable for button element
let filterButton = d3.select("#filter-btn")
//assign variable for form element
let inputForm = d3.select("#datetime")

//function to filter data
function filterData(){
    d3.event.preventDefault();
    //grab filter form input value
    let inputValue =  inputForm.property("value");
    //filter data on input value
    let filteredData = tableData.filter(entries=>entries.datetime === inputValue);
    console.log(filteredData);
    //remove current body of table
    tbody.html("");
    //fill table with filtered data
    filteredData.forEach((filterItem) => {
        var row = tbody.append("tr");
        Object.entries(filterItem).forEach(([key, value]) => {
          var entry = row.append("td");
          entry.text(value);
        });
      });
};

//pass function on button click
filterButton.on("click",filterData);