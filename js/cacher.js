function onestla(element1, element2){
    let elabout = document.getElementById(element1);
    let eltexteabout = document.getElementById(element2);
    console.log(elabout);
    console.log(eltexteabout);

    elabout.addEventListener("mouseover", function( event ) {
        eltexteabout.style.opacity= "75%";
        elabout.style.opacity = "80%";
    });

    elabout.addEventListener("mouseleave", function( event ) {
        eltexteabout.style.opacity= "0%";
        elabout.style.opacity = "100%";
    });

}

function ramener(element1){
    let element = document.getElementById(element1);
    
}

onestla("home", "textehome");
onestla("about", "texteabout");
onestla("skills", "texteskills");
onestla("experience", "texteexperience");

onestla("cv", "textecv");
onestla("contact", "textecontact");

onestla("portfolio", "texteportfolio");