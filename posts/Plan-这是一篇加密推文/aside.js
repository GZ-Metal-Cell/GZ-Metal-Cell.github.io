function createNode() {
    var e_0 = document.createElement("div");
    e_0.setAttribute("class", "music aside-card");
    var e_1 = document.createElement("div");
    e_1.setAttribute("class", "top");
    var e_2 = document.createElement("h1");
    e_2.appendChild(document.createTextNode("音乐"));
    e_1.appendChild(e_2);
    var e_3 = document.createElement("div");
    const ap = new APlayer({
        container: e_3,
        audio: [{
            name: '平凡之路',
            artist: '朴树',
            url: '/musics/平凡之路.mp3',
            cover: '/musics/平凡之路.webp'
        }]
    });
    e_0.appendChild(e_3);
    return e_0;
}

$(document).ready(function() {
    var parentElement = document.querySelector(".aside-bottom");
    var firstChild = parentElement.firstChild;
    parentElement.insertBefore(createNode(), firstChild);
});