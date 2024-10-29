let products=["dress","watch","ring","laptop"]
let productrating=[]

for(i=0;i<products.length;i++){
    let rating=prompt(`Enter the rating of ${products[i]} out of 5`)

    if(rating>0 && rating <=5){
        productrating.push(`${products[i]} : ${rating}/5`)
    }else{
        alert("invalid rating")
    }
}
alert(`Thanks for your rating, your ratings for the products are : \n ${productrating.join("\n")}`);

