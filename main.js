const ecran = document.querySelector(".ecran");
const touches = document.querySelectorAll(".bouton");
ecran.textContent = "Hello";



touches.forEach(touches => {
    touches.addEventListener('click', () => gererTouches(touches.innerText))
});

function gererTouches(valeurTouche) {
    switch (valeurTouche) {
        case "=":
            calculerResultat();
            break;
        case "C":
            effacerEcran();
            break;
        default:
            affichageValeur(valeurTouche);
    }
}

function affichageValeur(valeurEntree) {
    if (ecran.textContent === 'Hello') {
        ecran.textContent = ''; // Clear the greeting message
    }
    ecran.textContent += valeurEntree;
}

function effacerEcran() {
    ecran.textContent = "";
}

function calculerResultat() {
    const valeurEcran = ecran.textContent;
    const operator = ["+", "-", "/", "*"];
    let currentOperator = "";
    for (let i = 0; i < valeurEcran.length; i++) {
        if (operator.includes(valeurEcran[i])) {
            currentOperator = valeurEcran[i];
        }
    }
    if (currentOperator) {
        const valeurTempo = valeurEcran.split(currentOperator);
        const numeroUn = parseFloat(valeurTempo[0]);
        const numeroDeux = parseFloat(valeurTempo[1]);
        switch (currentOperator) {
            case "+":
                ecran.textContent = numeroUn + numeroDeux;
                break;
            case "-":
                ecran.textContent = numeroUn - numeroDeux;
                break;
            case "/":
                if (numeroDeux !== 0) {
                    ecran.textContent = numeroUn / numeroDeux;
                } else {
                    ecran.textContent = "divise pas par 0 ";
                }
                break;
            case "*":
                ecran.textContent = numeroUn * numeroDeux;
                break;
            default:
                ecran.textContent = "Error invalid operator";
        }
    }
};
