"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8863],{

/***/ 6300:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ createPacketServices)
/* harmony export */ });
/* unused harmony export PacketModule */
/* harmony import */ var _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76086);


// src/language/packet/tokenBuilder.ts
var PacketTokenBuilder = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidTokenBuilder */ .mR {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "PacketTokenBuilder");
  }
  constructor() {
    super(["packet"]);
  }
};

// src/language/packet/module.ts
var PacketModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new PacketTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .CommonValueConverter */ .Tm(), "ValueConverter")
  }
};
function createPacketServices(context = _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EmptyFileSystem */ .DD) {
  const shared = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultSharedCoreModule */ .uM)(context),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .MermaidGeneratedSharedModule */ .sr
  );
  const Packet = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultCoreModule */ .tG)({ shared }),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .PacketGrammarGeneratedModule */ .p5,
    PacketModule
  );
  shared.ServiceRegistry.register(Packet);
  return { shared, Packet };
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(createPacketServices, "createPacketServices");




/***/ }),

/***/ 19688:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createPieServices)
/* harmony export */ });
/* unused harmony export PieModule */
/* harmony import */ var _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76086);


// src/language/pie/tokenBuilder.ts
var PieTokenBuilder = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidTokenBuilder */ .mR {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "PieTokenBuilder");
  }
  constructor() {
    super(["pie", "showData"]);
  }
};

// src/language/pie/valueConverter.ts
var PieValueConverter = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidValueConverter */ .dg {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "PieValueConverter");
  }
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name !== "PIE_SECTION_LABEL") {
      return void 0;
    }
    return input.replace(/"/g, "").trim();
  }
};

// src/language/pie/module.ts
var PieModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new PieTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new PieValueConverter(), "ValueConverter")
  }
};
function createPieServices(context = _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EmptyFileSystem */ .DD) {
  const shared = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultSharedCoreModule */ .uM)(context),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .MermaidGeneratedSharedModule */ .sr
  );
  const Pie = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultCoreModule */ .tG)({ shared }),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .PieGrammarGeneratedModule */ .D_,
    PieModule
  );
  shared.ServiceRegistry.register(Pie);
  return { shared, Pie };
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(createPieServices, "createPieServices");




/***/ }),

/***/ 51541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ createTreemapServices)
/* harmony export */ });
/* unused harmony export TreemapModule */
/* harmony import */ var _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76086);


// src/language/treemap/tokenBuilder.ts
var TreemapTokenBuilder = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidTokenBuilder */ .mR {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "TreemapTokenBuilder");
  }
  constructor() {
    super(["treemap"]);
  }
};

// src/language/treemap/valueConverter.ts
var classDefRegex = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/;
var TreemapValueConverter = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidValueConverter */ .dg {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "TreemapValueConverter");
  }
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name === "NUMBER2") {
      return parseFloat(input.replace(/,/g, ""));
    } else if (rule.name === "SEPARATOR") {
      return input.substring(1, input.length - 1);
    } else if (rule.name === "STRING2") {
      return input.substring(1, input.length - 1);
    } else if (rule.name === "INDENTATION") {
      return input.length;
    } else if (rule.name === "ClassDef") {
      if (typeof input !== "string") {
        return input;
      }
      const match = classDefRegex.exec(input);
      if (match) {
        return {
          $type: "ClassDefStatement",
          className: match[1],
          styleText: match[2] || void 0
        };
      }
    }
    return void 0;
  }
};

