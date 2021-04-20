console.log("**********DISPLAYING OUTPUT FOR Problem2**********");
var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllKeys(obj) {
  return Object.keys(obj);
}
console.log("Printing Object Keys...")
console.log(printAllKeys(obj));