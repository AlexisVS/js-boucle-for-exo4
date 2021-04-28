// # Boucle (for, foreach)

// ## introduction
// ## Exercice 1
// - répète via une boucle for 5 fois ton prénom dans un console.log
// - affiche les tours de boucle dans un console.log
for (let i = 0; i < 5; i++) {
    console.log("Alexis");
}
// ## Exercice 2
// - déclare un tableau avec 3 prenoms de la classe
// - dans une boucle for, dites 'bonjour' + lePrenom qui se trouve dans le tableau
let arr = ["Alexis", "Mohammed", "Loic"];
for (let j = 0; j < arr.length; j++) {
    console.log(`Bonjour ${arr[j]}`);
}
// ## Exercice mélangé

// ### exercice 1
// - Demander un nombre maximal et afficher de 2 en 2 de 0 au nombre maximal (for)

let x = 20;
for (let k = 0; k <= x; k += 2) {
    console.log(k);
}

// ### Exercice 2
// - Demander un nombre maximal et afficher si le nombre est paire de 0 au nombre maximal(for)
// - Ex: `Le nombre x est paire`
let y = 30;
for (let l = 0; l <= 30; l++) {
    if (l % 2 == 0) {
        console.log(`le nombre ${l} est paire`)
    }
}

// ### Exercice 3
// - Dans la classe de la coding 13 il y a Alexis, Loic, Mohammed, Yassin, Issam, Mihai, Oussama, Dorian, Tania, Anthony, Junior, Kevin, Andy, Cheb Khaled, The Kairi 78, Arouf gangsta le plus beau de tout les rebeux.
// - Affichez les prenoms des etudiants et si leurs index est paire ou impaire.
// - Afficher a la fin touts les etudiants qui avaient des index paires ou impaires (forEach)

