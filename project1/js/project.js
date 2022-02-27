function Cheatwin(){
    if(document.querySelector("#sheet").getAttribute('value')==1){
        document.querySelector('#sheet').innerHTML = "close";
        document.querySelector("#content").style.opacity = "0.1";
        document.querySelector("#img").style.opacity = "1";
        document.querySelector("#sheet").setAttribute('value',0);
        document.querySelector("#img").style.display='block';
    }
    else{
        document.querySelector('#sheet').innerHTML = "Cheat Sheet";
        document.querySelector("#content").style.opacity = "1";
        document.querySelector("#img").style.opacity = "0";
        document.querySelector("#sheet").setAttribute('value',1);
        document.querySelector("#img").style.display='none';
    }
}
document.querySelector('#sheet').addEventListener('click',Cheatwin);


let a=Math.trunc(Math.random() * 70)+1;
console.log(a);

if(a>0 && a<4){
    document.querySelector('#text').innerHTML ="I AM AN INFANT"
}
else if(a>2 && a<13){
    document.querySelector('#text').innerHTML ="I AM IN MY CHILDHOOD"
}
else if(a>11 && a<21){
    document.querySelector('#text').innerHTML ="I AM AN ADOLESCENT "
}
else if(a>19 && a<31){
    document.querySelector('#text').innerHTML ="I AM IN MY EARLY ADULTHOOD "
}
else if(a>29 && a<51){
    document.querySelector('#text').innerHTML ="I AM AN LATE ADULTHOOD "
}
else {
    document.querySelector('#text').innerHTML ="ELDERS "
}

function checkinput(){
    let input = document.querySelector('#num').value;
    if(input == a){
        document.querySelector('#icon').style.backgroundColor = 'green';
        document.querySelector('#icon').style.innerHTML=a;
        document.querySelector('#num').disabled=true;
        document.querySelector('#balloon').style.display='block';
        document.querySelector('#text').innerHTML='YOU WON PLAY AGAIN';
        document.querySelector('#text').style.color='green';
        console.log('correct');
    }
    else{
        console.log("wrong")
        let wrong= document.querySelector('#number').innerHTML
        wrong--;
        if(wrong == 0){
            document.querySelector('#text').innerHTML='GAME OVER'
            document.querySelector('#num').disabled=true;
        }
        else{
            document.querySelector('#number').innerHTML=wrong
            document.querySelector('#text').style.color='red';
        }
    }
}
document.querySelector('#submit').addEventListener('click',checkinput)