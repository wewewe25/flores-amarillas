for(let i = 0; i < 150; i++){

    const star = document.createElement("div");

    star.style.position = "absolute";

    const size=Math.random()*10+2;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.borderRadius = "50%";

    star.style.background = "#FFD700";
    star.style.boxShadow="0 0 15px #F*D700, 0 0 30px #FFD700";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    document.body.appendChild(star);
const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

musicBtn.addEventListener("click",()=>{

music.play();

musicBtn.innerHTML =
"🎶 Reproduciendo";

});
}