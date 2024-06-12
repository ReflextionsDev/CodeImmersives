// document.getElementById("nuts").innerHTML = "IT WORKED!";

// document.getElementById("nuts").innerHTML = "deeze";


// nuts.innerHTML = "yeet";

var nuts2 = document.getElementById("nuts")




var butt = document.getElementById("butt")

butt.addEventListener("click", function() {
    nuts.innerHTML = "Button Clicked";
})

butt.addEventListener("mouseover", function() {
    nuts.innerHTML = "Mouseover";
})

butt.addEventListener("auxclick", function() {
    nuts.innerHTML = "Right button clicked";
    document.body.style.backgroundColor = "blue";
})


