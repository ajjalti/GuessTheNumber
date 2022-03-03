var userNumber;
var number;
// première méthode :
function Guess(n){
    var m;
    var condition=false;
    var count=0;
    while(!condition){
    m = Math.floor(Math.random()*100-10);
    count++;
    if(m==n){
        condition=true;
    }
    }
    if(count<50){
    return `voilà le nombre que vous avez choisi ${n} \n sa m'a pris seulement ${count} fois je suis un génie :)`;
}else if(count>50 && count<150){
    return `voilà le nombre que vous avez choisi ${n} \n sa m'a pris ${count} fois, bref c'étais un peux dur mais je suis un génie :)`;
}else if(count>150){
    return `oof c'étais vraiment dur de trouver votre nombre cette fois ${n}\n sa m'a pris ${count} fois mais je suis un génie malgrais sa :)`;
}
}
//deuxième méthode :
function guess(n,count){
    var m = Math.floor(Math.random()*100-10);
    if(m==n){
        count++;
        return `je suis douée j'ai trouvé votre numéro ${n} après ${count} fois `;
    }else{
        count++;
        return `oops pas encore essay N:${count} \n${guess(n,count)}`;    
    }
}
//partie test:
console.log(guess(25,0));
// console.log(Guess(25));
