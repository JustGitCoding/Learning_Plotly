// just making sure we can pull & see the data
d3.json("samples.json").then(data => console.log(data));
// print out key-value pairs for first object
d3.json("samples.json").then(data => Object.entries(data.metadata[0]).forEach(([key,value]) => {console.log(key+": "+value);}));

d3.selectAll("body").on("change", updatePage);

function updatePage(){
    var dropdownMenu = d3.selectAll("#selectOption").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(selectedOption);
};