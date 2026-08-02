"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[774],{

/***/ 4260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Series: () => (/* binding */ Series)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(98500);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(78340);
;// ./node_modules/lucide-react/dist/esm/icons/book-marked.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const BookMarked = (0,createLucideIcon/* default */.A)("BookMarked", [
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

// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./src/contexts/SeriesContext.tsx
var SeriesContext = __webpack_require__(83718);
// EXTERNAL MODULE: ./src/components/ui/panel-list.tsx
var panel_list = __webpack_require__(9116);
;// ./src/components/layout/sidebar/Series.tsx
/* __next_internal_client_entry_do_not_use__ Series auto */ 





function Series() {
    const ctx = (0,SeriesContext/* useSeries */.N)();
    const t = (0,react_client/* useTranslations */.c)('series');
    if (!ctx || ctx.postsInSeries.length === 0) return null;
    const { series, postsInSeries, currentPostUrl } = ctx;
    const currentIndex = postsInSeries.findIndex((p)=>p.url === currentPostUrl);
    const currentPos = currentIndex >= 0 ? currentIndex + 1 : 0;
    const total = postsInSeries.length;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(panel_list/* PanelCard */.Hk, {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(BookMarked, {
            className: "h-4 w-4 shrink-0 stroke-[2] text-foreground",
            "aria-hidden": true
        }),
        title: t('title', {
            name: series
        }),
        trailing: `${currentPos}/${total}`,
        trailingAriaLabel: t('articleOfTotal', {
            current: currentPos,
            total
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(panel_list/* PanelList */.j3, {
            children: postsInSeries.map((post)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(panel_list/* PanelItem */.Kn, {
                    variant: post.url === currentPostUrl ? 'highlight' : 'default',
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: post.url,
                        children: post.title
                    })
                }, post._id))
        })
    });
}


/***/ }),

/***/ 5103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarVisibilityProvider: () => (/* binding */ SidebarVisibilityProvider),
/* harmony export */   i: () => (/* binding */ useSidebarVisibility)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ SidebarVisibilityProvider,useSidebarVisibility auto */ 

/** Persisted like next-themes (`theme` key); wide-viewport sidebar toggle only. */ const SIDEBAR_COLLAPSED_STORAGE_KEY = 'sidebar-collapsed';
function readCollapsedFromStorage() {
    if (false) {}
    try {
        const raw = window.localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY);
        if (raw === 'true') return true;
        if (raw === 'false') return false;
        return null;
    } catch  {
        return null;
    }
}
function writeCollapsedToStorage(collapsed) {
    try {
        window.localStorage.setItem(SIDEBAR_COLLAPSED_STORAGE_KEY, String(collapsed));
    } catch  {
    /* ignore quota / private mode */ }
}
const defaultValue = {
    hasSidebar: false,
    setHasSidebar: ()=>{},
    collapsed: false,
    toggleSidebar: ()=>{}
};
const SidebarVisibilityContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultValue);
function SidebarVisibilityProvider({ children }) {
    const [hasSidebar, setHasSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const stored = readCollapsedFromStorage();
        if (stored === true) {
            setCollapsed(true);
            document.documentElement.setAttribute('data-sidebar-collapsed', 'true');
        } else if (stored === false) {
            setCollapsed(false);
            document.documentElement.removeAttribute('data-sidebar-collapsed');
        }
    }, []);
    const toggleSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setCollapsed((c)=>{
            const next = !c;
            writeCollapsedToStorage(next);
            if (next) {
                document.documentElement.setAttribute('data-sidebar-collapsed', 'true');
            } else {
                document.documentElement.removeAttribute('data-sidebar-collapsed');
            }
            return next;
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SidebarVisibilityContext.Provider, {
        value: {
            hasSidebar,
            setHasSidebar,
            collapsed,
            toggleSidebar
        },
        children: children
    });
}
function useSidebarVisibility() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SidebarVisibilityContext);
}


/***/ }),

/***/ 21935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageTransition: () => (/* binding */ PageTransition)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73321);
/* harmony import */ var _contexts_ReadingModeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37444);
/* __next_internal_client_entry_do_not_use__ PageTransition auto */ 


/**
 * Wraps content and runs enter animation on route change (pathname as key).
 * Used for the content below the header so the header (with background-attachment: fixed) stays outside and does not jump.
 *
 * When reading mode is active, the key is dropped and animations are disabled
 * so that #post-content (a fixed overlay) is not torn down and rebuilt during
 * client-side navigation — which would cause a jarring exit/re-enter flash.
 */ function PageTransition({ children }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
    const { readingMode } = (0,_contexts_ReadingModeContext__WEBPACK_IMPORTED_MODULE_2__/* .useReadingMode */ .J)();
    // Always return a <div> so React reconciliation stays consistent.
    // Only vary the key (which drives the enter animation) and animation classes.
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: readingMode ? '' : 'animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out',
        children: children
    }, readingMode ? undefined : pathname);
}


/***/ }),

/***/ 23857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InnerPageLayoutContent: () => (/* binding */ InnerPageLayoutContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _contexts_SidebarVisibilityContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5103);
/* __next_internal_client_entry_do_not_use__ InnerPageLayoutContent auto */ 


