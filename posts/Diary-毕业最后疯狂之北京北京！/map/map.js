const svgObject = document.getElementById("svgObject");

function bindHoverScale(element, scale = 1.2) {
    const originalTransform = element.getAttribute("transform") || "";
    const match = originalTransform.match(/matrix\(([^)]+)\)/);

    const [a, b, c, d, e, f] = match[1].split(" ").map(Number);

    const width = parseFloat(element.getAttribute("width"));
    const height = parseFloat(element.getAttribute("height"));

    const cx = a * (width / 2) + c * (height / 2) + e;
    const cy = b * (width / 2) + d * (height / 2) + f;

    element.addEventListener("mouseenter", () => {
        const s = scale;

        const newA = a * s;
        const newB = b * s;
        const newC = c * s;
        const newD = d * s;

        const newE = cx - s * (a * (width / 2) + c * (height / 2));
        const newF = cy - s * (b * (width / 2) + d * (height / 2));

        const newTransform = `matrix(${newA} ${newB} ${newC} ${newD} ${newE} ${newF})`;
        element.setAttribute("transform", newTransform);
    });

    element.addEventListener("mouseleave", () => {
        element.setAttribute("transform", originalTransform);
    });
}


function bindTooltip(element, text, objectElement) {
    element.addEventListener("mouseenter", () => {
        tooltip.textContent = text;
        tooltip.style.display = "block";
    });

    element.addEventListener("mousemove", (e) => {
        const objectRect = objectElement.getBoundingClientRect();
        const pageX = objectRect.left + e.clientX;
        const pageY = objectRect.top + e.clientY;

        tooltip.style.left = `${pageX + 10}px`;
        tooltip.style.top = `${pageY - 30}px`;
    });

    element.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
}

function tocItem(id, scale = 1.5, objectElement, text, color = "#8F0", tocLinkId) {
    const svgDoc = objectElement.contentDocument;
    const circle = svgDoc.getElementById(id);
    const circleBorder = svgDoc.getElementById(`${id}-border`);

    bindTooltip(circle, text, svgObject);

    const originalR = parseFloat(circle.getAttribute("r"));
    const originalColor = circle.getAttribute("fill");

    circle.addEventListener("mouseenter", () => {
        circle.setAttribute("r", originalR * scale);
        circle.setAttribute("fill", color);
        if (circleBorder) {
            circleBorder.setAttribute("r", originalR * scale);
        }
    });

    circle.addEventListener("mouseleave", () => {
        circle.setAttribute("r", originalR);
        circle.setAttribute("fill", originalColor);
        if (circleBorder) {
            circleBorder.setAttribute("r", originalR);
        }
    });

    circle.addEventListener("click", () => {
        const targetRect = document.getElementById(tocLinkId).getBoundingClientRect();
        window.scrollTo({
            top: targetRect.top + window.scrollY - 70,
            behavior: 'smooth'
        });
    });
}

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