// src/language/treemap/treemap-validator.ts
function registerValidationChecks(services) {
  const validator = services.validation.TreemapValidator;
  const registry = services.validation.ValidationRegistry;
  if (registry) {
    const checks = {
      Treemap: validator.checkSingleRoot.bind(validator)
      // Remove unused validation for TreemapRow
    };
    registry.register(checks, validator);
  }
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(registerValidationChecks, "registerValidationChecks");
var TreemapValidator = class {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "TreemapValidator");
  }
  /**
   * Validates that a treemap has only one root node.
   * A root node is defined as a node that has no indentation.
   */
  checkSingleRoot(doc, accept) {
    let rootNodeIndentation;
    for (const row of doc.TreemapRows) {
      if (!row.item) {
        continue;
      }
      if (rootNodeIndentation === void 0 && // Check if this is a root node (no indentation)
      row.indent === void 0) {
        rootNodeIndentation = 0;
      } else if (row.indent === void 0) {
        accept("error", "Multiple root nodes are not allowed in a treemap.", {
          node: row,
          property: "item"
        });
      } else if (rootNodeIndentation !== void 0 && rootNodeIndentation >= parseInt(row.indent, 10)) {
        accept("error", "Multiple root nodes are not allowed in a treemap.", {
          node: row,
          property: "item"
        });
      }
    }
  }
};

// src/language/treemap/module.ts
var TreemapModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new TreemapTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new TreemapValueConverter(), "ValueConverter")
  },
  validation: {
    TreemapValidator: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new TreemapValidator(), "TreemapValidator")
  }
};
function createTreemapServices(context = _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EmptyFileSystem */ .DD) {
  const shared = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultSharedCoreModule */ .uM)(context),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .MermaidGeneratedSharedModule */ .sr
  );
  const Treemap = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultCoreModule */ .tG)({ shared }),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .TreemapGrammarGeneratedModule */ .XE,
    TreemapModule
  );
  shared.ServiceRegistry.register(Treemap);
  registerValidationChecks(Treemap);
  return { shared, Treemap };
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(createTreemapServices, "createTreemapServices");




/***/ }),

/***/ 57582:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ createTreeViewServices)
/* harmony export */ });
/* unused harmony export TreeViewModule */
/* harmony import */ var _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76086);


// src/language/treeView/valueConverter.ts
var TreeViewValueConverter = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidValueConverter */ .dg {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "TreeViewValueConverter");
  }
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name === "INDENTATION") {
      return input?.length || 0;
    } else if (rule.name === "STRING2") {
      return input.substring(1, input.length - 1);
    }
    return void 0;
  }
};

// src/language/treeView/tokenBuilder.ts
var TreeViewTokenBuilder = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidTokenBuilder */ .mR {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "TreeViewTokenBuilder");
  }
  constructor() {
    super(["treeView-beta"]);
  }
};

// src/language/treeView/module.ts
var TreeViewModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new TreeViewTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new TreeViewValueConverter(), "ValueConverter")
  }
};
function createTreeViewServices(context = _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EmptyFileSystem */ .DD) {
  const shared = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultSharedCoreModule */ .uM)(context),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .MermaidGeneratedSharedModule */ .sr
  );
  const TreeView = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultCoreModule */ .tG)({ shared }),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .TreeViewGrammarGeneratedModule */ .CZ,
    TreeViewModule
  );
  shared.ServiceRegistry.register(TreeView);
  return { shared, TreeView };
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(createTreeViewServices, "createTreeViewServices");




/***/ }),

/***/ 69261:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ createWardleyServices)
/* harmony export */ });
/* unused harmony export WardleyModule */
/* harmony import */ var _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76086);


// src/language/wardley/valueConverter.ts
var WardleyValueConverter = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidValueConverter */ .dg {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "WardleyValueConverter");
  }
  runCustomConverter(rule, input, _cstNode) {
    switch (rule.name.toUpperCase()) {
      case "LINK_LABEL":
        return input.substring(1).trim();
      default:
        return void 0;
    }
  }
};

// src/language/wardley/module.ts
var WardleyModule = {
  parser: {
    ValueConverter: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new WardleyValueConverter(), "ValueConverter")
  }
};
function createWardleyServices(context = _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EmptyFileSystem */ .DD) {
  const shared = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultSharedCoreModule */ .uM)(context),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .MermaidGeneratedSharedModule */ .sr
  );
  const Wardley = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultCoreModule */ .tG)({ shared }),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .WardleyGrammarGeneratedModule */ .Xr,
    WardleyModule
  );
  shared.ServiceRegistry.register(Wardley);
  return { shared, Wardley };
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(createWardleyServices, "createWardleyServices");




