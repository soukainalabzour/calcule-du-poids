let inputaille = document.getElementById("taille");
let inputage = document.getElementById("age");
let mince = document.getElementById("mince");
let moyen = document.getElementById("moyen");
let large =document.getElementById("large");
let result = document.getElementById("Submit");

if(localStorage.length > 0){
    let data = localStorage.getItem("poids");
    document.getElementById("demo").innerHTML = data;
}
result.addEventListener("click", function(){
    let calcule =(inputaille.value - 100 + inputage.value /10)*0.9 
    if(mince.checked == true){
     document.getElementById("demo").innerHTML = calcule *0.9  + "kg";
    }

    if (moyen.checked == true){
       document.getElementById("demo").innerHTML = calcule + "kg";

    }

    if(large.checked == true){
       document.getElementById("demo").innerHTML = calcule * 0.9*0.1 + "kg";

    }
    
    localStorage.setItem("poids", calcule )
    document.getElementById("demo").textContent = calcule.toFixed(2) +  "Kg" ;

})

