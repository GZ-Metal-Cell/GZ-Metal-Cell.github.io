(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7177],{

/***/ 929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownThemeStyles: () => (/* binding */ MarkdownThemeStyles)
/* harmony export */ });
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70460);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ MarkdownThemeStyles auto */ 

/**
 * Syncs data-theme on html so Shiki/code block styles ([data-theme="dark"]/[data-theme="light"])
 * match next-themes. Prose uses .dark for typography; code blocks still rely on data-theme.
 */ function MarkdownThemeStyles() {
    const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_0__/* .useTheme */ .D)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (resolvedTheme) {
            document.documentElement.setAttribute('data-theme', resolvedTheme);
        }
    }, [
        resolvedTheme
    ]);
    return null;
}


/***/ }),

/***/ 5103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 16885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Banner: () => (/* binding */ Banner)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(73321);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(21362);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(5772);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var dist = __webpack_require__(42442);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ellipsis.js
var ellipsis = __webpack_require__(60285);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
;// ./src/components/ui/breadcrumb.tsx





const Breadcrumb = /*#__PURE__*/ react.forwardRef(({ ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
        ref: ref,
        "aria-label": "breadcrumb",
        ...props
    }));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("ol", {
        ref: ref,
        className: (0,utils.cn)("flex flex-wrap items-center break-words text-sm text-muted-foreground", className),
        ...props
    }));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        ref: ref,
        className: (0,utils.cn)("inline-flex items-center", className),
        ...props
    }));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = /*#__PURE__*/ react.forwardRef(({ asChild, className, ...props }, ref)=>{
    const Comp = asChild ? dist/* Slot */.DX : "a";
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Comp, {
        ref: ref,
        className: (0,utils.cn)("transition-colors hover:text-foreground", className),
        ...props
    });
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        ref: ref,
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: (0,utils.cn)("font-normal text-foreground", className),
        ...props
    }));
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        role: "presentation",
        "aria-hidden": "true",
        className: (0,utils.cn)("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
        ...props,
        children: children ?? /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* default */.A, {})
    });
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({ className, ...props })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        role: "presentation",
        "aria-hidden": "true",
        className: (0,utils.cn)("flex h-9 w-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ellipsis/* default */.A, {
                className: "h-4 w-4"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "sr-only",
                children: "More"
            })
        ]
    });
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";


// EXTERNAL MODULE: ./src/lib/app-path.ts
var app_path = __webpack_require__(69082);
;// ./src/components/layout/banner/shared-styles.ts
/**
 * Shared banner nav link styles for Breadcrumb and Navigation components.
 * Ensures consistent bottom border, hover, and active state styling.
 */ /** Base styles for all banner nav links */ const headerNavLinkBase = 'h-full border-b-[3px] transition-all px-4 flex items-center text-base font-medium';
/** Active/current item styles */ const headerNavLinkActive = 'text-foreground border-highlight';
/** Inactive item styles with hover */ const headerNavLinkInactive = 'text-muted-foreground border-transparent hover:text-highlight dark:hover:text-highlight hover:border-highlight';

// EXTERNAL MODULE: ./node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(98500);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
;// ./src/components/layout/banner/HeaderNavLink.tsx
/* __next_internal_client_entry_do_not_use__ getIsNavItemActive,isIndexRoute,HeaderNavLink auto */ 





/**
 * Shared active-state logic for banner nav items (left breadcrumb + right nav list).
 */ function getIsNavItemActive(pathname, href) {
    const p = (0,app_path/* normAppPath */.Hx)(pathname);
    const h = (0,app_path/* normAppPath */.Hx)(href);
    const isCategoriesActive = h === '/categories' && (p === '/categories' || p.startsWith('/categories/') || p.startsWith('/posts/'));
    return isCategoriesActive || h === '/' && (p === '/' || p.startsWith('/page/')) || h !== '/' && (p === h || p.startsWith(`${h}/`));
}
const isIndexRoute = (path)=>path === '/' || path.startsWith('/page/');
/**
 * Single banner nav link used by both left (breadcrumb/logo) and right (nav list).
 * Same height, border, and active/inactive styles everywhere.
 */ const HeaderNavLink = /*#__PURE__*/ react.forwardRef(({ isActive, className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
        ref: ref,
        className: (0,utils.cn)(headerNavLinkBase, isActive ? headerNavLinkActive : headerNavLinkInactive, className),
        ...props,
        children: children
    }));
