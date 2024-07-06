const blocks = document.querySelectorAll(".tools__tool");
blocks.forEach((block) => {
    const image = block.querySelector(".tools__heart");
    const originalSrc = image.src;
    const newSrc = "./images/svg/heart-red.svg";
    const button = block.querySelector(".tools__button");

    block.addEventListener("mouseenter", () => {
        image.src = newSrc;
        button.classList.remove("tools__button");
        button.classList.add("button-transform");
    });

    block.addEventListener("mouseleave", () => {
        image.src = originalSrc;
        button.classList.remove("button-transform");
        button.classList.add("tools__button");
    });
});
