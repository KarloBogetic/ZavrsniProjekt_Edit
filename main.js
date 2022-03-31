const apiCeleb = 'https://opentdb.com/api.php?amount=10&category=26&type=multiple';
let api=apiCeleb; /* zasad,pretvorit u funkciju poslije da bira apije po odabranoj kategoriji */

async function getTrivia(){
    let response = await fetch(api);
    let data = await response.json();
    return data;
}

getTrivia().then(data => {
    const results = data.results;
/*     console.log(results);*/
    document.getElementById('question').innerHTML = results[0].question;
    const answers = [...results[0].incorrect_answers, results[0].correct_answer];
/*     console.log(answers); */
    shuffleAnswers(answers);

    for(let i=0; i<4;i++){
        let a = i+1;
        document.getElementById(`choiceLabel${a}`).innerHTML = answers[i];
        document.getElementById(`choice${a}`).value = answers[i];
    }
    
    document.getElementById('submit').addEventListener('click',() =>{
        /* function checkAnswers(){} */
    })
})

function shuffleAnswers(answers){
    for(let i=3;i>0;i--){
        let a = Math.floor(Math.random())*(i+1);
        [answers[i], answers[a]] = [answers[a], answers[i]];
    }
}

/* function checkAnswers(){

} */