HeaderNavLink.displayName = 'HeaderNavLink';

;// ./src/components/layout/banner/Breadcrumb.tsx
/* __next_internal_client_entry_do_not_use__ PathPattern,getBreadcrumbLabel,isIndexRoute,Breadcrumb,PathBasedBreadcrumb,HeaderBreadcrumb auto */ 










/** Path pattern enum for breadcrumb segment generation. */ const PathPattern = {
    /** Home or pagination - no breadcrumb */ INDEX: 'index',
    /** /posts/[...slug] - categories + generic post labels (no titles) */ POST: 'post',
    /** /categories or /categories/[slug] */ CATEGORY: 'category',
    /** /tags or /tags/[slug] */ TAG: 'tag',
    /** /archives, /links, /about, etc. - source pages */ SOURCE_PAGE: 'source_page',
    /** Unmatched path - no breadcrumb */ UNKNOWN: 'unknown'
};
function getPathPattern(pathname) {
    const path = pathname.replace(/\/+$/, '') || '/';
    if (path === '/' || /^\/page\/\d+$/.test(path)) return PathPattern.INDEX;
    if (path.startsWith('/posts/')) return PathPattern.POST;
    if (path === '/categories' || path.startsWith('/categories/')) return PathPattern.CATEGORY;
    if (path === '/tags' || path.startsWith('/tags/')) return PathPattern.TAG;
    if (/^\/(archives|categories|tags|links|about)(?:\/|$)/.test(path)) return PathPattern.SOURCE_PAGE;
    return PathPattern.UNKNOWN;
}
/** Normalize pathname: strip trailing slashes for consistent matching (trailingSlash: true). */ function normalizePath(pathname) {
    return pathname.replace(/\/+$/, '') || '/';
}
function slugFromPostPath(pathname) {
    const path = normalizePath(pathname);
    const match = path.match(/^\/posts\/(.+)$/);
    if (!match) return '';
    const decoded = match[1].split('/').map((s)=>{
        try {
            return decodeURIComponent(s);
        } catch  {
            return s;
        }
    }).join('/');
    return (0,app_path/* normalizePostSlugKey */.C2)(decoded);
}
/** Build /posts/... URL with encoded segments (matches site trailingSlash). */ function hrefForPostSlug(slug) {
    const encoded = slug.split('/').filter(Boolean).map((s)=>encodeURIComponent(s)).join('/');
    return `/posts/${encoded}/`;
}
/**
 * When a post slug has this many path segments (a/b/c/d = 4), collapse earlier
 * titles to an ellipsis so the banner stays short.
 */ const POST_SLUG_SEGMENT_COUNT_FOR_ELLIPSIS = 4;
