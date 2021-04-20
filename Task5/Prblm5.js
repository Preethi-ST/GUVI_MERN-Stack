console.log("**********DISPLAYING OUTPUT FOR Problem5**********");
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 arr.map(val => newObject[val[0]]=val[1]);
 return newObject;
}
console.log("Transforming list of lists to JSON Object ...")
console.log(fromListToObject(arr));