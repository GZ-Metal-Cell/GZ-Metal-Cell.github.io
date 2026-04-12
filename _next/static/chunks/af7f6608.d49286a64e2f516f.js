"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[221],{

/***/ 25790:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DA: () => (/* binding */ createLabel_default),
/* harmony export */   IU: () => (/* binding */ clear),
/* harmony export */   U: () => (/* binding */ insertCluster),
/* harmony export */   U7: () => (/* binding */ setNodeElem),
/* harmony export */   U_: () => (/* binding */ positionNode),
/* harmony export */   Zk: () => (/* binding */ labelHelper),
/* harmony export */   aP: () => (/* binding */ isValidShape),
/* harmony export */   gh: () => (/* binding */ clear2),
/* harmony export */   lC: () => (/* binding */ updateNodeBounds),
/* harmony export */   on: () => (/* binding */ insertNode)
/* harmony export */ });
/* harmony import */ var _chunk_YBOYWFTD_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86495);
/* harmony import */ var _chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95164);
/* harmony import */ var _chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16163);
/* harmony import */ var _chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37916);
/* harmony import */ var _chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78005);
/* harmony import */ var _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32165);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33948);
/* harmony import */ var roughjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94529);







// src/rendering-util/rendering-elements/shapes/util.ts

var labelHelper = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(async (parent, node, _classes) => {
  let cssClasses;
  const useHtmlLabels = node.useHtmlLabels || (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .evaluate */ ._3)((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)()?.htmlLabels);
  if (!_classes) {
    cssClasses = "node default";
  } else {
    cssClasses = _classes;
  }
  const shapeSvg = parent.insert("g").attr("class", cssClasses).attr("id", node.domId || node.id);
  const labelEl = shapeSvg.insert("g").attr("class", "label").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(node.labelStyle));
  let label;
  if (node.label === void 0) {
    label = "";
  } else {
    label = typeof node.label === "string" ? node.label : node.label[0];
  }
  const addBackground = !!node.icon || !!node.img;
  const isMarkdown = node.labelType === "markdown";
  const text2 = await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .createText */ .GZ)(
    labelEl,
    (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .sanitizeText */ .jZ)((0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .decodeEntities */ .Sm)(label), (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)()),
    {
      useHtmlLabels,
      width: node.width || (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)().flowchart?.wrappingWidth,
      // @ts-expect-error -- This is currently not used. Should this be `classes` instead?
      cssClasses: isMarkdown ? "markdown-node-label" : void 0,
      style: node.labelStyle,
      addSvgBackground: addBackground,
      markdown: isMarkdown
    },
    (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)()
  );
  let bbox = text2.getBBox();
  const halfPadding = (node?.padding ?? 0) / 2;
  if (useHtmlLabels) {
    const div = text2.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2);
    await (0,_chunk_YBOYWFTD_mjs__WEBPACK_IMPORTED_MODULE_0__/* .configureLabelImages */ .X)(div, label);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  if (useHtmlLabels) {
    labelEl.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  } else {
    labelEl.attr("transform", "translate(0, " + -bbox.height / 2 + ")");
  }
  if (node.centerLabel) {
    labelEl.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  }
  labelEl.insert("rect", ":first-child");
  return { shapeSvg, bbox, halfPadding, label: labelEl };
}, "labelHelper");
var insertLabel = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(async (parent, label, options) => {
  const useHtmlLabels = options.useHtmlLabels ?? (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)());
  const labelEl = parent.insert("g").attr("class", "label").attr("style", options.labelStyle || "");
  const text2 = await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .createText */ .GZ)(labelEl, (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .sanitizeText */ .jZ)((0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .decodeEntities */ .Sm)(label), (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)()), {
    useHtmlLabels,
    width: options.width || (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)()?.flowchart?.wrappingWidth,
    style: options.labelStyle,
    addSvgBackground: !!options.icon || !!options.img
  });
  let bbox = text2.getBBox();
  const halfPadding = options.padding / 2;
  if ((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)())) {
    const div = text2.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  if (useHtmlLabels) {
    labelEl.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  } else {
    labelEl.attr("transform", "translate(0, " + -bbox.height / 2 + ")");
  }
  if (options.centerLabel) {
    labelEl.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  }
  labelEl.insert("rect", ":first-child");
  return { shapeSvg: parent, bbox, halfPadding, label: labelEl };
}, "insertLabel");
var updateNodeBounds = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((node, element) => {
  const bbox = element.node().getBBox();
  node.width = bbox.width;
  node.height = bbox.height;
}, "updateNodeBounds");
var getNodeClasses = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((node, extra) => (node.look === "handDrawn" ? "rough-node" : "node") + " " + node.cssClasses + " " + (extra || ""), "getNodeClasses");
function createPathFromPoints(points) {
  const pointStrings = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`);
  pointStrings.push("Z");
  return pointStrings.join(" ");
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(createPathFromPoints, "createPathFromPoints");
function generateFullSineWavePoints(x1, y1, x2, y2, amplitude, numCycles) {
  const points = [];
  const steps = 50;
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  const cycleLength = deltaX / numCycles;
  const frequency = 2 * Math.PI / cycleLength;
  const midY = y1 + deltaY / 2;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = x1 + t * deltaX;
    const y = midY + amplitude * Math.sin(frequency * (x - x1));
    points.push({ x, y });
  }
  return points;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(generateFullSineWavePoints, "generateFullSineWavePoints");
function generateCirclePoints(centerX, centerY, radius, numPoints, startAngle, endAngle) {
  const points = [];
  const startAngleRad = startAngle * Math.PI / 180;
  const endAngleRad = endAngle * Math.PI / 180;
  const angleRange = endAngleRad - startAngleRad;
  const angleStep = angleRange / (numPoints - 1);
  for (let i = 0; i < numPoints; i++) {
    const angle = startAngleRad + i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x: -x, y: -y });
  }
  return points;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(generateCirclePoints, "generateCirclePoints");

// src/rendering-util/rendering-elements/clusters.js



// src/rendering-util/rendering-elements/intersect/intersect-rect.js
var intersectRect = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((node, point) => {
  var x = node.x;
  var y = node.y;
  var dx = point.x - x;
  var dy = point.y - y;
  var w = node.width / 2;
  var h = node.height / 2;
  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : h * dx / dy;
    sy = h;
  } else {
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : w * dy / dx;
  }
  return { x: x + sx, y: y + sy };
}, "intersectRect");
var intersect_rect_default = intersectRect;

// src/rendering-util/rendering-elements/createLabel.js
var createLabel = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(async (element, _vertexText, style, isTitle = false, isNode = false) => {
  let vertexText = _vertexText || "";
  if (typeof vertexText === "object") {
    vertexText = vertexText[0];
  }
  const config = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)();
  const useHtmlLabels = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)(config);
  return await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .createText */ .GZ)(
    element,
    vertexText,
    {
      style,
      isTitle,
      useHtmlLabels,
      markdown: false,
      isNode,
      width: Number.POSITIVE_INFINITY
    },
    config
  );
}, "createLabel");
var createLabel_default = createLabel;

// src/rendering-util/rendering-elements/shapes/roundedRectPath.ts
var createRoundedRectPathD = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, totalWidth, totalHeight, radius) => [
  "M",
  x + radius,
  y,
  // Move to the first point
  "H",
  x + totalWidth - radius,
  // Draw horizontal line to the beginning of the right corner
  "A",
  radius,
  radius,
  0,
  0,
  1,
  x + totalWidth,
  y + radius,
  // Draw arc to the right top corner
  "V",
  y + totalHeight - radius,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  radius,
  radius,
  0,
  0,
  1,
  x + totalWidth - radius,
  y + totalHeight,
  // Draw arc to the right bottom corner
  "H",
  x + radius,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  radius,
  radius,
  0,
  0,
  1,
  x,
  y + totalHeight - radius,
  // Draw arc to the left bottom corner
  "V",
  y + radius,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  radius,
  radius,
  0,
  0,
  1,
  x + radius,
  y,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD");

// src/rendering-util/rendering-elements/clusters.js
var rect = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(async (parent, node) => {
  _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Creating subgraph rect for ", node.id, node);
  const siteConfig = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)();
  const { themeVariables, handDrawnSeed } = siteConfig;
  const { clusterBkg, clusterBorder } = themeVariables;
  const { labelStyles, nodeStyles, borderStyles, backgroundStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  const shapeSvg = parent.insert("g").attr("class", "cluster " + node.cssClasses).attr("id", node.id).attr("data-look", node.look);
  const useHtmlLabels = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)(siteConfig);
  const labelEl = shapeSvg.insert("g").attr("class", "cluster-label ");
  let text2;
  if (node.labelType === "markdown") {
    text2 = await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .createText */ .GZ)(labelEl, node.label, {
      style: node.labelStyle,
      useHtmlLabels,
      isNode: true,
      width: node.width
    });
  } else {
    text2 = await createLabel_default(labelEl, node.label, node.labelStyle || "", false, true);
  }
  let bbox = text2.getBBox();
  if ((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)(siteConfig)) {
    const div = text2.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const width = node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width;
  if (node.width <= bbox.width + node.padding) {
    node.diff = (width - node.width) / 2 - node.padding;
  } else {
    node.diff = -node.padding;
  }
  const height = node.height;
  const x = node.x - width / 2;
  const y = node.y - height / 2;
  _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.trace("Data ", node, JSON.stringify(node));
  let rect2;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {
      roughness: 0.7,
      fill: clusterBkg,
      // fill: 'red',
      stroke: clusterBorder,
      fillWeight: 3,
      seed: handDrawnSeed
    });
    const roughNode = rc.path(createRoundedRectPathD(x, y, width, height, 0), options);
    rect2 = shapeSvg.insert(() => {
      _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.debug("Rough node insert CXC", roughNode);
      return roughNode;
    }, ":first-child");
    rect2.select("path:nth-child(2)").attr("style", borderStyles.join(";"));
    rect2.select("path").attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
  } else {
    rect2 = shapeSvg.insert("rect", ":first-child");
    rect2.attr("style", nodeStyles).attr("rx", node.rx).attr("ry", node.ry).attr("x", x).attr("y", y).attr("width", width).attr("height", height);
  }
  const { subGraphTitleTopMargin } = (0,_chunk_YBOYWFTD_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getSubGraphTitleMargins */ .O)(siteConfig);
  labelEl.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${node.x - bbox.width / 2}, ${node.y - node.height / 2 + subGraphTitleTopMargin})`
  );
  if (labelStyles) {
    const span = labelEl.select("span");
    if (span) {
      span.attr("style", labelStyles);
    }
  }
  const rectBox = rect2.node().getBBox();
  node.offsetX = 0;
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.offsetY = bbox.height - node.padding / 2;
  node.intersect = function(point) {
    return intersect_rect_default(node, point);
  };
  return { cluster: shapeSvg, labelBBox: bbox };
}, "rect");
var noteGroup = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "note-cluster").attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", node.width + padding).attr("height", node.height + padding).attr("fill", "none");
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.intersect = function(point) {
    return intersect_rect_default(node, point);
  };
  return { cluster: shapeSvg, labelBBox: { width: 0, height: 0 } };
}, "noteGroup");
var roundedWithTitle = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(async (parent, node) => {
  const siteConfig = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)();
  const { themeVariables, handDrawnSeed } = siteConfig;
  const { altBackground, compositeBackground, compositeTitleBackground, nodeBorder } = themeVariables;
  const shapeSvg = parent.insert("g").attr("class", node.cssClasses).attr("id", node.id).attr("data-id", node.id).attr("data-look", node.look);
  const outerRectG = shapeSvg.insert("g", ":first-child");
  const label = shapeSvg.insert("g").attr("class", "cluster-label");
  let innerRect = shapeSvg.append("rect");
  const text2 = await createLabel_default(label, node.label, node.labelStyle, void 0, true);
  let bbox = text2.getBBox();
  if ((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)(siteConfig)) {
    const div = text2.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  const width = (node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width) + padding;
  if (node.width <= bbox.width + node.padding) {
    node.diff = (width - node.width) / 2 - node.padding;
  } else {
    node.diff = -node.padding;
  }
  const height = node.height + padding;
  const innerHeight = node.height + padding - bbox.height - 6;
  const x = node.x - width / 2;
  const y = node.y - height / 2;
  node.width = width;
  const innerY = node.y - node.height / 2 - halfPadding + bbox.height + 2;
  let rect2;
  if (node.look === "handDrawn") {
    const isAlt = node.cssClasses.includes("statediagram-cluster-alt");
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const roughOuterNode = node.rx || node.ry ? rc.path(createRoundedRectPathD(x, y, width, height, 10), {
      roughness: 0.7,
      fill: compositeTitleBackground,
      fillStyle: "solid",
      stroke: nodeBorder,
      seed: handDrawnSeed
    }) : rc.rectangle(x, y, width, height, { seed: handDrawnSeed });
    rect2 = shapeSvg.insert(() => roughOuterNode, ":first-child");
    const roughInnerNode = rc.rectangle(x, innerY, width, innerHeight, {
      fill: isAlt ? altBackground : compositeBackground,
      fillStyle: isAlt ? "hachure" : "solid",
      stroke: nodeBorder,
      seed: handDrawnSeed
    });
    rect2 = shapeSvg.insert(() => roughOuterNode, ":first-child");
    innerRect = shapeSvg.insert(() => roughInnerNode);
  } else {
    rect2 = outerRectG.insert("rect", ":first-child");
    const outerRectClass = "outer";
    rect2.attr("class", outerRectClass).attr("x", x).attr("y", y).attr("width", width).attr("height", height).attr("data-look", node.look);
    innerRect.attr("class", "inner").attr("x", x).attr("y", innerY).attr("width", width).attr("height", innerHeight);
  }
  label.attr(
    "transform",
    `translate(${node.x - bbox.width / 2}, ${y + 1 - ((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)(siteConfig) ? 0 : 3)})`
  );
  const rectBox = rect2.node().getBBox();
  node.height = rectBox.height;
  node.offsetX = 0;
  node.offsetY = bbox.height - node.padding / 2;
  node.labelBBox = bbox;
  node.intersect = function(point) {
    return intersect_rect_default(node, point);
  };
  return { cluster: shapeSvg, labelBBox: bbox };
}, "roundedWithTitle");
var kanbanSection = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(async (parent, node) => {
  _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Creating subgraph rect for ", node.id, node);
  const siteConfig = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)();
  const { themeVariables, handDrawnSeed } = siteConfig;
  const { clusterBkg, clusterBorder } = themeVariables;
  const { labelStyles, nodeStyles, borderStyles, backgroundStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  const shapeSvg = parent.insert("g").attr("class", "cluster " + node.cssClasses).attr("id", node.id).attr("data-look", node.look);
  const useHtmlLabels = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)(siteConfig);
  const labelEl = shapeSvg.insert("g").attr("class", "cluster-label ");
  const text2 = await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .createText */ .GZ)(labelEl, node.label, {
    style: node.labelStyle,
    useHtmlLabels,
    isNode: true,
    width: node.width
  });
  let bbox = text2.getBBox();
  if ((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)(siteConfig)) {
    const div = text2.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const width = node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width;
  if (node.width <= bbox.width + node.padding) {
    node.diff = (width - node.width) / 2 - node.padding;
  } else {
    node.diff = -node.padding;
  }
  const height = node.height;
  const x = node.x - width / 2;
  const y = node.y - height / 2;
  _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.trace("Data ", node, JSON.stringify(node));
  let rect2;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {
      roughness: 0.7,
      fill: clusterBkg,
      // fill: 'red',
      stroke: clusterBorder,
      fillWeight: 4,
      seed: handDrawnSeed
    });
    const roughNode = rc.path(createRoundedRectPathD(x, y, width, height, node.rx), options);
    rect2 = shapeSvg.insert(() => {
      _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.debug("Rough node insert CXC", roughNode);
      return roughNode;
    }, ":first-child");
    rect2.select("path:nth-child(2)").attr("style", borderStyles.join(";"));
    rect2.select("path").attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
  } else {
    rect2 = shapeSvg.insert("rect", ":first-child");
    rect2.attr("style", nodeStyles).attr("rx", node.rx).attr("ry", node.ry).attr("x", x).attr("y", y).attr("width", width).attr("height", height);
  }
  const { subGraphTitleTopMargin } = (0,_chunk_YBOYWFTD_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getSubGraphTitleMargins */ .O)(siteConfig);
  labelEl.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${node.x - bbox.width / 2}, ${node.y - node.height / 2 + subGraphTitleTopMargin})`
  );
  if (labelStyles) {
    const span = labelEl.select("span");
    if (span) {
      span.attr("style", labelStyles);
    }
  }
  const rectBox = rect2.node().getBBox();
  node.offsetX = 0;
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.offsetY = bbox.height - node.padding / 2;
  node.intersect = function(point) {
    return intersect_rect_default(node, point);
  };
  return { cluster: shapeSvg, labelBBox: bbox };
}, "kanbanSection");
var divider = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((parent, node) => {
  const siteConfig = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)();
  const { themeVariables, handDrawnSeed } = siteConfig;
  const { nodeBorder } = themeVariables;
  const shapeSvg = parent.insert("g").attr("class", node.cssClasses).attr("id", node.id).attr("data-look", node.look);
  const outerRectG = shapeSvg.insert("g", ":first-child");
  const padding = 0 * node.padding;
  const width = node.width + padding;
  node.diff = -node.padding;
  const height = node.height + padding;
  const x = node.x - width / 2;
  const y = node.y - height / 2;
  node.width = width;
  let rect2;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const roughOuterNode = rc.rectangle(x, y, width, height, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: nodeBorder,
      seed: handDrawnSeed
    });
    rect2 = shapeSvg.insert(() => roughOuterNode, ":first-child");
  } else {
    rect2 = outerRectG.insert("rect", ":first-child");
    const outerRectClass = "divider";
    rect2.attr("class", outerRectClass).attr("x", x).attr("y", y).attr("width", width).attr("height", height).attr("data-look", node.look);
  }
  const rectBox = rect2.node().getBBox();
  node.height = rectBox.height;
  node.offsetX = 0;
  node.offsetY = 0;
  node.intersect = function(point) {
    return intersect_rect_default(node, point);
  };
  return { cluster: shapeSvg, labelBBox: {} };
}, "divider");
var squareRect = rect;
var shapes = {
  rect,
  squareRect,
  roundedWithTitle,
  noteGroup,
  divider,
  kanbanSection
};
var clusterElems = /* @__PURE__ */ new Map();
var insertCluster = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(async (elem, node) => {
  const shape = node.shape || "rect";
  const cluster = await shapes[shape](elem, node);
  clusterElems.set(node.id, cluster);
  return cluster;
}, "insertCluster");
var clear = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(() => {
  clusterElems = /* @__PURE__ */ new Map();
}, "clear");

// src/rendering-util/rendering-elements/intersect/intersect-node.js
function intersectNode(node, point) {
  return node.intersect(point);
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(intersectNode, "intersectNode");
var intersect_node_default = intersectNode;

// src/rendering-util/rendering-elements/intersect/intersect-ellipse.js
function intersectEllipse(node, rx, ry, point) {
  var cx = node.x;
  var cy = node.y;
  var px = cx - point.x;
  var py = cy - point.y;
  var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
  var dx = Math.abs(rx * ry * px / det);
  if (point.x < cx) {
    dx = -dx;
  }
  var dy = Math.abs(rx * ry * py / det);
  if (point.y < cy) {
    dy = -dy;
  }
  return { x: cx + dx, y: cy + dy };
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(intersectEllipse, "intersectEllipse");
var intersect_ellipse_default = intersectEllipse;

// src/rendering-util/rendering-elements/intersect/intersect-circle.js
function intersectCircle(node, rx, point) {
  return intersect_ellipse_default(node, rx, rx, point);
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(intersectCircle, "intersectCircle");
var intersect_circle_default = intersectCircle;

// src/rendering-util/rendering-elements/intersect/intersect-line.js
function intersectLine(p1, p2, q1, q2) {
  {
    const a1 = p2.y - p1.y;
    const b1 = p1.x - p2.x;
    const c1 = p2.x * p1.y - p1.x * p2.y;
    const r3 = a1 * q1.x + b1 * q1.y + c1;
    const r4 = a1 * q2.x + b1 * q2.y + c1;
    const epsilon = 1e-6;
    if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
      return;
    }
    const a2 = q2.y - q1.y;
    const b2 = q1.x - q2.x;
    const c2 = q2.x * q1.y - q1.x * q2.y;
    const r1 = a2 * p1.x + b2 * p1.y + c2;
    const r2 = a2 * p2.x + b2 * p2.y + c2;
    if (Math.abs(r1) < epsilon && Math.abs(r2) < epsilon && sameSign(r1, r2)) {
      return;
    }
    const denom = a1 * b2 - a2 * b1;
    if (denom === 0) {
      return;
    }
    const offset = Math.abs(denom / 2);
    let num = b1 * c2 - b2 * c1;
    const x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    num = a2 * c1 - a1 * c2;
    const y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    return { x, y };
  }
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(intersectLine, "intersectLine");
function sameSign(r1, r2) {
  return r1 * r2 > 0;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(sameSign, "sameSign");
var intersect_line_default = intersectLine;

// src/rendering-util/rendering-elements/intersect/intersect-polygon.js
function intersectPolygon(node, polyPoints, point) {
  let x1 = node.x;
  let y1 = node.y;
  let intersections = [];
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  if (typeof polyPoints.forEach === "function") {
    polyPoints.forEach(function(entry) {
      minX = Math.min(minX, entry.x);
      minY = Math.min(minY, entry.y);
    });
  } else {
    minX = Math.min(minX, polyPoints.x);
    minY = Math.min(minY, polyPoints.y);
  }
  let left = x1 - node.width / 2 - minX;
  let top = y1 - node.height / 2 - minY;
  for (let i = 0; i < polyPoints.length; i++) {
    let p1 = polyPoints[i];
    let p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    let intersect = intersect_line_default(
      node,
      point,
      { x: left + p1.x, y: top + p1.y },
      { x: left + p2.x, y: top + p2.y }
    );
    if (intersect) {
      intersections.push(intersect);
    }
  }
  if (!intersections.length) {
    return node;
  }
  if (intersections.length > 1) {
    intersections.sort(function(p, q) {
      let pdx = p.x - point.x;
      let pdy = p.y - point.y;
      let distp = Math.sqrt(pdx * pdx + pdy * pdy);
      let qdx = q.x - point.x;
      let qdy = q.y - point.y;
      let distq = Math.sqrt(qdx * qdx + qdy * qdy);
      return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
  }
  return intersections[0];
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(intersectPolygon, "intersectPolygon");
var intersect_polygon_default = intersectPolygon;

// src/rendering-util/rendering-elements/intersect/index.js
var intersect_default = {
  node: intersect_node_default,
  circle: intersect_circle_default,
  ellipse: intersect_ellipse_default,
  polygon: intersect_polygon_default,
  rect: intersect_rect_default
};

// src/rendering-util/rendering-elements/shapes/anchor.ts

function anchor(parent, node) {
  const { labelStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const classes = getNodeClasses(node);
  let cssClasses = classes;
  if (!classes) {
    cssClasses = "anchor";
  }
  const shapeSvg = parent.insert("g").attr("class", cssClasses).attr("id", node.domId || node.id);
  const radius = 1;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, { fill: "black", stroke: "none", fillStyle: "solid" });
  if (node.look !== "handDrawn") {
    options.roughness = 0;
  }
  const roughNode = rc.circle(0, 0, radius * 2, options);
  const circleElem = shapeSvg.insert(() => roughNode, ":first-child");
  circleElem.attr("class", "anchor").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles));
  updateNodeBounds(node, circleElem);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Circle intersect", node, radius, point);
    return intersect_default.circle(node, radius, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(anchor, "anchor");

// src/rendering-util/rendering-elements/shapes/bowTieRect.ts

function generateArcPoints(x1, y1, x2, y2, rx, ry, clockwise) {
  const numPoints = 20;
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const dx = (x2 - x1) / 2;
  const dy = (y2 - y1) / 2;
  const transformedX = dx / rx;
  const transformedY = dy / ry;
  const distance = Math.sqrt(transformedX ** 2 + transformedY ** 2);
  if (distance > 1) {
    throw new Error("The given radii are too small to create an arc between the points.");
  }
  const scaledCenterDistance = Math.sqrt(1 - distance ** 2);
  const centerX = midX + scaledCenterDistance * ry * Math.sin(angle) * (clockwise ? -1 : 1);
  const centerY = midY - scaledCenterDistance * rx * Math.cos(angle) * (clockwise ? -1 : 1);
  const startAngle = Math.atan2((y1 - centerY) / ry, (x1 - centerX) / rx);
  const endAngle = Math.atan2((y2 - centerY) / ry, (x2 - centerX) / rx);
  let angleRange = endAngle - startAngle;
  if (clockwise && angleRange < 0) {
    angleRange += 2 * Math.PI;
  }
  if (!clockwise && angleRange > 0) {
    angleRange -= 2 * Math.PI;
  }
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const t = i / (numPoints - 1);
    const angle2 = startAngle + t * angleRange;
    const x = centerX + rx * Math.cos(angle2);
    const y = centerY + ry * Math.sin(angle2);
    points.push({ x, y });
  }
  return points;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(generateArcPoints, "generateArcPoints");
async function bowTieRect(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const w = bbox.width + node.padding + 20;
  const h = bbox.height + node.padding;
  const ry = h / 2;
  const rx = ry / (2.5 + h / 50);
  const { cssStyles } = node;
  const points = [
    { x: w / 2, y: -h / 2 },
    { x: -w / 2, y: -h / 2 },
    ...generateArcPoints(-w / 2, -h / 2, -w / 2, h / 2, rx, ry, false),
    { x: w / 2, y: h / 2 },
    ...generateArcPoints(w / 2, h / 2, w / 2, -h / 2, rx, ry, true)
  ];
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const bowTieRectPath = createPathFromPoints(points);
  const bowTieRectShapePath = rc.path(bowTieRectPath, options);
  const bowTieRectShape = shapeSvg.insert(() => bowTieRectShapePath, ":first-child");
  bowTieRectShape.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    bowTieRectShape.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    bowTieRectShape.selectAll("path").attr("style", nodeStyles);
  }
  bowTieRectShape.attr("transform", `translate(${rx / 2}, 0)`);
  updateNodeBounds(node, bowTieRectShape);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(bowTieRect, "bowTieRect");

// src/rendering-util/rendering-elements/shapes/card.ts


// src/rendering-util/rendering-elements/shapes/insertPolygonShape.ts
function insertPolygonShape(parent, w, h, points) {
  return parent.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(insertPolygonShape, "insertPolygonShape");

// src/rendering-util/rendering-elements/shapes/card.ts
async function card(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const h = bbox.height + node.padding;
  const padding = 12;
  const w = bbox.width + node.padding + padding;
  const left = 0;
  const right = w;
  const top = -h;
  const bottom = 0;
  const points = [
    { x: left + padding, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom },
    { x: left, y: top + padding },
    { x: left + padding, y: top }
  ];
  let polygon;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const pathData = createPathFromPoints(points);
    const roughNode = rc.path(pathData, options);
    polygon = shapeSvg.insert(() => roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
    if (cssStyles) {
      polygon.attr("style", cssStyles);
    }
  } else {
    polygon = insertPolygonShape(shapeSvg, w, h, points);
  }
  if (nodeStyles) {
    polygon.attr("style", nodeStyles);
  }
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(card, "card");

// src/rendering-util/rendering-elements/shapes/choice.ts

function choice(parent, node) {
  const { nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.label = "";
  const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId ?? node.id);
  const { cssStyles } = node;
  const s = Math.max(28, node.width ?? 0);
  const points = [
    { x: 0, y: s / 2 },
    { x: s / 2, y: 0 },
    { x: 0, y: -s / 2 },
    { x: -s / 2, y: 0 }
  ];
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const choicePath = createPathFromPoints(points);
  const roughNode = rc.path(choicePath, options);
  const choiceShape = shapeSvg.insert(() => roughNode, ":first-child");
  if (cssStyles && node.look !== "handDrawn") {
    choiceShape.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    choiceShape.selectAll("path").attr("style", nodeStyles);
  }
  node.width = 28;
  node.height = 28;
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(choice, "choice");

// src/rendering-util/rendering-elements/shapes/circle.ts

async function circle(parent, node, options) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, halfPadding } = await labelHelper(parent, node, getNodeClasses(node));
  const padding = options?.padding ?? halfPadding;
  const radius = bbox.width / 2 + padding;
  let circleElem;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options2 = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const roughNode = rc.circle(0, 0, radius * 2, options2);
    circleElem = shapeSvg.insert(() => roughNode, ":first-child");
    circleElem.attr("class", "basic label-container").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles));
  } else {
    circleElem = shapeSvg.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", nodeStyles).attr("r", radius).attr("cx", 0).attr("cy", 0);
  }
  updateNodeBounds(node, circleElem);
  node.calcIntersect = function(bounds, point) {
    const radius2 = bounds.width / 2;
    return intersect_default.circle(bounds, radius2, point);
  };
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Circle intersect", node, radius, point);
    return intersect_default.circle(node, radius, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(circle, "circle");

// src/rendering-util/rendering-elements/shapes/crossedCircle.ts

function createLine(r) {
  const xAxis45 = Math.cos(Math.PI / 4);
  const yAxis45 = Math.sin(Math.PI / 4);
  const lineLength = r * 2;
  const pointQ1 = { x: lineLength / 2 * xAxis45, y: lineLength / 2 * yAxis45 };
  const pointQ2 = { x: -(lineLength / 2) * xAxis45, y: lineLength / 2 * yAxis45 };
  const pointQ3 = { x: -(lineLength / 2) * xAxis45, y: -(lineLength / 2) * yAxis45 };
  const pointQ4 = { x: lineLength / 2 * xAxis45, y: -(lineLength / 2) * yAxis45 };
  return `M ${pointQ2.x},${pointQ2.y} L ${pointQ4.x},${pointQ4.y}
                   M ${pointQ1.x},${pointQ1.y} L ${pointQ3.x},${pointQ3.y}`;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(createLine, "createLine");
function crossedCircle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  node.label = "";
  const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId ?? node.id);
  const radius = Math.max(30, node?.width ?? 0);
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const circleNode = rc.circle(0, 0, radius * 2, options);
  const linePath = createLine(radius);
  const lineNode = rc.path(linePath, options);
  const crossedCircle2 = shapeSvg.insert(() => circleNode, ":first-child");
  crossedCircle2.insert(() => lineNode);
  if (cssStyles && node.look !== "handDrawn") {
    crossedCircle2.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    crossedCircle2.selectAll("path").attr("style", nodeStyles);
  }
  updateNodeBounds(node, crossedCircle2);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("crossedCircle intersect", node, { radius, point });
    const pos = intersect_default.circle(node, radius, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(crossedCircle, "crossedCircle");

// src/rendering-util/rendering-elements/shapes/curlyBraceLeft.ts

function generateCirclePoints2(centerX, centerY, radius, numPoints = 100, startAngle = 0, endAngle = 180) {
  const points = [];
  const startAngleRad = startAngle * Math.PI / 180;
  const endAngleRad = endAngle * Math.PI / 180;
  const angleRange = endAngleRad - startAngleRad;
  const angleStep = angleRange / (numPoints - 1);
  for (let i = 0; i < numPoints; i++) {
    const angle = startAngleRad + i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x: -x, y: -y });
  }
  return points;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(generateCirclePoints2, "generateCirclePoints");
async function curlyBraceLeft(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = bbox.width + (node.padding ?? 0);
  const h = bbox.height + (node.padding ?? 0);
  const radius = Math.max(5, h * 0.1);
  const { cssStyles } = node;
  const points = [
    ...generateCirclePoints2(w / 2, -h / 2, radius, 30, -90, 0),
    { x: -w / 2 - radius, y: radius },
    ...generateCirclePoints2(w / 2 + radius * 2, -radius, radius, 20, -180, -270),
    ...generateCirclePoints2(w / 2 + radius * 2, radius, radius, 20, -90, -180),
    { x: -w / 2 - radius, y: -h / 2 },
    ...generateCirclePoints2(w / 2, h / 2, radius, 20, 0, 90)
  ];
  const rectPoints = [
    { x: w / 2, y: -h / 2 - radius },
    { x: -w / 2, y: -h / 2 - radius },
    ...generateCirclePoints2(w / 2, -h / 2, radius, 20, -90, 0),
    { x: -w / 2 - radius, y: -radius },
    ...generateCirclePoints2(w / 2 + w * 0.1, -radius, radius, 20, -180, -270),
    ...generateCirclePoints2(w / 2 + w * 0.1, radius, radius, 20, -90, -180),
    { x: -w / 2 - radius, y: h / 2 },
    ...generateCirclePoints2(w / 2, h / 2, radius, 20, 0, 90),
    { x: -w / 2, y: h / 2 + radius },
    { x: w / 2, y: h / 2 + radius }
  ];
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, { fill: "none" });
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const curlyBraceLeftPath = createPathFromPoints(points);
  const newCurlyBracePath = curlyBraceLeftPath.replace("Z", "");
  const curlyBraceLeftNode = rc.path(newCurlyBracePath, options);
  const rectPath = createPathFromPoints(rectPoints);
  const rectShape = rc.path(rectPath, { ...options });
  const curlyBraceLeftShape = shapeSvg.insert("g", ":first-child");
  curlyBraceLeftShape.insert(() => rectShape, ":first-child").attr("stroke-opacity", 0);
  curlyBraceLeftShape.insert(() => curlyBraceLeftNode, ":first-child");
  curlyBraceLeftShape.attr("class", "text");
  if (cssStyles && node.look !== "handDrawn") {
    curlyBraceLeftShape.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    curlyBraceLeftShape.selectAll("path").attr("style", nodeStyles);
  }
  curlyBraceLeftShape.attr("transform", `translate(${radius}, 0)`);
  label.attr(
    "transform",
    `translate(${-w / 2 + radius - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, curlyBraceLeftShape);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, rectPoints, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(curlyBraceLeft, "curlyBraceLeft");

// src/rendering-util/rendering-elements/shapes/curlyBraceRight.ts

function generateCirclePoints3(centerX, centerY, radius, numPoints = 100, startAngle = 0, endAngle = 180) {
  const points = [];
  const startAngleRad = startAngle * Math.PI / 180;
  const endAngleRad = endAngle * Math.PI / 180;
  const angleRange = endAngleRad - startAngleRad;
  const angleStep = angleRange / (numPoints - 1);
  for (let i = 0; i < numPoints; i++) {
    const angle = startAngleRad + i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x, y });
  }
  return points;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(generateCirclePoints3, "generateCirclePoints");
