const title = document.getElementById("title")
const btn_green = document.getElementById("btn_green")


btn_green.addEventListener("click", () => buttonClicked("green"))

function buttonClicked(color) {
    switch(color){
        case "green":
            title.style.color = "green"
            break
        default:
            title.style.color = "red"
    }
}