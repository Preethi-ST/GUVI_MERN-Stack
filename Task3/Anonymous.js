//Do the below programs in anonymous function and IIFE
 let arr = [1,3,12,2,15,17,9,0,23,34,66,90];
  console.log("coded Anonymously....");
  //Print odd numbers in an array 
  console.log("Printing odd numbers in array...........");
  //ES6
  let odd_numbers1 = arr.filter(val => val%2 !== 0);
  console.log("Printing odd numbers in an array ...using ES6");
  console.log(odd_numbers1);
  //ES5
  let odd_numbers2 = arr.filter(function(val) {
    return val%2 !== 0;
  });
  console.log("Printing odd numbers in an array ...using ES5");
  console.log(odd_numbers2);


  //Sum of all numbers in an array 
  console.log("Printing sum of array values ...");
  //ES5
  let an_sum1 = arr.reduce(function(acc,val){
      return acc+val;
  })
  console.log("Printing sum of array values ...using ES5");
  console.log(an_sum1);
  //ES6
  let an_sum2 = arr.reduce((acc,val)=>acc+val);
  console.log("Printing sum of array values ...using ES6");
  console.log(an_sum2);

  //Return all the prime numbers in an array
  console.log("Printing all prime no.'s in array ......");
  //ES5
  let p_num1 = arr.filter(function(val){
      for(i=2;i<val-1;i++)
      {
        if(val%i === 0)
            break;
      }
      if(val === 2) return true;
      //console.log(val,i);
      return ((val%i !== 0)&&(val !== 1));
  })
  console.log(p_num1);
  
  //Return all the palindromes in an array 
  console.log("Returning all the palindromes in an array ..........")
  let parr = ["Madam","rock","level","plain","radar","text","thing"];
  //console.log(parr[0].split('').toLowerCase());
  let palin1 = parr.filter(val => val.toLowerCase().split('').reverse().join('') === val);
  console.log(palin1);

  //Return median of two sorted arrays of same size 
  let arr1 = [1,12,15,26,38];
  let arr2 = [2,13,17,30,45];
  let merged_arr = [...arr1,...arr2].sort((a,b)=>a-b);
  let median = function(merged_arr){
    let index1 = ((arr1.length + arr2.length)/2) - 1;
    let index2 = (arr1.length + arr2.length)/2;
    return (merged_arr[index1]+merged_arr[index2])/2;
  }
  console.log("Returning median of two sorted arrays of same size...");
  console.log(median(merged_arr));

  //Remove duplicates from an array 
  let dup_arr = [10,34,67,23,10,3,12,67,12];
  let unique_arr =[];
  dup_arr.forEach( ele =>{
    if(!unique_arr.includes(ele))
       unique_arr.push(ele);
  })
  console.log(`Removing duplicates from array ... [${dup_arr}]`);
  console.log(unique_arr);

  //Rotate an array by k times and return the rotated array
  let k = 3;
  let rotated_arr = function(r_arr,k){
    for(i=0;i<k;i++){
      let start = r_arr.shift();
      r_arr.push(start);
    }
    return r_arr;
  }
  console.log(`Rotating array [${arr}] by ${k} times......`);
  console.log(rotated_arr(arr,k));

  //Performing title case in string array
  console.log("performing title case in string array............")
  let str_arr = "performed title case in string array using javascript";
  let split_arr = str_arr.split(' ');
  let myarr = split_arr.map(ar => ar[0].toUpperCase()+ar.slice(1));
  console.log(myarr.join(' '));





