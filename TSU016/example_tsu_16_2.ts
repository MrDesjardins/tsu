// Declare and initialize separated
let var16_4;
var16_4 = { firstName: "John", lastName: "Doe" };

// Declare and initialize together
let var16_5 = { firstName: "John", lastName: "Doe" };

// Declare and initialize together
const var16_6 = { firstName: "John", lastName: "Doe" };

var16_4 = { firstName: "Alicia", lastName: "Des" };
var16_5 = { firstName: "Alicia", lastName: "Des" };
var16_6 = { firstName: "Alicia", lastName: "Des" }; // Error
var16_6.firstName = "Alicia"; 
