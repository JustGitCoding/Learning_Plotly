// console.log(cityGrowths);

// sort data and create variable to store top 5 cities
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
var topCities = sortedCities.slice(0,3);
var topCityNames = topCities.map(city => city.City);
var topCityGrowths = topCities.map(city => parseInt(city.Increase_from_2016));

// create bar chart with Plotly
var trace = {
    x: topCityNames,
    y: topCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Fastest Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Growth from 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);