const apiGeo = 'https://opentdb.com/api.php?amount=1&category=22&type=multiple';


async function getTrivia(){
    let response = await fetch(apiGeo);
    let data = await response.json();
    return data;
}

function shuffleAnswers(answers){
    for(let i=3;i>0;i--){
        let a = Math.floor(Math.random())*(i+1);
        [answers[i], answers[a]] = [answers[a], answers[i]];
    }
}

getTrivia().then(data => {
    const results = data.results;

    document.getElementById('question').innerHTML = results[0].question;

    const answers = [...results[0].incorrect_answers, results[0].correct_answer];
    shuffleAnswers(answers);

    for(let i=0; i<4;i++){
        let a = i+1;
        document.getElementById(`choiceLabel${a}`).innerHTML = answers[i];
        document.getElementById(`choice${a}`).value = answers[i];
    }


    document.getElementById('enter').addEventListener('click', () => {
        document.querySelectorAll('input[name="choice"]').forEach(el => {
            if(el.checked){
                if(el.value === results[0].correct_answer){
                    document.getElementById("message").innerHTML='Correct! Good job, you can move on to the next question!';
                }
                else{
                    document.getElementById("message").innerHTML= 'Sorry, you guessed wrong. Try again though!';
                }
            }
        })
    })
})

document.getElementById('new').addEventListener('click', () => {
    location.reload();
  });
  