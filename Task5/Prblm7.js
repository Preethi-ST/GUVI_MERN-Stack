console.log("**********DISPLAYING OUTPUT FOR Problem7**********");
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
function assertObjectsEqual(actual, expected, testName){
 if(JSON.stringify(expected) === JSON.stringify(actual))
 {
     console.log("Passed");
 }
 else
 {
    console.log(`Failed. Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
 }
 /* expected = JSON.stringify(expected);
 actual = JSON.stringify(actual);
 console.log(expected);
 console.log("Actual : "+ actual); */
}
console.log(`Parsing two JSON objects and Compare....`);
assertObjectsEqual(actual,expected,'detects that two objects are equal');