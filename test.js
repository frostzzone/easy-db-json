const db = require("./src/index.js");

// Create new file for db, then switch back
db.setFile("./math.json")
db.setFile("./db.json")

// Set data
db.set("Hello", "World");
db.set("Hello", "Everyone", "./math.json"); // Set data in another file

// Get data
console.log(db.get("Hello")); // World
console.log(db.get("Hello", "./math.json")); // Everyone

// Delete data
db.del("Hello");
db.del("Hello", "./math.json");

console.log(db.get("Hello")); // undefined
console.log(db.get("Hello", "./math.json")); // undefined
console.log(db.has("Hello")); // false
console.log(db.has("Hello", "./math.json")); // false

// Change database
db.setFile("./math.json")

db.set("number", 10);
db.set("number", 10, "./db.json");

db.add("number", 1); // 11
db.add("number", 1, "./db.json"); // 11

db.subtract("number", 9); // 2
db.subtract("number", 9, "./db.json"); // 2

db.multiply("number", 10) // 20
db.multiply("number", 10, "./db.json") // 20

db.divide("number", 4) // 5
db.divide("number", 4, "./db.json") // 5

// Switch back to default
db.setFile("./db.json")

// Arrays
db.set("array", [ "apple" ]);
db.set("array", [ "apple" ], './math.json');

db.push("array", 7)
db.push("array", 7, "./math.json")
// Clear data
db.clear();
db.clear('./math.json');

// Get all data, responds with a js object
console.log(db.all());
console.log(db.all("./math.json"))