const SECTION_OVERLAP = '-mt-19';
function InnerPageLayoutContent({ showSidebar, sidebarContent, contentMaxWidth, noContentPadding, pageContentLabel, children }) {
    const { setHasSidebar, collapsed } = (0,_contexts_SidebarVisibilityContext__WEBPACK_IMPORTED_MODULE_2__/* .useSidebarVisibility */ .i)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setHasSidebar(showSidebar);
        return ()=>setHasSidebar(false);
    }, [
        showSidebar,
        setHasSidebar
    ]);
    const sidebarVisible = showSidebar && !collapsed;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `relative z-20 mx-auto max-w-[1400px] ${SECTION_OVERLAP} flex flex-col gap-6 pb-16 md:pb-20 lg:pb-24 lg:flex-row ${noContentPadding ? 'md:px-6 lg:px-20' : 'px-4 md:px-6 lg:px-20'}`,
        children: [
            sidebarVisible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                "data-inner-sidebar": true,
                className: "order-2 lg:order-1 w-full min-w-0 shrink-0 lg:w-[22%]",
                children: sidebarContent
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                "data-inner-main": showSidebar ? '' : undefined,
                className: contentMaxWidth ? `order-1 lg:order-2 min-w-0 w-full md:mx-auto md:max-w-[980px] ${sidebarVisible ? 'lg:w-[78%]' : ''}` : sidebarVisible ? `order-1 lg:order-2 min-w-0 lg:w-[78%] w-full` : 'w-full',
                "aria-label": pageContentLabel,
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 37444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ useReadingMode),
/* harmony export */   ReadingModeProvider: () => (/* binding */ ReadingModeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73321);
/* __next_internal_client_entry_do_not_use__ ReadingModeProvider,useReadingMode auto */ 


const READING_MODE_STORAGE_KEY = 'reading-mode';
function readReadingModeFromStorage() {
    if (false) {}
    try {
        const raw = window.localStorage.getItem(READING_MODE_STORAGE_KEY);
        if (raw === 'true') return true;
        if (raw === 'false') return false;
        return null;
    } catch  {
        return null;
    }
}
function writeReadingModeToStorage(enabled) {
    try {
        window.localStorage.setItem(READING_MODE_STORAGE_KEY, String(enabled));
    } catch  {
    /* ignore quota / private mode */ }
}
const defaultValue = {
    readingMode: false,
    toggleReadingMode: ()=>{}
};
const ReadingModeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultValue);
function ReadingModeProvider({ children }) {
    const [readingMode, setReadingMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const readingModeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(readingMode);
    // Keep ref in sync for pathname-based exit check
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        readingModeRef.current = readingMode;
    }, [
        readingMode
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const stored = readReadingModeFromStorage();
        if (stored === true) {
            setReadingMode(true);
            document.documentElement.setAttribute('data-reading-mode', 'true');
            document.documentElement.style.setProperty('background', 'hsl(var(--background))');
        } else if (stored === false) {
            setReadingMode(false);
            document.documentElement.removeAttribute('data-reading-mode');
            document.documentElement.style.removeProperty('background');
        }
    }, []);
    const toggleReadingMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setReadingMode((prev)=>{
            const next = !prev;
            writeReadingModeToStorage(next);
            if (next) {
                document.documentElement.setAttribute('data-reading-mode', 'true');
                document.documentElement.style.setProperty('background', 'hsl(var(--background))');
                // Trigger fade-in animation on first entry only.
                // The attribute is removed after 250ms so it does NOT replay on navigation.
                document.documentElement.setAttribute('data-reading-mode-entering', 'true');
                setTimeout(()=>{
                    document.documentElement.removeAttribute('data-reading-mode-entering');
                }, 250);
            } else {
                document.documentElement.removeAttribute('data-reading-mode');
                document.documentElement.removeAttribute('data-reading-mode-entering');
                document.documentElement.style.removeProperty('background');
            }
            return next;
        });
    }, []);
    // Auto-exit reading mode when navigating to a page that doesn't support it.
    // Uses pathname + DOM check instead of readingModeAvailable to avoid race
    // conditions during client-side navigation between post pages.
    // Double-RAF ensures we check AFTER React has committed the new page's DOM.
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!readingModeRef.current) return;
        let raf1;
        let raf2;
        raf1 = requestAnimationFrame(()=>{
            raf2 = requestAnimationFrame(()=>{
                const article = document.getElementById('post-content');
                const enabled = article?.getAttribute('data-reading-mode-enabled') === 'true';
                if (!enabled && readingModeRef.current) {
                    setReadingMode(false);
                    writeReadingModeToStorage(false);
                    document.documentElement.removeAttribute('data-reading-mode');
                    document.documentElement.style.removeProperty('background');
                }
            });
        });
        return ()=>{
            cancelAnimationFrame(raf1);
            cancelAnimationFrame(raf2);
        };
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReadingModeContext.Provider, {
        value: {
            readingMode,
            toggleReadingMode
        },
        children: children
    });
}
function useReadingMode() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ReadingModeContext);
}


/***/ }),

/***/ 45054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toc: () => (/* binding */ Toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _barrel_optimize_names_List_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38194);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50910);
/* harmony import */ var _contexts_HeadingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52540);
/* harmony import */ var _contexts_OnContentRevealContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90824);
/* harmony import */ var _components_ui_panel_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9116);
/* harmony import */ var _lib_classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74767);
/* __next_internal_client_entry_do_not_use__ Toc auto */ 







