const tools = document.querySelectorAll(".tools__tool");
const newcomers = document.querySelectorAll(".newcomers__tool");

function addHover(blocks, element) {
    blocks.forEach((block) => {
        const image = block.querySelector(`.${element}__heart`);
        const originalSrc = image.src;
        const newSrc = "./images/svg/heart-red.svg";
        const button = block.querySelector(`.${element}__button`);

        block.addEventListener("mouseenter", () => {
            image.src = newSrc;
            button.classList.remove(`${element}__button`);
            button.classList.add("button-transform");
        });

        block.addEventListener("mouseleave", () => {
            image.src = originalSrc;
            button.classList.remove("button-transform");
            button.classList.add(`${element}__button`);
        });
    });
}

addHover(tools, "tools");
addHover(newcomers, "newcomers");
