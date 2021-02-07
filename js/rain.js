

{
    let pA = 0.4;       //bedzie deszcz
    let pB = 1 - pA;    //brak deszczu

    let pAA = 0.6;      //prawd. deszczu gdy zapowiedziano deszcz
    let pBB = 0.9;      //prawd. braku deszczu gdy zapowiedziano brak deszczu

    let pBA = 1 - pAA;  //prawd. braku deszczu gdy zapowiedziano deszcz
    let pAB = 1 - pBB;  //prawd. deszczu gdy zapowiedziano brak deszczu

    let pZA = ((pAB - pA) / (pAB - pAA)).toFixed(2); //prawd. zapowiedzi deszczu
    let pZB = (1 - pZA).toFixed(2); //prawd. zapowiedzi braku deszczu

    let pE = (pBA * pZA + pAB * pZB).toFixed(2); //prawd. błędu prognozy

    console.log("**********************************************************");
    console.log("Prawdopodobieństwo prognozy deszczu: " + pZA);
    console.log("Prawdopodobieństwo prognozy braku deszczu: " + pZB);
    console.log("Prawdopodobieństwo błędu prognozy: " + pE);
    console.log("**********************************************************");
}
{
    let pZA = 0.4;       //bedzie deszcz
    let pZB = 1 - pZA;    //brak deszczu

    let pAA = 0.6;      //prawd. deszczu gdy zapowiedziano deszcz
    let pBB = 0.9;      //prawd. braku deszczu gdy zapowiedziano brak deszczu

    let pBA = 1 - pAA;  //prawd. braku deszczu gdy zapowiedziano deszcz
    let pAB = 1 - pBB;  //prawd. deszczu gdy zapowiedziano brak deszczu

    let pA = (-((pAB - pAA) * pZA - pAB)).toFixed(2); //prawd. zapowiedzi deszczu
    let pB = (1 - pA).toFixed(2); //prawd. zapowiedzi braku deszczu

    let pE = (pBA * pZA + pAB * pZB).toFixed(2); //prawd. błędu prognozy

    console.log("**********************************************************");
    console.log("Prawdopodobieństwo deszczu: " + pA);
    console.log("Prawdopodobieństwo braku deszczu: " + pB);
    console.log("Prawdopodobieństwo błędu prognozy: " + pE);
    console.log("**********************************************************");    
}
