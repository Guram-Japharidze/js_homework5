// 1
let taskOne = document.body.children[0]

taskOne.classList.add("wraper")

let img = document.createElement("img")
img.src = "img.jpeg"
img.style.width = "700px"

let h = document.createElement("h2")
h.classList.add("title")
h.textContent = "image title"
h.style.color = "red"
h.style.fontSize = "30px"


document.body.children[0].appendChild(img)
document.body.children[0].appendChild(h)

// 2

let taskTwo = document.querySelectorAll(".task2")

let p = document.createElement("p")
p.classList.add("text")
p.textContent = ("hello")

document.body.children[1].appendChild(p)
