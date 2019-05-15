 //python -m http.server
//http://localhost:8000
// Step 1: Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

//id,state,abbr,poverty,povertyMoe,age,ageMoe,income,incomeMoe,
//healthcare,healthcareLow,healthcareHigh,obesity,obesityLow,
//obesityHigh,smokes,smokesLow,smokesHigh
//need state abbr
//  console.log(demoData);
//data

d3.csv('assets/data/data.csv', function(error, demoData) {
   if (error) return console.warn(error);
   var dStateAbb = demoData.map(data => data.abbr); 
   console.log(dStateAbb);
  demoData.forEach(function(data){
   	demo
   })
   //if (error) throw error;
   console.log(demoData);
   console.log("hello");
  // log a list of names
//  var names = demoData.map(data => data.name);

  //console.log("state", dStateAbb);
  

  // Cast each hours value in tvData as a number using the unary + operator
 // demoData.forEach(function(data) {
 //   data.hours = +data.hours;
 //   console.log("Name:", data.name);
 //   console.log("Hours:", data.hours);
//  });
});


//svg - 


// @TODO: YOUR CODE HERE!