/***/ }),

/***/ 74226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ createGitGraphServices)
/* harmony export */ });
/* unused harmony export GitGraphModule */
/* harmony import */ var _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76086);


// src/language/gitGraph/tokenBuilder.ts
var GitGraphTokenBuilder = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidTokenBuilder */ .mR {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "GitGraphTokenBuilder");
  }
  constructor() {
    super(["gitGraph"]);
  }
};

// src/language/gitGraph/module.ts
var GitGraphModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new GitGraphTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .CommonValueConverter */ .Tm(), "ValueConverter")
  }
};
function createGitGraphServices(context = _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EmptyFileSystem */ .DD) {
  const shared = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultSharedCoreModule */ .uM)(context),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .MermaidGeneratedSharedModule */ .sr
  );
  const GitGraph = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultCoreModule */ .tG)({ shared }),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .GitGraphGrammarGeneratedModule */ .d$,
    GitGraphModule
  );
  shared.ServiceRegistry.register(GitGraph);
  return { shared, GitGraph };
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(createGitGraphServices, "createGitGraphServices");




/***/ }),

/***/ 80603:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ createInfoServices)
/* harmony export */ });
/* unused harmony export InfoModule */
/* harmony import */ var _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76086);


// src/language/info/tokenBuilder.ts
var InfoTokenBuilder = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidTokenBuilder */ .mR {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "InfoTokenBuilder");
  }
  constructor() {
    super(["info", "showInfo"]);
  }
};

// src/language/info/module.ts
var InfoModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new InfoTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .CommonValueConverter */ .Tm(), "ValueConverter")
  }
};
function createInfoServices(context = _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EmptyFileSystem */ .DD) {
  const shared = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultSharedCoreModule */ .uM)(context),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .MermaidGeneratedSharedModule */ .sr
  );
  const Info = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultCoreModule */ .tG)({ shared }),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .InfoGrammarGeneratedModule */ .FZ,
    InfoModule
  );
  shared.ServiceRegistry.register(Info);
  return { shared, Info };
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(createInfoServices, "createInfoServices");




/***/ }),

/***/ 88863:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F5: () => (/* reexport safe */ _chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__.F5),
/* harmony export */   qg: () => (/* binding */ parse)
/* harmony export */ });
/* unused harmony export MermaidParseError */
/* harmony import */ var _chunks_mermaid_parser_core_chunk_FHYWG6QK_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89784);
/* harmony import */ var _chunks_mermaid_parser_core_chunk_BR22UD5L_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51541);
/* harmony import */ var _chunks_mermaid_parser_core_chunk_PUPMXCY4_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69261);
/* harmony import */ var _chunks_mermaid_parser_core_chunk_UIBZB4QT_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74226);
/* harmony import */ var _chunks_mermaid_parser_core_chunk_5DO6E6H7_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80603);
/* harmony import */ var _chunks_mermaid_parser_core_chunk_MPE355IW_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6300);
/* harmony import */ var _chunks_mermaid_parser_core_chunk_MZUSXYTE_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19688);
/* harmony import */ var _chunks_mermaid_parser_core_chunk_WCWK7LTN_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57582);
/* harmony import */ var _chunks_mermaid_parser_core_chunk_4EGX6M5U_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96588);
/* harmony import */ var _chunks_mermaid_parser_core_chunk_N66VUXT2_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99608);
/* harmony import */ var _chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76086);












