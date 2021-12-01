
let verif = 0;

function onestla(element1, element2){
    let first = document.getElementById(element1);
    let two = document.getElementById(element2);
    console.log('uwu');
    first.addEventListener("mouseover", function( event ) {
        two.style.opacity= "75%";
        first.style.opacity = "80%";
    });

    first.addEventListener("mouseleave", function( event ) {
        two.style.opacity= "0%";
        first.style.opacity = "100%";
    });

}

//Affichage Fenetre
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
        fenetre.classList.add("ciao");
        console.log(fenetre)
        verif --;
    }
    sauvegarde = fenetre;
}

// SkillBar
skillBars = document.querySelectorAll(".skillBar");
skillBars.forEach((skillBar) => {
    
    let percentage = skillBar.dataset.percentage;
    skillBar.style.background =
        "linear-gradient(90deg, rgb(245 223 77) 0%, rgb(245 223 77) " +
        percentage +
        "%, rgb(35 38 38) " +
        percentage +
        "%, rgb(35 38 38) 100%)";
});



onestla("about", "texteabout");
onestla("skills", "texteskills");
onestla("experience", "texteexperience");

onestla("cv", "textecv");
onestla("contact", "textecontact");

onestla("reseaux", "textereseaux");

