const svgObject = document.getElementById("svgObject");

svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    const elements = svgDoc.querySelectorAll(".non-blocking");

    elements.forEach(el => {
        el.style.pointerEvents = "none";
    });

    const pro = svgDoc.getElementById("pro");
    const fan = svgDoc.getElementById("fan");
    const xie = svgDoc.getElementById("xie");
    const guan = svgDoc.getElementById("guan");

    bindHoverScale(pro, 1.75);
    bindHoverScale(fan, 1.75);
    bindHoverScale(xie, 1.75);
    bindHoverScale(guan, 1.75);

    bindTooltip(pro, "这是晋爷！", svgObject);
    bindTooltip(fan, "这是豫爷！", svgObject);
    bindTooltip(xie, "这是冀爷！", svgObject);
    bindTooltip(guan, "这是闽爷！", svgObject);

    tocItem("hbu", 1.5, svgObject, "再见了冀大！", "#8F0", "header_15_00_最后一次组会");
    tocItem("baodingdong", 1.5, svgObject, "再见了京畿之门！", "#8F0", "header_16_50_最后的保定东_");
    tocItem("beijingxi", 1.5, svgObject, "再一次进京！", "#8F0", "header_17_56_G512");
    tocItem("tiantan", 1.5, svgObject, "天圆地方！", "#8F0", "header_10_22_天坛公园");
    tocItem("donghuqu", 1.5, svgObject, "这辈子又可以见到小迷糊了！", "#8F0", "header_12_32_海底捞月");
    tocItem("guomao", 1.5, svgObject, "就几座高楼", "#8F0", "header_14_41_国贸三期");
    tocItem("library", 1.5, svgObject, "狗来了都要读本书再走~", "#8F0", "header_08_05_国图北馆");
    tocItem("yonghegong", 1.5, svgObject, "虔诚拜三拜~", "#8F0", "header_14_58_飞檐斗拱");
    tocItem("xidan", 1.5, svgObject, "经典大悦城", "#8F0", "header_16_50_冰雪皇后");
    tocItem("beijingnan", 1.5, svgObject, "再见了北方！", "#8F0", "header_06_29_北京南站");
});