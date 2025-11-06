function updateTime(){
// Johannesburg
let JohannesburgElement=document.querySelector("#Jozi");
let johannesburgDateElement=document.querySelector("#date-1");
let johannesburgTimeElement=document.querySelector("#time-1");
let johannesburgTime=moment().tz("Africa/Johannesburg");
johannesburgDateElement.innerHTML=johannesburgTime.format("MMMM Do, YYYY");
johannesburgTimeElement.innerHTML=johannesburgTime.format("HH:mm:ss [<small>]A[</small>]");
//Tokyo
let TokyoElement=document.querySelector("#Japan");
let tokyoDateElement=document.querySelector("#date-2");
let tokyoTimeElement=document.querySelector("#time-2");
let tokyoTime=moment().tz("Asia/Tokyo");
tokyoDateElement.innerHTML=tokyoTime.format("MMMM Do, YYYY");
tokyoTimeElement.innerHTML=tokyoTime.format("HH:mm:ss [<small>]A[</small>]");
//New York
let NewYorkElement=document.querySelector("#America");
let NewYorkDateElement=document.querySelector("#date-3");
let NewYorkTimeElement=document.querySelector("#time-3");
let newyorkTime=moment().tz("America/New_York");
NewYorkDateElement.innerHTML=newyorkTime.format("MMMM Do, YYYY");
NewYorkTimeElement.innerHTML=newyorkTime.format("HH:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime,1000); 
// City selection
function updateCity(event){
let cityTimeZone=event.target.value;
if(cityTimeZone==="current"){
  cityTimeZone=moment.tz.guess();
}
  let cityName=cityTimeZone.replace("_"," ").split("/")[1];
  let cityTime=moment().tz(cityTimeZone);
    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML=`<div class="city">
    <h2>${cityName}</h2>
    <div class="time-info">
    <span>${cityTime.format("MMMM Do, YYYY")}</span>
    <span>${cityTime.format("HH:mm:")} <small>${cityTime.format("A")}</small></span>
    <span>UTC${cityTime.format("Z")}</span>
    </div>
    </div>`;

}
let citySelectElement=document.querySelector("#city");
citySelectElement.addEventListener("change",updateCity);