async function curlyBraceRight(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = bbox.width + (node.padding ?? 0);
  const h = bbox.height + (node.padding ?? 0);
  const radius = Math.max(5, h * 0.1);
  const { cssStyles } = node;
  const points = [
    ...generateCirclePoints3(w / 2, -h / 2, radius, 20, -90, 0),
    { x: w / 2 + radius, y: -radius },
    ...generateCirclePoints3(w / 2 + radius * 2, -radius, radius, 20, -180, -270),
    ...generateCirclePoints3(w / 2 + radius * 2, radius, radius, 20, -90, -180),
    { x: w / 2 + radius, y: h / 2 },
    ...generateCirclePoints3(w / 2, h / 2, radius, 20, 0, 90)
  ];
  const rectPoints = [
    { x: -w / 2, y: -h / 2 - radius },
    { x: w / 2, y: -h / 2 - radius },
    ...generateCirclePoints3(w / 2, -h / 2, radius, 20, -90, 0),
    { x: w / 2 + radius, y: -radius },
    ...generateCirclePoints3(w / 2 + radius * 2, -radius, radius, 20, -180, -270),
    ...generateCirclePoints3(w / 2 + radius * 2, radius, radius, 20, -90, -180),
    { x: w / 2 + radius, y: h / 2 },
    ...generateCirclePoints3(w / 2, h / 2, radius, 20, 0, 90),
    { x: w / 2, y: h / 2 + radius },
    { x: -w / 2, y: h / 2 + radius }
  ];
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, { fill: "none" });
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const curlyBraceRightPath = createPathFromPoints(points);
  const newCurlyBracePath = curlyBraceRightPath.replace("Z", "");
  const curlyBraceRightNode = rc.path(newCurlyBracePath, options);
  const rectPath = createPathFromPoints(rectPoints);
  const rectShape = rc.path(rectPath, { ...options });
  const curlyBraceRightShape = shapeSvg.insert("g", ":first-child");
  curlyBraceRightShape.insert(() => rectShape, ":first-child").attr("stroke-opacity", 0);
  curlyBraceRightShape.insert(() => curlyBraceRightNode, ":first-child");
  curlyBraceRightShape.attr("class", "text");
  if (cssStyles && node.look !== "handDrawn") {
    curlyBraceRightShape.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    curlyBraceRightShape.selectAll("path").attr("style", nodeStyles);
  }
  curlyBraceRightShape.attr("transform", `translate(${-radius}, 0)`);
  label.attr(
    "transform",
    `translate(${-w / 2 + (node.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, curlyBraceRightShape);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, rectPoints, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(curlyBraceRight, "curlyBraceRight");

// src/rendering-util/rendering-elements/shapes/curlyBraces.ts

function generateCirclePoints4(centerX, centerY, radius, numPoints = 100, startAngle = 0, endAngle = 180) {
  const points = [];
  const startAngleRad = startAngle * Math.PI / 180;
  const endAngleRad = endAngle * Math.PI / 180;
  const angleRange = endAngleRad - startAngleRad;
  const angleStep = angleRange / (numPoints - 1);
  for (let i = 0; i < numPoints; i++) {
    const angle = startAngleRad + i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x: -x, y: -y });
  }
  return points;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(generateCirclePoints4, "generateCirclePoints");
async function curlyBraces(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = bbox.width + (node.padding ?? 0);
  const h = bbox.height + (node.padding ?? 0);
  const radius = Math.max(5, h * 0.1);
  const { cssStyles } = node;
  const leftCurlyBracePoints = [
    ...generateCirclePoints4(w / 2, -h / 2, radius, 30, -90, 0),
    { x: -w / 2 - radius, y: radius },
    ...generateCirclePoints4(w / 2 + radius * 2, -radius, radius, 20, -180, -270),
    ...generateCirclePoints4(w / 2 + radius * 2, radius, radius, 20, -90, -180),
    { x: -w / 2 - radius, y: -h / 2 },
    ...generateCirclePoints4(w / 2, h / 2, radius, 20, 0, 90)
  ];
  const rightCurlyBracePoints = [
    ...generateCirclePoints4(-w / 2 + radius + radius / 2, -h / 2, radius, 20, -90, -180),
    { x: w / 2 - radius / 2, y: radius },
    ...generateCirclePoints4(-w / 2 - radius / 2, -radius, radius, 20, 0, 90),
    ...generateCirclePoints4(-w / 2 - radius / 2, radius, radius, 20, -90, 0),
    { x: w / 2 - radius / 2, y: -radius },
    ...generateCirclePoints4(-w / 2 + radius + radius / 2, h / 2, radius, 30, -180, -270)
  ];
  const rectPoints = [
    { x: w / 2, y: -h / 2 - radius },
    { x: -w / 2, y: -h / 2 - radius },
    ...generateCirclePoints4(w / 2, -h / 2, radius, 20, -90, 0),
    { x: -w / 2 - radius, y: -radius },
    ...generateCirclePoints4(w / 2 + radius * 2, -radius, radius, 20, -180, -270),
    ...generateCirclePoints4(w / 2 + radius * 2, radius, radius, 20, -90, -180),
    { x: -w / 2 - radius, y: h / 2 },
    ...generateCirclePoints4(w / 2, h / 2, radius, 20, 0, 90),
    { x: -w / 2, y: h / 2 + radius },
    { x: w / 2 - radius - radius / 2, y: h / 2 + radius },
    ...generateCirclePoints4(-w / 2 + radius + radius / 2, -h / 2, radius, 20, -90, -180),
    { x: w / 2 - radius / 2, y: radius },
    ...generateCirclePoints4(-w / 2 - radius / 2, -radius, radius, 20, 0, 90),
    ...generateCirclePoints4(-w / 2 - radius / 2, radius, radius, 20, -90, 0),
    { x: w / 2 - radius / 2, y: -radius },
    ...generateCirclePoints4(-w / 2 + radius + radius / 2, h / 2, radius, 30, -180, -270)
  ];
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, { fill: "none" });
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const leftCurlyBracePath = createPathFromPoints(leftCurlyBracePoints);
  const newLeftCurlyBracePath = leftCurlyBracePath.replace("Z", "");
  const leftCurlyBraceNode = rc.path(newLeftCurlyBracePath, options);
  const rightCurlyBracePath = createPathFromPoints(rightCurlyBracePoints);
  const newRightCurlyBracePath = rightCurlyBracePath.replace("Z", "");
  const rightCurlyBraceNode = rc.path(newRightCurlyBracePath, options);
  const rectPath = createPathFromPoints(rectPoints);
  const rectShape = rc.path(rectPath, { ...options });
  const curlyBracesShape = shapeSvg.insert("g", ":first-child");
  curlyBracesShape.insert(() => rectShape, ":first-child").attr("stroke-opacity", 0);
  curlyBracesShape.insert(() => leftCurlyBraceNode, ":first-child");
  curlyBracesShape.insert(() => rightCurlyBraceNode, ":first-child");
  curlyBracesShape.attr("class", "text");
  if (cssStyles && node.look !== "handDrawn") {
    curlyBracesShape.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    curlyBracesShape.selectAll("path").attr("style", nodeStyles);
  }
  curlyBracesShape.attr("transform", `translate(${radius - radius / 4}, 0)`);
  label.attr(
    "transform",
    `translate(${-w / 2 + (node.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, curlyBracesShape);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, rectPoints, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(curlyBraces, "curlyBraces");

// src/rendering-util/rendering-elements/shapes/curvedTrapezoid.ts

async function curvedTrapezoid(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const minWidth = 80, minHeight = 20;
  const w = Math.max(minWidth, (bbox.width + (node.padding ?? 0) * 2) * 1.25, node?.width ?? 0);
  const h = Math.max(minHeight, bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const radius = h / 2;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const totalWidth = w, totalHeight = h;
  const rw = totalWidth - radius;
  const tw = totalHeight / 4;
  const points = [
    { x: rw, y: 0 },
    { x: tw, y: 0 },
    { x: 0, y: totalHeight / 2 },
    { x: tw, y: totalHeight },
    { x: rw, y: totalHeight },
    ...generateCirclePoints(-rw, -totalHeight / 2, radius, 50, 270, 90)
  ];
  const pathData = createPathFromPoints(points);
  const shapeNode = rc.path(pathData, options);
  const polygon = shapeSvg.insert(() => shapeNode, ":first-child");
  polygon.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", nodeStyles);
  }
  polygon.attr("transform", `translate(${-w / 2}, ${-h / 2})`);
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(curvedTrapezoid, "curvedTrapezoid");

// src/rendering-util/rendering-elements/shapes/cylinder.ts

var createCylinderPathD = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, width, height, rx, ry) => {
  return [
    `M${x},${y + ry}`,
    `a${rx},${ry} 0,0,0 ${width},0`,
    `a${rx},${ry} 0,0,0 ${-width},0`,
    `l0,${height}`,
    `a${rx},${ry} 0,0,0 ${width},0`,
    `l0,${-height}`
  ].join(" ");
}, "createCylinderPathD");
var createOuterCylinderPathD = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, width, height, rx, ry) => {
  return [
    `M${x},${y + ry}`,
    `M${x + width},${y + ry}`,
    `a${rx},${ry} 0,0,0 ${-width},0`,
    `l0,${height}`,
    `a${rx},${ry} 0,0,0 ${width},0`,
    `l0,${-height}`
  ].join(" ");
}, "createOuterCylinderPathD");
var createInnerCylinderPathD = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, width, height, rx, ry) => {
  return [`M${x - width / 2},${-height / 2}`, `a${rx},${ry} 0,0,0 ${width},0`].join(" ");
}, "createInnerCylinderPathD");
async function cylinder(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + node.padding, node.width ?? 0);
  const rx = w / 2;
  const ry = rx / (2.5 + w / 50);
  const h = Math.max(bbox.height + ry + node.padding, node.height ?? 0);
  let cylinder2;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const outerPathData = createOuterCylinderPathD(0, 0, w, h, rx, ry);
    const innerPathData = createInnerCylinderPathD(0, ry, w, h, rx, ry);
    const outerNode = rc.path(outerPathData, (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {}));
    const innerLine = rc.path(innerPathData, (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, { fill: "none" }));
    cylinder2 = shapeSvg.insert(() => innerLine, ":first-child");
    cylinder2 = shapeSvg.insert(() => outerNode, ":first-child");
    cylinder2.attr("class", "basic label-container");
    if (cssStyles) {
      cylinder2.attr("style", cssStyles);
    }
  } else {
    const pathData = createCylinderPathD(0, 0, w, h, rx, ry);
    cylinder2 = shapeSvg.insert("path", ":first-child").attr("d", pathData).attr("class", "basic label-container").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles)).attr("style", nodeStyles);
  }
  cylinder2.attr("label-offset-y", ry);
  cylinder2.attr("transform", `translate(${-w / 2}, ${-(h / 2 + ry)})`);
  updateNodeBounds(node, cylinder2);
  label.attr(
    "transform",
    `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + (node.padding ?? 0) / 1.5 - (bbox.y - (bbox.top ?? 0))})`
  );
  node.intersect = function(point) {
    const pos = intersect_default.rect(node, point);
    const x = pos.x - (node.x ?? 0);
    if (rx != 0 && (Math.abs(x) < (node.width ?? 0) / 2 || Math.abs(x) == (node.width ?? 0) / 2 && Math.abs(pos.y - (node.y ?? 0)) > (node.height ?? 0) / 2 - ry)) {
      let y = ry * ry * (1 - x * x / (rx * rx));
      if (y > 0) {
        y = Math.sqrt(y);
      }
      y = ry - y;
      if (point.y - (node.y ?? 0) > 0) {
        y = -y;
      }
      pos.y += y;
    }
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(cylinder, "cylinder");

// src/rendering-util/rendering-elements/shapes/dividedRect.ts

async function dividedRectangle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const rectOffset = h * 0.2;
  const x = -w / 2;
  const y = -h / 2 - rectOffset / 2;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const pts = [
    { x, y: y + rectOffset },
    { x: -x, y: y + rectOffset },
    { x: -x, y: -y },
    { x, y: -y },
    { x, y },
    { x: -x, y },
    { x: -x, y: y + rectOffset }
  ];
  const poly = rc.polygon(
    pts.map((p) => [p.x, p.y]),
    options
  );
  const polygon = shapeSvg.insert(() => poly, ":first-child");
  polygon.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    polygon.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    polygon.selectAll("path").attr("style", nodeStyles);
  }
  label.attr(
    "transform",
    `translate(${x + (node.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))}, ${y + rectOffset + (node.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    const pos = intersect_default.rect(node, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(dividedRectangle, "dividedRectangle");

// src/rendering-util/rendering-elements/shapes/doubleCircle.ts

async function doublecircle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, halfPadding } = await labelHelper(parent, node, getNodeClasses(node));
  const gap = 5;
  const outerRadius = bbox.width / 2 + halfPadding + gap;
  const innerRadius = bbox.width / 2 + halfPadding;
  let circleGroup;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const outerOptions = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, { roughness: 0.2, strokeWidth: 2.5 });
    const innerOptions = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, { roughness: 0.2, strokeWidth: 1.5 });
    const outerRoughNode = rc.circle(0, 0, outerRadius * 2, outerOptions);
    const innerRoughNode = rc.circle(0, 0, innerRadius * 2, innerOptions);
    circleGroup = shapeSvg.insert("g", ":first-child");
    circleGroup.attr("class", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(node.cssClasses)).attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles));
    circleGroup.node()?.appendChild(outerRoughNode);
    circleGroup.node()?.appendChild(innerRoughNode);
  } else {
    circleGroup = shapeSvg.insert("g", ":first-child");
    const outerCircle = circleGroup.insert("circle", ":first-child");
    const innerCircle = circleGroup.insert("circle");
    circleGroup.attr("class", "basic label-container").attr("style", nodeStyles);
    outerCircle.attr("class", "outer-circle").attr("style", nodeStyles).attr("r", outerRadius).attr("cx", 0).attr("cy", 0);
    innerCircle.attr("class", "inner-circle").attr("style", nodeStyles).attr("r", innerRadius).attr("cx", 0).attr("cy", 0);
  }
  updateNodeBounds(node, circleGroup);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("DoubleCircle intersect", node, outerRadius, point);
    return intersect_default.circle(node, outerRadius, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(doublecircle, "doublecircle");

// src/rendering-util/rendering-elements/shapes/filledCircle.ts

function filledCircle(parent, node, { config: { themeVariables } }) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.label = "";
  node.labelStyle = labelStyles;
  const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId ?? node.id);
  const radius = 7;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const { nodeBorder } = themeVariables;
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, { fillStyle: "solid" });
  if (node.look !== "handDrawn") {
    options.roughness = 0;
  }
  const circleNode = rc.circle(0, 0, radius * 2, options);
  const filledCircle2 = shapeSvg.insert(() => circleNode, ":first-child");
  filledCircle2.selectAll("path").attr("style", `fill: ${nodeBorder} !important;`);
  if (cssStyles && cssStyles.length > 0 && node.look !== "handDrawn") {
    filledCircle2.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    filledCircle2.selectAll("path").attr("style", nodeStyles);
  }
  updateNodeBounds(node, filledCircle2);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("filledCircle intersect", node, { radius, point });
    const pos = intersect_default.circle(node, radius, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(filledCircle, "filledCircle");

// src/rendering-util/rendering-elements/shapes/flippedTriangle.ts

async function flippedTriangle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = bbox.width + (node.padding ?? 0);
  const h = w + bbox.height;
  const tw = w + bbox.height;
  const points = [
    { x: 0, y: -h },
    { x: tw, y: -h },
    { x: tw / 2, y: 0 }
  ];
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const pathData = createPathFromPoints(points);
  const roughNode = rc.path(pathData, options);
  const flippedTriangle2 = shapeSvg.insert(() => roughNode, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`);
  if (cssStyles && node.look !== "handDrawn") {
    flippedTriangle2.selectChildren("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    flippedTriangle2.selectChildren("path").attr("style", nodeStyles);
  }
  node.width = w;
  node.height = h;
  updateNodeBounds(node, flippedTriangle2);
  label.attr(
    "transform",
    `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-h / 2 + (node.padding ?? 0) / 2 + (bbox.y - (bbox.top ?? 0))})`
  );
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Triangle intersect", node, points, point);
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(flippedTriangle, "flippedTriangle");

// src/rendering-util/rendering-elements/shapes/forkJoin.ts

function forkJoin(parent, node, { dir, config: { state: state2, themeVariables } }) {
  const { nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.label = "";
  const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId ?? node.id);
  const { cssStyles } = node;
  let width = Math.max(70, node?.width ?? 0);
  let height = Math.max(10, node?.height ?? 0);
  if (dir === "LR") {
    width = Math.max(10, node?.width ?? 0);
    height = Math.max(70, node?.height ?? 0);
  }
  const x = -1 * width / 2;
  const y = -1 * height / 2;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {
    stroke: themeVariables.lineColor,
    fill: themeVariables.lineColor
  });
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const roughNode = rc.rectangle(x, y, width, height, options);
  const shape = shapeSvg.insert(() => roughNode, ":first-child");
  if (cssStyles && node.look !== "handDrawn") {
    shape.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    shape.selectAll("path").attr("style", nodeStyles);
  }
  updateNodeBounds(node, shape);
  const padding = state2?.padding ?? 0;
  if (node.width && node.height) {
    node.width += padding / 2 || 0;
    node.height += padding / 2 || 0;
  }
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(forkJoin, "forkJoin");

// src/rendering-util/rendering-elements/shapes/halfRoundedRectangle.ts

async function halfRoundedRectangle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const minWidth = 80, minHeight = 50;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(minWidth, bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(minHeight, bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const radius = h / 2;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const points = [
    { x: -w / 2, y: -h / 2 },
    { x: w / 2 - radius, y: -h / 2 },
    ...generateCirclePoints(-w / 2 + radius, 0, radius, 50, 90, 270),
    { x: w / 2 - radius, y: h / 2 },
    { x: -w / 2, y: h / 2 }
  ];
  const pathData = createPathFromPoints(points);
  const shapeNode = rc.path(pathData, options);
  const polygon = shapeSvg.insert(() => shapeNode, ":first-child");
  polygon.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", nodeStyles);
  }
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Pill intersect", node, { radius, point });
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(halfRoundedRectangle, "halfRoundedRectangle");

// src/rendering-util/rendering-elements/shapes/hexagon.ts

var createHexagonPathD = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, width, height, m) => {
  return [
    `M${x + m},${y}`,
    `L${x + width - m},${y}`,
    `L${x + width},${y - height / 2}`,
    `L${x + width - m},${y - height}`,
    `L${x + m},${y - height}`,
    `L${x},${y - height / 2}`,
    "Z"
  ].join(" ");
}, "createHexagonPathD");
async function hexagon(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const f = 4;
  const h = bbox.height + node.padding;
  const m = h / f;
  const w = bbox.width + 2 * m + node.padding;
  const points = [
    { x: m, y: 0 },
    { x: w - m, y: 0 },
    { x: w, y: -h / 2 },
    { x: w - m, y: -h },
    { x: m, y: -h },
    { x: 0, y: -h / 2 }
  ];
  let polygon;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const pathData = createHexagonPathD(0, 0, w, h, m);
    const roughNode = rc.path(pathData, options);
    polygon = shapeSvg.insert(() => roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
    if (cssStyles) {
      polygon.attr("style", cssStyles);
    }
  } else {
    polygon = insertPolygonShape(shapeSvg, w, h, points);
  }
  if (nodeStyles) {
    polygon.attr("style", nodeStyles);
  }
  node.width = w;
  node.height = h;
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(hexagon, "hexagon");

// src/rendering-util/rendering-elements/shapes/hourglass.ts

async function hourglass(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.label = "";
  node.labelStyle = labelStyles;
  const { shapeSvg } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(30, node?.width ?? 0);
  const h = Math.max(30, node?.height ?? 0);
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const points = [
    { x: 0, y: 0 },
    { x: w, y: 0 },
    { x: 0, y: h },
    { x: w, y: h }
  ];
  const pathData = createPathFromPoints(points);
  const shapeNode = rc.path(pathData, options);
  const polygon = shapeSvg.insert(() => shapeNode, ":first-child");
  polygon.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", nodeStyles);
  }
  polygon.attr("transform", `translate(${-w / 2}, ${-h / 2})`);
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Pill intersect", node, { points });
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(hourglass, "hourglass");

// src/rendering-util/rendering-elements/shapes/icon.ts

async function icon(parent, node, { config: { themeVariables, flowchart } }) {
  const { labelStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const assetHeight = node.assetHeight ?? 48;
  const assetWidth = node.assetWidth ?? 48;
  const iconSize = Math.max(assetHeight, assetWidth);
  const defaultWidth = flowchart?.wrappingWidth;
  node.width = Math.max(iconSize, defaultWidth ?? 0);
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, "icon-shape default");
  const topLabel = node.pos === "t";
  const height = iconSize;
  const width = iconSize;
  const { nodeBorder } = themeVariables;
  const { stylesMap } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .compileStyles */ .WW)(node);
  const x = -width / 2;
  const y = -height / 2;
  const labelPadding = node.label ? 8 : 0;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, { stroke: "none", fill: "none" });
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const iconNode = rc.rectangle(x, y, width, height, options);
  const outerWidth = Math.max(width, bbox.width);
  const outerHeight = height + bbox.height + labelPadding;
  const outerNode = rc.rectangle(-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight, {
    ...options,
    fill: "transparent",
    stroke: "none"
  });
  const iconShape = shapeSvg.insert(() => iconNode, ":first-child");
  const outerShape = shapeSvg.insert(() => outerNode);
  if (node.icon) {
    const iconElem = shapeSvg.append("g");
    iconElem.html(
      `<g>${await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getIconSVG */ .WY)(node.icon, {
        height: iconSize,
        width: iconSize,
        fallbackPrefix: ""
      })}</g>`
    );
    const iconBBox = iconElem.node().getBBox();
    const iconWidth = iconBBox.width;
    const iconHeight = iconBBox.height;
    const iconX = iconBBox.x;
    const iconY = iconBBox.y;
    iconElem.attr(
      "transform",
      `translate(${-iconWidth / 2 - iconX},${topLabel ? bbox.height / 2 + labelPadding / 2 - iconHeight / 2 - iconY : -bbox.height / 2 - labelPadding / 2 - iconHeight / 2 - iconY})`
    );
    iconElem.attr("style", `color: ${stylesMap.get("stroke") ?? nodeBorder};`);
  }
  label.attr(
    "transform",
    `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${topLabel ? -outerHeight / 2 : outerHeight / 2 - bbox.height})`
  );
  iconShape.attr(
    "transform",
    `translate(${0},${topLabel ? bbox.height / 2 + labelPadding / 2 : -bbox.height / 2 - labelPadding / 2})`
  );
  updateNodeBounds(node, outerShape);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("iconSquare intersect", node, point);
    if (!node.label) {
      return intersect_default.rect(node, point);
    }
    const dx = node.x ?? 0;
    const dy = node.y ?? 0;
    const nodeHeight = node.height ?? 0;
    let points = [];
    if (topLabel) {
      points = [
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx + width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx + width / 2, y: dy + nodeHeight / 2 },
        { x: dx - width / 2, y: dy + nodeHeight / 2 },
        { x: dx - width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding }
      ];
    } else {
      points = [
        { x: dx - width / 2, y: dy - nodeHeight / 2 },
        { x: dx + width / 2, y: dy - nodeHeight / 2 },
        { x: dx + width / 2, y: dy - nodeHeight / 2 + height },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 + height },
        { x: dx + bbox.width / 2 / 2, y: dy + nodeHeight / 2 },
        { x: dx - bbox.width / 2, y: dy + nodeHeight / 2 },
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 + height },
        { x: dx - width / 2, y: dy - nodeHeight / 2 + height }
      ];
    }
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(icon, "icon");

