(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6156],{

/***/ 79271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PostPrevNext: () => (/* binding */ PostPrevNext)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/ui/content-link-card.tsx
var content_link_card = __webpack_require__(99078);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-tabs/dist/index.mjs + 6 modules
var dist = __webpack_require__(94840);
// EXTERNAL MODULE: ./src/lib/classnames.ts
var classnames = __webpack_require__(74767);
;// ./src/components/ui/tabs.tsx
/* __next_internal_client_entry_do_not_use__ Tabs,TabsList,TabsTrigger,TabsContent auto */ 



const Tabs = dist/* Root */.bL;
const TabsList = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* List */.B8, {
        ref: ref,
        className: (0,classnames.cn)('inline-flex items-center justify-center gap-1 border-b border-(--color-border) p-0', className),
        ...props
    }));
TabsList.displayName = dist/* List */.B8.displayName;
const TabsTrigger = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Trigger */.l9, {
        ref: ref,
        className: (0,classnames.cn)('relative -mb-px inline-flex items-center justify-center whitespace-nowrap px-3 py-2 text-xs font-medium transition-colors', 'text-muted-foreground hover:text-foreground', 'data-[state=active]:border-b-2 data-[state=active]:border-(--color-highlight) data-[state=active]:text-(--color-highlight)', 'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none', 'disabled:pointer-events-none disabled:opacity-50', className),
        ...props
    }));
TabsTrigger.displayName = dist/* Trigger */.l9.displayName;
const TabsContent = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Content */.UC, {
        ref: ref,
        className: (0,classnames.cn)('focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none', className),
        ...props
    }));
TabsContent.displayName = dist/* Content */.UC.displayName;


;// ./src/components/layout/PostPrevNext.tsx
/* __next_internal_client_entry_do_not_use__ PostPrevNext auto */ 




const STORAGE_KEY = 'site:post-nav-preference';
function getStoredNavMode() {
    if (false) {}
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'series' || stored === 'global' || stored === 'category') return stored;
    } catch  {
    // localStorage unavailable (e.g. private browsing in some browsers)
    }
    return 'global';
}
function PostPrevNext({ prev, next, prevLabel, nextLabel, ariaLabel = 'Previous and next post', className, seriesName, seriesPrev, seriesNext, seriesPrevLabel, seriesNextLabel, tabGlobalLabel, tabSeriesLabel, categoryName, categoryPrev, categoryNext, categoryPrevLabel, categoryNextLabel, tabCategoryLabel }) {
    const [mode, setMode] = (0,react.useState)('global');
    // Restore persisted nav preference on mount.
    (0,react.useEffect)(()=>{
        const stored = getStoredNavMode();
        if (stored !== 'global') setMode(stored);
    }, []);
    const handleModeChange = (0,react.useCallback)((newMode)=>{
        setMode(newMode);
        try {
            localStorage.setItem(STORAGE_KEY, newMode);
        } catch  {
        // Silently ignore write failures.
        }
    }, []);
    const hasSeries = !!(seriesPrev || seriesNext);
    const hasCategory = !!(categoryPrev || categoryNext);
    const showTabs = (hasSeries || hasCategory) && tabGlobalLabel && (tabSeriesLabel || tabCategoryLabel);
    const currentPrev = mode === 'series' && hasSeries ? seriesPrev : mode === 'category' && hasCategory ? categoryPrev : prev;
    const currentNext = mode === 'series' && hasSeries ? seriesNext : mode === 'category' && hasCategory ? categoryNext : next;
    const currentPrevLabel = mode === 'series' && hasSeries ? seriesPrevLabel ?? prevLabel : mode === 'category' && hasCategory ? categoryPrevLabel ?? prevLabel : prevLabel;
    const currentNextLabel = mode === 'series' && hasSeries ? seriesNextLabel ?? nextLabel : mode === 'category' && hasCategory ? categoryNextLabel ?? nextLabel : nextLabel;
    if (!currentPrev && !currentNext) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,classnames.cn)('mt-12', className),
        children: [
            showTabs && /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs, {
                value: mode,
                onValueChange: (v)=>handleModeChange(v),
                className: "mb-3 border-b border-(--color-border)",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabsList, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabsTrigger, {
                            value: "global",
                            children: tabGlobalLabel
                        }),
                        hasSeries && tabSeriesLabel && /*#__PURE__*/ (0,jsx_runtime.jsx)(TabsTrigger, {
                            value: "series",
                            children: tabSeriesLabel
                        }),
                        hasCategory && tabCategoryLabel && /*#__PURE__*/ (0,jsx_runtime.jsx)(TabsTrigger, {
                            value: "category",
                            children: tabCategoryLabel
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                className: (0,classnames.cn)('grid gap-4', currentPrev && currentNext ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1', !currentPrev && currentNext ? 'sm:justify-items-end' : ''),
                "aria-label": ariaLabel,
                children: [
                    currentPrev && /*#__PURE__*/ (0,jsx_runtime.jsx)(content_link_card/* ContentLinkCard */.O, {
                        href: currentPrev.url,
                        className: (0,classnames.cn)('min-w-0', currentNext ? 'w-full' : 'sm:w-[50%] sm:min-w-0'),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
                                    children: currentPrevLabel
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "mt-0.5 truncate font-medium text-foreground",
                                    children: currentPrev.title
                                })
                            ]
                        })
                    }),
                    currentNext && /*#__PURE__*/ (0,jsx_runtime.jsx)(content_link_card/* ContentLinkCard */.O, {
                        href: currentNext.url,
                        className: (0,classnames.cn)('min-w-0', currentPrev ? 'w-full' : 'sm:w-[50%] sm:min-w-0'),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "min-w-0 flex-1 text-right",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
                                    children: currentNextLabel
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "mt-0.5 truncate font-medium text-foreground",
                                    children: currentNext.title
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 81375:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 91930));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 98500, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 38437, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67081));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59356));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 16404));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46281));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8637));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 97556));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99685));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21935));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 53434));
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
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 79271));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76451));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46900));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4260));
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
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 53726));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 52540));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 90824));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44272));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 62941));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 83718));


/***/ }),

/***/ 97556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownArticleShell: () => (/* binding */ MarkdownArticleShell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _components_business_FancyboxRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71445);
/* harmony import */ var _components_business_PostBodyHydratedMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28596);
/* harmony import */ var _components_mermaid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4316);
/* __next_internal_client_entry_do_not_use__ MarkdownArticleShell auto */ 



/** Wraps compiled Markdown (.md) React output: same Fancybox + Mermaid hooks as MdxContent. */ function MarkdownArticleShell({ children, fancyboxEnabled = false }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_business_FancyboxRoot__WEBPACK_IMPORTED_MODULE_1__/* .FancyboxRoot */ .T, {
        enabled: fancyboxEnabled,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                children,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_mermaid__WEBPACK_IMPORTED_MODULE_3__/* .MermaidRunner */ .U4, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_business_PostBodyHydratedMarker__WEBPACK_IMPORTED_MODULE_2__/* .PostBodyHydratedMarker */ .e, {})
            ]
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [4153,8607,1838,2362,9589,3888,458,1989,844,5405,6552,774,2535,8441,3794,7358], () => (__webpack_exec__(81375)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);