const BUFFER = 24;
const DEFAULT_HEADER_HEIGHT = 64;
function getScrollThreshold() {
    const siteNav = document.querySelector('.site-nav');
    const banner = document.querySelector('[data-toc-banner]');
    const navHeight = siteNav?.getBoundingClientRect().height ?? DEFAULT_HEADER_HEIGHT;
    const bannerHeight = banner?.getBoundingClientRect().height ?? 0;
    return navHeight + bannerHeight + BUFFER;
}
/** Offset for scrolling to a heading on TOC click – only the sticky nav matters. */ function getClickScrollOffset() {
    const siteNav = document.querySelector('.site-nav');
    const navHeight = siteNav?.getBoundingClientRect().height ?? DEFAULT_HEADER_HEIGHT;
    return navHeight + BUFFER;
}
/** Legacy cached/encrypted HTML may prefix heading ids with `user-content-`. */ function getHeadingElement(id) {
    return document.getElementById(id) ?? document.getElementById(`user-content-${id}`);
}
/** Map location hash to a TOC item id when hash uses the legacy prefix. */ function hashToTocItemId(hash, ids) {
    if (!hash) return null;
    if (ids.includes(hash)) return hash;
    const prefix = 'user-content-';
    if (hash.startsWith(prefix)) {
        const stripped = hash.slice(prefix.length);
        if (ids.includes(stripped)) return stripped;
    }
    return null;
}
function getReadingProgress() {
    const article = document.getElementById('post-content') ?? document.querySelector('article');
    if (!article) return 0;
    const rect = article.getBoundingClientRect();
    const articleTop = rect.top + (window.scrollY ?? document.documentElement.scrollTop);
    const articleHeight = article.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY ?? document.documentElement.scrollTop;
    if (articleHeight <= viewportHeight) {
        if (rect.bottom <= 0) return 100;
        if (rect.top >= viewportHeight) return 0;
        return 100;
    }
    const scrollable = articleHeight - viewportHeight;
    const scrolled = Math.max(0, Math.min(scrollTop - articleTop, articleHeight));
    return Math.min(100, Math.round(scrolled / scrollable * 100));
}
/** Index of the parent heading (previous item with smaller level), or -1 if none (root). */ function getParentIndex(items, index) {
    if (index <= 0) return -1;
    const level = items[index].level;
    for(let j = index - 1; j >= 0; j--){
        if (items[j].level < level) return j;
    }
    return -1;
}
/** Path from root to activeId (ancestors + self). */ function getPathIds(items, activeId) {
    const path = new Set();
    if (!items.length || !activeId) return path;
    const activeIdx = items.findIndex((i)=>i.id === activeId);
    if (activeIdx < 0) return path;
    path.add(items[activeIdx].id);
    let minLevel = items[activeIdx].level;
    for(let i = activeIdx - 1; i >= 0; i--){
        if (items[i].level < minLevel) {
            path.add(items[i].id);
            minLevel = items[i].level;
        }
    }
    return path;
}
/** Path + siblings of every node on the path (ancestors' and active's siblings). */ function getPathAndSiblingIds(items, pathIds) {
    const out = new Set(pathIds);
    if (!items.length) return out;
    for (const id of Array.from(pathIds)){
        const idx = items.findIndex((i)=>i.id === id);
        if (idx < 0) continue;
        const parentIdx = getParentIndex(items, idx);
        const level = items[idx].level;
        for(let k = 0; k < items.length; k++){
            if (getParentIndex(items, k) === parentIdx && items[k].level === level) {
                out.add(items[k].id);
            }
        }
    }
    return out;
}
const LOCK_DISPLAY_MS = 500;
/** Tailwind lg breakpoint (min-width); sidebar stacks below content below this width. */ const LG_MIN_WIDTH_PX = 1024;
/**
 * Scroll only inside `scrollParent` so the active TOC row stays visible.
 * Avoids `Element.scrollIntoView`, which also scrolls the window and jumps the page on mobile
 * when the TOC sits below the article.
 */ function scrollRowIntoScrollParent(scrollParent, row, padding = 8) {
    const parentRect = scrollParent.getBoundingClientRect();
    const rowRect = row.getBoundingClientRect();
    const rowTopInContent = rowRect.top - parentRect.top + scrollParent.scrollTop;
    const rowBottomInContent = rowTopInContent + row.offsetHeight;
    const viewTop = scrollParent.scrollTop;
    const viewBottom = viewTop + scrollParent.clientHeight;
    if (rowTopInContent < viewTop + padding) {
        scrollParent.scrollTop = Math.max(0, rowTopInContent - padding);
    } else if (rowBottomInContent > viewBottom - padding) {
        scrollParent.scrollTop = rowBottomInContent - scrollParent.clientHeight + padding;
    }
}
function Toc() {
    const items = (0,_contexts_HeadingsContext__WEBPACK_IMPORTED_MODULE_2__/* .useHeadings */ .l)();
    const onReveal = (0,_contexts_OnContentRevealContext__WEBPACK_IMPORTED_MODULE_3__/* .useOnContentReveal */ .D)();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('toc');
    const [activeId, setActiveId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [lockDisplayToHash, setLockDisplayToHash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isLgViewport, setIsLgViewport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const lockTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const tocScrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const updateActiveRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(()=>{});
    const updateProgressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(()=>{});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const mql = window.matchMedia(`(min-width: ${LG_MIN_WIDTH_PX}px)`);
        const handler = ()=>setIsLgViewport(mql.matches);
        handler();
        mql.addEventListener('change', handler);
        return ()=>mql.removeEventListener('change', handler);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!items || items.length === 0) return;
        const ids = items.map((i)=>i.id);
        const threshold = getScrollThreshold();
        const updateActive = ()=>{
            const hashRaw =  true && window.location.hash ? window.location.hash.slice(1) : '';
            const hashTocId = hashToTocItemId(hashRaw, ids);
            if (hashTocId) {
                const hashEl = getHeadingElement(hashTocId);
                if (hashEl) {
                    const rect = hashEl.getBoundingClientRect();
                    const vh =  true ? window.innerHeight : 0;
                    if (rect.top < vh && rect.bottom > 0) {
                        setActiveId(hashTocId);
                        return;
                    }
                }
            }
            let current = null;
            for(let i = ids.length - 1; i >= 0; i--){
                const el = getHeadingElement(ids[i]);
                if (el) {
                    const top = el.getBoundingClientRect().top;
                    if (top <= threshold) {
                        current = ids[i];
                        break;
                    }
                }
            }
            if (current === null && ids.length > 0) {
                const firstEl = getHeadingElement(ids[0]);
                const lastEl = getHeadingElement(ids[ids.length - 1]);
                if (firstEl && lastEl) {
                    const firstTop = firstEl.getBoundingClientRect().top;
                    const lastBottom = lastEl.getBoundingClientRect().bottom;
                    if (firstTop > threshold) current = ids[0];
                    else if (lastBottom <= threshold) current = ids[ids.length - 1];
                }
                if (current === null) current = ids[0];
            }
            setActiveId(current);
        };
        const updateProgress = ()=>{
            setProgress(getReadingProgress());
        };
        updateActiveRef.current = updateActive;
        updateProgressRef.current = updateProgress;
        const handleScroll = ()=>{
            updateActive();
            updateProgress();
        };
        const onHashChange = ()=>{
            updateActive();
            setLockDisplayToHash(true);
            if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
            lockTimeoutRef.current = setTimeout(()=>{
                lockTimeoutRef.current = null;
                setLockDisplayToHash(false);
            }, LOCK_DISPLAY_MS);
        };
        updateActive();
        updateProgress();
        const tId = setTimeout(updateActive, 100);
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        window.addEventListener('hashchange', onHashChange);
        return ()=>{
            clearTimeout(tId);
            if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', onHashChange);
        };
    }, [
        items
    ]);
    /** Re-run scroll spy after encrypted content mounts (headings appear in DOM after decrypt). */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!items || items.length === 0) return;
        const unregister = onReveal?.register?.(()=>{
            updateActiveRef.current();
            updateProgressRef.current();
        });
        return unregister;
    }, [
        items,
        onReveal
    ]);
    const effectiveActiveId = activeId ?? (items && items.length > 0 ? items[0].id : null);
    const hashId =  true && typeof window.location !== 'undefined' ? hashToTocItemId((window.location.hash || '').slice(1), items?.map((i)=>i.id) ?? []) : null;
    const hashInItems = hashId != null;
    const displayActiveId = lockDisplayToHash && hashInItems ? hashId : effectiveActiveId;
    /** Keep the highlighted TOC row inside the scrollable panel when the active heading changes. */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!displayActiveId) return;
        const root = tocScrollRef.current;
        if (!root) return;
        const row = root.querySelector(`[data-toc-item="${CSS.escape(displayActiveId)}"]`);
        if (!row) return;
        const raf = requestAnimationFrame(()=>{
            scrollRowIntoScrollParent(root, row);
        });
        return ()=>cancelAnimationFrame(raf);
    }, [
        displayActiveId
    ]);
    const displayedIds = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!items || items.length === 0) return new Set();
        // Below lg the sidebar sits under the article; show the full TOC tree.
        if (isLgViewport !== true) {
            return new Set(items.map((i)=>i.id));
        }
        const pathIds = getPathIds(items, displayActiveId);
        const pathAndSiblingIds = getPathAndSiblingIds(items, pathIds);
        const show = items.filter((item)=>pathAndSiblingIds.has(item.id) || item.level === 1);
        return show.length > 0 ? new Set(show.map((s)=>s.id)) : new Set(items.map((i)=>i.id));
    }, [
        items,
        displayActiveId,
        isLgViewport
    ]);
    if (!items || items.length === 0) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
        "aria-label": t('onThisPage'),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_4__/* .PanelCard */ .Hk, {
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_List_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                className: "h-4 w-4 shrink-0 stroke-[2] text-foreground",
                "aria-hidden": true
            }),
            title: t('onThisPage'),
            trailing: `${progress}%`,
            trailingAriaLabel: t('readingProgress', {
                progress
            }),
            contentClassName: "min-w-0 min-h-0 overflow-visible",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                ref: tocScrollRef,
                className: "min-h-0 max-h-[min(32rem,calc(100dvh-10rem))] overflow-y-auto overflow-x-hidden overscroll-contain pr-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_4__/* .PanelList */ .j3, {
                    children: items.map((item)=>{
                        const isDisplayed = displayedIds.has(item.id);
                        const isActive = displayActiveId === item.id;
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_4__/* .PanelItem */ .Kn, {
                            variant: isActive ? 'highlight' : 'default',
                            style: {
                                paddingLeft: `${0.5 + item.level * 0.25}rem`
                            },
                            liClassName: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_7__.cn)('toc-item transition-[max-height,opacity,margin] duration-200 ease-out wrap-break-word', // Hidden rows use maxHeight:0; clip overflow so inner min-h does not inflate the scroll parent.
                            isDisplayed ? 'overflow-visible' : 'overflow-hidden'),
                            liStyle: {
                                maxHeight: isDisplayed ? 200 : 0,
                                opacity: isDisplayed ? 1 : 0,
                                marginTop: isDisplayed ? undefined : 0,
                                marginBottom: isDisplayed ? undefined : 0
                            },
                            liProps: {
                                'data-toc-item': item.id
                            },
                            liHidden: !isDisplayed,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                href: `#${item.id}`,
                                onClick: (e)=>{
                                    const el = getHeadingElement(item.id);
                                    if (!el) return;
                                    e.preventDefault();
                                    const top = el.getBoundingClientRect().top + window.scrollY - getClickScrollOffset();
                                    window.scrollTo({
                                        top,
                                        behavior: 'smooth'
                                    });
                                    history.replaceState(null, '', `#${el.id}`);
                                    setActiveId(item.id);
                                    setLockDisplayToHash(true);
                                    if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
                                    lockTimeoutRef.current = setTimeout(()=>{
                                        lockTimeoutRef.current = null;
                                        setLockDisplayToHash(false);
                                    }, LOCK_DISPLAY_MS);
                                },
                                children: item.text
                            })
                        }, item.id);
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 46900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  QuickLinks: () => (/* binding */ QuickLinks)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(98500);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./src/contexts/SiteConfigContext.tsx
var SiteConfigContext = __webpack_require__(90682);
// EXTERNAL MODULE: ./src/lib/app-path.ts
var app_path = __webpack_require__(69082);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(78340);
;// ./node_modules/lucide-react/dist/esm/icons/layers.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Layers = (0,createLucideIcon/* default */.A)("Layers", [
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

// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(89239);
// EXTERNAL MODULE: ./src/components/ui/card.tsx
var card = __webpack_require__(81477);
;// ./src/components/layout/sidebar/QuickLinks.tsx
/* __next_internal_client_entry_do_not_use__ QuickLinks auto */ 







function QuickLinks() {
    const { menuTitles, homeBreadcrumbLabel } = (0,SiteConfigContext/* useSiteConfig */.z)();
    const t = (0,react_client/* useTranslations */.c)('quickLinks');
    const tNav = (0,react_client/* useTranslations */.c)('nav');
    const tCommon = (0,react_client/* useTranslations */.c)('common');
    const homeLabel = homeBreadcrumbLabel === 'Blog' ? tCommon('blogFallback') : homeBreadcrumbLabel;
    const DEFAULT_ITEMS = [
        {
            href: '/',
            label: homeLabel
        },
        {
            href: (0,app_path/* internalHref */.dI)('/categories'),
            label: menuTitles.categories ?? tNav('categories')
        },
        {
            href: (0,app_path/* internalHref */.dI)('/tags'),
            label: menuTitles.tags ?? tNav('tags')
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zp, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardHeader */.aR, {
                className: "space-y-0 p-5 pb-2",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex items-center justify-between",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2 font-bold text-foreground",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Layers, {
                                className: "h-4 w-4 shrink-0 stroke-[2] text-foreground",
                                "aria-hidden": true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-sm uppercase tracking-widest",
                                children: t('title')
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.Wu, {
                className: "px-3 py-4 pt-2",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                    className: "space-y-0.5 text-sm",
                    children: DEFAULT_ITEMS.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                asChild: true,
                                variant: "ghost",
                                size: "sm",
                                className: "w-full justify-start rounded-md px-3 py-1.5 text-left text-sm font-normal text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                    href: item.href,
                                    children: item.label
                                })
                            })
                        }, item.href))
                })
            })
        ]
    });
}


