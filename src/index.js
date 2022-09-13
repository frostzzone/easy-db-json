const fs = require("fs");
const ansiColors = require('ansi-colors') 

let object = new Object();
var
    Gfile = "./db.json",
    fil,
    data

function get(item, file="") {
    if (!file || !file.length || file == undefined) {
        fil = Gfile;
    } else {
        fil = file
    }
    try {
        const jsonString = fs.readFileSync(fil);
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log(ansiColors.red.bold(`File doesn't exist, or is formatted incorrectly`))
        return undefined;
    }
    return data[item];
}

function set(item, value, file="") {
    if (!String(item) || !String(item).length || item == undefined) return console.log(ansiColors.red.bold(`Please specify an item`))
    if (!String(value) || !String(value).length || value == undefined) return console.log(ansiColors.red.bold(`Please specify a value to set the item`))
    try {
        if (!file || !file.length || file == undefined) {
            fil = Gfile;
        } else {
            fil = file
        }
    } catch (err) {
        fil = Gfile;
    }

    try {
        const jsonString = fs.readFileSync(fil);
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log(ansiColors.red.bold(`File doesn't exist, or is formatted incorrectly`))
    }
    try {
        data[item] = value;
        fs.writeFileSync(fil, JSON.stringify(data, null, 4))
    } catch (err) {}
}

function del(item, file="") {
    if (!String(item) || !String(item).length || item == undefined) return console.log(ansiColors.red.bold(`Please specify an item`))
    try {
        if (!file || !file.length || file == undefined) {
            fil = Gfile;
        } else {
            fil = file
        }
    } catch (err) {
        fil = Gfile;
    }

    try {
        const jsonString = fs.readFileSync(fil);
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log(ansiColors.red.bold(`File doesn't exist, or is formatted incorrectly`))
    }
    try {
        delete data[item];
        fs.writeFileSync(fil, JSON.stringify(data, null, 4))
    } catch (err) {}
}

function has(item, file="") {
    if (!file || !file.length || file == undefined) {
        fil = Gfile;
    } else {
        fil = file
    }
    try {
        const jsonString = fs.readFileSync(fil);
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log(ansiColors.red.bold(`File doesn't exist, or is formatted incorrectly`))
        return undefined;
    }
    if (data[item] == undefined) return false;
    return true;
}

function add(item, value, file="") {
    if (!String(item) || !String(item).length || item == undefined) return console.log(ansiColors.red.bold(`Please specify an item`))
    if (!String(value) || !String(value).length || value == undefined) return console.log(ansiColors.red.bold(`Please specify a value to set the item`))
    try {
        if (!file || !file.length || file == undefined) {
            fil = Gfile;
        } else {
            fil = file
        }
    } catch (err) {
        fil = Gfile;
    }

    try {
        const jsonString = fs.readFileSync(fil);
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log(ansiColors.red.bold(`File doesn't exist, or is formatted incorrectly`))
    }
    try {
        if (typeof(value) !== "number") return console.log(ansiColors.red.bold(`Can not add letters`))
        if (typeof(data[item]) !== "number" && data[item] !== undefined) return console.log(ansiColors.red.bold("Can not add: value of item is not a number"))
        if (data[item] == undefined) {
            data[item] = value
        } else {
            data[item] = (data[item] + value);
        }
        fs.writeFileSync(fil, JSON.stringify(data, null, 4))
    } catch (err) {}
}

function subtract(item, value=0, file="") {
    if (!String(item) || !String(item).length || item == undefined) return console.log(ansiColors.red.bold(`Please specify an item`))
    if (!String(value) || !String(value).length || value == undefined || value == 0) return console.log(ansiColors.red.bold(`Please specify a value to remove from the item`))
    try {
        if (!file || !file.length || file == undefined) {
            fil = Gfile;
        } else {
            fil = file
        }
    } catch (err) {
        fil = Gfile;
    }

    try {
        const jsonString = fs.readFileSync(fil);
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log(ansiColors.red.bold(`File doesn't exist, or is formatted incorrectly`))
    }
    try {
        if (typeof(value) !== "number") return console.log(ansiColors.red.bold(`Can not add letters`))
        if (typeof(data[item]) !== "number" && data[item] !== undefined) return console.log(ansiColors.red.bold("Can not add: value of item is not a number"))
        if (data[item] == undefined) {
            data[item] = value
        } else {
            data[item] = (data[item] - value);
        }
        fs.writeFileSync(fil, JSON.stringify(data, null, 4))
    } catch (err) {}
}

