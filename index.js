let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");

let n1 = Math.floor(Math.random()*6) + 1;
let n2 = Math.floor(Math.random()*6) + 1;
image1.setAttribute("src", "images/dice"+n1+".png");
image2.setAttribute("src", "images/dice"+n2+".png");

const res = document.querySelector(".result");
if (n1==n2){
    res.innerHTML = "<i class='fa-solid fa-flag flex-item'></i> <h2 class='flex-item'>It's a draw</h2> <i class='fa-solid fa-flag flex-item'></i>";
}
else if (n1 > n2){
    res.innerHTML = "<i class='fa-solid fa-flag flex-item'></i> <h2 class='flex-item'>Player 1 wins!</h2>";
}
else {
    res.innerHTML = "<h2 class='flex-item'>Player 2 wins!</h2> <i class='fa-solid fa-flag flex-item'></i>";
}