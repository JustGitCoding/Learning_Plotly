Plotly.newPlot("plotArea", [{x: [1, 2, 7], y: [10, 20, 30]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18,5],
    type: "bar"    
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Responses"}
};

Plotly.newPlot("plotArea", [trace], layout);

// Bar chart - created plotArea2 in HTML doc
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var layout = {
    title: "Drinks",
    xaxis: {title: "Beverage"},
    yaxis: {title: "Percentage ordered"}
};

Plotly.newPlot("plotArea2", [trace], layout);

// Pie chart - uses 'labels' and 'values' instead of 'x' and 'y'
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotArea", data, layout);

  // Scatterplot
  var trace = {
      x: [1,42,3,32,53,8,23],
      y: [13,23,3,13,34,99,1],
      mode: 'markers',
      type: 'scatter'
  };

  data=[trace]

  Plotly.newPlot('plotArea3', data)