// src/parse.ts
var parsers = {};
var initializers = {
  info: /* @__PURE__ */ (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(async () => {
    const { createInfoServices: createInfoServices2 } = await __webpack_require__.e(/* import() */ 5590).then(__webpack_require__.bind(__webpack_require__, 85590));
    const parser = createInfoServices2().Info.parser.LangiumParser;
    parsers.info = parser;
  }, "info"),
  packet: /* @__PURE__ */ (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(async () => {
    const { createPacketServices: createPacketServices2 } = await __webpack_require__.e(/* import() */ 5326).then(__webpack_require__.bind(__webpack_require__, 85326));
    const parser = createPacketServices2().Packet.parser.LangiumParser;
    parsers.packet = parser;
  }, "packet"),
  pie: /* @__PURE__ */ (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(async () => {
    const { createPieServices: createPieServices2 } = await __webpack_require__.e(/* import() */ 9633).then(__webpack_require__.bind(__webpack_require__, 49633));
    const parser = createPieServices2().Pie.parser.LangiumParser;
    parsers.pie = parser;
  }, "pie"),
  treeView: /* @__PURE__ */ (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(async () => {
    const { createTreeViewServices: createTreeViewServices2 } = await __webpack_require__.e(/* import() */ 8568).then(__webpack_require__.bind(__webpack_require__, 98568));
    const parser = createTreeViewServices2().TreeView.parser.LangiumParser;
    parsers.treeView = parser;
  }, "treeView"),
  architecture: /* @__PURE__ */ (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(async () => {
    const { createArchitectureServices: createArchitectureServices2 } = await __webpack_require__.e(/* import() */ 9500).then(__webpack_require__.bind(__webpack_require__, 19500));
    const parser = createArchitectureServices2().Architecture.parser.LangiumParser;
    parsers.architecture = parser;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(async () => {
    const { createGitGraphServices: createGitGraphServices2 } = await __webpack_require__.e(/* import() */ 4829).then(__webpack_require__.bind(__webpack_require__, 24829));
    const parser = createGitGraphServices2().GitGraph.parser.LangiumParser;
    parsers.gitGraph = parser;
  }, "gitGraph"),
  eventmodeling: /* @__PURE__ */ (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(async () => {
    const { createEventModelingServices: createEventModelingServices2 } = await __webpack_require__.e(/* import() */ 9779).then(__webpack_require__.bind(__webpack_require__, 69779));
    const parser = createEventModelingServices2().EventModel.parser.LangiumParser;
    parsers.eventmodeling = parser;
  }, "eventmodeling"),
  radar: /* @__PURE__ */ (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(async () => {
    const { createRadarServices: createRadarServices2 } = await __webpack_require__.e(/* import() */ 6600).then(__webpack_require__.bind(__webpack_require__, 6600));
    const parser = createRadarServices2().Radar.parser.LangiumParser;
    parsers.radar = parser;
  }, "radar"),
  treemap: /* @__PURE__ */ (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(async () => {
    const { createTreemapServices: createTreemapServices2 } = await __webpack_require__.e(/* import() */ 5690).then(__webpack_require__.bind(__webpack_require__, 55690));
    const parser = createTreemapServices2().Treemap.parser.LangiumParser;
    parsers.treemap = parser;
  }, "treemap"),
  wardley: /* @__PURE__ */ (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(async () => {
    const { createWardleyServices: createWardleyServices2 } = await __webpack_require__.e(/* import() */ 5019).then(__webpack_require__.bind(__webpack_require__, 85019));
    const parser = createWardleyServices2().Wardley.parser.LangiumParser;
    parsers.wardley = parser;
  }, "wardley")
};
async function parse(diagramType, text) {
  const initializer = initializers[diagramType];
  if (!initializer) {
    throw new Error(`Unknown diagram type: ${diagramType}`);
  }
  if (!parsers[diagramType]) {
    await initializer();
  }
  const parser = parsers[diagramType];
  const result = parser.parse(text);
  if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
    throw new MermaidParseError(result);
  }
  return result.value;
}
(0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(parse, "parse");
var MermaidParseError = class extends Error {
  constructor(result) {
    const lexerErrors = result.lexerErrors.map((err) => {
      const line = err.line !== void 0 && !isNaN(err.line) ? err.line : "?";
      const column = err.column !== void 0 && !isNaN(err.column) ? err.column : "?";
      return `Lexer error on line ${line}, column ${column}: ${err.message}`;
    }).join("\n");
    const parserErrors = result.parserErrors.map((err) => {
      const line = err.token.startLine !== void 0 && !isNaN(err.token.startLine) ? err.token.startLine : "?";
      const column = err.token.startColumn !== void 0 && !isNaN(err.token.startColumn) ? err.token.startColumn : "?";
      return `Parse error on line ${line}, column ${column}: ${err.message}`;
    }).join("\n");
    super(`Parsing failed: ${lexerErrors} ${parserErrors}`);
    this.result = result;
  }
  static {
    (0,_chunks_mermaid_parser_core_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_10__/* .__name */ .K2)(this, "MermaidParseError");
  }
};



/***/ }),

/***/ 89784:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createRadarServices)
/* harmony export */ });
/* unused harmony export RadarModule */
/* harmony import */ var _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76086);


// src/language/radar/tokenBuilder.ts
var RadarTokenBuilder = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidTokenBuilder */ .mR {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "RadarTokenBuilder");
  }
  constructor() {
    super(["radar-beta"]);
  }
};

// src/language/radar/module.ts
var RadarModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new RadarTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .CommonValueConverter */ .Tm(), "ValueConverter")
  }
};
function createRadarServices(context = _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EmptyFileSystem */ .DD) {
  const shared = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultSharedCoreModule */ .uM)(context),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .MermaidGeneratedSharedModule */ .sr
  );
  const Radar = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultCoreModule */ .tG)({ shared }),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .RadarGrammarGeneratedModule */ .Bg,
    RadarModule
  );
  shared.ServiceRegistry.register(Radar);
  return { shared, Radar };
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(createRadarServices, "createRadarServices");




