//Do the below programs in anonymous function and IIFE

 //Print odd numbers in an array 
 console.log("**********coded using IIFE**********");

 //Print odd numbers in an array 
 let array = [1,3,12,2,15,17,9,0,23,34,66,90];
 console.log("Printing odd numbers in array...........");
 //es5
 console.log("Printing odd numbers in an array ...using ES5");
 let result_ES5 = (function(val){
    return val.filter(num => num%2 !== 0);
 })(array);
 console.log(result_ES5);
//es6
 console.log("Printing odd numbers in an array ...using ES6");
 let result_ES6 = (val => val.filter(num => num%2 !== 0))(array);
 console.log(result_ES6);


 //Sum of all numbers in an array 
 console.log("Printing sum of array values ...");
 let iife_sum1 = (arr => arr.reduce((acc,val) => acc+val))(array);
 console.log(iife_sum1);


   //Return all the prime numbers in an array
   console.log("Printing all prime no.'s in array ......");
   let iife_p_num = (arr1 => (arr1.filter((val) => {
       for(i=2;i<val-1;i++)
       {
         if(val%i === 0)
             break;
       }
       if(val === 2) return true;
       return ((val%i !== 0)&&(val !== 1));
   })))(array);
   console.log(iife_p_num);

//Return all the palindromes in an array 
 console.log("Returning all the palindromes in an array ..........")
 let pa_arr = ["Madam","rock","level","plain","radar","text","thing"];
//console.log(parr[0].split('').toLowerCase());
 let palin = (pa_arr => pa_arr.filter(val => val.toLowerCase().split('').reverse().join('') === val))(pa_arr);
 console.log(palin);


 //Return median of two sorted arrays of same size 
 let arr3 = [1,12,15,26,38];
 let arr4 = [2,13,17,30,45];
 let mer_arr = [...arr3,...arr4].sort((a,b)=>a-b);
 let med = ((merged_arr) => {
   let index3 = ((arr3.length + arr4.length)/2) - 1;
   let index4 = (arr3.length + arr4.length)/2;
   return (merged_arr[index3]+merged_arr[index4])/2;
 })(mer_arr);
 console.log("Returning median of two sorted arrays of same size...");
 console.log(med);


 //Remove duplicates from an array 
  let d_arr = [10,34,67,23,10,3,12,67,12];
  let uqe_arr =[];
  
  (duplicate_arr => duplicate_arr.forEach( ele =>{
     
    if(!uqe_arr.includes(ele))
       uqe_arr.push(ele);
  }))(d_arr);
  console.log(`Removing duplicates from array ... [${d_arr}]`);
  console.log(uqe_arr);

  //Rotate an array by k times and return the rotated array
  let k1 = 3;
  console.log(`Rotating array [${array}] by ${k1} times......`);
  //console.log("Original array...");
  //console.log(array);
  let rot_arr = ((r_arr,k1) => {
    for(i=0;i<k1;i++){
      let start = r_arr.shift();
      r_arr.push(start);
    }
    return r_arr;
  })(array,k1);
  console.log(rot_arr);


  //Performing title case in string array
  console.log("performing title case in string array............")
  let string_arr = "performed title case in string array using javascript";
  let spl_arr = string_arr.split(' ');
  let myarr1 = (arr => arr.map(ar => ar[0].toUpperCase()+ar.slice(1)))(spl_arr);
  console.log(myarr1.join(' '));
