d3.json("samples.json").then(data => console.log(data));

d3.json("samples.json").then(data => Object.entries(data.metadata[0]).forEach(([key,value]) => {console.log(key+": "+value);}));