// src/rendering-util/rendering-elements/shapes/iconCircle.ts

async function iconCircle(parent, node, { config: { themeVariables, flowchart } }) {
  const { labelStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const assetHeight = node.assetHeight ?? 48;
  const assetWidth = node.assetWidth ?? 48;
  const iconSize = Math.max(assetHeight, assetWidth);
  const defaultWidth = flowchart?.wrappingWidth;
  node.width = Math.max(iconSize, defaultWidth ?? 0);
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, "icon-shape default");
  const padding = 20;
  const labelPadding = node.label ? 8 : 0;
  const topLabel = node.pos === "t";
  const { nodeBorder, mainBkg } = themeVariables;
  const { stylesMap } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .compileStyles */ .WW)(node);
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const fill = stylesMap.get("fill");
  options.stroke = fill ?? mainBkg;
  const iconElem = shapeSvg.append("g");
  if (node.icon) {
    iconElem.html(
      `<g>${await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getIconSVG */ .WY)(node.icon, {
        height: iconSize,
        width: iconSize,
        fallbackPrefix: ""
      })}</g>`
    );
  }
  const iconBBox = iconElem.node().getBBox();
  const iconWidth = iconBBox.width;
  const iconHeight = iconBBox.height;
  const iconX = iconBBox.x;
  const iconY = iconBBox.y;
  const diameter = Math.max(iconWidth, iconHeight) * Math.SQRT2 + padding * 2;
  const iconNode = rc.circle(0, 0, diameter, options);
  const outerWidth = Math.max(diameter, bbox.width);
  const outerHeight = diameter + bbox.height + labelPadding;
  const outerNode = rc.rectangle(-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight, {
    ...options,
    fill: "transparent",
    stroke: "none"
  });
  const iconShape = shapeSvg.insert(() => iconNode, ":first-child");
  const outerShape = shapeSvg.insert(() => outerNode);
  iconElem.attr(
    "transform",
    `translate(${-iconWidth / 2 - iconX},${topLabel ? bbox.height / 2 + labelPadding / 2 - iconHeight / 2 - iconY : -bbox.height / 2 - labelPadding / 2 - iconHeight / 2 - iconY})`
  );
  iconElem.attr("style", `color: ${stylesMap.get("stroke") ?? nodeBorder};`);
  label.attr(
    "transform",
    `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${topLabel ? -outerHeight / 2 : outerHeight / 2 - bbox.height})`
  );
  iconShape.attr(
    "transform",
    `translate(${0},${topLabel ? bbox.height / 2 + labelPadding / 2 : -bbox.height / 2 - labelPadding / 2})`
  );
  updateNodeBounds(node, outerShape);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("iconSquare intersect", node, point);
    const pos = intersect_default.rect(node, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(iconCircle, "iconCircle");

// src/rendering-util/rendering-elements/shapes/iconRounded.ts

async function iconRounded(parent, node, { config: { themeVariables, flowchart } }) {
  const { labelStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const assetHeight = node.assetHeight ?? 48;
  const assetWidth = node.assetWidth ?? 48;
  const iconSize = Math.max(assetHeight, assetWidth);
  const defaultWidth = flowchart?.wrappingWidth;
  node.width = Math.max(iconSize, defaultWidth ?? 0);
  const { shapeSvg, bbox, halfPadding, label } = await labelHelper(
    parent,
    node,
    "icon-shape default"
  );
  const topLabel = node.pos === "t";
  const height = iconSize + halfPadding * 2;
  const width = iconSize + halfPadding * 2;
  const { nodeBorder, mainBkg } = themeVariables;
  const { stylesMap } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .compileStyles */ .WW)(node);
  const x = -width / 2;
  const y = -height / 2;
  const labelPadding = node.label ? 8 : 0;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const fill = stylesMap.get("fill");
  options.stroke = fill ?? mainBkg;
  const iconNode = rc.path(createRoundedRectPathD(x, y, width, height, 5), options);
  const outerWidth = Math.max(width, bbox.width);
  const outerHeight = height + bbox.height + labelPadding;
  const outerNode = rc.rectangle(-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight, {
    ...options,
    fill: "transparent",
    stroke: "none"
  });
  const iconShape = shapeSvg.insert(() => iconNode, ":first-child").attr("class", "icon-shape2");
  const outerShape = shapeSvg.insert(() => outerNode);
  if (node.icon) {
    const iconElem = shapeSvg.append("g");
    iconElem.html(
      `<g>${await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getIconSVG */ .WY)(node.icon, {
        height: iconSize,
        width: iconSize,
        fallbackPrefix: ""
      })}</g>`
    );
    const iconBBox = iconElem.node().getBBox();
    const iconWidth = iconBBox.width;
    const iconHeight = iconBBox.height;
    const iconX = iconBBox.x;
    const iconY = iconBBox.y;
    iconElem.attr(
      "transform",
      `translate(${-iconWidth / 2 - iconX},${topLabel ? bbox.height / 2 + labelPadding / 2 - iconHeight / 2 - iconY : -bbox.height / 2 - labelPadding / 2 - iconHeight / 2 - iconY})`
    );
    iconElem.attr("style", `color: ${stylesMap.get("stroke") ?? nodeBorder};`);
  }
  label.attr(
    "transform",
    `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${topLabel ? -outerHeight / 2 : outerHeight / 2 - bbox.height})`
  );
  iconShape.attr(
    "transform",
    `translate(${0},${topLabel ? bbox.height / 2 + labelPadding / 2 : -bbox.height / 2 - labelPadding / 2})`
  );
  updateNodeBounds(node, outerShape);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("iconSquare intersect", node, point);
    if (!node.label) {
      return intersect_default.rect(node, point);
    }
    const dx = node.x ?? 0;
    const dy = node.y ?? 0;
    const nodeHeight = node.height ?? 0;
    let points = [];
    if (topLabel) {
      points = [
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx + width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx + width / 2, y: dy + nodeHeight / 2 },
        { x: dx - width / 2, y: dy + nodeHeight / 2 },
        { x: dx - width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding }
      ];
    } else {
      points = [
        { x: dx - width / 2, y: dy - nodeHeight / 2 },
        { x: dx + width / 2, y: dy - nodeHeight / 2 },
        { x: dx + width / 2, y: dy - nodeHeight / 2 + height },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 + height },
        { x: dx + bbox.width / 2 / 2, y: dy + nodeHeight / 2 },
        { x: dx - bbox.width / 2, y: dy + nodeHeight / 2 },
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 + height },
        { x: dx - width / 2, y: dy - nodeHeight / 2 + height }
      ];
    }
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(iconRounded, "iconRounded");