/***/ }),

/***/ 52540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useSetHeadings),
/* harmony export */   HeadingsProvider: () => (/* binding */ HeadingsProvider),
/* harmony export */   l: () => (/* binding */ useHeadings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ HeadingsProvider,useHeadings,useSetHeadings auto */ 

const HeadingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function HeadingsProvider({ headings: initialHeadings, children }) {
    const [headings, setHeadings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialHeadings);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeadingsContext.Provider, {
        value: {
            headings,
            setHeadings
        },
        children: children
    });
}
function useHeadings() {
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(HeadingsContext);
    return ctx?.headings ?? null;
}
function useSetHeadings() {
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(HeadingsContext);
    return ctx?.setHeadings ?? (()=>{});
}


/***/ }),

/***/ 53434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadingModeNotifier: () => (/* binding */ ReadingModeNotifier)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73321);
/* harmony import */ var _contexts_ReadingModeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37444);
/* __next_internal_client_entry_do_not_use__ ReadingModeNotifier auto */ 


const HEADER_ID = 'reading-mode-header';
const BREADCRUMB_ID = 'reading-mode-breadcrumb';
/** Inline ChevronRight SVG matching lucide-react size (h-3.5 w-3.5). */ const CHEVRON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>';
function removeElement(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}
function parseBreadcrumbSegments() {
    const script = document.getElementById('banner-breadcrumb-segments');
    if (!script) return [];
    try {
        const raw = script.textContent;
        if (!raw) return [];
        return JSON.parse(raw);
    } catch  {
        return [];
    }
}
/**
 * Create the injected reading-mode breadcrumb nav.
 * Returns a cleanup function that removes event listeners.
 */ function injectBreadcrumb(onNavigate) {
    const article = document.getElementById('post-content');
    if (!article) return;
    removeElement(BREADCRUMB_ID);
    const bannerSegments = parseBreadcrumbSegments();
    if (bannerSegments.length === 0) return;
    // Prepend "首页" since the banner breadcrumb doesn't include it
    const homeLabel = article.getAttribute('data-breadcrumb-home-label') || 'Home';
    const segments = [
        {
            label: homeLabel,
            href: '/'
        },
        ...bannerSegments
    ];
    const nav = document.createElement('nav');
    nav.id = BREADCRUMB_ID;
    nav.setAttribute('aria-label', 'breadcrumb');
    const ol = document.createElement('ol');
    ol.className = 'flex flex-wrap items-center gap-1.5 wrap-break-word text-sm text-muted-foreground sm:gap-2.5';
    ol.style.margin = '0';
    ol.style.padding = '0';
    ol.style.listStyle = 'none';
    segments.forEach((seg, i)=>{
        const isLast = i === segments.length - 1;
        // Separator before every item except the first
        if (i > 0) {
            const sepLi = document.createElement('li');
            sepLi.setAttribute('role', 'presentation');
            sepLi.setAttribute('aria-hidden', 'true');
            sepLi.className = '[&>svg]:h-3.5 [&>svg]:w-3.5';
            sepLi.innerHTML = CHEVRON_SVG;
            ol.appendChild(sepLi);
        }
        const li = document.createElement('li');
        li.className = 'inline-flex items-center gap-1.5';
        if (isLast || !seg.href) {
            // Current page (last item) or non-link label (e.g. "分类")
            const span = document.createElement('span');
            if (isLast) {
                span.setAttribute('aria-current', 'page');
                span.setAttribute('aria-disabled', 'true');
            }
            span.className = seg.muted || !isLast ? 'text-muted-foreground' : 'font-normal text-foreground';
            span.textContent = seg.label;
            li.appendChild(span);
        } else {
            const a = document.createElement('a');
            a.href = seg.href;
            a.className = 'transition-colors hover:text-foreground text-muted-foreground';
            a.textContent = seg.label;
            li.appendChild(a);
        }
        ol.appendChild(li);
    });
    // Click delegation: intercept <a> clicks for client-side navigation
    const handleClick = (e)=>{
        const target = e.target;
        const anchor = target.closest('a');
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (href && !/^(https?:|mailto:|tel:|\/\/)/i.test(href)) {
            e.preventDefault();
            onNavigate(href);
        }
    };
    nav.addEventListener('click', handleClick);
    nav.appendChild(ol);
    article.prepend(nav);
    return ()=>nav.removeEventListener('click', handleClick);
}
function injectHeader() {
    const article = document.getElementById('post-content');
    if (!article) return;
    removeElement(HEADER_ID);
    const title = article.getAttribute('data-post-title') || '';
    const date = article.getAttribute('data-post-date') || '';
    const desc = article.getAttribute('data-post-description') || '';
    const header = document.createElement('div');
    header.id = HEADER_ID;
    const titleEl = document.createElement('h1');
    titleEl.textContent = title;
    header.appendChild(titleEl);
    if (date) {
        const dateEl = document.createElement('time');
        dateEl.textContent = date;
        header.appendChild(dateEl);
    }
    if (desc) {
        const descEl = document.createElement('p');
        descEl.textContent = desc;
        header.appendChild(descEl);
    }
    article.prepend(header);
}
function removeInjected() {
    removeElement(BREADCRUMB_ID);
    removeElement(HEADER_ID);
}
function ReadingModeNotifier() {
    const { readingMode } = (0,_contexts_ReadingModeContext__WEBPACK_IMPORTED_MODULE_2__/* .useReadingMode */ .J)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const breadcrumbCleanupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
    const handleNavigate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((href)=>{
        router.push(href);
    }, [
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (readingMode) {
            injectHeader();
            breadcrumbCleanupRef.current = injectBreadcrumb(handleNavigate);
        } else {
            removeInjected();
            breadcrumbCleanupRef.current?.();
            breadcrumbCleanupRef.current = undefined;
        }
        return ()=>{
            breadcrumbCleanupRef.current?.();
        };
    }, [
        readingMode,
        handleNavigate
    ]);
    // Cleanup on unmount
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            breadcrumbCleanupRef.current?.();
            removeInjected();
        };
    }, []);
    return null;
}


