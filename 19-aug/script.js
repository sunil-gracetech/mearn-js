//var n=-22
//console.log(Math.abs(n))

//console.log(Math.pow(5,3))

//console.log(Math.ceil(5.4))
//console.log(Math.floor(5.4))
//console.log(Math.round(5.6))

//console.log(Math.ceil(Math.random()*100*100))


/*
console.log(dd.getFullYear())
console.log(dd.getMonth())
console.log(dd.getDay())
console.log(dd.getTime())
*/

//console.log(dd.setMonth(5))
//console.log(dd.toDateString())
//console.log(dd.toTimeString())

/*
function PrintDate(){
    var dd=new Date();
    document.getElementById("box").innerHTML=dd.toLocaleTimeString()
}

setInterval(PrintDate,1000)
*/

/*
var ss=20
var id
function startTime(){
 id=setInterval(Timer,1000)
}
function Timer(){

    if(ss<=0){
        clearInterval(id)
        alert("time ended")
    }
    document.getElementById("box").innerHTML=ss
    ss--
}

document.getElementById("resume").addEventListener("click",startTime)
document.getElementById("pouse").addEventListener("click", function(){
    clearInterval(id)
})


startTime()
*/

setTimeout(function(){
    alert("Hi")
},5000)
