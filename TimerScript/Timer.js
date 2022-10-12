var display = document.getElementById('display')

var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

var comecar = document.getElementById('comecar')
var parar = document.getElementById('parar')

var horaAtual;
var minutoAtual;
var segundoAtual;


var interval

for(var i = 00; i<=24; i++){
    horas.innerHTML+='<option value='+i+'>'+i+'</option>';
}

for(var i = 00; i<=60; i++){
    minutos.innerHTML+='<option value='+i+'>'+i+'</option>';
}

for(var i = 00; i<=60; i++){
    segundos.innerHTML+='<option value='+i+'>'+i+'</option>';
}

comecar.addEventListener('click',function(){
    horaAtual = horas.value
    minutoAtual = minutos.value
    segundoAtual = segundos.value
    display.childNodes[1].innerHTML=(horaAtual<10?'0'+horaAtual:horaAtual)+':'+(minutoAtual<10?'0'+minutoAtual:minutoAtual)+':'+(segundoAtual<10?'0'+segundoAtual:segundoAtual)
    


   

    interval = setInterval(function(){
        
        
        if(segundoAtual > 00){
            segundoAtual--;    
            }
            else if(segundoAtual == 00 && minutoAtual > 00){
                segundoAtual = 59
                minutoAtual--
            }
            else if(horaAtual > 00 && minutoAtual == 00 && segundoAtual == 00){
                horaAtual--
                minutoAtual = 60
            }
        if(horaAtual == 00 && minutoAtual == 00 && segundoAtual == 00){
            alert("Acabou o tempo!")
            clearInterval(interval)
            document.getElementById("alarm").play();
        }
                        
           

        display.childNodes[1].innerHTML=(horaAtual<10?'0'+horaAtual:horaAtual)+':'+(minutoAtual<10?'0'+minutoAtual:minutoAtual)+':'+(segundoAtual<10?'0'+segundoAtual:segundoAtual)
    }, 1000)
})


pausar.addEventListener('click',function(){
    clearInterval(interval)

})

function resume(){
    interval = setInterval(function(){
        if(segundoAtual > 00){
            segundoAtual--;    
            }
            else if(segundoAtual == 00 && minutoAtual > 00){
                segundoAtual = 59
                minutoAtual--
            }
            else if(horaAtual > 00 && minutoAtual == 00 && segundoAtual == 00){
                horaAtual--
                minutoAtual = 60
            }
        if(horaAtual == 00 && minutoAtual == 00 && segundoAtual == 00){
            alert("Acabou o tempo!")
            clearInterval(interval)
            document.getElementById("alarm").play();
        }
                        
           

        display.childNodes[1].innerHTML=(horaAtual<10?'0'+horaAtual:horaAtual)+':'+(minutoAtual<10?'0'+minutoAtual:minutoAtual)+':'+(segundoAtual<10?'0'+segundoAtual:segundoAtual)
    }, 1000)
}



function stop(){
    clearInterval(interval)
   segundoAtual = 00
   minutoAtual = 00
   horaAtual = 00
   document.getElementById('watch').innerText='00:00:00'
}