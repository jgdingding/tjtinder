firstname=document.getElementById("first_name");
lastname=document.getElementById("last_name");
email=document.getElementById("email");
password=document.getElementById("password");

function reg(){
    if(firstname.value.length!==undefined && lastname.value.length!==undefined && email.value.length!==undefined && password.value.length!==undefined){
        $.get('makeProfile',{first:firstname.value,last:lastname.value,email:email.value,pass:password.value},function(data){
        });
        console.log("success! finally");
    }else{
        location.reload();
    }
}