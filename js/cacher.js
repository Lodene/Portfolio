
let verif = 0;

function onestla(element1, element2){
    let elabout = document.getElementById(element1);
    let eltexteabout = document.getElementById(element2);
    element1.onclick = bouger;

    elabout.addEventListener("mouseover", function( event ) {
        eltexteabout.style.opacity= "75%";
        elabout.style.opacity = "80%";
    });

    elabout.addEventListener("mouseleave", function( event ) {
        eltexteabout.style.opacity= "0%";
        elabout.style.opacity = "100%";
    });

}

function verification(val, element){
    let fenetre = document.getElementById(element);
    if (val == 1){
        if (verif == 0){
            verif ++;
            fenetre.classList.add("showed");
        } else {
            sauvegarde.classList.remove("showed");
            fenetre.classList.add("showed"); 
        }
    } else if (val == 2) {
        fenetre.classList.remove("showed");
        verif --;
    }
    sauvegarde = fenetre;
}


onestla("about", "texteabout");
onestla("skills", "texteskills");
onestla("experience", "texteexperience");

onestla("cv", "textecv");
onestla("contact", "textecontact");

onestla("reseaux", "textereseaux");

