console.log("**********DISPLAYING OUTPUT FOR Problem3**********");
var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
    return Object.entries(obj);
}
console.log("converts an object literal into an array of arrays.....")
console.log(convertListToObject(obj));