let plan=prompt("Choose your subscription plan: VIP, Premium, Free").toLowerCase()

switch(plan){
    case "vip":
        alert("You choose VIP, Enjoy ad-free shows")
    case "premium":
        alert("You choose Premium, Enjoy ad-free shows with HD quality")
        break
    case "free":
        alert("You choose Free plan, Ads are included and access for some shows and movies only")
        break
    default:
        alert("Invalid plan")
}