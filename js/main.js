
let verif = 0;
let i = 2;
let j = 2;

function onestla(element1, element2){
    let first = document.getElementById(element1);
    let two = document.getElementById(element2);
    first.addEventListener("mouseover", function( event ) {
        two.style.opacity= "75%";
        two.style.zIndex = "99";
        first.style.opacity = "80%";
    });

    first.addEventListener("mouseleave", function( event ) {
        two.style.opacity= "0%";
        two.style.zIndex = "0";
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
            j = i;
            while (i != j){
                i = Math.floor(Math.random() * 2);
            }
            switch (i) {
                case 0:
                    j = i;
                    while (i != j){
                        i = Math.floor(Math.random() * 1);
                    }
                    switch (i) {
                        case 0:
                            fenetre.style.transform = "translateX(150%)";
                            fenetre.style.transform = "translateY(0vh)";
                            fenetre.style.transform = "translateX(0%)";
                            break;
                        case 1:
                            fenetre.style.transform = "translateX(150%)";
                            fenetre.style.transform = "translateY(-150vh)";
                            fenetre.style.transform = "translateX(0%)";
                            fenetre.style.transform = "translateY(0vh)";
                            break;
                        }
                    break;
                case 1:
                    j = i;
                    while (i != j){
                        i = Math.floor(Math.random() * 1);
                    }
                    switch (i) {
                        case 0:
                            fenetre.style.transform = "translateY(150vh)";
                            fenetre.style.transform = "translateX(0%)";
                            fenetre.style.transform = "translateY(0vh)";
                            break;
                        case 1:
                            fenetre.style.transform = "translateY(-150vh)";
                            fenetre.style.transform = "translateX(0%)";
                            fenetre.style.transform = "translateY(0vh)";
                            break;
                        }
                    break;
                case 2:
                    j = i;
                    while (i != j){
                        i = Math.floor(Math.random() * 1);
                    }
                    switch (i) {
                        case 0:
                            fenetre.style.transform = "translateX(150%)";
                            fenetre.style.transform = "translateY(0vh)";
                            fenetre.style.transform = "translateX(0%)";
                            break;
                        case 1:
                            fenetre.style.transform = "translateX(150%)";
                            fenetre.style.transform = "translateY(150vh)";
                            fenetre.style.transform = "translateX(0%)";
                            fenetre.style.transform = "translateY(0vh)";
                            break;
                    }
                    break;
                break;
            }
        } else {
            sauvegarde.classList.remove("showed");
            i = Math.floor(Math.random() * 2);
            switch (i) {
                case 0:
                    sauvegarde.style.transform = "translateY(150vh)";
                    break;
                case 1:
                    sauvegarde.style.transform = "translateX(150%)";
                    break
                case 2:
                    sauvegarde.style.transform = "translateY(-150vh)";
                    break;
            }
            j = i;
            while (i != j){
                i = Math.floor(Math.random() * 2);
            }
            fenetre.classList.add("showed");
            switch (i) {
                case 0:
                    fenetre.style.transform = "translateY(0vh)";
                    break;
                case 1:
                    fenetre.style.transform = "translateX(0%)";
                    break;
                case 2:
                    fenetre.style.transform = "translateY(0vh)";
                    break;
            }
        }
    } else if (val == 2) {
        fenetre.classList.remove("showed");
        j = i;
        while (i != j){
            i = Math.floor(Math.random() * 2);
        }
        switch (i) {
            case 0:
                fenetre.style.transform = "translateY(150vh)";
                break;
            case 1:
                fenetre.style.transform = "translateX(150%)";
                break
            case 2:
                fenetre.style.transform = "translateY(-150vh)";
                break;
        }
        sauvegarde = fenetre;
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

