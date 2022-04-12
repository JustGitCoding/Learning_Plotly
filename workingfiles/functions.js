// map calling a function
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// map just pulling info
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);


// filter
let numbers2 = [1,2,3,4,5,6];
let evenNumbers = numbers2.filter(number => number % 2 == 0);
console.log(evenNumbers);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
let sAnimals = words.filter(word => word[0] == 's');
console.log(sAnimals);

// sorting
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
// reverse sorting
var revSortedAgeFirstWay = familyAge.sort((a,b) => b-a);
console.log(revSortedAgeFirstWay);
var revSortedAgeSecondWay = familyAge.sort((a,b) => a - b).reverse();
console.log(revSortedAgeSecondWay);

// slice
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
var slice2 = integers.slice(2,);
console.log(slice1);
console.log(slice2);

// Object.entries returns key-value pairs
researcher1 = {
  name: 'Roza',
  age: 34,
  hobby: 'Hiking'
};

console.log(Object.entries(researcher1));