function divide(item, value=1, file="") {
    if (!String(item) || !String(item).length || item == undefined) return console.log(ansiColors.red.bold(`Please specify an item`))
    if (!String(value) || !String(value).length || value == undefined || value == 1) return console.log(ansiColors.red.bold(`Please specify a value to divide the item by`))
    try {
        if (!file || !file.length || file == undefined) {
            fil = Gfile;
        } else {
            fil = file
        }
    } catch (err) {
        fil = Gfile;
    }

    try {
        const jsonString = fs.readFileSync(fil);
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log(ansiColors.red.bold(`File doesn't exist, or is formatted incorrectly`))
    }
    try {
        if (typeof(value) !== "number") return console.log(ansiColors.red.bold(`Can not add letters`))
        if (typeof(data[item]) !== "number" && data[item] !== undefined) return console.log(ansiColors.red.bold("Can not add: value of item is not a number"))
        if (data[item] == undefined) {
            data[item] = value
        } else {
            data[item] = (data[item] / value);
        }
        fs.writeFileSync(fil, JSON.stringify(data, null, 4))
    } catch (err) {}
}

function multiply(item, value=1, file="") {
    if (!String(item) || !String(item).length || item == undefined) return console.log(ansiColors.red.bold(`Please specify an item`))
    if (!String(value) || !String(value).length || value == undefined) return console.log(ansiColors.red.bold(`Please specify a value to multiply the item by`))
    try {
        if (!file || !file.length || file == undefined) {
            fil = Gfile;
        } else {
            fil = file
        }
    } catch (err) {
        fil = Gfile;
    }

    try {
        const jsonString = fs.readFileSync(fil);
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log(ansiColors.red.bold(`File doesn't exist, or is formatted incorrectly`))
    }
    try {
        if (typeof(value) !== "number") return console.log(ansiColors.red.bold(`Can not add letters`))
        if (typeof(data[item]) !== "number" && data[item] !== undefined) return console.log(ansiColors.red.bold("Can not add: value of item is not a number"))
        if (data[item] == undefined) {
            data[item] = value
        } else {
            data[item] = (data[item] * value);
        }
        fs.writeFileSync(fil, JSON.stringify(data, null, 4))
    } catch (err) {}
}

function clear(file="") {
    if (!file || !file.length || file == undefined) {
        fil = Gfile;
    } else {
        fil = file
    }
    fs.writeFileSync(fil, "{}")
}

function all(file="") {
    if (!file || !file.length || file == undefined) {
        fil = Gfile;
    } else {
        fil = file
    }
    try {
        const jsonString = fs.readFileSync(fil);
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log(ansiColors.red.bold(`File doesn't exist, or is formatted incorrectly`))
        return undefined;
    }
    return data;
}

function setFile(file="", logs=false) {
    if (!file || !file.length || file == undefined) return console.log(ansiColors.red.bold(`Please specify a file`))
    Gfile = file
    let log = logs
    if (!fs.existsSync(Gfile)) {
        fs.writeFileSync(Gfile, "{}")
        if (log) console.log(ansiColors.green(`Successfully created file "${Gfile}"`))
    } else {
        if (log) console.log(ansiColors.green(`Successfully connected to file "${Gfile}"`))
    }
}

  function push(item, value, file=""){
    if (!String(item) || !String(item).length || item == undefined) return console.log(ansiColors.red.bold(`Please specify an item`))
    if (!String(value) || !String(value).length || value == undefined) return console.log(ansiColors.red.bold(`Please specify a value to set the item`))
    try {
        if (!file || !file.length || file == undefined) {
            fil = Gfile;
        } else {
            fil = file
        }
    } catch (err) {
        fil = Gfile;
    }

    try {
        const jsonString = fs.readFileSync(fil);
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log(ansiColors.red.bold(`File doesn't exist, or is formatted incorrectly`))
    }
    try {
        if (!(Array.isArray(data[item])) && data[item] !== undefined) return console.log(ansiColors.red.bold("Can not add: value of item is not an array"))
        if (data[item] == undefined) {
            data[item] = [value]
        } else {
let array = data[item];
          array[array.length] = value
            data[item] = array
        }
        fs.writeFileSync(fil, JSON.stringify(data, null, 4))
    } catch (err) {}
  }

module.exports = {
    get,
    set,
    del,
    has,
    add,
    subtract,
    divide,
    multiply,
    clear,
    all,
    setFile,
    push
}