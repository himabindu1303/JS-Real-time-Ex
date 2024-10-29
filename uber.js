let ride=prompt("Choose one ride UberX, UberXL, UberBlack").toLowerCase()
if(confirm(`you select ${ride}.Do you confirm the booking`)){
    alert("wait for few seconds")

    setTimeout(function(){
        alert("Driver is on the way, wait for a second")
    },2000)

    setTimeout(function(){
        alert("Thankyou,Enjoy your ride")
    },5000)
}
else{
    alert("booking cancelled")
}
