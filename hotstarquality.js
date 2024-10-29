let quality=prompt("Choose one video quality:: 480p, 780p, 4k").toLowerCase()

switch(quality){
    case "480p":
        alert("you have choosen 720p, Good for average speed internet")
        break
    case "780p":
        alert("you have choosen 1080p, This is HD quality")
        break
    case "4k":
        alert("Enjoy ultra HD uality")
        break
    default:
        alert("Invalid, Please choose correct quality")
}
