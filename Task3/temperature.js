var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    var rest_countries = JSON.parse(this.response);
    //console.log(rest_countries);
    for( countries in rest_countries)
    {
        //console.log(countries);
        let name = rest_countries[countries].name;
        //console.log(name);
        let lat = rest_countries[countries].latlng[0];
        //console.log(lat);
        let lng = rest_countries[countries].latlng[1];
        //console.log(lng);
        let URL_Link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0fc028fb793762c36fa57dd9422be937`;
        temperature(name,URL_Link);

    }

}
function temperature(name,URL_Link)
{
    var req = new XMLHttpRequest();
    
    req.open('GET',URL_Link,true);
    req.send();
    req.onload = function(){
        try{
        var country_details = JSON.parse(this.response);
        console.log(`${name} : ${country_details.main.temp}`);
        }
        catch(e){
            console.log("Error : "+ e);
          } 
   
    }
    
    
}