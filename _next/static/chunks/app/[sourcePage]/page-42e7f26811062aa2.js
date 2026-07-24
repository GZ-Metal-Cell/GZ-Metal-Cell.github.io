(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2379,3417],{

/***/ 5224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostInjectScriptsRunner: () => (/* binding */ PostInjectScriptsRunner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48722);
/* harmony import */ var _lib_post_post_body_hydrated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9819);
/* __next_internal_client_entry_do_not_use__ PostInjectScriptsRunner auto */ 


/**
 * Injects front-matter <script> snippets after React hydration so legacy JS
 * (carousel, timeline-link, slider.js, etc.) does not mutate DOM before hydrate.
 * Encrypted posts also need stylesHead/stylesBottom: <link> tags in decrypted
 * innerHTML do not load stylesheets; inject them into document.head on the client.
 */ function PostInjectScriptsRunner({ head = [], bottom = [], stylesHead = [], stylesBottom = [] }) {
    const headKey = head.join('\0');
    const bottomKey = bottom.join('\0');
    const stylesHeadKey = stylesHead.join('\0');
    const stylesBottomKey = stylesBottom.join('\0');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let cancelled = false;
        void (async ()=>{
            await (0,_lib_post_post_body_hydrated__WEBPACK_IMPORTED_MODULE_1__/* .whenPostBodyHydrated */ .si)();
            if (cancelled) return;
            (0,_lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_2__/* .injectStyleSnippets */ .Xu)(stylesHead);
            (0,_lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_2__/* .injectStyleSnippets */ .Xu)(stylesBottom);
            if (cancelled) return;
            await (0,_lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_2__/* .injectScriptSnippets */ .H9)(head);
            if (cancelled) return;
            await (0,_lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_2__/* .injectScriptSnippets */ .H9)(bottom);
            if (cancelled) return;
            (0,_lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_2__/* .markInjectScriptsReady */ .SD)();
        })().catch(()=>{
            if (!cancelled) (0,_lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_2__/* .markInjectScriptsReady */ .SD)();
        });
        return ()=>{
            cancelled = true;
            if (true) {
                window.__NEXT_GZBLOG_INJECT_SCRIPTS_READY__ = false;
            }
        };
    }, [
        headKey,
        bottomKey,
        stylesHeadKey,
        stylesBottomKey
    ]);
    return null;
}


/***/ }),

/***/ 33024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layers)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Layers = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Layers", [
    [
        "path",
        {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }
    ],
    [
        "path",
        {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }
    ],
    [
        "path",
        {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }
    ]
]);
 //# sourceMappingURL=layers.js.map


/***/ }),

/***/ 49173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Giscus: () => (/* binding */ Giscus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50910);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70460);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ Giscus auto */ 