function buildPostBreadcrumbSegments(slug, data, tNav, tCommon) {
    const parts = slug.split('/').filter(Boolean);
    if (parts.length === 0) return [];
    const categoriesLabel = data.menuTitles.categories ?? tNav('categories');
    const postsLabel = data.menuTitles.posts ?? tNav('posts');
    const childPostLabel = tNav('childPost');
    const prefix = (end)=>parts.slice(0, end).join('/');
    const segments = [
        {
            label: categoriesLabel,
            href: (0,app_path/* internalHref */.dI)('/categories')
        }
    ];
    if (parts.length === 1) {
        const full = (0,app_path/* normalizePostSlugKey */.C2)(prefix(1));
        const category = data.postSlugToCategory[full] ?? data.defaultCategory;
        segments.push({
            label: category,
            href: (0,app_path/* internalHref */.dI)(`/categories/${encodeURIComponent(category)}`)
        }, {
            label: postsLabel
        });
        return segments;
    }
    const parentSlug = prefix(parts.length - 1);
    if (parts.length >= POST_SLUG_SEGMENT_COUNT_FOR_ELLIPSIS) {
        segments.push({
            label: tCommon('breadcrumbEllipsis'),
            muted: true
        });
    }
    segments.push({
        label: postsLabel,
        href: hrefForPostSlug(parentSlug)
    }, {
        label: childPostLabel
    });
    return segments;
}
function buildPathBasedSegments(pathname, pattern, data, tNav, tCommon) {
    const path = normalizePath(pathname);
    switch(pattern){
        case PathPattern.INDEX:
        case PathPattern.UNKNOWN:
            return [];
        case PathPattern.POST:
            {
                const slug = slugFromPostPath(pathname);
                if (!slug) return [];
                return buildPostBreadcrumbSegments(slug, data, tNav, tCommon);
            }
        case PathPattern.CATEGORY:
            {
                const categoriesLabel = data.menuTitles.categories ?? tNav('categories');
                if (path === '/categories') {
                    return [
                        {
                            label: categoriesLabel
                        }
                    ];
                }
                const slug = path.replace(/^\/categories\//, '').replace(/\/+$/, '');
                if (!slug) return [
                    {
                        label: categoriesLabel
                    }
                ];
                const category = decodeURIComponent(slug);
                return [
                    {
                        label: categoriesLabel,
                        href: (0,app_path/* internalHref */.dI)('/categories')
                    },
                    {
                        label: category
                    }
                ];
            }
        case PathPattern.TAG:
            {
                const tagsLabel = data.menuTitles.tags ?? tNav('tags');
                if (path === '/tags') {
                    return [
                        {
                            label: tagsLabel
                        }
                    ];
                }
                const slug = path.replace(/^\/tags\//, '').replace(/\/+$/, '');
                if (!slug) return [
                    {
                        label: tagsLabel
                    }
                ];
                const tag = decodeURIComponent(slug);
                return [
                    {
                        label: tagsLabel,
                        href: (0,app_path/* internalHref */.dI)('/tags')
                    },
                    {
                        label: tag
                    }
                ];
            }
        case PathPattern.SOURCE_PAGE:
            {
                const segment = path.split('/').filter(Boolean)[0] ?? '';
                const label = data.menuTitles[segment] ?? data.sourcePageLabels[segment] ?? segment;
                return segment ? [
                    {
                        label
                    }
                ] : [];
            }
        default:
            return [];
    }
}
function getBreadcrumbLabel(pathname, navItems, menuTitles, t, tNav) {
    const postLabel = tNav ? tNav('posts') : t ? t('postLabel') : 'Post';
    const tagLabel = t ? t('tagLabel') : 'Tag';
    const categoryLabel = t ? t('categoryLabel') : 'Category';
    if (pathname === '/' || pathname === '') return null;
    const item = navItems.find(({ href })=>{
        if (href === '/') return false;
        return (0,app_path/* navItemMatchesPathname */.i5)(pathname, href);
    });
    if (item) return item.label;
    if (pathname.startsWith('/posts/')) return postLabel;
    if (pathname.startsWith('/page/')) return null;
    if (pathname.startsWith('/tags/')) return menuTitles?.tags ?? tagLabel;
    if (pathname.startsWith('/categories/')) return menuTitles?.categories ?? categoryLabel;
    return null;
}
const Breadcrumb_isIndexRoute = isIndexRoute;
const currentBreadcrumbClass = `${headerNavLinkBase} ${headerNavLinkActive} whitespace-nowrap`;
/** Unified breadcrumb: content mode (segments/label for slot) or banner mode (breadcrumbSlot + navItems) */ function Breadcrumb_Breadcrumb(props) {
    const tCommon = (0,react_client/* useTranslations */.c)('common');
    const tNav = (0,react_client/* useTranslations */.c)('nav');
    const pathname = (0,navigation.usePathname)() ?? '';
    const isContentMode = 'segments' in props || 'label' in props;
    const segments = 'segments' in props ? props.segments : 'label' in props ? [
        {
            label: props.label
        }
    ] : null;
    const wrapInNav = isContentMode && 'wrapInNav' in props ? props.wrapInNav !== false : true;
    if (isContentMode && segments) {
        if (segments.length === 0) return null;
        const list = /*#__PURE__*/ (0,jsx_runtime.jsx)(BreadcrumbList, {
            className: "h-full flex-wrap",
            children: segments.map((seg, i)=>{
                const isLast = i === segments.length - 1;
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(BreadcrumbItem, {
                            className: "h-full shrink-0",
                            children: seg.href != null || isLast ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BreadcrumbLink, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderNavLink, {
                                    href: seg.href ?? pathname,
                                    isActive: isLast,
                                    className: "whitespace-nowrap",
                                    children: seg.label
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(BreadcrumbPage, {
                                className: (0,utils.cn)(seg.muted ? 'text-muted-foreground' : currentBreadcrumbClass),
                                children: seg.label
                            })
                        }),
                        !isLast && /*#__PURE__*/ (0,jsx_runtime.jsx)(BreadcrumbSeparator, {
                            className: "[&>svg]:text-muted-foreground"
                        })
                    ]
                }, i);
            })
        });
        if (!wrapInNav) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "h-full",
                "aria-label": tCommon('breadcrumbLabel'),
                children: list
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Breadcrumb, {
            className: "h-full",
            children: list
        });
    }
    if (!('navItems' in props)) return null;
    const { breadcrumbSlot, navItems, menuTitles } = props;
    const breadcrumbLabel = getBreadcrumbLabel(pathname, navItems, menuTitles, (k)=>tCommon(k), (k)=>tNav(k));
    const showSlot = Boolean(breadcrumbSlot);
    const showBreadcrumb = !Breadcrumb_isIndexRoute(pathname) && (breadcrumbLabel || showSlot);
    if (!showBreadcrumb) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex items-center h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* default */.A, {
                className: "w-3.5 h-3.5 text-muted-foreground shrink-0",
                "aria-hidden": true
            }),
            showSlot ? breadcrumbSlot : /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderNavLink, {
                href: pathname,
                isActive: true,
                className: "whitespace-nowrap",
                children: breadcrumbLabel
            })
        ]
    });
}
/** Breadcrumb generated from pathname + enum-based pattern matching. No parallel routes. */ function PathBasedBreadcrumb({ data }) {
    const pathname = (0,navigation.usePathname)() ?? '';
    const tNav = (0,react_client/* useTranslations */.c)('nav');
    const tCommon = (0,react_client/* useTranslations */.c)('common');
    const pattern = getPathPattern(pathname);
    const segments = buildPathBasedSegments(pathname, pattern, data, (k)=>tNav(k), (k)=>tCommon(k));
    if (segments.length === 0) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Breadcrumb_Breadcrumb, {
        segments: segments,
        wrapInNav: false
    });
}
const siteLogo =  true ? "/images/logo.webp" : 0;
/** Left part of Banner: logo + breadcrumb */ function HeaderBreadcrumb({ navItems, menuTitles, breadcrumbSlot }) {
    const pathname = (0,navigation.usePathname)() ?? '';
    const tCommon = (0,react_client/* useTranslations */.c)('common');
    const siteName = "Zi-Zi's Journey" ?? 0;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex items-center h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderNavLink, {
                href: "/",
                isActive: Breadcrumb_isIndexRoute(pathname),
                children: siteLogo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                    src: siteLogo,
                    alt: siteName,
                    width: 32,
                    height: 32,
                    className: "rounded"
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    className: "text-xl font-black tracking-tighter dark:text-white flex items-center h-full",
                    children: [
                        siteName,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-highlight",
                            children: "."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "hidden md:block h-full",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Breadcrumb_Breadcrumb, {
                    navItems: navItems,
                    menuTitles: menuTitles,
                    breadcrumbSlot: breadcrumbSlot
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/menu.js
var menu = __webpack_require__(29857);
;// ./src/components/layout/banner/Navigation.tsx
/* __next_internal_client_entry_do_not_use__ Navigation auto */ 




/** Desktop nav list + mobile menu button. Renders inside a single <nav> in Banner. */ function Navigation({ navItems, menuTitles, mobileMenuOpen, setMobileMenuOpen }) {
    const pathname = (0,navigation.usePathname)() ?? '';
    const t = (0,react_client/* useTranslations */.c)('nav');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: "hidden md:flex space-x-5 space-y-0 h-full items-stretch flex-none w-max p-0 mr-0 list-none",
                role: "list",
                children: navItems.map(({ href, label })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: "h-full mr-0 last:mr-0",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderNavLink, {
                            href: href,
                            isActive: getIsNavItemActive(pathname, href),
                            children: label
                        })
                    }, href))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                type: "button",
                "aria-label": t('toggleMenu'),
                "aria-expanded": mobileMenuOpen,
                onClick: ()=>setMobileMenuOpen((o)=>!o),
                className: "flex md:hidden items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-muted h-8 text-xs text-foreground",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* default */.A, {
                    className: "w-5 h-5",
                    "aria-hidden": true
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/ui/panel-list.tsx
var panel_list = __webpack_require__(9116);
;// ./src/components/layout/Banner.tsx
/* __next_internal_client_entry_do_not_use__ Banner auto */ 







function Banner({ navItems, menuTitles, breadcrumbData }) {
    const pathname = (0,navigation.usePathname)();
    const [mobileMenuOpen, setMobileMenuOpen] = (0,react.useState)(false);
    const [prevPathname, setPrevPathname] = (0,react.useState)(pathname);
    const t = (0,react_client/* useTranslations */.c)('nav');
    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        setMobileMenuOpen(false);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                type: "button",
                "aria-label": t('closeMenu'),
                onClick: ()=>setMobileMenuOpen(false),
                className: (0,utils.cn)('md:hidden fixed inset-0 z-[210] bg-black/50 transition-opacity duration-200 ease-out', mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'),
                tabIndex: mobileMenuOpen ? 0 : -1,
                "aria-hidden": !mobileMenuOpen
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                className: "site-nav fixed top-0 left-0 right-0 z-[220] min-h-16 bg-background/80 backdrop-blur-md border-b border-border",
                "aria-label": t('siteNavigation'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "h-16 max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-16 flex justify-between items-stretch",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderBreadcrumb, {
                                navItems: navItems,
                                menuTitles: menuTitles,
                                breadcrumbSlot: /*#__PURE__*/ (0,jsx_runtime.jsx)(PathBasedBreadcrumb, {
                                    data: breadcrumbData
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex h-full items-center justify-end gap-3",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Navigation, {
                                    navItems: navItems,
                                    menuTitles: menuTitles,
                                    mobileMenuOpen: mobileMenuOpen,
                                    setMobileMenuOpen: setMobileMenuOpen
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (0,utils.cn)('md:hidden absolute top-16 left-0 right-0 border-t border-border bg-background/95 backdrop-blur-md overflow-hidden transition-[max-height,opacity,transform] duration-200 ease-out shadow-lg', mobileMenuOpen ? 'max-h-80 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'),
                        "aria-hidden": !mobileMenuOpen,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(panel_list/* PanelList */.j3, {
                                children: navItems.map(({ href, label })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(panel_list/* PanelLink */.h_, {
                                            href: href,
                                            title: label,
                                            className: "block py-2 text-sm font-medium text-foreground"
                                        })
                                    }, href))
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 19578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FloatingActionBar: () => (/* binding */ FloatingActionBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12710);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6071);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51900);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36999);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72055);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56842);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70460);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50910);
/* harmony import */ var _contexts_SidebarVisibilityContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5103);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89239);
/* __next_internal_client_entry_do_not_use__ FloatingActionBar auto */ 