/***/ }),

/***/ 73321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74645);
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "usePathname")) __webpack_require__.d(__webpack_exports__, { usePathname: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useRouter")) __webpack_require__.d(__webpack_exports__, { useRouter: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter; } });


//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 76451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorCard: () => (/* binding */ AuthorCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _components_business_FadeInNextImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54378);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98500);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50910);
/* harmony import */ var _barrel_optimize_names_FiExternalLink_FiMail_FiMessageCircle_FiRss_react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35137);
/* harmony import */ var _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33282);
/* harmony import */ var _contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90682);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81477);
/* harmony import */ var _lib_app_path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69082);
/* __next_internal_client_entry_do_not_use__ AuthorCard auto */ 








/** Only these icons are bundled; add more here if needed. Unknown names fall back to FiExternalLink. */ const SOCIAL_ICON_MAP = {
    Github: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiGithub */ .SrF,
    Mail: _barrel_optimize_names_FiExternalLink_FiMail_FiMessageCircle_FiRss_react_icons_fi__WEBPACK_IMPORTED_MODULE_6__/* .FiMail */ .pHD,
    Linkedin: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiLinkedin */ .d58,
    X: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiX */ .vIh,
    Twitter: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiX */ .vIh,
    Rss: _barrel_optimize_names_FiExternalLink_FiMail_FiMessageCircle_FiRss_react_icons_fi__WEBPACK_IMPORTED_MODULE_6__/* .FiRss */ .i2R,
    MessageCircle: _barrel_optimize_names_FiExternalLink_FiMail_FiMessageCircle_FiRss_react_icons_fi__WEBPACK_IMPORTED_MODULE_6__/* .FiMessageCircle */ .X6_,
    ExternalLink: _barrel_optimize_names_FiExternalLink_FiMail_FiMessageCircle_FiRss_react_icons_fi__WEBPACK_IMPORTED_MODULE_6__/* .FiExternalLink */ .HaR,
    Facebook: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiFacebook */ .toy,
    Youtube: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiYoutube */ .KVB,
    Bilibili: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiBilibili */ .BGx,
    Weibo: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiSinaweibo */ .e0z,
    Tiktok: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiTiktok */ .lhl,
    Baidu: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiBaidu */ .Az5,
    Qq: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiTencentqq */ .iwS,
    Wechat: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiWechat */ .tnV,
    Discord: _barrel_optimize_names_SiBaidu_SiBilibili_SiDiscord_SiFacebook_SiGithub_SiLinkedin_SiSinaweibo_SiTencentqq_SiTiktok_SiWechat_SiX_SiYoutube_react_icons_si__WEBPACK_IMPORTED_MODULE_5__/* .SiDiscord */ .Nxe
};
function getSocialIcon(iconName) {
    const key = iconName.replace(/\s+/g, '') || 'ExternalLink';
    return SOCIAL_ICON_MAP[key] ?? _barrel_optimize_names_FiExternalLink_FiMail_FiMessageCircle_FiRss_react_icons_fi__WEBPACK_IMPORTED_MODULE_6__/* .FiExternalLink */ .HaR;
}
function AuthorCard() {
    const { author: configAuthor, description: configDescription, authorCard: authorCardConfig, stats, rssEnabled, imageFadeInEnabled = false } = (0,_contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_3__/* .useSiteConfig */ .z)();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_7__/* .useTranslations */ .c)('common');
    const tNav = (0,next_intl__WEBPACK_IMPORTED_MODULE_7__/* .useTranslations */ .c)('nav');
    const name = authorCardConfig?.name?.trim() || configAuthor || t('authorLabel');
    const motto = authorCardConfig?.motto?.trim() || configDescription || t('authorDescription');
    const avatarUrl = authorCardConfig?.avatar?.trim();
    const rawSocialLinks = authorCardConfig?.socialLinks ?? [];
    const socialLinks = rssEnabled ? rawSocialLinks : rawSocialLinks.filter((item)=>!item.url.endsWith('rss.xml') && !item.url.endsWith('feed.xml'));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zp, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .Wu, {
            className: "flex flex-col items-center p-6 text-center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "relative mb-4 flex h-20 w-20 shrink-0 overflow-hidden rounded-full border-ui bg-muted shadow-card",
                    children: avatarUrl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_business_FadeInNextImage__WEBPACK_IMPORTED_MODULE_1__/* .FadeInNextImage */ .A, {
                        enabled: imageFadeInEnabled,
                        src: avatarUrl,
                        alt: "",
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "flex h-full w-full items-center justify-center text-xl font-semibold text-primary-foreground",
                        children: name.charAt(0).toUpperCase()
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                    className: "text-base font-medium text-foreground",
                    children: name
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "mt-3 mb-2 text-sm leading-relaxed text-muted-foreground",
                    children: motto
                }),
                socialLinks.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "mb-2 flex flex-wrap items-center justify-center gap-1",
                    children: socialLinks.map((item)=>{
                        const Icon = getSocialIcon(item.icon);
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: item.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                            "aria-label": item.name,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, {
                                className: "size-5 shrink-0",
                                "aria-hidden": true
                            })
                        }, item.url);
                    })
                }),
                stats && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid w-full grid-cols-3 gap-2 border-t border-border pt-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: (0,_lib_app_path__WEBPACK_IMPORTED_MODULE_8__/* .internalHref */ .dI)('/categories'),
                            className: "flex flex-col rounded-md transition-colors hover:bg-muted/50",
                            "aria-label": tNav('categories'),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "text-xs font-medium text-foreground",
                                    children: tNav('categories')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "text-sm tabular-nums text-muted-foreground",
                                    children: stats.categoriesCount
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: (0,_lib_app_path__WEBPACK_IMPORTED_MODULE_8__/* .internalHref */ .dI)('/tags'),
                            className: "flex flex-col rounded-md transition-colors hover:bg-muted/50",
                            "aria-label": tNav('tags'),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "text-xs font-medium text-foreground",
                                    children: tNav('tags')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "text-sm tabular-nums text-muted-foreground",
                                    children: stats.tagsCount
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: (0,_lib_app_path__WEBPACK_IMPORTED_MODULE_8__/* .internalHref */ .dI)('/archives'),
                            className: "flex flex-col rounded-md transition-colors hover:bg-muted/50",
                            "aria-label": tNav('archives'),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "text-xs font-medium text-foreground",
                                    children: tNav('archives')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "text-sm tabular-nums text-muted-foreground",
                                    children: stats.archivesCount
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 83718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useSeries),
/* harmony export */   SeriesProvider: () => (/* binding */ SeriesProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ SeriesProvider,useSeries auto */ 

const SeriesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function SeriesProvider({ value, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SeriesContext.Provider, {
        value: value,
        children: children
    });
}
function useSeries() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SeriesContext);
}


