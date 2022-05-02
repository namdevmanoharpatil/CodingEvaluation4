// write js code here corresponding to favourites.html
var favouriteArr = JSON.parse(localStorage.getItem("favourites")) ;

displayData(favouriteArr) ;

function displayData(data) {
    data.forEach(function (elem, index){
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
        td6.innerText = "Delete" ;
        td6.setAttribute("class","deleteText");
        td6.addEventListener("click",function(){
            deleteItem(elem, index) ;
        }) ;
       
       tr.append(td1, td2, td3, td4, td5, td6);
    
       document.querySelector("tbody").append(tr) ;
    }) ;
    
}

function deleteItem(elem, index){
    favouriteArr.splice(index,1) ;
    localStorage.setItem("favourites", JSON.stringify(favouriteArr)) ;
    window.location.reload();
}
