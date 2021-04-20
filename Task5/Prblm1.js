console.log("**********DISPLAYING OUTPUT FOR Problem1**********");
var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
  return Object.values(obj);
}
console.log("Printing Object Values...")
console.log(printAllValues(obj));