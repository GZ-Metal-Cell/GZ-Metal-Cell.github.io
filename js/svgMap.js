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