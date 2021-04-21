//Create request instance
var req = new XMLHttpRequest();
//initiate a connection or create a new connection
//give - true -> in case of any exception, that API shouldn't affect rest of the code
req.open('GET',"https://restcountries.eu/rest/v2/all",true);
//sending the request
req.send();
//load the function
//this function will trigger only when the data has been received successfully
req.onload = function(){
   var data = JSON.parse(req.response);
   console.log(data);
   for(i in data)
   {
     console.log(data[i].name);
   }
}

/* let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.eu/rest/v2/all', true);

try {
  xhr.send();
  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
    console.log(xhr.statusText);
  } else {
    //alert(xhr.response);
    console.log(JSON.parse(xhr.response));
  }
} catch(err) { // instead of onerror
  alert("Request failed");
}
 */