const GISCUS_SCRIPT_SRC = 'https://giscus.app/client.js';
const GISCUS_ORIGIN = 'https://giscus.app';
/** Giscus theme value: must match site theme for consistency. */ function getGiscusTheme(resolvedTheme) {
    if (resolvedTheme === 'light' || resolvedTheme === 'dark') return resolvedTheme;
    return 'preferred_color_scheme';
}
function readDocumentTheme() {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}
function sendGiscusTheme(theme) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe?.contentWindow) return;
    iframe.contentWindow.postMessage({
        giscus: {
            setConfig: {
                theme
            }
        }
    }, GISCUS_ORIGIN);
}
/**
 * Renders Giscus comments when config is non-null and term is set.
 * Theme is synced with the site theme via postMessage (no reload on theme switch).
 *
 * Handles the race condition where the user switches theme before giscus finishes loading:
 * 1. Updates data-theme on the script tag (covers: script not yet executed)
 * 2. Sends postMessage to the iframe (covers: iframe already loaded)
 * 3. Uses MutationObserver to detect when the iframe appears, then sends theme
 *    immediately AND on iframe load (covers: iframe created but content not loaded)
 */ function Giscus({ config, term, className }) {
    const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .D)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const scriptRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const theme = getGiscusTheme(resolvedTheme);
    const themeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(theme);
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_3__/* .useTranslations */ .c)('giscus');
    // Keep themeRef in sync so MutationObserver callback always has the latest theme
    themeRef.current = theme;
    const syncThemeToGiscus = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((targetTheme)=>{
        // Update script attribute so giscus reads the correct theme if it hasn't executed yet
        if (scriptRef.current) {
            scriptRef.current.setAttribute('data-theme', targetTheme);
        }
        // Send postMessage if the iframe is already present and loaded
        sendGiscusTheme(targetTheme);
    }, []);
    // Mount script when config/term change.
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const container = containerRef.current;
        if (!config || !term.trim() || !container) return;
        const script = document.createElement('script');
        script.src = GISCUS_SCRIPT_SRC;
        script.setAttribute('data-repo', config.repo);
        script.setAttribute('data-repo-id', config.repoId);
        script.setAttribute('data-category', config.category);
        script.setAttribute('data-category-id', config.categoryId);
        script.setAttribute('data-mapping', config.mapping);
        script.setAttribute('data-term', term);
        script.setAttribute('data-strict', String(config.strict));
        script.setAttribute('data-reactions-enabled', String(config.reactionsEnabled));
        script.setAttribute('data-emit-metadata', String(config.emitMetadata));
        script.setAttribute('data-input-position', config.inputPosition);
        script.setAttribute('data-theme', getGiscusTheme(readDocumentTheme()));
        script.setAttribute('data-loading', config.loading);
        if (config.lang) script.setAttribute('data-lang', config.lang);
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;
        scriptRef.current = script;
        // MutationObserver: detect when giscus inserts the iframe into the DOM,
        // then immediately sync the current theme (covers the race window between
        // iframe creation and iframe content loading).
        const observer = new MutationObserver(()=>{
            const iframe = document.querySelector('iframe.giscus-frame');
            if (!iframe) return;
            // Send theme right away
            const currentTheme = themeRef.current;
            iframe.contentWindow?.postMessage({
                giscus: {
                    setConfig: {
                        theme: currentTheme
                    }
                }
            }, GISCUS_ORIGIN);
            // Also send when iframe finishes loading its content,
            // in case the first message arrived before the widget's message listener was set up.
            const onIframeLoad = ()=>{
                iframe.contentWindow?.postMessage({
                    giscus: {
                        setConfig: {
                            theme: themeRef.current
                        }
                    }
                }, GISCUS_ORIGIN);
            };
            iframe.addEventListener('load', onIframeLoad, {
                once: true
            });
            // We found the iframe – stop observing
            observer.disconnect();
        });
        observer.observe(container, {
            childList: true,
            subtree: true
        });
        container.appendChild(script);
        return ()=>{
            observer.disconnect();
            scriptRef.current = null;
            if (container) container.innerHTML = '';
        };
    }, [
        config,
        term
    ]);
    // When site theme changes, sync it to giscus.
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!config || !term.trim()) return;
        syncThemeToGiscus(theme);
    }, [
        config,
        term,
        theme,
        syncThemeToGiscus
    ]);
    if (!config || !term.trim()) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: containerRef,
        className: className,
        "aria-label": t('comments')
    });
}


/***/ }),

/***/ 50770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BookMarked)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const BookMarked = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("BookMarked", [
    [
        "path",
        {
            d: "M10 2v8l3-3 3 3V2",
            key: "sqw3rj"
        }
    ],
    [
        "path",
        {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
            key: "k3hazp"
        }
    ]
]);
 //# sourceMappingURL=book-marked.js.map


/***/ }),

/***/ 54631:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 91930));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 98500, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 38437, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67081));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 16404));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46281));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8637));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23229));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21935));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 66954));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 49173));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 91348));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23857));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5224));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76451));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 10236));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 55623));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 45054));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93520));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 27322));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 83163));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44748));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 10986));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 58761));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9930));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 52384));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14314));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96585));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96054));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 31507));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 82167));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 19600));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50206));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13663));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 90954));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 42500));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 81990));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98319));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 20427));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67326));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93473));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4667));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 74026));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 60846));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 52540));


/***/ }),

/***/ 73321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74645);
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "usePathname")) __webpack_require__.d(__webpack_exports__, { usePathname: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useRouter")) __webpack_require__.d(__webpack_exports__, { useRouter: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter; } });


//# sourceMappingURL=navigation.js.map

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [4153,2362,9589,458,1989,844,6714,4701,8520,8441,3794,7358], () => (__webpack_exec__(54631)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);