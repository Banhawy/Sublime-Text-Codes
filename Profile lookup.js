
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
  var fName = "No such contact";
  var i=0;
  var j=0;
  var k=0;
while(i<4){ //Checks if BOTH contact firstname and property prop exist
    if (contacts[i]["firstName"] == firstName && contacts[i].hasOwnProperty(prop) == true) {
        return contacts[i][prop];
        } 
    i++;
    }
    while(j<4){ //checksif prop does not correspond to any valid properties
        if (contacts[j]["firstName"] == firstName && contacts[j].hasOwnProperty(prop) == false){
            return "No such property";
        }
    j++;
    }
    return fName; //If firstName does not correspond to any contacts then return "No such contact"
}

// Change these values to test your function

console.log(lookUpProfile("Kristian", "lastName"));
//console.log(contacts[1]["firstName"]);
//var num= "number";
//console.log(contacts[1].hasOwnProperty(num));