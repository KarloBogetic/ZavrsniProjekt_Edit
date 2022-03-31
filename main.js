const apiCeleb = 'https://opentdb.com/api.php?amount=10&category=26&type=multiple';
let api=apiCeleb; /* zasad,pretvorit u funkciju poslije da bira apije po odabranoj kategoriji */

async function getTrivia(){
    let response = await fetch(api);
    let data = await response.json();
    return data;
}