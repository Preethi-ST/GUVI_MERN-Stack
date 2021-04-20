console.log("**********DISPLAYING OUTPUT FOR Problem4**********");
var arr = ["GUVI", "I", "am", "geek"];
function transformFirstAndLast(arr) {
    let key = arr[0];
    let newObject ={};
    newObject[arr[0]] = arr[arr.length-1];
 
 return newObject;
}
console.log("Returning an Object by tranforming first and last elements of an array...")
console.log(transformFirstAndLast(arr));