/***/ }),

/***/ 91348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderBackground: () => (/* binding */ HeaderBackground)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73321);
/* __next_internal_client_entry_do_not_use__ HeaderBackground auto */ 


const HEADER_BG_STORAGE_KEY = 'header-bg-last-url';
const HEADER_BG_FADE_MS = 500;
const headerBackgroundLayerStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};
/** Detect touch devices at module load so the first render is correct. */ function isTouchDevice() {
    if (false) {}
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
let _isTouchDevice;
function getIsTouchDevice() {
    if (_isTouchDevice === undefined) _isTouchDevice = isTouchDevice();
    return _isTouchDevice;
}
/** Module-persisted URL so crossfade survives route component remounts. */ let lastHeaderBackgroundUrl = null;
function getLastHeaderBackgroundUrl() {
    if (lastHeaderBackgroundUrl) return lastHeaderBackgroundUrl;
    if (false) {}
    try {
        return sessionStorage.getItem(HEADER_BG_STORAGE_KEY);
    } catch  {
        return null;
    }
}
function setLastHeaderBackgroundUrl(url) {
    lastHeaderBackgroundUrl = url;
    if (false) {}
    try {
        if (url) sessionStorage.setItem(HEADER_BG_STORAGE_KEY, url);
        else sessionStorage.removeItem(HEADER_BG_STORAGE_KEY);
    } catch  {
    // sessionStorage unavailable (private mode, etc.)
    }
}
function pickHeaderBackgroundUrl(candidates) {
    if (!candidates.length) return undefined;
    return candidates[Math.floor(Math.random() * candidates.length)];
}
function preloadHeaderBackgroundImage(url) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve();
        img.onerror = ()=>reject(new Error('Header background image failed to load'));
        img.src = url;
    });
}
const EMPTY_STACK = {
    baseUrl: null,
    topUrl: null,
    topAnimate: false
};
/** Dot mask only when no image layer exists yet and nothing is cached from a prior visit. */ function shouldShowLoadingMask(stack, persistedUrl) {
    if (stack.topUrl != null || stack.baseUrl != null) return false;
    if (persistedUrl != null) return false;
    return true;
}
function HeaderBackground({ candidates, className }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const candidatesKey = candidates.join('\0');
    const [stack, setStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(EMPTY_STACK);
    const [persistedUrl, setPersistedUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    /** False until sessionStorage is read; avoids SSR/hydration flash and refresh mask when a cached image exists. */ const [storageChecked, setStorageChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        const url = pickHeaderBackgroundUrl(candidates);
        const cachedUrl = getLastHeaderBackgroundUrl();
        setPersistedUrl(cachedUrl);
        setStorageChecked(true);
        if (!url) {
            setStack(EMPTY_STACK);
            return;
        }
        let cancelled = false;
        let collapseTimer;
        const previousUrl = cachedUrl;
        const collapseToTopOnly = (top)=>{
            collapseTimer = window.setTimeout(()=>{
                if (cancelled) return;
                setStack({
                    baseUrl: null,
                    topUrl: top,
                    topAnimate: false
                });
            }, HEADER_BG_FADE_MS);
        };
        const fadeInOverBase = (base, top)=>{
            if (cancelled) return;
            setStack({
                baseUrl: base,
                topUrl: top,
                topAnimate: true
            });
            setLastHeaderBackgroundUrl(top);
            collapseToTopOnly(top);
        };
        if (previousUrl === url) {
            setStack({
                baseUrl: null,
                topUrl: url,
                topAnimate: false
            });
            setLastHeaderBackgroundUrl(url);
            return;
        }
        if (previousUrl) {
            setStack({
                baseUrl: previousUrl,
                topUrl: null,
                topAnimate: false
            });
        } else {
            setStack(EMPTY_STACK);
        }
        void preloadHeaderBackgroundImage(url).then(()=>{
            fadeInOverBase(previousUrl ?? null, url);
        }, ()=>{
            if (cancelled) return;
            setStack({
                baseUrl: null,
                topUrl: url,
                topAnimate: false
            });
            setLastHeaderBackgroundUrl(url);
        });
        return ()=>{
            cancelled = true;
            if (collapseTimer) window.clearTimeout(collapseTimer);
        };
    }, [
        pathname,
        candidatesKey
    ]);
    if (!candidates.length) return null;
    const showLoadingMask = storageChecked && shouldShowLoadingMask(stack, persistedUrl);
    /** On iOS / touch devices, background-attachment: fixed causes the image
   *  to be sized against the document height instead of the viewport,
   *  making it appear zoomed-in.  Use scroll on those devices. */ const bgAttachmentStyle = getIsTouchDevice() ? {
        backgroundAttachment: 'scroll'
    } : {
        backgroundAttachment: 'fixed'
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (stack.topUrl || stack.baseUrl) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: className,
                "aria-hidden": true,
                children: [
                    stack.baseUrl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "absolute inset-0",
                        style: {
                            ...headerBackgroundLayerStyle,
                            ...bgAttachmentStyle,
                            backgroundImage: `url(${JSON.stringify(stack.baseUrl)})`
                        }
                    }),
                    stack.topUrl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: `absolute inset-0${stack.topAnimate ? ' header-bg-fade-in' : ''}`,
                        style: {
                            ...headerBackgroundLayerStyle,
                            ...bgAttachmentStyle,
                            backgroundImage: `url(${JSON.stringify(stack.topUrl)})`
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "absolute inset-0 bg-black/50",
                "aria-hidden": true
            }),
            showLoadingMask && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "absolute inset-0 header-dot-mask",
                "aria-hidden": true
            })
        ]
    });
}


/***/ })

}]);