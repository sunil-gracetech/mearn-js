
var Like=(function(){
    var i=0;
    
    return{
        "like":function(){return ++i},
        "dislike":function(){return --i;}
    }

    })()
/*
function product(x,y,callback){
    console.log("start")
    var z;
    setTimeout(function(){
    console.log("process")
     z=x*y;
    callback(z);
    },3000)
    console.log("end")

}

product(33,44,function(r){
    console.log(r)
})
*/

/*
function sum(){
    var s=0;
    for(var i=0; i<arguments.length; i++) s+=arguments[i]
    console.log(s)
}

sum(2,3,4,5,6,8,7)
*/

/*
function Test(x)
{
    x+=10
    console.log("Inside: "+x)
}
var myobj={"x":5}

Test(myobj.x)
console.log("Outside: "+myobj.x)

*/

message()
var message=function (){
    alert("message")
}

