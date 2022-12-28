var elBtn = document.querySelector('.btn')
var elInp = document.querySelector('.inp')
var elPas = document.querySelector('.pas')
var elText = document.querySelector('.text')
var  elQat = document.querySelector('.main')


var arr = ['ahroor', ' begzod',' muhamadsodiq',' abror',' isroil',' ahmadillo  ',' abdurahmon',' muhamadyoqub  ',' nasibilo',' muhamadnosir',' abduvosit',' mavlonbek',' shuhratbek',' Nomalum',]
var bosh = []

elBtn.addEventListener('click', function(){

    for(var i = 0; i < arr.length; i++){
        if(elInp.value == arr[i]){
            elInp.classList.add('green')
        }
        else if(elInp.value != arr[i]){
            elInp.classList.add('green')
        }
    }

})
var par =[ 465466, 64643652, 5156413, 63453216, 5151,]
var bos = []
elBtn.addEventListener('click',function(){
    for(var u = 0; u<par.length; u++){
        if(elPas.value == par[u]){
            elPas.classList.add('red')
        }
    }
})


function kirish(){
    for( var  i=0; i< arr.length; i++){
        for( var  u = 0; u< par.length; u++){
        if(elInp.value == arr[i] && elPas.value == pas[u]){
            
        }
    }
    }
}