const paginationButtonClass = 'size-8 rounded-lg border-ui bg-background hover:bg-muted hover:text-foreground';
/** Tailwind lg breakpoint (min-width) in px; sidebar is visible only at lg and up */ const LG_MIN_WIDTH_PX = 1024;
function FloatingActionBar() {
    const { hasSidebar, collapsed, toggleSidebar } = (0,_contexts_SidebarVisibilityContext__WEBPACK_IMPORTED_MODULE_3__/* .useSidebarVisibility */ .i)();
    const [isLgViewport, setIsLgViewport] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const mql = window.matchMedia(`(min-width: ${LG_MIN_WIDTH_PX}px)`);
        const handler = ()=>setIsLgViewport(mql.matches);
        handler();
        mql.addEventListener('change', handler);
        return ()=>mql.removeEventListener('change', handler);
    }, []);
    const showSidebarToggle = hasSidebar && isLgViewport;
    const { resolvedTheme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .D)();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('floatingBar');
    const otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    const handleThemeClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        (0,react__WEBPACK_IMPORTED_MODULE_2__.startTransition)(()=>setTheme(otherTheme));
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const scrollToBottom = ()=>{
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
        role: "navigation",
        "aria-label": t('pageActions'),
        className: "fixed bottom-8 right-4 z-[200] flex flex-col animate-in fade-in slide-in-from-bottom-6 duration-500",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            "data-slot": "pagination-content",
            className: "flex flex-col gap-[6px] rounded-lg",
            children: [
                showSidebarToggle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, {
                        type: "button",
                        variant: "ghost",
                        size: "icon",
                        title: t('toggleSidebar'),
                        "aria-label": t('toggleSidebar'),
                        onClick: toggleSidebar,
                        className: paginationButtonClass,
                        children: collapsed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                            className: "size-4",
                            "aria-hidden": true
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                            className: "size-4",
                            "aria-hidden": true
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, {
                        type: "button",
                        variant: "ghost",
                        size: "icon",
                        title: t('switchTheme', {
                            theme: otherTheme
                        }),
                        "aria-label": t('switchTheme', {
                            theme: otherTheme
                        }),
                        onClick: handleThemeClick,
                        className: paginationButtonClass,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                                className: "size-4 dark:hidden",
                                "aria-hidden": true
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                                className: "hidden size-4 dark:block",
                                "aria-hidden": true
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, {
                        type: "button",
                        variant: "ghost",
                        size: "icon",
                        title: t('scrollToTop'),
                        onClick: scrollToTop,
                        "aria-label": t('scrollToTop'),
                        className: paginationButtonClass,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                            className: "size-4",
                            "aria-hidden": true
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, {
                        type: "button",
                        variant: "ghost",
                        size: "icon",
                        title: t('scrollToBottom'),
                        onClick: scrollToBottom,
                        "aria-label": t('scrollToBottom'),
                        className: paginationButtonClass,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowDown_ArrowUp_Moon_PanelLeft_PanelLeftClose_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                            className: "size-4",
                            "aria-hidden": true
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 38561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaTeXCopyTexLoader: () => (/* binding */ KaTeXCopyTexLoader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ KaTeXCopyTexLoader auto */ 
/**
 * Loads KaTeX copy-tex extension. When users copy rendered math formulas,
 * the clipboard will contain the original LaTeX source ($...$ or $$...$$)
 * instead of the rendered HTML/text approximation.
 *
 * Dynamically imported in useEffect to avoid SSR error (copy-tex accesses document).
 */ function KaTeXCopyTexLoader() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        void __webpack_require__.e(/* import() */ 8818).then(__webpack_require__.bind(__webpack_require__, 48818));
    }, []);
    return null;
}


/***/ }),

/***/ 51648:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 91930));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 98500, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 38437, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 42593, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 71344, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 82123));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67081));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46281));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 38561));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 929));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 66954));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 16885));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 19578));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 97694));
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
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5103));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 90682));


