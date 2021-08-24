/*
var calc={}
calc.product=function (x,y){
    return x*y;
}
calc.sum=function(x,y){return x+y}
calc.div=function(i,j){return i/j}
calc.mod=function(i,j){return i%j}

console.log(calc.mod(13,5))
*/

/*
var fun=(function(name){

    console.log("i am IIFE: "+name)

})("sandeep")
*/


var Customer=(function(){

    function Customer(amt){
        console.log(" i am constructor ")
        this.amount=amt;
       Customer.prototype.getAmount=function(){
            return this.amount;
        }
    
    }
    return Customer;
})()

var cc=new Customer(500)
var cc2=new Customer(700)
var cc3=new Customer(2300)
console.log(cc)
console.log(cc2)
console.log(cc3.getAmount())


