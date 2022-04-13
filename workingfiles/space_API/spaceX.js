const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(data => data.map(coord => console.log(coord.location.latitude, coord.location.longitude)));