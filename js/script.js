function result() {
    let pZA = document.getElementById("pZA").value;       
    let pZB = document.getElementById("pZB").value;

    let pAA = document.getElementById("pAA").value;      
    let pBB = document.getElementById("pBB").value;      

    let pBA = math.subtract(1, pAA);  //prawd. braku deszczu gdy zapowiedziano deszcz
    let pAB = math.subtract(1, pBB);  //prawd. deszczu gdy zapowiedziano brak deszczu


    let pA = -(math.subtract(math.multiply(math.subtract(pAB, pAA), pZA), pAB)); //prawd. deszczu
    let pB = math.subtract(1, pA); //prawd. zapowiedzi braku deszczu

    let pRA = math.divide(math.multiply(pZA, pAA), pA);
    let pRB = math.divide(math.multiply(pZB, pBB), pB);

    let pE = math.add(math.multiply(pBA, pZA), math.multiply(pAB, pZB)); //prawd. błędu prognozy
    
    let result = "> Prawd. wystąpienia A: " + pA.toFixed(6) + "\n" 
        + "> Prawd. wystąpienia B: " + pB.toFixed(6) + "\n\n"
        + "> Prawd. rzeczywiste A: " + pRA.toFixed(6) + "\n"
        + "> Prawd. rzeczywiste B: " + pRB.toFixed(6) + "\n\n"
        + "> Prawd. błędu prognozy: " + pE.toFixed(6);

    document.getElementById("result").value = result;
}

function result2() {
    let pA = document.getElementById("pA").value;       //bedzie deszcz
    let pB = document.getElementById("pB").value;    //brak deszczu

    let pAA = document.getElementById("pAA2").value;      //prawd. deszczu gdy zapowiedziano deszcz
    let pBB = document.getElementById("pBB2").value;      //prawd. braku deszczu gdy zapowiedziano brak deszczu

    let pBA = math.subtract(1, pAA);  //prawd. braku deszczu gdy zapowiedziano deszcz
    let pAB = math.subtract(1, pBB);  //prawd. deszczu gdy zapowiedziano brak deszczu

    let pZA = math.abs(math.divide(math.subtract(pAB, pA), math.subtract(pAB, pAA))); //prawd. zapowiedzi deszczu
    let pZB = math.subtract(1, pZA); //prawd. zapowiedzi braku deszczu

    let pRA = math.divide(math.multiply(pZA, pAA), pA);
    let pRB = math.divide(math.multiply(pZB, pBB), pB);

    let pE = math.add(math.multiply(pBA, pZA), math.multiply(pAB, pZB)); //prawd. błędu prognozy

    let result = "> Prawd. prognozy A: " + pZA.toFixed(6) + "\n" 
        + "> Prawd. prognozy B: " + pZB.toFixed(6) + "\n\n"
        + "> Prawd. rzeczywiste A: " + pRA.toFixed(6) + "\n"
        + "> Prawd. rzeczywiste B: " + pRB.toFixed(6) + "\n\n"
        + "> Prawd. błędu prognozy: " + pE.toFixed(6);

    document.getElementById("result2").value = result;
}


function update(element) {
    document.getElementById("pZB").value = math.subtract(1, element.value).toFixed(6);
}

function update2(element) {
    document.getElementById("pB").value = math.subtract(1, element.value).toFixed(6);
}