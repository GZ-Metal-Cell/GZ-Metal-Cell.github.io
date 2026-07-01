(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6156],{

/***/ 1030:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 91930));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 98500, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 38437, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67081));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88457));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 16404));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46281));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 97556));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 63449));
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
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13143));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 42500));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 81990));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98319));
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
 */ function Giscus({ config, term, className }) {
    const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .D)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const theme = getGiscusTheme(resolvedTheme);
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_3__/* .useTranslations */ .c)('giscus');
    // Mount script when config/term/theme change so theme is correct on first load.
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
        script.setAttribute('data-theme', theme);
        script.setAttribute('data-loading', config.loading);
        if (config.lang) script.setAttribute('data-lang', config.lang);
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;
        container.appendChild(script);
        return ()=>{
            if (container) container.innerHTML = '';
        };
    }, [
        config,
        term,
        theme
    ]);
    // When site theme changes after mount, tell the Giscus iframe to update theme (no reload).
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!config || !term.trim()) return;
        sendGiscusTheme(theme);
    }, [
        config,
        term,
        theme
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

/***/ 73321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74645);
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "usePathname")) __webpack_require__.d(__webpack_exports__, { usePathname: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useRouter")) __webpack_require__.d(__webpack_exports__, { useRouter: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter; } });


//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 88457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DecryptablePost: () => (/* binding */ DecryptablePost)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./src/components/business/MdxContent.tsx + 5 modules
var MdxContent = __webpack_require__(63449);
// EXTERNAL MODULE: ./node_modules/unified/lib/index.js + 4 modules
var lib = __webpack_require__(96674);
// EXTERNAL MODULE: ./node_modules/rehype-parse/lib/index.js + 28 modules
var rehype_parse_lib = __webpack_require__(31825);
// EXTERNAL MODULE: ./node_modules/hast-util-to-jsx-runtime/lib/index.js + 4 modules
var hast_util_to_jsx_runtime_lib = __webpack_require__(59378);
// EXTERNAL MODULE: ./src/components/business/EncryptedFragment.tsx
var EncryptedFragment = __webpack_require__(46281);
// EXTERNAL MODULE: ./src/components/business/FancyboxRoot.tsx
var FancyboxRoot = __webpack_require__(71445);
// EXTERNAL MODULE: ./src/components/business/PostBodyHydratedMarker.tsx
var PostBodyHydratedMarker = __webpack_require__(28596);
// EXTERNAL MODULE: ./src/components/mermaid/index.ts
var mermaid = __webpack_require__(4316);
// EXTERNAL MODULE: ./src/components/business/post-body-rehype-components.tsx + 3 modules
var post_body_rehype_components = __webpack_require__(61543);
;// ./src/lib/prose-table-scroll.ts
/** Wrap bare `<table>` nodes so wide tables scroll horizontally inside prose (matches code blocks). */ function wrapBareProseTables(root) {
    root.querySelectorAll('table').forEach((table)=>{
        if (table.closest('.table-scroll')) return;
        const parent = table.parentElement;
        if (!parent) return;
        const wrapper = document.createElement('div');
        wrapper.className = 'table-scroll';
        wrapper.tabIndex = 0;
        parent.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
}

;// ./src/components/business/MarkdownPostBody.tsx
/* __next_internal_client_entry_do_not_use__ MarkdownPostBody auto */ 











const ENC_SLOT_RE = /<div\b[^>]*\bdata-md-enc-slot="(\d+)"[^>]*><\/div>/gi;
function splitMarkdownHtml(html, slots) {
    const byIndex = new Map(slots.map((s)=>[
            s.index,
            s
        ]));
    const segments = [];
    let last = 0;
    let m;
    ENC_SLOT_RE.lastIndex = 0;
    while((m = ENC_SLOT_RE.exec(html)) !== null){
        const idx = parseInt(m[1], 10);
        if (m.index > last) {
            segments.push({
                kind: 'html',
                html: html.slice(last, m.index)
            });
        }
        const slot = byIndex.get(idx);
        if (slot) segments.push({
            kind: 'enc',
            slot
        });
        last = m.index + m[0].length;
    }
    if (last < html.length) {
        segments.push({
            kind: 'html',
            html: html.slice(last)
        });
    }
    if (segments.length === 0) {
        segments.push({
            kind: 'html',
            html
        });
    }
    return segments;
}
/** Parse an HTML string into React elements via the same component map as non-encrypted posts. */ function htmlToReact(html, fancyboxEnabled, photoFigcaptionEnabled) {
    const tree = (0,lib/* unified */.l)().use(rehype_parse_lib/* default */.A, {
        fragment: true
    }).parse(html);
    return (0,hast_util_to_jsx_runtime_lib/* toJsxRuntime */.H)(tree, {
        Fragment: jsx_runtime.Fragment,
        jsx: jsx_runtime.jsx,
        jsxs: jsx_runtime.jsxs,
        development: false,
        components: (0,post_body_rehype_components/* createPostBodyRehypeComponents */.Oh)({
            fancyboxEnabled,
            photoFigcaptionEnabled,
            encryptedSlotMap: new Map()
        })
    });
}
/**
 * Renders Markdown as HTML (decrypted full-post or legacy) with :::encrypt slots and Mermaid/Fancybox hooks.
 * HTML segments are parsed through rehype-parse + toJsxRuntime so they share the same React components
 * (CodeBlock, MermaidPanel, etc.) as non-encrypted posts.
 */ function MarkdownPostBody({ markdownBody, fancyboxEnabled = false, photoFigcaptionEnabled = false }) {
    const containerRef = react.useRef(null);
    const rawSegments = react.useMemo(()=>splitMarkdownHtml(markdownBody.html, markdownBody.encryptedSlots), [
        markdownBody.html,
        markdownBody.encryptedSlots
    ]);
    // Parse HTML segments into React elements (memoized — only recomputes on decrypt)
    const segments = react.useMemo(()=>rawSegments.map((seg)=>{
            if (seg.kind === 'html') {
                return {
                    kind: 'html',
                    react: htmlToReact(seg.html, fancyboxEnabled, photoFigcaptionEnabled)
                };
            }
            return seg;
        }), [
        rawSegments,
        fancyboxEnabled,
        photoFigcaptionEnabled
    ]);
    react.useLayoutEffect(()=>{
        if (containerRef.current) wrapBareProseTables(containerRef.current);
    }, [
        segments
    ]);
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ref: containerRef,
                children: segments.map((seg, i)=>{
                    if (seg.kind === 'html') {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "min-w-0",
                            children: seg.react
                        }, `h-${i}`);
                    }
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EncryptedFragment.EncryptedFragment, {
                        encryptedHex: seg.slot.encryptedHex,
                        keySaltHex: seg.slot.keySaltHex,
                        ivSaltHex: seg.slot.ivSaltHex,
                        hmacHex: seg.slot.hmacHex,
                        contentKind: "html",
                        abstract: seg.slot.abstract,
                        message: seg.slot.message
                    }, `e-${i}-${seg.slot.index}`);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(mermaid/* MermaidRunner */.U4, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PostBodyHydratedMarker/* PostBodyHydratedMarker */.e, {})
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FancyboxRoot/* FancyboxRoot */.T, {
        enabled: fancyboxEnabled,
        children: content
    });
}

// EXTERNAL MODULE: ./src/contexts/HeadingsContext.tsx
var HeadingsContext = __webpack_require__(52540);
// EXTERNAL MODULE: ./src/contexts/OnContentRevealContext.tsx
var OnContentRevealContext = __webpack_require__(90824);
// EXTERNAL MODULE: ./src/lib/encrypt/client.ts + 1 modules
var client = __webpack_require__(47534);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(89239);
// EXTERNAL MODULE: ./src/components/ui/field.tsx + 2 modules
var field = __webpack_require__(61360);
;// ./src/components/business/DecryptablePost.tsx
/* __next_internal_client_entry_do_not_use__ DecryptablePost auto */ 









function DecryptablePost({ slug, encryptedPayload, fancyboxEnabled = false, photoFigcaptionEnabled = false, extraComponentNames, extraComponentProps }) {
    const setHeadings = (0,HeadingsContext/* useSetHeadings */.D)();
    const onReveal = (0,OnContentRevealContext/* useOnContentReveal */.D)();
    const [password, setPassword] = react.useState('');
    const [state, setState] = react.useState({
        status: 'idle'
    });
    const [triedStored, setTriedStored] = react.useState(false);
    const { encryptedHex, keySaltHex, ivSaltHex, hmacHex, options } = encryptedPayload;
    const t = (0,react_client/* useTranslations */.c)('encrypt');
    const tryDecrypt = react.useCallback(async (pwd)=>{
        setState({
            status: 'loading'
        });
        const result = await (0,client/* decrypt */.Yc)(encryptedHex, keySaltHex, ivSaltHex, hmacHex, pwd);
        if (result.ok) {
            try {
                const parsed = JSON.parse(result.data);
                if (parsed && typeof parsed === 'object' && parsed.format === 'markdown-v1' && typeof parsed.html === 'string') {
                    const markdownBody = {
                        html: parsed.html,
                        encryptedSlots: parsed.encryptedSlots ?? []
                    };
                    (0,client/* setStoredPassword */.Ln)(slug, pwd);
                    if (Array.isArray(parsed.headings) && parsed.headings.length > 0) {
                        setHeadings(parsed.headings);
                    }
                    setState({
                        status: 'decrypted-md',
                        markdownBody
                    });
                    onReveal?.run();
                    return;
                }
                const asMdx = parsed;
                if (asMdx && typeof asMdx.compiledSource === 'string') {
                    const body = {
                        compiledSource: asMdx.compiledSource,
                        scope: asMdx.scope ?? {},
                        frontmatter: asMdx.frontmatter ?? {}
                    };
                    (0,client/* setStoredPassword */.Ln)(slug, pwd);
                    if (Array.isArray(asMdx.headings) && asMdx.headings.length > 0) {
                        setHeadings(asMdx.headings);
                    }
                    setState({
                        status: 'decrypted',
                        body
                    });
                    onReveal?.run();
                    return;
                }
            } catch  {
                setState({
                    status: 'error',
                    message: options.wrong_hash_message || t('wrong_hash_message')
                });
                return;
            }
        }
        if (!result.ok) {
            const err = result.error;
            const msg = err === 'wrong_hash' ? options.wrong_hash_message || t('wrong_hash_message') : options.wrong_pass_message || t('wrong_pass_message');
            setState({
                status: 'error',
                message: msg
            });
        }
    }, [
        encryptedHex,
        keySaltHex,
        ivSaltHex,
        hmacHex,
        slug,
        options,
        onReveal,
        setHeadings,
        t
    ]);
    react.useEffect(()=>{
        if (triedStored) return;
        setTriedStored(true);
        const stored = (0,client/* getStoredPassword */.$R)(slug);
        if (stored) {
            tryDecrypt(stored);
        }
    }, [
        slug,
        triedStored,
        tryDecrypt
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!password.trim()) return;
        tryDecrypt(password.trim());
    };
    const handleClearStorage = ()=>{
        (0,client/* clearStoredPassword */.Yj)(slug);
        setHeadings([]);
        setState({
            status: 'idle'
        });
        setPassword('');
    };
    if (state.status === 'decrypted-md') {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MarkdownPostBody, {
                    markdownBody: state.markdownBody,
                    fancyboxEnabled: fancyboxEnabled,
                    photoFigcaptionEnabled: photoFigcaptionEnabled
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "mt-4 flex justify-end",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        onClick: handleClearStorage,
                        className: "text-muted-foreground",
                        "aria-label": t('forgetPasswordPost'),
                        children: t('forgetPassword')
                    })
                })
            ]
        });
    }
    if (state.status === 'decrypted') {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MdxContent.MdxContent, {
                    mdxSource: state.body,
                    fancyboxEnabled: fancyboxEnabled,
                    photoFigcaptionEnabled: photoFigcaptionEnabled,
                    extraComponentNames: extraComponentNames,
                    extraComponentProps: extraComponentProps,
                    slug: slug
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "mt-4 flex justify-end",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        onClick: handleClearStorage,
                        className: "text-muted-foreground",
                        "aria-label": t('forgetPasswordPost'),
                        children: t('forgetPassword')
                    })
                })
            ]
        });
    }
    const abstractText = options.abstract || t('abstract');
    const messageText = options.message || t('message');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "rounded-lg border border-ui bg-muted/30 px-6 py-4 md:p-8",
        children: [
            abstractText ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "mb-3 text-sm text-muted-foreground",
                children: abstractText
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                onSubmit: handleSubmit,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(field/* Field */.D0, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(field/* FieldLabel */.dh, {
                            htmlFor: "post-password",
                            children: messageText
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                    id: "post-password",
                                    type: "password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    placeholder: t('placeholder'),
                                    className: "h-8 max-w-xs rounded-md border border-input bg-background px-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50",
                                    autoComplete: "current-password",
                                    disabled: state.status === 'loading',
                                    "aria-label": t('postPasswordLabel')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                    type: "submit",
                                    variant: "outline",
                                    disabled: state.status === 'loading' || !password.trim(),
                                    children: state.status === 'loading' ? t('decrypting') : t('decrypt')
                                })
                            ]
                        }),
                        state.status === 'error' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(field/* FieldError */.bg, {
                            children: state.message
                        }) : null
                    ]
                })
            })
        ]
    });
}


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
/******/ __webpack_require__.O(0, [4153,2362,458,1989,844,6714,9557,8520,8441,3794,7358], () => (__webpack_exec__(1030)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);