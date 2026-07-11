function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["💗", "💕", "🤍", "🎀", "✨"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    heart.style.fontSize = (Math.random() * 15 + 15) + "px";

    document.querySelector(".hearts").appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 6000);

}


setInterval(createHeart, 500);
