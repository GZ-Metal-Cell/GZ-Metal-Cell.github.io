"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4892],{

/***/ 45191:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CP: () => (/* binding */ drawEmbeddedImage),
/* harmony export */   Ck: () => (/* binding */ createTooltip),
/* harmony export */   HT: () => (/* binding */ getTextObj),
/* harmony export */   PB: () => (/* binding */ getNoteRect),
/* harmony export */   aC: () => (/* binding */ drawImage),
/* harmony export */   lC: () => (/* binding */ drawBackgroundRect),
/* harmony export */   m: () => (/* binding */ drawText),
/* harmony export */   tk: () => (/* binding */ drawRect)
/* harmony export */ });
/* harmony import */ var _chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78005);
/* harmony import */ var _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32165);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84485);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33948);



// src/diagrams/common/svgDrawCommon.ts


var drawRect = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */ .K2)((element, rectData) => {
  const rectElement = element.append("rect");
  rectElement.attr("x", rectData.x);
  rectElement.attr("y", rectData.y);
  rectElement.attr("fill", rectData.fill);
  rectElement.attr("stroke", rectData.stroke);
  rectElement.attr("width", rectData.width);
  rectElement.attr("height", rectData.height);
  if (rectData.name) {
    rectElement.attr("name", rectData.name);
  }
  if (rectData.rx) {
    rectElement.attr("rx", rectData.rx);
  }
  if (rectData.ry) {
    rectElement.attr("ry", rectData.ry);
  }
  if (rectData.attrs !== void 0) {
    for (const attrKey in rectData.attrs) {
      rectElement.attr(attrKey, rectData.attrs[attrKey]);
    }
  }
  if (rectData.class) {
    rectElement.attr("class", rectData.class);
  }
  return rectElement;
}, "drawRect");
var drawBackgroundRect = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */ .K2)((element, bounds) => {
  const rectData = {
    x: bounds.startx,
    y: bounds.starty,
    width: bounds.stopx - bounds.startx,
    height: bounds.stopy - bounds.starty,
    fill: bounds.fill,
    stroke: bounds.stroke,
    class: "rect"
  };
  const rectElement = drawRect(element, rectData);
  rectElement.lower();
}, "drawBackgroundRect");
var drawText = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */ .K2)((element, textData) => {
  const nText = textData.text.replace(_chunk_7R4GIKGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .lineBreakRegex */ .H1, " ");
  const textElem = element.append("text");
  textElem.attr("x", textData.x);
  textElem.attr("y", textData.y);
  textElem.attr("class", "legend");
  textElem.style("text-anchor", textData.anchor);
  if (textData.class) {
    textElem.attr("class", textData.class);
  }
  const tspan = textElem.append("tspan");
  tspan.attr("x", textData.x + textData.textMargin * 2);
  tspan.text(nText);
  return textElem;
}, "drawText");
var drawImage = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */ .K2)((elem, x, y, link) => {
  const imageElement = elem.append("image");
  imageElement.attr("x", x);
  imageElement.attr("y", y);
  const sanitizedLink = (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_2__/* .sanitizeUrl */ .J)(link);
  imageElement.attr("xlink:href", sanitizedLink);
}, "drawImage");
var drawEmbeddedImage = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */ .K2)((element, x, y, link) => {
  const imageElement = element.append("use");
  imageElement.attr("x", x);
  imageElement.attr("y", y);
  const sanitizedLink = (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_2__/* .sanitizeUrl */ .J)(link);
  imageElement.attr("xlink:href", `#${sanitizedLink}`);
}, "drawEmbeddedImage");
var getNoteRect = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */ .K2)(() => {
  const noteRectData = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "#EDF2AE",
    stroke: "#666",
    anchor: "start",
    rx: 0,
    ry: 0
  };
  return noteRectData;
}, "getNoteRect");
var getTextObj = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */ .K2)(() => {
  const testObject = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    "text-anchor": "start",
    style: "#666",
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true
  };
  return testObject;
}, "getTextObj");
var createTooltip = /* @__PURE__ */ (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */ .K2)(() => {
  let tooltipElem = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(".mermaidTooltip");
  if (tooltipElem.empty()) {
    tooltipElem = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0).style("position", "absolute").style("text-align", "center").style("max-width", "200px").style("padding", "2px").style("font-size", "12px").style("background", "#ffffde").style("border", "1px solid #333").style("border-radius", "2px").style("pointer-events", "none").style("z-index", "100");
  }
  return tooltipElem;
}, "createTooltip");




/***/ }),

/***/ 87722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ ImperativeState)
/* harmony export */ });
/* harmony import */ var _chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32165);


// src/utils/imperativeState.ts
var ImperativeState = class {
  /**
   * @param init - Function that creates the default state.
   */
  constructor(init) {
    this.init = init;
    this.records = this.init();
  }
  static {
    (0,_chunk_AGHRB4JF_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "ImperativeState");
  }
  reset() {
    this.records = this.init();
  }
};




/***/ })

}]);