/***/ }),

/***/ 71344:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 82123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70460);
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 

function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_themes__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .N, {
        ...props,
        children: children
    });
}


/***/ }),

/***/ 97694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5772);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98500);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50910);
/* __next_internal_client_entry_do_not_use__ Footer auto */ 



function Footer({ sinceYear, author, icp }) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_3__/* .useTranslations */ .c)('footer');
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer", {
        className: "border-t border-border bg-muted/30 py-6 text-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto max-w-7xl px-8 md:px-12 lg:px-16",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "text-sm font-medium tracking-wide text-muted-foreground leading-[30px]",
                    children: t('copyright', {
                        sinceYear,
                        year: currentYear,
                        author
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "mt-0 text-sm font-medium tracking-wide text-muted-foreground leading-[30px]",
                    children: t('themeBy', {
                        author
                    })
                }),
                icp?.enable && icp?.text && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "mt-0 text-sm text-muted-foreground leading-[30px]",
                    children: icp.link ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: icp.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-1.5 hover:underline",
                        children: [
                            icp.icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                src: icp.icon,
                                alt: "",
                                width: 14,
                                height: 14,
                                className: "inline-block"
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                children: icp.text
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "inline-flex items-center gap-1.5",
                        children: [
                            icp.icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                src: icp.icon,
                                alt: "",
                                width: 14,
                                height: 14,
                                className: "inline-block"
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                children: icp.text
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [4785,4545,2362,4485,3333,2972,8441,3794,7358], () => (__webpack_exec__(51648)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);