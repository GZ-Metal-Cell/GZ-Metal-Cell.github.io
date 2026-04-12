"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1243],{

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

/***/ 10236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickLinks: () => (/* binding */ QuickLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98500);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50910);
/* harmony import */ var _contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90682);
/* harmony import */ var _lib_app_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69082);
/* harmony import */ var _barrel_optimize_names_Layers_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33024);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89239);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81477);
/* __next_internal_client_entry_do_not_use__ QuickLinks auto */ 







function QuickLinks() {
    const { menuTitles, homeBreadcrumbLabel } = (0,_contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_2__/* .useSiteConfig */ .z)();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('quickLinks');
    const tNav = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('nav');
    const tCommon = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('common');
    const homeLabel = homeBreadcrumbLabel === 'Blog' ? tCommon('blogFallback') : homeBreadcrumbLabel;
    const DEFAULT_ITEMS = [
        {
            href: '/',
            label: homeLabel
        },
        {
            href: (0,_lib_app_path__WEBPACK_IMPORTED_MODULE_6__/* .internalHref */ .dI)('/categories'),
            label: menuTitles.categories ?? tNav('categories')
        },
        {
            href: (0,_lib_app_path__WEBPACK_IMPORTED_MODULE_6__/* .internalHref */ .dI)('/tags'),
            label: menuTitles.tags ?? tNav('tags')
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zp, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .aR, {
                className: "space-y-0 p-5 pb-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex items-center justify-between",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-2 font-bold text-foreground",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Layers_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                className: "h-4 w-4 shrink-0 stroke-[2] text-foreground",
                                "aria-hidden": true
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-sm uppercase tracking-widest",
                                children: t('title')
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .Wu, {
                className: "px-3 py-4 pt-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                    className: "space-y-0.5 text-sm",
                    children: DEFAULT_ITEMS.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, {
                                asChild: true,
                                variant: "ghost",
                                size: "sm",
                                className: "w-full justify-start rounded-md px-3 py-1.5 text-left text-sm font-normal text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
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

/***/ 21935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageTransition: () => (/* binding */ PageTransition)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73321);
/* __next_internal_client_entry_do_not_use__ PageTransition auto */ 

/**
 * Wraps content and runs enter animation on route change (pathname as key).
 * Used for the content below the header so the header (with background-attachment: fixed) stays outside and does not jump.
 */ function PageTransition({ children }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out",
        children: children
    }, pathname);
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
        className: `relative z-20 mx-auto max-w-[1400px] ${SECTION_OVERLAP} flex flex-col gap-6 pb-24 lg:flex-row ${noContentPadding ? 'md:px-6 lg:px-24' : 'px-4 md:px-6 lg:px-24'}`,
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

/***/ 45054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toc: () => (/* binding */ Toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _barrel_optimize_names_List_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38194);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50910);
/* harmony import */ var _contexts_HeadingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52540);
/* harmony import */ var _components_ui_panel_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9116);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40980);
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
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_4__/* .useTranslations */ .c)('toc');
    const [activeId, setActiveId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [lockDisplayToHash, setLockDisplayToHash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const lockTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const tocScrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!items || items.length === 0) return;
        const ids = items.map((i)=>i.id);
        const threshold = getScrollThreshold();
        const updateActive = ()=>{
            const hashId =  true && window.location.hash ? window.location.hash.slice(1) : '';
            const hashInItems = hashId && ids.includes(hashId);
            if (hashInItems) {
                const hashEl = document.getElementById(hashId);
                if (hashEl) {
                    const rect = hashEl.getBoundingClientRect();
                    const vh =  true ? window.innerHeight : 0;
                    if (rect.top < vh && rect.bottom > 0) {
                        setActiveId(hashId);
                        return;
                    }
                }
            }
            let current = null;
            for(let i = ids.length - 1; i >= 0; i--){
                const el = document.getElementById(ids[i]);
                if (el) {
                    const top = el.getBoundingClientRect().top;
                    if (top <= threshold) {
                        current = ids[i];
                        break;
                    }
                }
            }
            if (current === null && ids.length > 0) {
                const firstEl = document.getElementById(ids[0]);
                const lastEl = document.getElementById(ids[ids.length - 1]);
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
    const effectiveActiveId = activeId ?? (items && items.length > 0 ? items[0].id : null);
    const hashId =  true && typeof window.location !== 'undefined' ? (window.location.hash || '').slice(1) : '';
    const hashInItems = (hashId && items?.some((i)=>i.id === hashId)) ?? false;
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
        const pathIds = getPathIds(items, displayActiveId);
        const pathAndSiblingIds = getPathAndSiblingIds(items, pathIds);
        const show = items.filter((item)=>pathAndSiblingIds.has(item.id) || item.level === 1);
        return show.length > 0 ? new Set(show.map((s)=>s.id)) : new Set(items.map((i)=>i.id));
    }, [
        items,
        displayActiveId
    ]);
    if (!items || items.length === 0) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
        "aria-label": t('onThisPage'),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_3__/* .PanelCard */ .Hk, {
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_List_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
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
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_3__/* .PanelList */ .j3, {
                    children: items.map((item)=>{
                        const isDisplayed = displayedIds.has(item.id);
                        const isActive = displayActiveId === item.id;
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_3__/* .PanelItem */ .Kn, {
                            variant: isActive ? 'highlight' : 'default',
                            style: {
                                paddingLeft: `${0.5 + item.level * 0.25}rem`
                            },
                            liClassName: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)('toc-item transition-[max-height,opacity,margin] duration-200 ease-out break-words', // Hidden rows use maxHeight:0; clip overflow so inner min-h does not inflate the scroll parent.
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

/***/ 55623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Series: () => (/* binding */ Series)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98500);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_BookMarked_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50770);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50910);
/* harmony import */ var _contexts_SeriesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83718);
/* harmony import */ var _components_ui_panel_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9116);
/* __next_internal_client_entry_do_not_use__ Series auto */ 





function Series() {
    const ctx = (0,_contexts_SeriesContext__WEBPACK_IMPORTED_MODULE_2__/* .useSeries */ .N)();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_4__/* .useTranslations */ .c)('series');
    if (!ctx || ctx.postsInSeries.length === 0) return null;
    const { series, postsInSeries, currentPostUrl } = ctx;
    const currentIndex = postsInSeries.findIndex((p)=>p.url === currentPostUrl);
    const currentPos = currentIndex >= 0 ? currentIndex + 1 : 0;
    const total = postsInSeries.length;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_3__/* .PanelCard */ .Hk, {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BookMarked_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
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
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_3__/* .PanelList */ .j3, {
            children: postsInSeries.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_3__/* .PanelItem */ .Kn, {
                    variant: post.url === currentPostUrl ? 'highlight' : 'default',
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: post.url,
                        children: post.title
                    })
                }, post._id))
        })
    });
}


/***/ }),

/***/ 76451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorCard: () => (/* binding */ AuthorCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5772);
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
    const { author: configAuthor, description: configDescription, authorCard: authorCardConfig, stats, rssEnabled } = (0,_contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_3__/* .useSiteConfig */ .z)();
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
                    children: avatarUrl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        src: avatarUrl,
                        alt: "",
                        width: 80,
                        height: 80,
                        className: "object-cover"
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


/***/ })

}]);