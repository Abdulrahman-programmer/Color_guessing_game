function random() {
    let rd = Math.floor(Math.random() * 256);
    return rd;
}

function rd() {
    if (level == "easy") {
        return Math.floor(Math.random() * 3)
    }
    else {
        return Math.floor(Math.random() * 6)
    }
}

function rd_color(level) {
    if (level == "hard") {
        return [
            `rgb(${random()},${random()},${random()})`,
            `rgb(${random()},${random()},${random()})`,
            `rgb(${random()},${random()},${random()})`,
            `rgb(${random()},${random()},${random()})`,
            `rgb(${random()},${random()},${random()})`,
            `rgb(${random()},${random()},${random()})`
        ]
    }
    else {
        return [`rgb(${random()},${random()},${random()})`,
        `rgb(${random()},${random()},${random()})`,
        `rgb(${random()},${random()},${random()})`
        ]
    }
}
function set_game(params) {
    result.innerText = ""
    heading.style.backgroundColor = "rgb(38, 157, 232)";
    if (level == "easy") {
        let colors = rd_color(level);
        box1.style.backgroundColor = colors[0];
        box2.style.backgroundColor = colors[1];
        box3.style.backgroundColor = colors[2];
        clr = colors[rd()];
        color.innerHTML = clr.toUpperCase();
    }
    else {
        let colors = rd_color(level);
        box1.style.backgroundColor = colors[0];
        box2.style.backgroundColor = colors[1];
        box3.style.backgroundColor = colors[2];
        box4.style.backgroundColor = colors[3];
        box5.style.backgroundColor = colors[4];
        box6.style.backgroundColor = colors[5];
        clr = colors[rd()];
        color.innerHTML = clr.toUpperCase();
    }
}

let level = "easy"
const row2 = document.getElementById("row2")
const result = document.getElementById("result")
const heading = document.getElementById("heading")
const color = document.getElementById("color")
const color_btn = document.getElementById("new_color")
const easy_btn = document.getElementById("easy")
const hard_btn = document.getElementById("hard")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
const box6 = document.getElementById("box6")
const boxes = document.getElementsByClassName("box");
let clr;
set_game();
color_btn.addEventListener("click",
    function () {
        set_game();
    }
)
function react(a) {
    if (clr == a.style.backgroundColor.split(' ').join('')) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = clr
            heading.style.backgroundColor = clr
        }
        result.innerText = "Correct!!!"
    }
    else {
        a.style.backgroundColor = "transparent"
        result.innerText = "Try again!!!"
    }
}
hard_btn.addEventListener("click",
    function () {
        level = "hard";
        set_game();
        row2.style.display = "flex"
    }
)
easy_btn.addEventListener("click",
    function () {
        level = "easy";
        set_game();
        row2.style.display = "none"
    }
)



box1.addEventListener("click",
    function () {
        react(box1);
    }
)
box2.addEventListener("click",
    function () {
        react(box2);
    }
)
box3.addEventListener("click",
    function () {
        react(box3);
    }
)
box4.addEventListener("click",
    function () {
        react(box4);
    }
)
box5.addEventListener("click",
    function () {
        react(box5);
    }
)
box6.addEventListener("click",
    function () {
        react(box6);
    }
)
