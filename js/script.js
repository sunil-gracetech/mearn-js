var customer=[
    {"id":1,"name":"ajay","email":"ajajy992@gmail.com","gender":"male"},
    {"id":2,"name":"vijay","email":"vijay992@gmail.com","gender":"male"},
    {"id":3,"name":"rohit","email":"rohit992@gmail.com","gender":"male"}
]

var CustomerObject=function(id,name,email,gender){
    this.id=id;
    this.name=name;
    this.email=email;
    this.gender=gender
}

document.forms[0].addEventListener("submit", function(e){
    e.preventDefault()
    var input=document.querySelectorAll("form input, form select, form button")
    //console.log(input[0].value)
    if(input[3].innerHTML=="Submit")
    {
    var id=customer[customer.length-1].id
        id+=1;
    var obj=new CustomerObject(id,input[0].value,input[1].value,input[2].value)

    customer.push(obj)
    }
    else if(input[3].innerHTML=="Update"){
        var obj=new CustomerObject(input[4].value,input[0].value,input[1].value,input[2].value)

       customer.splice(input[4].value-1,1,obj)
      //console.log(input)
        input[3].innerHTML="Submit"
    }
    BindCustomer(customer)
    this.reset()

})

document.getElementById("search_txt").addEventListener("keyup", function(){
    var txt=this.value;
   var scustomer=customer.filter(function(e){
       return e.name.startsWith(txt) ||e.gender==txt
   })
   BindCustomer(scustomer)
})

function BindCustomer(customer){
    var temp=`<tr><th>Id</th><th>Name</th><th>Email</th><th>Gender</th><th>Action</th></tr>`
    customer.forEach(function(cust,i){
        temp+=`<tr><td>${cust.id}</td><td>${cust.name}</td><td>${cust.email}</td><td>${cust.gender}</td><td><a onclick="editcustomer(${i})"><i class="fa fa-edit"></i></a>|<a onclick="deletecustomer(${i})"><i class="fa fa-trash"></i></a></td></tr>`
    })
    document.getElementById("tbl_customer").innerHTML=temp
}

function editcustomer(index){
    var cust=customer[index]
    var input=document.querySelectorAll("form input, form select, form button")
    input[0].value=cust.name;
    input[1].value=cust.email;
    input[4].value=cust.id;
    input[3].innerHTML="Update"
}
function deletecustomer(index){
    var r=window.confirm("Are you sure to remove this customer ?")
    if(r){
        customer.splice(index,1);
        BindCustomer(customer)
    }

}

window.addEventListener("load",function(){
    BindCustomer(customer)
})