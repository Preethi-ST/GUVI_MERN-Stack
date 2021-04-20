

let req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    let res = JSON.parse(this.response);
    //Get all the countries from Asia continent /region using Filter function
    let region = res.filter(val =>{
        return val.region === "Asia";
    })
    console.log("Fetched all the countries from Asia continent /region...");
    console.log(region);


    //Get all the countries with population of less than 2 lacs using Filter function
    let population = res.filter(val =>{
        return val.population < 200000;
    })
    console.log("Fetched all the countries with population of less than 2 lacs using Filter function...")
    console.log(population);


    //Print the following details name, capital, flag using forEach function
    console.log("Printing name, capital and flag of all countries using forEach function...")
    res.forEach(val => {
        console.log(`Name : ${val.name} ; Capital : ${val.capital} ; Flag : ${val.flag}`);
    });


    //Print the total population of countries using reduce function 
    let total_population = res.reduce((acc,val)=>{
        return acc+val.population;
    },0)
    console.log("Printing total population of countries using reduce function...")
    console.log(total_population);


    //Print the country which use US Dollars as currency.
    let country_dollar =[];
     res.filter((val,acc,arr) =>{
       //console.log(val.name);
       //console.log(val.currencies);
         if(val.currencies[0].code === "USD")
         {
            country_dollar.push(val.name);
            console.log(val.name);
            
         }
        
    }) 
 /*    for(i in res)
    {
        if(res.currencies[i].code === "USD")
         {
            country_dollar.push(res.currencies[i].name);
            
         }
    } */
    console.log("Printing the country which use US Dollars as currency...")
    console.log(country_dollar);
}