// src/rendering-util/rendering-elements/shapes/iconSquare.ts

async function iconSquare(parent, node, { config: { themeVariables, flowchart } }) {
  const { labelStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const assetHeight = node.assetHeight ?? 48;
  const assetWidth = node.assetWidth ?? 48;
  const iconSize = Math.max(assetHeight, assetWidth);
  const defaultWidth = flowchart?.wrappingWidth;
  node.width = Math.max(iconSize, defaultWidth ?? 0);
  const { shapeSvg, bbox, halfPadding, label } = await labelHelper(
    parent,
    node,
    "icon-shape default"
  );
  const topLabel = node.pos === "t";
  const height = iconSize + halfPadding * 2;
  const width = iconSize + halfPadding * 2;
  const { nodeBorder, mainBkg } = themeVariables;
  const { stylesMap } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .compileStyles */ .WW)(node);
  const x = -width / 2;
  const y = -height / 2;
  const labelPadding = node.label ? 8 : 0;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const fill = stylesMap.get("fill");
  options.stroke = fill ?? mainBkg;
  const iconNode = rc.path(createRoundedRectPathD(x, y, width, height, 0.1), options);
  const outerWidth = Math.max(width, bbox.width);
  const outerHeight = height + bbox.height + labelPadding;
  const outerNode = rc.rectangle(-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight, {
    ...options,
    fill: "transparent",
    stroke: "none"
  });
  const iconShape = shapeSvg.insert(() => iconNode, ":first-child");
  const outerShape = shapeSvg.insert(() => outerNode);
  if (node.icon) {
    const iconElem = shapeSvg.append("g");
    iconElem.html(
      `<g>${await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getIconSVG */ .WY)(node.icon, {
        height: iconSize,
        width: iconSize,
        fallbackPrefix: ""
      })}</g>`
    );
    const iconBBox = iconElem.node().getBBox();
    const iconWidth = iconBBox.width;
    const iconHeight = iconBBox.height;
    const iconX = iconBBox.x;
    const iconY = iconBBox.y;
    iconElem.attr(
      "transform",
      `translate(${-iconWidth / 2 - iconX},${topLabel ? bbox.height / 2 + labelPadding / 2 - iconHeight / 2 - iconY : -bbox.height / 2 - labelPadding / 2 - iconHeight / 2 - iconY})`
    );
    iconElem.attr("style", `color: ${stylesMap.get("stroke") ?? nodeBorder};`);
  }
  label.attr(
    "transform",
    `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${topLabel ? -outerHeight / 2 : outerHeight / 2 - bbox.height})`
  );
  iconShape.attr(
    "transform",
    `translate(${0},${topLabel ? bbox.height / 2 + labelPadding / 2 : -bbox.height / 2 - labelPadding / 2})`
  );
  updateNodeBounds(node, outerShape);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("iconSquare intersect", node, point);
    if (!node.label) {
      return intersect_default.rect(node, point);
    }
    const dx = node.x ?? 0;
    const dy = node.y ?? 0;
    const nodeHeight = node.height ?? 0;
    let points = [];
    if (topLabel) {
      points = [
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx + width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx + width / 2, y: dy + nodeHeight / 2 },
        { x: dx - width / 2, y: dy + nodeHeight / 2 },
        { x: dx - width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding }
      ];
    } else {
      points = [
        { x: dx - width / 2, y: dy - nodeHeight / 2 },
        { x: dx + width / 2, y: dy - nodeHeight / 2 },
        { x: dx + width / 2, y: dy - nodeHeight / 2 + height },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 + height },
        { x: dx + bbox.width / 2 / 2, y: dy + nodeHeight / 2 },
        { x: dx - bbox.width / 2, y: dy + nodeHeight / 2 },
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 + height },
        { x: dx - width / 2, y: dy - nodeHeight / 2 + height }
      ];
    }
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(iconSquare, "iconSquare");

// src/rendering-util/rendering-elements/shapes/imageSquare.ts

async function imageSquare(parent, node, { config: { flowchart } }) {
  const img = new Image();
  img.src = node?.img ?? "";
  await img.decode();
  const imageNaturalWidth = Number(img.naturalWidth.toString().replace("px", ""));
  const imageNaturalHeight = Number(img.naturalHeight.toString().replace("px", ""));
  node.imageAspectRatio = imageNaturalWidth / imageNaturalHeight;
  const { labelStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const defaultWidth = flowchart?.wrappingWidth;
  node.defaultWidth = flowchart?.wrappingWidth;
  const imageRawWidth = Math.max(
    node.label ? defaultWidth ?? 0 : 0,
    node?.assetWidth ?? imageNaturalWidth
  );
  const imageWidth = node.constraint === "on" ? node?.assetHeight ? node.assetHeight * node.imageAspectRatio : imageRawWidth : imageRawWidth;
  const imageHeight = node.constraint === "on" ? imageWidth / node.imageAspectRatio : node?.assetHeight ?? imageNaturalHeight;
  node.width = Math.max(imageWidth, defaultWidth ?? 0);
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, "image-shape default");
  const topLabel = node.pos === "t";
  const x = -imageWidth / 2;
  const y = -imageHeight / 2;
  const labelPadding = node.label ? 8 : 0;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const imageNode = rc.rectangle(x, y, imageWidth, imageHeight, options);
  const outerWidth = Math.max(imageWidth, bbox.width);
  const outerHeight = imageHeight + bbox.height + labelPadding;
  const outerNode = rc.rectangle(-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight, {
    ...options,
    fill: "none",
    stroke: "none"
  });
  const iconShape = shapeSvg.insert(() => imageNode, ":first-child");
  const outerShape = shapeSvg.insert(() => outerNode);
  if (node.img) {
    const image = shapeSvg.append("image");
    image.attr("href", node.img);
    image.attr("width", imageWidth);
    image.attr("height", imageHeight);
    image.attr("preserveAspectRatio", "none");
    image.attr(
      "transform",
      `translate(${-imageWidth / 2},${topLabel ? outerHeight / 2 - imageHeight : -outerHeight / 2})`
    );
  }
  label.attr(
    "transform",
    `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${topLabel ? -imageHeight / 2 - bbox.height / 2 - labelPadding / 2 : imageHeight / 2 - bbox.height / 2 + labelPadding / 2})`
  );
  iconShape.attr(
    "transform",
    `translate(${0},${topLabel ? bbox.height / 2 + labelPadding / 2 : -bbox.height / 2 - labelPadding / 2})`
  );
  updateNodeBounds(node, outerShape);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("iconSquare intersect", node, point);
    if (!node.label) {
      return intersect_default.rect(node, point);
    }
    const dx = node.x ?? 0;
    const dy = node.y ?? 0;
    const nodeHeight = node.height ?? 0;
    let points = [];
    if (topLabel) {
      points = [
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx + imageWidth / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx + imageWidth / 2, y: dy + nodeHeight / 2 },
        { x: dx - imageWidth / 2, y: dy + nodeHeight / 2 },
        { x: dx - imageWidth / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding },
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 + bbox.height + labelPadding }
      ];
    } else {
      points = [
        { x: dx - imageWidth / 2, y: dy - nodeHeight / 2 },
        { x: dx + imageWidth / 2, y: dy - nodeHeight / 2 },
        { x: dx + imageWidth / 2, y: dy - nodeHeight / 2 + imageHeight },
        { x: dx + bbox.width / 2, y: dy - nodeHeight / 2 + imageHeight },
        { x: dx + bbox.width / 2 / 2, y: dy + nodeHeight / 2 },
        { x: dx - bbox.width / 2, y: dy + nodeHeight / 2 },
        { x: dx - bbox.width / 2, y: dy - nodeHeight / 2 + imageHeight },
        { x: dx - imageWidth / 2, y: dy - nodeHeight / 2 + imageHeight }
      ];
    }
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(imageSquare, "imageSquare");

// src/rendering-util/rendering-elements/shapes/invertedTrapezoid.ts

async function inv_trapezoid(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const points = [
    { x: 0, y: 0 },
    { x: w, y: 0 },
    { x: w + 3 * h / 6, y: -h },
    { x: -3 * h / 6, y: -h }
  ];
  let polygon;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const pathData = createPathFromPoints(points);
    const roughNode = rc.path(pathData, options);
    polygon = shapeSvg.insert(() => roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
    if (cssStyles) {
      polygon.attr("style", cssStyles);
    }
  } else {
    polygon = insertPolygonShape(shapeSvg, w, h, points);
  }
  if (nodeStyles) {
    polygon.attr("style", nodeStyles);
  }
  node.width = w;
  node.height = h;
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(inv_trapezoid, "inv_trapezoid");

// src/rendering-util/rendering-elements/shapes/drawRect.ts

async function drawRect(parent, node, options) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const totalWidth = Math.max(bbox.width + options.labelPaddingX * 2, node?.width || 0);
  const totalHeight = Math.max(bbox.height + options.labelPaddingY * 2, node?.height || 0);
  const x = -totalWidth / 2;
  const y = -totalHeight / 2;
  let rect2;
  let { rx, ry } = node;
  const { cssStyles } = node;
  if (options?.rx && options.ry) {
    rx = options.rx;
    ry = options.ry;
  }
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options2 = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const roughNode = rx || ry ? rc.path(createRoundedRectPathD(x, y, totalWidth, totalHeight, rx || 0), options2) : rc.rectangle(x, y, totalWidth, totalHeight, options2);
    rect2 = shapeSvg.insert(() => roughNode, ":first-child");
    rect2.attr("class", "basic label-container").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles));
  } else {
    rect2 = shapeSvg.insert("rect", ":first-child");
    rect2.attr("class", "basic label-container").attr("style", nodeStyles).attr("rx", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(rx)).attr("ry", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(ry)).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
  }
  updateNodeBounds(node, rect2);
  node.calcIntersect = function(bounds, point) {
    return intersect_default.rect(bounds, point);
  };
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(drawRect, "drawRect");

// src/rendering-util/rendering-elements/shapes/labelRect.ts
async function labelRect(parent, node) {
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, "label");
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const totalWidth = 0.1;
  const totalHeight = 0.1;
  rect2.attr("width", totalWidth).attr("height", totalHeight);
  shapeSvg.attr("class", "label edgeLabel");
  label.attr(
    "transform",
    `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(labelRect, "labelRect");

// src/rendering-util/rendering-elements/shapes/leanLeft.ts

async function lean_left(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0), node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0), node?.height ?? 0);
  const points = [
    { x: 0, y: 0 },
    { x: w + 3 * h / 6, y: 0 },
    { x: w, y: -h },
    { x: -(3 * h) / 6, y: -h }
  ];
  let polygon;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const pathData = createPathFromPoints(points);
    const roughNode = rc.path(pathData, options);
    polygon = shapeSvg.insert(() => roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
    if (cssStyles) {
      polygon.attr("style", cssStyles);
    }
  } else {
    polygon = insertPolygonShape(shapeSvg, w, h, points);
  }
  if (nodeStyles) {
    polygon.attr("style", nodeStyles);
  }
  node.width = w;
  node.height = h;
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(lean_left, "lean_left");

// src/rendering-util/rendering-elements/shapes/leanRight.ts

async function lean_right(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0), node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0), node?.height ?? 0);
  const points = [
    { x: -3 * h / 6, y: 0 },
    { x: w, y: 0 },
    { x: w + 3 * h / 6, y: -h },
    { x: 0, y: -h }
  ];
  let polygon;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const pathData = createPathFromPoints(points);
    const roughNode = rc.path(pathData, options);
    polygon = shapeSvg.insert(() => roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
    if (cssStyles) {
      polygon.attr("style", cssStyles);
    }
  } else {
    polygon = insertPolygonShape(shapeSvg, w, h, points);
  }
  if (nodeStyles) {
    polygon.attr("style", nodeStyles);
  }
  node.width = w;
  node.height = h;
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(lean_right, "lean_right");

// src/rendering-util/rendering-elements/shapes/lightningBolt.ts

function lightningBolt(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.label = "";
  node.labelStyle = labelStyles;
  const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId ?? node.id);
  const { cssStyles } = node;
  const width = Math.max(35, node?.width ?? 0);
  const height = Math.max(35, node?.height ?? 0);
  const gap = 7;
  const points = [
    { x: width, y: 0 },
    { x: 0, y: height + gap / 2 },
    { x: width - 2 * gap, y: height + gap / 2 },
    { x: 0, y: 2 * height },
    { x: width, y: height - gap / 2 },
    { x: 2 * gap, y: height - gap / 2 }
  ];
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const linePath = createPathFromPoints(points);
  const lineNode = rc.path(linePath, options);
  const lightningBolt2 = shapeSvg.insert(() => lineNode, ":first-child");
  if (cssStyles && node.look !== "handDrawn") {
    lightningBolt2.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    lightningBolt2.selectAll("path").attr("style", nodeStyles);
  }
  lightningBolt2.attr("transform", `translate(-${width / 2},${-height})`);
  updateNodeBounds(node, lightningBolt2);
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("lightningBolt intersect", node, point);
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(lightningBolt, "lightningBolt");

// src/rendering-util/rendering-elements/shapes/linedCylinder.ts

var createCylinderPathD2 = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, width, height, rx, ry, outerOffset) => {
  return [
    `M${x},${y + ry}`,
    `a${rx},${ry} 0,0,0 ${width},0`,
    `a${rx},${ry} 0,0,0 ${-width},0`,
    `l0,${height}`,
    `a${rx},${ry} 0,0,0 ${width},0`,
    `l0,${-height}`,
    `M${x},${y + ry + outerOffset}`,
    `a${rx},${ry} 0,0,0 ${width},0`
  ].join(" ");
}, "createCylinderPathD");
var createOuterCylinderPathD2 = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, width, height, rx, ry, outerOffset) => {
  return [
    `M${x},${y + ry}`,
    `M${x + width},${y + ry}`,
    `a${rx},${ry} 0,0,0 ${-width},0`,
    `l0,${height}`,
    `a${rx},${ry} 0,0,0 ${width},0`,
    `l0,${-height}`,
    `M${x},${y + ry + outerOffset}`,
    `a${rx},${ry} 0,0,0 ${width},0`
  ].join(" ");
}, "createOuterCylinderPathD");
var createInnerCylinderPathD2 = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, width, height, rx, ry) => {
  return [`M${x - width / 2},${-height / 2}`, `a${rx},${ry} 0,0,0 ${width},0`].join(" ");
}, "createInnerCylinderPathD");
async function linedCylinder(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0), node.width ?? 0);
  const rx = w / 2;
  const ry = rx / (2.5 + w / 50);
  const h = Math.max(bbox.height + ry + (node.padding ?? 0), node.height ?? 0);
  const outerOffset = h * 0.1;
  let cylinder2;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const outerPathData = createOuterCylinderPathD2(0, 0, w, h, rx, ry, outerOffset);
    const innerPathData = createInnerCylinderPathD2(0, ry, w, h, rx, ry);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const outerNode = rc.path(outerPathData, options);
    const innerLine = rc.path(innerPathData, options);
    const innerLineEl = shapeSvg.insert(() => innerLine, ":first-child");
    innerLineEl.attr("class", "line");
    cylinder2 = shapeSvg.insert(() => outerNode, ":first-child");
    cylinder2.attr("class", "basic label-container");
    if (cssStyles) {
      cylinder2.attr("style", cssStyles);
    }
  } else {
    const pathData = createCylinderPathD2(0, 0, w, h, rx, ry, outerOffset);
    cylinder2 = shapeSvg.insert("path", ":first-child").attr("d", pathData).attr("class", "basic label-container").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles)).attr("style", nodeStyles);
  }
  cylinder2.attr("label-offset-y", ry);
  cylinder2.attr("transform", `translate(${-w / 2}, ${-(h / 2 + ry)})`);
  updateNodeBounds(node, cylinder2);
  label.attr(
    "transform",
    `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + ry - (bbox.y - (bbox.top ?? 0))})`
  );
  node.intersect = function(point) {
    const pos = intersect_default.rect(node, point);
    const x = pos.x - (node.x ?? 0);
    if (rx != 0 && (Math.abs(x) < (node.width ?? 0) / 2 || Math.abs(x) == (node.width ?? 0) / 2 && Math.abs(pos.y - (node.y ?? 0)) > (node.height ?? 0) / 2 - ry)) {
      let y = ry * ry * (1 - x * x / (rx * rx));
      if (y > 0) {
        y = Math.sqrt(y);
      }
      y = ry - y;
      if (point.y - (node.y ?? 0) > 0) {
        y = -y;
      }
      pos.y += y;
    }
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(linedCylinder, "linedCylinder");

// src/rendering-util/rendering-elements/shapes/linedWaveEdgedRect.ts

async function linedWaveEdgedRect(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const waveAmplitude = h / 4;
  const finalH = h + waveAmplitude;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const points = [
    { x: -w / 2 - w / 2 * 0.1, y: -finalH / 2 },
    { x: -w / 2 - w / 2 * 0.1, y: finalH / 2 },
    ...generateFullSineWavePoints(
      -w / 2 - w / 2 * 0.1,
      finalH / 2,
      w / 2 + w / 2 * 0.1,
      finalH / 2,
      waveAmplitude,
      0.8
    ),
    { x: w / 2 + w / 2 * 0.1, y: -finalH / 2 },
    { x: -w / 2 - w / 2 * 0.1, y: -finalH / 2 },
    { x: -w / 2, y: -finalH / 2 },
    { x: -w / 2, y: finalH / 2 * 1.1 },
    { x: -w / 2, y: -finalH / 2 }
  ];
  const poly = rc.polygon(
    points.map((p) => [p.x, p.y]),
    options
  );
  const waveEdgeRect = shapeSvg.insert(() => poly, ":first-child");
  waveEdgeRect.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    waveEdgeRect.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    waveEdgeRect.selectAll("path").attr("style", nodeStyles);
  }
  waveEdgeRect.attr("transform", `translate(0,${-waveAmplitude / 2})`);
  label.attr(
    "transform",
    `translate(${-w / 2 + (node.padding ?? 0) + w / 2 * 0.1 / 2 - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) - waveAmplitude / 2 - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, waveEdgeRect);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(linedWaveEdgedRect, "linedWaveEdgedRect");

