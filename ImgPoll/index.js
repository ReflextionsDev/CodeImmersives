const input_pic1 = document.getElementById("input_pic1")
const input_pic2 = document.getElementById("input_pic2")
const poll_pic1 = document.getElementById("poll_pic1")
const poll_pic2 = document.getElementById("poll_pic2")

const prompt = document.getElementById("prompt")


input_pic1.onchange = pollUpload1
input_pic2.onchange = pollUpload2




function pollUpload1(){
    poll_pic1.src = URL.createObjectURL(this.files[0])
    pollReady()
}

function pollUpload2(){
    poll_pic2.src = URL.createObjectURL(this.files[0])
    pollReady()
}


const btn_pollstart = document.getElementById("btn_pollstart")





document.addEventListener("click",() => console.log(input_pic1.value))


// Convert to function


function pollReady(){
    if(input_pic1.value != "" && input_pic2.value != ""){
        btn_pollstart.style.display = "block"
        console.log("Show")
    } else {
        btn_pollstart.style.display = "none"
        console.log("Hide")
    }
}



pollReady()


btn_pollstart.addEventListener("click",pollStart)



function pollStart(){
    prompt.style.display ="none"
}
