(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6156],{

/***/ 9618:
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
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46281));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 97556));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 15412));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21935));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 66954));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 49173));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 25991));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23857));
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
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44748));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 58761));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 52384));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14314));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 68687));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 19600));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50206));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13663));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 81990));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98319));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67326));
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
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 83718));


/***/ }),

/***/ 25991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InjectFragments: () => (/* binding */ InjectFragments)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ InjectFragments auto */ 
/**
 * Injects front-matter inject snippets into document: head before </head>, bottom before </body>.
 * Runs on mount so that CSS/JS from front matter are applied to the real head/body.
 */ function InjectFragments({ inject }) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!inject) return;
        const head = inject.head?.length ? inject.head : [];
        const bottom = inject.bottom?.length ? inject.bottom : [];
        if (head.length === 0 && bottom.length === 0) return;
        const headNodes = [];
        if (head.length > 0) {
            const wrap = document.createElement('div');
            wrap.innerHTML = head.join('\n');
            while(wrap.firstChild){
                headNodes.push(wrap.firstChild);
                document.head.appendChild(wrap.firstChild);
            }
        }
        const bottomNodes = [];
        if (bottom.length > 0) {
            const wrap = document.createElement('div');
            wrap.innerHTML = bottom.join('\n');
            while(wrap.firstChild){
                bottomNodes.push(wrap.firstChild);
                document.body.appendChild(wrap.firstChild);
            }
        }
        return ()=>{
            headNodes.forEach((n)=>n.parentNode?.removeChild(n));
            bottomNodes.forEach((n)=>n.parentNode?.removeChild(n));
        };
    }, [
        inject
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

/***/ 59356:
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
// EXTERNAL MODULE: ./src/components/business/MdxContent.tsx + 10 modules
var MdxContent = __webpack_require__(15412);
// EXTERNAL MODULE: ./src/components/business/EncryptedFragment.tsx
var EncryptedFragment = __webpack_require__(46281);
// EXTERNAL MODULE: ./src/components/business/FancyboxRoot.tsx
var FancyboxRoot = __webpack_require__(71445);
// EXTERNAL MODULE: ./src/components/mermaid/index.ts
var mermaid = __webpack_require__(4316);
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
/**
 * Renders Markdown as HTML (decrypted full-post or legacy) with :::encrypt slots and Mermaid/Fancybox hooks.
 */ function MarkdownPostBody({ markdownBody, fancyboxEnabled = false, photoFigcaptionEnabled = false }) {
    const segments = react.useMemo(()=>splitMarkdownHtml(markdownBody.html, markdownBody.encryptedSlots), [
        markdownBody.html,
        markdownBody.encryptedSlots
    ]);
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            segments.map((seg, i)=>{
                if (seg.kind === 'html') {
                    if (!seg.html.trim()) return null;
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "min-w-0",
                        dangerouslySetInnerHTML: {
                            __html: seg.html
                        }
                    }, `h-${i}`);
                }
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(EncryptedFragment.EncryptedFragment, {
                    encryptedHex: seg.slot.encryptedHex,
                    keySaltHex: seg.slot.keySaltHex,
                    ivSaltHex: seg.slot.ivSaltHex,
                    hmacHex: seg.slot.hmacHex,
                    contentKind: "html",
                    abstract: seg.slot.abstract,
                    message: seg.slot.message,
                    fancyboxEnabled: fancyboxEnabled,
                    photoFigcaptionEnabled: photoFigcaptionEnabled
                }, `e-${i}-${seg.slot.index}`);
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(mermaid/* MermaidRunner */.U, {})
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
                    extraComponentProps: extraComponentProps
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
                className: "mt-0 mb-4 text-muted-foreground",
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

/***/ 70460:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ z),
/* harmony export */   N: () => (/* binding */ J)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ ThemeProvider,useTheme auto */ 
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = "object" == "undefined", x = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = react__WEBPACK_IMPORTED_MODULE_0__.useContext(x)) != null ? e : U;
}, J = (e)=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(x) ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, e.children) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R })=>{
    let [c, n] = react__WEBPACK_IMPORTED_MODULE_0__.useState(()=>H(m, l)), [T, y] = react__WEBPACK_IMPORTED_MODULE_0__.useState(()=>c === "system" ? E() : c), k = d ? Object.values(d) : a, S = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((o)=>{
        let r = o;
        if (!r) return;
        o === "system" && s && (r = E());
        let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g)=>{
            g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
        };
        if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
            let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
            P.style.colorScheme = D;
        }
        C == null || C();
    }, [
        p
    ]), f = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((o)=>{
        let r = typeof o == "function" ? o(c) : o;
        n(r);
        try {
            localStorage.setItem(m, r);
        } catch (v) {}
    }, [
        c
    ]), A = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((o)=>{
        let r = E(o);
        y(r), c === "system" && s && !e && S("system");
    }, [
        c,
        e
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        let o = window.matchMedia(I);
        return o.addListener(A), A(o), ()=>o.removeListener(A);
    }, [
        A
    ]), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        let o = (r)=>{
            r.key === m && (r.newValue ? n(r.newValue) : f(l));
        };
        return window.addEventListener("storage", o), ()=>window.removeEventListener("storage", o);
    }, [
        f
    ]), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        S(e != null ? e : c);
    }, [
        e,
        c
    ]);
    let Q = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            theme: c,
            setTheme: f,
            forcedTheme: e,
            resolvedTheme: c === "system" ? T : c,
            themes: s ? [
                ...a,
                "system"
            ] : a,
            systemTheme: s ? T : void 0
        }), [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(x.Provider, {
        value: Q
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w })=>{
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce:  false ? 0 : "",
        dangerouslySetInnerHTML: {
            __html: `(${M.toString()})(${p})`
        }
    });
}), H = (e, i)=>{
    if (O) return;
    let s;
    try {
        s = localStorage.getItem(e) || void 0;
    } catch (u) {}
    return s || i;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");



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

/***/ 97556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownArticleShell: () => (/* binding */ MarkdownArticleShell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _components_business_FancyboxRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71445);
/* harmony import */ var _components_mermaid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4316);
/* __next_internal_client_entry_do_not_use__ MarkdownArticleShell auto */ 


/** Wraps compiled Markdown (.md) React output: same Fancybox + Mermaid hooks as MdxContent. */ function MarkdownArticleShell({ children, fancyboxEnabled = false }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_business_FancyboxRoot__WEBPACK_IMPORTED_MODULE_1__/* .FancyboxRoot */ .T, {
        enabled: fancyboxEnabled,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                children,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_mermaid__WEBPACK_IMPORTED_MODULE_2__/* .MermaidRunner */ .U, {})
            ]
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [4545,2362,844,4485,2972,1243,8441,3794,7358], () => (__webpack_exec__(9618)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);