arr = ["Alexis", "Loic", "kkkkkk", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta le plus beau de tout les rebeux"];
console.log("***********");
let etudiantPairs = '';
let etudiantImpairs = '';
arr.forEach(element => {
    arr.indexOf(element) % 2 == 0 ? console.log(`L'étudiant ${element} est paire`) : console.log(`L'étudiant ${element} est impaire`);
    arr.indexOf(element) % 2 == 0 ? etudiantPairs = etudiantPairs + " " + element : etudiantImpairs = etudiantImpairs + " " + element;
});
console.log(etudiantPairs);
console.log(etudiantImpairs);
// ### Exercice 4 (boucle forEach) Partie 1
// 1. Créer un tableau avec 9 prénoms
// 2. Affiche chaque élément dans un console log
// 3. Affiche chaque premiere lettre de chaque élément dans un console log
// 4. Affiche chaque seconde lettre de chaque élément dans un console log
// 5. Affiche chaque seconde lettre de chaque élément concaténé a tout le mot lui meme exemple : si le mot et bonjour alors on devra affiché obonjour
// 6. Affiche tous les prénoms dans un console log dont l'indice est pair 

arr = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania"];
let prenoms = []
arr.forEach(element => {
    //.2
    console.log(element);
    //.3
    console.log(element[0]);
    //.4
    console.log(element[1]);
    //.5
    console.log(element[1] + element);
    //.6
    if (arr.indexOf(element) % 2 == 0) {
        prenoms.push(element)
    }
});
console.log(prenoms);
// ### Exercice 4 (boucle forEach) Partie 2
// 1. Créer un tableau avec 9 prénoms
// 2. Affiche tous les prénoms dont l'indice est impair en majuscule
// 3. Affiche tous les prénoms dont l'indice est pair avec la premiere lettre en majuscule
// 4. Affiche les prénoms impair ET plus long que 4caractères
// 5. Affiche les prénoms pair et plus long que 4caractères avec uniquement leur premiere lettre et en plus en majuscule (il n'y aura qu'une lettre en majuscule par mot)
// 6. Affiche tous les prénoms commencant par (a,e,m,f,y,n) mais pas les autres !
// 7. Affiche tous les prénoms plus long que 5 caractères et commencant par (a,e,m,f,y,n) 

arr.forEach(element => {
    //.1
    if (arr.indexOf(element) % 2 == 1) {
        console.log(element.charAt(0).toUpperCase() + element.slice(1));
        //.2
    } else {
        console.log(element.toUpperCase());
    }

});

arr.forEach(element => {
    if (arr.indexOf(element) % 2 == 1 && element.length > 4) {
        console.log(element);
    }
});
arr.forEach(element => {
    if (arr.indexOf(element) % 2 == 0 && element.length > 4) {
        console.log(element.charAt(0).toUpperCase());
    }
});

//(a,e,m,f,y,n)

arr.forEach(element => {
    switch (element[0].toLowerCase()) {
        case "a":
            console.log(element);
            break;
        case "e":
            console.log(element);
            break;
        case "m":
            console.log(element);
            break;
        case "f":
            console.log(element);
            break;
        case "y":
            console.log(element);
            break;
        case "n":
            console.log(element);
            break;
        default:
            break;
    }
});
arr.forEach(element => {
    switch (element[0].toLowerCase() && element.lenth > 5) {
        case "a":
            console.log(element);
            break;
        case "e":
            console.log(element);
            break;
        case "m":
            console.log(element);
            break;
        case "f":
            console.log(element);
            break;
        case "y":
            console.log(element);
            break;
        case "n":
            console.log(element);
            break;
        default:
            break;
    }
});


// ### Exercice 4 (boucle forEach) Partie 3
// 1. Créer un tableau avec 9 prénoms
// 2. Affiche tous les prénoms plus court que 5 caractère commencant par (a,e,m,f,y,n)  avec leur première lettre en majuscule
// 14 Affiche tous les prénoms plus long que 4 caractères commencant par (k,c,m,f,y,n,a,e,p,o) et qui sont impaire dans la liste 
// 3. Affiche tous les prénoms plus long que 5 caractères commencant par (k,c,m,f,y,n,a,e,p,o) et qui sont pair dans la liste avec leur premiere lettre en minuscule,leur seconde et derniere lettre en majuscule
// 4. Affiche tous les prénoms plus court que 7 caractères commencant par (k,m,f,y,n,a,e,o) et qui sont pair dans la liste mais uniquement leur deux premieres lettres concaténé les uns aux aures dont la premiere lettre et en majuscule et la seconde en majuscule, exemple :  karima,fanny,nicolas,elisa qui donnera KaFaNiEl

arr.forEach(element => {
    switch (element[0].toLowerCase() && element.lenth < 5) {
        case "a":
            console.log(element.charAt(0) + element.slice(1));
            break;
        case "e":
            console.log(element.charAt(0) + element.slice(1));
            break;
        case "m":
            console.log(element.charAt(0) + element.slice(1));
            break;
        case "f":
            console.log(element.charAt(0) + element.slice(1));
            break;
        case "y":
            console.log(element.charAt(0) + element.slice(1));
            break;
        case "n":
            console.log(element.charAt(0) + element.slice(1));
            break;
        default:
            break;
    }
});
// 14 Affiche tous les prénoms plus long que 4 caractères commencant par (k,c,m,f,y,n,a,e,p,o) et qui sont impaire dans la liste 
arr.forEach(element => {
    switch (element[0].toLowerCase() && arr.indexOf(element) % 2 == 1) {
        case "k":
            console.log(element);
            break;
        case "c":
            console.log(element);
            break;
        case "m":
            console.log(element);
            break;
        case "f":
            console.log(element);
            break;
        case "y":
            console.log(element);
            break;
        case "n":
            console.log(element);
            break;
        case "a":
            console.log(element);
            break;
        case "e":
            console.log(element);
            break;
        case "p":
            console.log(element);
            break;
        case "o":
            console.log(element);
            break;
        default:
            break;
    }
});
console.log("-x-x-x-x-x-x-x-x-x-");
// 3. Affiche tous les prénoms plus long que 5 caractères commencant par (k,c,m,f,y,n,a,e,p,o) et qui sont pair dans la liste avec leur premiere lettre en minuscule,leur seconde et derniere lettre en majuscule
arr.forEach(element => {
    switch (element.length > 5 && arr.indexOf(element) % 2 == 1 && element[0].toLowerCase()) {
        case "k":
            console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.slice(2, -1) + element.charAt(element.length - 1).toUpperCase());
            break;
        case "c":
            console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.slice(2, -1) + element.charAt(element.length - 1).toUpperCase());
            break;
        case "m":
            console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.slice(2, -1) + element.charAt(element.length - 1).toUpperCase());
            break;
        case "f":
            console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.slice(2, -1) + element.charAt(element.length - 1).toUpperCase());
            break;
        case "y":
            console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.slice(2, -1) + element.charAt(element.length - 1).toUpperCase());
            break;
        case "n":
            console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.slice(2, -1) + element.charAt(element.length - 1).toUpperCase());
            break;
        case "a":
            console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.slice(2, -1) + element.charAt(element.length - 1).toUpperCase());
            break;
        case "e":
            console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.slice(2, -1) + element.charAt(element.length - 1).toUpperCase());
            break;
        case "p":
            console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.slice(2, -1) + element.charAt(element.length - 1).toUpperCase());
            break;
        case "o":
            console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.slice(2, -1) + element.charAt(element.length - 1).toUpperCase());
            break;
        default:
            break;
    }
});
console.log("**********************************");
// 4. Affiche tous les prénoms plus court que 7 caractères commencant par (k,m,f,y,n,a,e,o) et qui sont pair dans la liste mais uniquement leur deux premieres lettres concaténé les uns aux aures dont la premiere lettre et en majuscule et la seconde en majuscule, exemple :  karima,fanny,nicolas,elisa qui donnera KaFaNiEl
let kafaniel = []
arr.forEach(element => {
    switch (element.length < 7 && arr.indexOf(element) % 2 == 0 && element[0].toLowerCase()) {
        case "k":
            element = element.toLowerCase().slice(0, 2)
            kafaniel.push(element);
            break;
        case "m":
            element = element.toLowerCase().slice(0, 2)
            kafaniel.push(element);
            break;
        case "f":
            element = element.toLowerCase().slice(0, 2)
            kafaniel.push(element);
            break;
        case "y":
            element = element.toLowerCase().slice(0, 2)
            kafaniel.push(element);
            break;
        case "n":
            element = element.toLowerCase().slice(0, 2)
            kafaniel.push(element);
            break;
        case "a":
            element = element.toLowerCase().slice(0, 2)
            kafaniel.push(element);
            break;
        case "e":
            element = element.toLowerCase().slice(0, 2)
            kafaniel.push(element);
            break;
        case "o":
            element = element.toLowerCase().slice(0, 2)
            kafaniel.push(element);
            break;
        default:
            break;
    }
});
for (let i2 = 0; i2 < kafaniel.length; i2++) {
    kafaniel[i2] = kafaniel[i2].charAt(0) + kafaniel[i2][1].toUpperCase()
}
kafaniel = kafaniel.join()
console.log(kafaniel);