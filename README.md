# Easy Json DB
Kinda inspired by [easy-json-database](https://www.npmjs.com/package/easy-json-database)

But this is fully node.js (*no typescript)*

This also is made for multiple files if you want :p

## Example

```js
const db = require("easy-json-db");

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

// Clear data
db.clear();
db.clear('./math.json');

// Get all data, responds with a js object
console.log(db.all());
console.log(db.all("./math.json"))
```
| Methods |  Type  | Required | Output| Info |
|---------|:------:|:--------:|:-----:|:----:|
||||| ***If no file is specified in any of these commands it uses the currently set file*** |
||||||
| .setFile("./file") | String | *True* | None | Sets the default file for other commands |
| .set("key", value, "./file") | String/Number, any, String | *True*, *True*, *False* | None | Saves the **value** to the **key** in the database file |
| .get("key", "./file") | String/Number, String | *True*, *False* | Any | Gets the **key**'s value from the database |
| .del("key", "./file") | String/Number, String | *True*, *False* | None | Deletes the **key** from the database |
| .has("key", "./file") | String/Number, String | *True*, *False* | Boolean | Checks if the database has the **key** |
| .add("key", value, "./file") | String/Number, Number, String | *True*, *True*, *False* | None | Adds **value** to the value of **key** *(value of key has to be a number)* |
| .subtract("key", value, "./file") | String/Number, Number, String | *True*, *True*, *False* | None | Removes **value** from the value of **key** *(value of key has to be a number)* |
| .multiply("key", value, "./file") | String/Number, Number, String | *True*, *True*, *False* | None | Multiplys the value of **key** with **value** *(value of key has to be a number)* |
| .divide("key", value, "./file") | String/Number, Number, String | *True*, *True*, *False* | None | Divides the value of **key** by **value** *(value of key has to be a number)* |
| .clear("./file") | String | *False* | None | Deletes all data from **file** |
| .all("./file") | String | *False* | Object | Returns all data from the database |