/***/ }),

/***/ 96588:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ createArchitectureServices)
/* harmony export */ });
/* unused harmony export ArchitectureModule */
/* harmony import */ var _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76086);


// src/language/architecture/tokenBuilder.ts
var ArchitectureTokenBuilder = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidTokenBuilder */ .mR {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "ArchitectureTokenBuilder");
  }
  constructor() {
    super(["architecture"]);
  }
};

// src/language/architecture/valueConverter.ts
var ArchitectureValueConverter = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidValueConverter */ .dg {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "ArchitectureValueConverter");
  }
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name === "ARCH_ICON") {
      return input.replace(/[()]/g, "").trim();
    } else if (rule.name === "ARCH_TEXT_ICON") {
      return input.replace(/["()]/g, "");
    } else if (rule.name === "ARCH_TITLE") {
      let result = input.replace(/^\[|]$/g, "").trim();
      if (result.startsWith('"') && result.endsWith('"') || result.startsWith("'") && result.endsWith("'")) {
        result = result.slice(1, -1);
        result = result.replace(/\\"/g, '"').replace(/\\'/g, "'");
      }
      return result.trim();
    }
    return void 0;
  }
};

// src/language/architecture/module.ts
var ArchitectureModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new ArchitectureTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new ArchitectureValueConverter(), "ValueConverter")
  }
};
function createArchitectureServices(context = _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EmptyFileSystem */ .DD) {
  const shared = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultSharedCoreModule */ .uM)(context),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .MermaidGeneratedSharedModule */ .sr
  );
  const Architecture = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultCoreModule */ .tG)({ shared }),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .ArchitectureGrammarGeneratedModule */ .wV,
    ArchitectureModule
  );
  shared.ServiceRegistry.register(Architecture);
  return { shared, Architecture };
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(createArchitectureServices, "createArchitectureServices");




/***/ }),

