// function win 
function winner(){
    document.getElementById('score').textContent="HaHa!!! j'ai gagné je suis un génie :) !";
    document.getElementById('score').classList.replace('alert-danger','alert-success');
    document.getElementById('image').src='images/pixlr-bg-result.png';
    document.getElementById('image').style.animationName="move";
    document.getElementById('image').style.animationIterationCount="initial";
    const num = document.getElementById('guessinNumber').value;
    document.getElementById('random').textContent=`Haa! je l'ai trouver c'est le ${num} :)`;
    document.getElementById('status').classList.add('visually-hidden');

}
// function lose
function loser(){
    document.getElementById('score').textContent="Oops!! j'ai perdu bien joué";
    document.getElementById('score').classList.replace('alert-success','alert-danger');
    document.getElementById('image').src='images/pixlr-bg-result copie.png';
    document.getElementById('image').style.animationName="lose";
    document.getElementById('random').classList.add('visually-hidden');
    document.getElementById('status').classList.add('visually-hidden');
    document.getElementById('image').style.animationIterationCount="initial";

}
// function run()
function run(){
    const num = document.getElementById('guessinNumber').value;
    var m = Math.floor(Math.random()*100);
    if(m==num){
        return true;
    }else{
        return m;
    }
}

// function sleep()
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// function guess() :
async function guess() {
    var res;
    var count=0;
    document.getElementById('image').style.animationName="jump";
    for (let i = 0; i < 20; i++) {
        count++;
        document.getElementById('status').classList.remove('visually-hidden');
        document.getElementById('status').textContent=`Essay N: ${count}`;
        document.getElementById('bas').classList.remove('visually-hidden');
        res =run();
        if(run()==true){
        document.getElementById('bas').classList.add('visually-hidden');
        document.getElementById('score').classList.remove('visually-hidden');
        document.getElementById('random').textContent=`je l'ai trouver vous avez choisi ${document.getElementById('guessinNumber').value}`;
        return winner();
        }else{
        document.getElementById('random').textContent=`je pense que vous avez choisi ${run()} mmm!!? non`;
        }
        await sleep(i * 500);
        document.getElementById('random').textContent=``;
    }
    document.getElementById('bas').classList.add('visually-hidden');
    document.getElementById('score').classList.remove('visually-hidden');
    loser();
}
// function reset():
function reset(){
    document.getElementById('status').classList.add('visually-hidden');
    document.getElementById('score').classList.add('visually-hidden');
    document.getElementById('image').src='images/pixlr-bg-result (2).png';
    document.getElementById('random').classList.remove('visually-hidden');
    document.getElementById('random').textContent="une autre partie ?! :)";
    document.getElementById('image').style.animationName="none";


}