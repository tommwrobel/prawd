function result() {
    let pZA = document.getElementById("pZA").value;       //bedzie deszcz
    let pZB = 1 - pZA;    //brak deszczu

    let pAA = document.getElementById("pAA").value;      //prawd. deszczu gdy zapowiedziano deszcz
    let pBB = document.getElementById("pBB").value;      //prawd. braku deszczu gdy zapowiedziano brak deszczu

    let pBA = 1 - pAA;  //prawd. braku deszczu gdy zapowiedziano deszcz
    let pAB = 1 - pBB;  //prawd. deszczu gdy zapowiedziano brak deszczu

    let pA = (-((pAB - pAA) * pZA - pAB)).toFixed(2); //prawd. zapowiedzi deszczu
    let pB = (1 - pA).toFixed(2); //prawd. zapowiedzi braku deszczu

    let pE = (pBA * pZA + pAB * pZB).toFixed(2); //prawd. błędu prognozy
    
    let result = "Prawdopodobieństwo wystąpienia A: " + pA + "\n" 
        + "Prawdopodobieństwo wystąpienia B: " + pB + "\n"
        + "Prawdopodobieństwo błędu prognozy: " + pE;

    document.getElementById("result").value = result;
}

function update(element) {
    document.getElementById("pZB").value = (1 - element.value).toFixed(2);
}

function update2(element) {
    document.getElementById("pB").value = (1 - element.value).toFixed(2);
}

function result2() {
    let pA = document.getElementById("pA").value;       //bedzie deszcz
    let pB = 1 - pA;    //brak deszczu

    let pAA = document.getElementById("pAA2").value;      //prawd. deszczu gdy zapowiedziano deszcz
    let pBB = document.getElementById("pBB2").value;      //prawd. braku deszczu gdy zapowiedziano brak deszczu

    let pBA = 1 - pAA;  //prawd. braku deszczu gdy zapowiedziano deszcz
    let pAB = 1 - pBB;  //prawd. deszczu gdy zapowiedziano brak deszczu

    let pZA = ((pAB - pA) / (pAB - pAA)).toFixed(2); //prawd. zapowiedzi deszczu
    let pZB = (1 - pZA).toFixed(2); //prawd. zapowiedzi braku deszczu

    let pE = (pBA * pZA + pAB * pZB).toFixed(2); //prawd. błędu prognozy

    let result = "Prawdopodobieństwo prognozy A: " + pZA + "\n" 
        + "Prawdopodobieństwo prognozy B: " + pZB + "\n"
        + "Prawdopodobieństwo błędu prognozy: " + pE;

    document.getElementById("result2").value = result;
}