const text1_options = [
    "孔雀开屏~",
    "探头的小马儿",
    "迷路的鸽子啊 我在双手合十的晚上 渴望一双翅膀",
    "忧郁的眼神~",
    "黑兔子老是撅白兔子屁股……"
];
const text2_options = [
    "69 min. read",
    "7 min. read",
    "8 min. read",
    "87,658.1277 min. read"
];
const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
const image_options = [
    "https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1506073828772-2f85239b6d2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];

    currentOptionText2.dataset.nextText = text2_options[i];

    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);

    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove("anim-next");
    }, 650);
};

optionPrevious.onclick = function () {
    if (i === 0) {
        i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];

    currentOptionText2.dataset.previousText = text2_options[i];

    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);

    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove("anim-previous");
    }, 650);
};
