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

let filterButton = d3.select("#filter-btn")

let inputForm = d3.select("#datetime")

filterButton.on("click",filterData);

function filterData(){
    let inputValue =  inputForm.property("value")
    let filtered = tableData.filter(entries=>entries.datetime === inputValue)
    filtered

}