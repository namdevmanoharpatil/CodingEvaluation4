// write js code here corresponding to matches.html
var formArr = JSON.parse(localStorage.getItem("ScheduleList")) ;
displayData(formArr) ;

var favouriteArr = JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(data){
data.forEach(function (elem){
    var tr = document. createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = elem. personMatchNumber ;

    var td2 = document.createElement("td")
    td2.innerText = elem.personTeamA  ;

    var td3 = document.createElement("td")
    td3.innerText = elem. personTeamB ;

    var td4 = document.createElement("td")
    td4.innerText = elem.personDate  ;

    var td5 = document.createElement("td")
    td5.innerText = elem.personVenue ;

    var td6 = document.createElement("td")
    td6.innerText = "Favourite" ;
    td6.style.color = "blue" ;
    td6.style.cursor = "pointer" ;
    td6.addEventListener("click", function(){
        favouritesFunc(elem) ;
    }) ;
   tr.append(td1, td2, td3, td4, td5, td6);

   document.querySelector("tbody").append(tr) ;
}) ;

}


function favouritesFunc(elem){
    console.log(elem) ;
    favouriteArr.push(elem) ;
    localStorage.setItem("favourites",JSON.stringify(favouriteArr)) ;
    
}