/***/ 99608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ createEventModelingServices)
/* harmony export */ });
/* unused harmony export EventModelingModule */
/* harmony import */ var _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76086);


// src/language/eventmodeling/tokenBuilder.ts
var EventModelingTokenBuilder = class extends _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AbstractMermaidTokenBuilder */ .mR {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "EventModelingTokenBuilder");
  }
  constructor() {
    super(["eventmodeling"]);
  }
};

// src/language/eventmodeling/event-modeling-validator.ts
var COMMAND_TYPES = /* @__PURE__ */ new Set(["cmd", "command"]);
var EVENT_TYPES = /* @__PURE__ */ new Set(["evt", "event"]);
var READMODEL_TYPES = /* @__PURE__ */ new Set(["rmo", "readmodel"]);
var PROCESSOR_TYPES = /* @__PURE__ */ new Set(["pcr", "processor"]);
var UI_TYPES = /* @__PURE__ */ new Set(["ui"]);
function registerValidationChecks(services) {
  const validator = services.validation.EventModelingValidator;
  const registry = services.validation.ValidationRegistry;
  if (registry) {
    const checks = {
      EmTimeFrame: validator.checkSourceFrameTypes.bind(validator),
      EmResetFrame: validator.checkSourceFrameTypes.bind(validator)
    };
    registry.register(checks, validator);
  }
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(registerValidationChecks, "registerValidationChecks");
var EventModelingValidator = class {
  static {
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(this, "EventModelingValidator");
  }
  checkSourceFrameTypes(frame, accept) {
    if (frame.sourceFrames.length === 0) {
      return;
    }
    if (COMMAND_TYPES.has(frame.modelEntityType)) {
      this.validateSources(
        frame,
        /* @__PURE__ */ new Set([...UI_TYPES, ...PROCESSOR_TYPES]),
        "command",
        "ui or processor",
        accept
      );
    } else if (EVENT_TYPES.has(frame.modelEntityType)) {
      this.validateSources(frame, COMMAND_TYPES, "event", "command", accept);
    } else if (READMODEL_TYPES.has(frame.modelEntityType)) {
      this.validateSources(frame, EVENT_TYPES, "read model", "event", accept);
    } else if (PROCESSOR_TYPES.has(frame.modelEntityType)) {
      this.validateSources(frame, READMODEL_TYPES, "processor", "read model", accept);
    } else if (UI_TYPES.has(frame.modelEntityType)) {
      this.validateSources(frame, READMODEL_TYPES, "ui", "read model", accept);
    }
  }
  validateSources(frame, allowedSourceTypes, targetLabel, expectedSourceLabel, accept) {
    for (const sourceRef of frame.sourceFrames) {
      const source = sourceRef.ref;
      if (source !== void 0 && !allowedSourceTypes.has(source.modelEntityType)) {
        accept(
          "error",
          `A ${targetLabel} can only receive input from a ${expectedSourceLabel}, not from '${source.modelEntityType}'.`,
          { node: frame, property: "sourceFrames" }
        );
      }
    }
  }
};

// src/language/eventmodeling/module.ts
var EventModelingModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new EventModelingTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .CommonValueConverter */ .Tm(), "ValueConverter")
  },
  validation: {
    EventModelingValidator: /* @__PURE__ */ (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(() => new EventModelingValidator(), "EventModelingValidator")
  }
};
function createEventModelingServices(context = _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EmptyFileSystem */ .DD) {
  const shared = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultSharedCoreModule */ .uM)(context),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .MermaidGeneratedSharedModule */ .sr
  );
  const EventModel = (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)(
    (0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createDefaultCoreModule */ .tG)({ shared }),
    _chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .EventModelingGeneratedModule */ .x0,
    EventModelingModule
  );
  shared.ServiceRegistry.register(EventModel);
  registerValidationChecks(EventModel);
  return { shared, EventModel };
}
(0,_chunk_NNHCCRGN_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)(createEventModelingServices, "createEventModelingServices");




/***/ })

}]);