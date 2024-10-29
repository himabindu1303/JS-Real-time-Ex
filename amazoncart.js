let products=["dress","trousers","paintings","watch"]
let totalamount=0;
for(i=0;i<products.length;i++){
    let productprice=prompt(`Enter the price of ${products[i]}`)
    totalamount+=Number(productprice)
}

if(confirm(`Your total amount is ${totalamount}`)){
    alert("Thankyou for your purchase, Hope you'll love it")
}
else{
    alert("purchase cancelled")
}