// src/rendering-util/rendering-elements/shapes/multiRect.ts

async function multiRect(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const rectOffset = 5;
  const x = -w / 2;
  const y = -h / 2;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  const outerPathPoints = [
    { x: x - rectOffset, y: y + rectOffset },
    { x: x - rectOffset, y: y + h + rectOffset },
    { x: x + w - rectOffset, y: y + h + rectOffset },
    { x: x + w - rectOffset, y: y + h },
    { x: x + w, y: y + h },
    { x: x + w, y: y + h - rectOffset },
    { x: x + w + rectOffset, y: y + h - rectOffset },
    { x: x + w + rectOffset, y: y - rectOffset },
    { x: x + rectOffset, y: y - rectOffset },
    { x: x + rectOffset, y },
    { x, y },
    { x, y: y + rectOffset }
  ];
  const innerPathPoints = [
    { x, y: y + rectOffset },
    { x: x + w - rectOffset, y: y + rectOffset },
    { x: x + w - rectOffset, y: y + h },
    { x: x + w, y: y + h },
    { x: x + w, y },
    { x, y }
  ];
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const outerPath = createPathFromPoints(outerPathPoints);
  const outerNode = rc.path(outerPath, options);
  const innerPath = createPathFromPoints(innerPathPoints);
  const innerNode = rc.path(innerPath, { ...options, fill: "none" });
  const multiRect2 = shapeSvg.insert(() => innerNode, ":first-child");
  multiRect2.insert(() => outerNode, ":first-child");
  multiRect2.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    multiRect2.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    multiRect2.selectAll("path").attr("style", nodeStyles);
  }
  label.attr(
    "transform",
    `translate(${-(bbox.width / 2) - rectOffset - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + rectOffset - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, multiRect2);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, outerPathPoints, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(multiRect, "multiRect");

// src/rendering-util/rendering-elements/shapes/multiWaveEdgedRectangle.ts

async function multiWaveEdgedRectangle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const waveAmplitude = h / 4;
  const finalH = h + waveAmplitude;
  const x = -w / 2;
  const y = -finalH / 2;
  const rectOffset = 5;
  const { cssStyles } = node;
  const wavePoints = generateFullSineWavePoints(
    x - rectOffset,
    y + finalH + rectOffset,
    x + w - rectOffset,
    y + finalH + rectOffset,
    waveAmplitude,
    0.8
  );
  const lastWavePoint = wavePoints?.[wavePoints.length - 1];
  const outerPathPoints = [
    { x: x - rectOffset, y: y + rectOffset },
    { x: x - rectOffset, y: y + finalH + rectOffset },
    ...wavePoints,
    { x: x + w - rectOffset, y: lastWavePoint.y - rectOffset },
    { x: x + w, y: lastWavePoint.y - rectOffset },
    { x: x + w, y: lastWavePoint.y - 2 * rectOffset },
    { x: x + w + rectOffset, y: lastWavePoint.y - 2 * rectOffset },
    { x: x + w + rectOffset, y: y - rectOffset },
    { x: x + rectOffset, y: y - rectOffset },
    { x: x + rectOffset, y },
    { x, y },
    { x, y: y + rectOffset }
  ];
  const innerPathPoints = [
    { x, y: y + rectOffset },
    { x: x + w - rectOffset, y: y + rectOffset },
    { x: x + w - rectOffset, y: lastWavePoint.y - rectOffset },
    { x: x + w, y: lastWavePoint.y - rectOffset },
    { x: x + w, y },
    { x, y }
  ];
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const outerPath = createPathFromPoints(outerPathPoints);
  const outerNode = rc.path(outerPath, options);
  const innerPath = createPathFromPoints(innerPathPoints);
  const innerNode = rc.path(innerPath, options);
  const shape = shapeSvg.insert(() => outerNode, ":first-child");
  shape.insert(() => innerNode);
  shape.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    shape.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    shape.selectAll("path").attr("style", nodeStyles);
  }
  shape.attr("transform", `translate(0,${-waveAmplitude / 2})`);
  label.attr(
    "transform",
    `translate(${-(bbox.width / 2) - rectOffset - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + rectOffset - waveAmplitude / 2 - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, shape);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, outerPathPoints, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(multiWaveEdgedRectangle, "multiWaveEdgedRectangle");

// src/rendering-util/rendering-elements/shapes/note.ts

async function note(parent, node, { config: { themeVariables } }) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const useHtmlLabels = node.useHtmlLabels || (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig */ .zj)());
  if (!useHtmlLabels) {
    node.centerLabel = true;
  }
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const totalWidth = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const totalHeight = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const x = -totalWidth / 2;
  const y = -totalHeight / 2;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {
    fill: themeVariables.noteBkgColor,
    stroke: themeVariables.noteBorderColor
  });
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const noteShapeNode = rc.rectangle(x, y, totalWidth, totalHeight, options);
  const rect2 = shapeSvg.insert(() => noteShapeNode, ":first-child");
  rect2.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    rect2.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    rect2.selectAll("path").attr("style", nodeStyles);
  }
  label.attr(
    "transform",
    `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(note, "note");

// src/rendering-util/rendering-elements/shapes/question.ts

var createDecisionBoxPathD = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, size) => {
  return [
    `M${x + size / 2},${y}`,
    `L${x + size},${y - size / 2}`,
    `L${x + size / 2},${y - size}`,
    `L${x},${y - size / 2}`,
    "Z"
  ].join(" ");
}, "createDecisionBoxPathD");
async function question(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const s = w + h;
  const adjustment = 0.5;
  const points = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  let polygon;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const pathData = createDecisionBoxPathD(0, 0, s);
    const roughNode = rc.path(pathData, options);
    polygon = shapeSvg.insert(() => roughNode, ":first-child").attr("transform", `translate(${-s / 2 + adjustment}, ${s / 2})`);
    if (cssStyles) {
      polygon.attr("style", cssStyles);
    }
  } else {
    polygon = insertPolygonShape(shapeSvg, s, s, points);
    polygon.attr("transform", `translate(${-s / 2 + adjustment}, ${s / 2})`);
  }
  if (nodeStyles) {
    polygon.attr("style", nodeStyles);
  }
  updateNodeBounds(node, polygon);
  node.calcIntersect = function(bounds, point) {
    const s2 = bounds.width;
    const points2 = [
      { x: s2 / 2, y: 0 },
      { x: s2, y: -s2 / 2 },
      { x: s2 / 2, y: -s2 },
      { x: 0, y: -s2 / 2 }
    ];
    const res = intersect_default.polygon(bounds, points2, point);
    return { x: res.x - 0.5, y: res.y - 0.5 };
  };
  node.intersect = function(point) {
    return this.calcIntersect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(question, "question");

// src/rendering-util/rendering-elements/shapes/rectLeftInvArrow.ts

async function rect_left_inv_arrow(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0), node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0), node?.height ?? 0);
  const x = -w / 2;
  const y = -h / 2;
  const notch = y / 2;
  const points = [
    { x: x + notch, y },
    { x, y: 0 },
    { x: x + notch, y: -y },
    { x: -x, y: -y },
    { x: -x, y }
  ];
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const pathData = createPathFromPoints(points);
  const roughNode = rc.path(pathData, options);
  const polygon = shapeSvg.insert(() => roughNode, ":first-child");
  polygon.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    polygon.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    polygon.selectAll("path").attr("style", nodeStyles);
  }
  polygon.attr("transform", `translate(${-notch / 2},0)`);
  label.attr(
    "transform",
    `translate(${-notch / 2 - bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(rect_left_inv_arrow, "rect_left_inv_arrow");

// src/rendering-util/rendering-elements/shapes/rectWithTitle.ts


async function rectWithTitle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  let classes;
  if (!node.cssClasses) {
    classes = "node default";
  } else {
    classes = "node " + node.cssClasses;
  }
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
  const g = shapeSvg.insert("g");
  const label = shapeSvg.insert("g").attr("class", "label").attr("style", nodeStyles);
  const description = node.description;
  const title = node.label;
  const text2 = await createLabel_default(label, title, node.labelStyle, true, true);
  let bbox = { width: 0, height: 0 };
  if ((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)())) {
    const div2 = text2.children[0];
    const dv2 = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2);
    bbox = div2.getBoundingClientRect();
    dv2.attr("width", bbox.width);
    dv2.attr("height", bbox.height);
  }
  _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Text 2", description);
  const textRows = description || [];
  const titleBox = text2.getBBox();
  const descr = await createLabel_default(
    label,
    Array.isArray(textRows) ? textRows.join("<br/>") : textRows,
    node.labelStyle,
    true,
    true
  );
  const div = descr.children[0];
  const dv = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(descr);
  bbox = div.getBoundingClientRect();
  dv.attr("width", bbox.width);
  dv.attr("height", bbox.height);
  const halfPadding = (node.padding || 0) / 2;
  (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(descr).attr(
    "transform",
    "translate( " + (bbox.width > titleBox.width ? 0 : (titleBox.width - bbox.width) / 2) + ", " + (titleBox.height + halfPadding + 5) + ")"
  );
  (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2).attr(
    "transform",
    "translate( " + (bbox.width < titleBox.width ? 0 : -(titleBox.width - bbox.width) / 2) + ", 0)"
  );
  bbox = label.node().getBBox();
  label.attr(
    "transform",
    "translate(" + -bbox.width / 2 + ", " + (-bbox.height / 2 - halfPadding + 3) + ")"
  );
  const totalWidth = bbox.width + (node.padding || 0);
  const totalHeight = bbox.height + (node.padding || 0);
  const x = -bbox.width / 2 - halfPadding;
  const y = -bbox.height / 2 - halfPadding;
  let rect2;
  let innerLine;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const roughNode = rc.path(
      createRoundedRectPathD(x, y, totalWidth, totalHeight, node.rx || 0),
      options
    );
    const roughLine = rc.line(
      -bbox.width / 2 - halfPadding,
      -bbox.height / 2 - halfPadding + titleBox.height + halfPadding,
      bbox.width / 2 + halfPadding,
      -bbox.height / 2 - halfPadding + titleBox.height + halfPadding,
      options
    );
    innerLine = shapeSvg.insert(() => {
      _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.debug("Rough node insert CXC", roughNode);
      return roughLine;
    }, ":first-child");
    rect2 = shapeSvg.insert(() => {
      _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.debug("Rough node insert CXC", roughNode);
      return roughNode;
    }, ":first-child");
  } else {
    rect2 = g.insert("rect", ":first-child");
    innerLine = g.insert("line");
    rect2.attr("class", "outer title-state").attr("style", nodeStyles).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + (node.padding || 0)).attr("height", bbox.height + (node.padding || 0));
    innerLine.attr("class", "divider").attr("x1", -bbox.width / 2 - halfPadding).attr("x2", bbox.width / 2 + halfPadding).attr("y1", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding).attr("y2", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding);
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(rectWithTitle, "rectWithTitle");

// src/rendering-util/rendering-elements/shapes/roundedRect.ts
async function roundedRect(parent, node) {
  const options = {
    rx: 5,
    ry: 5,
    classes: "",
    labelPaddingX: (node?.padding || 0) * 1,
    labelPaddingY: (node?.padding || 0) * 1
  };
  return drawRect(parent, node, options);
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(roundedRect, "roundedRect");

// src/rendering-util/rendering-elements/shapes/shadedProcess.ts

async function shadedProcess(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const halfPadding = node?.padding ?? 0;
  const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const x = -bbox.width / 2 - halfPadding;
  const y = -bbox.height / 2 - halfPadding;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const points = [
    { x, y },
    { x: x + w + 8, y },
    { x: x + w + 8, y: y + h },
    { x: x - 8, y: y + h },
    { x: x - 8, y },
    { x, y },
    { x, y: y + h }
  ];
  const roughNode = rc.polygon(
    points.map((p) => [p.x, p.y]),
    options
  );
  const rect2 = shapeSvg.insert(() => roughNode, ":first-child");
  rect2.attr("class", "basic label-container").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles));
  if (nodeStyles && node.look !== "handDrawn") {
    rect2.selectAll("path").attr("style", nodeStyles);
  }
  if (cssStyles && node.look !== "handDrawn") {
    rect2.selectAll("path").attr("style", nodeStyles);
  }
  label.attr(
    "transform",
    `translate(${-w / 2 + 4 + (node.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(shadedProcess, "shadedProcess");

// src/rendering-util/rendering-elements/shapes/slopedRect.ts

async function slopedRect(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const x = -w / 2;
  const y = -h / 2;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const points = [
    { x, y },
    { x, y: y + h },
    { x: x + w, y: y + h },
    { x: x + w, y: y - h / 2 }
  ];
  const pathData = createPathFromPoints(points);
  const shapeNode = rc.path(pathData, options);
  const polygon = shapeSvg.insert(() => shapeNode, ":first-child");
  polygon.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", nodeStyles);
  }
  polygon.attr("transform", `translate(0, ${h / 4})`);
  label.attr(
    "transform",
    `translate(${-w / 2 + (node.padding ?? 0) - (bbox.x - (bbox.left ?? 0))}, ${-h / 4 + (node.padding ?? 0) - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(slopedRect, "slopedRect");

// src/rendering-util/rendering-elements/shapes/squareRect.ts
async function squareRect2(parent, node) {
  const options = {
    rx: 0,
    ry: 0,
    classes: "",
    labelPaddingX: node.labelPaddingX ?? (node?.padding || 0) * 2,
    labelPaddingY: (node?.padding || 0) * 1
  };
  return drawRect(parent, node, options);
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(squareRect2, "squareRect");

// src/rendering-util/rendering-elements/shapes/stadium.ts

async function stadium(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const h = bbox.height + node.padding;
  const w = bbox.width + h / 4 + node.padding;
  const radius = h / 2;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const points = [
    { x: -w / 2 + radius, y: -h / 2 },
    { x: w / 2 - radius, y: -h / 2 },
    ...generateCirclePoints(-w / 2 + radius, 0, radius, 50, 90, 270),
    { x: w / 2 - radius, y: h / 2 },
    ...generateCirclePoints(w / 2 - radius, 0, radius, 50, 270, 450)
  ];
  const pathData = createPathFromPoints(points);
  const shapeNode = rc.path(pathData, options);
  const polygon = shapeSvg.insert(() => shapeNode, ":first-child");
  polygon.attr("class", "basic label-container outer-path");
  if (cssStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", nodeStyles);
  }
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(stadium, "stadium");

// src/rendering-util/rendering-elements/shapes/state.ts
async function state(parent, node) {
  const options = {
    rx: 5,
    ry: 5,
    classes: "flowchart-node"
  };
  return drawRect(parent, node, options);
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(state, "state");

// src/rendering-util/rendering-elements/shapes/stateEnd.ts

function stateEnd(parent, node, { config: { themeVariables } }) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { cssStyles } = node;
  const { lineColor, stateBorder, nodeBorder } = themeVariables;
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const roughNode = rc.circle(0, 0, 14, {
    ...options,
    stroke: lineColor,
    strokeWidth: 2
  });
  const innerFill = stateBorder ?? nodeBorder;
  const roughInnerNode = rc.circle(0, 0, 5, {
    ...options,
    fill: innerFill,
    stroke: innerFill,
    strokeWidth: 2,
    fillStyle: "solid"
  });
  const circle2 = shapeSvg.insert(() => roughNode, ":first-child");
  circle2.insert(() => roughInnerNode);
  if (cssStyles) {
    circle2.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles) {
    circle2.selectAll("path").attr("style", nodeStyles);
  }
  updateNodeBounds(node, circle2);
  node.intersect = function(point) {
    return intersect_default.circle(node, 7, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(stateEnd, "stateEnd");

// src/rendering-util/rendering-elements/shapes/stateStart.ts

function stateStart(parent, node, { config: { themeVariables } }) {
  const { lineColor } = themeVariables;
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  let circle2;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const roughNode = rc.circle(0, 0, 14, (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .solidStateFill */ .ue)(lineColor));
    circle2 = shapeSvg.insert(() => roughNode);
    circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  } else {
    circle2 = shapeSvg.insert("circle", ":first-child");
    circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  }
  updateNodeBounds(node, circle2);
  node.intersect = function(point) {
    return intersect_default.circle(node, 7, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(stateStart, "stateStart");

// src/rendering-util/rendering-elements/shapes/subroutine.ts

async function subroutine(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const halfPadding = (node?.padding || 0) / 2;
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const x = -bbox.width / 2 - halfPadding;
  const y = -bbox.height / 2 - halfPadding;
  const points = [
    { x: 0, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: 0, y: -h },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: w + 8, y: 0 },
    { x: w + 8, y: -h },
    { x: -8, y: -h },
    { x: -8, y: 0 }
  ];
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const roughNode = rc.rectangle(x - 8, y, w + 16, h, options);
    const l1 = rc.line(x, y, x, y + h, options);
    const l2 = rc.line(x + w, y, x + w, y + h, options);
    shapeSvg.insert(() => l1, ":first-child");
    shapeSvg.insert(() => l2, ":first-child");
    const rect2 = shapeSvg.insert(() => roughNode, ":first-child");
    const { cssStyles } = node;
    rect2.attr("class", "basic label-container").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles));
    updateNodeBounds(node, rect2);
  } else {
    const el = insertPolygonShape(shapeSvg, w, h, points);
    if (nodeStyles) {
      el.attr("style", nodeStyles);
    }
    updateNodeBounds(node, el);
  }
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(subroutine, "subroutine");

// src/rendering-util/rendering-elements/shapes/taggedRect.ts

async function taggedRect(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const x = -w / 2;
  const y = -h / 2;
  const tagWidth = 0.2 * h;
  const tagHeight = 0.2 * h;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  const rectPoints = [
    { x: x - tagWidth / 2, y },
    { x: x + w + tagWidth / 2, y },
    { x: x + w + tagWidth / 2, y: y + h },
    { x: x - tagWidth / 2, y: y + h }
  ];
  const tagPoints = [
    { x: x + w - tagWidth / 2, y: y + h },
    { x: x + w + tagWidth / 2, y: y + h },
    { x: x + w + tagWidth / 2, y: y + h - tagHeight }
  ];
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const rectPath = createPathFromPoints(rectPoints);
  const rectNode = rc.path(rectPath, options);
  const tagPath = createPathFromPoints(tagPoints);
  const tagNode = rc.path(tagPath, { ...options, fillStyle: "solid" });
  const taggedRect2 = shapeSvg.insert(() => tagNode, ":first-child");
  taggedRect2.insert(() => rectNode, ":first-child");
  taggedRect2.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    taggedRect2.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    taggedRect2.selectAll("path").attr("style", nodeStyles);
  }
  updateNodeBounds(node, taggedRect2);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, rectPoints, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(taggedRect, "taggedRect");

// src/rendering-util/rendering-elements/shapes/taggedWaveEdgedRectangle.ts

async function taggedWaveEdgedRectangle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const waveAmplitude = h / 4;
  const tagWidth = 0.2 * w;
  const tagHeight = 0.2 * h;
  const finalH = h + waveAmplitude;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const points = [
    { x: -w / 2 - w / 2 * 0.1, y: finalH / 2 },
    ...generateFullSineWavePoints(
      -w / 2 - w / 2 * 0.1,
      finalH / 2,
      w / 2 + w / 2 * 0.1,
      finalH / 2,
      waveAmplitude,
      0.8
    ),
    { x: w / 2 + w / 2 * 0.1, y: -finalH / 2 },
    { x: -w / 2 - w / 2 * 0.1, y: -finalH / 2 }
  ];
  const x = -w / 2 + w / 2 * 0.1;
  const y = -finalH / 2 - tagHeight * 0.4;
  const tagPoints = [
    { x: x + w - tagWidth, y: (y + h) * 1.4 },
    { x: x + w, y: y + h - tagHeight },
    { x: x + w, y: (y + h) * 0.9 },
    ...generateFullSineWavePoints(
      x + w,
      (y + h) * 1.3,
      x + w - tagWidth,
      (y + h) * 1.5,
      -h * 0.03,
      0.5
    )
  ];
  const waveEdgeRectPath = createPathFromPoints(points);
  const waveEdgeRectNode = rc.path(waveEdgeRectPath, options);
  const taggedWaveEdgeRectPath = createPathFromPoints(tagPoints);
  const taggedWaveEdgeRectNode = rc.path(taggedWaveEdgeRectPath, {
    ...options,
    fillStyle: "solid"
  });
  const waveEdgeRect = shapeSvg.insert(() => taggedWaveEdgeRectNode, ":first-child");
  waveEdgeRect.insert(() => waveEdgeRectNode, ":first-child");
  waveEdgeRect.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    waveEdgeRect.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    waveEdgeRect.selectAll("path").attr("style", nodeStyles);
  }
  waveEdgeRect.attr("transform", `translate(0,${-waveAmplitude / 2})`);
  label.attr(
    "transform",
    `translate(${-w / 2 + (node.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) - waveAmplitude / 2 - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, waveEdgeRect);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(taggedWaveEdgedRectangle, "taggedWaveEdgedRectangle");

// src/rendering-util/rendering-elements/shapes/text.ts
async function text(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const totalWidth = Math.max(bbox.width + node.padding, node?.width || 0);
  const totalHeight = Math.max(bbox.height + node.padding, node?.height || 0);
  const x = -totalWidth / 2;
  const y = -totalHeight / 2;
  const rect2 = shapeSvg.insert("rect", ":first-child");
  rect2.attr("class", "text").attr("style", nodeStyles).attr("rx", 0).attr("ry", 0).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(text, "text");

// src/rendering-util/rendering-elements/shapes/tiltedCylinder.ts

var createCylinderPathD3 = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, width, height, rx, ry) => {
  return `M${x},${y}
    a${rx},${ry} 0,0,1 ${0},${-height}
    l${width},${0}
    a${rx},${ry} 0,0,1 ${0},${height}
    M${width},${-height}
    a${rx},${ry} 0,0,0 ${0},${height}
    l${-width},${0}`;
}, "createCylinderPathD");
var createOuterCylinderPathD3 = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, width, height, rx, ry) => {
  return [
    `M${x},${y}`,
    `M${x + width},${y}`,
    `a${rx},${ry} 0,0,0 ${0},${-height}`,
    `l${-width},0`,
    `a${rx},${ry} 0,0,0 ${0},${height}`,
    `l${width},0`
  ].join(" ");
}, "createOuterCylinderPathD");
var createInnerCylinderPathD3 = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((x, y, width, height, rx, ry) => {
  return [`M${x + width / 2},${-height / 2}`, `a${rx},${ry} 0,0,0 0,${height}`].join(" ");
}, "createInnerCylinderPathD");
async function tiltedCylinder(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label, halfPadding } = await labelHelper(
    parent,
    node,
    getNodeClasses(node)
  );
  const labelPadding = node.look === "neo" ? halfPadding * 2 : halfPadding;
  const h = bbox.height + labelPadding;
  const ry = h / 2;
  const rx = ry / (2.5 + h / 50);
  const w = bbox.width + rx + labelPadding;
  const { cssStyles } = node;
  let cylinder2;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const outerPathData = createOuterCylinderPathD3(0, 0, w, h, rx, ry);
    const innerPathData = createInnerCylinderPathD3(0, 0, w, h, rx, ry);
    const outerNode = rc.path(outerPathData, (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {}));
    const innerLine = rc.path(innerPathData, (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, { fill: "none" }));
    cylinder2 = shapeSvg.insert(() => innerLine, ":first-child");
    cylinder2 = shapeSvg.insert(() => outerNode, ":first-child");
    cylinder2.attr("class", "basic label-container");
    if (cssStyles) {
      cylinder2.attr("style", cssStyles);
    }
  } else {
    const pathData = createCylinderPathD3(0, 0, w, h, rx, ry);
    cylinder2 = shapeSvg.insert("path", ":first-child").attr("d", pathData).attr("class", "basic label-container").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles)).attr("style", nodeStyles);
    cylinder2.attr("class", "basic label-container");
    if (cssStyles) {
      cylinder2.selectAll("path").attr("style", cssStyles);
    }
    if (nodeStyles) {
      cylinder2.selectAll("path").attr("style", nodeStyles);
    }
  }
  cylinder2.attr("label-offset-x", rx);
  cylinder2.attr("transform", `translate(${-w / 2}, ${h / 2} )`);
  label.attr(
    "transform",
    `translate(${-(bbox.width / 2) - rx - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, cylinder2);
  node.intersect = function(point) {
    const pos = intersect_default.rect(node, point);
    const y = pos.y - (node.y ?? 0);
    if (ry != 0 && (Math.abs(y) < (node.height ?? 0) / 2 || Math.abs(y) == (node.height ?? 0) / 2 && Math.abs(pos.x - (node.x ?? 0)) > (node.width ?? 0) / 2 - rx)) {
      let x = rx * rx * (1 - y * y / (ry * ry));
      if (x != 0) {
        x = Math.sqrt(Math.abs(x));
      }
      x = rx - x;
      if (point.x - (node.x ?? 0) > 0) {
        x = -x;
      }
      pos.x += x;
    }
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(tiltedCylinder, "tiltedCylinder");

// src/rendering-util/rendering-elements/shapes/trapezoid.ts

async function trapezoid(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: -3 * h / 6, y: 0 },
    { x: w + 3 * h / 6, y: 0 },
    { x: w, y: -h },
    { x: 0, y: -h }
  ];
  let polygon;
  const { cssStyles } = node;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const pathData = createPathFromPoints(points);
    const roughNode = rc.path(pathData, options);
    polygon = shapeSvg.insert(() => roughNode, ":first-child").attr("transform", `translate(${-w / 2}, ${h / 2})`);
    if (cssStyles) {
      polygon.attr("style", cssStyles);
    }
  } else {
    polygon = insertPolygonShape(shapeSvg, w, h, points);
  }
  if (nodeStyles) {
    polygon.attr("style", nodeStyles);
  }
  node.width = w;
  node.height = h;
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(trapezoid, "trapezoid");

// src/rendering-util/rendering-elements/shapes/trapezoidalPentagon.ts

async function trapezoidalPentagon(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const minWidth = 60, minHeight = 20;
  const w = Math.max(minWidth, bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(minHeight, bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const points = [
    { x: -w / 2 * 0.8, y: -h / 2 },
    { x: w / 2 * 0.8, y: -h / 2 },
    { x: w / 2, y: -h / 2 * 0.6 },
    { x: w / 2, y: h / 2 },
    { x: -w / 2, y: h / 2 },
    { x: -w / 2, y: -h / 2 * 0.6 }
  ];
  const pathData = createPathFromPoints(points);
  const shapeNode = rc.path(pathData, options);
  const polygon = shapeSvg.insert(() => shapeNode, ":first-child");
  polygon.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", nodeStyles);
  }
  updateNodeBounds(node, polygon);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(trapezoidalPentagon, "trapezoidalPentagon");

// src/rendering-util/rendering-elements/shapes/triangle.ts

async function triangle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const useHtmlLabels = node.useHtmlLabels || (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getEffectiveHtmlLabels */ .E)((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)());
  const w = bbox.width + (node.padding ?? 0);
  const h = w + bbox.height;
  const tw = w + bbox.height;
  const points = [
    { x: 0, y: 0 },
    { x: tw, y: 0 },
    { x: tw / 2, y: -h }
  ];
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const pathData = createPathFromPoints(points);
  const roughNode = rc.path(pathData, options);
  const polygon = shapeSvg.insert(() => roughNode, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`);
  if (cssStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    polygon.selectChildren("path").attr("style", nodeStyles);
  }
  node.width = w;
  node.height = h;
  updateNodeBounds(node, polygon);
  label.attr(
    "transform",
    `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${h / 2 - (bbox.height + (node.padding ?? 0) / (useHtmlLabels ? 2 : 1) - (bbox.y - (bbox.top ?? 0)))})`
  );
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Triangle intersect", node, points, point);
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(triangle, "triangle");

// src/rendering-util/rendering-elements/shapes/waveEdgedRectangle.ts

async function waveEdgedRectangle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const waveAmplitude = h / 8;
  const finalH = h + waveAmplitude;
  const { cssStyles } = node;
  const minWidth = 70;
  const widthDif = minWidth - w;
  const extraW = widthDif > 0 ? widthDif / 2 : 0;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const points = [
    { x: -w / 2 - extraW, y: finalH / 2 },
    ...generateFullSineWavePoints(
      -w / 2 - extraW,
      finalH / 2,
      w / 2 + extraW,
      finalH / 2,
      waveAmplitude,
      0.8
    ),
    { x: w / 2 + extraW, y: -finalH / 2 },
    { x: -w / 2 - extraW, y: -finalH / 2 }
  ];
  const waveEdgeRectPath = createPathFromPoints(points);
  const waveEdgeRectNode = rc.path(waveEdgeRectPath, options);
  const waveEdgeRect = shapeSvg.insert(() => waveEdgeRectNode, ":first-child");
  waveEdgeRect.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    waveEdgeRect.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    waveEdgeRect.selectAll("path").attr("style", nodeStyles);
  }
  waveEdgeRect.attr("transform", `translate(0,${-waveAmplitude / 2})`);
  label.attr(
    "transform",
    `translate(${-w / 2 + (node.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-h / 2 + (node.padding ?? 0) - waveAmplitude - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, waveEdgeRect);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(waveEdgedRectangle, "waveEdgedRectangle");

// src/rendering-util/rendering-elements/shapes/waveRectangle.ts

async function waveRectangle(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox } = await labelHelper(parent, node, getNodeClasses(node));
  const minWidth = 100;
  const minHeight = 50;
  const baseWidth = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const baseHeight = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const aspectRatio = baseWidth / baseHeight;
  let w = baseWidth;
  let h = baseHeight;
  if (w > h * aspectRatio) {
    h = w / aspectRatio;
  } else {
    w = h * aspectRatio;
  }
  w = Math.max(w, minWidth);
  h = Math.max(h, minHeight);
  const waveAmplitude = Math.min(h * 0.2, h / 4);
  const finalH = h + waveAmplitude * 2;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const points = [
    { x: -w / 2, y: finalH / 2 },
    ...generateFullSineWavePoints(-w / 2, finalH / 2, w / 2, finalH / 2, waveAmplitude, 1),
    { x: w / 2, y: -finalH / 2 },
    ...generateFullSineWavePoints(w / 2, -finalH / 2, -w / 2, -finalH / 2, waveAmplitude, -1)
  ];
  const waveRectPath = createPathFromPoints(points);
  const waveRectNode = rc.path(waveRectPath, options);
  const waveRect = shapeSvg.insert(() => waveRectNode, ":first-child");
  waveRect.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    waveRect.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    waveRect.selectAll("path").attr("style", nodeStyles);
  }
  updateNodeBounds(node, waveRect);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, points, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(waveRectangle, "waveRectangle");

// src/rendering-util/rendering-elements/shapes/windowPane.ts

async function windowPane(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, label } = await labelHelper(parent, node, getNodeClasses(node));
  const w = Math.max(bbox.width + (node.padding ?? 0) * 2, node?.width ?? 0);
  const h = Math.max(bbox.height + (node.padding ?? 0) * 2, node?.height ?? 0);
  const rectOffset = 5;
  const x = -w / 2;
  const y = -h / 2;
  const { cssStyles } = node;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  const outerPathPoints = [
    { x: x - rectOffset, y: y - rectOffset },
    { x: x - rectOffset, y: y + h },
    { x: x + w, y: y + h },
    { x: x + w, y: y - rectOffset }
  ];
  const path = `M${x - rectOffset},${y - rectOffset} L${x + w},${y - rectOffset} L${x + w},${y + h} L${x - rectOffset},${y + h} L${x - rectOffset},${y - rectOffset}
                M${x - rectOffset},${y} L${x + w},${y}
                M${x},${y - rectOffset} L${x},${y + h}`;
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const no = rc.path(path, options);
  const windowPane2 = shapeSvg.insert(() => no, ":first-child");
  windowPane2.attr("transform", `translate(${rectOffset / 2}, ${rectOffset / 2})`);
  windowPane2.attr("class", "basic label-container");
  if (cssStyles && node.look !== "handDrawn") {
    windowPane2.selectAll("path").attr("style", cssStyles);
  }
  if (nodeStyles && node.look !== "handDrawn") {
    windowPane2.selectAll("path").attr("style", nodeStyles);
  }
  label.attr(
    "transform",
    `translate(${-(bbox.width / 2) + rectOffset / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + rectOffset / 2 - (bbox.y - (bbox.top ?? 0))})`
  );
  updateNodeBounds(node, windowPane2);
  node.intersect = function(point) {
    const pos = intersect_default.polygon(node, outerPathPoints, point);
    return pos;
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(windowPane, "windowPane");

// src/rendering-util/rendering-elements/shapes/erBox.ts


async function erBox(parent, node) {
  const entityNode = node;
  if (entityNode.alias) {
    node.label = entityNode.alias;
  }
  if (node.look === "handDrawn") {
    const { themeVariables: themeVariables2 } = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig */ .zj)();
    const { background } = themeVariables2;
    const backgroundNode = {
      ...node,
      id: node.id + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${background}`]
    };
    await erBox(parent, backgroundNode);
  }
  const config = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig */ .zj)();
  node.useHtmlLabels = config.htmlLabels;
  let PADDING = config.er?.diagramPadding ?? 10;
  let TEXT_PADDING = config.er?.entityPadding ?? 6;
  const { cssStyles } = node;
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  if (entityNode.attributes.length === 0 && node.label) {
    const options2 = {
      rx: 0,
      ry: 0,
      labelPaddingX: PADDING,
      labelPaddingY: PADDING * 1.5,
      classes: ""
    };
    if ((0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .calculateTextWidth */ .Un)(node.label, config) + options2.labelPaddingX * 2 < config.er.minEntityWidth) {
      node.width = config.er.minEntityWidth;
    }
    const shapeSvg2 = await drawRect(parent, node, options2);
    if (!(0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .evaluate */ ._3)(config.htmlLabels)) {
      const textElement = shapeSvg2.select("text");
      const bbox = textElement.node()?.getBBox();
      textElement.attr("transform", `translate(${-bbox.width / 2}, 0)`);
    }
    return shapeSvg2;
  }
  if (!config.htmlLabels) {
    PADDING *= 1.25;
    TEXT_PADDING *= 1.25;
  }
  let cssClasses = getNodeClasses(node);
  if (!cssClasses) {
    cssClasses = "node default";
  }
  const shapeSvg = parent.insert("g").attr("class", cssClasses).attr("id", node.domId || node.id);
  const nameBBox = await addText(shapeSvg, node.label ?? "", config, 0, 0, ["name"], labelStyles);
  nameBBox.height += TEXT_PADDING;
  let yOffset = 0;
  const yOffsets = [];
  const rows = [];
  let maxTypeWidth = 0;
  let maxNameWidth = 0;
  let maxKeysWidth = 0;
  let maxCommentWidth = 0;
  let keysPresent = true;
  let commentPresent = true;
  for (const attribute of entityNode.attributes) {
    const typeBBox = await addText(
      shapeSvg,
      attribute.type,
      config,
      0,
      yOffset,
      ["attribute-type"],
      labelStyles
    );
    maxTypeWidth = Math.max(maxTypeWidth, typeBBox.width + PADDING);
    const nameBBox2 = await addText(
      shapeSvg,
      attribute.name,
      config,
      0,
      yOffset,
      ["attribute-name"],
      labelStyles
    );
    maxNameWidth = Math.max(maxNameWidth, nameBBox2.width + PADDING);
    const keysBBox = await addText(
      shapeSvg,
      attribute.keys.join(),
      config,
      0,
      yOffset,
      ["attribute-keys"],
      labelStyles
    );
    maxKeysWidth = Math.max(maxKeysWidth, keysBBox.width + PADDING);
    const commentBBox = await addText(
      shapeSvg,
      attribute.comment,
      config,
      0,
      yOffset,
      ["attribute-comment"],
      labelStyles
    );
    maxCommentWidth = Math.max(maxCommentWidth, commentBBox.width + PADDING);
    const rowHeight = Math.max(typeBBox.height, nameBBox2.height, keysBBox.height, commentBBox.height) + TEXT_PADDING;
    rows.push({ yOffset, rowHeight });
    yOffset += rowHeight;
  }
  let totalWidthSections = 4;
  if (maxKeysWidth <= PADDING) {
    keysPresent = false;
    maxKeysWidth = 0;
    totalWidthSections--;
  }
  if (maxCommentWidth <= PADDING) {
    commentPresent = false;
    maxCommentWidth = 0;
    totalWidthSections--;
  }
  const shapeBBox = shapeSvg.node().getBBox();
  if (nameBBox.width + PADDING * 2 - (maxTypeWidth + maxNameWidth + maxKeysWidth + maxCommentWidth) > 0) {
    const difference = nameBBox.width + PADDING * 2 - (maxTypeWidth + maxNameWidth + maxKeysWidth + maxCommentWidth);
    maxTypeWidth += difference / totalWidthSections;
    maxNameWidth += difference / totalWidthSections;
    if (maxKeysWidth > 0) {
      maxKeysWidth += difference / totalWidthSections;
    }
    if (maxCommentWidth > 0) {
      maxCommentWidth += difference / totalWidthSections;
    }
  }
  const maxWidth = maxTypeWidth + maxNameWidth + maxKeysWidth + maxCommentWidth;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  let totalShapeBBoxHeight = 0;
  if (rows.length > 0) {
    totalShapeBBoxHeight = rows.reduce((sum, row) => sum + (row?.rowHeight ?? 0), 0);
  }
  const w = Math.max(shapeBBox.width + PADDING * 2, node?.width || 0, maxWidth);
  const h = Math.max((totalShapeBBoxHeight ?? 0) + nameBBox.height, node?.height || 0);
  const x = -w / 2;
  const y = -h / 2;
  shapeSvg.selectAll("g:not(:first-child)").each((_, i, nodes) => {
    const text2 = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(nodes[i]);
    const transform = text2.attr("transform");
    let translateX = 0;
    let translateY = 0;
    if (transform) {
      const regex = RegExp(/translate\(([^,]+),([^)]+)\)/);
      const translate = regex.exec(transform);
      if (translate) {
        translateX = parseFloat(translate[1]);
        translateY = parseFloat(translate[2]);
        if (text2.attr("class").includes("attribute-name")) {
          translateX += maxTypeWidth;
        } else if (text2.attr("class").includes("attribute-keys")) {
          translateX += maxTypeWidth + maxNameWidth;
        } else if (text2.attr("class").includes("attribute-comment")) {
          translateX += maxTypeWidth + maxNameWidth + maxKeysWidth;
        }
      }
    }
    text2.attr(
      "transform",
      `translate(${x + PADDING / 2 + translateX}, ${translateY + y + nameBBox.height + TEXT_PADDING / 2})`
    );
  });
  shapeSvg.select(".name").attr("transform", "translate(" + -nameBBox.width / 2 + ", " + (y + TEXT_PADDING / 2) + ")");
  const roughRect = rc.rectangle(x, y, w, h, options);
  const rect2 = shapeSvg.insert(() => roughRect, ":first-child").attr("style", cssStyles.join(""));
  const { themeVariables } = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig */ .zj)();
  const { rowEven, rowOdd, nodeBorder } = themeVariables;
  yOffsets.push(0);
  for (const [i, row] of rows.entries()) {
    const contentRowIndex = i + 1;
    const isEven = contentRowIndex % 2 === 0 && row.yOffset !== 0;
    const roughRect2 = rc.rectangle(x, nameBBox.height + y + row?.yOffset, w, row?.rowHeight, {
      ...options,
      fill: isEven ? rowEven : rowOdd,
      stroke: nodeBorder
    });
    shapeSvg.insert(() => roughRect2, "g.label").attr("style", cssStyles.join("")).attr("class", `row-rect-${isEven ? "even" : "odd"}`);
  }
  let roughLine = rc.line(x, nameBBox.height + y, w + x, nameBBox.height + y, options);
  shapeSvg.insert(() => roughLine).attr("class", "divider");
  roughLine = rc.line(maxTypeWidth + x, nameBBox.height + y, maxTypeWidth + x, h + y, options);
  shapeSvg.insert(() => roughLine).attr("class", "divider");
  if (keysPresent) {
    roughLine = rc.line(
      maxTypeWidth + maxNameWidth + x,
      nameBBox.height + y,
      maxTypeWidth + maxNameWidth + x,
      h + y,
      options
    );
    shapeSvg.insert(() => roughLine).attr("class", "divider");
  }
  if (commentPresent) {
    roughLine = rc.line(
      maxTypeWidth + maxNameWidth + maxKeysWidth + x,
      nameBBox.height + y,
      maxTypeWidth + maxNameWidth + maxKeysWidth + x,
      h + y,
      options
    );
    shapeSvg.insert(() => roughLine).attr("class", "divider");
  }
  for (const yOffset2 of yOffsets) {
    roughLine = rc.line(
      x,
      nameBBox.height + y + yOffset2,
      w + x,
      nameBBox.height + y + yOffset2,
      options
    );
    shapeSvg.insert(() => roughLine).attr("class", "divider");
  }
  updateNodeBounds(node, rect2);
  if (nodeStyles && node.look !== "handDrawn") {
    const allStyle = nodeStyles.split(";");
    const strokeStyles = allStyle?.filter((e) => {
      return e.includes("stroke");
    })?.map((s) => `${s}`).join("; ");
    shapeSvg.selectAll("path").attr("style", strokeStyles ?? "");
    shapeSvg.selectAll(".row-rect-even path").attr("style", nodeStyles);
  }
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(erBox, "erBox");
async function addText(shapeSvg, labelText, config, translateX = 0, translateY = 0, classes = [], style = "") {
  const label = shapeSvg.insert("g").attr("class", `label ${classes.join(" ")}`).attr("transform", `translate(${translateX}, ${translateY})`).attr("style", style);
  if (labelText !== (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .parseGenericTypes */ .QO)(labelText)) {
    labelText = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .parseGenericTypes */ .QO)(labelText);
    labelText = labelText.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  }
  const text2 = label.node().appendChild(
    await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .createText */ .GZ)(
      label,
      labelText,
      {
        width: (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .calculateTextWidth */ .Un)(labelText, config) + 100,
        style,
        useHtmlLabels: config.htmlLabels
      },
      config
    )
  );
  if (labelText.includes("&lt;") || labelText.includes("&gt;")) {
    let child = text2.children[0];
    child.textContent = child.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
    while (child.childNodes[0]) {
      child = child.childNodes[0];
      child.textContent = child.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
    }
  }
  let bbox = text2.getBBox();
  if ((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .evaluate */ ._3)(config.htmlLabels)) {
    const div = text2.children[0];
    div.style.textAlign = "start";
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  return bbox;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(addText, "addText");

// src/rendering-util/rendering-elements/shapes/classBox.ts



// src/diagrams/class/shapeUtil.ts

async function textHelper(parent, node, config, useHtmlLabels, GAP = config.class.padding ?? 12) {
  const TEXT_PADDING = !useHtmlLabels ? 3 : 0;
  const shapeSvg = parent.insert("g").attr("class", getNodeClasses(node)).attr("id", node.domId || node.id);
  let annotationGroup = null;
  let labelGroup = null;
  let membersGroup = null;
  let methodsGroup = null;
  let annotationGroupHeight = 0;
  let labelGroupHeight = 0;
  let membersGroupHeight = 0;
  annotationGroup = shapeSvg.insert("g").attr("class", "annotation-group text");
  if (node.annotations.length > 0) {
    const annotation = node.annotations[0];
    await addText2(annotationGroup, { text: `\xAB${annotation}\xBB` }, 0);
    const annotationGroupBBox = annotationGroup.node().getBBox();
    annotationGroupHeight = annotationGroupBBox.height;
  }
  labelGroup = shapeSvg.insert("g").attr("class", "label-group text");
  await addText2(labelGroup, node, 0, ["font-weight: bolder"]);
  const labelGroupBBox = labelGroup.node().getBBox();
  labelGroupHeight = labelGroupBBox.height;
  membersGroup = shapeSvg.insert("g").attr("class", "members-group text");
  let yOffset = 0;
  for (const member of node.members) {
    const height = await addText2(membersGroup, member, yOffset, [member.parseClassifier()]);
    yOffset += height + TEXT_PADDING;
  }
  membersGroupHeight = membersGroup.node().getBBox().height;
  if (membersGroupHeight <= 0) {
    membersGroupHeight = GAP / 2;
  }
  methodsGroup = shapeSvg.insert("g").attr("class", "methods-group text");
  let methodsYOffset = 0;
  for (const method of node.methods) {
    const height = await addText2(methodsGroup, method, methodsYOffset, [method.parseClassifier()]);
    methodsYOffset += height + TEXT_PADDING;
  }
  let bbox = shapeSvg.node().getBBox();
  if (annotationGroup !== null) {
    const annotationGroupBBox = annotationGroup.node().getBBox();
    annotationGroup.attr("transform", `translate(${-annotationGroupBBox.width / 2})`);
  }
  labelGroup.attr("transform", `translate(${-labelGroupBBox.width / 2}, ${annotationGroupHeight})`);
  bbox = shapeSvg.node().getBBox();
  membersGroup.attr(
    "transform",
    `translate(${0}, ${annotationGroupHeight + labelGroupHeight + GAP * 2})`
  );
  bbox = shapeSvg.node().getBBox();
  methodsGroup.attr(
    "transform",
    `translate(${0}, ${annotationGroupHeight + labelGroupHeight + (membersGroupHeight ? membersGroupHeight + GAP * 4 : GAP * 2)})`
  );
  bbox = shapeSvg.node().getBBox();
  return { shapeSvg, bbox };
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(textHelper, "textHelper");
async function addText2(parentGroup, node, yOffset, styles = []) {
  const textEl = parentGroup.insert("g").attr("class", "label").attr("style", styles.join("; "));
  const config = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig */ .zj)();
  let useHtmlLabels = "useHtmlLabels" in node ? node.useHtmlLabels : (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .evaluate */ ._3)(config.htmlLabels) ?? true;
  let textContent = "";
  if ("text" in node) {
    textContent = node.text;
  } else {
    textContent = node.label;
  }
  if (!useHtmlLabels && textContent.startsWith("\\")) {
    textContent = textContent.substring(1);
  }
  if ((0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .hasKatex */ .Wi)(textContent)) {
    useHtmlLabels = true;
  }
  const text2 = await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .createText */ .GZ)(
    textEl,
    (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .sanitizeText2 */ .oB)((0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .decodeEntities */ .Sm)(textContent)),
    {
      width: (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .calculateTextWidth */ .Un)(textContent, config) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels
    },
    config
  );
  let bbox;
  let numberOfLines = 1;
  if (!useHtmlLabels) {
    if (styles.includes("font-weight: bolder")) {
      (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2).selectAll("tspan").attr("font-weight", "");
    }
    numberOfLines = text2.children.length;
    const textChild = text2.children[0];
    if (text2.textContent === "" || text2.textContent.includes("&gt")) {
      textChild.textContent = textContent[0] + textContent.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim();
      const preserveSpace = textContent[1] === " ";
      if (preserveSpace) {
        textChild.textContent = textChild.textContent[0] + " " + textChild.textContent.substring(1);
      }
    }
    if (textChild.textContent === "undefined") {
      textChild.textContent = "";
    }
    bbox = text2.getBBox();
  } else {
    const div = text2.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2);
    numberOfLines = div.innerHTML.split("<br>").length;
    if (div.innerHTML.includes("</math>")) {
      numberOfLines += div.innerHTML.split("<mrow>").length - 1;
    }
    const images = div.getElementsByTagName("img");
    if (images) {
      const noImgText = textContent.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...images].map(
          (img) => new Promise((res) => {
            function setupImage() {
              img.style.display = "flex";
              img.style.flexDirection = "column";
              if (noImgText) {
                const bodyFontSize = config.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize;
                const enlargingFactor = 5;
                const width = parseInt(bodyFontSize, 10) * enlargingFactor + "px";
                img.style.minWidth = width;
                img.style.maxWidth = width;
              } else {
                img.style.width = "100%";
              }
              res(img);
            }
            (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(setupImage, "setupImage");
            setTimeout(() => {
              if (img.complete) {
                setupImage();
              }
            });
            img.addEventListener("error", setupImage);
            img.addEventListener("load", setupImage);
          })
        )
      );
    }
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  textEl.attr("transform", "translate(0," + (-bbox.height / (2 * numberOfLines) + yOffset) + ")");
  return bbox.height;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(addText2, "addText");

// src/rendering-util/rendering-elements/shapes/classBox.ts
async function classBox(parent, node) {
  const config = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)();
  const PADDING = config.class.padding ?? 12;
  const GAP = PADDING;
  const useHtmlLabels = node.useHtmlLabels ?? (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .evaluate */ ._3)(config.htmlLabels) ?? true;
  const classNode = node;
  classNode.annotations = classNode.annotations ?? [];
  classNode.members = classNode.members ?? [];
  classNode.methods = classNode.methods ?? [];
  const { shapeSvg, bbox } = await textHelper(parent, node, config, useHtmlLabels, GAP);
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  node.cssStyles = classNode.styles || "";
  const styles = classNode.styles?.join(";") || nodeStyles || "";
  if (!node.cssStyles) {
    node.cssStyles = styles.replaceAll("!important", "").split(";");
  }
  const renderExtraBox = classNode.members.length === 0 && classNode.methods.length === 0 && !config.class?.hideEmptyMembersBox;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const w = bbox.width;
  let h = bbox.height;
  if (classNode.members.length === 0 && classNode.methods.length === 0) {
    h += GAP;
  } else if (classNode.members.length > 0 && classNode.methods.length === 0) {
    h += GAP * 2;
  }
  const x = -w / 2;
  const y = -h / 2;
  const roughRect = rc.rectangle(
    x - PADDING,
    y - PADDING - (renderExtraBox ? PADDING : classNode.members.length === 0 && classNode.methods.length === 0 ? -PADDING / 2 : 0),
    w + 2 * PADDING,
    h + 2 * PADDING + (renderExtraBox ? PADDING * 2 : classNode.members.length === 0 && classNode.methods.length === 0 ? -PADDING : 0),
    options
  );
  const rect2 = shapeSvg.insert(() => roughRect, ":first-child");
  rect2.attr("class", "basic label-container");
  const rectBBox = rect2.node().getBBox();
  shapeSvg.selectAll(".text").each((_, i, nodes) => {
    const text2 = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(nodes[i]);
    const transform = text2.attr("transform");
    let translateY = 0;
    if (transform) {
      const regex = RegExp(/translate\(([^,]+),([^)]+)\)/);
      const translate = regex.exec(transform);
      if (translate) {
        translateY = parseFloat(translate[2]);
      }
    }
    let newTranslateY = translateY + y + PADDING - (renderExtraBox ? PADDING : classNode.members.length === 0 && classNode.methods.length === 0 ? -PADDING / 2 : 0);
    if (!useHtmlLabels) {
      newTranslateY -= 4;
    }
    let newTranslateX = x;
    if (text2.attr("class").includes("label-group") || text2.attr("class").includes("annotation-group")) {
      newTranslateX = -text2.node()?.getBBox().width / 2 || 0;
      shapeSvg.selectAll("text").each(function(_2, i2, nodes2) {
        if (window.getComputedStyle(nodes2[i2]).textAnchor === "middle") {
          newTranslateX = 0;
        }
      });
    }
    text2.attr("transform", `translate(${newTranslateX}, ${newTranslateY})`);
  });
  const annotationGroupHeight = shapeSvg.select(".annotation-group").node().getBBox().height - (renderExtraBox ? PADDING / 2 : 0) || 0;
  const labelGroupHeight = shapeSvg.select(".label-group").node().getBBox().height - (renderExtraBox ? PADDING / 2 : 0) || 0;
  const membersGroupHeight = shapeSvg.select(".members-group").node().getBBox().height - (renderExtraBox ? PADDING / 2 : 0) || 0;
  if (classNode.members.length > 0 || classNode.methods.length > 0 || renderExtraBox) {
    const roughLine = rc.line(
      rectBBox.x,
      annotationGroupHeight + labelGroupHeight + y + PADDING,
      rectBBox.x + rectBBox.width,
      annotationGroupHeight + labelGroupHeight + y + PADDING,
      options
    );
    const line = shapeSvg.insert(() => roughLine);
    line.attr("class", "divider").attr("style", styles);
  }
  if (renderExtraBox || classNode.members.length > 0 || classNode.methods.length > 0) {
    const roughLine = rc.line(
      rectBBox.x,
      annotationGroupHeight + labelGroupHeight + membersGroupHeight + y + GAP * 2 + PADDING,
      rectBBox.x + rectBBox.width,
      annotationGroupHeight + labelGroupHeight + membersGroupHeight + y + PADDING + GAP * 2,
      options
    );
    const line = shapeSvg.insert(() => roughLine);
    line.attr("class", "divider").attr("style", styles);
  }
  if (classNode.look !== "handDrawn") {
    shapeSvg.selectAll("path").attr("style", styles);
  }
  rect2.select(":nth-child(2)").attr("style", styles);
  shapeSvg.selectAll(".divider").select("path").attr("style", styles);
  if (node.labelStyle) {
    shapeSvg.selectAll("span").attr("style", node.labelStyle);
  } else {
    shapeSvg.selectAll("span").attr("style", styles);
  }
  if (!useHtmlLabels) {
    const colorRegex = RegExp(/color\s*:\s*([^;]*)/);
    const match = colorRegex.exec(styles);
    if (match) {
      const colorStyle = match[0].replace("color", "fill");
      shapeSvg.selectAll("tspan").attr("style", colorStyle);
    } else if (labelStyles) {
      const match2 = colorRegex.exec(labelStyles);
      if (match2) {
        const colorStyle = match2[0].replace("color", "fill");
        shapeSvg.selectAll("tspan").attr("style", colorStyle);
      }
    }
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(classBox, "classBox");

// src/rendering-util/rendering-elements/shapes/requirementBox.ts


async function requirementBox(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const requirementNode = node;
  const elementNode = node;
  const padding = 20;
  const gap = 20;
  const isRequirementNode = "verifyMethod" in node;
  const classes = getNodeClasses(node);
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId ?? node.id);
  let typeHeight;
  if (isRequirementNode) {
    typeHeight = await addText3(
      shapeSvg,
      `&lt;&lt;${requirementNode.type}&gt;&gt;`,
      0,
      node.labelStyle
    );
  } else {
    typeHeight = await addText3(shapeSvg, "&lt;&lt;Element&gt;&gt;", 0, node.labelStyle);
  }
  let accumulativeHeight = typeHeight;
  const nameHeight = await addText3(
    shapeSvg,
    requirementNode.name,
    accumulativeHeight,
    node.labelStyle + "; font-weight: bold;"
  );
  accumulativeHeight += nameHeight + gap;
  if (isRequirementNode) {
    const idHeight = await addText3(
      shapeSvg,
      `${requirementNode.requirementId ? `ID: ${requirementNode.requirementId}` : ""}`,
      accumulativeHeight,
      node.labelStyle
    );
    accumulativeHeight += idHeight;
    const textHeight = await addText3(
      shapeSvg,
      `${requirementNode.text ? `Text: ${requirementNode.text}` : ""}`,
      accumulativeHeight,
      node.labelStyle
    );
    accumulativeHeight += textHeight;
    const riskHeight = await addText3(
      shapeSvg,
      `${requirementNode.risk ? `Risk: ${requirementNode.risk}` : ""}`,
      accumulativeHeight,
      node.labelStyle
    );
    accumulativeHeight += riskHeight;
    await addText3(
      shapeSvg,
      `${requirementNode.verifyMethod ? `Verification: ${requirementNode.verifyMethod}` : ""}`,
      accumulativeHeight,
      node.labelStyle
    );
  } else {
    const typeHeight2 = await addText3(
      shapeSvg,
      `${elementNode.type ? `Type: ${elementNode.type}` : ""}`,
      accumulativeHeight,
      node.labelStyle
    );
    accumulativeHeight += typeHeight2;
    await addText3(
      shapeSvg,
      `${elementNode.docRef ? `Doc Ref: ${elementNode.docRef}` : ""}`,
      accumulativeHeight,
      node.labelStyle
    );
  }
  const totalWidth = (shapeSvg.node()?.getBBox().width ?? 200) + padding;
  const totalHeight = (shapeSvg.node()?.getBBox().height ?? 200) + padding;
  const x = -totalWidth / 2;
  const y = -totalHeight / 2;
  const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
  const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
  if (node.look !== "handDrawn") {
    options.roughness = 0;
    options.fillStyle = "solid";
  }
  const roughRect = rc.rectangle(x, y, totalWidth, totalHeight, options);
  const rect2 = shapeSvg.insert(() => roughRect, ":first-child");
  rect2.attr("class", "basic label-container").attr("style", nodeStyles);
  shapeSvg.selectAll(".label").each((_, i, nodes) => {
    const text2 = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(nodes[i]);
    const transform = text2.attr("transform");
    let translateX = 0;
    let translateY = 0;
    if (transform) {
      const regex = RegExp(/translate\(([^,]+),([^)]+)\)/);
      const translate = regex.exec(transform);
      if (translate) {
        translateX = parseFloat(translate[1]);
        translateY = parseFloat(translate[2]);
      }
    }
    const newTranslateY = translateY - totalHeight / 2;
    let newTranslateX = x + padding / 2;
    if (i === 0 || i === 1) {
      newTranslateX = translateX;
    }
    text2.attr("transform", `translate(${newTranslateX}, ${newTranslateY + padding})`);
  });
  if (accumulativeHeight > typeHeight + nameHeight + gap) {
    const roughLine = rc.line(
      x,
      y + typeHeight + nameHeight + gap,
      x + totalWidth,
      y + typeHeight + nameHeight + gap,
      options
    );
    const dividerLine = shapeSvg.insert(() => roughLine);
    dividerLine.attr("style", nodeStyles);
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(requirementBox, "requirementBox");
async function addText3(parentGroup, inputText, yOffset, style = "") {
  if (inputText === "") {
    return 0;
  }
  const textEl = parentGroup.insert("g").attr("class", "label").attr("style", style);
  const config = (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getConfig2 */ .D7)();
  const useHtmlLabels = config.htmlLabels ?? true;
  const text2 = await (0,_chunk_PU5JKC2W_mjs__WEBPACK_IMPORTED_MODULE_2__/* .createText */ .GZ)(
    textEl,
    (0,_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_4__/* .sanitizeText2 */ .oB)((0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .decodeEntities */ .Sm)(inputText)),
    {
      width: (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .calculateTextWidth */ .Un)(inputText, config) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels,
      style
    },
    config
  );
  let bbox;
  if (!useHtmlLabels) {
    const textChild = text2.children[0];
    for (const child of textChild.children) {
      child.textContent = child.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<");
      if (style) {
        child.setAttribute("style", style);
      }
    }
    bbox = text2.getBBox();
    bbox.height += 6;
  } else {
    const div = text2.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_6__/* .select */ .Ltv)(text2);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  textEl.attr("transform", `translate(${-bbox.width / 2},${-bbox.height / 2 + yOffset})`);
  return bbox.height;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(addText3, "addText");

// src/rendering-util/rendering-elements/shapes/kanbanItem.ts

var colorFromPriority = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((priority) => {
  switch (priority) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    // no stroke
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function kanbanItem(parent, kanbanNode, { config }) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(kanbanNode);
  kanbanNode.labelStyle = labelStyles || "";
  const labelPaddingX = 10;
  const orgWidth = kanbanNode.width;
  kanbanNode.width = (kanbanNode.width ?? 200) - 10;
  const {
    shapeSvg,
    bbox,
    label: labelElTitle
  } = await labelHelper(parent, kanbanNode, getNodeClasses(kanbanNode));
  const padding = kanbanNode.padding || 10;
  let ticketUrl = "";
  let link;
  if ("ticket" in kanbanNode && kanbanNode.ticket && config?.kanban?.ticketBaseUrl) {
    ticketUrl = config?.kanban?.ticketBaseUrl.replace("#TICKET#", kanbanNode.ticket);
    link = shapeSvg.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", ticketUrl).attr("target", "_blank");
  }
  const options = {
    useHtmlLabels: kanbanNode.useHtmlLabels,
    labelStyle: kanbanNode.labelStyle || "",
    width: kanbanNode.width,
    img: kanbanNode.img,
    padding: kanbanNode.padding || 8,
    centerLabel: false
  };
  let labelEl, bbox2;
  if (link) {
    ({ label: labelEl, bbox: bbox2 } = await insertLabel(
      link,
      "ticket" in kanbanNode && kanbanNode.ticket || "",
      options
    ));
  } else {
    ({ label: labelEl, bbox: bbox2 } = await insertLabel(
      shapeSvg,
      "ticket" in kanbanNode && kanbanNode.ticket || "",
      options
    ));
  }
  const { label: labelElAssigned, bbox: bboxAssigned } = await insertLabel(
    shapeSvg,
    "assigned" in kanbanNode && kanbanNode.assigned || "",
    options
  );
  kanbanNode.width = orgWidth;
  const labelPaddingY = 10;
  const totalWidth = kanbanNode?.width || 0;
  const heightAdj = Math.max(bbox2.height, bboxAssigned.height) / 2;
  const totalHeight = Math.max(bbox.height + labelPaddingY * 2, kanbanNode?.height || 0) + heightAdj;
  const x = -totalWidth / 2;
  const y = -totalHeight / 2;
  labelElTitle.attr(
    "transform",
    "translate(" + (padding - totalWidth / 2) + ", " + (-heightAdj - bbox.height / 2) + ")"
  );
  labelEl.attr(
    "transform",
    "translate(" + (padding - totalWidth / 2) + ", " + (-heightAdj + bbox.height / 2) + ")"
  );
  labelElAssigned.attr(
    "transform",
    "translate(" + (padding + totalWidth / 2 - bboxAssigned.width - 2 * labelPaddingX) + ", " + (-heightAdj + bbox.height / 2) + ")"
  );
  let rect2;
  const { rx, ry } = kanbanNode;
  const { cssStyles } = kanbanNode;
  if (kanbanNode.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options2 = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(kanbanNode, {});
    const roughNode = rx || ry ? rc.path(createRoundedRectPathD(x, y, totalWidth, totalHeight, rx || 0), options2) : rc.rectangle(x, y, totalWidth, totalHeight, options2);
    rect2 = shapeSvg.insert(() => roughNode, ":first-child");
    rect2.attr("class", "basic label-container").attr("style", cssStyles ? cssStyles : null);
  } else {
    rect2 = shapeSvg.insert("rect", ":first-child");
    rect2.attr("class", "basic label-container __APA__").attr("style", nodeStyles).attr("rx", rx ?? 5).attr("ry", ry ?? 5).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
    const priority = "priority" in kanbanNode && kanbanNode.priority;
    if (priority) {
      const line = shapeSvg.append("line");
      const lineX = x + 2;
      const y1 = y + Math.floor((rx ?? 0) / 2);
      const y2 = y + totalHeight - Math.floor((rx ?? 0) / 2);
      line.attr("x1", lineX).attr("y1", y1).attr("x2", lineX).attr("y2", y2).attr("stroke-width", "4").attr("stroke", colorFromPriority(priority));
    }
  }
  updateNodeBounds(kanbanNode, rect2);
  kanbanNode.height = totalHeight;
  kanbanNode.intersect = function(point) {
    return intersect_default.rect(kanbanNode, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(kanbanItem, "kanbanItem");

// src/rendering-util/rendering-elements/shapes/bang.ts

async function bang(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, halfPadding, label } = await labelHelper(
    parent,
    node,
    getNodeClasses(node)
  );
  const w = bbox.width + 10 * halfPadding;
  const h = bbox.height + 8 * halfPadding;
  const r = 0.15 * w;
  const { cssStyles } = node;
  const minWidth = bbox.width + 20;
  const minHeight = bbox.height + 20;
  const effectiveWidth = Math.max(w, minWidth);
  const effectiveHeight = Math.max(h, minHeight);
  label.attr("transform", `translate(${-bbox.width / 2}, ${-bbox.height / 2})`);
  let bangElem;
  const path = `M0 0 
    a${r},${r} 1 0,0 ${effectiveWidth * 0.25},${-1 * effectiveHeight * 0.1}
    a${r},${r} 1 0,0 ${effectiveWidth * 0.25},${0}
    a${r},${r} 1 0,0 ${effectiveWidth * 0.25},${0}
    a${r},${r} 1 0,0 ${effectiveWidth * 0.25},${effectiveHeight * 0.1}

    a${r},${r} 1 0,0 ${effectiveWidth * 0.15},${effectiveHeight * 0.33}
    a${r * 0.8},${r * 0.8} 1 0,0 0,${effectiveHeight * 0.34}
    a${r},${r} 1 0,0 ${-1 * effectiveWidth * 0.15},${effectiveHeight * 0.33}

    a${r},${r} 1 0,0 ${-1 * effectiveWidth * 0.25},${effectiveHeight * 0.15}
    a${r},${r} 1 0,0 ${-1 * effectiveWidth * 0.25},0
    a${r},${r} 1 0,0 ${-1 * effectiveWidth * 0.25},0
    a${r},${r} 1 0,0 ${-1 * effectiveWidth * 0.25},${-1 * effectiveHeight * 0.15}

    a${r},${r} 1 0,0 ${-1 * effectiveWidth * 0.1},${-1 * effectiveHeight * 0.33}
    a${r * 0.8},${r * 0.8} 1 0,0 0,${-1 * effectiveHeight * 0.34}
    a${r},${r} 1 0,0 ${effectiveWidth * 0.1},${-1 * effectiveHeight * 0.33}
  H0 V0 Z`;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const roughNode = rc.path(path, options);
    bangElem = shapeSvg.insert(() => roughNode, ":first-child");
    bangElem.attr("class", "basic label-container").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles));
  } else {
    bangElem = shapeSvg.insert("path", ":first-child").attr("class", "basic label-container").attr("style", nodeStyles).attr("d", path);
  }
  bangElem.attr("transform", `translate(${-effectiveWidth / 2}, ${-effectiveHeight / 2})`);
  updateNodeBounds(node, bangElem);
  node.calcIntersect = function(bounds, point) {
    return intersect_default.rect(bounds, point);
  };
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Bang intersect", node, point);
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(bang, "bang");

// src/rendering-util/rendering-elements/shapes/cloud.ts

async function cloud(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, halfPadding, label } = await labelHelper(
    parent,
    node,
    getNodeClasses(node)
  );
  const w = bbox.width + 2 * halfPadding;
  const h = bbox.height + 2 * halfPadding;
  const r1 = 0.15 * w;
  const r2 = 0.25 * w;
  const r3 = 0.35 * w;
  const r4 = 0.2 * w;
  const { cssStyles } = node;
  let cloudElem;
  const path = `M0 0 
    a${r1},${r1} 0 0,1 ${w * 0.25},${-1 * w * 0.1}
    a${r3},${r3} 1 0,1 ${w * 0.4},${-1 * w * 0.1}
    a${r2},${r2} 1 0,1 ${w * 0.35},${w * 0.2}

    a${r1},${r1} 1 0,1 ${w * 0.15},${h * 0.35}
    a${r4},${r4} 1 0,1 ${-1 * w * 0.15},${h * 0.65}

    a${r2},${r1} 1 0,1 ${-1 * w * 0.25},${w * 0.15}
    a${r3},${r3} 1 0,1 ${-1 * w * 0.5},0
    a${r1},${r1} 1 0,1 ${-1 * w * 0.25},${-1 * w * 0.15}

    a${r1},${r1} 1 0,1 ${-1 * w * 0.1},${-1 * h * 0.35}
    a${r4},${r4} 1 0,1 ${w * 0.1},${-1 * h * 0.65}
  H0 V0 Z`;
  if (node.look === "handDrawn") {
    const rc = roughjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.svg(shapeSvg);
    const options = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .userNodeOverrides */ .Fr)(node, {});
    const roughNode = rc.path(path, options);
    cloudElem = shapeSvg.insert(() => roughNode, ":first-child");
    cloudElem.attr("class", "basic label-container").attr("style", (0,_chunk_GEFDOKGD_mjs__WEBPACK_IMPORTED_MODULE_3__/* .handleUndefinedAttr */ .KL)(cssStyles));
  } else {
    cloudElem = shapeSvg.insert("path", ":first-child").attr("class", "basic label-container").attr("style", nodeStyles).attr("d", path);
  }
  label.attr("transform", `translate(${-bbox.width / 2}, ${-bbox.height / 2})`);
  cloudElem.attr("transform", `translate(${-w / 2}, ${-h / 2})`);
  updateNodeBounds(node, cloudElem);
  node.calcIntersect = function(bounds, point) {
    return intersect_default.rect(bounds, point);
  };
  node.intersect = function(point) {
    _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.info("Cloud intersect", node, point);
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(cloud, "cloud");

// src/rendering-util/rendering-elements/shapes/defaultMindmapNode.ts
async function defaultMindmapNode(parent, node) {
  const { labelStyles, nodeStyles } = (0,_chunk_PQ6SQG4A_mjs__WEBPACK_IMPORTED_MODULE_1__/* .styles2String */ .GX)(node);
  node.labelStyle = labelStyles;
  const { shapeSvg, bbox, halfPadding, label } = await labelHelper(
    parent,
    node,
    getNodeClasses(node)
  );
  const w = bbox.width + 8 * halfPadding;
  const h = bbox.height + 2 * halfPadding;
  const rd = 5;
  const rectPath = `
    M${-w / 2} ${h / 2 - rd}
    v${-h + 2 * rd}
    q0,-${rd} ${rd},-${rd}
    h${w - 2 * rd}
    q${rd},0 ${rd},${rd}
    v${h - 2 * rd}
    q0,${rd} -${rd},${rd}
    h${-w + 2 * rd}
    q-${rd},0 -${rd},-${rd}
    Z
  `;
  const bg = shapeSvg.append("path").attr("id", "node-" + node.id).attr("class", "node-bkg node-" + node.type).attr("style", nodeStyles).attr("d", rectPath);
  shapeSvg.append("line").attr("class", "node-line-").attr("x1", -w / 2).attr("y1", h / 2).attr("x2", w / 2).attr("y2", h / 2);
  label.attr("transform", `translate(${-bbox.width / 2}, ${-bbox.height / 2})`);
  shapeSvg.append(() => label.node());
  updateNodeBounds(node, bg);
  node.calcIntersect = function(bounds, point) {
    return intersect_default.rect(bounds, point);
  };
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(defaultMindmapNode, "defaultMindmapNode");

// src/rendering-util/rendering-elements/shapes/mindmapCircle.ts
async function mindmapCircle(parent, node) {
  const options = {
    padding: node.padding ?? 0
  };
  return circle(parent, node, options);
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(mindmapCircle, "mindmapCircle");

// src/rendering-util/rendering-elements/shapes.ts
var shapesDefs = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: squareRect2
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: roundedRect
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: stadium
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: subroutine
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: cylinder
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: circle
  },
  {
    semanticName: "Bang",
    name: "Bang",
    shortName: "bang",
    description: "Bang",
    aliases: ["bang"],
    handler: bang
  },
  {
    semanticName: "Cloud",
    name: "Cloud",
    shortName: "cloud",
    description: "cloud",
    aliases: ["cloud"],
    handler: cloud
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: question
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: hexagon
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: lean_right
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: lean_left
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: trapezoid
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: inv_trapezoid
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: doublecircle
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: text
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: card
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: shadedProcess
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: stateStart
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: stateEnd
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: forkJoin
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: hourglass
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: curlyBraceLeft
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: curlyBraceRight
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: curlyBraces
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: lightningBolt
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: waveEdgedRectangle
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: halfRoundedRectangle
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: tiltedCylinder
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: linedCylinder
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: curvedTrapezoid
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: dividedRectangle
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: triangle
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: windowPane
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: filledCircle
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: trapezoidalPentagon
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: flippedTriangle
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: slopedRect
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: multiWaveEdgedRectangle
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: multiRect
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: bowTieRect
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: crossedCircle
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: taggedWaveEdgedRectangle
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: taggedRect
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: waveRectangle
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: rect_left_inv_arrow
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: linedWaveEdgedRect
  }
];
var generateShapeMap = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(() => {
  const undocumentedShapes = {
    // States
    state,
    choice,
    note,
    // Rectangles
    rectWithTitle,
    labelRect,
    // Icons
    iconSquare,
    iconCircle,
    icon,
    iconRounded,
    imageSquare,
    anchor,
    // Kanban diagram
    kanbanItem,
    //Mindmap diagram
    mindmapCircle,
    defaultMindmapNode,
    // class diagram
    classBox,
    // er diagram
    erBox,
    // Requirement diagram
    requirementBox
  };
  const entries = [
    ...Object.entries(undocumentedShapes),
    ...shapesDefs.flatMap((shape) => {
      const aliases = [
        shape.shortName,
        ..."aliases" in shape ? shape.aliases : [],
        ..."internalAliases" in shape ? shape.internalAliases : []
      ];
      return aliases.map((alias) => [alias, shape.handler]);
    })
  ];
  return Object.fromEntries(entries);
}, "generateShapeMap");
var shapes2 = generateShapeMap();
function isValidShape(shape) {
  return shape in shapes2;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(isValidShape, "isValidShape");

// src/rendering-util/rendering-elements/nodes.ts
var nodeElems = /* @__PURE__ */ new Map();
async function insertNode(elem, node, renderOptions) {
  let newEl;
  let el;
  if (node.shape === "rect") {
    if (node.rx && node.ry) {
      node.shape = "roundedRect";
    } else {
      node.shape = "squareRect";
    }
  }
  const shapeHandler = node.shape ? shapes2[node.shape] : void 0;
  if (!shapeHandler) {
    throw new Error(`No such shape: ${node.shape}. Please check your syntax.`);
  }
  if (node.link) {
    let target;
    if (renderOptions.config.securityLevel === "sandbox") {
      target = "_top";
    } else if (node.linkTarget) {
      target = node.linkTarget || "_blank";
    }
    newEl = elem.insert("svg:a").attr("xlink:href", node.link).attr("target", target ?? null);
    el = await shapeHandler(newEl, node, renderOptions);
  } else {
    el = await shapeHandler(elem, node, renderOptions);
    newEl = el;
  }
  if (node.tooltip) {
    el.attr("title", node.tooltip);
  }
  nodeElems.set(node.id, newEl);
  if (node.haveCallback) {
    newEl.attr("class", newEl.attr("class") + " clickable");
  }
  return newEl;
}
(0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(insertNode, "insertNode");
var setNodeElem = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((elem, node) => {
  nodeElems.set(node.id, elem);
}, "setNodeElem");
var clear2 = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)(() => {
  nodeElems.clear();
}, "clear");
var positionNode = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .__name */ .K2)((node) => {
  const el = nodeElems.get(node.id);
  _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_5__/* .log */ .Rm.trace(
    "Transforming node",
    node.diff,
    node,
    "translate(" + (node.x - node.width / 2 - 5) + ", " + node.width / 2 + ")"
  );
  const padding = 8;
  const diff = node.diff || 0;
  if (node.clusterNode) {
    el.attr(
      "transform",
      "translate(" + (node.x + diff - node.width / 2) + ", " + (node.y - node.height / 2 - padding) + ")"
    );
  } else {
    el.attr("transform", "translate(" + node.x + ", " + node.y + ")");
  }
  return diff;
}, "positionNode");




/***/ })

}]);