// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",FormSubmit) ;
var formArr = JSON.parse(localStorage.getItem("ScheduleList")) || [];

function FormSubmit(){
    event.preventDefault() ;

    var formObj ={
        personMatchNumber: document.querySelector("#matchNum").Value,
        personTeamA : masaiForm.teamA.value ,
        personTeamB : masaiForm.teamB.value ,
        personDate : masaiForm.date.value ,
        personVenue: masaiForm.venue.value ,

    };

    formArr.push(formObj);
    console.log(formArr) ;
    localStorage.setItem("ScheduleList",JSON.stringify(formArr)) ;

    window.location.href = "matches.html" ;
}