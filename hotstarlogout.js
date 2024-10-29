let logout=confirm("You wanna logout?")

if(logout){
    alert("Wait few seconds")
    
    setTimeout(function(){
        alert("Logout Successfully")
    },3000)
}
else{
    alert("Logout cancelled")
}