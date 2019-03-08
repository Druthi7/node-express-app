console.log('SCRIPT START')

function LengthConverter(valNum) {
  return valNum/3.2808
}
  
document.getElementById('clicker').addEventListener('click', function () {
const i = parseInt(document.getElementById('inputFeet').value);
const j = parseInt(document.getElementById("outputMeters").value);
const op = i/3.2808;
document.getElementById('outputMeters').innerHTML = op;
localStorage.setItem("Value",op);
//document.getElementById('previous result').innerHTML = op;
})
document.getElementById('clicker1').addEventListener('click',function(){
document.getElementById('previous result').innerHTML = localStorage.getItem("Value");
})
document.getElementById('clicker2').addEventListener('click',function(){
  localStorage.clear();

})
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("AJ").innerHTML =
      this.responseText;
    }
  };
xhttp.open("GET", "https://raw.githubusercontent.com/Druthi7/aboutme/master/ajax_info.txt", true);
  xhttp.send();
  
}
console.log('SCRIPT END')

