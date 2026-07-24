(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4701],{

/***/ 1606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ Progress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32116);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ Progress auto */ 



function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL, {
        "data-slot": "progress",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("bg-muted h-1 rounded-full relative flex w-full items-center overflow-x-hidden", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_2__/* .Indicator */ .C1, {
            "data-slot": "progress-indicator",
            className: "bg-primary size-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        })
    });
}



/***/ }),

/***/ 2163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ TreeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _barrel_optimize_names_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21362);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ TreeView auto */ 



function normalizeData(data) {
    return Array.isArray(data) ? data : [
        data
    ];
}
/** True if `node` or any descendant has id === leafId (used to expand folders toward selection). */ function branchContainsLeafId(node, leafId) {
    if (!leafId) return false;
    if (node.id === leafId) return true;
    if (!node.children?.length) return false;
    return node.children.some((c)=>branchContainsLeafId(c, leafId));
}
function TreeItem({ item, level, expandAll, defaultNodeIcon, defaultLeafIcon, selectedId, onLeafClick, onNodeClick, renderLeafActions, hoveredId, setHoveredId }) {
    const hasChildren = item.children != null && item.children.length > 0;
    const subtreeContainsSelection = hasChildren && selectedId != null && item.children.some((c)=>branchContainsLeafId(c, selectedId));
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(()=>expandAll || subtreeContainsSelection);
    const icon = item.icon ?? (hasChildren ? defaultNodeIcon : defaultLeafIcon);
    const IconComponent = icon;
    const isSelected = item.id === selectedId;
    const handleSelect = ()=>{
        if (item.disabled) return;
        if (!hasChildren) onLeafClick?.(item.id);
        onNodeClick?.(item.id);
        if (hasChildren) setIsOpen((o)=>!o);
    };
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (expandAll) {
            setIsOpen(true);
        }
    }, [
        expandAll
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (expandAll) return;
        if (subtreeContainsSelection) {
            setIsOpen(true);
        }
    }, [
        expandAll,
        selectedId,
        subtreeContainsSelection
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tree-item",
        "data-level": level,
        onMouseEnter: ()=>setHoveredId(item.id),
        onMouseLeave: ()=>setHoveredId(null),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('flex items-center gap-1.5 rounded-md py-1 pr-2 text-[13px] leading-relaxed outline-none', 'hover:bg-accent hover:text-accent-foreground', isSelected && 'bg-accent text-accent-foreground', item.disabled && 'pointer-events-none opacity-50', item.className),
                role: "treeitem",
                "aria-selected": isSelected,
                tabIndex: onNodeClick || onLeafClick ? 0 : undefined,
                onClick: handleSelect,
                onKeyDown: onNodeClick || onLeafClick ? (e)=>{
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelect();
                    }
                } : undefined,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        type: "button",
                        "aria-expanded": hasChildren ? isOpen : undefined,
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('flex size-5 shrink-0 items-center justify-center rounded-sm text-muted-foreground', hasChildren && 'hover:bg-muted hover:text-foreground'),
                        style: {
                            marginLeft: level * 16
                        },
                        onClick: (e)=>{
                            e.stopPropagation();
                            if (!hasChildren) return;
                            setIsOpen((o)=>!o);
                        },
                        disabled: item.disabled,
                        children: hasChildren ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('size-4 transition-transform', isOpen && 'rotate-90'),
                            "aria-hidden": true
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: "size-4",
                            "aria-hidden": true
                        })
                    }),
                    IconComponent != null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "flex shrink-0 text-muted-foreground",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconComponent, {
                            className: "size-4"
                        })
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "min-w-0 truncate",
                        children: item.name
                    }),
                    !hasChildren && renderLeafActions ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('ml-auto flex items-center gap-1 transition-opacity duration-150', hoveredId === item.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'),
                        children: renderLeafActions(item)
                    }) : null
                ]
            }),
            hasChildren && isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "tree-children",
                role: "group",
                children: item.children.map((child)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TreeItem, {
                        item: child,
                        level: level + 1,
                        expandAll: expandAll,
                        defaultNodeIcon: defaultNodeIcon,
                        defaultLeafIcon: defaultLeafIcon,
                        selectedId: selectedId,
                        onLeafClick: onLeafClick,
                        onNodeClick: onNodeClick,
                        renderLeafActions: renderLeafActions,
                        hoveredId: hoveredId,
                        setHoveredId: setHoveredId
                    }, child.id))
            })
        ]
    });
}
function TreeView({ data, expandAll = false, defaultNodeIcon, defaultLeafIcon, selectedId, onLeafClick, onNodeClick, renderLeafActions, className, ...props }) {
    const items = normalizeData(data);
    const [hoveredId, setHoveredId] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('text-card-foreground', className),
        role: "tree",
        "aria-label": "Tree",
        onMouseLeave: ()=>setHoveredId(null),
        ...props,
        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TreeItem, {
                item: item,
                level: 0,
                expandAll: expandAll,
                defaultNodeIcon: defaultNodeIcon,
                defaultLeafIcon: defaultLeafIcon,
                selectedId: selectedId,
                onLeafClick: onLeafClick,
                onNodeClick: onNodeClick,
                renderLeafActions: renderLeafActions,
                hoveredId: hoveredId,
                setHoveredId: setHoveredId
            }, item.id))
    });
}


/***/ }),

/***/ 4316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U4: () => (/* reexport safe */ _mermaid_runner__WEBPACK_IMPORTED_MODULE_2__.MermaidRunner),
/* harmony export */   gE: () => (/* reexport safe */ _mermaid_panel__WEBPACK_IMPORTED_MODULE_0__.MermaidPanel)
/* harmony export */ });
/* harmony import */ var _mermaid_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74026);
/* harmony import */ var _mermaid_diagram_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4667);
/* harmony import */ var _mermaid_runner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60846);





/***/ }),

/***/ 4667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MermaidDiagramViewport: () => (/* binding */ MermaidDiagramViewport)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zoom-out.js
var zoom_out = __webpack_require__(69220);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zoom-in.js
var zoom_in = __webpack_require__(22651);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js
var rotate_ccw = __webpack_require__(9199);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(89239);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
;// ./src/lib/mermaid/viewport-controller.ts
const MIN_SCALE = 0.25;
const MAX_SCALE = 4;
const ZOOM_STEP = 1.25;
function clampScale(scale) {
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
}
/** `.mermaid-output` top-left in viewport coords (transform cleared). */ function getLayoutOffsetInViewport(viewport, content) {
    const vpRect = viewport.getBoundingClientRect();
    const savedTransform = content.style.transform;
    content.style.transform = 'none';
    const contentRect = content.getBoundingClientRect();
    content.style.transform = savedTransform;
    return {
        x: contentRect.left - vpRect.left,
        y: contentRect.top - vpRect.top
    };
}
function createMermaidViewportController(options) {
    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    let homeScale = 1;
    let homeX = 0;
    let homeY = 0;
    let homeCaptured = false;
    let pointerId = null;
    let lastX = 0;
    let lastY = 0;
    const applyTransform = ()=>{
        const content = options.getContent();
        if (!content) return;
        content.style.transformOrigin = '0 0';
        content.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        options.viewport.classList.toggle('is-zoomed', scale > 1);
    };
    const notify = ()=>options.onScaleChange?.(scale);
    const setTransform = (nextScale, nextX, nextY)=>{
        scale = clampScale(nextScale);
        translateX = nextX;
        translateY = nextY;
        applyTransform();
        notify();
    };
    const viewportCenter = ()=>({
            x: options.viewport.clientWidth / 2,
            y: options.viewport.clientHeight / 2
        });
    const zoomAt = (factor, originX, originY)=>{
        const content = options.getContent();
        if (!content) return;
        const offset = getLayoutOffsetInViewport(options.viewport, content);
        const nextScale = clampScale(scale * factor);
        const ratio = nextScale / scale;
        const anchorX = originX - offset.x;
        const anchorY = originY - offset.y;
        translateX = anchorX - ratio * (anchorX - translateX);
        translateY = anchorY - ratio * (anchorY - translateY);
        scale = nextScale;
        applyTransform();
        notify();
    };
    const computeHome = ()=>{
        const content = options.getContent();
        const svg = content?.querySelector('svg');
        if (!content || !svg) return false;
        const vp = options.viewport;
        if (vp.clientWidth < 1 || vp.clientHeight < 1) return false;
        const vpRect = vp.getBoundingClientRect();
        const savedTransform = content.style.transform;
        content.style.transform = 'none';
        const svgRect = svg.getBoundingClientRect();
        content.style.transform = savedTransform;
        if (svgRect.width < 1 || svgRect.height < 1) return false;
        const svgCenterX = svgRect.left - vpRect.left + svgRect.width / 2;
        const svgCenterY = svgRect.top - vpRect.top + svgRect.height / 2;
        homeScale = 1;
        homeX = vp.clientWidth / 2 - svgCenterX;
        const heightFits = vp.clientHeight >= svgRect.height - 1;
        homeY = heightFits ? 0 : vp.clientHeight / 2 - svgCenterY;
        return true;
    };
    const captureHome = ()=>{
        if (homeCaptured) return false;
        if (!computeHome()) return false;
        homeCaptured = true;
        options.onHomeEstablished?.();
        return true;
    };
    const establishHome = ()=>{
        if (!captureHome()) return;
        setTransform(homeScale, homeX, homeY);
    };
    const establishHomeWhenReady = ()=>{
        const run = ()=>{
            if (homeCaptured) return;
            establishHome();
        };
        requestAnimationFrame(()=>requestAnimationFrame(run));
    };
    const reset = ()=>{
        if (!computeHome()) {
            if (!homeCaptured) return;
        } else {
            homeCaptured = true;
        }
        setTransform(homeScale, homeX, homeY);
    };
    const zoomIn = ()=>{
        const { x, y } = viewportCenter();
        zoomAt(ZOOM_STEP, x, y);
    };
    const zoomOut = ()=>{
        const { x, y } = viewportCenter();
        zoomAt(1 / ZOOM_STEP, x, y);
    };
    const onPointerDown = (e)=>{
        if (e.button !== 0) return;
        const content = options.getContent();
        if (!content?.querySelector('svg')) return;
        pointerId = e.pointerId;
        lastX = e.clientX;
        lastY = e.clientY;
        options.viewport.setPointerCapture(e.pointerId);
        options.viewport.classList.add('is-panning');
    };
    const onPointerMove = (e)=>{
        if (pointerId == null || e.pointerId !== pointerId) return;
        translateX += e.clientX - lastX;
        translateY += e.clientY - lastY;
        lastX = e.clientX;
        lastY = e.clientY;
        applyTransform();
    };
    const endPan = (e)=>{
        if (pointerId == null || e.pointerId !== pointerId) return;
        pointerId = null;
        options.viewport.classList.remove('is-panning');
        try {
            options.viewport.releasePointerCapture(e.pointerId);
        } catch  {
        /* already released */ }
    };
    options.viewport.addEventListener('pointerdown', onPointerDown);
    options.viewport.addEventListener('pointermove', onPointerMove);
    options.viewport.addEventListener('pointerup', endPan);
    options.viewport.addEventListener('pointercancel', endPan);
    return {
        zoomIn,
        zoomOut,
        reset,
        establishHome,
        establishHomeWhenReady,
        getScale: ()=>scale,
        isHomeEstablished: ()=>homeCaptured,
        destroy: ()=>{
            options.viewport.removeEventListener('pointerdown', onPointerDown);
            options.viewport.removeEventListener('pointermove', onPointerMove);
            options.viewport.removeEventListener('pointerup', endPan);
            options.viewport.removeEventListener('pointercancel', endPan);
            const content = options.getContent();
            if (content) {
                content.style.transform = '';
                content.style.transformOrigin = '';
            }
            options.viewport.classList.remove('is-zoomed');
        }
    };
}

;// ./src/components/mermaid/mermaid-diagram-viewport.tsx
/* __next_internal_client_entry_do_not_use__ MermaidDiagramViewport auto */ 






function MermaidDiagramViewport({ children, className }) {
    const t = (0,react_client/* useTranslations */.c)('mermaid');
    const viewportRef = react.useRef(null);
    const controllerRef = react.useRef(null);
    const getContent = react.useCallback(()=>{
        const root = viewportRef.current;
        if (!root) return null;
        return root.querySelector('.mermaid-output');
    }, []);
    react.useEffect(()=>{
        const viewport = viewportRef.current;
        if (!viewport) return;
        let obs = null;
        let resizeObs = null;
        const disconnectObservers = ()=>{
            obs?.disconnect();
            resizeObs?.disconnect();
            obs = null;
            resizeObs = null;
        };
        const tryEstablishHome = ()=>{
            if (controllerRef.current?.isHomeEstablished()) return;
            const content = getContent();
            if (!content?.querySelector('svg')) return;
            controllerRef.current?.establishHomeWhenReady();
        };
        obs = new MutationObserver(tryEstablishHome);
        obs.observe(viewport, {
            childList: true,
            subtree: true
        });
        resizeObs = new ResizeObserver(tryEstablishHome);
        resizeObs.observe(viewport);
        const controller = createMermaidViewportController({
            viewport,
            getContent,
            onHomeEstablished: disconnectObservers
        });
        controllerRef.current = controller;
        tryEstablishHome();
        return ()=>{
            disconnectObservers();
            controller.destroy();
            controllerRef.current = null;
        };
    }, [
        getContent
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)('mermaid-diagram-viewport group/viewport relative flex flex-col', className),
        "data-mermaid-viewport-host": true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ref: viewportRef,
                className: "mermaid-viewport relative h-auto min-h-[200px] touch-none select-none cursor-grab [&.is-panning]:cursor-grabbing [&.is-zoomed]:overflow-y-auto",
                role: "application",
                "aria-label": t('viewportAria'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "mermaid-viewport-content py-5",
                    children: children
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mermaid-viewport-toolbar pointer-events-none absolute bottom-1 right-1 z-10 flex items-center gap-0.5 rounded-md border border-border bg-card/95 p-0.5 opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-200 group-hover/viewport:pointer-events-auto group-hover/viewport:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100",
                role: "toolbar",
                "aria-label": t('toolbarAria'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                        type: "button",
                        variant: "ghost",
                        size: "icon-sm",
                        className: "size-7",
                        onClick: ()=>controllerRef.current?.zoomOut(),
                        "aria-label": t('zoomOut'),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(zoom_out/* default */.A, {
                            className: "size-4",
                            "aria-hidden": true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                        type: "button",
                        variant: "ghost",
                        size: "icon-sm",
                        className: "size-7",
                        onClick: ()=>controllerRef.current?.zoomIn(),
                        "aria-label": t('zoomIn'),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(zoom_in/* default */.A, {
                            className: "size-4",
                            "aria-hidden": true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                        type: "button",
                        variant: "ghost",
                        size: "icon-sm",
                        className: "size-7",
                        onClick: ()=>controllerRef.current?.reset(),
                        "aria-label": t('resetView'),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(rotate_ccw/* default */.A, {
                            className: "size-4",
                            "aria-hidden": true
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ LinksPageContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _components_ui_content_link_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99078);


const defaultGridCols = 'sm:grid-cols-2 lg:grid-cols-3';
function LinksPageContent({ links, gridCols = defaultGridCols, showIcon = true, showUrl = false }) {
    const safeLinks = Array.isArray(links) ? links : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: [
            'my-5 grid gap-4',
            gridCols
        ].filter(Boolean).join(' '),
        children: safeLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_content_link_card__WEBPACK_IMPORTED_MODULE_1__/* .ContentLinkCard */ .O, {
                href: link.url,
                external: true,
                className: "!w-full min-w-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row items-start gap-3",
                    children: [
                        showIcon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: "relative size-10 shrink-0 overflow-hidden rounded bg-muted/30",
                            children: link.avatar ? /* eslint-disable-next-line @next/next/no-img-element */ /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                src: link.avatar,
                                alt: "",
                                width: 40,
                                height: 40,
                                className: "size-10 object-cover"
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "flex size-10 items-center justify-center text-xs text-muted-foreground",
                                "aria-hidden": true,
                                children: link.name.slice(0, 1)
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "min-w-0 flex-1 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "font-medium text-foreground",
                                    children: link.name
                                }),
                                link.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "mt-0.5 !mb-0 text-sm text-muted-foreground",
                                    children: link.description
                                }),
                                showUrl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "mt-1 truncate text-xs text-muted-foreground",
                                    children: link.url
                                })
                            ]
                        })
                    ]
                })
            }, link.url))
    });
}


/***/ }),

/***/ 8637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeInImg: () => (/* binding */ FadeInImg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ FadeInImg auto */ 


function isImageAlreadyLoaded(img) {
    return img.complete && img.naturalWidth > 0;
}
function FadeInImg({ enabled, className, onLoad, alt = '', ...props }) {
    const imgRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(()=>{
        if (!enabled) return;
        const img = imgRef.current;
        if (img && isImageAlreadyLoaded(img)) {
            setLoaded(true);
        }
    }, [
        enabled,
        props.src
    ]);
    if (!enabled) {
        return(// eslint-disable-next-line @next/next/no-img-element
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            className: className,
            alt: alt,
            onLoad: onLoad,
            ...props
        }));
    }
    const handleLoad = (e)=>{
        setLoaded(true);
        onLoad?.(e);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "img-fade-in-host",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            ref: imgRef,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('img-fade-in', loaded && 'opacity-100', className),
            alt: alt,
            onLoad: handleLoad,
            ...props
        })
    });
}


/***/ }),

/***/ 9116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hk: () => (/* binding */ PanelCard),
/* harmony export */   Kn: () => (/* binding */ PanelItem),
/* harmony export */   h_: () => (/* binding */ PanelLink),
/* harmony export */   j3: () => (/* binding */ PanelList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98500);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81477);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89239);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40980);





/**
 * Panel list: card with header + list of items. Used for TOC, Series, and list-style links (e.g. archive).
 * Item styles: default (foreground, accent on hover), highlight (theme highlight bg + white text).
 */ /** Overrides Button defaults (nowrap, inline-flex, shrink-0, fixed h) so long titles wrap inside the sidebar. */ const itemBase = 'block h-auto min-h-7 w-full min-w-0 shrink rounded-md px-3 py-1.5 text-left text-sm font-normal whitespace-normal break-words transition-colors';
const itemColorDefault = 'text-muted-foreground hover:bg-accent hover:text-accent-foreground';
const itemDefault = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(itemBase, itemColorDefault);
const itemHighlight = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(itemBase, 'text-highlight-foreground hover:text-highlight-foreground');
function PanelCard({ icon, title, trailing, trailingAriaLabel, children, contentClassName }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Zp, {
        className: "min-w-0 dark:text-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__/* .CardHeader */ .aR, {
                className: "space-y-0 p-5 pb-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2 font-bold text-foreground",
                            children: [
                                icon,
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "text-sm uppercase tracking-widest",
                                    children: title
                                })
                            ]
                        }),
                        trailing != null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: "text-sm tabular-nums text-muted-foreground",
                            "aria-label": trailingAriaLabel,
                            children: trailing
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__/* .CardContent */ .Wu, {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('px-3 py-4 pt-2', contentClassName),
                children: children
            })
        ]
    });
}
function PanelList({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('pb-2 min-w-0 space-y-0.5 text-sm', className),
        children: children
    });
}
function PanelItem({ variant = 'default', style, liClassName, liStyle, liProps, liHidden, children }) {
    const className = variant === 'highlight' ? itemHighlight : itemDefault;
    const buttonStyle = variant === 'highlight' ? {
        ...style,
        backgroundColor: 'var(--color-highlight)'
    } : style;
    const { className: liPropsClassName, style: liPropsStyle, ...restLiProps } = liProps ?? {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('min-w-0', liClassName, liPropsClassName),
        style: {
            ...liStyle,
            ...liPropsStyle
        },
        "aria-hidden": liHidden,
        ...restLiProps,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, {
            asChild: true,
            variant: "ghost",
            size: "sm",
            className: className,
            style: buttonStyle,
            children: children
        })
    });
}
function PanelLink({ href, title, trailing, trailingDateTime, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('group flex items-baseline justify-between gap-4 rounded-md px-4 py-2 text-base font-normal transition-colors', itemColorDefault, className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "truncate min-w-0 font-normal",
                children: title
            }),
            trailing != null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("time", {
                dateTime: trailingDateTime,
                className: "text-base tabular-nums shrink-0",
                children: trailing
            })
        ]
    });
}


/***/ }),

/***/ 9819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F$: () => (/* binding */ markPostBodyHydrated),
/* harmony export */   Xp: () => (/* binding */ clearPostBodyHydrated),
/* harmony export */   si: () => (/* binding */ whenPostBodyHydrated)
/* harmony export */ });
/* unused harmony export POST_BODY_HYDRATED_EVENT */
/** Dispatched on the client after post body (Markdown/MDX) finishes mounting. */ const POST_BODY_HYDRATED_EVENT = 'next-gzblog:post-body-hydrated';
/** Mark post body hydrated and notify inline scripts (e.g. legacy slider init). */ function markPostBodyHydrated() {
    if (false) {}
    window.__NEXT_GZBLOG_POST_BODY_HYDRATED__ = true;
    window.dispatchEvent(new Event(POST_BODY_HYDRATED_EVENT));
}
function clearPostBodyHydrated() {
    if (false) {}
    window.__NEXT_GZBLOG_POST_BODY_HYDRATED__ = false;
}
function whenPostBodyHydrated() {
    if (false) {}
    if (window.__NEXT_GZBLOG_POST_BODY_HYDRATED__) return Promise.resolve();
    return new Promise((resolve)=>{
        window.addEventListener(POST_BODY_HYDRATED_EVENT, ()=>resolve(), {
            once: true
        });
    });
}


/***/ }),

/***/ 9930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Figure: () => (/* binding */ Figure)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _components_business_FadeInImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8637);
/* harmony import */ var _contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44272);
/* harmony import */ var _contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90682);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ Figure auto */ 




/**
 * Generic figure wrapper with optional figcaption. Use src+alt for images (reliable);
 * children may not render reliably in some MDX setups. Full width by default.
 */ function Figure({ src, alt = '', children, caption }) {
    const resolvedSrc = (0,_contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__/* .useResolvedPostAssetUrl */ .t9)(src);
    const { imageFadeInEnabled = false } = (0,_contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_3__/* .useSiteConfig */ .z)();
    const content = resolvedSrc != null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_business_FadeInImg__WEBPACK_IMPORTED_MODULE_1__.FadeInImg, {
        enabled: imageFadeInEnabled,
        src: resolvedSrc,
        alt: alt,
        className: "block h-auto w-full max-w-full rounded-lg",
        loading: "lazy"
    }) : children;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('my-5 block w-full'),
        "data-photo-figure": true,
        children: [
            content,
            caption != null && caption.trim() !== '' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption", {
                className: "text-center text-sm text-muted-foreground",
                children: caption.trim()
            })
        ]
    });
}


/***/ }),

/***/ 10181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ ChildPostsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _components_ui_panel_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9116);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40980);



const listWrapper = 'mt-5 flex flex-col' + ' [&_a]:no-underline [&_a]:!text-foreground [&_a]:flex [&_a]:items-baseline [&_a]:rounded-md [&_a]:px-4 [&_a]:py-2 [&_a]:transition-colors [&_a]:duration-150' + ' [&_a:hover]:!bg-accent [&_a:hover]:!text-accent-foreground' + ' dark:[&_a]:!text-white dark:[&_a:hover]:!text-accent-foreground';
/**
 * Renders a list of child posts (posts whose slug is under the current post’s slug).
 * Used in parent posts: add <ChildPostsList /> in MDX; the server injects the `posts` prop.
 * If there are no child posts, renders nothing.
 *
 * Use `slugs` to hand-pick specific child posts instead of listing all of them.
 * Use `order="asc"` or `order="desc"` to control sort direction (default: desc).
 */ function ChildPostsList({ posts, order = 'desc', slugs, className }) {
    if (!posts || posts.length === 0) return null;
    const filtered = slugs && slugs.length > 0 ? posts.filter((p)=>slugs.some((s)=>p.url.includes(s))) : posts;
    if (filtered.length === 0) return null;
    const sorted = [
        ...filtered
    ].sort((a, b)=>{
        const at = new Date(a.date).getTime();
        const bt = new Date(b.date).getTime();
        const aTime = Number.isFinite(at) ? at : 0;
        const bTime = Number.isFinite(bt) ? bt : 0;
        return order === 'asc' ? aTime - bTime : bTime - aTime;
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(listWrapper, className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
            className: "list-none space-y-2 !px-0 !my-0",
            children: sorted.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_1__/* .PanelLink */ .h_, {
                        href: post.url,
                        title: post.title
                    })
                }, post._id))
        })
    });
}


/***/ }),

/***/ 10986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EChart: () => (/* binding */ EChart)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.mjs
var dist = __webpack_require__(70460);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chart-column.js
var chart_column = __webpack_require__(89123);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(6296);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
// EXTERNAL MODULE: ./src/components/business/GameSourceHeaderActions.tsx
var GameSourceHeaderActions = __webpack_require__(80130);
// EXTERNAL MODULE: ./src/components/ui/article-card-panel.tsx
var article_card_panel = __webpack_require__(15891);
// EXTERNAL MODULE: ./src/contexts/PostAssetBaseContext.tsx
var PostAssetBaseContext = __webpack_require__(44272);
;// ./src/lib/echart/theme.ts
const SITE_ECHART_THEME_PREFIX = 'site-echart';
function siteEchartThemeName(mode) {
    return `${SITE_ECHART_THEME_PREFIX}-${mode}`;
}
function readCssHsl(varName, fallback) {
    if (typeof document === 'undefined') return fallback;
    const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    return raw ? `hsl(${raw})` : fallback;
}
function chartPalette(mode) {
    const primary = readCssHsl('--primary', mode === 'dark' ? 'hsl(207 56% 55%)' : 'hsl(207 56% 45%)');
    const highlight = readCssHsl('--highlight', primary);
    const destructive = readCssHsl('--destructive', mode === 'dark' ? 'hsl(0 62% 50%)' : 'hsl(0 84% 60%)');
    const foreground = readCssHsl('--foreground', mode === 'dark' ? 'hsl(0 0% 98%)' : 'hsl(222 84% 5%)');
    const muted = readCssHsl('--muted-foreground', mode === 'dark' ? 'hsl(215 20% 65%)' : 'hsl(215 16% 47%)');
    return [
        primary,
        highlight,
        destructive,
        muted,
        foreground
    ];
}
/**
 * ECharts theme aligned with site semantic tokens (foreground, border, primary, etc.).
 */ function buildSiteEchartTheme(mode = 'light') {
    const foreground = readCssHsl('--foreground', mode === 'dark' ? 'hsl(0 0% 98%)' : 'hsl(222 84% 5%)');
    const mutedForeground = readCssHsl('--muted-foreground', mode === 'dark' ? 'hsl(215 20% 65%)' : 'hsl(215 16% 47%)');
    const border = readCssHsl('--border', mode === 'dark' ? 'hsl(0 0% 18%)' : 'hsl(214 32% 91%)');
    const axisCommon = {
        axisLine: {
            lineStyle: {
                color: border
            }
        },
        axisTick: {
            lineStyle: {
                color: border
            }
        },
        axisLabel: {
            color: mutedForeground
        },
        splitLine: {
            lineStyle: {
                color: border,
                opacity: mode === 'dark' ? 0.35 : 0.6
            }
        }
    };
    return {
        color: chartPalette(mode),
        backgroundColor: 'transparent',
        textStyle: {
            color: foreground
        },
        title: {
            textStyle: {
                color: foreground
            },
            subtextStyle: {
                color: mutedForeground
            }
        },
        legend: {
            textStyle: {
                color: mutedForeground
            }
        },
        tooltip: {
            backgroundColor: readCssHsl('--card', mode === 'dark' ? 'hsl(0 0% 8%)' : 'hsl(0 0% 100%)'),
            borderColor: border,
            textStyle: {
                color: foreground
            }
        },
        categoryAxis: axisCommon,
        valueAxis: axisCommon,
        timeAxis: axisCommon,
        logAxis: axisCommon
    };
}

;// ./src/lib/echart/load-echarts.ts

let echartsPromise = null;
function loadEcharts() {
    if (!echartsPromise) {
        echartsPromise = __webpack_require__.e(/* import() */ 7996).then(__webpack_require__.bind(__webpack_require__, 87996));
    }
    return echartsPromise;
}
function ensureSiteEchartTheme(echarts, mode) {
    const name = siteEchartThemeName(mode);
    echarts.registerTheme(name, buildSiteEchartTheme(mode));
    return name;
}
async function registerEchartMaps(echarts, maps) {
    for (const mapDef of maps){
        const name = mapDef.name?.trim();
        if (!name) continue;
        let payload = mapDef.geoJson;
        const fetchUrl = mapDef.resolvedSrc?.trim() || mapDef.src?.trim();
        if (fetchUrl) {
            const res = await fetch(fetchUrl);
            if (!res.ok) throw new Error('map fetch failed');
            payload = await res.json();
        }
        if (payload == null) continue;
        echarts.registerMap(name, payload);
    }
}
function toEchartsOption(option) {
    return option;
}

;// ./src/lib/echart/resolve-echart-options.ts
function normalizeInlineJson(data) {
    if (data == null) return {
        value: null,
        error: false
    };
    if (typeof data === 'object') return {
        value: data,
        error: false
    };
    if (typeof data === 'string') {
        const trimmed = data.trim();
        if (!trimmed) return {
            value: null,
            error: false
        };
        try {
            return {
                value: JSON.parse(trimmed),
                error: false
            };
        } catch  {
            return {
                value: null,
                error: true
            };
        }
    }
    return {
        value: data,
        error: false
    };
}
function isPlainObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function parseEChartOption(raw) {
    if (!isPlainObject(raw)) return null;
    return raw;
}
function extractOptionTitle(option) {
    if (!option) return undefined;
    const title = option.title;
    if (typeof title === 'string') {
        const trimmed = title.trim();
        return trimmed || undefined;
    }
    if (isPlainObject(title)) {
        const text = title.text;
        if (typeof text === 'string') {
            const trimmed = text.trim();
            return trimmed || undefined;
        }
    }
    return undefined;
}
function resolvePanelTitle(titleProp, optionTitle) {
    const fromProp = titleProp?.trim();
    if (fromProp) return fromProp;
    if (optionTitle?.trim()) return optionTitle.trim();
    return 'Chart';
}
function resolveChartHeight(heightProp) {
    const fromProp = heightProp?.trim();
    if (fromProp) return fromProp;
    return '360px';
}
function prettyChartOption(option) {
    return JSON.stringify(option, null, 2);
}

;// ./src/components/mdx/EChart.tsx
/* __next_internal_client_entry_do_not_use__ EChart auto */ 










const EMPTY_MAPS = [];
const RESIZE_DEBOUNCE_MS = 100;
function useJsonSource(inline, src, resolvedSrc) {
    const inlineNorm = react.useMemo(()=>normalizeInlineJson(inline), [
        inline
    ]);
    const [loaded, setLoaded] = react.useState(null);
    const [status, setStatus] = react.useState('idle');
    react.useEffect(()=>{
        if (!resolvedSrc?.trim()) {
            setLoaded(null);
            setStatus('idle');
            return;
        }
        let cancelled = false;
        setStatus('loading');
        setLoaded(null);
        fetch(resolvedSrc).then((res)=>{
            if (!res.ok) throw new Error('fetch failed');
            return res.json();
        }).then((json)=>{
            if (!cancelled) {
                setLoaded(json);
                setStatus('ready');
            }
        }).catch(()=>{
            if (!cancelled) {
                setLoaded(null);
                setStatus('error');
            }
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        resolvedSrc
    ]);
    if (inline != null && String(inline).trim() !== '') {
        return {
            data: inlineNorm.value,
            status: inlineNorm.error ? 'error' : 'ready',
            error: inlineNorm.error
        };
    }
    if (src?.trim()) {
        if (status === 'loading' || status === 'idle') {
            return {
                data: null,
                status: 'loading',
                error: false
            };
        }
        if (status === 'error') {
            return {
                data: null,
                status: 'error',
                error: true
            };
        }
        return {
            data: loaded,
            status: 'ready',
            error: false
        };
    }
    return {
        data: null,
        status: 'idle',
        error: false
    };
}
function buildMapsKey(maps) {
    return maps.map((m)=>`${m.name}:${m.resolvedSrc ?? m.src ?? ''}:${m.geoJson != null ? '1' : '0'}`).join('|');
}
function attachDebouncedResize(chart, container) {
    let resizeTimer = null;
    const observer = new ResizeObserver(()=>{
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(()=>chart.resize(), RESIZE_DEBOUNCE_MS);
    });
    observer.observe(container);
    return ()=>{
        observer.disconnect();
        if (resizeTimer) clearTimeout(resizeTimer);
    };
}
function EChart({ option, src, title, height, theme, maps = EMPTY_MAPS, renderer = 'canvas' }) {
    const t = (0,react_client/* useTranslations */.c)('eChart');
    const { resolvedTheme } = (0,dist/* useTheme */.D)();
    const postSlug = (0,PostAssetBaseContext/* usePostAssetBase */.N9)();
    const containerRef = react.useRef(null);
    const chartRef = react.useRef(null);
    const initSignatureRef = react.useRef('');
    const appliedSiteModeRef = react.useRef(null);
    const hasDisplayedChartRef = react.useRef(false);
    const detachResizeRef = react.useRef(null);
    const [renderStatus, setRenderStatus] = react.useState('idle');
    const [hasDisplayedChart, setHasDisplayedChart] = react.useState(false);
    const resolvedSrc = (0,PostAssetBaseContext/* useResolvedPostAssetUrl */.t9)(src) ?? src;
    const resolvedMaps = react.useMemo(()=>{
        return maps.map((mapDef)=>({
                ...mapDef,
                resolvedSrc: mapDef.src ? (0,PostAssetBaseContext/* resolvePostAssetUrl */.o5)(mapDef.src, postSlug) : undefined
            }));
    }, [
        maps,
        postSlug
    ]);
    const mapsKey = react.useMemo(()=>buildMapsKey(resolvedMaps), [
        resolvedMaps
    ]);
    const optionSource = useJsonSource(option, src, resolvedSrc);
    const parsedOption = react.useMemo(()=>parseEChartOption(optionSource.data), [
        optionSource.data
    ]);
    const optionKey = react.useMemo(()=>parsedOption ? JSON.stringify(parsedOption) : null, [
        parsedOption
    ]);
    const panelTitle = resolvePanelTitle(title, extractOptionTitle(parsedOption));
    const chartHeight = resolveChartHeight(height);
    const waitingForFetch = Boolean(src?.trim()) && optionSource.status === 'loading';
    const hasOptionInput = option != null && String(option).trim() !== '' || Boolean(src?.trim());
    const showEmptyError = !hasOptionInput && !waitingForFetch;
    const showFetchError = optionSource.status === 'error' || optionSource.error;
    const showRenderError = renderStatus === 'error';
    const siteMode = resolvedTheme === 'dark' ? 'dark' : 'light';
    const usesSiteTheme = !theme?.trim();
    const shellSignature = `${renderer}|${theme?.trim() ?? ''}|${mapsKey}`;
    const hasParsedOption = parsedOption != null;
    const copyText = parsedOption ? prettyChartOption(parsedOption) : '';
    const downloadHref = resolvedSrc ?? src?.trim() ?? null;
    const headerActions = /*#__PURE__*/ (0,jsx_runtime.jsx)(GameSourceHeaderActions/* GameSourceHeaderActions */.S, {
        sourceText: copyText || null,
        downloadHref: downloadHref,
        downloadFilename: downloadHref ? (0,GameSourceHeaderActions/* filenameFromGameSrc */.e)(downloadHref) : undefined,
        copyAriaLabel: t('copyOption'),
        downloadAriaLabel: t('downloadSource')
    });
    react.useEffect(()=>{
        if (waitingForFetch) {
            hasDisplayedChartRef.current = false;
            setHasDisplayedChart(false);
        }
    }, [
        waitingForFetch
    ]);
    react.useEffect(()=>{
        const container = containerRef.current;
        if (!container || waitingForFetch || showEmptyError || showFetchError || !hasParsedOption) {
            if (hasOptionInput && !waitingForFetch && !showFetchError && !hasParsedOption) {
                setRenderStatus('error');
            }
            return;
        }
        let cancelled = false;
        const needsFirstPaint = !hasDisplayedChartRef.current;
        if (needsFirstPaint) {
            setRenderStatus('loading');
        }
        async function ensureChartShell() {
            const echarts = await loadEcharts();
            if (cancelled || !containerRef.current || !parsedOption) return;
            const themeName = theme?.trim() || ensureSiteEchartTheme(echarts, siteMode);
            if (chartRef.current && initSignatureRef.current === shellSignature) {
                return;
            }
            if (resolvedMaps.length > 0) {
                await registerEchartMaps(echarts, resolvedMaps);
            }
            if (cancelled || !containerRef.current || !parsedOption) return;
            detachResizeRef.current?.();
            detachResizeRef.current = null;
            chartRef.current?.dispose();
            chartRef.current = null;
            const chart = echarts.init(containerRef.current, themeName, {
                renderer
            });
            chartRef.current = chart;
            initSignatureRef.current = shellSignature;
            if (usesSiteTheme) {
                appliedSiteModeRef.current = siteMode;
            }
            chart.setOption(toEchartsOption(parsedOption), {
                notMerge: true
            });
            detachResizeRef.current = attachDebouncedResize(chart, containerRef.current);
            if (!cancelled) {
                setRenderStatus('ready');
                hasDisplayedChartRef.current = true;
                setHasDisplayedChart(true);
            }
        }
        ensureChartShell().catch(()=>{
            if (!cancelled) setRenderStatus('error');
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        waitingForFetch,
        showEmptyError,
        showFetchError,
        hasOptionInput,
        hasParsedOption,
        shellSignature,
        resolvedMaps,
        theme,
        renderer
    ]);
    react.useEffect(()=>{
        if (!usesSiteTheme || !hasParsedOption || waitingForFetch || showEmptyError || showFetchError) {
            return;
        }
        const chart = chartRef.current;
        const container = containerRef.current;
        if (!chart || !container || !parsedOption || !hasDisplayedChartRef.current) return;
        if (appliedSiteModeRef.current === siteMode) return;
        if (initSignatureRef.current !== shellSignature) return;
        let cancelled = false;
        async function swapSiteTheme() {
            const echarts = await loadEcharts();
            if (cancelled || !containerRef.current || !parsedOption) return;
            const themeName = ensureSiteEchartTheme(echarts, siteMode);
            const currentOption = toEchartsOption(parsedOption);
            detachResizeRef.current?.();
            detachResizeRef.current = null;
            chartRef.current?.dispose();
            chartRef.current = null;
            const nextChart = echarts.init(containerRef.current, themeName, {
                renderer
            });
            chartRef.current = nextChart;
            appliedSiteModeRef.current = siteMode;
            nextChart.setOption(currentOption, {
                notMerge: true
            });
            detachResizeRef.current = attachDebouncedResize(nextChart, containerRef.current);
        }
        swapSiteTheme().catch(()=>{
            if (!cancelled) setRenderStatus('error');
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        siteMode,
        usesSiteTheme,
        parsedOption,
        shellSignature,
        renderer,
        waitingForFetch,
        showEmptyError,
        showFetchError,
        hasParsedOption
    ]);
    react.useEffect(()=>{
        if (!optionKey || waitingForFetch || showEmptyError || showFetchError) return;
        const chart = chartRef.current;
        if (!chart || !parsedOption) return;
        if (initSignatureRef.current !== shellSignature) return;
        chart.setOption(toEchartsOption(parsedOption), {
            notMerge: true
        });
    }, [
        optionKey,
        parsedOption,
        waitingForFetch,
        showEmptyError,
        showFetchError,
        shellSignature
    ]);
    react.useEffect(()=>{
        return ()=>{
            detachResizeRef.current?.();
            detachResizeRef.current = null;
            chartRef.current?.dispose();
            chartRef.current = null;
            initSignatureRef.current = '';
            appliedSiteModeRef.current = null;
        };
    }, []);
    const showLoadingOverlay = !showEmptyError && !showFetchError && !hasDisplayedChart && (waitingForFetch || renderStatus === 'loading');
    const ready = hasDisplayedChart && renderStatus === 'ready';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(article_card_panel/* ArticleCardPanelRoot */.T, {
        className: "echart-panel group not-prose",
        "data-echart-panel": true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelHeader */.Cx, {
                as: "figcaption",
                left: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(chart_column/* default */.A, {
                            className: "size-4 shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (0,utils.cn)('truncate', article_card_panel/* articleCardPanelHeaderText */.J0),
                            children: panelTitle
                        })
                    ]
                }),
                right: hasOptionInput ? headerActions : undefined
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelBody */.fY, {
                className: "p-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "echart-viewport relative w-full overflow-hidden",
                    style: {
                        height: chartHeight
                    },
                    role: "img",
                    "aria-label": t('viewportAria'),
                    "data-echart-ready": ready ? '1' : undefined,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            ref: containerRef,
                            className: "echart-container absolute inset-0 z-0"
                        }),
                        showLoadingOverlay && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "echart-loading absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-background",
                            "aria-live": "polite",
                            "aria-busy": "true",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.A, {
                                    className: "size-8 animate-spin text-muted-foreground",
                                    "aria-hidden": true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: t('loading')
                                })
                            ]
                        }),
                        showEmptyError && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center px-4 text-sm text-muted-foreground",
                            children: t('emptySource')
                        }),
                        (showFetchError || showRenderError) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center px-4 text-sm text-destructive",
                            children: t('loadFailed')
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 13663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressWithLabel: () => (/* binding */ ProgressWithLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _components_ui_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61360);
/* harmony import */ var _components_ui_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1606);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ ProgressWithLabel auto */ 




/**
 * Labeled progress bar for use in MDX. Uses Field + FieldLabel + Progress per shadcn pattern.
 * @see https://ui.shadcn.com/docs/components/radix/progress
 */ function ProgressWithLabel({ value, label, showValue = true, id, className }) {
    const safeValue = Math.min(100, Math.max(0, value));
    const generatedId = react__WEBPACK_IMPORTED_MODULE_1__.useId();
    const progressId = id ?? `progress-${generatedId}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_field__WEBPACK_IMPORTED_MODULE_2__/* .Field */ .D0, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("my-5 mx-auto w-full max-w-sm", className),
        children: [
            (label != null || showValue) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_field__WEBPACK_IMPORTED_MODULE_2__/* .FieldLabel */ .dh, {
                htmlFor: progressId,
                className: "w-full",
                children: [
                    label != null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: label
                    }),
                    showValue && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("ml-auto text-muted-foreground tabular-nums"),
                        children: [
                            Math.round(safeValue),
                            "%"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_progress__WEBPACK_IMPORTED_MODULE_3__/* .Progress */ .k, {
                value: safeValue,
                id: progressId,
                "aria-label": label
            })
        ]
    });
}


/***/ }),

/***/ 14314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileTreeViewer: () => (/* binding */ FileTreeViewer),
/* harmony export */   FileTreeViewerFile: () => (/* binding */ FileTreeViewerFile),
/* harmony export */   FileTreeViewerFolder: () => (/* binding */ FileTreeViewerFolder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78916);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38798);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42129);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94514);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67635);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6962);
/* harmony import */ var _components_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2163);
/* harmony import */ var _lib_language_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28710);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40980);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15891);
/* harmony import */ var _contexts_CodeBlockVariantContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31104);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89239);
/* __next_internal_client_entry_do_not_use__ FileTreeViewerFolder,FileTreeViewerFile,FileTreeViewer auto */ 








/**
 * Marker component used inside <FileTreeViewer>.
 * It intentionally renders nothing; FileTreeViewer reads its props/children to build the tree.
 */ function FileTreeViewerFolder(_props) {
    return null;
}
/**
 * Marker component used inside <FileTreeViewer>.
 * It intentionally renders nothing; FileTreeViewer reads its props/children for the selected code.
 */ function FileTreeViewerFile(_props) {
    return null;
}
function getIconForFile(name) {
    const lastDot = name.lastIndexOf('.');
    if (lastDot === -1) return _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A;
    const ext = name.slice(lastDot + 1).toLowerCase();
    return (0,_lib_language_icons__WEBPACK_IMPORTED_MODULE_3__/* .getLanguageIcon */ .A7)(ext, _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A);
}
function buildTreeFromChildren(children) {
    const leavesById = {};
    const treeData = [];
    let markedDefaultPath = null;
    function buildNodes(nodeChildren, baseId) {
        const out = [];
        react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(nodeChildren, (child, index)=>{
            if (!/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child)) return;
            if (child.type === FileTreeViewerFolder) {
                const fp = child.props;
                const folderName = String(fp.name ?? '').trim() || 'Folder';
                const folderId = `${baseId}-folder-${index}-${folderName}`;
                out.push({
                    id: folderId,
                    name: folderName,
                    icon: _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,
                    openIcon: _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,
                    children: buildNodes(fp.children, folderId)
                });
                return;
            }
            if (child.type === FileTreeViewerFile) {
                const fp = child.props;
                const filePath = String(fp.path ?? '').trim();
                if (!filePath) return;
                const fileType = String(fp.fileType ?? 'code').toLowerCase();
                if (fileType === 'skip') return;
                const kind = fileType === 'image' ? 'image' : 'code';
                const fileNameFromProps = String(fp.name ?? '').trim();
                const fileName = fileNameFromProps || pathBasename(filePath) || 'File';
                const codeText = typeof fp.codeText === 'string' ? fp.codeText : undefined;
                const publicHrefPath = typeof fp.publicHrefPath === 'string' ? fp.publicHrefPath.trim() : undefined;
                if (fp.defaultSelected === true && markedDefaultPath == null) {
                    markedDefaultPath = filePath;
                }
                const leaf = {
                    id: filePath,
                    name: fileName,
                    kind,
                    codeChildren: fp.children,
                    codeText,
                    publicHrefPath: publicHrefPath || undefined
                };
                leavesById[filePath] = leaf;
                out.push({
                    id: filePath,
                    name: fileName,
                    icon: getIconForFile(fileName)
                });
            }
        });
        return out;
    }
    treeData.push(...buildNodes(children, 'root'));
    return {
        treeData,
        leavesById,
        markedDefaultPath
    };
}
function pathBasename(filePath) {
    const normalized = filePath.replace(/\\/g, '/');
    const last = normalized.lastIndexOf('/');
    return last >= 0 ? normalized.slice(last + 1) : normalized;
}
/**
 * MDX shortcode: interactive file tree + code/image viewer.
 *
 * Supports code files (syntax-highlighted) and image files (png, jpg, gif, webp, svg).
 * Files whose extension is not in the renderable set are omitted from the tree.
 * When the page has Fancybox enabled, images open in the lightbox.
 *
 * Usage (MDX):
 * <FileTreeViewer title="Project" rootDir="public">
 *   <FileTreeViewerFolder name="posts">
 *     <FileTreeViewerFile path="posts/demo/script.py" />
 *     <FileTreeViewerFile path="posts/demo/diagram.png" defaultSelected />
 *   </FileTreeViewerFolder>
 * </FileTreeViewer>
 */ function FileTreeViewer({ title, expandAll = false, defaultSelectedPath, autoSelectFirstLeaf = false, children, rootDir }) {
    const { treeData, leavesById, markedDefaultPath } = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>buildTreeFromChildren(children), [
        children
    ]);
    const leafIds = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>Object.keys(leavesById), [
        leavesById
    ]);
    const firstLeafId = leafIds[0] ?? null;
    const [selectedPath, setSelectedPath] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        // Only initialize selection when nothing is selected yet.
        if (selectedPath != null) return;
        if (defaultSelectedPath && defaultSelectedPath in leavesById) {
            setSelectedPath(defaultSelectedPath);
            return;
        }
        if (markedDefaultPath && markedDefaultPath in leavesById) {
            setSelectedPath(markedDefaultPath);
            return;
        }
        // No explicit selection: either stay empty or auto-pick first leaf.
        if (autoSelectFirstLeaf && firstLeafId) {
            setSelectedPath(firstLeafId);
            return;
        }
        setSelectedPath(null);
    }, [
        autoSelectFirstLeaf,
        defaultSelectedPath,
        firstLeafId,
        leavesById,
        markedDefaultPath,
        selectedPath
    ]);
    const selectedLeaf = selectedPath ? leavesById[selectedPath] : undefined;
    const [copiedPath, setCopiedPath] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!copiedPath) return;
        const t = window.setTimeout(()=>setCopiedPath(null), 2000);
        return ()=>window.clearTimeout(t);
    }, [
        copiedPath
    ]);
    const handleCopyFile = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async (id)=>{
        const text = leavesById[id]?.codeText;
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            setCopiedPath(id);
        } catch  {
        // Ignore clipboard errors (e.g. permissions)
        }
    }, [
        leavesById
    ]);
    const toPublicUrl = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((leaf)=>{
        const underPublic = leaf.publicHrefPath?.replace(/\\/g, '/').replace(/^\/+/, '').trim();
        if (underPublic) {
            return `/${underPublic.split('/').map(encodeURIComponent).join('/')}`;
        }
        // Legacy: path already relative to public root (no `./`); strip `.` segments to avoid `/./` -> wrong URL.
        const normalized = leaf.id.replace(/\\/g, '/');
        const segments = normalized.split('/').filter((s)=>s.length > 0 && s !== '.');
        return `/${segments.map(encodeURIComponent).join('/')}`;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .ArticleCardPanelRoot */ .T, {
        className: "file-tree-viewer-root group not-prose",
        children: [
            title?.trim() ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .ArticleCardPanelHeader */ .Cx, {
                as: "figcaption",
                className: "py-2.5 mt-0",
                left: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                            className: "shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)('truncate', _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeaderText */ .J0),
                            children: title.trim()
                        })
                    ]
                })
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .ArticleCardPanelBody */ .fY, {
                className: "border-0 rounded-none",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__/* .TreeView */ .G, {
                            data: treeData,
                            expandAll: expandAll,
                            defaultNodeIcon: _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,
                            defaultLeafIcon: _barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
                            selectedId: selectedPath ?? undefined,
                            onNodeClick: (id)=>setSelectedPath(id),
                            renderLeafActions: (item)=>{
                                const leaf = leavesById[item.id];
                                if (!leaf) return null;
                                const publicUrl = toPublicUrl(leaf);
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        leaf.kind === 'code' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$, {
                                            type: "button",
                                            variant: "ghost",
                                            size: "icon-xs",
                                            className: "text-muted-foreground hover:text-accent-foreground",
                                            "aria-label": `Copy ${leaf.name}`,
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                void handleCopyFile(leaf.id);
                                            },
                                            children: copiedPath === leaf.id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                                                className: "size-4",
                                                "aria-hidden": true
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                                                className: "size-4",
                                                "aria-hidden": true
                                            })
                                        }) : null,
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$, {
                                            type: "button",
                                            variant: "ghost",
                                            size: "icon-xs",
                                            asChild: true,
                                            "aria-label": `Download ${leaf.name}`,
                                            className: "text-muted-foreground hover:text-accent-foreground",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                href: publicUrl,
                                                download: leaf.name,
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_Download_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                                                    className: "size-4",
                                                    "aria-hidden": true
                                                })
                                            })
                                        })
                                    ]
                                });
                            }
                        }),
                        selectedLeaf ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "my-1 border-t border-border",
                                    "aria-hidden": true
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)('min-w-0 overflow-hidden rounded-lg', selectedLeaf.kind === 'image' && 'flex justify-center'),
                                    children: selectedLeaf.kind === 'image' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        role: "button",
                                        tabIndex: 0,
                                        className: "inline-block max-w-full cursor-pointer",
                                        "data-fancybox": "gallery",
                                        "data-src": toPublicUrl(selectedLeaf),
                                        "data-caption": selectedLeaf.name || undefined,
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                e.currentTarget.click();
                                            }
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                            src: toPublicUrl(selectedLeaf),
                                            alt: selectedLeaf.name,
                                            className: "block max-h-[min(85vh,56rem)] w-auto max-w-full rounded-lg border border-border"
                                        })
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts_CodeBlockVariantContext__WEBPACK_IMPORTED_MODULE_5__/* .CodeBlockVariantProvider */ .T, {
                                        value: "pure",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "[&_figure]:my-0",
                                            children: selectedLeaf.codeChildren
                                        })
                                    })
                                })
                            ]
                        }) : null
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 15891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Br: () => (/* binding */ articleCardPanelBody),
/* harmony export */   Cx: () => (/* binding */ ArticleCardPanelHeader),
/* harmony export */   J0: () => (/* binding */ articleCardPanelHeaderText),
/* harmony export */   Om: () => (/* binding */ articleCardPanelBodyPadding),
/* harmony export */   Rd: () => (/* binding */ articleCardPanelRoot),
/* harmony export */   Ss: () => (/* binding */ articleCardPanelHeaderWithRightSlot),
/* harmony export */   T: () => (/* binding */ ArticleCardPanelRoot),
/* harmony export */   Ww: () => (/* binding */ articleCardPanelHeaderRightSlot),
/* harmony export */   bc: () => (/* binding */ articleCardPanelHeaderLeft),
/* harmony export */   fY: () => (/* binding */ ArticleCardPanelBody),
/* harmony export */   io: () => (/* binding */ articleCardPanelHeaderActionButton),
/* harmony export */   lu: () => (/* binding */ articleCardPanelHeaderRightIcon),
/* harmony export */   w: () => (/* binding */ articleCardPanelHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ articleCardPanelRoot,articleCardPanelHeader,articleCardPanelHeaderWithRightSlot,articleCardPanelHeaderLeft,articleCardPanelHeaderRightSlot,articleCardPanelHeaderActionButton,articleCardPanelHeaderRightIcon,articleCardPanelHeaderText,articleCardPanelBody,articleCardPanelBodyPadding,ArticleCardPanelRoot,ArticleCardPanelBody,ArticleCardPanelHeader auto */ 

/**
 * Shared styles and components for article card-style panels: CodeBlock, Tabs, FileTree, EncryptedFragment.
 * Ensures consistent root, header, and body appearance.
 *
 * IMPORTANT: Use ArticleCardPanelHeader (div) or figcaption/summary for panel bars. Never use <header>
 * inside article content—it matches the global rule section[aria-labelledby="inner-page-title"] header
 * and causes wrong colors.
 */ /** Root container: border, background, spacing */ const articleCardPanelRoot = 'my-4 overflow-hidden rounded-lg border-ui bg-muted text-sm text-foreground';
/** Header bar: bottom border, muted bg, icon + text styling */ const articleCardPanelHeader = 'flex h-9 items-center border-b-ui bg-muted/80 mt-0 px-3 text-sm text-muted-foreground [&_svg]:size-4 [&_svg]:opacity-70';
/** Header when it has a right-side control (absolute slot). Use with articleCardPanelHeader. */ const articleCardPanelHeaderWithRightSlot = 'relative mt-0 pr-28';
/** Left content wrapper: icon + text, truncates. Use inside header. */ const articleCardPanelHeaderLeft = 'flex min-w-0 flex-1 items-center gap-2 overflow-hidden';
/** Wrapper for the right-side control (copy button, etc.). Position inside header. */ const articleCardPanelHeaderRightSlot = 'absolute right-1 top-1/2 -translate-y-1/2';
/** Icon button in the header right slot (e.g. copy). */ const articleCardPanelHeaderActionButton = 'size-7 shrink-0';
/** Decorative icon on the header right (e.g. Details chevron). */ const articleCardPanelHeaderRightIcon = 'size-4 shrink-0';
/** Header title/trigger text (slightly larger than body) */ const articleCardPanelHeaderText = '[font:inherit] text-sm';
/** Body area: background, padding */ const articleCardPanelBody = 'bg-background px-3 py-2';
/** Body padding only (e.g. CodeBlock pre has its own background) */ const articleCardPanelBodyPadding = 'px-3 py-2';
/**
 * Root container: <figure> with panel styling. Use for all article card panels.
 */ function ArticleCardPanelRoot({ className, children, ...rest }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figure", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(articleCardPanelRoot, className),
        ...rest,
        children: children
    });
}
/**
 * Body area: <div> with bg, padding. Use inside ArticleCardPanelRoot / figure.
 */ function ArticleCardPanelBody({ className, children, ...rest }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(articleCardPanelBody, className),
        ...rest,
        children: children
    });
}
/**
 * Reusable panel header bar. Uses div by default (not header) to avoid global CSS that targets
 * header inside section[aria-labelledby="inner-page-title"]. Use as="figcaption" when inside <figure>
 * (e.g. CodeBlock, MermaidPanel, FileTree).
 */ function ArticleCardPanelHeader({ left, right, className, as = 'div', ...rest }) {
    const classes = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(articleCardPanelHeader, right != null && articleCardPanelHeaderWithRightSlot, className);
    const content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: articleCardPanelHeaderLeft,
                children: left
            }),
            right != null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: articleCardPanelHeaderRightSlot,
                children: right
            })
        ]
    });
    if (as === 'figcaption') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption", {
            className: classes,
            ...rest,
            children: content
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        role: "presentation",
        className: classes,
        children: content
    });
}


/***/ }),

/***/ 16404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeferredInlineScript: () => (/* binding */ DeferredInlineScript)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44272);
/* harmony import */ var _lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48722);
/* __next_internal_client_entry_do_not_use__ DeferredInlineScript auto */ 



function scriptBodyFromChildren(children) {
    if (children == null) return '';
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) return children.map(scriptBodyFromChildren).join('');
    return String(children);
}
/**
 * Runs markdown/MDX inline <script> after hydration and inject snippets load.
 * Renders an in-flow anchor so legacy scripts (e.g. exhibits.js via document.currentScript)
 * insert DOM at the original markdown position instead of document.body.
 */ function DeferredInlineScript({ src, children, ...rest }) {
    const postSlug = (0,_contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__/* .usePostAssetBase */ .N9)();
    const anchorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const code = scriptBodyFromChildren(children);
    const srcStr = src != null ? (0,_contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__/* .resolvePostAssetUrl */ .o5)(String(src), postSlug) : '';
    const type = rest.type != null ? String(rest.type) : '';
    const restKey = JSON.stringify(rest);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let cancelled = false;
        let injectedNode = null;
        let externalScript = null;
        void (async ()=>{
            await (0,_lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_3__/* .whenInjectScriptsReady */ .Z7)();
            const anchor = anchorRef.current;
            if (cancelled || !anchor) return;
            if (srcStr) {
                const attrs = Object.entries(rest).map(([k, v])=>`${k}="${String(v).replace(/"/g, '&quot;')}"`).join(' ');
                const attrStr = attrs ? ` ${attrs}` : '';
                const result = await (0,_lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_3__/* .injectScriptSnippet */ .ee)(`<script src="${srcStr}"${attrStr}></script>`, {
                    anchor
                });
                if (cancelled) return;
                externalScript = result.script;
                anchor.remove();
                return;
            }
            if (!code.trim()) return;
            if (type && type !== 'text/javascript' && type !== 'module' && type !== 'application/javascript') {
                return;
            }
            const result = (0,_lib_inject_script_utils__WEBPACK_IMPORTED_MODULE_3__/* .injectInlineScriptCode */ .P4)(code, {
                anchor
            });
            if (cancelled) {
                result.insertedBeforeScript?.remove();
                return;
            }
            injectedNode = result.insertedBeforeScript;
        })().catch(()=>{});
        return ()=>{
            cancelled = true;
            injectedNode?.remove();
            externalScript?.remove();
        };
    }, [
        srcStr,
        code,
        type,
        restKey
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ref: anchorRef,
        className: "inline-script-anchor",
        "aria-hidden": "true"
    });
}


/***/ }),

/***/ 19600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MusicPlayer: () => (/* binding */ MusicPlayer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50910);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10029);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38194);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74643);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34152);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20232);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41641);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21362);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98817);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77314);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69747);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5121);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40980);
/* harmony import */ var _contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44272);
/* harmony import */ var _components_ui_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1606);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15891);
/* __next_internal_client_entry_do_not_use__ MusicPlayer auto */ 







const DEFAULT_VOLUME = 1;
function getTracksFromProps(props) {
    if (props.tracks && props.tracks.length > 0) {
        return props.tracks;
    }
    if (props.src) {
        return [
            {
                title: props.title ?? 'Untitled',
                author: props.author,
                cover: props.cover,
                src: props.src
            }
        ];
    }
    return [];
}
function resolveTracksForPost(tracks, postSlug) {
    return tracks.map((track)=>({
            ...track,
            src: (0,_contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__/* .resolvePostAssetUrl */ .o5)(track.src, postSlug),
            cover: track.cover ? (0,_contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__/* .resolvePostAssetUrl */ .o5)(track.cover, postSlug) : track.cover
        }));
}
function MusicPlayer(props) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('music');
    const postSlug = (0,_contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__/* .usePostAssetBase */ .N9)();
    const tracks = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>resolveTracksForPost(getTracksFromProps(props), postSlug), [
        props,
        postSlug
    ]);
    const isPlaylist = tracks.length > 1;
    const audioRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const [currentIndex, setCurrentIndex] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [playing, setPlaying] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [currentTime, setCurrentTime] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [duration, setDuration] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [volume, setVolume] = react__WEBPACK_IMPORTED_MODULE_1__.useState(DEFAULT_VOLUME);
    const [muted, setMuted] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [playMode, setPlayMode] = react__WEBPACK_IMPORTED_MODULE_1__.useState(props.playMode ?? 'list');
    const [listFolded, setListFolded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const currentTrack = tracks[currentIndex] ?? null;
    const togglePlay = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        if (!audioRef.current || !currentTrack) return;
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying((p)=>!p);
    }, [
        playing,
        currentTrack
    ]);
    const playNext = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        if (tracks.length === 0) return;
        const next = (currentIndex + 1) % tracks.length;
        if (playMode === 'list' && next === 0) {
            setPlaying(false);
            return;
        }
        setCurrentIndex(next);
        setCurrentTime(0);
        setDuration(0);
    }, [
        currentIndex,
        tracks.length,
        playMode
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!currentTrack) return;
        const el = audioRef.current;
        if (!el) return;
        el.src = currentTrack.src;
        el.load();
        if (playing) el.play().catch(()=>setPlaying(false));
    }, [
        currentIndex,
        currentTrack,
        playing
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const el = audioRef.current;
        if (!el) return;
        el.loop = playMode === 'single';
        el.volume = muted ? 0 : volume;
    }, [
        playMode,
        volume,
        muted
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const el = audioRef.current;
        if (!el) return;
        const onTimeUpdate = ()=>setCurrentTime(el.currentTime);
        const onDurationChange = ()=>setDuration(el.duration);
        const onEnded = ()=>{
            if (playMode === 'single') return;
            if (isPlaylist) {
                const next = currentIndex + 1;
                if (next < tracks.length) {
                    setCurrentIndex(next);
                    setCurrentTime(0);
                    setDuration(0);
                    el.src = tracks[next].src;
                    el.load();
                    el.play();
                } else if (playMode === 'list-loop') {
                    setCurrentIndex(0);
                    setCurrentTime(0);
                    setDuration(0);
                    el.src = tracks[0].src;
                    el.load();
                    el.play();
                } else {
                    setPlaying(false);
                }
            } else {
                setPlaying(false);
            }
        };
        const onPlay = ()=>setPlaying(true);
        const onPause = ()=>setPlaying(false);
        el.addEventListener('timeupdate', onTimeUpdate);
        el.addEventListener('durationchange', onDurationChange);
        el.addEventListener('ended', onEnded);
        el.addEventListener('play', onPlay);
        el.addEventListener('pause', onPause);
        return ()=>{
            el.removeEventListener('timeupdate', onTimeUpdate);
            el.removeEventListener('durationchange', onDurationChange);
            el.removeEventListener('ended', onEnded);
            el.removeEventListener('play', onPlay);
            el.removeEventListener('pause', onPause);
        };
    }, [
        isPlaylist,
        playMode,
        tracks,
        currentIndex
    ]);
    const progress = duration > 0 ? currentTime / duration * 100 : 0;
    const seek = (e)=>{
        const el = audioRef.current;
        if (!el || !duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        el.currentTime = x * duration;
    };
    const formatTime = (s)=>{
        if (!Number.isFinite(s) || s < 0) return '0:00';
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2, '0')}`;
    };
    const volumeBarRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const setVolumeFromClientY = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((clientY)=>{
        const el = volumeBarRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const y = clientY - rect.top;
        const pct = 1 - Math.max(0, Math.min(1, y / rect.height));
        setVolume(pct);
        if (pct > 0) setMuted(false);
    }, []);
    const onVolumeBarPointer = (e)=>{
        e.preventDefault();
        setVolumeFromClientY(e.clientY);
    };
    const toggleMute = ()=>{
        setMuted((m)=>!m);
    };
    const goPrev = ()=>{
        if (tracks.length === 0) return;
        const prev = currentIndex - 1;
        if (prev < 0 && playMode === 'list-loop') {
            setCurrentIndex(tracks.length - 1);
            setCurrentTime(0);
            setDuration(0);
            setPlaying(true);
        } else if (prev >= 0) {
            setCurrentIndex(prev);
            setCurrentTime(0);
            setDuration(0);
            setPlaying(true);
        }
    };
    const goNext = ()=>{
        if (tracks.length === 0) return;
        const next = currentIndex + 1;
        if (next >= tracks.length && playMode === 'list-loop') {
            setCurrentIndex(0);
            setCurrentTime(0);
            setDuration(0);
            setPlaying(true);
        } else if (next < tracks.length) {
            setCurrentIndex(next);
            setCurrentTime(0);
            setDuration(0);
            setPlaying(true);
        }
    };
    const cyclePlayMode = ()=>{
        if (tracks.length <= 1) {
            setPlayMode((m)=>m === 'list' ? 'single' : 'list');
        } else {
            setPlayMode((m)=>m === 'list' ? 'single' : m === 'single' ? 'list-loop' : 'list');
        }
    };
    if (!currentTrack) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)('my-5 overflow-hidden rounded-lg border-ui bg-card', props.className),
        children: [
            isPlaylist && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        onClick: ()=>setListFolded((f)=>!f),
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeader */ .w, 'w-full cursor-pointer hover:bg-muted/60 transition-colors border-b-0'),
                        "aria-expanded": !listFolded,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeaderLeft */ .bc,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                        className: "size-4 shrink-0 opacity-70",
                                        "aria-hidden": true
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "Playlist (",
                                            tracks.length,
                                            ")"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeaderRightIcon */ .lu, 'transition-transform', !listFolded && 'rotate-90'),
                                "aria-hidden": true
                            })
                        ]
                    }),
                    !listFolded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                        className: "max-h-36 overflow-y-auto rounded-lg p-5 pb-2 text-card-foreground my-0 space-y-0.5 list-none",
                        children: tracks.map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                className: "my-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setCurrentIndex(i);
                                        setCurrentTime(0);
                                        setDuration(0);
                                        setPlaying(false);
                                    },
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)('flex w-full items-center rounded-md py-1 pr-2 pl-2 text-left text-[13px] leading-relaxed font-normal truncate transition-colors outline-none', 'hover:bg-accent hover:text-accent-foreground', i === currentIndex && 'bg-accent text-accent-foreground'),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)('shrink-0 tabular-nums mr-2', i === currentIndex ? 'text-accent-foreground' : 'text-muted-foreground'),
                                            children: [
                                                i + 1,
                                                "."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "min-w-0 truncate",
                                            children: [
                                                t.title,
                                                t.author ? ` — ${t.author}` : ''
                                            ]
                                        })
                                    ]
                                })
                            }, `${t.src}-${i}`))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-3 p-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "shrink-0 flex flex-col items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative size-20 rounded overflow-hidden bg-muted",
                                children: [
                                    currentTrack.cover ? /* eslint-disable-next-line @next/next/no-img-element */ /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                        src: currentTrack.cover,
                                        alt: "",
                                        className: "w-full h-full object-cover"
                                    }, currentTrack.src) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "w-full h-full flex items-center justify-center text-muted-foreground",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                                            className: "size-6"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                        type: "button",
                                        onClick: togglePlay,
                                        "aria-label": playing ? 'Pause' : 'Play',
                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)('absolute rounded-full bg-black/50 hover:bg-black/60 text-white flex items-center justify-center transition-all duration-200 ease-out', playing ? 'bottom-1 right-1 size-7' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-10'),
                                        children: playing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                                            className: "size-3.5 ml-0.5 shrink-0",
                                            "aria-hidden": true
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                                            className: "size-5 ml-0.5 shrink-0",
                                            "aria-hidden": true
                                        })
                                    })
                                ]
                            }),
                            isPlaylist && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pt-1 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                        type: "button",
                                        onClick: goPrev,
                                        "aria-label": t('previous'),
                                        className: "p-1 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-40 disabled:pointer-events-none",
                                        disabled: tracks.length <= 1 && playMode !== 'list-loop',
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                                            className: "size-4",
                                            "aria-hidden": true
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-xs text-muted-foreground tabular-nums min-w-[2ch] text-center",
                                        children: [
                                            currentIndex + 1,
                                            "/",
                                            tracks.length
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                        type: "button",
                                        onClick: goNext,
                                        "aria-label": t('next'),
                                        className: "p-1 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-40 disabled:pointer-events-none",
                                        disabled: tracks.length <= 1 && playMode !== 'list-loop',
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                                            className: "size-4",
                                            "aria-hidden": true
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 min-w-0 flex flex-col justify-center gap-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-baseline gap-2 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "font-semibold text-foreground text-base truncate shrink min-w-0",
                                        children: currentTrack.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-sm text-muted-foreground shrink-0 whitespace-nowrap",
                                        children: currentTrack.author ?? '—'
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-2 flex items-center gap-2 min-w-0 h-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        role: "slider",
                                        "aria-label": t('seek'),
                                        "aria-valuemin": 0,
                                        "aria-valuemax": duration,
                                        "aria-valuenow": currentTime,
                                        tabIndex: 0,
                                        className: "flex-1 min-w-[48px] h-1.5 rounded-full cursor-pointer overflow-hidden self-center",
                                        onClick: seek,
                                        onKeyDown: (e)=>{
                                            const el = audioRef.current;
                                            if (!el || !duration) return;
                                            const step = 5;
                                            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                                                e.preventDefault();
                                                el.currentTime = Math.min(duration, el.currentTime + step);
                                            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                                                e.preventDefault();
                                                el.currentTime = Math.max(0, el.currentTime - step);
                                            }
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_progress__WEBPACK_IMPORTED_MODULE_3__/* .Progress */ .k, {
                                            value: progress,
                                            className: "h-full rounded-full"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-xs text-muted-foreground tabular-nums shrink-0 whitespace-nowrap self-center",
                                        children: [
                                            formatTime(currentTime),
                                            " / ",
                                            formatTime(duration)
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center gap-0.5 shrink-0 h-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative group h-6 flex items-center pt-10 -mt-10",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        ref: volumeBarRef,
                                                        role: "slider",
                                                        "aria-label": t('volume'),
                                                        "aria-valuemin": 0,
                                                        "aria-valuemax": 1,
                                                        "aria-valuenow": muted ? 0 : volume,
                                                        tabIndex: 0,
                                                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 mb-0.5 h-10 w-1.5 flex items-center justify-center overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150 cursor-pointer",
                                                        onClick: onVolumeBarPointer,
                                                        onMouseDown: (e)=>{
                                                            onVolumeBarPointer(e);
                                                            const onMove = (e2)=>setVolumeFromClientY(e2.clientY);
                                                            const onUp = ()=>{
                                                                window.removeEventListener('mousemove', onMove);
                                                                window.removeEventListener('mouseup', onUp);
                                                            };
                                                            window.addEventListener('mousemove', onMove);
                                                            window.addEventListener('mouseup', onUp);
                                                        },
                                                        onKeyDown: (e)=>{
                                                            const step = 0.05;
                                                            if (e.key === 'ArrowUp') {
                                                                e.preventDefault();
                                                                setVolume(Math.min(1, (muted ? 0 : volume) + step));
                                                                setMuted(false);
                                                            } else if (e.key === 'ArrowDown') {
                                                                e.preventDefault();
                                                                setVolume(Math.max(0, (muted ? 0 : volume) - step));
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "rotate-[-90deg] w-10 h-1.5 shrink-0 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_progress__WEBPACK_IMPORTED_MODULE_3__/* .Progress */ .k, {
                                                                value: (muted ? 0 : volume) * 100,
                                                                className: "h-full w-full rounded-full"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                        type: "button",
                                                        onClick: toggleMute,
                                                        "aria-label": muted ? 'Unmute' : 'Mute',
                                                        className: "h-6 w-6 flex items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0",
                                                        children: muted || volume === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                                                            className: "size-4",
                                                            "aria-hidden": true
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                                                            className: "size-4",
                                                            "aria-hidden": true
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                type: "button",
                                                "aria-label": `Play mode: ${playMode}`,
                                                title: playMode === 'list' ? 'List play' : playMode === 'single' ? 'Single loop' : 'List loop',
                                                onClick: cyclePlayMode,
                                                className: "h-6 w-6 flex items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0",
                                                children: [
                                                    playMode === 'list' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
                                                        className: "size-4",
                                                        "aria-hidden": true
                                                    }),
                                                    playMode === 'single' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                                                        className: "size-4",
                                                        "aria-hidden": true
                                                    }),
                                                    playMode === 'list-loop' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
                                                        className: "size-4",
                                                        "aria-hidden": true
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("audio", {
                ref: audioRef,
                preload: "metadata"
            })
        ]
    });
}


/***/ }),

/***/ 20427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubField: () => (/* binding */ SubField),
/* harmony export */   SubFields: () => (/* binding */ SubFields)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ SubFields,SubField auto */ 

/**
 * Flex layout container.
 * Children (`SubField`) are laid out horizontally with equal width,
 * separated by a vertical divider.
 */ function SubFields({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("flex divide-x divide-border border-2 border-border", "my-2 mx-auto", className),
        children: children
    });
}
/**
 * A single field within a `SubFields` container.
 * Accepts any Markdown / MDX content as children.
 */ function SubField({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("flex-1 px-3 overflow-auto", className),
        children: children
    });
}



/***/ }),

/***/ 23229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MdxContent: () => (/* binding */ MdxContent)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
var jsx_runtime_namespaceObject = /*#__PURE__*/__webpack_require__.t(jsx_runtime, 2);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/mdx/ArchivesPageContent.tsx
var ArchivesPageContent = __webpack_require__(31857);
// EXTERNAL MODULE: ./src/components/mdx/CategoriesPageContent.tsx
var CategoriesPageContent = __webpack_require__(27322);
// EXTERNAL MODULE: ./src/components/mdx/ChildPostsList.tsx
var ChildPostsList = __webpack_require__(10181);
// EXTERNAL MODULE: ./src/components/mdx/LinksPageContent.tsx
var LinksPageContent = __webpack_require__(6455);
// EXTERNAL MODULE: ./src/components/mdx/TagsPageContent.tsx
var TagsPageContent = __webpack_require__(80367);
// EXTERNAL MODULE: ./src/components/business/FancyboxRoot.tsx
var FancyboxRoot = __webpack_require__(71445);
// EXTERNAL MODULE: ./src/components/business/PostBodyHydratedMarker.tsx
var PostBodyHydratedMarker = __webpack_require__(28596);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/index.js
var _mdx_js_react = __webpack_require__(21827);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8743);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-dev-runtime.js
var jsx_dev_runtime = __webpack_require__(35733);
;// ./src/components/business/MdxRemote.tsx
/* __next_internal_client_entry_do_not_use__ MdxRemote auto */ 




const jsxRuntime =  true ? jsx_runtime_namespaceObject : 0;
/**
 * Renders compiled MDX source. Replaces next-mdx-remote's MDXRemote.
 * Uses @mdx-js/mdx compile output format (function-body).
 *
 * Post-local relative imports (`import { X } from './X'`) are handled
 * by stripping them via `removeImportsExportsPlugin` during MDX compile
 * and exposing their bindings as React components via the `components`
 * prop on `MDXProvider` (in `MdxContent`). The compiled body then
 * destructures `X` from `useMDXComponents()` exactly like a regular
 * MDX-provided component.
 */ function MdxRemote({ compiledSource, scope = {}, frontmatter = {}, components = {} }) {
    const Content = react.useMemo(()=>{
        const fullScope = {
            opts: {
                ..._mdx_js_react,
                ...jsxRuntime
            },
            frontmatter,
            ...scope
        };
        const keys = Object.keys(fullScope);
        const values = Object.values(fullScope);
        const hydrateFn = Reflect.construct(Function, keys.concat(compiledSource));
        return hydrateFn.apply(hydrateFn, values).default;
    }, [
        compiledSource,
        scope,
        frontmatter
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* MDXProvider */.x, {
        components: components,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {})
    });
}

// EXTERNAL MODULE: ./src/components/mermaid/index.ts
var mermaid = __webpack_require__(4316);
// EXTERNAL MODULE: ./src/components/business/DeferredInlineScript.tsx
var DeferredInlineScript = __webpack_require__(16404);
// EXTERNAL MODULE: ./src/components/business/FadeInNextImage.tsx
var FadeInNextImage = __webpack_require__(54378);
// EXTERNAL MODULE: ./src/contexts/PostAssetBaseContext.tsx
var PostAssetBaseContext = __webpack_require__(44272);
// EXTERNAL MODULE: ./src/contexts/SiteConfigContext.tsx
var SiteConfigContext = __webpack_require__(90682);
// EXTERNAL MODULE: ./src/components/business/post-body-rehype-components.tsx + 3 modules
var post_body_rehype_components = __webpack_require__(61543);
;// ./source/_tsx/PostDemoCard.tsx
/* __next_internal_client_entry_do_not_use__ PostDemoCard,default auto */ 

function PostDemoCard({ title = 'Article-local component', description = 'Imported from a sibling .tsx via MDX import.', badge = 'demo' }) {
    const [count, setCount] = react.useState(0);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "not-prose my-6 rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mb-3 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground",
                        children: badge
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "m-0 text-lg font-semibold",
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "m-0 text-sm text-muted-foreground",
                children: description
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-4 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        type: "button",
                        onClick: ()=>setCount((n)=>n + 1),
                        className: "rounded-md border border-input bg-background px-3 py-1 text-sm text-foreground hover:bg-accent hover:text-accent-foreground",
                        children: [
                            "Clicked ",
                            count,
                            " time",
                            count === 1 ? '' : 's'
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-xs text-muted-foreground",
                        children: "State lives in the article-local .tsx."
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const _tsx_PostDemoCard = ((/* unused pure expression or super */ null && (PostDemoCard)));

;// ./source/_tsx/Poem.tsx
/* __next_internal_client_entry_do_not_use__ Poem,default auto */ 

function Poem({ title, author, lines }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mx-auto my-2 min-w-[240px] w-fit max-w-full rounded-xl border border-border px-3 py-2.5 shadow-md",
        style: {
            background: '#ffe70020'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "m-0 text-center text-lg font-bold",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "m-0 mt-2 text-center text-sm text-muted-foreground",
                children: author
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "mt-3 text-center",
                children: lines.map((line, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "m-0 text-center",
                        children: line
                    }, i))
            })
        ]
    });
}
/* harmony default export */ const _tsx_Poem = ((/* unused pure expression or super */ null && (Poem)));

// EXTERNAL MODULE: ./node_modules/next/dist/api/app-dynamic.js
var app_dynamic = __webpack_require__(37206);
;// ./source/_tsx/Web-Remotion/RemotionPlayer.tsx
/* __next_internal_client_entry_do_not_use__ RemotionPlayer auto */ 



// Disable SSR — Remotion's <Player> requires browser APIs
const Player = (0,app_dynamic["default"])(()=>__webpack_require__.e(/* import() */ 5726).then(__webpack_require__.bind(__webpack_require__, 55726)).then((mod)=>mod.Player), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(55726)
            ]
    },
    ssr: false
});
function RemotionPlayer({ component: componentName, durationInFrames = 210, fps = 30, compositionWidth = 1920, compositionHeight = 1080, controls = true, autoPlay = true, loop = true, clickToPlay = true, showVolumeControls = false }) {
    const mdxComponents = (0,lib/* useMDXComponents */.R)();
    const Comp = mdxComponents[componentName] ?? (()=>null);
    const [mounted, setMounted] = react.useState(false);
    react.useEffect(()=>{
        setMounted(true);
    }, []);
    // Show a placeholder during SSR to avoid hydration mismatch
    if (!mounted) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "my-4 overflow-hidden rounded-lg",
            style: {
                aspectRatio: `${compositionWidth}/${compositionHeight}`
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex h-full items-center justify-center bg-muted text-sm text-muted-foreground",
                children: "Loading animation…"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "my-4 overflow-hidden rounded-lg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Player, {
            component: Comp,
            durationInFrames: durationInFrames,
            fps: fps,
            compositionWidth: compositionWidth,
            compositionHeight: compositionHeight,
            style: {
                width: '100%',
                display: 'block'
            },
            controls: controls,
            autoPlay: autoPlay,
            loop: loop,
            clickToPlay: controls ? false : clickToPlay,
            showVolumeControls: showVolumeControls
        })
    });
}

// EXTERNAL MODULE: ./node_modules/remotion/dist/esm/index.mjs
var esm = __webpack_require__(24551);
;// ./source/_tsx/Web-Remotion/populationData.ts
const populationData = [
    {
        year: 2014,
        population: 1371860000
    },
    {
        year: 2015,
        population: 1379860000
    },
    {
        year: 2016,
        population: 1387790000
    },
    {
        year: 2017,
        population: 1396215000
    },
    {
        year: 2018,
        population: 1402760000
    },
    {
        year: 2019,
        population: 1407745000
    },
    {
        year: 2020,
        population: 1411100000
    },
    {
        year: 2021,
        population: 1412360000
    },
    {
        year: 2022,
        population: 1412175000
    },
    {
        year: 2023,
        population: 1410710000
    },
    {
        year: 2024,
        population: 1408975000
    },
    {
        year: 2025,
        population: 1406585000
    }
];
const maxPopulation = Math.max(...populationData.map((d)=>d.population));
const minPopulation = Math.min(...populationData.map((d)=>d.population));

;// ./source/_tsx/Web-Remotion/ChinaPopulation.tsx



const W = 1920;
const H = 1080;
const MT = 190;
const MR = 80;
const MB = 110;
const ML = 110;
const CW = W - ML - MR;
const CH = H - MT - MB;
const BAR_GAP = 0.38;
const BAR_W = CW / populationData.length * (1 - BAR_GAP);
const Y_MIN = 1300000000;
const Y_MAX = 1430000000;
const Y_RNG = Y_MAX - Y_MIN;
const getY = (val)=>MT + CH - (val - Y_MIN) / Y_RNG * CH;
const fmt = (n)=>(n / 100000000).toFixed(2) + "亿";
const ChinaPopulation = ()=>{
    const frame = (0,esm/* useCurrentFrame */.UC)();
    const titleIn = (0,esm/* interpolate */.GW)(frame, [
        0,
        30
    ], [
        0,
        1
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    });
    const titleY = (0,esm/* interpolate */.GW)(frame, [
        0,
        30
    ], [
        -25,
        0
    ], {
        extrapolateRight: "clamp"
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm/* AbsoluteFill */.H1, {
        style: {
            background: "linear-gradient(145deg, #070712 0%, #111128 40%, #0a0a1a 100%)",
            fontFamily: "'Noto Sans SC','Microsoft YaHei','PingFang SC',sans-serif",
            color: "#fff"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    position: "absolute",
                    top: 45,
                    width: "100%",
                    textAlign: "center",
                    opacity: titleIn,
                    transform: `translateY(${titleY}px)`
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        style: {
                            fontSize: 54,
                            fontWeight: 700,
                            margin: 0,
                            letterSpacing: 4,
                            background: "linear-gradient(90deg,#60a5fa,#fff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        },
                        children: "中国人口变化趋势"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        style: {
                            fontSize: 18,
                            color: "#475569",
                            margin: "10px 0 0",
                            letterSpacing: 2
                        },
                        children: "China Population (2014-2025) \xb7 World Bank"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                width: W,
                height: H,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                                id: "gRise",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#60a5fa"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#2563eb"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                                id: "gPeak",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#fbbf24"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#d97706"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                                id: "gDecline",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#f87171"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#dc2626"
                                    })
                                ]
                            })
                        ]
                    }),
                    [
                        1.3,
                        1.35,
                        1.4,
                        1.45
                    ].map((v)=>{
                        const y = getY(v * 1000000000);
                        const op = (0,esm/* interpolate */.GW)(frame, [
                            5,
                            25
                        ], [
                            0,
                            1
                        ], {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp"
                        });
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                            opacity: op,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("line", {
                                    x1: ML,
                                    y1: y,
                                    x2: ML + CW,
                                    y2: y,
                                    stroke: "rgba(255,255,255,0.06)",
                                    strokeWidth: 1
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("text", {
                                    x: ML - 14,
                                    y: y + 5,
                                    textAnchor: "end",
                                    fill: "#475569",
                                    fontSize: 14,
                                    children: [
                                        v.toFixed(2),
                                        "亿"
                                    ]
                                })
                            ]
                        }, v);
                    }),
                    populationData.map((d, i)=>{
                        const start = 25 + i * 9;
                        const delay = Math.max(0, frame - start);
                        const h = (d.population - Y_MIN) / Y_RNG * CH;
                        const y = getY(d.population);
                        const totalW = CW / populationData.length;
                        const x = ML + i * totalW + (totalW - BAR_W) / 2;
                        const grow = (0,esm/* spring */.oz)({
                            frame: delay,
                            fps: 30,
                            config: {
                                damping: 16,
                                stiffness: 110
                            }
                        });
                        const op = (0,esm/* interpolate */.GW)(frame, [
                            start,
                            start + 6
                        ], [
                            0,
                            1
                        ], {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp"
                        });
                        let fill = "url(#gRise)";
                        if (d.year === 2021) fill = "url(#gPeak)";
                        else if (d.year >= 2022) fill = "url(#gDecline)";
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                            opacity: op,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                    x: x,
                                    y: y + (1 - grow) * h,
                                    width: BAR_W,
                                    height: h * grow,
                                    fill: fill,
                                    rx: 3
                                }),
                                grow > 0.7 && /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                                    x: x + BAR_W / 2,
                                    y: y - 8,
                                    textAnchor: "middle",
                                    fill: "#e2e8f0",
                                    fontSize: 13,
                                    fontWeight: 600,
                                    children: fmt(d.population)
                                })
                            ]
                        }, d.year);
                    }),
                    populationData.map((d, i)=>{
                        const start = 25 + i * 9;
                        const op = (0,esm/* interpolate */.GW)(frame, [
                            start,
                            start + 8
                        ], [
                            0,
                            1
                        ], {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp"
                        });
                        const totalW = CW / populationData.length;
                        const x = ML + i * totalW + totalW / 2;
                        const isPeak = d.year === 2021;
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                            x: x,
                            y: H - MB + 22,
                            textAnchor: "middle",
                            fill: isPeak ? "#fbbf24" : "#64748b",
                            fontSize: isPeak ? 15 : 13,
                            fontWeight: isPeak ? 700 : 400,
                            opacity: op,
                            children: d.year
                        }, "lbl-" + d.year);
                    }),
                    frame > 130 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                        opacity: (0,esm/* interpolate */.GW)(frame, [
                            130,
                            150
                        ], [
                            0,
                            1
                        ], {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp"
                        }),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                x: 680,
                                y: 20,
                                width: 560,
                                height: 52,
                                rx: 8,
                                fill: "rgba(239,68,68,0.12)",
                                stroke: "rgba(239,68,68,0.3)",
                                strokeWidth: 1
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                                x: 960,
                                y: 42,
                                textAnchor: "middle",
                                fill: "#fca5a5",
                                fontSize: 22,
                                fontWeight: 700,
                                children: "▼ 人口连续四年负增长"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                                x: 960,
                                y: 62,
                                textAnchor: "middle",
                                fill: "#94a3b8",
                                fontSize: 14,
                                children: "2022年起人口总量持续下降"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// ./scripts/post-local-mdx-imports.generated.tsx
// Auto-generated by scripts/extract-post-local-mdx-imports.mjs — do not edit by hand.
// Scans source/_posts/** for relative MDX imports (e.g. `import X from './X'`)
// and statically imports the referenced .tsx/.jsx so they end up in the
// client bundle. The slug-keyed object below is consumed at render time by
// `resolvePostLocalScope` (src/lib/content/resolve-post-local-mdx-imports.ts)
// and forwarded to `MdxRemote` as the `__postLocalScope` argument.
//
// Re-run scripts/run-all.mjs after adding or changing relative imports in any post.




const POST_MDX_LOCAL_SCOPES = {
    "Blog-使用 Next-js 重构 hexo 博客": {
        "PostDemoCard": PostDemoCard
    },
    "Diary-五一记录/Diary-殷邺相彰": {
        "Poem": Poem
    },
    "Web-Remotion": {
        "RemotionPlayer": RemotionPlayer,
        "ChinaPopulation": ChinaPopulation
    }
};

;// ./src/lib/content/resolve-post-local-mdx-imports.ts
/**
 * Runtime side of the per-post MDX import feature.
 *
 * Build-time:
 *   - `scripts/extract-post-local-mdx-imports.mjs` walks every post under
 *     `source/_posts/`, finds relative imports like
 *     `import X from './X'`, statically imports the matching `.tsx`/`.jsx`
 *     so webpack bundles it, and exposes the slug → bindings map as
 *     `POST_MDX_LOCAL_SCOPES`.
 *
 * Compile-time:
 *   - `removeImportsExportsPlugin` (a remark plugin in
 *     `src/lib/remove-imports-exports.ts`) strips all ESM import/export
 *     nodes at the AST level during MDX compilation.
 *
 * Runtime:
 *   - `MdxContent` looks up the slug's bindings via
 *     `resolvePostLocalScope(slug)` and passes them to `MdxRemote`,
 *     which exposes them as the `__postLocalScope` argument that the
 *     compiled body destructures from.
 */ 
/**
 * Return the component bindings registered for a post slug, or an empty
 * object for posts that have no local imports. Always returns a fresh
 * object so callers can safely merge it into a render-scope.
 */ function resolvePostLocalScope(postSlug) {
    const scope = POST_MDX_LOCAL_SCOPES[postSlug];
    return scope ? {
        ...scope
    } : {};
}

;// ./src/components/business/MdxContent.tsx
/* __next_internal_client_entry_do_not_use__ MdxContent auto */ 

















const baseMdxComponents = (0,post_body_rehype_components/* getBaseMdxComponentsForPosts */.FF)();
const PAGE_CONTENT_REGISTRY = {
    ArchivesPageContent: ArchivesPageContent/* ArchivesPageContent */.i,
    CategoriesPageContent: CategoriesPageContent.CategoriesPageContent,
    ChildPostsList: ChildPostsList/* ChildPostsList */.W,
    LinksPageContent: LinksPageContent/* LinksPageContent */.C,
    TagsPageContent: TagsPageContent/* TagsPageContent */.E
};
function MdxContent({ mdxSource, fancyboxEnabled = false, photoFigcaptionEnabled = false, extraComponentNames, extraComponentProps, slug }) {
    const extraComponents = {};
    for (const name of extraComponentNames ?? []){
        const Comp = PAGE_CONTENT_REGISTRY[name];
        if (!Comp) continue;
        const props = extraComponentProps?.[name];
        if (props) {
            extraComponents[name] = (mdxProps)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Comp, {
                    ...props,
                    ...mdxProps
                });
        } else {
            extraComponents[name] = Comp;
        }
    }
    const postSlug = (0,PostAssetBaseContext/* usePostAssetBase */.N9)();
    const { imageFadeInEnabled = false } = (0,SiteConfigContext/* useSiteConfig */.z)();
    const mdxImg = (0,react.useMemo)(()=>(0,post_body_rehype_components/* createMdxImg */.NJ)(fancyboxEnabled, photoFigcaptionEnabled, postSlug, {
            imageFadeInEnabled
        }), [
        fancyboxEnabled,
        photoFigcaptionEnabled,
        postSlug,
        imageFadeInEnabled
    ]);
    const mdxImgShortcode = (0,react.useMemo)(()=>(0,post_body_rehype_components/* createMdxImg */.NJ)(fancyboxEnabled, photoFigcaptionEnabled, postSlug, {
            standaloneSpacing: true,
            imageFadeInEnabled
        }), [
        fancyboxEnabled,
        photoFigcaptionEnabled,
        postSlug,
        imageFadeInEnabled
    ]);
    const postBodyLink = (0,react.useMemo)(()=>(0,post_body_rehype_components/* createPostBodyLink */.Jf)(postSlug), [
        postSlug
    ]);
    const components = {
        ...baseMdxComponents,
        a: postBodyLink,
        img: mdxImg,
        Img: mdxImgShortcode,
        Image: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FadeInNextImage/* FadeInNextImage */.A, {
                enabled: imageFadeInEnabled,
                className: "rounded-lg",
                ...props
            }),
        script: DeferredInlineScript.DeferredInlineScript,
        ...extraComponents
    };
    // Post-local relative imports (`import X from './X'`) are stripped
    // at compile time by `removeImportsExportsPlugin`. The matching
    // component values are loaded by the build-time generator and
    // resolved here at render time by post slug, then merged into
    // `components` so the compiled MDX body can pick them up via
    // `useMDXComponents()`.
    const localScope = (0,react.useMemo)(()=>postSlug ? resolvePostLocalScope(postSlug) : {}, [
        postSlug
    ]);
    const componentsWithLocal = (0,react.useMemo)(()=>({
            ...components,
            ...localScope
        }), [
        components,
        localScope
    ]);
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MdxRemote, {
                ...mdxSource,
                components: componentsWithLocal
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


/***/ }),

/***/ 27322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesPageContent: () => (/* binding */ CategoriesPageContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _components_ui_content_link_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99078);
/* harmony import */ var _lib_app_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69082);
/* __next_internal_client_entry_do_not_use__ CategoriesPageContent auto */ 


const pillLayout = 'inline-flex items-baseline gap-0.5 px-2.5 py-1.5';
function CategoriesPageContent({ categories }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "my-5 flex flex-wrap gap-3",
        children: categories.map(({ name, count })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_content_link_card__WEBPACK_IMPORTED_MODULE_1__/* .ContentLinkCard */ .O, {
                href: (0,_lib_app_path__WEBPACK_IMPORTED_MODULE_2__/* .internalHref */ .dI)(`/categories/${encodeURIComponent(name)}`),
                className: pillLayout,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "text-foreground",
                        children: name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "pl-1.5 font-medium italic text-highlight",
                        children: count
                    })
                ]
            }, name))
    });
}


/***/ }),

/***/ 28596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ PostBodyHydratedMarker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _lib_post_post_body_hydrated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9819);
/* __next_internal_client_entry_do_not_use__ PostBodyHydratedMarker auto */ 

/**
 * Signals that compiled post body has mounted so legacy inline scripts can safely
 * mutate DOM (avoids React hydration mismatches from pre-hydration style changes).
 */ function PostBodyHydratedMarker() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Defer one frame so inline legacy scripts run after hydration commit.
        const frame = requestAnimationFrame(()=>{
            (0,_lib_post_post_body_hydrated__WEBPACK_IMPORTED_MODULE_1__/* .markPostBodyHydrated */ .F$)();
        });
        return ()=>{
            cancelAnimationFrame(frame);
            (0,_lib_post_post_body_hydrated__WEBPACK_IMPORTED_MODULE_1__/* .clearPostBodyHydrated */ .Xp)();
        };
    }, []);
    return null;
}


/***/ }),

/***/ 28710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A7: () => (/* binding */ getLanguageIcon)
/* harmony export */ });
/* unused harmony exports LANGUAGE_ICON_MAP, CODE_EXTENSIONS */
/* harmony import */ var _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10762);
/* harmony import */ var _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48274);
/* harmony import */ var _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33282);


/**
 * Map of language identifiers and file extensions to icon components.
 * Used by CodeBlock (language from Shiki) and FileTree (extension from filename).
 */ const LANGUAGE_ICON_MAP = {
    // TypeScript / JavaScript
    ts: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiTypescript */ .cyb,
    tsx: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiTypescript */ .cyb,
    typescript: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiTypescript */ .cyb,
    js: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJavascript */ .AeH,
    jsx: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJavascript */ .AeH,
    mjs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJavascript */ .AeH,
    cjs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJavascript */ .AeH,
    javascript: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJavascript */ .AeH,
    rescript: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRescript */ .hj4,
    assemblyscript: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiAssemblyscript */ .Eo1,
    // Data / config
    json: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJson */ .zUx,
    jsonc: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJson */ .zUx,
    yaml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiYaml */ .WDB,
    yml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiYaml */ .WDB,
    toml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiToml */ .blH,
    xml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiXml */ .Q_I,
    // Python & data
    py: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPython */ .ptC,
    pyw: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPython */ .ptC,
    python: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPython */ .ptC,
    jupyter: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJupyter */ .OLj,
    // Shell
    bash: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGnubash */ .$V9,
    sh: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGnubash */ .$V9,
    zsh: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGnubash */ .$V9,
    shell: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGnubash */ .$V9,
    powershell: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    pwsh: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    ps1: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    bat: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    cmd: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    // Markup / docs
    md: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiMarkdown */ .S_6,
    markdown: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiMarkdown */ .S_6,
    mdx: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiMarkdown */ .S_6,
    txt: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    text: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    html: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiHtml5 */ .$gB,
    htm: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiHtml5 */ .$gB,
    css: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCss3 */ .jrh,
    scss: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSass */ .$Ue,
    sass: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSass */ .$Ue,
    less: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCss3 */ .jrh,
    // Systems / C family
    c: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiC */ .Cbr,
    cpp: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCplusplus */ .Qin,
    'c++': _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCplusplus */ .Qin,
    cxx: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCplusplus */ .Qin,
    h: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiC */ .Cbr,
    hpp: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCplusplus */ .Qin,
    // Java / JVM
    java: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiOpenjdk */ .mYv,
    kt: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiKotlin */ .sjH,
    kotlin: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiKotlin */ .sjH,
    scala: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiScala */ .laJ,
    clj: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiClojure */ .P6J,
    cljs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiClojure */ .P6J,
    clojure: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiClojure */ .P6J,
    gradle: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGradle */ .WDC,
    groovy: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiScala */ .laJ,
    // C# / .NET
    csharp: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSharp */ .lb$,
    cs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSharp */ .lb$,
    'c#': _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSharp */ .lb$,
    fsharp: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiFsharp */ .BVK,
    fs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiFsharp */ .BVK,
    fable: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiFsharp */ .BVK,
    // Go / Rust / Swift
    go: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGo */ .ZRx,
    golang: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGo */ .ZRx,
    rust: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRust */ .xZd,
    rs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRust */ .xZd,
    swift: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSwift */ .cp,
    // Scripting
    rb: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRuby */ .LfU,
    ruby: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRuby */ .LfU,
    php: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPhp */ .XeU,
    lua: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiLua */ .Prs,
    pl: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPerl */ .jro,
    perl: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPerl */ .jro,
    // FP / other langs
    elixir: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiElixir */ .QeS,
    ex: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiElixir */ .QeS,
    exs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiElixir */ .QeS,
    erlang: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiErlang */ .KTs,
    erl: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiErlang */ .KTs,
    haskell: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiHaskell */ .zq2,
    hs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiHaskell */ .zq2,
    ocaml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiOcaml */ .Rdd,
    ml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiOcaml */ .Rdd,
    reason: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiReason */ .LBD,
    re: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiReason */ .LBD,
    res: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiReason */ .LBD,
    dart: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiDart */ .A7B,
    nim: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiNim */ .PO1,
    crystal: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCrystal */ .fZP,
    cr: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCrystal */ .fZP,
    zig: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiZig */ .B6p,
    julia: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJulia */ .W$S,
    jl: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJulia */ .W$S,
    racket: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRacket */ .zgI,
    rkt: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRacket */ .zgI,
    solidity: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSolidity */ .SKD,
    sol: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSolidity */ .SKD,
    // Frontend
    vue: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiVuedotjs */ .Zmg,
    vuejs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiVuedotjs */ .Zmg,
    react: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiReact */ .GWR,
    // Query / infra
    graphql: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGraphql */ .S9M,
    gql: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGraphql */ .S9M,
    sql: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPostgresql */ .$Wy,
    postgres: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPostgresql */ .$Wy,
    postgresql: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPostgresql */ .$Wy,
    mysql: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiMysql */ .z33,
    sqlite: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSqlite */ .H$_,
    mongodb: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiMongodb */ .$pK,
    redis: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRedis */ .mIs,
    // DevOps / config
    docker: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiDocker */ .tih,
    dockerfile: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiDocker */ .tih,
    kubernetes: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiKubernetes */ .tev,
    k8s: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiKubernetes */ .tev,
    nginx: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiNginx */ .$AU,
    env: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCoder */ .woj,
    config: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCoder */ .woj,
    ini: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCoder */ .woj,
    cfg: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCoder */ .woj,
    gitignore: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGit */ .rYG,
    editorconfig: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiEditorconfig */ .eB7,
    // Editors
    vim: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiVim */ .Jn8,
    neovim: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiNeovim */ .V5U,
    // Frontend (continued)
    svelte: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSvelte */ .Qmm,
    // Data / stats
    r: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJson_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiR */ .vXp
};
/**
 * Set of file extensions treated as code (syntax-highlighted) in FileTreeViewer.
 * Built from LANGUAGE_ICON_MAP so icons and code set stay in sync.
 */ const CODE_EXTENSIONS = new Set(Object.keys(LANGUAGE_ICON_MAP));
/** Get icon for a language/extension key, or fallback. */ function getLanguageIcon(key, fallback = _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A) {
    const k = key?.toLowerCase().trim();
    return (k && LANGUAGE_ICON_MAP[k]) ?? fallback;
}


/***/ }),

/***/ 31104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ CodeBlockVariantProvider),
/* harmony export */   X: () => (/* binding */ useCodeBlockVariant)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ CodeBlockVariantProvider,useCodeBlockVariant auto */ 

const CodeBlockVariantContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)('panel');
function CodeBlockVariantProvider({ value, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CodeBlockVariantContext.Provider, {
        value: value,
        children: children
    });
}
function useCodeBlockVariant() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CodeBlockVariantContext);
}


/***/ }),

/***/ 31507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LeafletMap: () => (/* binding */ LeafletMap)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/map-pin.js
var map_pin = __webpack_require__(24538);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(6296);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
// EXTERNAL MODULE: ./src/components/business/GameSourceHeaderActions.tsx
var GameSourceHeaderActions = __webpack_require__(80130);
// EXTERNAL MODULE: ./src/components/ui/article-card-panel.tsx
var article_card_panel = __webpack_require__(15891);
// EXTERNAL MODULE: ./src/contexts/PostAssetBaseContext.tsx
var PostAssetBaseContext = __webpack_require__(44272);
;// ./src/lib/leaflet/resolve-leaflet-options.ts
const DEFAULT_LEAFLET_MAP_CONFIG = {
    height: '280px',
    view: {
        zoom: 14,
        maxZoom: 18,
        minZoom: 3,
        zoomSnap: 0.1,
        zoomControl: true,
        fitBounds: true,
        fitBoundsPadding: 24
    },
    tileLayer: {
        url: 'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        attribution: '© Amap',
        subdomains: '1234',
        minZoom: 3,
        maxZoom: 18
    },
    defaults: {
        polyline: {
            stroke: '#16a34a',
            weight: 3
        },
        polygon: {
            stroke: '#2563eb',
            weight: 2,
            fillOpacity: 0.2
        },
        rectangle: {
            stroke: '#ea580c',
            weight: 1,
            fillOpacity: 0.15
        },
        circle: {
            stroke: '#dc2626',
            fill: '#f03',
            fillOpacity: 0.5,
            weight: 2
        }
    },
    interactions: {
        logClickCoordinates: false,
        logZoomLevel: false
    }
};
function normalizeInlineJson(data) {
    if (data == null) return {
        value: null,
        error: false
    };
    if (typeof data === 'object') return {
        value: data,
        error: false
    };
    if (typeof data === 'string') {
        const trimmed = data.trim();
        if (!trimmed) return {
            value: null,
            error: false
        };
        try {
            return {
                value: JSON.parse(trimmed),
                error: false
            };
        } catch  {
            return {
                value: null,
                error: true
            };
        }
    }
    return {
        value: data,
        error: false
    };
}
function isPlainObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function parseLeafletMapConfig(raw) {
    if (!isPlainObject(raw)) return null;
    return raw;
}
function mergeLeafletMapConfig(config, overrides) {
    const base = DEFAULT_LEAFLET_MAP_CONFIG;
    const fromFile = config ?? {};
    return {
        title: overrides.title?.trim() || fromFile.title?.trim() || undefined,
        height: overrides.height?.trim() || fromFile.height?.trim() || base.height,
        view: {
            ...base.view,
            ...fromFile.view,
            ...overrides.center ? {
                center: overrides.center
            } : {},
            ...overrides.zoom != null ? {
                zoom: overrides.zoom
            } : {}
        },
        tileLayer: {
            ...base.tileLayer,
            ...fromFile.tileLayer
        },
        defaults: {
            ...base.defaults,
            ...fromFile.defaults
        },
        interactions: {
            ...base.interactions,
            ...fromFile.interactions
        }
    };
}
function resolvePanelTitle(titleProp, configTitle) {
    const fromProp = titleProp?.trim();
    if (fromProp) return fromProp;
    if (configTitle?.trim()) return configTitle.trim();
    return 'Map';
}
/** GeoJSON order [lng, lat] → Leaflet LatLngExpression [lat, lng]. */ function geoJsonCoordToLeaflet(coord) {
    return [
        coord[1],
        coord[0]
    ];
}
function lngLatToLeaflet(center) {
    return [
        center[1],
        center[0]
    ];
}
function inferFeatureKind(geometryType, properties) {
    const explicit = properties?.kind;
    if (explicit) return explicit;
    switch(geometryType){
        case 'LineString':
        case 'MultiLineString':
            return 'polyline';
        case 'Polygon':
        case 'MultiPolygon':
            return 'polygon';
        case 'Point':
            return properties?.radius != null ? 'circle' : 'marker';
        default:
            return 'marker';
    }
}
function resolveFeatureStyle(kind, properties, defaults) {
    const kindDefaults = defaults?.[kind];
    const stroke = properties?.stroke ?? kindDefaults?.stroke;
    const fill = properties?.fill ?? properties?.fillColor ?? kindDefaults?.fill ?? kindDefaults?.fillColor;
    return {
        color: stroke,
        stroke,
        fill,
        fillColor: fill,
        fillOpacity: properties?.fillOpacity ?? kindDefaults?.fillOpacity,
        weight: properties?.weight ?? kindDefaults?.weight,
        opacity: properties?.opacity ?? kindDefaults?.opacity
    };
}

// EXTERNAL MODULE: ./node_modules/leaflet/dist/images/marker-icon-2x.png
var marker_icon_2x = __webpack_require__(47325);
// EXTERNAL MODULE: ./node_modules/leaflet/dist/images/marker-icon.png
var marker_icon = __webpack_require__(24282);
// EXTERNAL MODULE: ./node_modules/leaflet/dist/images/marker-shadow.png
var marker_shadow = __webpack_require__(44521);
;// ./src/lib/leaflet/render-geojson.ts




function isFeatureCollection(value) {
    return value.type === 'FeatureCollection' && Array.isArray(value.features);
}
function normalizeGeoJsonInput(raw) {
    if (raw == null || typeof raw !== 'object') return null;
    const obj = raw;
    if (obj.type === 'FeatureCollection' || obj.type === 'Feature' || obj.type === 'GeometryCollection') {
        return obj;
    }
    if ('type' in obj && typeof obj.type === 'string') {
        return {
            type: 'Feature',
            properties: {},
            geometry: obj
        };
    }
    return null;
}
function splitGeoJsonFeatures(geojson) {
    if (!isFeatureCollection(geojson)) {
        return {
            geoJsonLayerData: geojson,
            svgOverlays: []
        };
    }
    const standardFeatures = [];
    const svgOverlays = [];
    for (const feature of geojson.features){
        const kind = inferFeatureKind(feature.geometry?.type, feature.properties);
        if (kind === 'svgOverlay') {
            svgOverlays.push(feature);
        } else {
            standardFeatures.push(feature);
        }
    }
    return {
        geoJsonLayerData: {
            type: 'FeatureCollection',
            features: standardFeatures
        },
        svgOverlays
    };
}
function fixLeafletDefaultIcons(L) {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: typeof marker_icon_2x/* default */.A === 'string' ? marker_icon_2x/* default */.A : marker_icon_2x/* default */.A.src,
        iconUrl: typeof marker_icon/* default */.A === 'string' ? marker_icon/* default */.A : marker_icon/* default */.A.src,
        shadowUrl: typeof marker_shadow/* default */.A === 'string' ? marker_shadow/* default */.A : marker_shadow/* default */.A.src
    });
}
function renderGeoJsonOnMap(map, L, geojson, config) {
    const layers = [];
    const { geoJsonLayerData, svgOverlays } = splitGeoJsonFeatures(geojson);
    const geoLayer = L.geoJSON(geoJsonLayerData, {
        pointToLayer (feature, latlng) {
            const props = feature.properties;
            const kind = inferFeatureKind(feature.geometry?.type, props);
            if (kind === 'circle' && props?.radius != null) {
                const style = resolveFeatureStyle('circle', props, config.defaults);
                return L.circle(latlng, {
                    radius: props.radius,
                    color: style.color,
                    fillColor: style.fillColor,
                    fillOpacity: style.fillOpacity,
                    weight: style.weight,
                    opacity: style.opacity
                });
            }
            if (kind === 'popup') {
                return L.circleMarker(latlng, {
                    radius: 0,
                    opacity: 0,
                    fillOpacity: 0,
                    stroke: false
                });
            }
            return L.marker(latlng);
        },
        style (feature) {
            const props = feature?.properties;
            const kind = inferFeatureKind(feature?.geometry?.type, props);
            const style = resolveFeatureStyle(kind, props, config.defaults);
            return {
                color: style.color,
                fillColor: style.fillColor,
                fillOpacity: style.fillOpacity,
                weight: style.weight,
                opacity: style.opacity
            };
        },
        onEachFeature (feature, layer) {
            const props = feature.properties;
            if (props?.popup) {
                layer.bindPopup(props.popup);
                if (props.openPopup && 'openPopup' in layer && typeof layer.openPopup === 'function') {
                    layer.openPopup();
                }
            }
        }
    });
    geoLayer.addTo(map);
    layers.push(geoLayer);
    for (const feature of svgOverlays){
        const props = feature.properties;
        if (!props?.svg || !props.bounds) continue;
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        if (props.viewBox) {
            svgElement.setAttribute('viewBox', props.viewBox);
        }
        svgElement.innerHTML = props.svg;
        const overlay = L.svgOverlay(svgElement, props.bounds).addTo(map);
        layers.push(overlay);
    }
    return layers;
}
function applyMapView(map, geoLayer, config) {
    const view = config.view;
    if (view?.center) {
        map.setView(lngLatToLeaflet(view.center), view.zoom ?? 14);
        return;
    }
    if (view?.fitBounds !== false && geoLayer && 'getBounds' in geoLayer) {
        const bounds = geoLayer.getBounds();
        if (bounds.isValid()) {
            map.fitBounds(bounds, {
                padding: [
                    view?.fitBoundsPadding ?? 24,
                    view?.fitBoundsPadding ?? 24
                ]
            });
            return;
        }
    }
    map.setView([
        0,
        0
    ], view?.zoom ?? 2);
}
function attachMapInteractions(map, config) {
    const interactions = config.interactions;
    if (interactions?.logClickCoordinates) {
        map.on('click', (event)=>{
            const { lat, lng } = event.latlng;
            console.log(`[${lat}, ${lng}]`);
        });
    }
    if (interactions?.logZoomLevel) {
        map.on('zoomstart', ()=>{
            console.log(map.getZoom());
        });
    }
}
function buildCopyPayload(geojson, config) {
    return JSON.stringify({
        config,
        geojson
    }, null, 2);
}

;// ./src/components/mdx/LeafletMap.tsx
/* __next_internal_client_entry_do_not_use__ LeafletMap auto */ 









function useJsonSource(inline, src, resolvedSrc) {
    const inlineNorm = react.useMemo(()=>normalizeInlineJson(inline), [
        inline
    ]);
    const [loaded, setLoaded] = react.useState(null);
    const [status, setStatus] = react.useState('idle');
    react.useEffect(()=>{
        if (!resolvedSrc?.trim()) {
            setLoaded(null);
            setStatus('idle');
            return;
        }
        let cancelled = false;
        setStatus('loading');
        setLoaded(null);
        fetch(resolvedSrc).then((res)=>{
            if (!res.ok) throw new Error('fetch failed');
            return res.json();
        }).then((json)=>{
            if (!cancelled) {
                setLoaded(json);
                setStatus('ready');
            }
        }).catch(()=>{
            if (!cancelled) {
                setLoaded(null);
                setStatus('error');
            }
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        resolvedSrc
    ]);
    if (inline != null && String(inline).trim() !== '') {
        return {
            data: inlineNorm.value,
            status: inlineNorm.error ? 'error' : 'ready',
            error: inlineNorm.error
        };
    }
    if (src?.trim()) {
        if (status === 'loading' || status === 'idle') {
            return {
                data: null,
                status: 'loading',
                error: false
            };
        }
        if (status === 'error') {
            return {
                data: null,
                status: 'error',
                error: true
            };
        }
        return {
            data: loaded,
            status: 'ready',
            error: false
        };
    }
    return {
        data: null,
        status: 'idle',
        error: false
    };
}
function LeafletMap({ geojson, geojsonSrc, config, configSrc, title, height, center, zoom }) {
    const t = (0,react_client/* useTranslations */.c)('leafletMap');
    const mapContainerRef = react.useRef(null);
    const mapRef = react.useRef(null);
    const layersRef = react.useRef([]);
    const [renderStatus, setRenderStatus] = react.useState('idle');
    const resolvedGeojsonSrc = (0,PostAssetBaseContext/* useResolvedPostAssetUrl */.t9)(geojsonSrc) ?? geojsonSrc;
    const resolvedConfigSrc = (0,PostAssetBaseContext/* useResolvedPostAssetUrl */.t9)(configSrc) ?? configSrc;
    const geoSource = useJsonSource(geojson, geojsonSrc, resolvedGeojsonSrc);
    const configSource = useJsonSource(config, configSrc, resolvedConfigSrc);
    const mergedConfig = react.useMemo(()=>mergeLeafletMapConfig(parseLeafletMapConfig(configSource.data), {
            title,
            height,
            center,
            zoom
        }), [
        configSource.data,
        title,
        height,
        center,
        zoom
    ]);
    const panelTitle = resolvePanelTitle(title, mergedConfig.title);
    const mapHeight = mergedConfig.height ?? '280px';
    const normalizedGeojson = react.useMemo(()=>normalizeGeoJsonInput(geoSource.data), [
        geoSource.data
    ]);
    const waitingForFetch = Boolean(geojsonSrc?.trim()) && geoSource.status === 'loading' || Boolean(configSrc?.trim()) && configSource.status === 'loading';
    const hasGeoInput = geojson != null && String(geojson).trim() !== '' || Boolean(geojsonSrc?.trim());
    const showEmptyError = !hasGeoInput && !waitingForFetch;
    const showFetchError = geoSource.status === 'error' || configSource.status === 'error' || geoSource.error || configSource.error;
    const showRenderError = renderStatus === 'error';
    const copyText = normalizedGeojson != null ? buildCopyPayload(normalizedGeojson, mergedConfig) : '';
    const downloadHref = resolvedGeojsonSrc ?? geojsonSrc?.trim() ?? null;
    const headerActions = /*#__PURE__*/ (0,jsx_runtime.jsx)(GameSourceHeaderActions/* GameSourceHeaderActions */.S, {
        sourceText: copyText || null,
        downloadHref: downloadHref,
        downloadFilename: downloadHref ? (0,GameSourceHeaderActions/* filenameFromGameSrc */.e)(downloadHref) : undefined,
        copyAriaLabel: t('copySource'),
        downloadAriaLabel: t('downloadSource')
    });
    react.useEffect(()=>{
        const container = mapContainerRef.current;
        if (!container || waitingForFetch || showEmptyError || showFetchError) return;
        if (!normalizedGeojson) {
            if (hasGeoInput) setRenderStatus('error');
            return;
        }
        let cancelled = false;
        setRenderStatus('loading');
        async function initMap() {
            const leafletModule = await __webpack_require__.e(/* import() */ 1761).then(__webpack_require__.t.bind(__webpack_require__, 69722, 23));
            await Promise.all(/* import() */[__webpack_require__.e(6648), __webpack_require__.e(737)]).then(__webpack_require__.t.bind(__webpack_require__, 90737, 23));
            if (cancelled || !mapContainerRef.current || !normalizedGeojson) return;
            const L = leafletModule.default;
            fixLeafletDefaultIcons(L);
            mapRef.current?.remove();
            mapRef.current = null;
            layersRef.current = [];
            const view = mergedConfig.view;
            const map = L.map(mapContainerRef.current, {
                zoomSnap: view?.zoomSnap ?? 0.1,
                maxZoom: view?.maxZoom ?? 18,
                minZoom: view?.minZoom ?? 3,
                zoomControl: view?.zoomControl ?? true
            });
            mapRef.current = map;
            const tile = mergedConfig.tileLayer;
            if (tile?.url) {
                L.tileLayer(tile.url, {
                    attribution: tile.attribution,
                    subdomains: tile.subdomains,
                    minZoom: tile.minZoom,
                    maxZoom: tile.maxZoom ?? view?.maxZoom ?? 18
                }).addTo(map);
            }
            const layers = renderGeoJsonOnMap(map, L, normalizedGeojson, mergedConfig);
            layersRef.current = layers;
            applyMapView(map, layers[0] ?? null, mergedConfig);
            attachMapInteractions(map, mergedConfig);
            if (!cancelled) setRenderStatus('ready');
        }
        initMap().catch(()=>{
            if (!cancelled) setRenderStatus('error');
        });
        return ()=>{
            cancelled = true;
            mapRef.current?.remove();
            mapRef.current = null;
            layersRef.current = [];
        };
    }, [
        normalizedGeojson,
        mergedConfig,
        waitingForFetch,
        showEmptyError,
        showFetchError,
        hasGeoInput
    ]);
    const showLoading = waitingForFetch || renderStatus === 'loading' || renderStatus === 'idle';
    const ready = renderStatus === 'ready';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(article_card_panel/* ArticleCardPanelRoot */.T, {
        className: "leaflet-map-panel group not-prose",
        "data-leaflet-map-panel": true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelHeader */.Cx, {
                as: "figcaption",
                left: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(map_pin/* default */.A, {
                            className: "size-4 shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (0,utils.cn)('truncate', article_card_panel/* articleCardPanelHeaderText */.J0),
                            children: panelTitle
                        })
                    ]
                }),
                right: hasGeoInput ? headerActions : undefined
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelBody */.fY, {
                className: "p-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "leaflet-map-viewport relative w-full overflow-hidden",
                    style: {
                        height: mapHeight
                    },
                    role: "application",
                    "aria-label": t('viewportAria'),
                    "data-leaflet-map-ready": ready ? '1' : undefined,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            ref: mapContainerRef,
                            className: "leaflet-map-container absolute inset-0 z-0"
                        }),
                        showLoading && !showEmptyError && !showFetchError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "leaflet-map-loading absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-background",
                            "aria-live": "polite",
                            "aria-busy": "true",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.A, {
                                    className: "size-8 animate-spin text-muted-foreground",
                                    "aria-hidden": true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: t('loading')
                                })
                            ]
                        }),
                        showEmptyError && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center px-4 text-sm text-muted-foreground",
                            children: t('emptySource')
                        }),
                        (showFetchError || showRenderError) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center px-4 text-sm text-destructive",
                            children: t('loadFailed')
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 31857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ ArchivesPageContent)
/* harmony export */ });
/* unused harmony export formatMonthLabel */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _lib_post_post_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52091);
/* harmony import */ var _barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(342);
/* harmony import */ var _components_ui_panel_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9116);




function formatMonthLabel(key) {
    const [, m] = key.split('-');
    const date = new Date(0, parseInt(m, 10) - 1, 1);
    return (0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(date, 'MM');
}
const archivesListWrapper = 'my-2 flex flex-col' + ' [&_a]:no-underline [&_a]:!text-foreground [&_a]:flex [&_a]:items-baseline [&_a]:justify-between [&_a]:gap-4 [&_a]:rounded-md [&_a]:px-4 [&_a]:py-2 [&_a]:transition-colors [&_a]:duration-150' + ' [&_a:hover]:!bg-accent [&_a:hover]:!text-accent-foreground' + ' [&_a_time]:!text-foreground [&_a:hover_time]:!text-accent-foreground' + ' dark:[&_a]:!text-white dark:[&_a_time]:!text-white dark:[&_a:hover]:!text-accent-foreground dark:[&_a:hover_time]:!text-accent-foreground';
function ArchivesPageContent({ grouped }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: archivesListWrapper,
        children: grouped.map(({ key, year, posts }, index)=>{
            const prevYear = index > 0 ? grouped[index - 1]?.year : undefined;
            const showYear = prevYear !== year;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "space-y-4",
                children: [
                    showYear && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                        id: `year-${year}`,
                        children: year
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                        id: key,
                        children: formatMonthLabel(key)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                        className: "list-none space-y-2 !px-0 !my-0",
                        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_panel_list__WEBPACK_IMPORTED_MODULE_1__/* .PanelLink */ .h_, {
                                    href: post.url,
                                    title: post.title,
                                    trailing: (0,_lib_post_post_date__WEBPACK_IMPORTED_MODULE_3__/* .formatPostArchivesMonthDay */ .Rb)(post),
                                    trailingDateTime: post.date
                                })
                            }, post._id))
                    })
                ]
            }, key);
        })
    });
}


/***/ }),

/***/ 40980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   j: () => (/* binding */ parseCssStyleString)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29722);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75806);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .Q)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .$)(inputs));
}
/** Parse a CSS declaration string (e.g. from front matter) into React.CSSProperties. */ function parseCssStyleString(css) {
    const out = {};
    const decls = css.split(";").map((s)=>s.trim()).filter(Boolean);
    for (const decl of decls){
        const colon = decl.indexOf(":");
        if (colon === -1) continue;
        const prop = decl.slice(0, colon).trim().replace(/-([a-z])/g, (_, c)=>c.toUpperCase());
        const value = decl.slice(colon + 1).trim();
        if (prop && value) out[prop] = value;
    }
    return out;
}


/***/ }),

/***/ 42500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RevealDeck: () => (/* binding */ RevealDeck)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.mjs
var dist = __webpack_require__(70460);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/presentation.js
var presentation = __webpack_require__(87634);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(6296);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-up.js
var chevron_up = __webpack_require__(9921);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(66088);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(41641);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(21362);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/minimize-2.js
var minimize_2 = __webpack_require__(60241);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/maximize-2.js
var maximize_2 = __webpack_require__(24371);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(89239);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
// EXTERNAL MODULE: ./src/components/business/GameSourceHeaderActions.tsx
var GameSourceHeaderActions = __webpack_require__(80130);
// EXTERNAL MODULE: ./src/components/ui/article-card-panel.tsx
var article_card_panel = __webpack_require__(15891);
// EXTERNAL MODULE: ./src/contexts/PostAssetBaseContext.tsx
var PostAssetBaseContext = __webpack_require__(44272);
;// ./src/lib/reveal/build-reveal-config.ts
function buildRevealDeckConfig(navigationMode = 'default') {
    return {
        embedded: true,
        width: 1280,
        height: 720,
        hash: false,
        history: false,
        navigationMode,
        keyboardCondition: 'focused',
        center: true,
        margin: 0.04,
        minScale: 0.15,
        maxScale: 2,
        progress: true,
        slideNumber: 'c/t',
        controls: false,
        help: false,
        markdown: {
            separator: '^\r?\n---\r?\n$',
            verticalSeparator: '^\r?\n--\r?\n$'
        }
    };
}
function resolveRevealThemeMode(themeProp, resolvedSiteTheme) {
    if (themeProp === 'light' || themeProp === 'dark') return themeProp;
    return resolvedSiteTheme === 'dark' ? 'dark' : 'light';
}

;// ./src/lib/reveal/mount-reveal-markdown-template.ts
/**
 * Build a single reveal.js markdown section with inline template (no external fetch).
 * Uses data-markdown="" so the markdown plugin reads the script body, not a URL.
 */ function mountRevealMarkdownTemplate(revealRoot, markdown) {
    const slides = revealRoot.querySelector('.slides');
    if (!slides) return;
    slides.replaceChildren();
    const section = document.createElement('section');
    section.setAttribute('data-markdown', '');
    const script = document.createElement('script');
    script.type = 'text/template';
    script.textContent = `${markdown.trim()}\n`;
    section.appendChild(script);
    slides.appendChild(section);
}

// EXTERNAL MODULE: ./node_modules/gray-matter/index.js
var gray_matter = __webpack_require__(44419);
var gray_matter_default = /*#__PURE__*/__webpack_require__.n(gray_matter);
;// ./src/lib/reveal/parse-reveal-source.ts

function parseRevealSource(raw) {
    const trimmed = raw.trim();
    if (!trimmed) {
        return {
            slideMarkdown: '',
            copyText: ''
        };
    }
    const { data, content } = gray_matter_default()(trimmed);
    const body = content.trim();
    const fmTitle = typeof data.title === 'string' && data.title.trim() ? data.title.trim() : undefined;
    return {
        fmTitle,
        slideMarkdown: body,
        copyText: body
    };
}
function resolveRevealPanelTitle(titleProp, fmTitle) {
    const fromProp = titleProp?.trim();
    if (fromProp) return fromProp;
    if (fmTitle?.trim()) return fmTitle.trim();
    return 'Slides';
}

// EXTERNAL MODULE: ./node_modules/reveal.js/dist/reveal.css
var reveal = __webpack_require__(10264);
;// ./src/components/mdx/RevealDeck.tsx
/* __next_internal_client_entry_do_not_use__ RevealDeck auto */ 













async function loadRevealThemeCss(mode) {
    if (mode === 'dark') {
        await Promise.all(/* import() */[__webpack_require__.e(7039), __webpack_require__.e(9798)]).then(__webpack_require__.t.bind(__webpack_require__, 59798, 23));
    } else {
        await Promise.all(/* import() */[__webpack_require__.e(3877), __webpack_require__.e(5868)]).then(__webpack_require__.t.bind(__webpack_require__, 15868, 23));
    }
}
function RevealDeck({ source, src, title, theme = 'auto', minHeight = '360px', navigationMode = 'default' }) {
    const t = (0,react_client/* useTranslations */.c)('revealDeck');
    const { resolvedTheme } = (0,dist/* useTheme */.D)();
    const resolvedSrc = (0,PostAssetBaseContext/* useResolvedPostAssetUrl */.t9)(src) ?? src;
    const revealRef = react.useRef(null);
    const viewportRef = react.useRef(null);
    const deckRef = react.useRef(null);
    const themeModeRef = react.useRef('light');
    const [status, setStatus] = react.useState('idle');
    const [loadedSource, setLoadedSource] = react.useState(null);
    const [fmTitle, setFmTitle] = react.useState();
    const [copyText, setCopyText] = react.useState('');
    const [isFullscreen, setIsFullscreen] = react.useState(false);
    const [hasVerticalSlides, setHasVerticalSlides] = react.useState(false);
    const themeMode = resolveRevealThemeMode(theme, resolvedTheme);
    const useLinearNav = navigationMode === 'linear';
    const showVerticalControls = hasVerticalSlides && navigationMode !== 'linear';
    const panelTitle = resolveRevealPanelTitle(title, fmTitle);
    react.useEffect(()=>{
        const url = resolvedSrc?.trim();
        if (!url) {
            setLoadedSource(null);
            return;
        }
        let cancelled = false;
        setStatus('loading');
        setLoadedSource(null);
        fetch(url).then((res)=>{
            if (!res.ok) throw new Error('fetch failed');
            return res.text();
        }).then((text)=>{
            if (!cancelled) setLoadedSource(text);
        }).catch(()=>{
            if (!cancelled) {
                setLoadedSource(null);
                setStatus('error');
            }
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        resolvedSrc
    ]);
    const rawMarkdown = (source ?? loadedSource ?? '').trim();
    const parsed = react.useMemo(()=>parseRevealSource(rawMarkdown), [
        rawMarkdown
    ]);
    const slideMarkdown = parsed.slideMarkdown;
    react.useEffect(()=>{
        const revealEl = revealRef.current;
        if (!revealEl) return;
        if (!slideMarkdown) {
            if (src?.trim() && loadedSource === null) return;
            if (!src?.trim() && !source?.trim()) setStatus('error');
            return;
        }
        let cancelled = false;
        setStatus('loading');
        setHasVerticalSlides(false);
        setFmTitle(parsed.fmTitle);
        setCopyText(parsed.copyText);
        async function initDeck() {
            deckRef.current?.destroy();
            deckRef.current = null;
            await loadRevealThemeCss(themeMode);
            themeModeRef.current = themeMode;
            const [{ default: Reveal }, { default: Markdown }] = await Promise.all([
                __webpack_require__.e(/* import() */ 9925).then(__webpack_require__.bind(__webpack_require__, 99925)),
                __webpack_require__.e(/* import() */ 9795).then(__webpack_require__.bind(__webpack_require__, 69795))
            ]);
            if (cancelled || !revealRef.current) return;
            mountRevealMarkdownTemplate(revealRef.current, slideMarkdown);
            const deck = new Reveal(revealRef.current, {
                ...buildRevealDeckConfig(navigationMode),
                plugins: [
                    Markdown
                ]
            });
            await deck.initialize();
            if (cancelled) {
                deck.destroy();
                return;
            }
            deckRef.current = deck;
            if (!cancelled) {
                setHasVerticalSlides(deck.hasVerticalSlides());
            }
            requestAnimationFrame(()=>{
                if (!cancelled && deckRef.current) {
                    deckRef.current.layout();
                }
            });
            setStatus('ready');
        }
        initDeck().catch(()=>{
            if (!cancelled) setStatus('error');
        });
        return ()=>{
            cancelled = true;
            deckRef.current?.destroy();
            deckRef.current = null;
        };
    }, [
        slideMarkdown,
        navigationMode,
        src,
        source,
        loadedSource,
        parsed
    ]);
    react.useEffect(()=>{
        const deck = deckRef.current;
        if (status !== 'ready' || !deck) return;
        if (themeModeRef.current === themeMode) return;
        let cancelled = false;
        async function applyTheme() {
            await loadRevealThemeCss(themeMode);
            if (cancelled) return;
            themeModeRef.current = themeMode;
            deckRef.current?.layout();
        }
        void applyTheme();
        return ()=>{
            cancelled = true;
        };
    }, [
        themeMode,
        status
    ]);
    react.useEffect(()=>{
        if (status !== 'ready') return;
        const viewport = viewportRef.current;
        const deck = deckRef.current;
        if (!viewport || !deck) return;
        const relayout = ()=>deck.layout();
        const ro = new ResizeObserver(relayout);
        ro.observe(viewport);
        relayout();
        return ()=>ro.disconnect();
    }, [
        status
    ]);
    react.useEffect(()=>{
        const viewport = viewportRef.current;
        if (!viewport) return;
        const onFullscreenChange = ()=>{
            setIsFullscreen(document.fullscreenElement === viewport);
        };
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return ()=>document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);
    const stopNavEvent = (e)=>{
        e.stopPropagation();
    };
    const handlePrev = react.useCallback((e)=>{
        stopNavEvent(e);
        const deck = deckRef.current;
        if (!deck) return;
        if (useLinearNav) deck.prev();
        else deck.left();
    }, [
        useLinearNav
    ]);
    const handleNext = react.useCallback((e)=>{
        stopNavEvent(e);
        const deck = deckRef.current;
        if (!deck) return;
        if (useLinearNav) deck.next();
        else deck.right();
    }, [
        useLinearNav
    ]);
    const handleUp = react.useCallback((e)=>{
        stopNavEvent(e);
        deckRef.current?.up();
    }, []);
    const handleDown = react.useCallback((e)=>{
        stopNavEvent(e);
        deckRef.current?.down();
    }, []);
    const handleFullscreen = react.useCallback(()=>{
        const viewport = viewportRef.current;
        if (!viewport) return;
        if (document.fullscreenElement === viewport) {
            void document.exitFullscreen();
        } else {
            void viewport.requestFullscreen();
        }
    }, []);
    const showLoading = status === 'loading' || status === 'idle';
    const showEmptyError = status === 'error' && !slideMarkdown && !src?.trim() && !source?.trim();
    const showFetchError = status === 'error' && !slideMarkdown && Boolean(src?.trim());
    const showRenderError = status === 'error' && Boolean(slideMarkdown);
    const toolbarReady = status === 'ready';
    const srcTrimmed = src?.trim();
    const headerActions = /*#__PURE__*/ (0,jsx_runtime.jsx)(GameSourceHeaderActions/* GameSourceHeaderActions */.S, {
        sourceText: copyText || null,
        downloadHref: srcTrimmed ? resolvedSrc ?? srcTrimmed : null,
        downloadFilename: srcTrimmed ? (0,GameSourceHeaderActions/* filenameFromGameSrc */.e)(resolvedSrc ?? srcTrimmed) : undefined,
        copyAriaLabel: t('copySource'),
        downloadAriaLabel: t('downloadSource')
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(article_card_panel/* ArticleCardPanelRoot */.T, {
        className: "reveal-deck-panel group not-prose",
        "data-reveal-deck-panel": true,
        "data-reveal-theme": themeMode,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelHeader */.Cx, {
                as: "figcaption",
                left: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(presentation/* default */.A, {
                            className: "size-4 shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (0,utils.cn)('truncate', article_card_panel/* articleCardPanelHeaderText */.J0),
                            children: panelTitle
                        })
                    ]
                }),
                right: headerActions
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelBody */.fY, {
                className: "p-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    ref: viewportRef,
                    className: (0,utils.cn)('reveal-deck-viewport relative flex w-full flex-col overflow-hidden bg-background', isFullscreen && 'h-full max-h-none'),
                    role: "region",
                    "aria-label": t('viewportAria'),
                    "data-reveal-deck-ready": toolbarReady ? '1' : undefined,
                    "data-reveal-deck-fullscreen": isFullscreen ? '1' : undefined,
                    tabIndex: 0,
                    children: [
                        showLoading && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "reveal-deck-loading absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-background",
                            "aria-live": "polite",
                            "aria-busy": "true",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.A, {
                                    className: "size-8 animate-spin text-muted-foreground",
                                    "aria-hidden": true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: t('loading')
                                })
                            ]
                        }),
                        showEmptyError && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "absolute inset-0 z-20 flex items-center justify-center px-4 text-sm text-muted-foreground",
                            children: t('emptySource')
                        }),
                        (showFetchError || showRenderError) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "absolute inset-0 z-20 flex items-center justify-center px-4 text-sm text-destructive",
                            children: t('loadFailed')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (0,utils.cn)('reveal-deck-stage relative min-w-0', isFullscreen ? 'min-h-0 flex-1' : 'aspect-video w-full max-h-[calc(85vh-2.75rem)] shrink-0'),
                            style: isFullscreen ? undefined : {
                                minHeight
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                ref: revealRef,
                                className: "reveal reveal-deck-embedded absolute inset-0",
                                hidden: showEmptyError || showFetchError || showRenderError,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "slides"
                                })
                            })
                        }),
                        toolbarReady && !isFullscreen && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "reveal-deck-toolbar pointer-events-auto z-20 flex shrink-0 flex-wrap items-center justify-end gap-0.5 border-t border-border bg-card/95 px-2 py-1.5",
                            role: "toolbar",
                            "aria-label": t('toolbarAria'),
                            onKeyDown: (e)=>e.stopPropagation(),
                            onKeyUp: (e)=>e.stopPropagation(),
                            children: [
                                showVerticalControls && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                            type: "button",
                                            variant: "ghost",
                                            size: "icon-sm",
                                            className: "size-7",
                                            onClick: handleUp,
                                            "aria-label": t('prevVerticalSlide'),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_up/* default */.A, {
                                                className: "size-4",
                                                "aria-hidden": true
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                            type: "button",
                                            variant: "ghost",
                                            size: "icon-sm",
                                            className: "size-7",
                                            onClick: handleDown,
                                            "aria-label": t('nextVerticalSlide'),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* default */.A, {
                                                className: "size-4",
                                                "aria-hidden": true
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon-sm",
                                    className: "size-7",
                                    onClick: handlePrev,
                                    "aria-label": useLinearNav ? t('prevSlide') : t('prevHorizontalSlide'),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_left/* default */.A, {
                                        className: "size-4",
                                        "aria-hidden": true
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon-sm",
                                    className: "size-7",
                                    onClick: handleNext,
                                    "aria-label": useLinearNav ? t('nextSlide') : t('nextHorizontalSlide'),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* default */.A, {
                                        className: "size-4",
                                        "aria-hidden": true
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon-sm",
                                    className: "size-7",
                                    onClick: handleFullscreen,
                                    "aria-label": isFullscreen ? t('exitFullscreen') : t('enterFullscreen'),
                                    children: isFullscreen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(minimize_2/* default */.A, {
                                        className: "size-4",
                                        "aria-hidden": true
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(maximize_2/* default */.A, {
                                        className: "size-4",
                                        "aria-hidden": true
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 44272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N9: () => (/* binding */ usePostAssetBase),
/* harmony export */   PostAssetBaseProvider: () => (/* binding */ PostAssetBaseProvider),
/* harmony export */   o5: () => (/* binding */ resolvePostAssetUrl),
/* harmony export */   t9: () => (/* binding */ useResolvedPostAssetUrl)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _lib_post_post_asset_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58317);
/* __next_internal_client_entry_do_not_use__ PostAssetBaseProvider,usePostAssetBase,resolvePostAssetUrl,useResolvedPostAssetUrl auto */ 


const PostAssetBaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function PostAssetBaseProvider({ postSlug, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PostAssetBaseContext.Provider, {
        value: postSlug,
        children: children
    });
}
function usePostAssetBase() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PostAssetBaseContext);
}
function resolvePostAssetUrl(url, postSlug) {
    if (!postSlug) return url;
    return (0,_lib_post_post_asset_url__WEBPACK_IMPORTED_MODULE_2__/* .resolvePostRelativeUrl */ .Au)(url, postSlug);
}
/** Resolve post-relative asset URLs at runtime (MDX shortcodes, links when slug is from context). */ function useResolvedPostAssetUrl(url) {
    const postSlug = usePostAssetBase();
    if (url == null || url === '') return url;
    return resolvePostAssetUrl(url, postSlug);
}


/***/ }),

/***/ 44748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Details: () => (/* binding */ Details)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _barrel_optimize_names_ChevronDown_LayoutList_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7019);
/* harmony import */ var _barrel_optimize_names_ChevronDown_LayoutList_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66088);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40980);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15891);
/* __next_internal_client_entry_do_not_use__ Details auto */ 




/**
 * Collapsible details panel. Usage matches native HTML <details>/<summary>:
 *
 * <Details>
 *   <summary>Summary text</summary>
 *   <p>Collapsed content goes here.</p>
 * </Details>
 *
 * Summary is rendered at the top; expand/collapse arrow is placed at top-right.
 */ function Details({ children, defaultOpen = false }) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOpen);
    const childArray = react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children);
    let summaryContent = null;
    const bodyChildren = [];
    for (const child of childArray){
        if (/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(child) && child.type === 'summary') {
            summaryContent = child.props.children;
        } else {
            bodyChildren.push(child);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelRoot */ .T, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
            className: "w-full group/details not-prose",
            open: open,
            onToggle: (e)=>setOpen(e.target.open),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('block cursor-pointer list-none [&::-webkit-details-marker]:hidden [&::marker]:hidden'),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeader */ .w, _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeaderWithRightSlot */ .Ss),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeaderLeft */ .bc,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronDown_LayoutList_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                        className: "size-4 shrink-0",
                                        "aria-hidden": true
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeaderText */ .J0,
                                        children: summaryContent
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeaderRightSlot */ .Ww,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeaderActionButton */ .io, 'inline-flex items-center justify-center'),
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronDown_LayoutList_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeaderRightIcon */ .lu, 'transition-transform duration-200 group-open/details:rotate-180'),
                                        "aria-hidden": true
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelBody */ .fY, {
                    children: bodyChildren
                })
            ]
        })
    });
}


/***/ }),

/***/ 45403:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncryptedFragment: () => (/* binding */ EncryptedFragment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96674);
/* harmony import */ var rehype_parse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31825);
/* harmony import */ var hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59378);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50910);
/* harmony import */ var _lib_encrypt_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47534);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15891);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89239);
/* harmony import */ var _components_ui_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61360);
/* harmony import */ var _barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25777);
/* harmony import */ var _barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93164);
/* harmony import */ var _components_business_MdxContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23229);
/* harmony import */ var _components_business_post_body_rehype_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61543);
/* harmony import */ var _contexts_OnContentRevealContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90824);
/* harmony import */ var _contexts_PostMediaContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62941);
/* __next_internal_client_entry_do_not_use__ EncryptedFragment auto */ 
/**
 * Renders an encrypted fragment: shows a password form until decryption succeeds,
 * then renders the decrypted content. When contentKind is "serialized", the decrypted
 * JSON (compiled MDX) is passed to MdxContent. Uses the same algorithm as full-post
 * encryption. Styled like article card panels. Used by :::encrypt{password="..."} container syntax
 * (not as <EncryptedFragment>content</EncryptedFragment> in MDX).
 */ 














function DecryptedHtmlBody({ html, fancyboxEnabled, photoFigcaptionEnabled }) {
    const reactTree = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>{
        const tree = (0,unified__WEBPACK_IMPORTED_MODULE_9__/* .unified */ .l)().use(rehype_parse__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
            fragment: true
        }).parse(html);
        return (0,hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__/* .toJsxRuntime */ .H)(tree, {
            Fragment: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            jsx: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx,
            jsxs: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs,
            development: false,
            components: (0,_components_business_post_body_rehype_components__WEBPACK_IMPORTED_MODULE_6__/* .createPostBodyRehypeComponents */ .Oh)({
                fancyboxEnabled,
                photoFigcaptionEnabled,
                encryptedSlotMap: new Map()
            })
        });
    }, [
        html,
        fancyboxEnabled,
        photoFigcaptionEnabled
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "prose prose-sm dark:prose-invert max-w-none",
        children: reactTree
    });
}
function EncryptedFragment({ encryptedHex, keySaltHex, ivSaltHex, hmacHex, contentKind = 'serialized', abstract, message }) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_12__/* .useTranslations */ .c)('encrypt');
    const onReveal = (0,_contexts_OnContentRevealContext__WEBPACK_IMPORTED_MODULE_7__/* .useOnContentReveal */ .D)();
    const { fancyboxEnabled, photoFigcaptionEnabled } = (0,_contexts_PostMediaContext__WEBPACK_IMPORTED_MODULE_8__/* .usePostMedia */ ._)();
    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
        status: 'idle'
    });
    const tryDecrypt = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async (pwd)=>{
        setState({
            status: 'loading'
        });
        const result = await (0,_lib_encrypt_client__WEBPACK_IMPORTED_MODULE_13__/* .decrypt */ .Yc)(encryptedHex, keySaltHex, ivSaltHex, hmacHex, pwd);
        if (!result.ok) {
            const err = result.error;
            const msg = err === 'wrong_hash' ? t('invalidOrCorrupted') : t('wrongPassword');
            setState({
                status: 'error',
                msg
            });
            return;
        }
        if (contentKind === 'serialized') {
            try {
                const mdxSource = JSON.parse(result.data);
                if (mdxSource && typeof mdxSource.compiledSource === 'string') {
                    setState({
                        status: 'decrypted-mdx',
                        mdxSource
                    });
                    onReveal?.run();
                } else {
                    setState({
                        status: 'error',
                        msg: t('invalidContent')
                    });
                }
            } catch  {
                setState({
                    status: 'error',
                    msg: t('failedToParse')
                });
            }
        } else {
            setState({
                status: 'decrypted-html',
                html: result.data
            });
            onReveal?.run();
        }
    }, [
        encryptedHex,
        keySaltHex,
        ivSaltHex,
        hmacHex,
        contentKind,
        t,
        onReveal
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!password.trim()) return;
        tryDecrypt(password.trim());
    };
    const handleForgetPassword = ()=>{
        setState({
            status: 'idle'
        });
        setPassword('');
    };
    const renderDecryptedContent = ()=>{
        if (state.status === 'decrypted-mdx') {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_business_MdxContent__WEBPACK_IMPORTED_MODULE_5__.MdxContent, {
                mdxSource: state.mdxSource,
                fancyboxEnabled: fancyboxEnabled,
                photoFigcaptionEnabled: photoFigcaptionEnabled
            });
        }
        if (state.status === 'decrypted-html') {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DecryptedHtmlBody, {
                html: state.html,
                fancyboxEnabled: fancyboxEnabled,
                photoFigcaptionEnabled: photoFigcaptionEnabled
            });
        }
        return null;
    };
    const isDecrypted = state.status === 'decrypted-mdx' || state.status === 'decrypted-html';
    const passwordFieldLabel = message ?? t('passwordLabel');
    const headerLeft = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                className: "size-4 shrink-0 opacity-70",
                "aria-hidden": true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeaderText */ .J0,
                children: t('encryptedContent')
            })
        ]
    });
    const headerLeftDecrypted = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
                className: "size-4 shrink-0 opacity-70",
                "aria-hidden": true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeaderText */ .J0,
                children: t('encryptedContent')
            })
        ]
    });
    const forgetButton = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: handleForgetPassword,
        className: "h-7 text-muted-foreground hover:text-foreground",
        "aria-label": t('forgetPasswordFragment'),
        children: t('forgetPassword')
    });
    if (isDecrypted) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelRoot */ .T, {
            "data-decrypted-fragment": true,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelHeader */ .Cx, {
                    as: "figcaption",
                    left: headerLeftDecrypted,
                    right: forgetButton
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelBody */ .fY, {
                    children: renderDecryptedContent()
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelRoot */ .T, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelHeader */ .Cx, {
                as: "figcaption",
                left: headerLeft
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelBody */ .fY, {
                children: [
                    abstract ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "mb-3 text-sm text-muted-foreground",
                        children: abstract
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                        onSubmit: handleSubmit,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_field__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_field__WEBPACK_IMPORTED_MODULE_4__/* .FieldLabel */ .dh, {
                                    htmlFor: "fragment-password",
                                    children: passwordFieldLabel
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-wrap items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                            id: "fragment-password",
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            placeholder: t('placeholder'),
                                            className: "h-8 max-w-xs rounded-md border border-input bg-background px-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50",
                                            autoComplete: "current-password",
                                            disabled: state.status === 'loading',
                                            "aria-label": t('fragmentPasswordLabel')
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, {
                                            type: "submit",
                                            variant: "outline",
                                            disabled: state.status === 'loading' || !password.trim(),
                                            children: state.status === 'loading' ? t('decrypting') : t('decrypt')
                                        })
                                    ]
                                }),
                                state.status === 'error' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_field__WEBPACK_IMPORTED_MODULE_4__/* .FieldError */ .bg, {
                                    children: state.msg
                                }) : null
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 47534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Yj: () => (/* binding */ clearStoredPassword),
  Yc: () => (/* binding */ decrypt),
  $R: () => (/* binding */ getStoredPassword),
  Ln: () => (/* binding */ setStoredPassword)
});

;// ./src/lib/encrypt/constants.ts
/** Known prefix prepended before encryption; client checks this after decryption to verify correct password. */ const ENCRYPT_PREFIX = '<hbe-prefix></hbe-prefix>';
const PBKDF2_KEY_ITERATIONS = 1024;
const PBKDF2_IV_ITERATIONS = 512;
const KEY_LENGTH_BYTES = 32;
const IV_LENGTH_BYTES = 16;
const HMAC_KEY_LENGTH_BYTES = 32;

;// ./src/lib/encrypt/client.ts
/**
 * Client-side decryption (Web Crypto API). Used only in browser.
 * Must match server encryption: PBKDF2-SHA256, AES-256-CBC, HMAC-SHA256.
 */ 
function hexToBuffer(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for(let i = 0; i < hex.length; i += 2){
        bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
    }
    return bytes.buffer;
}
async function pbkdf2(password, salt, iterations, length) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
    const bits = await crypto.subtle.deriveBits({
        name: 'PBKDF2',
        salt,
        iterations,
        hash: 'SHA-256'
    }, keyMaterial, length * 8);
    return bits;
}
/**
 * Decrypt payload with password. Verifies HMAC then decrypts and checks known prefix.
 */ async function decrypt(encryptedHex, keySaltHex, ivSaltHex, hmacHex, password) {
    const encrypted = hexToBuffer(encryptedHex);
    const keySalt = hexToBuffer(keySaltHex);
    const ivSalt = hexToBuffer(ivSaltHex);
    const expectedHmac = hexToBuffer(hmacHex);
    const keyBits = await pbkdf2(password, keySalt, PBKDF2_KEY_ITERATIONS, KEY_LENGTH_BYTES);
    const ivBits = await pbkdf2(password, ivSalt, PBKDF2_IV_ITERATIONS, IV_LENGTH_BYTES);
    const iv = new Uint8Array(ivBits).subarray(0, IV_LENGTH_BYTES);
    const hmacKeyBits = await pbkdf2(password, keySalt, PBKDF2_KEY_ITERATIONS + 1, HMAC_KEY_LENGTH_BYTES);
    const hmacKey = await crypto.subtle.importKey('raw', hmacKeyBits, {
        name: 'HMAC',
        hash: 'SHA-256'
    }, false, [
        'sign'
    ]);
    const sig = await crypto.subtle.sign('HMAC', hmacKey, encrypted);
    const sigHex = Array.from(new Uint8Array(sig)).map((b)=>b.toString(16).padStart(2, '0')).join('');
    if (sigHex !== hmacHex) {
        return {
            ok: false,
            error: 'wrong_hash'
        };
    }
    const cryptoKey = await crypto.subtle.importKey('raw', keyBits, {
        name: 'AES-CBC'
    }, false, [
        'decrypt'
    ]);
    try {
        const decrypted = await crypto.subtle.decrypt({
            name: 'AES-CBC',
            iv
        }, cryptoKey, encrypted);
        const text = new TextDecoder().decode(decrypted);
        if (!text.startsWith(ENCRYPT_PREFIX)) {
            return {
                ok: false,
                error: 'wrong_password'
            };
        }
        return {
            ok: true,
            data: text.slice(ENCRYPT_PREFIX.length)
        };
    } catch  {
        return {
            ok: false,
            error: 'wrong_password'
        };
    }
}
const STORAGE_KEY_PREFIX = 'blog-encrypt:';
function getStoredPassword(slug) {
    if (false) {}
    try {
        return window.localStorage.getItem(STORAGE_KEY_PREFIX + slug);
    } catch  {
        return null;
    }
}
function setStoredPassword(slug, password) {
    if (false) {}
    try {
        window.localStorage.setItem(STORAGE_KEY_PREFIX + slug, password);
    } catch  {
    // ignore
    }
}
function clearStoredPassword(slug) {
    if (false) {}
    try {
        window.localStorage.removeItem(STORAGE_KEY_PREFIX + slug);
    } catch  {
    // ignore
    }
}


/***/ }),

/***/ 48722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H9: () => (/* binding */ injectScriptSnippets),
/* harmony export */   P4: () => (/* binding */ injectInlineScriptCode),
/* harmony export */   SD: () => (/* binding */ markInjectScriptsReady),
/* harmony export */   Xu: () => (/* binding */ injectStyleSnippets),
/* harmony export */   Z7: () => (/* binding */ whenInjectScriptsReady),
/* harmony export */   ee: () => (/* binding */ injectScriptSnippet)
/* harmony export */ });
/* unused harmony exports INJECT_SCRIPTS_READY_EVENT, recreateScriptElement, injectStyleSnippet */
/** Fired after inject head/bottom snippets have been inserted (even when the lists are empty). */ const INJECT_SCRIPTS_READY_EVENT = 'next-gzblog:inject-scripts-ready';
function recreateScriptElement(original) {
    const s = document.createElement('script');
    for(let i = 0; i < original.attributes.length; i++){
        const attr = original.attributes[i];
        s.setAttribute(attr.name, attr.value);
    }
    if (original.textContent) {
        s.textContent = original.textContent;
    }
    return s;
}
function mountScriptElement(script, anchor) {
    if (anchor?.parentNode) {
        anchor.parentNode.insertBefore(script, anchor);
        return;
    }
    document.body.appendChild(script);
}
/** Run inline JS at an optional anchor without parsing through innerHTML (preserves <br/> in strings). */ function injectInlineScriptCode(code, options) {
    const anchor = options?.anchor;
    const s = document.createElement('script');
    s.textContent = code;
    mountScriptElement(s, anchor);
    const insertedBeforeScript = s.previousElementSibling;
    s.remove();
    anchor?.remove();
    return {
        script: null,
        insertedBeforeScript
    };
}
function injectScriptSnippet(html, options) {
    return new Promise((resolve, reject)=>{
        const trimmed = html.trim();
        if (!trimmed) {
            resolve({
                script: null,
                insertedBeforeScript: null
            });
            return;
        }
        const wrap = document.createElement('div');
        wrap.innerHTML = trimmed;
        const original = wrap.querySelector('script');
        if (!original) {
            resolve({
                script: null,
                insertedBeforeScript: null
            });
            return;
        }
        const s = recreateScriptElement(original);
        const anchor = options?.anchor;
        if (s.src) {
            s.onload = ()=>resolve({
                    script: s,
                    insertedBeforeScript: null
                });
            s.onerror = ()=>reject(new Error(`Failed to load script: ${s.src}`));
            mountScriptElement(s, anchor);
            return;
        }
        mountScriptElement(s, anchor);
        const insertedBeforeScript = s.previousElementSibling;
        s.remove();
        anchor?.remove();
        resolve({
            script: null,
            insertedBeforeScript
        });
    });
}
async function injectScriptSnippets(snippets) {
    for (const html of snippets){
        await injectScriptSnippet(html);
    }
}
function recreateLinkElement(original) {
    const el = document.createElement('link');
    for(let i = 0; i < original.attributes.length; i++){
        const attr = original.attributes[i];
        el.setAttribute(attr.name, attr.value);
    }
    return el;
}
/** Inject <link rel="stylesheet"> or <style> into document.head (innerHTML link tags do not load reliably). */ function injectStyleSnippet(html) {
    const trimmed = html.trim();
    if (!trimmed) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = trimmed;
    const link = wrap.querySelector('link');
    if (link) {
        document.head.appendChild(recreateLinkElement(link));
        return;
    }
    const style = wrap.querySelector('style');
    if (style) {
        document.head.appendChild(style.cloneNode(true));
    }
}
function injectStyleSnippets(snippets) {
    for (const html of snippets){
        injectStyleSnippet(html);
    }
}
function markInjectScriptsReady() {
    if (false) {}
    window.__NEXT_GZBLOG_INJECT_SCRIPTS_READY__ = true;
    window.dispatchEvent(new Event(INJECT_SCRIPTS_READY_EVENT));
}
function whenInjectScriptsReady() {
    if (false) {}
    if (window.__NEXT_GZBLOG_INJECT_SCRIPTS_READY__) return Promise.resolve();
    return new Promise((resolve)=>{
        window.addEventListener(INJECT_SCRIPTS_READY_EVENT, ()=>resolve(), {
            once: true
        });
    });
}


/***/ }),

/***/ 50206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfViewer: () => (/* binding */ PdfViewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50910);
/* harmony import */ var _barrel_optimize_names_FileText_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48368);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40980);
/* harmony import */ var _contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44272);
/* __next_internal_client_entry_do_not_use__ PdfViewer auto */ 





/** A4 portrait height for ~596px width: 297/210 * 596 ≈ 842px. Ensures viewport fits one full A4 page. */ const DEFAULT_HEIGHT = '842px';
/**
 * Browsers often omit the iframe `load` event when the URL is a PDF (native viewer).
 * Without a fallback, the loading overlay would never disappear.
 */ const LOAD_FALLBACK_MS = 6000;
/**
 * Renders a PDF in an iframe. Works with static export (no server).
 * Put PDFs in public/ and use a root-absolute path (e.g. `/files/doc.pdf` or `/posts/my-slug/doc.pdf`).
 * Relative `src` resolves to `/posts/{slug}/...` when rendered inside a post (same as .md pipeline).
 */ function PdfViewer({ src, title, className, height = DEFAULT_HEIGHT }) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_3__/* .useTranslations */ .c)('pdf');
    const resolvedSrc = (0,_contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__/* .useResolvedPostAssetUrl */ .t9)(src) ?? src;
    const displayTitle = title ?? 'PDF document';
    const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const loadFallbackRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const clearLoadFallback = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        if (loadFallbackRef.current != null) {
            window.clearTimeout(loadFallbackRef.current);
            loadFallbackRef.current = null;
        }
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        setLoaded(false);
        setError(false);
        clearLoadFallback();
        loadFallbackRef.current = window.setTimeout(()=>{
            loadFallbackRef.current = null;
            setLoaded(true);
        }, LOAD_FALLBACK_MS);
        return ()=>{
            clearLoadFallback();
        };
    }, [
        resolvedSrc,
        clearLoadFallback
    ]);
    const handleLoad = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        clearLoadFallback();
        setLoaded(true);
    }, [
        clearLoadFallback
    ]);
    const handleError = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        clearLoadFallback();
        setError(true);
    }, [
        clearLoadFallback
    ]);
    if (error) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('flex flex-col items-center justify-center rounded-lg border border-border bg-muted p-8 text-center', height, className),
            role: "alert",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FileText_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                    className: "mb-3 size-12 text-muted-foreground",
                    "aria-hidden": true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "text-foreground font-medium",
                    children: displayTitle
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mt-1 text-sm text-muted-foreground",
                    children: [
                        "Failed to load PDF. You can",
                        ' ',
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                            href: resolvedSrc,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-primary underline",
                            children: "open it in a new tab"
                        }),
                        "."
                    ]
                })
            ]
        });
    }
    const isTailwindMinHeight = height.startsWith('min-h-');
    const explicitHeight = isTailwindMinHeight ? height.match(/min-h-\[([^\]]+)\]/)?.[1] ?? DEFAULT_HEIGHT : height;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figure", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('my-5 block w-full overflow-hidden rounded-lg border border-border bg-card', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative block w-full",
            style: {
                height: explicitHeight
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
                    src: resolvedSrc,
                    title: displayTitle,
                    className: "absolute inset-0 block h-full w-full border-0",
                    onLoad: handleLoad,
                    onError: handleError
                }),
                !loaded && !error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground",
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "text-sm",
                        children: t('loading')
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 52091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rb: () => (/* binding */ formatPostArchivesMonthDay),
/* harmony export */   S1: () => (/* binding */ formatPostCardDate)
/* harmony export */ });
/* unused harmony exports buildPostDates, postYearMonthKey */
/* harmony import */ var _barrel_optimize_names_format_isValid_parseISO_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27412);
/* harmony import */ var _barrel_optimize_names_format_isValid_parseISO_date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26923);
/* harmony import */ var _barrel_optimize_names_format_isValid_parseISO_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(342);

const FALLBACK_ISO = '1970-01-01T00:00:00.000Z';
/**
 * Normalizes front matter `date` into ISO (for sorting, `<time dateTime>`, sitemap)
 * and a display string that matches the author’s front matter (no local-TZ shift in UI).
 */ function buildPostDates(raw) {
    if (raw == null || raw === '') return {
        date: FALLBACK_ISO,
        dateDisplay: ''
    };
    if (typeof raw === 'string' || typeof raw === 'number') {
        const dateDisplay = String(raw).trim();
        if (!dateDisplay) return {
            date: FALLBACK_ISO,
            dateDisplay: ''
        };
        const d = new Date(dateDisplay);
        if (Number.isNaN(d.getTime())) return {
            date: FALLBACK_ISO,
            dateDisplay
        };
        return {
            date: d.toISOString(),
            dateDisplay
        };
    }
    if (raw instanceof Date) {
        if (Number.isNaN(raw.getTime())) return {
            date: FALLBACK_ISO,
            dateDisplay: ''
        };
        const iso = raw.toISOString();
        const y = raw.getUTCFullYear();
        const m = String(raw.getUTCMonth() + 1).padStart(2, '0');
        const day = String(raw.getUTCDate()).padStart(2, '0');
        const h = raw.getUTCHours();
        const min = raw.getUTCMinutes();
        const sec = raw.getUTCSeconds();
        const hasTime = h !== 0 || min !== 0 || sec !== 0;
        const dateDisplay = hasTime ? `${y}-${m}-${day} ${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${y}-${m}-${day}`;
        return {
            date: iso,
            dateDisplay
        };
    }
    const dateDisplay = String(raw).trim();
    const d = new Date(dateDisplay);
    if (Number.isNaN(d.getTime())) return {
        date: FALLBACK_ISO,
        dateDisplay
    };
    return {
        date: d.toISOString(),
        dateDisplay
    };
}
/** `YYYY-MM` for archives grouping; prefers calendar date from `dateDisplay`. */ function postYearMonthKey(post) {
    const disp = post.dateDisplay?.trim() ?? '';
    const match = disp.match(/^(\d{4})-(\d{2})-\d{2}/);
    if (match) return `${match[1]}-${match[2]}`;
    const dt = new Date(post.date);
    return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}`;
}
function formatPostArchivesMonthDay(post) {
    const disp = post.dateDisplay?.trim() ?? '';
    const match = disp.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (match) return `${match[2]}/${match[3]}`;
    const d = (0,_barrel_optimize_names_format_isValid_parseISO_date_fns__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(post.date);
    return (0,_barrel_optimize_names_format_isValid_parseISO_date_fns__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(d) ? (0,_barrel_optimize_names_format_isValid_parseISO_date_fns__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(d, 'MM/dd') : '—';
}
/** Post cards: calendar date only (`yyyy/MM/dd`), no time from `dateDisplay`. */ function formatPostCardDate(post) {
    const disp = post.dateDisplay?.trim();
    if (disp) {
        const ymd = disp.match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (ymd) return `${ymd[1]}/${ymd[2]}/${ymd[3]}`;
        const ymdSlash = disp.match(/^(\d{4})\/(\d{2})\/(\d{2})/);
        if (ymdSlash) return `${ymdSlash[1]}/${ymdSlash[2]}/${ymdSlash[3]}`;
    }
    const d = (0,_barrel_optimize_names_format_isValid_parseISO_date_fns__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(post.date);
    return (0,_barrel_optimize_names_format_isValid_parseISO_date_fns__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(d) ? (0,_barrel_optimize_names_format_isValid_parseISO_date_fns__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(d, 'yyyy/MM/dd') : post.date || '—';
}


/***/ }),

/***/ 52384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileTree: () => (/* binding */ FileTree)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _components_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2163);
/* harmony import */ var _barrel_optimize_names_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78916);
/* harmony import */ var _barrel_optimize_names_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38798);
/* harmony import */ var _barrel_optimize_names_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42129);
/* harmony import */ var _lib_language_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28710);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40980);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15891);
/* __next_internal_client_entry_do_not_use__ FileTree auto */ 






function getIconForFile(name) {
    const lastDot = name.lastIndexOf('.');
    if (lastDot === -1) return _barrel_optimize_names_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A;
    const ext = name.slice(lastDot + 1).toLowerCase();
    return (0,_lib_language_icons__WEBPACK_IMPORTED_MODULE_3__/* .getLanguageIcon */ .A7)(ext, _barrel_optimize_names_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A);
}
function toTreeDataItem(node, baseId) {
    const id = node.id ?? baseId;
    const hasChildren = node.children != null && node.children.length > 0;
    return {
        id,
        name: node.name,
        icon: hasChildren ? _barrel_optimize_names_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A : getIconForFile(node.name),
        openIcon: hasChildren ? _barrel_optimize_names_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A : undefined,
        children: hasChildren ? node.children.map((child, i)=>toTreeDataItem(child, `${id}-${i}`)) : undefined
    };
}
/**
 * Renders a file tree in MDX. Use with:
 *
 * <FileTree
 *   data={[
 *     { name: 'src', children: [
 *       { name: 'app', children: [
 *         { name: 'page.tsx' },
 *         { name: 'layout.tsx' },
 *       ]},
 *       { name: 'index.ts' },
 *     ]},
 *   ]}
 *   expandAll={false}
 *   title="Project structure"
 * />
 */ function FileTree({ data, expandAll = false, title }) {
    const treeData = data.map((node, i)=>toTreeDataItem(node, `node-${i}`));
    const showHeader = Boolean(title?.trim());
    const [selectedId, setSelectedId] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .ArticleCardPanelRoot */ .T, {
        className: "file-tree-root group not-prose",
        "data-file-tree": true,
        children: [
            showHeader && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .ArticleCardPanelHeader */ .Cx, {
                as: "figcaption",
                className: "py-2.5 mt-0",
                left: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                            className: "shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__.cn)('truncate', _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeaderText */ .J0),
                            children: title.trim()
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .ArticleCardPanelBody */ .fY, {
                className: "border-0 rounded-none",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__/* .TreeView */ .G, {
                    data: treeData,
                    expandAll: expandAll,
                    defaultNodeIcon: _barrel_optimize_names_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
                    defaultLeafIcon: _barrel_optimize_names_File_Folder_FolderOpen_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
                    selectedId: selectedId ?? undefined,
                    onNodeClick: (id)=>setSelectedId(id)
                })
            })
        ]
    });
}


/***/ }),

/***/ 53726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlockCollapseProvider: () => (/* binding */ CodeBlockCollapseProvider),
/* harmony export */   Y: () => (/* binding */ useCodeBlockCollapseLines)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ CodeBlockCollapseProvider,useCodeBlockCollapseLines auto */ 

const CodeBlockCollapseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(-1);
function CodeBlockCollapseProvider({ value, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CodeBlockCollapseContext.Provider, {
        value: value,
        children: children
    });
}
/** Effective max lines before fold; values below 1 mean folding is off. */ function useCodeBlockCollapseLines() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CodeBlockCollapseContext);
}


/***/ }),

/***/ 54378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FadeInNextImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5772);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ FadeInNextImage auto */ 



function FadeInNextImage({ enabled, className, fill, alt = '', onLoad, ...props }) {
    const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    if (!enabled) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: className,
            alt: alt,
            fill: fill,
            onLoad: onLoad,
            ...props
        });
    }
    const markLoaded = ()=>setLoaded(true);
    const image = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('img-fade-in', loaded && 'opacity-100', className),
        alt: alt,
        fill: fill,
        onLoad: (e)=>{
            markLoaded();
            onLoad?.(e);
        },
        ...props
    });
    if (fill) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "img-fade-in-host img-fade-in-host--fill",
            children: image
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "img-fade-in-host",
        children: image
    });
}


/***/ }),

/***/ 58317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Au: () => (/* binding */ resolvePostRelativeUrl)
/* harmony export */ });
/* unused harmony exports getPostPublicBasePath, isNonRelativeAssetUrl, rewriteCssRelativeAssetUrls, rewriteHtmlRelativeAssetUrls, rewriteSnippetList */
/**
 * Resolve relative asset URLs in post pages against /posts/{slug}/.
 * Hexo-era posts often use paths like `magazine.js` or `pages/01.jpg` next to
 * public/posts/{slug}/; the browser otherwise resolves them against /posts/.
 */ function getPostPublicBasePath(postSlug) {
    const segments = postSlug.split('/').filter(Boolean).map((segment)=>encodeURIComponent(segment));
    return `/posts/${segments.join('/')}/`;
}
/** True when the URL should be left unchanged (absolute, root-absolute, hash, etc.). */ function isNonRelativeAssetUrl(url) {
    const trimmed = url.trim();
    if (!trimmed) return true;
    if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return true;
    if (trimmed.startsWith('//')) return true;
    if (trimmed.startsWith('/')) return true;
    if (trimmed.startsWith('#')) return true;
    if (trimmed.startsWith('data:')) return true;
    return false;
}
/** Resolve a post-relative asset path to a root-absolute path (/posts/slug/...). */ function resolvePostRelativeUrl(url, postSlug) {
    const trimmed = url.trim();
    if (!trimmed || !postSlug.trim() || isNonRelativeAssetUrl(trimmed)) return trimmed;
    const base = `https://placeholder.invalid${getPostPublicBasePath(postSlug)}`;
    return new URL(trimmed, base).pathname;
}
/** Rewrite relative url(...) paths in CSS strings (inline style, <style> blocks). */ function rewriteCssRelativeAssetUrls(css, postSlug) {
    if (!postSlug?.trim() || !css) return css;
    return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (_match, quote, url)=>{
        const resolved = resolvePostRelativeUrl(url, postSlug);
        if (resolved === url.trim()) return _match;
        return `url(${quote}${resolved}${quote})`;
    });
}
/** Rewrite relative src/href/style in HTML snippets (inject link/script tags). */ function rewriteHtmlRelativeAssetUrls(html, postSlug) {
    if (!postSlug?.trim()) return html;
    let out = html.replace(/\b(src|href)=(["'])([^"']+)\2/gi, (_match, attr, quote, url)=>{
        const resolved = resolvePostRelativeUrl(url, postSlug);
        return `${attr}=${quote}${resolved}${quote}`;
    });
    out = out.replace(/\bstyle=(["'])([\s\S]*?)\1/gi, (_match, quote, css)=>{
        return `style=${quote}${rewriteCssRelativeAssetUrls(css, postSlug)}${quote}`;
    });
    return out;
}
function rewriteSnippetList(snippets, postSlug) {
    if (!snippets?.length) return [];
    return snippets.map((s)=>rewriteHtmlRelativeAssetUrls(s, postSlug));
}


/***/ }),

/***/ 58761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncryptedBlock: () => (/* binding */ EncryptedBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50910);
/* harmony import */ var _barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93164);
/* harmony import */ var _barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25777);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89239);
/* harmony import */ var _components_ui_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61360);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15891);
/* harmony import */ var _lib_encrypt_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47534);
/* harmony import */ var _contexts_OnContentRevealContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90824);
/* __next_internal_client_entry_do_not_use__ EncryptedBlock auto */ 








const STORAGE_KEY_PREFIX = 'blog-encrypt-fragment:';
function getStoredFragmentPassword(key) {
    if (false) {}
    try {
        return window.localStorage.getItem(STORAGE_KEY_PREFIX + key);
    } catch  {
        return null;
    }
}
function setStoredFragmentPassword(key, password) {
    if (false) {}
    try {
        window.localStorage.setItem(STORAGE_KEY_PREFIX + key, password);
    } catch  {
    // ignore
    }
}
const DEFAULT_OPTIONS = {
    abstract: '',
    message: '',
    wrong_pass_message: '',
    wrong_hash_message: ''
};
/**
 * Renders a panel that decrypts and shows a fragment when the user enters the correct password.
 * Uses the same algorithm as full-post encryption (PBKDF2 + AES-256-CBC + HMAC).
 * Encrypted payload must be generated at build time (e.g. scripts/encrypt-fragment.mjs).
 */ function EncryptedBlock({ encryptedHex, keySaltHex, ivSaltHex, hmacHex, options: optionsProp, blockId, message: messageProp, abstract: abstractProp, wrong_pass_message: wrongPassProp, wrong_hash_message: wrongHashProp }) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_6__/* .useTranslations */ .c)('encrypt');
    const onReveal = (0,_contexts_OnContentRevealContext__WEBPACK_IMPORTED_MODULE_5__/* .useOnContentReveal */ .D)();
    const options = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>({
            ...DEFAULT_OPTIONS,
            ...optionsProp,
            ...messageProp !== undefined && {
                message: messageProp
            },
            ...abstractProp !== undefined && {
                abstract: abstractProp
            },
            ...wrongPassProp !== undefined && {
                wrong_pass_message: wrongPassProp
            },
            ...wrongHashProp !== undefined && {
                wrong_hash_message: wrongHashProp
            }
        }), [
        optionsProp,
        messageProp,
        abstractProp,
        wrongPassProp,
        wrongHashProp
    ]);
    const storageKey = blockId ?? null;
    const inputId = react__WEBPACK_IMPORTED_MODULE_1__.useId();
    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
        status: 'idle'
    });
    const [triedStored, setTriedStored] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const decryptedRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    // Execute <script> tags inside dangerouslySetInnerHTML content after decrypt
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (state.status !== 'decrypted' || !decryptedRef.current) return;
        const container = decryptedRef.current;
        const scripts = container.querySelectorAll('script');
        scripts.forEach((oldScript)=>{
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach((attr)=>{
                newScript.setAttribute(attr.name, attr.value);
            });
            newScript.textContent = oldScript.textContent;
            oldScript.replaceWith(newScript);
        });
    }, [
        state
    ]);
    const tryDecrypt = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async (pwd)=>{
        setState({
            status: 'loading'
        });
        const result = await (0,_lib_encrypt_client__WEBPACK_IMPORTED_MODULE_7__/* .decrypt */ .Yc)(encryptedHex, keySaltHex, ivSaltHex, hmacHex, pwd);
        if (result.ok) {
            if (storageKey) setStoredFragmentPassword(storageKey, pwd);
            setState({
                status: 'decrypted',
                data: result.data
            });
            onReveal?.run();
            return;
        }
        const err = result.error;
        const msg = err === 'wrong_hash' ? options.wrong_hash_message || t('wrong_hash_message') : options.wrong_pass_message || t('wrong_pass_message');
        setState({
            status: 'error',
            message: msg
        });
    }, [
        encryptedHex,
        keySaltHex,
        ivSaltHex,
        hmacHex,
        storageKey,
        options,
        onReveal,
        t
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!storageKey || triedStored) return;
        setTriedStored(true);
        const stored = getStoredFragmentPassword(storageKey);
        if (stored) tryDecrypt(stored);
    }, [
        storageKey,
        triedStored,
        tryDecrypt
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!password.trim()) return;
        tryDecrypt(password.trim());
    };
    const handleForget = ()=>{
        if (storageKey && "object" !== 'undefined') {
            window.localStorage.removeItem(STORAGE_KEY_PREFIX + storageKey);
        }
        setState({
            status: 'idle'
        });
        setPassword('');
    };
    const abstractText = options.abstract || t('abstract');
    const messageText = options.message || t('message');
    if (state.status === 'decrypted') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelRoot */ .Rd} not-prose`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeader */ .w,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeaderText */ .J0,
                            children: t('protectedContent')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                            className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeaderRightIcon */ .lu,
                            "aria-hidden": true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelBody */ .Br,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            ref: decryptedRef,
                            className: "prose prose-sm max-w-none text-foreground dark:prose-invert",
                            dangerouslySetInnerHTML: {
                                __html: state.data
                            }
                        }),
                        storageKey ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "mt-3 flex justify-end",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
                                type: "button",
                                variant: "outline",
                                size: "sm",
                                onClick: handleForget,
                                className: "text-muted-foreground",
                                "aria-label": t('forgetPasswordBlock'),
                                children: t('forgetPassword')
                            })
                        }) : null
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelRoot */ .Rd} not-prose`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeader */ .w,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeaderRightIcon */ .lu,
                        "aria-hidden": true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelHeaderText */ .J0,
                        children: t('protectedContent')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_4__/* .articleCardPanelBody */ .Br,
                children: [
                    abstractText ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "mb-3 text-sm text-muted-foreground",
                        children: abstractText
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                        onSubmit: handleSubmit,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_field__WEBPACK_IMPORTED_MODULE_3__/* .Field */ .D0, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_field__WEBPACK_IMPORTED_MODULE_3__/* .FieldLabel */ .dh, {
                                    htmlFor: inputId,
                                    children: messageText
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-wrap items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                            id: inputId,
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            placeholder: t('placeholder'),
                                            className: "h-8 max-w-xs rounded-md border border-input bg-background px-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50",
                                            autoComplete: "current-password",
                                            disabled: state.status === 'loading',
                                            "aria-label": t('blockPasswordLabel')
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
                                            type: "submit",
                                            variant: "outline",
                                            disabled: state.status === 'loading' || !password.trim(),
                                            children: state.status === 'loading' ? t('decrypting') : t('decrypt')
                                        })
                                    ]
                                }),
                                state.status === 'error' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_field__WEBPACK_IMPORTED_MODULE_3__/* .FieldError */ .bg, {
                                    children: state.message
                                }) : null
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 60846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MermaidRunner: () => (/* binding */ MermaidRunner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ MermaidRunner auto */ 
const RENDERED_DATA = 'data-mermaid-rendered';
const RENDERING_DATA = 'data-mermaid-rendering';
let mermaidIdCounter = 0;
let renderChain = Promise.resolve();
function decodeMermaidSource(el) {
    const source = el.getAttribute('data-mermaid-source') ?? el.getAttribute('dataMermaidSource') ?? el.getAttribute('datamermaidsource');
    if (!source) return null;
    return source.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
}
function isMermaidErrorSvg(svg) {
    return svg.includes('class="error-text"') || svg.includes('Syntax error in text');
}
function ensureOutput(el) {
    let output = el.querySelector('.mermaid-output');
    if (!output) {
        output = document.createElement('div');
        output.className = 'mermaid-output min-w-0 flex-1';
        el.appendChild(output);
    }
    return output;
}
function enqueueRender(task) {
    renderChain = renderChain.then(task).catch(()=>{});
}
function mutationAddsPendingMermaid(mutations) {
    for (const mutation of mutations){
        if (mutation.type !== 'childList') continue;
        for (const node of Array.from(mutation.addedNodes)){
            if (!(node instanceof Element)) continue;
            if (node.closest('.mermaid-output')) continue;
            if (node.matches('.mermaid[data-mermaid-source]')) return true;
            if (node.querySelector('.mermaid[data-mermaid-source]')) return true;
        }
    }
    return false;
}
async function renderElement(el, mermaid, cancelled, onNeedsRetry) {
    if (cancelled() || el.hasAttribute(RENDERED_DATA) || el.hasAttribute(RENDERING_DATA)) {
        return;
    }
    const raw = decodeMermaidSource(el);
    if (!raw) return;
    el.setAttribute(RENDERING_DATA, '1');
    const output = ensureOutput(el);
    const id = `mermaid-${++mermaidIdCounter}`;
    try {
        const { svg } = await mermaid.render(id, raw);
        if (cancelled()) return;
        if (isMermaidErrorSvg(svg)) {
            el.removeAttribute(RENDERING_DATA);
            onNeedsRetry?.();
            return;
        }
        el.setAttribute(RENDERED_DATA, '1');
        output.innerHTML = svg;
    } catch  {
        if (!cancelled()) {
            output.textContent = 'Mermaid diagram failed to render.';
        }
    } finally{
        el.removeAttribute(RENDERING_DATA);
    }
}
function queueRender(el, mermaid, cancelled, onNeedsRetry) {
    if (el.hasAttribute(RENDERED_DATA) || el.hasAttribute(RENDERING_DATA)) {
        return;
    }
    enqueueRender(()=>renderElement(el, mermaid, cancelled, onNeedsRetry));
}
/**
 * Runs Mermaid on .mermaid elements. Renders SVG into .mermaid-output.
 * Loading (.mermaid-loading) is hidden via CSS when SVG appears.
 */ function MermaidRunner() {
    const mermaidRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const observedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
    const ioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const scanScheduledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let cancelled = false;
        const isCancelled = ()=>cancelled;
        const observeElement = (el)=>{
            if (el.hasAttribute(RENDERED_DATA) || observedRef.current.has(el)) {
                return;
            }
            observedRef.current.add(el);
            ioRef.current?.observe(el);
        };
        const scanPending = ()=>{
            if (cancelled || !mermaidRef.current) return;
            const nodes = document.querySelectorAll('.mermaid[data-mermaid-source]:not([data-mermaid-rendered])');
            Array.from(nodes).forEach(observeElement);
        };
        const scheduleScan = ()=>{
            if (scanScheduledRef.current || cancelled) return;
            scanScheduledRef.current = true;
            requestAnimationFrame(()=>{
                scanScheduledRef.current = false;
                scanPending();
            });
        };
        ioRef.current = new IntersectionObserver((entries)=>{
            if (cancelled || !mermaidRef.current) return;
            for (const entry of entries){
                if (!entry.isIntersecting) continue;
                const el = entry.target;
                ioRef.current?.unobserve(el);
                queueRender(el, mermaidRef.current, isCancelled, ()=>{
                    observedRef.current.delete(el);
                    ioRef.current?.observe(el);
                });
            }
        }, {
            rootMargin: '240px 0px',
            threshold: 0
        });
        const domObs = new MutationObserver((mutations)=>{
            if (cancelled || !mutationAddsPendingMermaid(mutations)) return;
            scheduleScan();
        });
        domObs.observe(document.body, {
            childList: true,
            subtree: true
        });
        Promise.all(/* import() */[__webpack_require__.e(2941), __webpack_require__.e(2995), __webpack_require__.e(8851), __webpack_require__.e(3308)]).then(__webpack_require__.bind(__webpack_require__, 43328)).then((mod)=>{
            if (cancelled) return;
            const mermaid = mod.default;
            mermaid.initialize({
                themeVariables: {
                    fontSize: '16px'
                },
                class: {
                    useMaxWidth: false
                },
                flowchart: {
                    useMaxWidth: false,
                    rankSpacing: 28,
                    nodeSpacing: 40,
                    diagramPadding: 0
                },
                sequence: {
                    useMaxWidth: false
                }
            });
            mermaidRef.current = mermaid;
            scheduleScan();
        }).catch(()=>{});
        return ()=>{
            cancelled = true;
            domObs.disconnect();
            ioRef.current?.disconnect();
            ioRef.current = null;
            observedRef.current.clear();
        };
    }, []);
    return null;
}


/***/ }),

/***/ 61360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D0: () => (/* binding */ Field),
  bg: () => (/* binding */ FieldError),
  dh: () => (/* binding */ FieldLabel)
});

// UNUSED EXPORTS: FieldContent, FieldDescription, FieldGroup, FieldLegend, FieldSeparator, FieldSet, FieldTitle

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var dist = __webpack_require__(18460);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-label/dist/index.mjs
var react_label_dist = __webpack_require__(29486);
;// ./src/components/ui/label.tsx
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,dist/* cva */.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react_label_dist/* Root */.b, {
        ref: ref,
        className: (0,utils.cn)(labelVariants(), className),
        ...props
    }));
Label.displayName = react_label_dist/* Root */.b.displayName;


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-separator/dist/index.mjs
var react_separator_dist = __webpack_require__(15763);
;// ./src/components/ui/separator.tsx
/* __next_internal_client_entry_do_not_use__ Separator auto */ 



const separator_Separator = /*#__PURE__*/ react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react_separator_dist/* Root */.b, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,utils.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }));
separator_Separator.displayName = react_separator_dist/* Root */.b.displayName;


;// ./src/components/ui/field.tsx
/* __next_internal_client_entry_do_not_use__ Field,FieldLabel,FieldDescription,FieldError,FieldGroup,FieldLegend,FieldSeparator,FieldSet,FieldContent,FieldTitle auto */ 





function FieldSet({ className, ...props }) {
    return /*#__PURE__*/ _jsx("fieldset", {
        "data-slot": "field-set",
        className: cn("flex flex-col gap-6", "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", className),
        ...props
    });
}
function FieldLegend({ className, variant = "legend", ...props }) {
    return /*#__PURE__*/ _jsx("legend", {
        "data-slot": "field-legend",
        "data-variant": variant,
        className: cn("mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm", className),
        ...props
    });
}
function FieldGroup({ className, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "field-group",
        className: cn("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", className),
        ...props
    });
}
const fieldVariants = (0,dist/* cva */.F)("group/field data-[invalid=true]:text-destructive flex w-full gap-3", {
    variants: {
        orientation: {
            vertical: [
                "flex-col [&>*]:w-full [&>.sr-only]:w-auto"
            ],
            horizontal: [
                "flex-row items-center",
                "[&>[data-slot=field-label]]:flex-auto",
                "has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px has-[>[data-slot=field-content]]:items-start"
            ],
            responsive: [
                "@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto flex-col [&>*]:w-full [&>.sr-only]:w-auto",
                "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
                "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
            ]
        }
    },
    defaultVariants: {
        orientation: "vertical"
    }
});
function Field({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "group",
        "data-slot": "field",
        "data-orientation": orientation,
        className: (0,utils.cn)(fieldVariants({
            orientation
        }), className),
        ...props
    });
}
function FieldContent({ className, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "field-content",
        className: cn("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", className),
        ...props
    });
}
function FieldLabel({ className, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
        "data-slot": "field-label",
        className: (0,utils.cn)("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4", "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10", className),
        ...props
    });
}
function FieldTitle({ className, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "field-label",
        className: cn("flex w-fit items-center gap-2 text-sm font-medium leading-snug group-data-[disabled=true]/field:opacity-50", className),
        ...props
    });
}
function FieldDescription({ className, ...props }) {
    return /*#__PURE__*/ _jsx("p", {
        "data-slot": "field-description",
        className: cn("text-muted-foreground text-sm font-normal leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance", "nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5", "[&>a:hover]:text-foreground [&>a]:underline [&>a]:underline-offset-4", className),
        ...props
    });
}
function FieldSeparator({ children, className, ...props }) {
    return /*#__PURE__*/ _jsxs("div", {
        "data-slot": "field-separator",
        "data-content": !!children,
        className: cn("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsx(Separator, {
                className: "absolute inset-0 top-1/2"
            }),
            children && /*#__PURE__*/ _jsx("span", {
                className: "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
                "data-slot": "field-separator-content",
                children: children
            })
        ]
    });
}
function FieldError({ className, children, errors, ...props }) {
    const content = (0,react.useMemo)(()=>{
        if (children) {
            return children;
        }
        if (!errors) {
            return null;
        }
        if (errors?.length === 1 && errors[0]?.message) {
            return errors[0].message;
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: "ml-4 flex list-disc flex-col gap-1",
            children: errors.map((error, index)=>error?.message && /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                    children: error.message
                }, index))
        });
    }, [
        children,
        errors
    ]);
    if (!content) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "alert",
        "data-slot": "field-error",
        className: (0,utils.cn)("text-destructive text-sm font-normal", className),
        ...props,
        children: content
    });
}



/***/ }),

/***/ 61543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NJ: () => (/* reexport */ createMdxImg),
  Jf: () => (/* binding */ createPostBodyLink),
  Oh: () => (/* binding */ createPostBodyRehypeComponents),
  FF: () => (/* binding */ getBaseMdxComponentsForPosts)
});

// UNUSED EXPORTS: MdxBlockquote, MdxFigcaption, MdxFigure

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(98500);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(5772);
// EXTERNAL MODULE: ./src/components/business/CodeBlock.tsx + 2 modules
var CodeBlock = __webpack_require__(67081);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(68822);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/lightbulb.js
var lightbulb = __webpack_require__(31885);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/message-square.js
var message_square = __webpack_require__(96035);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(41585);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/octagon-alert.js
var octagon_alert = __webpack_require__(32106);
;// ./src/components/mdx/Callout.tsx



/** Backward compatibility: map legacy variants to GitHub types */ const LEGACY_MAP = {
    info: 'note',
    note: 'note',
    tip: 'tip',
    important: 'important',
    warning: 'warning',
    caution: 'caution'
};
/** Default English titles from remark/rehype; when title equals these we use i18n instead */ const DEFAULT_TITLES = {
    note: 'Note',
    tip: 'Tip',
    important: 'Important',
    warning: 'Warning',
    caution: 'Caution'
};
const ICON_MAP = {
    note: info/* default */.A,
    tip: lightbulb/* default */.A,
    important: message_square/* default */.A,
    warning: triangle_alert/* default */.A,
    caution: octagon_alert/* default */.A
};
/**
 * GitHub-style alert/callout. Structure and styles match GitHub's official implementation.
 * Uses classes: markdown-alert, markdown-alert-{type}, markdown-alert-title.
 */ function Callout({ variant = 'note', title, children }) {
    const t = (0,react_client/* useTranslations */.c)('callout');
    const type = LEGACY_MAP[variant] ?? variant;
    const isDefaultTitle = title != null && title.trim().toLowerCase() === DEFAULT_TITLES[type].toLowerCase();
    const displayTitle = title != null && !isDefaultTitle ? title : t(type);
    const Icon = ICON_MAP[type];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `markdown-alert markdown-alert-${type}`,
        role: "note",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "markdown-alert-title",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                        className: "markdown-alert-icon",
                        "aria-hidden": true
                    }),
                    displayTitle
                ]
            }),
            children
        ]
    });
}

// EXTERNAL MODULE: ./src/components/mdx/ChessViewer.tsx + 8 modules
var ChessViewer = __webpack_require__(83163);
// EXTERNAL MODULE: ./src/components/mdx/XiangqiViewer.tsx + 10 modules
var XiangqiViewer = __webpack_require__(93473);
// EXTERNAL MODULE: ./src/components/mdx/EChart.tsx + 3 modules
var EChart = __webpack_require__(10986);
// EXTERNAL MODULE: ./src/components/mdx/JsonView.tsx + 2 modules
var JsonView = __webpack_require__(96054);
// EXTERNAL MODULE: ./src/components/mdx/LeafletMap.tsx + 2 modules
var LeafletMap = __webpack_require__(31507);
// EXTERNAL MODULE: ./src/components/mdx/Markmap.tsx + 1 modules
var Markmap = __webpack_require__(82167);
// EXTERNAL MODULE: ./src/components/business/EncryptedFragment.tsx
var EncryptedFragment = __webpack_require__(46281);
// EXTERNAL MODULE: ./src/components/mermaid/index.ts
var mermaid = __webpack_require__(4316);
// EXTERNAL MODULE: ./src/components/business/TableWithCopy.tsx
var TableWithCopy = __webpack_require__(66954);
// EXTERNAL MODULE: ./src/components/business/DeferredInlineScript.tsx
var DeferredInlineScript = __webpack_require__(16404);
// EXTERNAL MODULE: ./src/components/mdx/ArchivesPageContent.tsx
var ArchivesPageContent = __webpack_require__(31857);
// EXTERNAL MODULE: ./src/components/mdx/Carousel.tsx
var Carousel = __webpack_require__(93520);
// EXTERNAL MODULE: ./src/components/mdx/CategoriesPageContent.tsx
var CategoriesPageContent = __webpack_require__(27322);
// EXTERNAL MODULE: ./src/components/mdx/ChildPostsList.tsx
var ChildPostsList = __webpack_require__(10181);
// EXTERNAL MODULE: ./src/components/mdx/Details.tsx
var Details = __webpack_require__(44748);
// EXTERNAL MODULE: ./src/components/mdx/EncryptedBlock.tsx
var EncryptedBlock = __webpack_require__(58761);
// EXTERNAL MODULE: ./src/components/mdx/Figure.tsx
var Figure = __webpack_require__(9930);
// EXTERNAL MODULE: ./src/components/mdx/FileTree.tsx
var FileTree = __webpack_require__(52384);
// EXTERNAL MODULE: ./src/components/mdx/FileTreeViewer.tsx
var FileTreeViewer = __webpack_require__(14314);
// EXTERNAL MODULE: ./src/components/mdx/ImageGrid.tsx
var ImageGrid = __webpack_require__(96585);
// EXTERNAL MODULE: ./src/components/mdx/LinksPageContent.tsx
var LinksPageContent = __webpack_require__(6455);
// EXTERNAL MODULE: ./src/components/mdx/MusicPlayer.tsx
var MusicPlayer = __webpack_require__(19600);
// EXTERNAL MODULE: ./src/components/mdx/PdfViewer.tsx
var PdfViewer = __webpack_require__(50206);
// EXTERNAL MODULE: ./src/components/mdx/ProgressWithLabel.tsx
var ProgressWithLabel = __webpack_require__(13663);
// EXTERNAL MODULE: ./src/components/mdx/RawHtml.tsx + 1 modules
var RawHtml = __webpack_require__(90954);
// EXTERNAL MODULE: ./src/components/mdx/RevealDeck.tsx + 3 modules
var RevealDeck = __webpack_require__(42500);
// EXTERNAL MODULE: ./src/components/mdx/Search.tsx
var Search = __webpack_require__(81990);
// EXTERNAL MODULE: ./src/components/mdx/Steps.tsx
var Steps = __webpack_require__(98319);
// EXTERNAL MODULE: ./src/components/mdx/SubFields.tsx
var SubFields = __webpack_require__(20427);
// EXTERNAL MODULE: ./src/components/mdx/Tabs.tsx
var Tabs = __webpack_require__(67326);
// EXTERNAL MODULE: ./src/components/mdx/TagsPageContent.tsx
var TagsPageContent = __webpack_require__(80367);
;// ./scripts/mdx-shortcode-components.generated.ts
// Auto-generated by scripts/generate-mdx-components.mjs — do not edit by hand.
// Output: scripts/mdx-shortcode-components.generated.ts (all .generated.ts live under scripts/).
// Registers all .tsx components under src/components/mdx/ as MDX shortcodes.




























const mdxShortcodeComponents = {
    ArchivesPageContent: ArchivesPageContent/* ArchivesPageContent */.i,
    Callout: Callout,
    Carousel: Carousel.Carousel,
    CarouselContent: Carousel.CarouselContent,
    CarouselItem: Carousel.CarouselItem,
    CarouselDots: Carousel.CarouselDots,
    CarouselNext: Carousel.CarouselNext,
    CarouselPrevious: Carousel.CarouselPrevious,
    CategoriesPageContent: CategoriesPageContent.CategoriesPageContent,
    ChessViewer: ChessViewer.ChessViewer,
    ChildPostsList: ChildPostsList/* ChildPostsList */.W,
    Details: Details.Details,
    EChart: EChart.EChart,
    EncryptedBlock: EncryptedBlock.EncryptedBlock,
    Figure: Figure.Figure,
    FileTree: FileTree.FileTree,
    FileTreeViewer: FileTreeViewer.FileTreeViewer,
    ImageGrid: ImageGrid.ImageGrid,
    ImageGridItem: ImageGrid.ImageGridItem,
    JsonView: JsonView.JsonView,
    LeafletMap: LeafletMap.LeafletMap,
    LinksPageContent: LinksPageContent/* LinksPageContent */.C,
    Markmap: Markmap.Markmap,
    MusicPlayer: MusicPlayer.MusicPlayer,
    PdfViewer: PdfViewer.PdfViewer,
    ProgressWithLabel: ProgressWithLabel.ProgressWithLabel,
    RawHtml: RawHtml.RawHtml,
    RevealDeck: RevealDeck.RevealDeck,
    Search: Search.Search,
    Steps: Steps.Steps,
    StepsItem: Steps.StepsItem,
    SubFields: SubFields.SubFields,
    SubField: SubFields.SubField,
    Tabs: Tabs.Tabs,
    TabsList: Tabs.TabsList,
    TabsTrigger: Tabs.TabsTrigger,
    TabsContent: Tabs.TabsContent,
    TagsPageContent: TagsPageContent/* TagsPageContent */.E,
    XiangqiViewer: XiangqiViewer.XiangqiViewer
};

// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
// EXTERNAL MODULE: ./src/components/business/FadeInImg.tsx
var FadeInImg = __webpack_require__(8637);
// EXTERNAL MODULE: ./src/lib/post/post-asset-url.ts
var post_asset_url = __webpack_require__(58317);
;// ./src/components/business/MdxImg.tsx





const IMG_WRAPPER_CLASS = 'block w-fit';
const STANDALONE_IMG_WRAPPER_CLASS = 'standalone-img-wrapper';
const FIGURE_WRAPPER_CLASS = 'block my-5 w-fit';
function parseBoolAttr(val) {
    if (val == null || val === '') return undefined;
    const lower = String(val).toLowerCase();
    if (lower === 'true' || lower === '1') return true;
    if (lower === 'false' || lower === '0') return false;
    return undefined;
}
/** Boolean HTML attrs (e.g. `no-fancybox`) often serialize as `""`; treat presence as opt-out unless explicitly false. */ function isImgBooleanOptOut(record, key) {
    if (!(key in record)) return false;
    const v = record[key];
    if (v === false) return false;
    const s = typeof v === 'string' ? v.toLowerCase() : '';
    if (s === 'false' || s === '0') return false;
    return true;
}
const IMG_OPT_OUT_FANCYBOX_KEYS = [
    'no-fancybox',
    'no-fancybox',
    'noFacybox',
    'noFancybox'
];
const IMG_OPT_OUT_FIGCAPTION_KEYS = [
    'no-figcaption',
    'noFigcaption'
];
const IMG_MARKDOWN_SOURCE_KEYS = [
    'data-markdown-image',
    'dataMarkdownImage'
];
function stripImgMediaOptOutAttrs(restFiltered) {
    for (const k of IMG_OPT_OUT_FANCYBOX_KEYS)delete restFiltered[k];
    for (const k of IMG_OPT_OUT_FIGCAPTION_KEYS)delete restFiltered[k];
    for (const k of IMG_MARKDOWN_SOURCE_KEYS)delete restFiltered[k];
}
function isMarkdownImage(record) {
    return IMG_MARKDOWN_SOURCE_KEYS.some((k)=>isImgBooleanOptOut(record, k));
}
function imgSkipsFancybox(record) {
    return IMG_OPT_OUT_FANCYBOX_KEYS.some((k)=>isImgBooleanOptOut(record, k));
}
function imgSkipsFigcaption(record) {
    return IMG_OPT_OUT_FIGCAPTION_KEYS.some((k)=>isImgBooleanOptOut(record, k));
}
function createMdxImg(fancyboxEnabled, photoFigcaptionEnabled, postSlug, options) {
    const standaloneSpacing = options?.standaloneSpacing === true;
    const imageFadeInEnabled = options?.imageFadeInEnabled === true;
    return function MdxImg(props) {
        const { src, className, style, alt, title, ...rest } = props;
        const restRecord = rest;
        const dataFigcaption = restRecord['data-figcaption'];
        const dataFancybox = restRecord['data-fancybox'];
        const restFiltered = {
            ...restRecord
        };
        delete restFiltered['data-figcaption'];
        delete restFiltered['data-fancybox'];
        const skipFancybox = imgSkipsFancybox(restRecord);
        const skipFigcaption = imgSkipsFigcaption(restRecord);
        const markdownImage = isMarkdownImage(restRecord);
        stripImgMediaOptOutAttrs(restFiltered);
        const srcStr = typeof src === 'string' ? src : undefined;
        const resolvedSrc = srcStr && postSlug?.trim() ? (0,post_asset_url/* resolvePostRelativeUrl */.Au)(srcStr, postSlug) : srcStr;
        const useFancybox = !skipFancybox && (parseBoolAttr(dataFancybox) ?? fancyboxEnabled) && !!resolvedSrc;
        const dataFigcaptionExplicit = parseBoolAttr(dataFigcaption);
        const figcaptionOptIn = dataFigcaptionExplicit ?? photoFigcaptionEnabled;
        const captionText = (title ?? alt ?? '').trim();
        const useFigcaption = !skipFigcaption && figcaptionOptIn && (captionText.length > 0 || dataFigcaptionExplicit === true);
        const imgEl = /*#__PURE__*/ (0,jsx_runtime.jsx)(FadeInImg.FadeInImg, {
            enabled: imageFadeInEnabled,
            ...restFiltered,
            src: resolvedSrc,
            className: (0,utils.cn)('rounded-lg', className),
            style: style,
            alt: alt ?? '',
            title: title,
            loading: "lazy"
        });
        const useStandaloneSpacing = standaloneSpacing || markdownImage;
        const innerWrapperClass = useFigcaption ? 'block' : useStandaloneSpacing ? (0,utils.cn)(IMG_WRAPPER_CLASS, STANDALONE_IMG_WRAPPER_CLASS) : IMG_WRAPPER_CLASS;
        let content = imgEl;
        if (useFancybox && resolvedSrc) {
            content = /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                href: resolvedSrc,
                className: (0,utils.cn)('cursor-pointer', innerWrapperClass),
                "data-fancybox": "gallery",
                "data-src": resolvedSrc,
                "data-caption": captionText || undefined,
                children: imgEl
            });
        } else {
            content = /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: innerWrapperClass,
                children: imgEl
            });
        }
        if (useFigcaption) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("figure", {
                className: FIGURE_WRAPPER_CLASS,
                "data-photo-figure": true,
                children: [
                    content,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("figcaption", {
                        className: "text-center text-sm text-muted-foreground",
                        children: captionText
                    })
                ]
            });
        }
        return content;
    };
}

;// ./src/components/business/post-body-rehype-components.tsx






















/** HTML flow tags that must not sit inside a <p> (invalid nesting breaks hydration). */ const MDX_BLOCK_HTML_TAGS = new Set([
    'address',
    'article',
    'aside',
    'blockquote',
    'canvas',
    'dd',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'li',
    'main',
    'nav',
    'ol',
    'p',
    'pre',
    'section',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'tr',
    'ul',
    'video'
]);
function isKnownBlockBodyComponent(type) {
    return type === CodeBlock.CodeBlock || type === MdxFigure || type === TableWithCopy.TableWithCopy || type === mermaid/* MermaidPanel */.gE || type === Callout || type === EncryptedFragment.EncryptedFragment || type === FileTreeViewer.FileTreeViewer || type === FileTreeViewer.FileTreeViewerFolder || type === FileTreeViewer.FileTreeViewerFile || type === ChessViewer.ChessViewer || type === XiangqiViewer.XiangqiViewer || type === Markmap.Markmap || type === JsonView.JsonView || type === EChart.EChart || type === LeafletMap.LeafletMap;
}
/**
 * MDX often emits <p> around block-level children (e.g. link wrapping a panel div).
 * When the subtree contains block nodes, render a div with the same prose classes as <p>.
 */ function subtreeHasBlockElement(node, depth = 0) {
    if (depth > 48) return false;
    if (node == null || typeof node === 'boolean') return false;
    if (typeof node === 'string' || typeof node === 'number') return false;
    if (Array.isArray(node)) return node.some((n)=>subtreeHasBlockElement(n, depth + 1));
    if (!/*#__PURE__*/ react.isValidElement(node)) return false;
    const t = node.type;
    if (typeof t === 'string') {
        return MDX_BLOCK_HTML_TAGS.has(t);
    }
    if (isKnownBlockBodyComponent(t)) return true;
    const ch = node.props.children;
    return subtreeHasBlockElement(ch, depth + 1);
}
function MdxParagraph(props) {
    const { children, className, ...rest } = props;
    if (subtreeHasBlockElement(children)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (0,utils.cn)('mdx-paragraph', className),
            ...rest,
            children: children
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
        className: className,
        ...rest,
        children: children
    });
}
function createPostBodyLink(postSlug) {
    return function PostBodyLink(props) {
        const { href, children, className, ...rest } = props;
        if (href == null || String(href).trim() === '') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: className,
                ...rest,
                children: children
            });
        }
        let h = String(href).trim();
        if (postSlug?.trim()) {
            h = (0,post_asset_url/* resolvePostRelativeUrl */.Au)(h, postSlug);
        }
        if (/^https?:\/\//i.test(h) || h.startsWith('mailto:') || h.startsWith('tel:')) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                href: h,
                rel: /^https?:\/\//i.test(h) ? 'noopener noreferrer' : undefined,
                target: /^https?:\/\//i.test(h) ? '_blank' : undefined,
                className: className,
                ...rest,
                children: children
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
            href: h,
            className: className,
            ...rest,
            children: children
        });
    };
}
function getTextContent(node) {
    if (node == null) return '';
    if (typeof node === 'string') return node.trim();
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(getTextContent).join('').trim();
    if (/*#__PURE__*/ react.isValidElement(node)) {
        const p = node.props;
        if (p.children != null) return getTextContent(p.children);
    }
    return '';
}
function MdxFigure(props) {
    if (props['data-rehype-pretty-code-figure'] === undefined) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("figure", {
            ...props
        });
    }
    const children = react.Children.toArray(props.children);
    const first = children[0];
    const second = children[1];
    const isTitleCaption = /*#__PURE__*/ react.isValidElement(first) && first.props['data-rehype-pretty-code-title'] !== undefined;
    const isPreOrCodeBlock = /*#__PURE__*/ react.isValidElement(second) && (second.type === 'pre' || second.type === CodeBlock.CodeBlock);
    if (isTitleCaption && isPreOrCodeBlock) {
        const firstProps = first.props;
        const secondProps = second.props;
        const filename = getTextContent(firstProps.children);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlock.CodeBlock, {
            ...secondProps,
            "data-filename": filename || undefined,
            children: secondProps.children
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    });
}
function MdxFigcaption(props) {
    if (props['data-rehype-pretty-code-title'] !== undefined) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("figcaption", {
        ...props
    });
}
const CALLOUT_VARIANTS = [
    'note',
    'tip',
    'important',
    'warning',
    'caution'
];
function MdxBlockquote(props) {
    const callout = props['data-callout'] ?? props.dataCallout;
    const title = props['data-callout-title'] ?? props.dataCalloutTitle;
    if (callout && CALLOUT_VARIANTS.includes(callout)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Callout, {
            variant: callout,
            title: title,
            children: props.children
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("blockquote", {
        ...props
    });
}
function readDataAttr(props, ...keys) {
    for (const k of keys){
        const v = props[k];
        if (v != null && v !== '') return String(v);
    }
    return undefined;
}
function hasMdEncSlotClass(className) {
    if (typeof className === 'string') return className.split(/\s+/).includes('md-enc-slot');
    if (Array.isArray(className)) return className.some((c)=>hasMdEncSlotClass(c));
    return false;
}
function createDivWithEncryptSlots(encryptedSlotMap) {
    return function DivWithSlots(props) {
        if (hasMdEncSlotClass(props.className)) {
            const raw = props['data-md-enc-slot'];
            const idx = raw != null ? parseInt(String(raw), 10) : NaN;
            if (!Number.isNaN(idx)) {
                const slot = encryptedSlotMap.get(idx);
                if (slot) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EncryptedFragment.EncryptedFragment, {
                        encryptedHex: slot.encryptedHex,
                        keySaltHex: slot.keySaltHex,
                        ivSaltHex: slot.ivSaltHex,
                        hmacHex: slot.hmacHex,
                        contentKind: "html",
                        abstract: slot.abstract,
                        message: slot.message
                    });
                }
            }
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ...props
        });
    };
}
function createRehypeMermaidPanel() {
    return function RehypeMermaidPanel(props) {
        const raw = readDataAttr(props, 'data-mermaid-source', 'dataMermaidSource') ?? '';
        let source = '';
        if (raw) {
            try {
                source = decodeURIComponent(raw);
            } catch  {
                source = raw.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            }
        }
        const title = readDataAttr(props, 'data-mermaid-title', 'dataMermaidTitle');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(mermaid/* MermaidPanel */.gE, {
            source: source,
            title: title || undefined
        });
    };
}
const baseMdxComponents = {
    p: MdxParagraph,
    a: createPostBodyLink(),
    Image: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
            className: "rounded-lg",
            ...props
        }),
    blockquote: MdxBlockquote,
    figure: MdxFigure,
    figcaption: MdxFigcaption,
    pre: CodeBlock.CodeBlock,
    table: TableWithCopy.TableWithCopy,
    MermaidPanel: mermaid/* MermaidPanel */.gE,
    EncryptedFragment: EncryptedFragment.EncryptedFragment,
    ...mdxShortcodeComponents,
    FileTreeViewer: FileTreeViewer.FileTreeViewer,
    FileTreeViewerFolder: FileTreeViewer.FileTreeViewerFolder,
    FileTreeViewerFile: FileTreeViewer.FileTreeViewerFile
};
function getBaseMdxComponentsForPosts() {
    return baseMdxComponents;
}
/**
 * hast-util-to-jsx-runtime component map for Markdown (.md) and shared with MDX base set shape.
 */ function buildShortcodeHastComponents() {
    const out = {};
    for (const name of Object.keys(mdxShortcodeComponents)){
        const Comp = mdxShortcodeComponents[name];
        if (Comp != null) {
            const tag = String(name).toLowerCase();
            out[tag] = Comp;
        }
    }
    return out;
}
function createPostBodyRehypeComponents(opts) {
    const imageFadeInEnabled = opts.imageFadeInEnabled === true;
    const mdxImg = createMdxImg(opts.fancyboxEnabled, opts.photoFigcaptionEnabled, opts.postSlug, {
        imageFadeInEnabled
    });
    const slotMap = opts.encryptedSlotMap ?? new Map();
    const shortcodes = buildShortcodeHastComponents();
    return {
        p: MdxParagraph,
        a: createPostBodyLink(opts.postSlug),
        blockquote: MdxBlockquote,
        figure: MdxFigure,
        figcaption: MdxFigcaption,
        pre: CodeBlock.CodeBlock,
        table: TableWithCopy.TableWithCopy,
        img: mdxImg,
        script: DeferredInlineScript.DeferredInlineScript,
        div: createDivWithEncryptSlots(slotMap),
        'mermaid-panel': createRehypeMermaidPanel(),
        ...shortcodes
    };
}


/***/ }),

/***/ 62941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostMediaProvider: () => (/* binding */ PostMediaProvider),
/* harmony export */   _: () => (/* binding */ usePostMedia)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ PostMediaProvider,usePostMedia auto */ 

const PostMediaContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    fancyboxEnabled: false,
    photoFigcaptionEnabled: false
});
function PostMediaProvider({ fancyboxEnabled, photoFigcaptionEnabled, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PostMediaContext.Provider, {
        value: {
            fancyboxEnabled,
            photoFigcaptionEnabled
        },
        children: children
    });
}
function usePostMedia() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PostMediaContext);
}


/***/ }),

/***/ 66954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableWithCopy: () => (/* binding */ TableWithCopy)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50910);
/* harmony import */ var _barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94514);
/* harmony import */ var _barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67635);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89239);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ TableWithCopy auto */ 





/** Convert DOM table to GFM markdown (header row + separator + body rows). */ function tableToMarkdown(tableEl) {
    const trs = Array.from(tableEl.querySelectorAll('tr'));
    const rows = trs.map((tr)=>{
        const cells = Array.from(tr.querySelectorAll('th, td'));
        return cells.map((c)=>(c.textContent ?? '').trim().replace(/\|/g, '\\|'));
    });
    if (rows.length === 0) return '';
    const colCount = Math.max(...rows.map((r)=>r.length));
    const pad = (arr)=>{
        while(arr.length < colCount)arr.push('');
        return arr;
    };
    const lines = rows.map((r)=>'| ' + pad([
            ...r
        ]).join(' | ') + ' |');
    const headerSep = '| ' + Array(colCount).fill('---').join(' | ') + ' |';
    return [
        lines[0],
        headerSep,
        ...lines.slice(1)
    ].join('\n');
}
function TableWithCopy({ className, children, ...props }) {
    const tableRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const [copied, setCopied] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_3__/* .useTranslations */ .c)('table');
    const handleCopy = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        const table = tableRef.current;
        if (!table) return;
        const md = tableToMarkdown(table);
        navigator.clipboard.writeText(md).then(()=>{
            setCopied(true);
            const id = setTimeout(()=>setCopied(false), 2000);
            return ()=>clearTimeout(id);
        }, ()=>{});
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group relative my-8 min-w-0 w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('absolute top-2 right-2 z-10 size-7 rounded-md bg-card text-muted-foreground opacity-0 transition-opacity hover:bg-accent hover:text-accent-foreground group-hover:opacity-100 focus-visible:opacity-100'),
                onClick: handleCopy,
                "aria-label": t('copyMarkdown'),
                children: copied ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                    className: "size-4 text-foreground",
                    "aria-hidden": true
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                    className: "size-4",
                    "aria-hidden": true
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "table-scroll",
                tabIndex: 0,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", {
                    ref: tableRef,
                    className: className,
                    ...props,
                    children: children
                })
            })
        ]
    });
}


/***/ }),

/***/ 67081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CodeBlock: () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/file-code.js
var file_code = __webpack_require__(48274);
// EXTERNAL MODULE: ./src/lib/language-icons.ts
var language_icons = __webpack_require__(28710);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
// EXTERNAL MODULE: ./src/components/business/ArticleCardPanelHeaderActions.tsx
var ArticleCardPanelHeaderActions = __webpack_require__(70151);
// EXTERNAL MODULE: ./src/components/ui/article-card-panel.tsx
var article_card_panel = __webpack_require__(15891);
;// ./src/components/business/PureCodePreview.tsx
/* __next_internal_client_entry_do_not_use__ PureCodePreview auto */ 



/** Keep server/client attrs in sync; only mirror line-number marker when rehype set it (named fences). */ function ensureLineNumbers(child) {
    if (!/*#__PURE__*/ react.isValidElement(child) || child.type !== 'code') return child;
    const p = child.props;
    if (p['data-line-numbers'] === '') {
        return /*#__PURE__*/ react.cloneElement(child, {
            suppressHydrationWarning: true
        });
    }
    return child;
}
/**
 * Pure code rendering: no panel header, no copy button.
 * Used by CodeBlock (and can be reused in other contexts).
 */ function PureCodePreview({ preRef, className, children, 'data-language': language, 'data-theme': theme, withPanelPadding = true, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
        suppressHydrationWarning: true,
        ref: preRef,
        tabIndex: 0,
        className: (0,utils.cn)(withPanelPadding ? article_card_panel/* articleCardPanelBodyPadding */.Om : undefined, // Ensure long lines wrap (e.g. long Python imports with inline comments) instead of stretching the page.
        'relative min-w-0 overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-auto outline-none text-[13px] leading-relaxed whitespace-pre-wrap break-words', className),
        style: withPanelPadding ? {
            ['--code-px']: '0.75rem'
        } : undefined,
        "data-language": language,
        "data-theme": theme,
        ...props,
        children: ensureLineNumbers(children)
    });
}

// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(89239);
// EXTERNAL MODULE: ./src/contexts/CodeBlockCollapseContext.tsx
var CodeBlockCollapseContext = __webpack_require__(53726);
;// ./src/components/business/CodeBlockCollapsibleShell.tsx
/* __next_internal_client_entry_do_not_use__ CodeBlockCollapsibleShell auto */ 





function countLinesInPre(pre) {
    const code = pre.querySelector('code');
    const lineEls = code?.querySelectorAll('[data-line], .line');
    if (lineEls && lineEls.length > 0) return lineEls.length;
    const text = code?.textContent ?? pre.textContent ?? '';
    if (!text) return 0;
    return text.split('\n').length;
}
function measureCollapsedMaxHeight(pre, threshold) {
    const code = pre.querySelector('code');
    const lineEls = code?.querySelectorAll('[data-line], .line');
    if (lineEls && lineEls.length >= threshold) {
        const last = lineEls[threshold - 1];
        const preRect = pre.getBoundingClientRect();
        return Math.max(0, last.getBoundingClientRect().bottom - preRect.top);
    }
    const lh = parseFloat(getComputedStyle(pre).lineHeight);
    const lineHeightPx = Number.isFinite(lh) ? lh : 21;
    return lineHeightPx * threshold;
}
function CodeBlockCollapsibleShell({ children, preRef, className }) {
    const threshold = (0,CodeBlockCollapseContext/* useCodeBlockCollapseLines */.Y)();
    const t = (0,react_client/* useTranslations */.c)('codeBlock');
    const [expanded, setExpanded] = react.useState(false);
    const [needsCollapse, setNeedsCollapse] = react.useState(false);
    const [maxCollapsedPx, setMaxCollapsedPx] = react.useState(undefined);
    const updateMeasurements = react.useCallback(()=>{
        if (threshold < 1) {
            setNeedsCollapse(false);
            setMaxCollapsedPx(undefined);
            return;
        }
        const pre = preRef.current;
        if (!pre) return;
        const n = countLinesInPre(pre);
        if (n <= threshold) {
            setNeedsCollapse(false);
            setMaxCollapsedPx(undefined);
            return;
        }
        setNeedsCollapse(true);
        setMaxCollapsedPx(measureCollapsedMaxHeight(pre, threshold));
    }, [
        threshold,
        preRef
    ]);
    react.useLayoutEffect(()=>{
        updateMeasurements();
    }, [
        updateMeasurements
    ]);
    react.useLayoutEffect(()=>{
        const pre = preRef.current;
        if (!pre) return;
        const ro = new ResizeObserver(()=>updateMeasurements());
        ro.observe(pre);
        return ()=>ro.disconnect();
    }, [
        preRef,
        updateMeasurements
    ]);
    react.useEffect(()=>{
        setExpanded(false);
    }, [
        threshold
    ]);
    if (threshold < 1 || !needsCollapse) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: className,
            children: children
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)('min-w-0', className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,utils.cn)('relative', !expanded && 'overflow-hidden'),
                style: !expanded && maxCollapsedPx != null ? {
                    maxHeight: maxCollapsedPx
                } : undefined,
                children: [
                    children,
                    !expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent",
                        "aria-hidden": true
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex justify-center border-t border-border bg-muted/40 px-2",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    className: "h-8 text-muted-foreground hover:text-foreground",
                    onClick: ()=>setExpanded((e)=>!e),
                    "aria-expanded": expanded,
                    children: expanded ? t('showLess') : t('showMore')
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/contexts/CodeBlockVariantContext.tsx
var CodeBlockVariantContext = __webpack_require__(31104);
;// ./src/components/business/CodeBlock.tsx
/* __next_internal_client_entry_do_not_use__ CodeBlock auto */ 










function LanguageIcon({ language, className }) {
    return /*#__PURE__*/ react.createElement((0,language_icons/* getLanguageIcon */.A7)(language, file_code/* default */.A), {
        className: (0,utils.cn)('size-4 shrink-0', className),
        'aria-hidden': true
    });
}
function getCopyText(preRef) {
    const pre = preRef.current;
    if (!pre) return '';
    const code = pre.querySelector('code');
    return code?.textContent ?? pre.textContent ?? '';
}
/** Fallback label when no filename (e.g. from title="...") is set. */ function headerLabel(filename, language) {
    if (filename?.trim()) return filename.trim();
    if (language?.trim()) return language.trim();
    return 'Code';
}
const FILENAME_CLASS_PREFIX = 'filename:';
/** Get filename from data-filename, or from pre className (e.g. "filename:app.ts") so it survives MDX compile. */ function getFilename(filenameFromPre, className) {
    if (filenameFromPre?.trim()) return filenameFromPre.trim();
    const classes = Array.isArray(className) ? className : typeof className === 'string' ? className.split(/\s+/) : [];
    for (const c of classes){
        if (typeof c === 'string' && c.startsWith(FILENAME_CLASS_PREFIX)) {
            const value = c.slice(FILENAME_CLASS_PREFIX.length).trim();
            if (value) return value;
        }
    }
    return undefined;
}
function firstCodeElement(children) {
    const found = react.Children.toArray(children).find((c)=>/*#__PURE__*/ react.isValidElement(c) && c.type === 'code');
    return found;
}
/** Fences with no language skip Shiki; remark-rehype leaves plain pre > code (no data-theme / language-*). */ function isPlainMarkdownFence(language, theme, filename, preProps, codeChild) {
    if (filename?.trim()) return false;
    if (language?.trim()) return false;
    if (theme != null && String(theme).trim() !== '') return false;
    if (preProps['data-rehype-pretty-code-fragment'] != null) return false;
    if (!codeChild) return false;
    const cp = codeChild.props;
    if (cp['data-theme'] != null && String(cp['data-theme']).trim() !== '') return false;
    const cls = cp.className;
    const classes = Array.isArray(cls) ? cls : typeof cls === 'string' ? cls.split(/\s+/).filter(Boolean) : [];
    const hasLangClass = classes.some((c)=>typeof c === 'string' && /^language-[a-z0-9_.+-]+$/i.test(c) && c.length > 'language-'.length);
    if (hasLangClass) return false;
    return !classes.some((c)=>typeof c === 'string' && (c.includes('shiki') || c === 'hljs'));
}
function CodeBlock({ className: classNamePre, children, 'data-filename': filenameFromPre, 'data-language': language, 'data-theme': theme, ...props }) {
    const t = (0,react_client/* useTranslations */.c)('codeBlock');
    const preRef = react.useRef(null);
    const filename = getFilename(filenameFromPre, classNamePre);
    const variant = (0,CodeBlockVariantContext/* useCodeBlockVariant */.X)();
    const classNameFiltered = Array.isArray(classNamePre) ? classNamePre.filter((c)=>typeof c !== 'string' || !c.startsWith(FILENAME_CLASS_PREFIX)).join(' ') : typeof classNamePre === 'string' ? classNamePre.split(/\s+/).filter((c)=>!c.startsWith(FILENAME_CLASS_PREFIX)).join(' ') : classNamePre;
    const codeChild = firstCodeElement(children);
    const restProps = props;
    if (isPlainMarkdownFence(language, theme, filename, restProps, codeChild)) {
        const { className: preClassProp, ...restPre } = props;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockCollapsibleShell, {
            preRef: preRef,
            className: "my-5 min-w-0",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                ref: preRef,
                tabIndex: 0,
                className: (0,utils.cn)('min-w-0 overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-auto rounded-lg border border-border px-4 py-3 text-[13px] leading-relaxed whitespace-pre-wrap break-words outline-none text-foreground', classNameFiltered, preClassProp),
                style: {
                    '--code-px': '1rem'
                },
                ...restPre,
                children: children
            })
        });
    }
    if (variant === 'pure') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("figure", {
            className: "code-block-root group/codeblock",
            "data-rehype-pretty-code-figure": true,
            "data-rehype-pretty-code-fragment": true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockCollapsibleShell, {
                preRef: preRef,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PureCodePreview, {
                    preRef: preRef,
                    withPanelPadding: false,
                    className: classNameFiltered,
                    "data-language": language,
                    "data-theme": theme,
                    ...props,
                    children: children
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(article_card_panel/* ArticleCardPanelRoot */.T, {
        className: "code-block-root group/codeblock",
        "data-rehype-pretty-code-figure": true,
        "data-rehype-pretty-code-fragment": true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelHeader */.Cx, {
                as: "figcaption",
                "data-language": language,
                "data-theme": theme,
                left: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LanguageIcon, {
                            language: language
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (0,utils.cn)('truncate', article_card_panel/* articleCardPanelHeaderText */.J0),
                            children: headerLabel(filename, language)
                        })
                    ]
                }),
                right: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArticleCardPanelHeaderActions/* ArticleCardPanelCopyButton */.Q, {
                    getText: ()=>getCopyText(preRef),
                    ariaLabel: t('copyCode')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeBlockCollapsibleShell, {
                preRef: preRef,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PureCodePreview, {
                    preRef: preRef,
                    className: classNameFiltered,
                    "data-language": language,
                    "data-theme": theme,
                    ...props,
                    children: children
                })
            })
        ]
    });
}


/***/ }),

/***/ 67326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tabs: () => (/* binding */ Tabs),
/* harmony export */   TabsContent: () => (/* binding */ TabsContent),
/* harmony export */   TabsList: () => (/* binding */ TabsList),
/* harmony export */   TabsTrigger: () => (/* binding */ TabsTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94840);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40980);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15891);
/* __next_internal_client_entry_do_not_use__ Tabs,TabsList,TabsTrigger,TabsContent auto */ 




const Tabs = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .bL, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelRoot */ .Rd, className),
        ...props
    }));
Tabs.displayName = "Tabs";
const TabsList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__/* .List */ .B8, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeader */ .w, "items-stretch gap-1 py-0", className),
        ...props
    }));
TabsList.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__/* .List */ .B8.displayName;
const TabsTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__/* .Trigger */ .l9, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeaderText */ .J0, "inline-flex h-full -mb-px items-center justify-center whitespace-nowrap border-b-[3px] border-transparent px-4 font-medium transition-all", "text-muted-foreground hover:border-highlight hover:text-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", "data-[state=active]:border-highlight data-[state=active]:text-foreground", className),
        ...props
    }));
TabsTrigger.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__/* .Trigger */ .l9.displayName;
const TabsContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .UC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelBody */ .Br, "outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }));
TabsContent.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .UC.displayName;



/***/ }),

/***/ 67723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $9: () => (/* binding */ fenAtViewPly),
/* harmony export */   BQ: () => (/* binding */ isMainLineContinued),
/* harmony export */   Gi: () => (/* binding */ clampViewPly),
/* harmony export */   Zx: () => (/* binding */ combinedMoveList),
/* harmony export */   g$: () => (/* binding */ isBranchMoveIndex),
/* harmony export */   hx: () => (/* binding */ maxViewPly),
/* harmony export */   rr: () => (/* binding */ commentPlyForView)
/* harmony export */ });
/** User-played variation branched from a replay ply (discarded on step navigation). */ function combinedMoveList(mainMoves, anchorPly, branchMoves) {
    return [
        ...mainMoves.slice(0, anchorPly),
        ...branchMoves
    ];
}
function maxViewPly(mainMaxPly, branch) {
    if (!branch || branch.moves.length === 0) return mainMaxPly;
    return branch.anchorPly + branch.moves.length;
}
function clampViewPly(ply, mainMaxPly, branch) {
    return Math.max(0, Math.min(ply, maxViewPly(mainMaxPly, branch)));
}
function isBranchMoveIndex(anchorPly, moveIndex) {
    return moveIndex >= anchorPly;
}
function fenAtViewPly(mainFensByPly, branch, viewPly) {
    if (!branch || viewPly <= branch.anchorPly) {
        return mainFensByPly[viewPly] ?? mainFensByPly[0] ?? '';
    }
    const branchIndex = viewPly - branch.anchorPly - 1;
    if (branchIndex < 0) return branch.startingFen;
    return branch.fensByPly[branchIndex] ?? branch.startingFen;
}
function commentPlyForView(viewPly, branch) {
    if (!branch || viewPly <= branch.anchorPly) return viewPly;
    return branch.anchorPly;
}
/** True when a user move lands on the same FEN as the next ply in the loaded game. */ function isMainLineContinued(mainFensByPly, viewPly, nextFen, normalizeFen = (fen)=>fen.trim()) {
    if (viewPly + 1 >= mainFensByPly.length) return false;
    const expected = mainFensByPly[viewPly + 1];
    if (!expected?.trim() || !nextFen.trim()) return false;
    return normalizeFen(expected) === normalizeFen(nextFen);
}


/***/ }),

/***/ 69082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C2: () => (/* binding */ normalizePostSlugKey),
/* harmony export */   Hx: () => (/* binding */ normAppPath),
/* harmony export */   dI: () => (/* binding */ internalHref),
/* harmony export */   i5: () => (/* binding */ navItemMatchesPathname)
/* harmony export */ });
/* unused harmony exports isReservedStaticExportSlugSegment, slugPathHasReservedSegment */
/**
 * next.config: trailingSlash: true — internal navigations must use trailing slashes
 * (except `/`) so they match prerendered routes and avoid a transient 404 on client transition.
 */ function normAppPath(pathname) {
    return pathname.replace(/\/+$/, '') || '/';
}
function internalHref(path) {
    if (!path || path === '/') return '/';
    if (/^https?:\/\//i.test(path) || path.startsWith('//') || path.startsWith('mailto:')) return path;
    if (path.includes('?') || path.includes('#')) return path;
    if (path.endsWith('/')) return path;
    return `${path}/`;
}
/** Nav item (with trailing slash) vs pathname (may or may not have trailing slash). */ function navItemMatchesPathname(pathname, href) {
    if (href === '/' || normAppPath(href) === '/') return false;
    const p = normAppPath(pathname);
    const h = normAppPath(href);
    return p === h || p.startsWith(`${h}/`);
}
/**
 * Next static export drops RSC payloads named `__next.*` next to HTML. A wrong host
 * (e.g. `next start` with `output: 'export'`) can treat those names as `[slug]` — reject them.
 */ function isReservedStaticExportSlugSegment(segment) {
    if (!segment) return false;
    if (segment.startsWith('__')) return true;
    if (segment.includes('$d$') || segment.includes('$c$')) return true;
    return false;
}
function slugPathHasReservedSegment(slugPath) {
    return slugPath.split('/').some((s)=>s.length > 0 && isReservedStaticExportSlugSegment(s));
}
/**
 * Canonical post slug for maps and breadcrumb lookup (trim, NFC). Aligns filesystem
 * slugs with `usePathname()` after decode so CJK paths match `postSlugToCategory`.
 */ function normalizePostSlugKey(slugPath) {
    return slugPath.trim().replace(/\/+$/, '').normalize('NFC');
}


/***/ }),

/***/ 70151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ ArticleCardPanelCopyButton),
/* harmony export */   x: () => (/* binding */ ArticleCardPanelDownloadButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Download_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94514);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Download_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67635);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Download_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6962);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89239);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15891);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ ArticleCardPanelCopyButton,ArticleCardPanelDownloadButton auto */ 





function ArticleCardPanelCopyButton({ ariaLabel, className, disabled, ...source }) {
    const [copied, setCopied] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!copied) return;
        const timer = window.setTimeout(()=>setCopied(false), 2000);
        return ()=>window.clearTimeout(timer);
    }, [
        copied
    ]);
    const handleCopy = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        const text = 'text' in source ? source.text : source.getText();
        if (!text.trim()) return;
        void navigator.clipboard.writeText(text).then(()=>setCopied(true), ()=>{});
    }, [
        'text' in source ? source.text : source.getText
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
        type: "button",
        variant: "ghost",
        size: "icon-sm",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .articleCardPanelHeaderActionButton */ .io, className),
        onClick: handleCopy,
        "aria-label": ariaLabel,
        disabled: disabled,
        children: copied ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_Download_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
            className: "size-4 text-foreground",
            "aria-hidden": true
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_Download_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
            className: "size-4",
            "aria-hidden": true
        })
    });
}
function ArticleCardPanelDownloadButton({ href, filename, ariaLabel, className }) {
    const handleDownload = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        const anchor = document.createElement('a');
        anchor.href = href;
        if (filename) {
            anchor.download = filename;
        }
        anchor.rel = 'noopener';
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
    }, [
        href,
        filename
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
        type: "button",
        variant: "ghost",
        size: "icon-sm",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .articleCardPanelHeaderActionButton */ .io, className),
        onClick: handleDownload,
        "aria-label": ariaLabel,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_Download_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
            className: "size-4",
            "aria-hidden": true
        })
    });
}


/***/ }),

/***/ 71445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ FancyboxRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _fancyapps_ui_dist_fancybox___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58516);
/* harmony import */ var _fancyapps_ui_dist_fancybox_fancybox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27312);
/* harmony import */ var _fancyapps_ui_dist_fancybox_fancybox_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_ui_dist_fancybox_fancybox_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_OnContentRevealContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90824);
/* __next_internal_client_entry_do_not_use__ FancyboxRoot auto */ 




const FANCYBOX_OPTIONS = {};
function useFancybox(enabled) {
    const [root, setRoot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const rootRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        rootRef.current = root;
    }, [
        root
    ]);
    const boundRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const onReveal = (0,_contexts_OnContentRevealContext__WEBPACK_IMPORTED_MODULE_4__/* .useOnContentReveal */ .D)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!root || !enabled) return;
        let cancelled = false;
        boundRef.current = false;
        const bind = ()=>{
            if (!rootRef.current?.isConnected) return;
            _fancyapps_ui_dist_fancybox___WEBPACK_IMPORTED_MODULE_2__/* .Fancybox */ .lX.bind(rootRef.current, '[data-fancybox]', FANCYBOX_OPTIONS);
            boundRef.current = true;
        };
        const id = setTimeout(()=>{
            if (cancelled) return;
            bind();
        }, 0);
        const unregister = onReveal?.register?.(()=>{
            if (boundRef.current && rootRef.current?.isConnected) {
                _fancyapps_ui_dist_fancybox___WEBPACK_IMPORTED_MODULE_2__/* .Fancybox */ .lX.unbind(rootRef.current);
                boundRef.current = false;
            }
            bind();
        });
        return ()=>{
            cancelled = true;
            clearTimeout(id);
            unregister?.();
            if (boundRef.current && rootRef.current) {
                _fancyapps_ui_dist_fancybox___WEBPACK_IMPORTED_MODULE_2__/* .Fancybox */ .lX.unbind(rootRef.current);
                boundRef.current = false;
            }
        };
    }, [
        root,
        enabled,
        onReveal
    ]);
    return setRoot;
}
/**
 * Wraps post content so images with data-fancybox open in Fancybox lightbox.
 * Only binds when enabled; when disabled, renders children as-is.
 */ function FancyboxRoot({ children, enabled = true }) {
    const setRef = useFancybox(enabled);
    if (!enabled) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: setRef,
        children: children
    });
}


/***/ }),

/***/ 74026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MermaidPanel: () => (/* binding */ MermaidPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50910);
/* harmony import */ var _barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6296);
/* harmony import */ var _barrel_optimize_names_SiMermaid_react_icons_si__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33282);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40980);
/* harmony import */ var _components_business_ArticleCardPanelHeaderActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70151);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15891);
/* harmony import */ var _components_mermaid_mermaid_diagram_viewport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4667);
/* __next_internal_client_entry_do_not_use__ MermaidPanel auto */ 








function MermaidPanel({ source, title = 'Mermaid' }) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('mermaid');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .ArticleCardPanelRoot */ .T, {
        className: "mermaid-panel not-prose",
        "data-mermaid-panel": true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .ArticleCardPanelHeader */ .Cx, {
                as: "figcaption",
                left: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_SiMermaid_react_icons_si__WEBPACK_IMPORTED_MODULE_6__/* .SiMermaid */ .iUP, {
                            className: "size-4 shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)('truncate', _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .articleCardPanelHeaderText */ .J0),
                            children: title.trim() || 'Mermaid'
                        })
                    ]
                }),
                right: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_business_ArticleCardPanelHeaderActions__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelCopyButton */ .Q, {
                    text: source,
                    ariaLabel: t('copyCode')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "bg-background",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_mermaid_mermaid_diagram_viewport__WEBPACK_IMPORTED_MODULE_4__.MermaidDiagramViewport, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mermaid relative min-h-[200px] min-w-0",
                        "data-mermaid-source": source,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mermaid-loading absolute inset-0 flex flex-col items-center justify-center gap-2",
                                "aria-live": "polite",
                                "aria-busy": "true",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                                        className: "size-8 animate-spin text-muted-foreground",
                                        "aria-hidden": true
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: t('loading')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "mermaid-output min-w-0"
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 80130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ GameSourceHeaderActions),
/* harmony export */   e: () => (/* binding */ filenameFromGameSrc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _components_business_ArticleCardPanelHeaderActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70151);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ filenameFromGameSrc,GameSourceHeaderActions auto */ 



function filenameFromGameSrc(src) {
    const path = src.split('?')[0]?.split('#')[0] ?? src;
    const name = path.split('/').filter(Boolean).pop();
    if (!name) return 'game.txt';
    try {
        return decodeURIComponent(name);
    } catch  {
        return name;
    }
}
function GameSourceHeaderActions({ sourceText, downloadHref, downloadFilename, copyAriaLabel, downloadAriaLabel, className }) {
    const canCopy = Boolean(sourceText?.trim());
    const canDownload = Boolean(downloadHref?.trim());
    if (!canCopy && !canDownload) {
        return null;
    }
    const copyButton = canCopy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_business_ArticleCardPanelHeaderActions__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelCopyButton */ .Q, {
        text: sourceText,
        ariaLabel: copyAriaLabel
    }) : null;
    const downloadButton = canDownload ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_business_ArticleCardPanelHeaderActions__WEBPACK_IMPORTED_MODULE_2__/* .ArticleCardPanelDownloadButton */ .x, {
        href: downloadHref,
        filename: downloadFilename,
        ariaLabel: downloadAriaLabel
    }) : null;
    if (copyButton && downloadButton) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('flex items-center gap-0.5', className),
            children: [
                copyButton,
                downloadButton
            ]
        });
    }
    return copyButton ?? downloadButton;
}


/***/ }),

/***/ 80367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ TagsPageContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _components_ui_content_link_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99078);
/* harmony import */ var _lib_app_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69082);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40980);




const seriesSet = (names)=>names ? new Set(names.map((s)=>s.normalize('NFC').trim())) : new Set();
const pillLayout = 'inline-flex items-baseline gap-0.5 px-2.5 py-1.5';
function TagsPageContent({ tags, seriesNames }) {
    const isSeries = seriesSet(seriesNames);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "my-5 flex flex-wrap gap-3",
        children: tags.map(({ name, count })=>{
            const highlight = isSeries.has(name.normalize('NFC').trim());
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_content_link_card__WEBPACK_IMPORTED_MODULE_1__/* .ContentLinkCard */ .O, {
                href: (0,_lib_app_path__WEBPACK_IMPORTED_MODULE_2__/* .internalHref */ .dI)(`/tags/${encodeURIComponent(name)}`),
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(pillLayout, highlight && 'border-ui-highlight'),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-foreground",
                        children: [
                            "# ",
                            name
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "pl-1.5 font-medium italic text-highlight",
                        children: count
                    })
                ]
            }, name);
        })
    });
}


/***/ }),

/***/ 81477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wu: () => (/* binding */ CardContent),
/* harmony export */   ZB: () => (/* binding */ CardTitle),
/* harmony export */   Zp: () => (/* binding */ Card),
/* harmony export */   aR: () => (/* binding */ CardHeader),
/* harmony export */   wL: () => (/* binding */ CardFooter)
/* harmony export */ });
/* unused harmony export CardDescription */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40980);



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-lg border border-border/20 bg-card text-card-foreground shadow-card", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ 81990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Search: () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50910);
/* harmony import */ var _barrel_optimize_names_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61878);
/* harmony import */ var _barrel_optimize_names_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33210);
/* harmony import */ var _barrel_optimize_names_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6296);
/* harmony import */ var _contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90682);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98500);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ Search auto */ 






/** CJK-friendly tokenizer: split by spaces for words, and split each CJK character for full-text. */ function cjkEncode(str) {
    if (!str || typeof str !== 'string') return [];
    const tokens = [];
    const bySpace = str.trim().split(/\s+/).filter(Boolean);
    for (const segment of bySpace){
        tokens.push(segment);
        const isCjk = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/.test(segment);
        if (isCjk && segment.length > 1) {
            for (const ch of segment){
                if (ch.trim()) tokens.push(ch);
            }
        }
    }
    return tokens;
}
const SNIPPET_RADIUS = 50;
/** Get a snippet of content around the first occurrence of query (for display under result). */ function getContentSnippet(content, query) {
    if (!content || !query.trim()) return null;
    const q = query.trim();
    const lower = content.toLowerCase();
    const qLower = q.toLowerCase();
    const idx = lower.indexOf(qLower);
    if (idx === -1) return null;
    const start = Math.max(0, idx - SNIPPET_RADIUS);
    const end = Math.min(content.length, idx + q.length + SNIPPET_RADIUS);
    let snippet = content.slice(start, end);
    if (start > 0) snippet = '…' + snippet;
    if (end < content.length) snippet = snippet + '…';
    return snippet;
}
/** Render snippet with query wrapped in <mark> (case-insensitive match). */ function SnippetWithMark({ snippet, query }) {
    const q = query.trim();
    if (!q) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: snippet
    });
    const lower = snippet.toLowerCase();
    const qLower = q.toLowerCase();
    const idx = lower.indexOf(qLower);
    if (idx === -1) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: snippet
    });
    const before = snippet.slice(0, idx);
    const match = snippet.slice(idx, idx + q.length);
    const after = snippet.slice(idx + q.length);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            before,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("mark", {
                className: "rounded bg-primary/20 font-medium text-foreground",
                children: match
            }),
            after
        ]
    });
}
function Search({ className, placeholder, emptyMessage }) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_4__/* .useTranslations */ .c)('search');
    const { searchEnabled } = (0,_contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_2__/* .useSiteConfig */ .z)();
    const placeholderText = placeholder ?? t('placeholder');
    const emptyMessageText = emptyMessage ?? t('emptyMessage');
    const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
    const [results, setResults] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [focused, setFocused] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const inputRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const listRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    /** Load search-index.json when Search mounts (searchEnabled true). Fetched once and kept in memory. */ react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!searchEnabled) return;
        setLoading(true);
        fetch('/search-index.json').then((res)=>res.ok ? res.json() : []).then(async (data)=>{
            const list = Array.isArray(data) ? data : [];
            setItems(list);
            try {
                const mod = await __webpack_require__.e(/* import() */ 429).then(__webpack_require__.bind(__webpack_require__, 30429));
                const FlexSearch = mod.default ?? mod;
                const IndexClass = FlexSearch?.Index;
                if (IndexClass) {
                    const idx = new IndexClass({
                        encode: (s)=>cjkEncode(s),
                        tokenize: 'forward',
                        threshold: 0
                    });
                    list.forEach((item, i)=>{
                        const text = [
                            item.title,
                            item.description,
                            item.content,
                            item.tokens
                        ].filter(Boolean).join(' ');
                        idx.add(i, text);
                    });
                    setIndex(idx);
                }
            } catch  {
                console.warn('Search: flexsearch not available. Run: npm install flexsearch');
            }
        }).catch(()=>setItems([])).finally(()=>setLoading(false));
    }, [
        searchEnabled
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!index || !query.trim()) {
            setResults([]);
            return;
        }
        const ids = index.search(query.trim(), {
            limit: 20
        });
        const hits = Array.isArray(ids) ? ids.map((id)=>items[Number(id)]).filter(Boolean) : [];
        setResults(hits);
    }, [
        index,
        items,
        query
    ]);
    if (!searchEnabled) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)('text-sm text-muted-foreground', className),
            children: t('disabled')
        });
    }
    const showList = focused && (loading || query.length > 0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)('my-5 relative', className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
                        "aria-hidden": true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                        ref: inputRef,
                        type: "search",
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        onFocus: ()=>setFocused(true),
                        onBlur: ()=>{
                            setTimeout(()=>{
                                const list = listRef.current;
                                if (list?.contains(document.activeElement)) return;
                                setFocused(false);
                            }, 150);
                        },
                        placeholder: placeholderText,
                        "aria-label": t('ariaSearch'),
                        className: "w-full rounded-md border border-input bg-background py-2 pl-9 pr-9 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 [&::-webkit-search-cancel-button]:hidden [&::-ms-clear]:hidden"
                    }),
                    query.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        type: "button",
                        onClick: ()=>{
                            setQuery('');
                            inputRef.current?.focus();
                        },
                        className: "absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20",
                        "aria-label": t('ariaClear'),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                            className: "size-4",
                            "aria-hidden": true
                        })
                    })
                ]
            }),
            loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground",
                role: "status",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Loader2_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                        className: "size-3.5 shrink-0 animate-spin",
                        "aria-hidden": true
                    }),
                    t('loadingIndexShort')
                ]
            }),
            showList && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                ref: listRef,
                className: "search-results-dropdown absolute top-full left-0 right-0 z-50 mt-1 max-h-[70vh] overflow-auto rounded-md border border-border bg-card py-0 shadow-lg",
                onMouseDown: (e)=>e.preventDefault(),
                children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "px-4 py-2 text-center text-sm text-muted-foreground",
                    children: t('loadingIndex')
                }) : query.trim() ? results.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "px-4 py-5 text-center text-sm text-muted-foreground",
                    children: emptyMessageText
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                    className: "list-none py-0 pl-0",
                    children: results.map((item)=>{
                        const snippet = getContentSnippet(item.content, query.trim());
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            className: "list-none border-b border-border last:border-b-0 pl-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: item.url,
                                className: "block p-5 text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                        className: "text-base font-semibold leading-tight",
                                        children: item.title
                                    }),
                                    item.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "mt-0.5 block text-sm text-muted-foreground line-clamp-1",
                                        children: item.description
                                    }),
                                    snippet && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "mt-0.5 text-sm leading-snug text-muted-foreground line-clamp-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SnippetWithMark, {
                                            snippet: snippet,
                                            query: query.trim()
                                        })
                                    })
                                ]
                            })
                        }, item.slug);
                    })
                }) : null
            })
        ]
    });
}


/***/ }),

/***/ 82167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Markmap: () => (/* binding */ Markmap)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/network.js
var network = __webpack_require__(69260);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(6296);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zoom-out.js
var zoom_out = __webpack_require__(69220);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zoom-in.js
var zoom_in = __webpack_require__(22651);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js
var rotate_ccw = __webpack_require__(9199);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(89239);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
// EXTERNAL MODULE: ./src/components/business/GameSourceHeaderActions.tsx
var GameSourceHeaderActions = __webpack_require__(80130);
// EXTERNAL MODULE: ./src/components/ui/article-card-panel.tsx
var article_card_panel = __webpack_require__(15891);
// EXTERNAL MODULE: ./src/contexts/PostAssetBaseContext.tsx
var PostAssetBaseContext = __webpack_require__(44272);
;// ./src/lib/markmap/resolve-markmap-options.ts
function resolveMarkmapMeta(raw, frontmatter, frontmatterInfo) {
    const copyText = frontmatterInfo ? raw.slice(frontmatterInfo.offset).trim() : raw.trim();
    return {
        fmTitle: frontmatter?.title?.trim() || undefined,
        copyText
    };
}
function resolvePanelTitle(titleProp, fmTitle) {
    const fromProp = titleProp?.trim();
    if (fromProp) return fromProp;
    if (fmTitle?.trim()) return fmTitle.trim();
    return 'Mind map';
}
/** JSX props override front matter; component defaults apply last. */ function buildMarkmapViewOptions(deriveOptions, frontmatterMarkmap, props) {
    const fromFrontmatter = deriveOptions(frontmatterMarkmap);
    return {
        autoFit: true,
        zoom: true,
        pan: false,
        scrollForPan: false,
        ...fromFrontmatter,
        initialExpandLevel: props.initialExpandLevel ?? fromFrontmatter.initialExpandLevel ?? 2
    };
}

;// ./src/components/mdx/Markmap.tsx
/* __next_internal_client_entry_do_not_use__ Markmap auto */ 









const ZOOM_STEP = 1.25;
/** Disable wheel zoom/pan; keep drag pan and toolbar zoom only. */ function disableMarkmapWheelInteraction(mm) {
    mm.zoom.filter((event)=>{
        if (event.type === 'wheel') return false;
        const e = event;
        return !e.ctrlKey && !e.button;
    });
    mm.svg.call(mm.zoom);
}
function Markmap({ source, src, title, initialExpandLevel, minHeight = '240px' }) {
    const t = (0,react_client/* useTranslations */.c)('markmap');
    const svgRef = react.useRef(null);
    const markmapRef = react.useRef(null);
    const [status, setStatus] = react.useState('idle');
    const [loadedSource, setLoadedSource] = react.useState(null);
    const [fmTitle, setFmTitle] = react.useState();
    const [copyText, setCopyText] = react.useState('');
    const resolvedSrc = (0,PostAssetBaseContext/* useResolvedPostAssetUrl */.t9)(src) ?? src;
    const panelTitle = resolvePanelTitle(title, fmTitle);
    react.useEffect(()=>{
        if (!resolvedSrc?.trim()) {
            setLoadedSource(null);
            return;
        }
        let cancelled = false;
        setStatus('loading');
        setLoadedSource(null);
        fetch(resolvedSrc).then((res)=>{
            if (!res.ok) throw new Error('fetch failed');
            return res.text();
        }).then((text)=>{
            if (!cancelled) setLoadedSource(text);
        }).catch(()=>{
            if (!cancelled) {
                setLoadedSource(null);
                setStatus('error');
            }
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        resolvedSrc
    ]);
    const trimmedSource = (source ?? loadedSource ?? '').trim();
    react.useEffect(()=>{
        const svg = svgRef.current;
        if (!svg) return;
        if (!trimmedSource) {
            if (src?.trim() && loadedSource === null) return;
            if (!src?.trim() && !source?.trim()) setStatus('error');
            return;
        }
        let cancelled = false;
        setStatus('loading');
        setFmTitle(undefined);
        setCopyText('');
        async function render() {
            const [{ Transformer }, { Markmap: MarkmapView, deriveOptions }] = await Promise.all([
                Promise.all(/* import() */[__webpack_require__.e(4827), __webpack_require__.e(1913), __webpack_require__.e(9652)]).then(__webpack_require__.bind(__webpack_require__, 59652)),
                Promise.all(/* import() */[__webpack_require__.e(8851), __webpack_require__.e(9928)]).then(__webpack_require__.bind(__webpack_require__, 99928))
            ]);
            if (cancelled || !svgRef.current) return;
            markmapRef.current?.destroy();
            const transformResult = new Transformer().transform(trimmedSource);
            const { root, frontmatter, frontmatterInfo } = transformResult;
            const meta = resolveMarkmapMeta(trimmedSource, frontmatter, frontmatterInfo);
            if (!cancelled) {
                setFmTitle(meta.fmTitle);
                setCopyText(meta.copyText);
            }
            const viewOptions = buildMarkmapViewOptions(deriveOptions, frontmatter?.markmap, {
                initialExpandLevel
            });
            const mm = MarkmapView.create(svgRef.current, viewOptions);
            disableMarkmapWheelInteraction(mm);
            markmapRef.current = mm;
            await mm.setData(root);
            await mm.fit();
            if (!cancelled) setStatus('ready');
        }
        render().catch(()=>{
            if (!cancelled) setStatus('error');
        });
        return ()=>{
            cancelled = true;
            markmapRef.current?.destroy();
            markmapRef.current = null;
        };
    }, [
        trimmedSource,
        initialExpandLevel,
        src,
        source,
        loadedSource
    ]);
    react.useEffect(()=>{
        const viewport = svgRef.current?.parentElement;
        if (!viewport || status !== 'ready') return;
        const ro = new ResizeObserver(()=>{
            void markmapRef.current?.fit();
        });
        ro.observe(viewport);
        return ()=>ro.disconnect();
    }, [
        status
    ]);
    const showLoading = status === 'loading' || status === 'idle';
    const showEmptyError = status === 'error' && !trimmedSource && !src?.trim() && !source?.trim();
    const showFetchError = status === 'error' && !trimmedSource && Boolean(src?.trim());
    const showRenderError = status === 'error' && Boolean(trimmedSource);
    const toolbarReady = status === 'ready';
    const handleZoomIn = react.useCallback(()=>{
        void markmapRef.current?.rescale(ZOOM_STEP);
    }, []);
    const handleZoomOut = react.useCallback(()=>{
        void markmapRef.current?.rescale(1 / ZOOM_STEP);
    }, []);
    const handleResetView = react.useCallback(()=>{
        void markmapRef.current?.fit();
    }, []);
    const srcTrimmed = src?.trim();
    const headerActions = /*#__PURE__*/ (0,jsx_runtime.jsx)(GameSourceHeaderActions/* GameSourceHeaderActions */.S, {
        sourceText: copyText || null,
        downloadHref: srcTrimmed ? resolvedSrc ?? srcTrimmed : null,
        downloadFilename: srcTrimmed ? (0,GameSourceHeaderActions/* filenameFromGameSrc */.e)(resolvedSrc ?? srcTrimmed) : undefined,
        copyAriaLabel: t('copySource'),
        downloadAriaLabel: t('downloadSource')
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(article_card_panel/* ArticleCardPanelRoot */.T, {
        className: "markmap-panel group not-prose",
        "data-markmap-panel": true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelHeader */.Cx, {
                as: "figcaption",
                left: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(network/* default */.A, {
                            className: "size-4 shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (0,utils.cn)('truncate', article_card_panel/* articleCardPanelHeaderText */.J0),
                            children: panelTitle
                        })
                    ]
                }),
                right: headerActions
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelBody */.fY, {
                className: "p-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "markmap-diagram-viewport group/viewport relative flex flex-col",
                    "data-markmap-viewport-host": true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "markmap-viewport relative w-full max-h-[70vh] overflow-hidden touch-none select-none cursor-grab [&.is-panning]:cursor-grabbing",
                            style: {
                                minHeight
                            },
                            role: "application",
                            "aria-label": t('viewportAria'),
                            "data-markmap-ready": toolbarReady ? '1' : undefined,
                            children: [
                                showLoading && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "markmap-loading absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-background",
                                    "aria-live": "polite",
                                    "aria-busy": "true",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.A, {
                                            className: "size-8 animate-spin text-muted-foreground",
                                            "aria-hidden": true
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: t('loading')
                                        })
                                    ]
                                }),
                                showEmptyError && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "absolute inset-0 flex items-center justify-center px-4 text-sm text-muted-foreground",
                                    children: t('emptySource')
                                }),
                                (showFetchError || showRenderError) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "absolute inset-0 flex items-center justify-center px-4 text-sm text-destructive",
                                    children: t('loadFailed')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                    ref: svgRef,
                                    className: "markmap-svg block h-full w-full text-foreground",
                                    "aria-hidden": showEmptyError || showFetchError || showRenderError
                                })
                            ]
                        }),
                        toolbarReady && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "markmap-viewport-toolbar pointer-events-none absolute bottom-1 right-1 z-10 flex items-center gap-0.5 rounded-md border border-border bg-card/95 p-0.5 opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-200 group-hover/viewport:pointer-events-auto group-hover/viewport:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100",
                            role: "toolbar",
                            "aria-label": t('toolbarAria'),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon-sm",
                                    className: "size-7",
                                    onClick: handleZoomOut,
                                    "aria-label": t('zoomOut'),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(zoom_out/* default */.A, {
                                        className: "size-4",
                                        "aria-hidden": true
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon-sm",
                                    className: "size-7",
                                    onClick: handleZoomIn,
                                    "aria-label": t('zoomIn'),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(zoom_in/* default */.A, {
                                        className: "size-4",
                                        "aria-hidden": true
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon-sm",
                                    className: "size-7",
                                    onClick: handleResetView,
                                    "aria-label": t('resetView'),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(rotate_ccw/* default */.A, {
                                        className: "size-4",
                                        "aria-hidden": true
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 83163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ChessViewer: () => (/* binding */ ChessViewer)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next/dist/api/app-dynamic.js
var app_dynamic = __webpack_require__(37206);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(6296);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-left.js
var chevrons_left = __webpack_require__(73684);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(41641);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(21362);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-right.js
var chevrons_right = __webpack_require__(41437);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/swords.js
var swords = __webpack_require__(95788);
// EXTERNAL MODULE: ./node_modules/chess.js/dist/esm/chess.js
var esm_chess = __webpack_require__(64798);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(89239);
// EXTERNAL MODULE: ./src/components/ui/article-card-panel.tsx
var article_card_panel = __webpack_require__(15891);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
;// ./src/lib/chess/parse-game.ts

function trimInput(text) {
    return text.trim();
}
function inferFormatFromSrc(src) {
    const lower = src.toLowerCase().split('?')[0]?.split('#')[0] ?? src;
    if (lower.endsWith('.pgn')) return 'pgn';
    if (lower.endsWith('.fen')) return 'fen';
    return null;
}
function inferFormatFromContent(text) {
    const trimmed = trimInput(text);
    if (trimmed.startsWith('[') || /\d+\.\s/.test(trimmed)) {
        return 'pgn';
    }
    return 'fen';
}
function loadFromFen(fen) {
    const normalized = trimInput(fen);
    const validation = (0,esm_chess/* validateFen */.IP)(normalized);
    if (!validation.ok) {
        return {
            ok: false,
            error: validation.error ?? 'Invalid FEN'
        };
    }
    try {
        const chess = new esm_chess/* Chess */.d$(normalized);
        const snapshot = {
            mode: 'fen',
            headers: {},
            moves: [],
            movesSquares: [],
            fensByPly: [
                chess.fen()
            ],
            commentsByPly: [
                undefined
            ]
        };
        return {
            ok: true,
            snapshot
        };
    } catch  {
        return {
            ok: false,
            error: 'Invalid FEN'
        };
    }
}
function loadFromPgn(pgn) {
    const normalized = trimInput(pgn);
    if (!normalized) {
        return {
            ok: false,
            error: 'Empty PGN'
        };
    }
    const loaded = new esm_chess/* Chess */.d$();
    try {
        loaded.loadPgn(normalized, {
            strict: false
        });
    } catch  {
        return {
            ok: false,
            error: 'Invalid PGN'
        };
    }
    const headers = loaded.getHeaders();
    const moves = loaded.history();
    const commentByFen = new Map(loaded.getComments().map((entry)=>[
            entry.fen,
            entry.comment
        ]));
    const startFen = headers.FEN?.trim() || esm_chess/* DEFAULT_POSITION */.OS;
    try {
        const replay = new esm_chess/* Chess */.d$(startFen, {
            skipValidation: false
        });
        const fensByPly = [
            replay.fen()
        ];
        const commentsByPly = [
            commentByFen.get(replay.fen())
        ];
        const movesSquares = [];
        for (const san of moves){
            const result = replay.move(san);
            if (!result) {
                return {
                    ok: false,
                    error: 'Invalid PGN move sequence'
                };
            }
            movesSquares.push({
                from: result.from,
                to: result.to
            });
            fensByPly.push(replay.fen());
            commentsByPly.push(commentByFen.get(replay.fen()));
        }
        const snapshot = {
            mode: 'pgn',
            headers,
            moves,
            movesSquares,
            fensByPly,
            commentsByPly
        };
        return {
            ok: true,
            snapshot
        };
    } catch  {
        return {
            ok: false,
            error: 'Invalid PGN'
        };
    }
}
function parseGameContent(content, format) {
    if (format === 'pgn') return loadFromPgn(content);
    return loadFromFen(content);
}
function formatHeaderSubtitle(headers) {
    const white = headers.White?.trim();
    const black = headers.Black?.trim();
    if (white && black) return `${white} vs ${black}`;
    const event = headers.Event?.trim();
    return event || undefined;
}

;// ./src/lib/chess/load-input.ts

function withSourceText(result, sourceText) {
    if (result.ok === false) return result;
    return {
        ok: true,
        snapshot: result.snapshot,
        sourceText
    };
}
async function fetchChessFile(src) {
    try {
        const res = await fetch(src);
        if (!res.ok) {
            return {
                ok: false,
                error: `Failed to load (${res.status})`
            };
        }
        const text = await res.text();
        return {
            ok: true,
            text: text.trim()
        };
    } catch  {
        return {
            ok: false,
            error: 'Failed to load file'
        };
    }
}
async function resolveChessInput(params) {
    const inlinePgn = params.pgn?.trim();
    if (inlinePgn) {
        return withSourceText(parseGameContent(inlinePgn, 'pgn'), inlinePgn);
    }
    const inlineFen = params.fen?.trim();
    if (inlineFen) {
        return withSourceText(parseGameContent(inlineFen, 'fen'), inlineFen);
    }
    const src = params.src?.trim();
    if (!src) {
        return {
            ok: false,
            error: 'No FEN, PGN, or src provided'
        };
    }
    const fetched = await fetchChessFile(src);
    if (fetched.ok === false) {
        return fetched;
    }
    const format = params.format ?? inferFormatFromSrc(src) ?? inferFormatFromContent(fetched.text);
    return withSourceText(parseGameContent(fetched.text, format), fetched.text);
}

// EXTERNAL MODULE: ./src/components/business/GameSourceHeaderActions.tsx
var GameSourceHeaderActions = __webpack_require__(80130);
// EXTERNAL MODULE: ./src/lib/board/last-move-highlight.ts
var last_move_highlight = __webpack_require__(96389);
;// ./src/lib/chess/legal-moves.ts


function getLegalTargetsFromSquare(fen, square) {
    try {
        const game = new esm_chess/* Chess */.d$(fen);
        const moves = game.moves({
            square: square,
            verbose: true
        });
        return moves.map((move)=>move.to);
    } catch  {
        return [];
    }
}
const chessSelectedSquareStyle = {
    backgroundColor: 'hsl(var(--accent) / 0.5)',
    boxShadow: 'inset 0 0 0 2px hsl(var(--ring))'
};
const chessLegalMoveDotStyle = {
    background: 'radial-gradient(circle, hsl(var(--primary)) 22%, transparent 24%)'
};
/** Centered dot rendered above pieces for legal capture targets. */ const chessLegalMoveDotOverlayContainerStyle = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    zIndex: 1
};
const chessLegalMoveDotOverlayStyle = {
    width: '26%',
    minWidth: 8,
    minHeight: 8,
    aspectRatio: 1,
    borderRadius: '50%',
    backgroundColor: 'hsl(var(--primary))'
};
const chessLastMoveSquareStyle = last_move_highlight/* lastMoveSquareGlowStyle */.f;

;// ./src/lib/chess/board-square-colors.ts
/** Classic chess board square colors (readable in light and dark site themes). */ const CHESS_LIGHT_SQUARE_COLOR = '#f0d9b5';
const CHESS_DARK_SQUARE_COLOR = '#b58863';

;// ./src/lib/chess/board-position.ts

/** react-chessboard expects a FEN string, not chess.js aliases like "start". */ function normalizeChessboardPosition(fen) {
    const trimmed = fen?.trim();
    if (!trimmed || trimmed === 'start') {
        return esm_chess/* DEFAULT_POSITION */.OS;
    }
    return trimmed;
}

;// ./src/lib/chess/user-branch.ts

function applyChessMove(fen, from, to, promotion) {
    try {
        const game = new esm_chess/* Chess */.d$(fen);
        const move = game.move({
            from: from,
            to: to,
            ...promotion ? {
                promotion
            } : {}
        });
        if (!move) return null;
        return {
            san: move.san,
            from: move.from,
            to: move.to,
            fen: game.fen()
        };
    } catch  {
        return null;
    }
}
function startChessBranch(anchorPly, startingFen, move) {
    return {
        anchorPly,
        startingFen,
        moves: [
            move.san
        ],
        movesSquares: [
            {
                from: move.from,
                to: move.to
            }
        ],
        fensByPly: [
            move.fen
        ]
    };
}
function appendChessBranch(branch, move) {
    return {
        ...branch,
        moves: [
            ...branch.moves,
            move.san
        ],
        movesSquares: [
            ...branch.movesSquares,
            {
                from: move.from,
                to: move.to
            }
        ],
        fensByPly: [
            ...branch.fensByPly,
            move.fen
        ]
    };
}
function truncateChessBranch(branch, keepMoves) {
    if (keepMoves <= 0) {
        return {
            ...branch,
            moves: [],
            movesSquares: [],
            fensByPly: []
        };
    }
    return {
        ...branch,
        moves: branch.moves.slice(0, keepMoves),
        movesSquares: branch.movesSquares.slice(0, keepMoves),
        fensByPly: branch.fensByPly.slice(0, keepMoves)
    };
}

;// ./src/lib/chess/promotion.ts

const PROMOTION_PIECES = [
    'q',
    'r',
    'b',
    'n'
];
function isPromotionMove(fen, from, to) {
    try {
        const game = new esm_chess/* Chess */.d$(fen);
        const moves = game.moves({
            square: from,
            verbose: true
        });
        return moves.some((move)=>move.to === to && Boolean(move.promotion));
    } catch  {
        return false;
    }
}
/** Center of a square as percentage within the board (0–100). */ function squareCenterPercent(square, orientation) {
    const fileIndex = square.charCodeAt(0) - 97;
    const rankIndex = parseInt(square[1] ?? '1', 10) - 1;
    const fileFromLeft = orientation === 'white' ? fileIndex : 7 - fileIndex;
    const rankFromTop = orientation === 'white' ? 7 - rankIndex : rankIndex;
    return {
        leftPercent: (fileFromLeft + 0.5) / 8 * 100,
        topPercent: (rankFromTop + 0.5) / 8 * 100
    };
}
/** Place picker toward the board interior so it stays visible near the back rank. */ function promotionPickerPlacement(square, orientation) {
    const rank = parseInt(square[1] ?? '1', 10);
    const rankFromTop = orientation === 'white' ? 8 - rank : rank;
    return rankFromTop <= 2 ? 'below' : 'above';
}
function promotionPieceType(color, piece) {
    return `${color}${piece.toUpperCase()}`;
}

// EXTERNAL MODULE: ./node_modules/react-chessboard/dist/index.esm.js
var index_esm = __webpack_require__(10728);
;// ./src/components/chess/ChessPromotionPicker.tsx
/* __next_internal_client_entry_do_not_use__ ChessPromotionPicker auto */ 





const PIECE_BUTTON_RATIO = 0.11;
const PROMOTE_LABEL_KEYS = {
    q: 'promoteToQ',
    r: 'promoteToR',
    b: 'promoteToB',
    n: 'promoteToN'
};
function ChessPromotionPicker({ square, color, orientation, boardWidth, onSelect, onCancel, className }) {
    const t = (0,react_client/* useTranslations */.c)('chess');
    const { leftPercent, topPercent } = squareCenterPercent(square, orientation);
    const placement = promotionPickerPlacement(square, orientation);
    const buttonSize = Math.max(28, Math.round(boardWidth * PIECE_BUTTON_RATIO));
    react.useEffect(()=>{
        const onKeyDown = (event)=>{
            if (event.key === 'Escape') onCancel();
        };
        window.addEventListener('keydown', onKeyDown);
        return ()=>window.removeEventListener('keydown', onKeyDown);
    }, [
        onCancel
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,utils.cn)('absolute z-20', className),
        style: {
            left: `${leftPercent}%`,
            top: `${topPercent}%`,
            transform: placement === 'above' ? 'translate(-50%, calc(-100% - 6px))' : 'translate(-50%, 6px)'
        },
        role: "group",
        "aria-label": t('promotionPickerAria'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex gap-0.5 rounded-md border border-border bg-card p-0.5 shadow-md",
            children: PROMOTION_PIECES.map((piece)=>{
                const pieceType = promotionPieceType(color, piece);
                const PieceSvg = index_esm.defaultPieces[pieceType];
                if (!PieceSvg) return null;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    type: "button",
                    className: "rounded-sm bg-background p-0.5 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    style: {
                        width: buttonSize,
                        height: buttonSize
                    },
                    onClick: ()=>onSelect(piece),
                    "aria-label": t(PROMOTE_LABEL_KEYS[piece]),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PieceSvg, {})
                }, piece);
            })
        })
    });
}

// EXTERNAL MODULE: ./src/lib/board/game-user-branch.ts
var game_user_branch = __webpack_require__(67723);
;// ./src/components/mdx/ChessViewer.tsx
/* __next_internal_client_entry_do_not_use__ ChessViewer auto */ 


















const Chessboard = (0,app_dynamic["default"])(async ()=>{
    const mod = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 10728));
    if (!mod.Chessboard) {
        throw new Error('react-chessboard: Chessboard export is missing');
    }
    return mod.Chessboard;
}, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(null /* weak dependency, without id */)
            ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex aspect-square w-full max-w-[400px] items-center justify-center bg-muted",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.A, {
                className: "size-8 animate-spin text-muted-foreground",
                "aria-hidden": true
            })
        })
});
function buildMovePairs(moves) {
    const pairs = [];
    for(let i = 0; i < moves.length; i += 2){
        pairs.push({
            number: Math.floor(i / 2) + 1,
            white: moves[i],
            black: moves[i + 1]
        });
    }
    return pairs;
}
function ChessMoveList({ moves, anchorPly, displayPly, onGoToPly }) {
    const t = (0,react_client/* useTranslations */.c)('chess');
    const pairs = buildMovePairs(moves);
    const hasBranchMoves = moves.length > anchorPly;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-0 flex-1 overflow-y-auto p-2 font-mono text-xs",
        role: "list",
        "aria-label": t('moveListAria'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                type: "button",
                className: (0,utils.cn)('mb-1 block w-full rounded px-1.5 py-0.5 text-left hover:bg-accent', displayPly === 0 && 'bg-accent text-accent-foreground'),
                onClick: ()=>onGoToPly(0),
                children: "…"
            }),
            pairs.map((pair)=>{
                const whitePly = (pair.number - 1) * 2 + 1;
                const blackPly = (pair.number - 1) * 2 + 2;
                const whiteIsBranch = hasBranchMoves && (0,game_user_branch/* isBranchMoveIndex */.g$)(anchorPly, whitePly - 1);
                const blackIsBranch = pair.black != null && hasBranchMoves && (0,game_user_branch/* isBranchMoveIndex */.g$)(anchorPly, blackPly - 1);
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex gap-1 py-0.5",
                    role: "listitem",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "w-6 shrink-0 text-muted-foreground",
                            children: [
                                pair.number,
                                "."
                            ]
                        }),
                        pair.white ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            type: "button",
                            className: (0,utils.cn)('min-w-[3rem] rounded px-1 hover:bg-accent', displayPly === whitePly && 'bg-accent text-accent-foreground', whiteIsBranch && 'text-primary'),
                            onClick: ()=>onGoToPly(whitePly),
                            children: pair.white
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "min-w-[3rem]"
                        }),
                        pair.black ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            type: "button",
                            className: (0,utils.cn)('min-w-[3rem] rounded px-1 hover:bg-accent', displayPly === blackPly && 'bg-accent text-accent-foreground', blackIsBranch && 'text-primary'),
                            onClick: ()=>onGoToPly(blackPly),
                            children: pair.black
                        }) : null
                    ]
                }, pair.number);
            })
        ]
    });
}
function ChessNavigation({ currentPly, maxPly, onFirst, onPrev, onNext, onLast }) {
    const t = (0,react_client/* useTranslations */.c)('chess');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex w-full justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                    type: "button",
                    variant: "outline",
                    size: "icon-sm",
                    onClick: onFirst,
                    disabled: currentPly <= 0,
                    "aria-label": t('first'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevrons_left/* default */.A, {
                        className: "size-4",
                        "aria-hidden": true
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                    type: "button",
                    variant: "outline",
                    size: "icon-sm",
                    onClick: onPrev,
                    disabled: currentPly <= 0,
                    "aria-label": t('previous'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_left/* default */.A, {
                        className: "size-4",
                        "aria-hidden": true
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    className: "min-w-[3.5rem] px-2 text-center text-xs text-muted-foreground tabular-nums",
                    "aria-live": "polite",
                    children: [
                        currentPly,
                        " / ",
                        maxPly
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                    type: "button",
                    variant: "outline",
                    size: "icon-sm",
                    onClick: onNext,
                    disabled: currentPly >= maxPly,
                    "aria-label": t('next'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* default */.A, {
                        className: "size-4",
                        "aria-hidden": true
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                    type: "button",
                    variant: "outline",
                    size: "icon-sm",
                    onClick: onLast,
                    disabled: currentPly >= maxPly,
                    "aria-label": t('last'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevrons_right/* default */.A, {
                        className: "size-4",
                        "aria-hidden": true
                    })
                })
            ]
        })
    });
}
function ChessViewer({ fen, pgn, src, format, title, className, boardWidth = 400, orientation = 'white', showNavigation, showMoveList, interactive = true, showCoordinates = false, showLegalMoves = true, showLastMove = true }) {
    const t = (0,react_client/* useTranslations */.c)('chess');
    const [loading, setLoading] = react.useState(Boolean(src?.trim() && !fen?.trim() && !pgn?.trim()));
    const [error, setError] = react.useState(null);
    const [snapshot, setSnapshot] = react.useState(null);
    const [viewPly, setViewPly] = react.useState(0);
    const [userBranch, setUserBranch] = react.useState(null);
    const [selectedSquare, setSelectedSquare] = react.useState(null);
    const [legalTargets, setLegalTargets] = react.useState([]);
    const [interactiveLastMove, setInteractiveLastMove] = react.useState(null);
    const [pendingPromotion, setPendingPromotion] = react.useState(null);
    const [sourceText, setSourceText] = react.useState(()=>pgn?.trim() || fen?.trim() || null);
    const rootRef = react.useRef(null);
    const inputKey = `${fen ?? ''}|${pgn ?? ''}|${src ?? ''}|${format ?? ''}`;
    react.useEffect(()=>{
        let cancelled = false;
        const needsFetch = Boolean(src?.trim() && !pgn?.trim() && !fen?.trim());
        setLoading(needsFetch);
        setError(null);
        setSourceText(pgn?.trim() || fen?.trim() || null);
        void resolveChessInput({
            fen,
            pgn,
            src,
            format
        }).then((result)=>{
            if (cancelled) return;
            setLoading(false);
            if (result.ok === false) {
                setSnapshot(null);
                setSourceText(pgn?.trim() || fen?.trim() || null);
                setError(result.error);
                return;
            }
            setSnapshot(result.snapshot);
            setSourceText(result.sourceText);
            setViewPly(0);
            setUserBranch(null);
            setInteractiveLastMove(null);
            setPendingPromotion(null);
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        inputKey,
        fen,
        pgn,
        src,
        format
    ]);
    const maxPly = snapshot ? snapshot.fensByPly.length - 1 : 0;
    const tipPly = (0,game_user_branch/* maxViewPly */.hx)(maxPly, userBranch);
    const isPgn = snapshot?.mode === 'pgn';
    const navigationEnabled = showNavigation ?? isPgn;
    const moveListEnabled = showMoveList ?? isPgn;
    const goToMoveListPly = react.useCallback((ply)=>{
        if (!snapshot) return;
        setInteractiveLastMove(null);
        setViewPly((0,game_user_branch/* clampViewPly */.Gi)(ply, maxPly, userBranch));
    }, [
        snapshot,
        maxPly,
        userBranch
    ]);
    const resetReplayToPly = react.useCallback((ply)=>{
        if (!snapshot) return;
        setUserBranch(null);
        setInteractiveLastMove(null);
        setViewPly(Math.max(0, Math.min(ply, maxPly)));
    }, [
        snapshot,
        maxPly
    ]);
    const goFirst = react.useCallback(()=>resetReplayToPly(0), [
        resetReplayToPly
    ]);
    const goPrev = react.useCallback(()=>resetReplayToPly(viewPly - 1), [
        resetReplayToPly,
        viewPly
    ]);
    const goNext = react.useCallback(()=>resetReplayToPly(viewPly + 1), [
        resetReplayToPly,
        viewPly
    ]);
    const goLast = react.useCallback(()=>resetReplayToPly(maxPly), [
        resetReplayToPly,
        maxPly
    ]);
    react.useEffect(()=>{
        const el = rootRef.current;
        if (!el || !navigationEnabled) return;
        const onKeyDown = (e)=>{
            if (!el.contains(document.activeElement) && document.activeElement !== el) return;
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goPrev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                goNext();
            } else if (e.key === 'Home') {
                e.preventDefault();
                goFirst();
            } else if (e.key === 'End') {
                e.preventDefault();
                goLast();
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return ()=>window.removeEventListener('keydown', onKeyDown);
    }, [
        navigationEnabled,
        goPrev,
        goNext,
        goFirst,
        goLast
    ]);
    const position = normalizeChessboardPosition(snapshot ? (0,game_user_branch/* fenAtViewPly */.$9)(snapshot.fensByPly, userBranch, viewPly) : '');
    const displayMoves = snapshot ? userBranch ? (0,game_user_branch/* combinedMoveList */.Zx)(snapshot.moves, userBranch.anchorPly, userBranch.moves) : snapshot.moves : [];
    const comment = snapshot?.commentsByPly[(0,game_user_branch/* commentPlyForView */.rr)(viewPly, userBranch)];
    const subtitle = snapshot ? formatHeaderSubtitle(snapshot.headers) : undefined;
    const panelTitle = title?.trim() || subtitle || t('defaultTitle');
    const srcTrimmed = src?.trim();
    const headerActions = /*#__PURE__*/ (0,jsx_runtime.jsx)(GameSourceHeaderActions/* GameSourceHeaderActions */.S, {
        sourceText: sourceText,
        downloadHref: srcTrimmed || null,
        downloadFilename: srcTrimmed ? (0,GameSourceHeaderActions/* filenameFromGameSrc */.e)(srcTrimmed) : undefined,
        copyAriaLabel: t('copySource'),
        downloadAriaLabel: t('downloadSource')
    });
    const showSidePanel = Boolean(isPgn && snapshot && !loading);
    const canInteract = interactive && !loading && Boolean(snapshot);
    const lastMoveHighlight = react.useMemo(()=>{
        if (!showLastMove || !snapshot || viewPly <= 0) return null;
        if (userBranch && viewPly > userBranch.anchorPly) {
            const branchIndex = viewPly - userBranch.anchorPly - 1;
            if (viewPly === tipPly && interactiveLastMove) return interactiveLastMove;
            return userBranch.movesSquares[branchIndex] ?? null;
        }
        return snapshot.movesSquares[viewPly - 1] ?? null;
    }, [
        showLastMove,
        snapshot,
        userBranch,
        interactiveLastMove,
        viewPly,
        tipPly
    ]);
    react.useEffect(()=>{
        setSelectedSquare(null);
        setLegalTargets([]);
        setPendingPromotion(null);
    }, [
        position
    ]);
    const sideToMove = react.useMemo(()=>{
        try {
            return new esm_chess/* Chess */.d$(position).turn();
        } catch  {
            return null;
        }
    }, [
        position
    ]);
    const commitInteractiveMove = react.useCallback((record)=>{
        if (!snapshot) return;
        setInteractiveLastMove({
            from: record.from,
            to: record.to
        });
        if ((0,game_user_branch/* isMainLineContinued */.BQ)(snapshot.fensByPly, viewPly, record.fen, normalizeChessboardPosition)) {
            setUserBranch(null);
            setViewPly(viewPly + 1);
            return;
        }
        const startingFen = normalizeChessboardPosition((0,game_user_branch/* fenAtViewPly */.$9)(snapshot.fensByPly, null, viewPly));
        let nextBranch;
        if (!userBranch || viewPly <= userBranch.anchorPly) {
            nextBranch = startChessBranch(viewPly, startingFen, record);
        } else if (viewPly < userBranch.anchorPly + userBranch.moves.length) {
            const keepMoves = viewPly - userBranch.anchorPly;
            nextBranch = appendChessBranch(truncateChessBranch(userBranch, keepMoves), record);
        } else {
            nextBranch = appendChessBranch(userBranch, record);
        }
        setUserBranch(nextBranch);
        setViewPly(nextBranch.anchorPly + nextBranch.moves.length);
    }, [
        snapshot,
        viewPly,
        userBranch
    ]);
    const handlePromotionSelect = react.useCallback((piece)=>{
        if (!pendingPromotion || !snapshot) return;
        const record = applyChessMove(position, pendingPromotion.from, pendingPromotion.to, piece);
        setPendingPromotion(null);
        if (!record) return;
        commitInteractiveMove(record);
    }, [
        pendingPromotion,
        snapshot,
        position,
        commitInteractiveMove
    ]);
    const selectSquare = react.useCallback((square)=>{
        setSelectedSquare(square);
        if (showLegalMoves && canInteract) {
            setLegalTargets(getLegalTargetsFromSquare(position, square));
        } else {
            setLegalTargets([]);
        }
    }, [
        showLegalMoves,
        canInteract,
        position
    ]);
    const clearSelection = react.useCallback(()=>{
        setSelectedSquare(null);
        setLegalTargets([]);
    }, []);
    const handleSquareClick = react.useCallback(({ piece, square })=>{
        if (!canInteract) return;
        if (pendingPromotion) {
            setPendingPromotion(null);
        }
        let turnColor;
        try {
            turnColor = new esm_chess/* Chess */.d$(position).turn();
        } catch  {
            return;
        }
        if (!selectedSquare) {
            if (piece && piece.pieceType[0] === turnColor) {
                selectSquare(square);
            }
            return;
        }
        if (selectedSquare === square) {
            clearSelection();
            return;
        }
        if (isPromotionMove(position, selectedSquare, square)) {
            setPendingPromotion({
                from: selectedSquare,
                to: square
            });
            clearSelection();
            return;
        }
        const record = applyChessMove(position, selectedSquare, square);
        if (!record || !snapshot) {
            clearSelection();
            if (piece && piece.pieceType[0] === turnColor) {
                selectSquare(square);
            }
            return;
        }
        clearSelection();
        commitInteractiveMove(record);
    }, [
        canInteract,
        pendingPromotion,
        position,
        selectedSquare,
        selectSquare,
        clearSelection,
        snapshot,
        commitInteractiveMove
    ]);
    const squareStyles = react.useMemo(()=>{
        const styles = {};
        if (showLastMove && lastMoveHighlight) {
            const { from, to } = lastMoveHighlight;
            if (from !== selectedSquare) {
                styles[from] = {
                    ...styles[from],
                    ...chessLastMoveSquareStyle
                };
            }
            if (to !== selectedSquare) {
                styles[to] = {
                    ...styles[to],
                    ...chessLastMoveSquareStyle
                };
            }
        }
        if (pendingPromotion) {
            styles[pendingPromotion.to] = {
                ...styles[pendingPromotion.to],
                ...chessSelectedSquareStyle
            };
        }
        if (selectedSquare) {
            styles[selectedSquare] = {
                ...styles[selectedSquare],
                ...chessSelectedSquareStyle
            };
        }
        if (showLegalMoves) {
            let game = null;
            try {
                game = new esm_chess/* Chess */.d$(position);
            } catch  {
                game = null;
            }
            for (const target of legalTargets){
                if (target === selectedSquare) continue;
                const occupant = game?.get(target);
                if (!occupant) {
                    styles[target] = {
                        ...styles[target],
                        ...chessLegalMoveDotStyle
                    };
                }
            }
        }
        return styles;
    }, [
        selectedSquare,
        legalTargets,
        showLegalMoves,
        showLastMove,
        lastMoveHighlight,
        position,
        pendingPromotion
    ]);
    const squareRenderer = react.useCallback(({ square, children, piece })=>{
        const style = squareStyles[square];
        const showCaptureDot = showLegalMoves && Boolean(selectedSquare) && legalTargets.includes(square) && square !== selectedSquare && piece != null;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                position: 'relative',
                width: '100%',
                height: '100%',
                ...style
            },
            children: [
                children,
                showCaptureDot ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    "aria-hidden": true,
                    style: chessLegalMoveDotOverlayContainerStyle,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        style: chessLegalMoveDotOverlayStyle
                    })
                }) : null
            ]
        });
    }, [
        squareStyles,
        showLegalMoves,
        selectedSquare,
        legalTargets
    ]);
    const boardOptions = react.useMemo(()=>({
            position,
            boardOrientation: orientation,
            allowDragging: false,
            allowDrawingArrows: false,
            showNotation: showCoordinates,
            showAnimations: true,
            animationDurationInMs: 120,
            squareStyles,
            squareRenderer,
            boardStyle: {
                width: boardWidth,
                height: boardWidth,
                maxWidth: '100%'
            },
            darkSquareStyle: {
                backgroundColor: CHESS_DARK_SQUARE_COLOR
            },
            lightSquareStyle: {
                backgroundColor: CHESS_LIGHT_SQUARE_COLOR
            },
            onSquareClick: canInteract ? handleSquareClick : undefined
        }), [
        position,
        orientation,
        boardWidth,
        canInteract,
        handleSquareClick,
        showCoordinates,
        squareStyles,
        squareRenderer
    ]);
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("figure", {
            className: (0,utils.cn)('my-4 overflow-hidden rounded-lg border border-border bg-muted p-6 text-center not-prose', className),
            role: "alert",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(swords/* default */.A, {
                    className: "mx-auto mb-2 size-10 text-muted-foreground",
                    "aria-hidden": true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "font-medium text-foreground",
                    children: panelTitle
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "mt-1 text-sm text-destructive",
                    children: error
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(article_card_panel/* ArticleCardPanelRoot */.T, {
        className: (0,utils.cn)('chess-viewer not-prose', className),
        "data-chess-viewer": true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelHeader */.Cx, {
                left: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(swords/* default */.A, {
                            className: "size-4 shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (0,utils.cn)('truncate', article_card_panel/* articleCardPanelHeaderText */.J0),
                            children: panelTitle
                        }),
                        subtitle && title?.trim() ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "truncate text-xs text-muted-foreground",
                            children: [
                                "(",
                                subtitle,
                                ")"
                            ]
                        }) : null
                    ]
                }),
                right: headerActions
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelBody */.fY, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    ref: rootRef,
                    tabIndex: navigationEnabled ? 0 : undefined,
                    className: "flex flex-col items-center gap-4 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "aria-label": panelTitle,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:items-start sm:justify-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "shrink-0",
                                    children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center justify-center bg-muted text-muted-foreground",
                                        style: {
                                            width: boardWidth,
                                            height: boardWidth
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.A, {
                                                className: "size-8 animate-spin",
                                                "aria-hidden": true
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "sr-only",
                                                children: t('loading')
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative shrink-0",
                                        style: {
                                            width: boardWidth,
                                            height: boardWidth
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chessboard, {
                                                options: boardOptions
                                            }),
                                            pendingPromotion && sideToMove ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ChessPromotionPicker, {
                                                square: pendingPromotion.to,
                                                color: sideToMove,
                                                orientation: orientation,
                                                boardWidth: boardWidth,
                                                onSelect: handlePromotionSelect,
                                                onCancel: ()=>setPendingPromotion(null)
                                            }) : null
                                        ]
                                    })
                                }),
                                showSidePanel ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex w-full max-w-xs flex-col overflow-hidden rounded-md border border-border bg-muted/30 text-sm sm:w-56 sm:max-w-none",
                                    style: {
                                        minHeight: boardWidth,
                                        maxHeight: boardWidth
                                    },
                                    children: [
                                        moveListEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ChessMoveList, {
                                            moves: displayMoves,
                                            anchorPly: userBranch?.anchorPly ?? snapshot.moves.length,
                                            displayPly: viewPly,
                                            onGoToPly: goToMoveListPly
                                        }) : null,
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "max-h-[60%] min-h-0 shrink-0 overflow-y-auto border-t border-border px-3 py-2",
                                            "aria-label": t('commentAria'),
                                            children: comment ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-foreground whitespace-pre-wrap",
                                                children: comment
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-muted-foreground italic",
                                                children: t('noComment')
                                            })
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        navigationEnabled && snapshot && !loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ChessNavigation, {
                            currentPly: viewPly,
                            maxPly: maxPly,
                            onFirst: goFirst,
                            onPrev: goPrev,
                            onNext: goNext,
                            onLast: goLast
                        }) : null
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 89239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18460);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42442);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40980);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .F)("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            outline: "border-input bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
            destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
            link: "text-foreground underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .DX : "button";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp, {
        ref: ref,
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 90682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteConfigProvider: () => (/* binding */ SiteConfigProvider),
/* harmony export */   z: () => (/* binding */ useSiteConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ SiteConfigProvider,useSiteConfig auto */ 

const SiteConfigContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function SiteConfigProvider({ children, value }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SiteConfigContext.Provider, {
        value: value,
        children: children
    });
}
function useSiteConfig() {
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SiteConfigContext);
    if (!ctx) {
        throw new Error('useSiteConfig must be used within SiteConfigProvider');
    }
    return ctx;
}


/***/ }),

/***/ 90824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useOnContentReveal),
/* harmony export */   OnContentRevealProvider: () => (/* binding */ OnContentRevealProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ OnContentRevealProvider,useOnContentReveal auto */ 

const OnContentRevealContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function OnContentRevealProvider({ children }) {
    const callbacksRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Set());
    const register = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((fn)=>{
        callbacksRef.current.add(fn);
        return ()=>{
            callbacksRef.current.delete(fn);
        };
    }, []);
    const run = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // Run after paint so DOM (headings, images) is ready
        requestAnimationFrame(()=>{
            callbacksRef.current.forEach((fn)=>{
                try {
                    fn();
                } catch (e) {
                    console.error('[OnContentReveal] callback error:', e);
                }
            });
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OnContentRevealContext.Provider, {
        value: {
            register,
            run
        },
        children: children
    });
}
function useOnContentReveal() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OnContentRevealContext);
}


/***/ }),

/***/ 90954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RawHtml: () => (/* binding */ RawHtml)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/contexts/PostAssetBaseContext.tsx
var PostAssetBaseContext = __webpack_require__(44272);
// EXTERNAL MODULE: ./src/contexts/SiteConfigContext.tsx
var SiteConfigContext = __webpack_require__(90682);
;// ./src/lib/image-fade-in-dom.ts
const FADE_IN_BOUND_ATTR = 'data-fade-in-bound';
function markImageLoaded(img) {
    img.setAttribute('data-loaded', 'true');
    img.classList.add('opacity-100');
}
function isImageAlreadyLoaded(img) {
    return img.complete && img.naturalWidth > 0;
}
/**
 * Apply fade-in classes and load listener to a native <img> in injected HTML (e.g. RawHtml).
 * Idempotent: skips if already bound.
 */ function bindImageFadeIn(img) {
    if (img.getAttribute(FADE_IN_BOUND_ATTR) === 'true') return;
    img.setAttribute(FADE_IN_BOUND_ATTR, 'true');
    img.classList.add('img-fade-in');
    const onLoad = ()=>{
        markImageLoaded(img);
        img.removeEventListener('load', onLoad);
    };
    img.addEventListener('load', onLoad);
    if (isImageAlreadyLoaded(img)) {
        markImageLoaded(img);
        img.removeEventListener('load', onLoad);
        return;
    }
    const parent = img.parentElement;
    if (parent && !parent.classList.contains('img-fade-in-host')) {
        const host = document.createElement('span');
        host.className = 'img-fade-in-host';
        img.parentNode?.insertBefore(host, img);
        host.appendChild(img);
    }
}

// EXTERNAL MODULE: ./src/lib/post/post-asset-url.ts
var post_asset_url = __webpack_require__(58317);
;// ./src/components/mdx/RawHtml.tsx
/* __next_internal_client_entry_do_not_use__ RawHtml auto */ 





const FANCYBOX_OPT_OUT_ATTRS = [
    'no-fancybox'
];
const FIGCAPTION_OPT_OUT_ATTRS = [
    'no-figcaption'
];
function hasOptOutAttribute(img, attrNames) {
    return attrNames.some((name)=>img.hasAttribute(name) && img.getAttribute(name) !== 'false');
}
function parseBoolAttr(val) {
    if (val == null || val === '') return undefined;
    const lower = val.toLowerCase();
    if (lower === 'true' || lower === '1') return true;
    if (lower === 'false' || lower === '0') return false;
    return undefined;
}
function RawHtml({ html, photoFigcaptionEnabled = false }) {
    const ref = (0,react.useRef)(null);
    const postSlug = (0,PostAssetBaseContext/* usePostAssetBase */.N9)();
    const { imageFadeInEnabled = false } = (0,SiteConfigContext/* useSiteConfig */.z)();
    (0,react.useEffect)(()=>{
        if (!ref.current) return;
        const container = ref.current;
        // Re-inject <script> tags so they actually execute
        const scripts = container.querySelectorAll('script');
        scripts.forEach((oldScript)=>{
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach((attr)=>{
                newScript.setAttribute(attr.name, attr.value);
            });
            newScript.textContent = oldScript.textContent;
            oldScript.replaceWith(newScript);
        });
        // Enhance <img> elements with fancybox and figcaption, matching MdxImg behavior
        const imgs = container.querySelectorAll('img');
        imgs.forEach((img)=>{
            // Skip if already enhanced (data-fancybox ancestor means RawHtml already wrapped it)
            if (img.closest('[data-fancybox]')) return;
            const src = img.getAttribute('src');
            if (!src) return;
            const resolvedSrc = postSlug ? (0,post_asset_url/* resolvePostRelativeUrl */.Au)(src, postSlug) : src;
            const captionText = (img.getAttribute('title') ?? img.getAttribute('alt') ?? '').trim();
            // -- figcaption logic (MdxImg equivalent) --
            const skipFigcaption = hasOptOutAttribute(img, FIGCAPTION_OPT_OUT_ATTRS);
            const dataFigcaptionExplicit = parseBoolAttr(img.getAttribute('data-figcaption'));
            const figcaptionOptIn = dataFigcaptionExplicit ?? photoFigcaptionEnabled;
            const useFigcaption = !skipFigcaption && figcaptionOptIn && (captionText.length > 0 || dataFigcaptionExplicit === true);
            // -- fancybox logic (MdxImg equivalent) --
            const skipFancybox = hasOptOutAttribute(img, FANCYBOX_OPT_OUT_ATTRS) || img.hasAttribute('data-fancybox');
            const dataFancyboxExplicit = parseBoolAttr(img.getAttribute('data-fancybox'));
            const fancyboxOptIn = dataFancyboxExplicit ?? true // default true inside RawHtml
            ;
            const useFancybox = !skipFancybox && fancyboxOptIn && !!resolvedSrc;
            // Build wrappers innermost → outermost
            let current = img;
            // Inner layer: fancybox anchor
            if (useFancybox) {
                const anchor = document.createElement('a');
                anchor.setAttribute('data-fancybox', 'gallery');
                anchor.setAttribute('href', resolvedSrc);
                if (captionText) anchor.setAttribute('data-caption', captionText);
                img.parentNode?.insertBefore(anchor, img);
                anchor.appendChild(img);
                current = anchor;
            }
            // Outer layer: figure + figcaption
            if (useFigcaption) {
                const figure = document.createElement('figure');
                figure.setAttribute('data-photo-figure', '');
                figure.className = 'block my-5 w-fit';
                current.parentNode?.insertBefore(figure, current);
                figure.appendChild(current);
                const figcaption = document.createElement('figcaption');
                figcaption.className = 'text-center text-sm text-muted-foreground';
                figcaption.textContent = captionText;
                figure.appendChild(figcaption);
            }
            if (imageFadeInEnabled) {
                bindImageFadeIn(img);
            }
        });
    }, [
        html,
        postSlug,
        photoFigcaptionEnabled,
        imageFadeInEnabled
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        dangerouslySetInnerHTML: {
            __html: html
        }
    });
}


/***/ }),

/***/ 93473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XiangqiViewer: () => (/* binding */ XiangqiViewer)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-left.js
var chevrons_left = __webpack_require__(73684);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(41641);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(21362);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-right.js
var chevrons_right = __webpack_require__(41437);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/grid-3x3.js
var grid_3x3 = __webpack_require__(14403);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(6296);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(89239);
// EXTERNAL MODULE: ./src/components/ui/article-card-panel.tsx
var article_card_panel = __webpack_require__(15891);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
// EXTERNAL MODULE: ./src/lib/board/last-move-highlight.ts
var last_move_highlight = __webpack_require__(96389);
;// ./src/lib/xiangqi/fen-to-position.ts
const FILES = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i'
];
const PIECE_TO_BOARD = {
    R: 'rR',
    N: 'rN',
    B: 'rB',
    A: 'rA',
    K: 'rK',
    C: 'rC',
    P: 'rP',
    r: 'bR',
    n: 'bN',
    b: 'bB',
    a: 'bA',
    k: 'bK',
    c: 'bC',
    p: 'bP'
};
/**
 * Parse xiangqi FEN (first field) into square -> piece map for the board UI.
 * Rank 9 is the top row (black back rank in standard FEN).
 */ function fenToBoardPosition(fen) {
    const boardPart = fen.trim().split(/\s+/)[0] ?? '';
    const rows = boardPart.split('/');
    const position = {};
    if (rows.length !== 10) {
        return position;
    }
    for(let rowIndex = 0; rowIndex < 10; rowIndex++){
        const rank = 9 - rowIndex;
        let fileIndex = 0;
        const row = rows[rowIndex] ?? '';
        for (const char of row){
            if (fileIndex >= 9) break;
            if (char >= '1' && char <= '9') {
                fileIndex += parseInt(char, 10);
                continue;
            }
            const code = PIECE_TO_BOARD[char];
            if (code && fileIndex < 9) {
                const square = `${FILES[fileIndex]}${rank}`;
                position[square] = code;
                fileIndex += 1;
            }
        }
    }
    return position;
}
const XIANGQI_FILES = FILES;
const XIANGQI_RANKS = [
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
    0
];
/** Detect a single piece move between two FENs (for replay animation). */ function detectSingleMoveBetweenFens(prevFen, nextFen) {
    const prev = fenToBoardPosition(prevFen);
    const next = fenToBoardPosition(nextFen);
    const departed = [];
    const arrived = [];
    const replaced = [];
    for (const file of FILES){
        for (const rank of XIANGQI_RANKS){
            const square = `${file}${rank}`;
            const before = prev[square];
            const after = next[square];
            if (before === after) continue;
            if (before && !after) {
                departed.push(square);
            } else if (!before && after) {
                arrived.push(square);
            } else if (before && after) {
                replaced.push(square);
            }
        }
    }
    let from;
    let to;
    if (departed.length === 1 && arrived.length === 1 && replaced.length === 0) {
        from = departed[0];
        to = arrived[0];
    } else if (departed.length === 1 && arrived.length === 0 && replaced.length === 1) {
        from = departed[0];
        to = replaced[0];
    } else {
        return null;
    }
    const pieceCode = next[to];
    if (!from || !to || !pieceCode) return null;
    return {
        from,
        to,
        pieceCode
    };
}

;// ./src/lib/xiangqi/vendor/xiangqi-core.js
/* @license
 * Copyright (c) 2019-2024, lengyanyu258 <lengyanyu258@outlook.com>
 * Released under the BSD-2-Clause license
 * https://github.com/lengyanyu258/xiangqi.js/blob/master/LICENSE
 */ 
const Xiangqi = function(fen) {
    const BLACK = 'b';
    const RED = 'r';
    const EMPTY = -1;
    const PAWN = 'p';
    const CANNON = 'c';
    const ROOK = 'r';
    const KNIGHT = 'n';
    const BISHOP = 'b';
    const ADVISER = 'a';
    const KING = 'k';
    const SYMBOLS = 'pcrnbakPCRNBAK';
    const DEFAULT_POSITION = 'rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r - - 0 1';
    const POSSIBLE_RESULTS = Object.freeze([
        '1-0',
        '0-1',
        '1/2-1/2',
        '*'
    ]);
    // prettier-ignore
    const PAWN_OFFSETS = Object.freeze({
        b: [
            0x10,
            -0x01,
            0x01
        ],
        r: [
            -0x10,
            -0x01,
            0x01
        ]
    });
    // prettier-ignore
    const PIECE_OFFSETS = Object.freeze({
        c: [
            -0x10,
            0x10,
            -0x01,
            0x01
        ],
        r: [
            -0x10,
            0x10,
            -0x01,
            0x01
        ],
        n: [
            -0x20 - 0x01,
            -0x20 + 0x01,
            0x20 - 0x01,
            0x20 + 0x01,
            -0x10 - 0x02,
            0x10 - 0x02,
            -0x10 + 0x02,
            0x10 + 0x02
        ],
        b: [
            -0x20 - 0x02,
            0x20 + 0x02,
            0x20 - 0x02,
            -0x20 + 0x02
        ],
        a: [
            -0x10 - 0x01,
            0x10 + 0x01,
            0x10 - 0x01,
            -0x10 + 0x01
        ],
        k: [
            -0x10,
            0x10,
            -0x01,
            0x01
        ]
    });
    const FLAGS = Object.freeze({
        NORMAL: 'n',
        CAPTURE: 'c'
    });
    const BITS = Object.freeze({
        NORMAL: 1,
        CAPTURE: 2
    });
    // prettier-ignore
    const SQUARES = Object.freeze({
        a9: 0x00,
        b9: 0x01,
        c9: 0x02,
        d9: 0x03,
        e9: 0x04,
        f9: 0x05,
        g9: 0x06,
        h9: 0x07,
        i9: 0x08,
        a8: 0x10,
        b8: 0x11,
        c8: 0x12,
        d8: 0x13,
        e8: 0x14,
        f8: 0x15,
        g8: 0x16,
        h8: 0x17,
        i8: 0x18,
        a7: 0x20,
        b7: 0x21,
        c7: 0x22,
        d7: 0x23,
        e7: 0x24,
        f7: 0x25,
        g7: 0x26,
        h7: 0x27,
        i7: 0x28,
        a6: 0x30,
        b6: 0x31,
        c6: 0x32,
        d6: 0x33,
        e6: 0x34,
        f6: 0x35,
        g6: 0x36,
        h6: 0x37,
        i6: 0x38,
        a5: 0x40,
        b5: 0x41,
        c5: 0x42,
        d5: 0x43,
        e5: 0x44,
        f5: 0x45,
        g5: 0x46,
        h5: 0x47,
        i5: 0x48,
        a4: 0x50,
        b4: 0x51,
        c4: 0x52,
        d4: 0x53,
        e4: 0x54,
        f4: 0x55,
        g4: 0x56,
        h4: 0x57,
        i4: 0x58,
        a3: 0x60,
        b3: 0x61,
        c3: 0x62,
        d3: 0x63,
        e3: 0x64,
        f3: 0x65,
        g3: 0x66,
        h3: 0x67,
        i3: 0x68,
        a2: 0x70,
        b2: 0x71,
        c2: 0x72,
        d2: 0x73,
        e2: 0x74,
        f2: 0x75,
        g2: 0x76,
        h2: 0x77,
        i2: 0x78,
        a1: 0x80,
        b1: 0x81,
        c1: 0x82,
        d1: 0x83,
        e1: 0x84,
        f1: 0x85,
        g1: 0x86,
        h1: 0x87,
        i1: 0x88,
        a0: 0x90,
        b0: 0x91,
        c0: 0x92,
        d0: 0x93,
        e0: 0x94,
        f0: 0x95,
        g0: 0x96,
        h0: 0x97,
        i0: 0x98
    });
    let board = new Array(256);
    let kings = {
        r: EMPTY,
        b: EMPTY
    };
    let turn = RED;
    let half_moves = 0;
    let move_number = 1;
    let history = [];
    let futures = [];
    let header = {};
    /* if the user passes in a fen string, load it, else default to starting position */ if (typeof fen === 'undefined') {
        load(DEFAULT_POSITION);
    } else {
        load(fen);
    }
    function clear(keep_headers) {
        if (typeof keep_headers === 'undefined') {
            keep_headers = false;
        }
        board = new Array(256);
        kings = {
            r: EMPTY,
            b: EMPTY
        };
        turn = RED;
        half_moves = 0;
        move_number = 1;
        history = [];
        futures = [];
        if (!keep_headers) header = {};
        update_setup(generate_fen());
    }
    function reset() {
        load(DEFAULT_POSITION);
    }
    function load(fen, keep_headers) {
        if (typeof keep_headers === 'undefined') {
            keep_headers = false;
        }
        if (!validate_fen(fen).valid) {
            return false;
        }
        let tokens = fen.split(/\s+/);
        let position = tokens[0];
        let square = 0, piece, color;
        clear(keep_headers);
        for(let i = 0; i < position.length; ++i){
            piece = position.charAt(i);
            if (piece === '/') {
                square += 0x07;
            } else if (is_digit(piece)) {
                square += parseInt(piece, 10);
            } else {
                color = piece < 'a' ? RED : BLACK;
                put({
                    type: piece.toLowerCase(),
                    color: color
                }, algebraic(square));
                square++;
            }
        }
        turn = tokens[1] === BLACK ? BLACK : RED;
        half_moves = parseInt(tokens[4], 10);
        move_number = parseInt(tokens[5], 10);
        update_setup(generate_fen());
        return true;
    }
    function validate_fen(fen) {
        const errors = {
            0: 'No errors.',
            1: 'FEN string must contain six space-delimited fields.',
            2: '6th field (move number) must be a positive integer.',
            3: '5th field (half move counter) must be a non-negative integer.',
            4: "4th field (en-passant square) should be '-'.",
            5: "3rd field (castling availability) should be '-'.",
            6: '2nd field (side to move) is invalid.',
            7: "1st field (piece positions) does not contain 10 '/'-delimited rows.",
            8: '1st field (piece positions) is invalid [consecutive numbers].',
            9: '1st field (piece positions) is invalid [invalid piece].',
            10: '1st field (piece positions) is invalid [row too large].',
            11: '1st field (piece positions) is invalid [each side has one king].',
            12: '1st field (piece positions) is invalid [each side has no more than 2 advisers].',
            13: '1st field (piece positions) is invalid [each side has no more than 2 bishops].',
            14: '1st field (piece positions) is invalid [each side has no more than 2 knights].',
            15: '1st field (piece positions) is invalid [each side has no more than 2 rooks].',
            16: '1st field (piece positions) is invalid [each side has no more than 2 cannons].',
            17: '1st field (piece positions) is invalid [each side has no more than 5 pawns].',
            18: '1st field (piece positions) is invalid [black king should at right position].',
            19: '1st field (piece positions) is invalid [red king should at right position].',
            20: '1st field (piece positions) is invalid [black adviser should at right position].',
            21: '1st field (piece positions) is invalid [red adviser should at right position].',
            22: '1st field (piece positions) is invalid [black bishop should at right position].',
            23: '1st field (piece positions) is invalid [red bishop should at right position].',
            24: '1st field (piece positions) is invalid [black pawn should at right position].',
            25: '1st field (piece positions) is invalid [red pawn should at right position].'
        };
        function result(err_num) {
            return {
                valid: err_num === 0,
                error_number: err_num,
                error: errors[err_num]
            };
        }
        /* 1st criterion: 6 space-separated fields? */ const tokens = fen.split(/\s+/);
        if (tokens.length !== 6) {
            return result(1);
        }
        /* 2nd criterion: move number field is a integer value > 0? */ if (tokens[5] === '' || isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
            return result(2);
        }
        /* 3rd criterion: half move counter is an integer >= 0? */ if (tokens[4] === '' || isNaN(tokens[4]) || parseInt(tokens[4], 10) < 0) {
            return result(3);
        }
        /* 4th criterion: 4th field is a valid e.p.-string? */ if (!/^-$/.test(tokens[3])) {
            return result(4);
        }
        /* 5th criterion: 3th field is a valid castle-string? */ if (!/^-$/.test(tokens[2])) {
            return result(5);
        }
        /* 6th criterion: 2nd field is "r/w" (red) or "b" (black)? */ if (!/^([rwb])$/.test(tokens[1])) {
            return result(6);
        }
        /* 7th criterion: 1st field contains 10 rows? */ const rows = tokens[0].split('/');
        if (rows.length !== 10) {
            return result(7);
        }
        /* 8th criterion: every row is valid? */ // prettier-ignore
        const pieces = {
            p: {
                number: 0,
                squares: []
            },
            P: {
                number: 0,
                squares: []
            },
            c: {
                number: 0,
                squares: []
            },
            C: {
                number: 0,
                squares: []
            },
            r: {
                number: 0,
                squares: []
            },
            R: {
                number: 0,
                squares: []
            },
            n: {
                number: 0,
                squares: []
            },
            N: {
                number: 0,
                squares: []
            },
            b: {
                number: 0,
                squares: []
            },
            B: {
                number: 0,
                squares: []
            },
            a: {
                number: 0,
                squares: []
            },
            A: {
                number: 0,
                squares: []
            },
            k: {
                number: 0,
                squares: []
            },
            K: {
                number: 0,
                squares: []
            }
        };
        let i, j, sum_fields, previous_was_number;
        for(i = 0; i < rows.length; i++){
            /* check for right sum of fields AND not two numbers in succession */ sum_fields = 0;
            previous_was_number = false;
            for(j = 0; j < rows[i].length; j++){
                if (!isNaN(rows[i][j])) {
                    if (previous_was_number) {
                        return result(8);
                    }
                    sum_fields += parseInt(rows[i][j], 10);
                    previous_was_number = true;
                } else {
                    try {
                        ++pieces[rows[i][j]].number;
                    } catch (e) {
                        return result(9);
                    }
                    pieces[rows[i][j]].squares.push(i << 4 | sum_fields);
                    sum_fields += 1;
                    previous_was_number = false;
                }
            }
            if (sum_fields !== 9) {
                return result(10);
            }
        }
        /* 9th criterion: every piece's number is valid? */ if (pieces.k.number !== 1 || pieces.K.number !== 1) {
            return result(11);
        }
        if (pieces.a.number > 2 || pieces.A.number > 2) {
            return result(12);
        }
        if (pieces.b.number > 2 || pieces.B.number > 2) {
            return result(13);
        }
        if (pieces.n.number > 2 || pieces.N.number > 2) {
            return result(14);
        }
        if (pieces.r.number > 2 || pieces.R.number > 2) {
            return result(15);
        }
        if (pieces.c.number > 2 || pieces.C.number > 2) {
            return result(16);
        }
        if (pieces.p.number > 5 || pieces.P.number > 5) {
            return result(17);
        }
        /* 10th criterion: every piece's place is valid? */ if (out_of_place(KING, pieces.k.squares[0], BLACK)) {
            return result(18);
        }
        if (out_of_place(KING, pieces.K.squares[0], RED)) {
            return result(19);
        }
        for(i = 0; i < pieces.a.squares.length; ++i){
            if (out_of_place(ADVISER, pieces.a.squares[i], BLACK)) {
                return result(20);
            }
        }
        for(i = 0; i < pieces.A.squares.length; ++i){
            if (out_of_place(ADVISER, pieces.A.squares[i], RED)) {
                return result(21);
            }
        }
        for(i = 0; i < pieces.b.squares.length; ++i){
            if (out_of_place(BISHOP, pieces.b.squares[i], BLACK)) {
                return result(22);
            }
        }
        for(i = 0; i < pieces.B.squares.length; ++i){
            if (out_of_place(BISHOP, pieces.B.squares[i], RED)) {
                return result(23);
            }
        }
        for(i = 0; i < pieces.p.squares.length; ++i){
            if (out_of_place(PAWN, pieces.p.squares[i], BLACK)) {
                return result(24);
            }
        }
        for(i = 0; i < pieces.P.squares.length; ++i){
            if (out_of_place(PAWN, pieces.P.squares[i], RED)) {
                return result(25);
            }
        }
        /* everything's okay! */ return result(0);
    }
    function generate_fen() {
        let empty = 0, fen = '', color, piece;
        for(let i = SQUARES.a9; i <= SQUARES.i0; ++i){
            if (board[i] == null) {
                empty++;
            } else {
                if (empty > 0) {
                    fen += empty;
                    empty = 0;
                }
                color = board[i].color;
                piece = board[i].type;
                fen += color === RED ? piece.toUpperCase() : piece.toLowerCase();
            }
            if (file(i) >= 8) {
                if (empty > 0) {
                    fen += empty;
                }
                if (i !== SQUARES.i0) {
                    fen += '/';
                }
                empty = 0;
                i += 0x07;
            }
        }
        return [
            fen,
            turn,
            '-',
            '-',
            half_moves,
            move_number
        ].join(' ');
    }
    function set_header(args) {
        for(let i = 0; i < args.length; i += 2){
            if (typeof args[i] === 'string' && typeof args[i + 1] === 'string') {
                header[args[i]] = args[i + 1];
            }
        }
        return header;
    }
    /* called when the initial board setup is changed with put() or remove().
   * modifies the FEN properties of the header object.  if the FEN is equal to
   * the default position, the FEN are deleted the setup is only updated if history.
   * length is zero, ie moves haven't been made.
   */ function update_setup(fen) {
        if (history.length > 0) return;
        if (fen !== DEFAULT_POSITION) {
            header.FEN = fen;
        } else {
            delete header.FEN;
        }
    }
    function get(square) {
        const piece = board[SQUARES[square]];
        return piece ? {
            type: piece.type,
            color: piece.color
        } : null;
    }
    function put(piece, square) {
        /* check for valid piece object */ if (!('type' in piece && 'color' in piece)) {
            return false;
        }
        /* check for piece */ if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
            return false;
        }
        /* check for valid square */ if (!(square in SQUARES)) {
            return false;
        }
        const sq = SQUARES[square];
        /* don't let the user place more than one king */ if (piece.type === KING && !(kings[piece.color] === EMPTY || kings[piece.color] === sq)) {
            return false;
        }
        if (out_of_place(piece.type, sq, piece.color)) {
            return false;
        }
        board[sq] = {
            type: piece.type,
            color: piece.color
        };
        if (piece.type === KING) {
            kings[piece.color] = sq;
        }
        update_setup(generate_fen());
        return true;
    }
    function remove(square) {
        const piece = get(square);
        board[SQUARES[square]] = null;
        if (piece && piece.type === KING) {
            kings[piece.color] = EMPTY;
        }
        update_setup(generate_fen());
        return piece;
    }
    function build_move(board, from, to, flags) {
        let move = {
            color: turn,
            from: from,
            to: to,
            flags: flags,
            piece: board[from].type
        };
        if (board[to]) {
            move.captured = board[to].type;
        }
        return move;
    }
    function generate_moves(options) {
        function add_move(board, moves, from, to, flags) {
            moves.push(build_move(board, from, to, flags));
        }
        let moves = [];
        let us = turn;
        let them = swap_color(us);
        let first_sq = SQUARES.a9;
        let last_sq = SQUARES.i0;
        /* do we want legal moves? */ const legal = typeof options !== 'undefined' && 'legal' in options ? options.legal : true;
        // do we need opponent moves?
        const opponent = typeof options !== 'undefined' && 'opponent' in options ? options.opponent : false;
        /* are we generating moves for a single square? */ if (typeof options !== 'undefined' && 'square' in options) {
            if (options.square in SQUARES) {
                first_sq = last_sq = SQUARES[options.square];
            } else {
                /* invalid square */ return [];
            }
        }
        if (opponent) {
            turn = swap_color(turn);
            us = turn;
            them = swap_color(us);
        }
        let i, j, len, piece, OFFSETS, offset, square, crossed;
        for(i = first_sq; i <= last_sq; ++i){
            piece = board[i];
            if (piece == null || piece.color !== us) continue;
            OFFSETS = piece.type === PAWN ? PAWN_OFFSETS[us] : PIECE_OFFSETS[piece.type];
            for(j = 0, len = OFFSETS.length; j < len; ++j){
                if (piece.type === PAWN && j > 0 && !crossed_river(i, us)) break;
                offset = OFFSETS[j];
                square = i;
                crossed = false;
                while(true){
                    square += offset;
                    if (out_of_board(square)) break;
                    else if (piece.type === KNIGHT && hobbling_horse_leg(i, j)) break;
                    else if (piece.type === BISHOP && (blocking_elephant_eye(i, j) || crossed_river(square, us))) break;
                    else if ((piece.type === ADVISER || piece.type === KING) && out_of_place(piece.type, square, us)) break;
                    if (board[square] == null) {
                        if (piece.type === CANNON && crossed) continue;
                        add_move(board, moves, i, square, BITS.NORMAL);
                    } else {
                        if (piece.type === CANNON) {
                            if (crossed) {
                                if (board[square].color === them) add_move(board, moves, i, square, BITS.CAPTURE);
                                break;
                            }
                            crossed = true;
                        } else {
                            if (board[square].color === them) add_move(board, moves, i, square, BITS.CAPTURE);
                            break;
                        }
                    }
                    if (piece.type !== CANNON && piece.type !== ROOK) break;
                }
            }
            if (file(i) >= 8) {
                i = i + 0x07;
            }
        }
        /* return all pseudo-legal moves (this includes moves that allow the king
     * to be captured)
     */ if (!legal) {
            return moves;
        }
        /* filter out illegal moves */ let legal_moves = [];
        for(i = 0, len = moves.length; i < len; i++){
            make_move(moves[i]);
            if (!king_attacked(us)) {
                legal_moves.push(moves[i]);
            }
            undo_move();
        }
        // DID we need opponent moves?
        if (opponent) {
            turn = swap_color(turn);
        }
        return legal_moves;
    }
    /* convert a move from 0x9a coordinates to Internet Chinese Chess Server (ICCS)
   *
   * @param {boolean} sloppy Use the sloppy ICCS generator to work around over
   * disambiguation bugs in Fritz and Chessbase.  See below:
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */ function move_to_iccs(move, sloppy) {
        let output = '';
        // let disambiguator = get_disambiguator(move, sloppy);
        // if (move.piece !== PAWN) {
        //   output += move.piece.toUpperCase() + disambiguator;
        // }
        // output += algebraic(move.to);
        output = algebraic(move.from) + algebraic(move.to);
        return output;
    }
    // parses all of the decorators out of a SAN string
    function stripped_iccs(move) {
        return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '');
    }
    function king_attacked(us) {
        let square = kings[us];
        let them = swap_color(us);
        let i, len, sq;
        // knight
        for(i = 0, len = PIECE_OFFSETS[KNIGHT].length; i < len; ++i){
            sq = square + PIECE_OFFSETS[KNIGHT][i];
            if (board[sq] != null && !out_of_board(sq) && board[sq].color === them && board[sq].type === KNIGHT && !hobbling_horse_leg(sq, i < 4 ? 3 - i : 11 - i)) return true;
        }
        // king, rook, cannon
        for(i = 0, len = PIECE_OFFSETS[ROOK].length; i < len; ++i){
            let offset = PIECE_OFFSETS[ROOK][i];
            let crossed = false;
            for(sq = square + offset; !out_of_board(sq); sq += offset){
                let piece = board[sq];
                if (piece != null) {
                    if (piece.color === them) {
                        if (crossed) {
                            if (piece.type === CANNON) return true;
                        } else {
                            if (piece.type === ROOK || piece.type === KING) return true;
                        }
                    }
                    if (crossed) break;
                    else crossed = true;
                }
            }
        }
        // pawn
        for(i = 0, len = PAWN_OFFSETS[them].length; i < len; ++i){
            sq = square - PAWN_OFFSETS[them][i];
            if (board[sq] != null && !out_of_board(sq) && board[sq].color === them && board[sq].type === PAWN) return true;
        }
        return false;
    }
    function in_check() {
        return king_attacked(turn);
    }
    function in_checkmate() {
        return in_check() && generate_moves().length === 0;
    }
    function in_stalemate() {
        return !in_check() && generate_moves().length === 0;
    }
    function insufficient_material() {
        // TODO: more cases
        let pieces = {}, piece;
        let num_pieces = 0;
        for(let sq in SQUARES){
            if (SQUARES.hasOwnProperty(sq)) {
                piece = board[SQUARES[sq]];
                if (piece) {
                    pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
                    num_pieces++;
                }
            }
        }
        /* k vs. k */ if (num_pieces === 2) return true;
        else if (typeof pieces[KNIGHT] === 'undefined' && typeof pieces[ROOK] === 'undefined' && typeof pieces[CANNON] === 'undefined' && typeof pieces[PAWN] === 'undefined') return true;
        return false;
    }
    function in_threefold_repetition() {
        /* TODO: while this function is fine for casual use, a better
     * implementation would use a Zobrist key (instead of FEN). the
     * Zobrist key would be maintained in the make_move/undo_move functions,
     * avoiding the costly that we do below.
     */ let moves = [], move;
        let positions = {};
        let repetition = false;
        while(true){
            move = undo_move();
            if (!move) break;
            moves.push(move);
        }
        while(true){
            /* remove the last four fields in the FEN string, they're not needed
       * when checking for draw by rep */ let fen = generate_fen().split(' ').slice(0, 2).join(' ');
            /* has the position occurred three or move times */ positions[fen] = fen in positions ? positions[fen] + 1 : 1;
            if (positions[fen] >= 3) {
                repetition = true;
            }
            if (!moves.length) {
                break;
            }
            make_move(moves.pop());
        }
        return repetition;
    }
    function push(list, move) {
        list.push({
            move: move,
            kings: {
                b: kings.b,
                r: kings.r
            },
            turn: turn,
            half_moves: half_moves,
            move_number: move_number
        });
    }
    function make_move(move) {
        push(history, move);
        // if king was captured
        if (board[move.to] != null && board[move.to].type === KING) kings[board[move.to].color] = EMPTY;
        board[move.to] = board[move.from];
        board[move.from] = null;
        /* if we moved the king */ if (board[move.to].type === KING) {
            kings[board[move.to].color] = move.to;
        }
        /* reset the 60 move counter if a piece is captured */ if (move.flags & BITS.CAPTURE) {
            half_moves = 0;
        } else {
            half_moves++;
        }
        if (turn === BLACK) {
            move_number++;
        }
        turn = swap_color(turn);
    }
    function set_move(old, undo = true) {
        if (old == null) {
            return null;
        }
        const move = old.move;
        kings = old.kings;
        turn = old.turn;
        half_moves = old.half_moves;
        move_number = old.move_number;
        board[move.from] = board[move.to];
        board[move.from].type = move.piece;
        board[move.to] = null;
        if ((move.flags & BITS.CAPTURE) > 0 && undo) {
            board[move.to] = {
                type: move.captured,
                color: swap_color(turn)
            };
        }
        return move;
    }
    function undo_move() {
        return set_move(history.pop());
    }
    function redo_move() {
        return set_move(futures.pop(), false);
    }
    /* this function is used to uniquely identify ambiguous moves */ function get_disambiguator(move, sloppy) {
        const moves = generate_moves({
            legal: !sloppy
        });
        const from = move.from;
        const to = move.to;
        const piece = move.piece;
        let ambiguities = 0;
        let same_rank = 0;
        let same_file = 0;
        for(let i = 0, len = moves.length; i < len; i++){
            let ambig_from = moves[i].from;
            let ambig_to = moves[i].to;
            let ambig_piece = moves[i].piece;
            /* if a move of the same piece type ends on the same to square, we'll
       * need to add a disambiguator to the algebraic notation
       */ if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
                ambiguities++;
                if (rank(from) === rank(ambig_from)) {
                    same_rank++;
                }
                if (file(from) === file(ambig_from)) {
                    same_file++;
                }
            }
        }
        if (ambiguities > 0) {
            /* if there exists a similar moving piece on the same rank and file as
       * the move in question, use the square as the disambiguator
       */ if (same_rank > 0 && same_file > 0) {
                return algebraic(from);
            } else if (same_file > 0) {
                /* if the moving piece rests on the same file, use the rank symbol as the
         * disambiguator
         */ return algebraic(from).charAt(1);
            } else {
                /* else use the file symbol */ return algebraic(from).charAt(0);
            }
        }
        return '';
    }
    function ascii() {
        let s = '   +---------------------------+\n';
        for(let i = SQUARES.a9; i <= SQUARES.i0; i++){
            /* display the rank */ if (file(i) === 0) {
                s += ' ' + '9876543210'[rank(i)] + ' |';
            }
            /* empty piece */ if (board[i] == null) {
                s += ' . ';
            } else {
                let piece = board[i].type;
                let color = board[i].color;
                let symbol = color === RED ? piece.toUpperCase() : piece.toLowerCase();
                s += ' ' + symbol + ' ';
            }
            if (i & 0x08) {
                s += '|\n';
                i += 7;
            }
        }
        s += '   +---------------------------+\n';
        s += '     a  b  c  d  e  f  g  h  i\n';
        return s;
    }
    // convert a move from Internet Chinese Chess Server (ICCS) to 0x9a coordinates
    function move_from_iccs(move, sloppy) {
        // strip off any move decorations: e.g Nf3+?!
        let clean_move = stripped_iccs(move);
        // if we're using the sloppy parser run a regex to grab piece, to, and from
        // this should parse invalid ICCS like: h2e2, H7-E7
        let matches = clean_move.match(/([a-iA-I][0-9])-?([a-iA-I][0-9])/);
        let piece, from, to;
        // TODO: support sloppy (must integrate with WXF)
        if (sloppy) {
            if (matches) {
                piece = matches[1];
                from = matches[2];
                to = matches[3];
            }
        }
        let moves = generate_moves();
        for(let i = 0, len = moves.length; i < len; i++){
            // try the strict parser first, then the sloppy parser if requested by the user
            if (clean_move === stripped_iccs(move_to_iccs(moves[i])) || sloppy && clean_move === stripped_iccs(move_to_iccs(moves[i], true))) {
                return moves[i];
            } else {
                if (matches && (!piece || piece.toLowerCase() === moves[i].piece) && SQUARES[from] === moves[i].from && SQUARES[to] === moves[i].to) {
                    return moves[i];
                }
            }
        }
        return null;
    }
    /*****************************************************************************
   * UTILITY FUNCTIONS
   ****************************************************************************/ function rank(i) {
        return i >> 4;
    }
    function file(i) {
        return i & 0x0f;
    }
    function algebraic(i) {
        const f = file(i), r = rank(i);
        return 'abcdefghi'.substring(f, f + 1) + '9876543210'.substring(r, r + 1);
    }
    function swap_color(c) {
        return c === RED ? BLACK : RED;
    }
    function is_digit(c) {
        return '0123456789'.indexOf(c) !== -1;
    }
    function crossed_river(p, c) {
        return c === RED ? rank(p) < 5 : rank(p) > 4;
    }
    function out_of_board(square) {
        return square < 0 || rank(square) > 9 || file(square) > 8;
    }
    function out_of_place(piece, square, color) {
        // K, A, B, P
        let side = {};
        if (piece === PAWN) {
            side = [
                0,
                2,
                4,
                6,
                8
            ];
            if (color === RED) {
                return rank(square) > 6 || rank(square) > 4 && side.indexOf(file(square)) === -1;
            } else {
                return rank(square) < 3 || rank(square) < 5 && side.indexOf(file(square)) === -1;
            }
        } else if (piece === BISHOP) {
            // prettier-ignore
            side[RED] = [
                0x92,
                0x96,
                0x70,
                0x74,
                0x78,
                0x52,
                0x56
            ];
            side[BLACK] = [
                0x02,
                0x06,
                0x20,
                0x24,
                0x28,
                0x42,
                0x46
            ];
        } else if (piece === ADVISER) {
            // prettier-ignore
            side[RED] = [
                0x93,
                0x95,
                0x84,
                0x73,
                0x75
            ];
            side[BLACK] = [
                0x03,
                0x05,
                0x14,
                0x23,
                0x25
            ];
        } else if (piece === KING) {
            // prettier-ignore
            side[RED] = [
                0x93,
                0x94,
                0x95,
                0x83,
                0x84,
                0x85,
                0x73,
                0x74,
                0x75
            ];
            side[BLACK] = [
                0x03,
                0x04,
                0x05,
                0x13,
                0x14,
                0x15,
                0x23,
                0x24,
                0x25
            ];
        } else {
            // C, R, N
            return out_of_board(square);
        }
        return side[color].indexOf(square) === -1;
    }
    function hobbling_horse_leg(square, index) {
        const orientation = [
            -0x10,
            0x10,
            -0x01,
            0x01
        ];
        return board[square + orientation[Math.floor(index / 2)]] != null;
    }
    function blocking_elephant_eye(square, index) {
        const orientation = [
            -0x10 - 0x01,
            0x10 + 0x01,
            0x10 - 0x01,
            -0x10 + 0x01
        ];
        return board[square + orientation[index]] != null;
    }
    /* pretty = external move object */ function make_pretty(ugly_move) {
        let move = clone(ugly_move);
        move.iccs = move_to_iccs(move, false);
        move.to = algebraic(move.to);
        move.from = algebraic(move.from);
        move.piece = turn === RED ? move.piece.toUpperCase() : move.piece;
        let flags = '';
        for(let flag in BITS){
            if ((BITS[flag] & move.flags) > 0) {
                flags += FLAGS[flag];
            }
        }
        move.flags = flags;
        return move;
    }
    function clone(obj) {
        let dupe = obj instanceof Array ? [] : {};
        for(let property in obj){
            if (typeof property === 'object') {
                dupe[property] = clone(obj[property]);
            } else {
                dupe[property] = obj[property];
            }
        }
        return dupe;
    }
    function trim(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
    /*****************************************************************************
   * DEBUGGING UTILITIES
   ****************************************************************************/ function perft(depth) {
        const moves = generate_moves({
            legal: false
        });
        let nodes = 0;
        for(let i = 0, len = moves.length; i < len; i++){
            make_move(moves[i]);
            if (!king_attacked(turn)) {
                if (depth - 1 > 0) {
                    let child_nodes = perft(depth - 1);
                    nodes += child_nodes;
                } else {
                    nodes++;
                }
            }
            undo_move();
        }
        return nodes;
    }
    return {
        /***************************************************************************
     * PUBLIC CONSTANTS (is there a better way to do this?)
     **************************************************************************/ RED: RED,
        BLACK: BLACK,
        PAWN: PAWN,
        CANNON: CANNON,
        ROOK: ROOK,
        KNIGHT: KNIGHT,
        BISHOP: BISHOP,
        ADVISER: ADVISER,
        KING: KING,
        SQUARES: function() {
            /* from the ECMA-262 spec (section 12.6.4):
       * "The mechanics of enumerating the properties ... is
       * implementation dependent"
       * so: for (let sq in SQUARES) { keys.push(sq); } might not be
       * ordered correctly
       */ let keys = [];
            for(let i = SQUARES.a9; i <= SQUARES.i0; i++){
                if (file(i) === 0x09) {
                    i += 6;
                    continue;
                }
                keys.push(algebraic(i));
            }
            return keys;
        }(),
        FLAGS: FLAGS,
        /***************************************************************************
     * PUBLIC API
     **************************************************************************/ load: function(fen) {
            return load(fen);
        },
        reset: function() {
            return reset();
        },
        moves: function(options) {
            /* The internal representation of a xiangqi move is in 0x9a format, and
       * not meant to be human-readable.  The code below converts the 0x9a
       * square coordinates to algebraic coordinates.  It also prunes an
       * unnecessary move keys resulting from a verbose call.
       */ const ugly_moves = generate_moves(options);
            let moves = [];
            for(let i = 0, len = ugly_moves.length; i < len; i++){
                // does the user want a full move object (most likely not), or just ICCS
                if (typeof options !== 'undefined' && 'verbose' in options && options.verbose) {
                    moves.push(make_pretty(ugly_moves[i]));
                } else {
                    moves.push(move_to_iccs(ugly_moves[i], false));
                }
            }
            return moves;
        },
        in_check: function() {
            return in_check();
        },
        in_checkmate: function() {
            return in_checkmate();
        },
        in_stalemate: function() {
            return in_stalemate();
        },
        in_draw: function() {
            return half_moves >= 120 || // Just a temporary workaround, should be refined in the future.
            in_threefold_repetition() || insufficient_material();
        },
        insufficient_material: function() {
            return insufficient_material();
        },
        in_threefold_repetition: function() {
            return in_threefold_repetition();
        },
        game_over: function() {
            return half_moves >= 120 || in_checkmate() || in_stalemate() || insufficient_material() || in_threefold_repetition() || kings[swap_color(turn)] === EMPTY;
        },
        validate_fen: function(fen) {
            return validate_fen(fen);
        },
        fen: function() {
            return generate_fen();
        },
        board: function() {
            let output = [], row = [];
            for(let i = SQUARES.a9; i <= SQUARES.i0; i++){
                if (board[i] == null) {
                    row.push(null);
                } else {
                    row.push({
                        type: board[i].type,
                        color: board[i].color
                    });
                }
                if (i & 0x08) {
                    output.push(row);
                    row = [];
                    i += 7;
                }
            }
            return output;
        },
        pgn: function(options) {
            /* using the specification from http://www.xqbase.com/protocol/cchess_pgn.htm
       * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
       */ let newline = typeof options === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\n';
            let max_width = typeof options === 'object' && typeof options.max_width === 'number' ? options.max_width : 0;
            let result = [];
            let header_exists = false;
            let i;
            /* add the PGN header headerrmation */ for(i in header){
                /* TODO: order of enumerated properties in header object is not guaranteed,
             see ECMA-262 spec (section 12.6.4)
         */ result.push('[' + i + ' "' + header[i] + '"]' + newline);
                header_exists = true;
            }
            if (header_exists && history.length) {
                result.push(newline);
            }
            /* pop all of history onto reversed_history */ let reversed_history = [];
            while(history.length > 0){
                reversed_history.push(undo_move());
            }
            let moves = [];
            let move_string = '';
            /* build the list of moves.  a move_string looks like: "3. b2b6 b9c7" */ while(reversed_history.length > 0){
                let move = reversed_history.pop();
                /* if the position started with black to move, start PGN with 1. ... */ if (!history.length && move.color === 'b') {
                    move_string = move_number + '. ...';
                } else if (move.color !== 'b') {
                    /* store the previous generated move_string if we have one */ if (move_string.length) {
                        moves.push(move_string);
                    }
                    move_string = move_number + '.';
                }
                move_string = move_string + ' ' + move_to_iccs(move, false);
                make_move(move);
            }
            /* are there any other leftover moves? */ if (move_string.length) {
                moves.push(move_string);
            }
            /* is there a result? */ if (typeof header.Result !== 'undefined') {
                moves.push(header.Result);
            }
            /* history should be back to what is was before we started generating PGN,
       * so join together moves
       */ if (max_width === 0) {
                return result.join('') + moves.join(' ');
            }
            /* wrap the PGN output at max_width */ let current_width = 0;
            for(i = 0; i < moves.length; i++){
                /* if the current move will push past max_width */ if (current_width + moves[i].length > max_width && i !== 0) {
                    /* don't end the line with whitespace */ if (result[result.length - 1] === ' ') {
                        result.pop();
                    }
                    result.push(newline);
                    current_width = 0;
                } else if (i !== 0) {
                    result.push(' ');
                    current_width++;
                }
                result.push(moves[i]);
                current_width += moves[i].length;
            }
            return result.join('');
        },
        load_pgn: function(pgn, options) {
            // allow the user to specify the sloppy move parser to work around over
            // disambiguation bugs in Fritz and Chessbase
            let sloppy = typeof options !== 'undefined' && 'sloppy' in options ? options.sloppy : false;
            function mask(str) {
                return str.replace(/\\/g, '\\');
            }
            function has_keys(object) {
                for(let key in object){
                    if (object.hasOwnProperty(key)) return true;
                }
                return false;
            }
            function parse_pgn_header(header, options) {
                let newline_char = typeof options === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\r?\n';
                let header_obj = {};
                let headers = header.split(new RegExp(mask(newline_char)));
                let key = '';
                let value = '';
                for(let i = 0; i < headers.length; i++){
                    key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*]$/, '$1');
                    value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"]$/, '$1');
                    if (trim(key).length > 0) {
                        header_obj[key] = value;
                    }
                }
                return header_obj;
            }
            const newline_char = typeof options === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\r?\n';
            // RegExp to split header.
            // With default newline_char, will equal: /^(?:\s)*(((?:\r?\n)*\[[^\]]+\])+)/
            const header_regex = new RegExp('^(?:\\s)*(((?:' + mask(newline_char) + ')*\\[[^\\]]+\\])+)');
            // If no header given, begin with moves.
            const header_string = header_regex.test(pgn) ? header_regex.exec(pgn)[1] : '';
            // Put the board in the starting position
            reset();
            /* parse PGN header */ const headers = parse_pgn_header(header_string, options);
            for(let key in headers){
                if (headers.hasOwnProperty(key)) set_header([
                    key,
                    headers[key]
                ]);
            }
            /* load the starting position indicated by [FEN position] */ if ('FEN' in headers) {
                if (!load(headers.FEN, true)) {
                    // second argument to load: don't clear the headers
                    console.warn('load header FEN failed!');
                    return false;
                }
            }
            /* delete header to get the moves */ let ms = pgn.replace(header_string, '').replace(new RegExp(mask(newline_char), 'g'), ' ');
            /* delete comments */ ms = ms.replace(/({[^}]+})+?/g, '');
            /* delete recursive annotation variations */ const rav_regex = /(\([^()]+\))+?/g;
            while(rav_regex.test(ms)){
                ms = ms.replace(rav_regex, '');
            }
            /* delete move numbers */ ms = ms.replace(/\d+\.(\.\.)?/g, '');
            /* delete ... indicating black to move */ ms = ms.replace(/\.\.\./g, '');
            /* delete numeric annotation glyphs */ ms = ms.replace(/\$\d+/g, '');
            /* trim and get array of moves */ let moves = trim(ms).split(new RegExp(/\s+/));
            /* delete empty entries */ moves = moves.join(',').replace(/,,+/g, ',').split(',');
            let move = '';
            for(let half_move = 0; half_move < moves.length - 1; half_move++){
                move = move_from_iccs(moves[half_move], sloppy);
                /* move not possible! (don't clear the board to examine to show the
         * latest valid position)
         */ if (move == null) {
                    console.warn(`impossible move: ${moves[half_move]}!\n${ascii()}`);
                    return false;
                } else {
                    make_move(move);
                }
            }
            /* examine last move */ move = moves[moves.length - 1];
            if (POSSIBLE_RESULTS.indexOf(move) > -1) {
                if (has_keys(header) && typeof header.Result === 'undefined') {
                    set_header([
                        'Result',
                        move
                    ]);
                }
            } else {
                move = move_from_iccs(move, sloppy);
                if (move == null) {
                    console.warn(`impossible last move: ${moves[moves.length - 1]}!\n${ascii()}`);
                    return false;
                } else {
                    make_move(move);
                }
            }
            return true;
        },
        header: function() {
            return set_header(arguments);
        },
        ascii: function() {
            return ascii();
        },
        turn: function() {
            return turn;
        },
        move: function(move, options) {
            /* The move function can be called with in the following parameters:
       *
       * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
       *
       * .move({ from: 'h7', <- where the 'move' is a move object (additional
       *         to :'h8',      fields are ignored)
       *      })
       */ // allow the user to specify the sloppy move parser to work around over
            // disambiguation bugs in Fritz and Chessbase
            const sloppy = typeof options !== 'undefined' && 'sloppy' in options ? options.sloppy : false;
            let move_obj = null;
            if (typeof move === 'string') {
                move_obj = move_from_iccs(move, sloppy);
            } else if (typeof move === 'object') {
                let moves = generate_moves();
                /* convert the pretty move object to an ugly move object */ for(let i = 0, len = moves.length; i < len; i++){
                    if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && !('' in moves[i])) {
                        move_obj = moves[i];
                        break;
                    }
                }
            }
            /* failed to find move */ if (!move_obj) {
                return null;
            }
            /* need to make a copy of move because we can't generate SAN after the
       * move is made
       */ const pretty_move = make_pretty(move_obj);
            make_move(move_obj);
            futures = [];
            return pretty_move;
        },
        undo: function() {
            push(futures, null);
            const move = undo_move();
            if (move) {
                const pretty_move = make_pretty(move);
                [move.from, move.to] = [
                    move.to,
                    move.from
                ];
                futures[futures.length - 1].move = move;
                return pretty_move;
            } else {
                futures.pop();
                return null;
            }
        },
        redo: function() {
            push(history, null);
            const move = redo_move();
            if (move) {
                [move.from, move.to] = [
                    move.to,
                    move.from
                ];
                history[history.length - 1].move = move;
                return make_pretty(move);
            } else {
                history.pop();
                return null;
            }
        },
        clear: function() {
            return clear();
        },
        put: function(piece, square) {
            return put(piece, square);
        },
        get: function(square) {
            return get(square);
        },
        remove: function(square) {
            return remove(square);
        },
        perft: function(depth) {
            return perft(depth);
        },
        history: function(options) {
            let reversed_history = [];
            let move_history = [];
            let verbose = typeof options !== 'undefined' && 'verbose' in options && options.verbose;
            while(history.length > 0){
                reversed_history.push(undo_move());
            }
            while(reversed_history.length > 0){
                let move = reversed_history.pop();
                if (verbose) {
                    move_history.push(make_pretty(move));
                } else {
                    move_history.push(move_to_iccs(move));
                }
                make_move(move);
            }
            return move_history;
        }
    };
};
/* harmony default export */ const xiangqi_core = (Xiangqi);


;// ./src/lib/xiangqi/xiangqi-engine.ts

const XIANGQI_DEFAULT_FEN = 'rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r - - 0 1';
function getFactory() {
    const candidate = xiangqi_core;
    if (typeof candidate === 'function') {
        return candidate;
    }
    if (candidate && typeof candidate === 'object') {
        const inner = candidate.Xiangqi ?? candidate.default;
        if (typeof inner === 'function') {
            return inner;
        }
    }
    throw new Error('xiangqi.js: Xiangqi factory not found');
}
function createXiangqi(fen) {
    return getFactory()(fen);
}

;// ./src/lib/xiangqi/legal-moves.ts

function getLegalTargetsFromSquare(fen, square) {
    try {
        const game = createXiangqi(fen);
        const moves = game.moves({
            square
        });
        return moves.map((iccs)=>iccs.slice(2, 4));
    } catch  {
        return [];
    }
}
function getSideToMove(fen) {
    try {
        const side = createXiangqi(fen).turn();
        return side === 'r' || side === 'b' ? side : null;
    } catch  {
        return null;
    }
}
function pieceBelongsToSide(pieceCode, side) {
    return side === 'r' ? pieceCode.startsWith('r') : pieceCode.startsWith('b');
}
function lastMoveFromIccs(iccs) {
    const normalized = iccs.trim().toLowerCase();
    if (!/^[a-i][0-9][a-i][0-9]$/.test(normalized)) {
        return null;
    }
    return {
        from: normalized.slice(0, 2),
        to: normalized.slice(2, 4)
    };
}

;// ./src/components/xiangqi/XiangqiBoard.tsx
/* __next_internal_client_entry_do_not_use__ XiangqiBoard auto */ 






const DEFAULT_BOARD_THEME = '/js/xiangqiboard/img/xiangqiboards/wikimedia/xiangqiboard.svg';
const DEFAULT_PIECE_THEME = '/js/xiangqiboard/img/xiangqipieces/wikimedia/{piece}.svg';
function pieceImageUrl(theme, pieceCode) {
    return theme.replace('{piece}', pieceCode);
}
function getDisplaySquare(fileIndex, rankIndex, orientation) {
    const file = orientation === 'red' ? XIANGQI_FILES[fileIndex] : XIANGQI_FILES[XIANGQI_FILES.length - 1 - fileIndex];
    const rank = orientation === 'red' ? XIANGQI_RANKS[rankIndex] : XIANGQI_RANKS[XIANGQI_RANKS.length - 1 - rankIndex];
    return `${file}${rank}`;
}
function squareToCoords(square, orientation, boardWidth, boardHeight) {
    const file = square[0];
    const rank = parseInt(square.slice(1), 10);
    let fileIndex = XIANGQI_FILES.indexOf(file);
    let rankIndex = XIANGQI_RANKS.indexOf(rank);
    if (fileIndex < 0 || rankIndex < 0) {
        return {
            x: 0,
            y: 0
        };
    }
    if (orientation === 'black') {
        fileIndex = XIANGQI_FILES.length - 1 - fileIndex;
        rankIndex = XIANGQI_RANKS.length - 1 - rankIndex;
    }
    const cellWidth = boardWidth / 9;
    const cellHeight = boardHeight / 10;
    return {
        x: (fileIndex + 0.5) * cellWidth,
        y: (rankIndex + 0.5) * cellHeight
    };
}
function positionWithoutSquare(position, square) {
    if (!position[square]) return position;
    const next = {
        ...position
    };
    delete next[square];
    return next;
}
const StaticPiece = /*#__PURE__*/ react.memo(function StaticPiece({ square, pieceCode, orientation, boardWidth, boardHeight, pieceTheme }) {
    const { x, y } = squareToCoords(square, orientation, boardWidth, boardHeight);
    const width = boardWidth / 9 * 0.88;
    const height = boardHeight / 10 * 0.88;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        src: pieceImageUrl(pieceTheme, pieceCode),
        alt: "",
        draggable: false,
        className: "pointer-events-none absolute z-[1] object-contain",
        style: {
            width,
            height,
            left: 0,
            top: 0,
            transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
        }
    });
});
const MovingPiece = /*#__PURE__*/ react.memo(function MovingPiece({ transition, orientation, boardWidth, boardHeight, pieceTheme, durationMs }) {
    const from = squareToCoords(transition.from, orientation, boardWidth, boardHeight);
    const to = squareToCoords(transition.to, orientation, boardWidth, boardHeight);
    const width = boardWidth / 9 * 0.88;
    const height = boardHeight / 10 * 0.88;
    const [atTarget, setAtTarget] = react.useState(false);
    react.useLayoutEffect(()=>{
        setAtTarget(false);
        const frame = window.requestAnimationFrame(()=>{
            window.requestAnimationFrame(()=>setAtTarget(true));
        });
        return ()=>window.cancelAnimationFrame(frame);
    }, [
        transition.from,
        transition.to,
        transition.pieceCode
    ]);
    const point = atTarget ? to : from;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        src: pieceImageUrl(pieceTheme, transition.pieceCode),
        alt: "",
        draggable: false,
        className: "pointer-events-none absolute z-[2] object-contain",
        style: {
            width,
            height,
            left: 0,
            top: 0,
            transform: `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`,
            transition: atTarget ? `transform ${durationMs}ms ease-out` : 'none',
            willChange: 'transform'
        }
    });
});
function XiangqiBoard({ fen, boardWidth = 405, orientation = 'red', interactive = false, showCoordinates = false, showAnimations = true, showLegalMoves = true, lastMove = null, animationDurationInMs = 120, boardTheme = DEFAULT_BOARD_THEME, pieceTheme = DEFAULT_PIECE_THEME, className, onFenChange }) {
    const boardHeight = Math.round(boardWidth * 10 / 9);
    const [selectedSquare, setSelectedSquare] = react.useState(null);
    const [legalTargets, setLegalTargets] = react.useState([]);
    const committedFenRef = react.useRef(fen);
    const [renderFen, setRenderFen] = react.useState(fen);
    const [activeTransition, setActiveTransition] = react.useState(null);
    const renderPosition = react.useMemo(()=>fenToBoardPosition(renderFen), [
        renderFen
    ]);
    const visiblePosition = react.useMemo(()=>{
        if (!activeTransition) return renderPosition;
        return positionWithoutSquare(renderPosition, activeTransition.from);
    }, [
        renderPosition,
        activeTransition
    ]);
    react.useEffect(()=>{
        const committed = committedFenRef.current;
        if (fen === committed) {
            setActiveTransition(null);
            setRenderFen(fen);
            return;
        }
        const transition = detectSingleMoveBetweenFens(committed, fen);
        const canAnimate = Boolean(transition && showAnimations && animationDurationInMs > 0);
        if (!canAnimate || !transition) {
            committedFenRef.current = fen;
            setRenderFen(fen);
            setActiveTransition(null);
            return;
        }
        setRenderFen(committed);
        setActiveTransition(transition);
        const timer = window.setTimeout(()=>{
            committedFenRef.current = fen;
            setRenderFen(fen);
            setActiveTransition(null);
        }, animationDurationInMs);
        return ()=>{
            window.clearTimeout(timer);
            setActiveTransition(null);
        };
    }, [
        fen,
        showAnimations,
        animationDurationInMs
    ]);
    const handleSquareClick = react.useCallback((square)=>{
        if (!interactive || !onFenChange) return;
        const fenForRules = committedFenRef.current;
        const sideToMove = getSideToMove(fenForRules);
        const piece = visiblePosition[square] ?? renderPosition[square];
        const selectSquare = (nextSquare)=>{
            setSelectedSquare(nextSquare);
            if (showLegalMoves) {
                setLegalTargets(getLegalTargetsFromSquare(fenForRules, nextSquare));
            } else {
                setLegalTargets([]);
            }
        };
        const clearSelection = ()=>{
            setSelectedSquare(null);
            setLegalTargets([]);
        };
        if (!selectedSquare) {
            if (piece && sideToMove && pieceBelongsToSide(piece, sideToMove)) {
                selectSquare(square);
            }
            return;
        }
        if (selectedSquare === square) {
            clearSelection();
            return;
        }
        const game = createXiangqi(fenForRules);
        const iccs = `${selectedSquare}${square}`;
        const move = game.move({
            from: selectedSquare,
            to: square
        }, {
            sloppy: true
        }) ?? game.move(iccs, {
            sloppy: true
        });
        clearSelection();
        if (move) {
            onFenChange(game.fen());
        } else if (piece && sideToMove && pieceBelongsToSide(piece, sideToMove)) {
            selectSquare(square);
        }
    }, [
        interactive,
        onFenChange,
        visiblePosition,
        renderPosition,
        selectedSquare,
        showLegalMoves
    ]);
    react.useEffect(()=>{
        setSelectedSquare(null);
        setLegalTargets([]);
    }, [
        fen
    ]);
    const clickCells = react.useMemo(()=>{
        const cells = [];
        for(let rankIndex = 0; rankIndex < 10; rankIndex++){
            for(let fileIndex = 0; fileIndex < 9; fileIndex++){
                const square = getDisplaySquare(fileIndex, rankIndex, orientation);
                const isSelected = selectedSquare === square;
                const isLegalTarget = showLegalMoves && legalTargets.includes(square);
                const isLastMoveSquare = lastMove && (lastMove.from === square || lastMove.to === square);
                cells.push(/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    type: "button",
                    className: (0,utils.cn)('relative flex items-center justify-center border-0 bg-transparent p-0', interactive && 'cursor-pointer hover:bg-accent/30', !isSelected && isLastMoveSquare && last_move_highlight/* lastMoveSquareGlowClassName */.D, isSelected && 'bg-accent/50 ring-2 ring-ring ring-inset', isLegalTarget && 'after:pointer-events-none after:absolute after:z-[1] after:size-[26%] after:min-h-2 after:min-w-2 after:rounded-full after:bg-primary after:content-[""]'),
                    onClick: ()=>handleSquareClick(square),
                    disabled: !interactive,
                    "aria-label": isLegalTarget ? `${square} legal move` : square
                }, square));
            }
        }
        return cells;
    }, [
        orientation,
        interactive,
        selectedSquare,
        legalTargets,
        showLegalMoves,
        lastMove,
        visiblePosition,
        handleSquareClick
    ]);
    const staticPieces = react.useMemo(()=>Object.entries(visiblePosition).map(([square, pieceCode])=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StaticPiece, {
                square: square,
                pieceCode: pieceCode,
                orientation: orientation,
                boardWidth: boardWidth,
                boardHeight: boardHeight,
                pieceTheme: pieceTheme
            }, square)), [
        visiblePosition,
        orientation,
        boardWidth,
        boardHeight,
        pieceTheme
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)('relative shrink-0 overflow-hidden', className),
        style: {
            width: boardWidth,
            height: boardHeight
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: `url(${boardTheme})`
                },
                "aria-hidden": true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute inset-0 z-[1]",
                "aria-hidden": true,
                children: [
                    staticPieces,
                    activeTransition ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MovingPiece, {
                        transition: activeTransition,
                        orientation: orientation,
                        boardWidth: boardWidth,
                        boardHeight: boardHeight,
                        pieceTheme: pieceTheme,
                        durationMs: animationDurationInMs
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute inset-0 z-[3] grid",
                style: {
                    gridTemplateColumns: 'repeat(9, 1fr)',
                    gridTemplateRows: 'repeat(10, 1fr)'
                },
                children: clickCells
            }),
            showCoordinates ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "pointer-events-none absolute bottom-0 left-0 right-0 z-[4] flex justify-around px-[2%] pb-0.5 text-[10px] text-muted-foreground",
                        children: (orientation === 'red' ? XIANGQI_FILES : [
                            ...XIANGQI_FILES
                        ].reverse()).map((f)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "w-[11%] text-center",
                                children: f
                            }, f))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "pointer-events-none absolute bottom-0 left-0 top-0 z-[4] flex flex-col justify-around py-[2%] pl-0.5 text-[10px] text-muted-foreground",
                        children: (orientation === 'red' ? XIANGQI_RANKS : [
                            ...XIANGQI_RANKS
                        ].reverse()).map((r)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "h-[10%] leading-none",
                                children: r
                            }, r))
                    })
                ]
            }) : null
        ]
    });
}

;// ./src/lib/xiangqi/iccs-to-chinese.ts


const iccs_to_chinese_FILES = 'abcdefghi';
const CN_DIGITS = [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九'
];
function fileIndex(file) {
    return iccs_to_chinese_FILES.indexOf(file);
}
/** File number 1–9 from the moving side's right flank. */ function fileNumberFromRight(file) {
    const idx = fileIndex(file);
    if (idx < 0) return 0;
    return 9 - idx;
}
function formatFileLabel(file, side) {
    const num = fileNumberFromRight(file);
    if (num < 1 || num > 9) return file;
    return side === 'r' ? CN_DIGITS[num - 1] : String(num);
}
function formatStepLabel(steps, side) {
    if (steps < 1 || steps > 9) return String(steps);
    return side === 'r' ? CN_DIGITS[steps - 1] : String(steps);
}
function pieceSide(piece) {
    return piece === piece.toUpperCase() ? 'r' : 'b';
}
function pieceName(piece, side) {
    const key = piece.toLowerCase();
    if (side === 'r') {
        const map = {
            r: '车',
            n: '马',
            b: '相',
            a: '仕',
            k: '帅',
            c: '炮',
            p: '兵'
        };
        return map[key] ?? piece;
    }
    const map = {
        r: '车',
        n: '马',
        b: '象',
        a: '士',
        k: '将',
        c: '炮',
        p: '卒'
    };
    return map[key] ?? piece;
}
function isKnightBishopOrAdviser(piece) {
    const key = piece.toLowerCase();
    return key === 'n' || key === 'b' || key === 'a';
}
function isPawn(piece) {
    return piece.toLowerCase() === 'p';
}
function isAdvisorOrBishop(piece) {
    const key = piece.toLowerCase();
    return key === 'a' || key === 'b';
}
function isForward(side, fromRank, toRank) {
    return side === 'r' ? toRank > fromRank : toRank < fromRank;
}
function parseBoardEntry(code) {
    if (!code || code.length < 2) return null;
    return {
        side: code[0] === 'r' ? 'r' : 'b',
        letter: code[1].toLowerCase()
    };
}
function pieceAtSquare(board, square) {
    const code = board[square];
    if (!code) return null;
    const entry = parseBoardEntry(code);
    if (!entry) return null;
    return entry.side === 'r' ? entry.letter.toUpperCase() : entry.letter;
}
function rankOf(square) {
    return parseInt(square.slice(1), 10);
}
function fileOf(square) {
    return square[0];
}
/** Front-most square first (closer to the opponent). */ function sortFrontToBack(squares, side) {
    return [
        ...squares
    ].sort((a, b)=>{
        const rankA = rankOf(a);
        const rankB = rankOf(b);
        return side === 'r' ? rankB - rankA : rankA - rankB;
    });
}
function sameTypeSquares(board, side, letter) {
    const squares = [];
    for (const [square, code] of Object.entries(board)){
        const entry = parseBoardEntry(code);
        if (entry && entry.side === side && entry.letter === letter) {
            squares.push(square);
        }
    }
    return squares;
}
/** xqbase rule (3): two or more files each with 2+ pawns of the same color. */ function buildMultiFilePawnLabels(board, side) {
    const pawns = sameTypeSquares(board, side, 'p');
    const byFile = new Map();
    for (const square of pawns){
        const file = fileOf(square);
        const list = byFile.get(file) ?? [];
        list.push(square);
        byFile.set(file, list);
    }
    const crowdedFiles = Array.from(byFile.entries()).filter(([, list])=>list.length >= 2).sort((a, b)=>fileNumberFromRight(a[0]) - fileNumberFromRight(b[0]));
    if (crowdedFiles.length < 2) {
        return new Map();
    }
    const ordered = [];
    for (const [, list] of crowdedFiles){
        ordered.push(...sortFrontToBack(list, side));
    }
    const labels = new Map();
    ordered.forEach((square, index)=>{
        if (index < CN_DIGITS.length) {
            labels.set(square, CN_DIGITS[index]);
        }
    });
    return labels;
}
function sameFileLabels(count, isPawn) {
    if (count === 2) return [
        '前',
        '后'
    ];
    if (count === 3) return [
        '前',
        '中',
        '后'
    ];
    if (isPawn && count >= 4) {
        return CN_DIGITS.slice(0, count);
    }
    if (count >= 3) return [
        '前',
        '中',
        '后'
    ];
    return [];
}
function hasMultiFilePawnCrowding(board, side) {
    return buildMultiFilePawnLabels(board, side).size > 0;
}
function resolveDisambiguation(board, from, piece, side) {
    const letter = piece.toLowerCase();
    const peers = sameTypeSquares(board, side, letter);
    if (peers.length <= 1) {
        return {
            kind: 'none'
        };
    }
    if (isPawn(piece)) {
        const numbered = buildMultiFilePawnLabels(board, side);
        const numberedLabel = numbered.get(from);
        if (numberedLabel) {
            return {
                kind: 'numbered',
                label: numberedLabel
            };
        }
    }
    const sameFilePeers = peers.filter((square)=>fileOf(square) === fileOf(from));
    if (sameFilePeers.length <= 1) {
        return {
            kind: 'none'
        };
    }
    if (isAdvisorOrBishop(piece)) {
        return {
            kind: 'none'
        };
    }
    const ordered = sortFrontToBack(sameFilePeers, side);
    const labels = sameFileLabels(sameFilePeers.length, isPawn(piece));
    const index = ordered.indexOf(from);
    if (index < 0 || !labels[index]) {
        return {
            kind: 'none'
        };
    }
    const compressed = isPawn(piece) && hasMultiFilePawnCrowding(board, side) && sameFilePeers.length >= 2;
    return {
        kind: 'front-back',
        label: labels[index],
        compressed
    };
}
function formatMoveAction(move, side, omitStartFile) {
    const fromFile = move.from[0];
    const toFile = move.to[0];
    const fromRank = rankOf(move.from);
    const toRank = rankOf(move.to);
    const startFile = omitStartFile ? '' : formatFileLabel(fromFile, side);
    if (fromRank === toRank) {
        const destFile = formatFileLabel(toFile, side);
        return `${startFile}平${destFile}`;
    }
    if (fromFile === toFile) {
        const steps = Math.abs(toRank - fromRank);
        const dir = isForward(side, fromRank, toRank) ? '进' : '退';
        if (isKnightBishopOrAdviser(move.piece)) {
            const destFile = formatFileLabel(toFile, side);
            return `${startFile}${dir}${destFile}`;
        }
        const stepLabel = formatStepLabel(steps, side);
        return `${startFile}${dir}${stepLabel}`;
    }
    const dir = isForward(side, fromRank, toRank) ? '进' : '退';
    const destFile = formatFileLabel(toFile, side);
    return `${startFile}${dir}${destFile}`;
}
function formatChineseNotation(move, fenBefore) {
    const side = pieceSide(move.piece);
    const name = pieceName(move.piece, side);
    const board = fenBefore ? fenToBoardPosition(fenBefore) : {};
    const disambiguation = fenBefore ? resolveDisambiguation(board, move.from, move.piece, side) : {
        kind: 'none'
    };
    if (disambiguation.kind === 'numbered') {
        const action = formatMoveAction(move, side, true);
        return `${disambiguation.label}${name}${action}`;
    }
    if (disambiguation.kind === 'front-back') {
        if (disambiguation.compressed) {
            const action = formatMoveAction(move, side, false);
            return `${disambiguation.label}${action}`;
        }
        const action = formatMoveAction(move, side, true);
        return `${disambiguation.label}${name}${action}`;
    }
    const action = formatMoveAction(move, side, false);
    return `${name}${action}`;
}
function iccsToChineseNotation(iccs, fenBefore) {
    const normalized = iccs.trim().toLowerCase();
    if (!/^[a-i][0-9][a-i][0-9]$/.test(normalized)) {
        return iccs;
    }
    const from = normalized.slice(0, 2);
    const board = fenToBoardPosition(fenBefore);
    const piece = pieceAtSquare(board, from);
    if (!piece) return iccs;
    const game = createXiangqi(fenBefore);
    const move = game.move({
        from,
        to: normalized.slice(2, 4)
    }, {
        sloppy: true
    });
    if (!move) return iccs;
    return formatChineseNotation({
        from: move.from,
        to: move.to,
        piece
    }, fenBefore);
}
function buildMoveLabels(moves, fensByPly) {
    return moves.map((iccs, index)=>iccsToChineseNotation(iccs, fensByPly[index] ?? fensByPly[0]));
}

;// ./src/lib/xiangqi/parse-pgn-comments.ts
function stripPgnHeaders(pgn) {
    return pgn.replace(/^\s*(\[[^\]]+\]\s*)+/m, '').trim();
}
function tokenizeMovetext(movetext) {
    const tokens = [];
    let i = 0;
    const text = movetext;
    while(i < text.length){
        const ch = text[i];
        if (ch === '{') {
            const end = text.indexOf('}', i);
            if (end === -1) break;
            tokens.push({
                type: 'comment',
                value: text.slice(i + 1, end).trim()
            });
            i = end + 1;
            continue;
        }
        const slice = text.slice(i);
        const moveMatch = slice.match(/^[a-i][0-9][a-i][0-9]/i);
        if (moveMatch) {
            tokens.push({
                type: 'move',
                value: moveMatch[0].toLowerCase()
            });
            i += moveMatch[0].length;
            continue;
        }
        i += 1;
    }
    return tokens;
}
/**
 * Extract comments keyed by ply index (0 = starting position).
 * Comments immediately after a move attach to that move's resulting ply.
 */ function extractCommentsByPly(pgn) {
    const movetext = stripPgnHeaders(pgn);
    const tokens = tokenizeMovetext(movetext);
    const commentsByPly = [
        undefined
    ];
    let ply = 0;
    let pendingComment;
    for (const token of tokens){
        if (token.type === 'comment') {
            if (ply === 0 && commentsByPly.length === 1 && !commentsByPly[0]) {
                commentsByPly[0] = token.value;
            } else {
                pendingComment = token.value;
            }
            continue;
        }
        if (token.type === 'move') {
            ply += 1;
            while(commentsByPly.length <= ply){
                commentsByPly.push(undefined);
            }
            commentsByPly[ply] = pendingComment;
            pendingComment = undefined;
        }
    }
    return commentsByPly;
}

;// ./src/lib/xiangqi/parse-game.ts



function trimInput(text) {
    return text.trim();
}
function inferFormatFromSrc(src) {
    const lower = src.toLowerCase().split('?')[0]?.split('#')[0] ?? src;
    if (lower.endsWith('.pgn')) return 'pgn';
    if (lower.endsWith('.fen')) return 'fen';
    return null;
}
function inferFormatFromContent(text) {
    const trimmed = trimInput(text);
    if (trimmed.startsWith('[') || /\d+\.\s/.test(trimmed)) {
        return 'pgn';
    }
    return 'fen';
}
function loadFromFen(fen) {
    const normalized = trimInput(fen);
    const game = createXiangqi();
    const validation = game.validate_fen(normalized);
    if (!validation.valid) {
        return {
            ok: false,
            error: validation.error ?? 'Invalid FEN'
        };
    }
    if (!game.load(normalized)) {
        return {
            ok: false,
            error: 'Invalid FEN'
        };
    }
    const snapshot = {
        mode: 'fen',
        headers: {},
        moves: [],
        moveLabels: [],
        fensByPly: [
            game.fen()
        ],
        commentsByPly: [
            undefined
        ]
    };
    return {
        ok: true,
        snapshot
    };
}
function alignComments(extracted, plyCount) {
    const out = [];
    for(let i = 0; i <= plyCount; i++){
        out[i] = extracted[i];
    }
    return out;
}
function loadFromPgn(pgn) {
    const normalized = trimInput(pgn);
    if (!normalized) {
        return {
            ok: false,
            error: 'Empty PGN'
        };
    }
    const loaded = createXiangqi();
    const loadedOk = loaded.load_pgn(normalized, {
        sloppy: true
    });
    if (!loadedOk) {
        return {
            ok: false,
            error: 'Invalid PGN'
        };
    }
    const headers = {
        ...loaded.header()
    };
    const moves = loaded.history();
    const extractedComments = extractCommentsByPly(normalized);
    const startFen = headers.FEN?.trim() || XIANGQI_DEFAULT_FEN;
    try {
        const replay = createXiangqi(startFen);
        const fensByPly = [
            replay.fen()
        ];
        for (const iccs of moves){
            const result = replay.move(iccs, {
                sloppy: true
            });
            if (!result) {
                return {
                    ok: false,
                    error: 'Invalid PGN move sequence'
                };
            }
            fensByPly.push(replay.fen());
        }
        const commentsByPly = alignComments(extractedComments, fensByPly.length - 1);
        const moveLabels = buildMoveLabels(moves, fensByPly);
        const snapshot = {
            mode: 'pgn',
            headers,
            moves,
            moveLabels,
            fensByPly,
            commentsByPly
        };
        return {
            ok: true,
            snapshot
        };
    } catch  {
        return {
            ok: false,
            error: 'Invalid PGN'
        };
    }
}
function parseGameContent(content, format) {
    if (format === 'pgn') return loadFromPgn(content);
    return loadFromFen(content);
}
function formatHeaderSubtitle(headers) {
    const red = headers.Red?.trim();
    const black = headers.Black?.trim();
    if (red && black) return `${red} vs ${black}`;
    const event = headers.Event?.trim();
    return event || undefined;
}

;// ./src/lib/xiangqi/load-input.ts

function withSourceText(result, sourceText) {
    if (result.ok === false) return result;
    return {
        ok: true,
        snapshot: result.snapshot,
        sourceText
    };
}
async function fetchXiangqiFile(src) {
    try {
        const res = await fetch(src);
        if (!res.ok) {
            return {
                ok: false,
                error: `Failed to load (${res.status})`
            };
        }
        const text = await res.text();
        return {
            ok: true,
            text: text.trim()
        };
    } catch  {
        return {
            ok: false,
            error: 'Failed to load file'
        };
    }
}
async function resolveXiangqiInput(params) {
    const inlinePgn = params.pgn?.trim();
    if (inlinePgn) {
        return withSourceText(parseGameContent(inlinePgn, 'pgn'), inlinePgn);
    }
    const inlineFen = params.fen?.trim();
    if (inlineFen) {
        return withSourceText(parseGameContent(inlineFen, 'fen'), inlineFen);
    }
    const src = params.src?.trim();
    if (!src) {
        return {
            ok: false,
            error: 'No FEN, PGN, or src provided'
        };
    }
    const fetched = await fetchXiangqiFile(src);
    if (fetched.ok === false) {
        return fetched;
    }
    const format = params.format ?? inferFormatFromSrc(src) ?? inferFormatFromContent(fetched.text);
    return withSourceText(parseGameContent(fetched.text, format), fetched.text);
}

// EXTERNAL MODULE: ./src/components/business/GameSourceHeaderActions.tsx
var GameSourceHeaderActions = __webpack_require__(80130);
;// ./src/lib/xiangqi/user-branch.ts

function iccsFromSquares(from, to) {
    return `${from}${to}`;
}
function startXiangqiBranch(anchorPly, startingFen, move) {
    return {
        anchorPly,
        startingFen,
        moves: [
            move.iccs
        ],
        moveLabels: [
            move.label
        ],
        fensByPly: [
            move.fen
        ]
    };
}
function appendXiangqiBranch(branch, move) {
    return {
        ...branch,
        moves: [
            ...branch.moves,
            move.iccs
        ],
        moveLabels: [
            ...branch.moveLabels,
            move.label
        ],
        fensByPly: [
            ...branch.fensByPly,
            move.fen
        ]
    };
}
function buildXiangqiMoveRecord(fenBefore, from, to, fenAfter) {
    const iccs = iccsFromSquares(from, to);
    return {
        iccs,
        from,
        to,
        fen: fenAfter,
        label: iccsToChineseNotation(iccs, fenBefore)
    };
}
function truncateXiangqiBranch(branch, keepMoves) {
    if (keepMoves <= 0) {
        return {
            ...branch,
            moves: [],
            moveLabels: [],
            fensByPly: []
        };
    }
    return {
        ...branch,
        moves: branch.moves.slice(0, keepMoves),
        moveLabels: branch.moveLabels.slice(0, keepMoves),
        fensByPly: branch.fensByPly.slice(0, keepMoves)
    };
}

// EXTERNAL MODULE: ./src/lib/board/game-user-branch.ts
var game_user_branch = __webpack_require__(67723);
;// ./src/components/mdx/XiangqiViewer.tsx
/* __next_internal_client_entry_do_not_use__ XiangqiViewer auto */ 














function buildMovePairs(moves) {
    const pairs = [];
    for(let i = 0; i < moves.length; i += 2){
        pairs.push({
            number: Math.floor(i / 2) + 1,
            red: moves[i],
            black: moves[i + 1]
        });
    }
    return pairs;
}
function XiangqiMoveList({ moves, moveLabels, anchorPly, displayPly, onGoToPly, showChineseNotation }) {
    const t = (0,react_client/* useTranslations */.c)('xiangqi');
    const pairs = buildMovePairs(moves);
    const hasBranchMoves = moves.length > anchorPly;
    const labelForMoveIndex = (moveIndex, iccs)=>{
        if (showChineseNotation && moveLabels[moveIndex]) {
            return moveLabels[moveIndex];
        }
        return iccs;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-0 flex-1 overflow-y-auto p-2 font-mono text-xs",
        role: "list",
        "aria-label": t('moveListAria'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                type: "button",
                className: (0,utils.cn)('mb-1 block w-full rounded px-1.5 py-0.5 text-left hover:bg-accent', displayPly === 0 && 'bg-accent text-accent-foreground'),
                onClick: ()=>onGoToPly(0),
                children: "…"
            }),
            pairs.map((pair)=>{
                const redPly = (pair.number - 1) * 2 + 1;
                const blackPly = (pair.number - 1) * 2 + 2;
                const redIsBranch = hasBranchMoves && (0,game_user_branch/* isBranchMoveIndex */.g$)(anchorPly, redPly - 1);
                const blackIsBranch = pair.black != null && hasBranchMoves && (0,game_user_branch/* isBranchMoveIndex */.g$)(anchorPly, blackPly - 1);
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex gap-1 py-0.5",
                    role: "listitem",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "w-6 shrink-0 text-muted-foreground",
                            children: [
                                pair.number,
                                "."
                            ]
                        }),
                        pair.red ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            type: "button",
                            className: (0,utils.cn)('min-w-[3rem] rounded px-1 hover:bg-accent', displayPly === redPly && 'bg-accent text-accent-foreground', redIsBranch && 'text-primary'),
                            onClick: ()=>onGoToPly(redPly),
                            title: showChineseNotation ? pair.red : undefined,
                            children: labelForMoveIndex((pair.number - 1) * 2, pair.red)
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "min-w-[3rem]"
                        }),
                        pair.black ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            type: "button",
                            className: (0,utils.cn)('min-w-[3rem] rounded px-1 hover:bg-accent', displayPly === blackPly && 'bg-accent text-accent-foreground', blackIsBranch && 'text-primary'),
                            onClick: ()=>onGoToPly(blackPly),
                            title: showChineseNotation ? pair.black : undefined,
                            children: labelForMoveIndex((pair.number - 1) * 2 + 1, pair.black)
                        }) : null
                    ]
                }, pair.number);
            })
        ]
    });
}
function XiangqiNavigation({ currentPly, maxPly, onFirst, onPrev, onNext, onLast }) {
    const t = (0,react_client/* useTranslations */.c)('xiangqi');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex w-full justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                    type: "button",
                    variant: "outline",
                    size: "icon-sm",
                    onClick: onFirst,
                    disabled: currentPly <= 0,
                    "aria-label": t('first'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevrons_left/* default */.A, {
                        className: "size-4",
                        "aria-hidden": true
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                    type: "button",
                    variant: "outline",
                    size: "icon-sm",
                    onClick: onPrev,
                    disabled: currentPly <= 0,
                    "aria-label": t('previous'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_left/* default */.A, {
                        className: "size-4",
                        "aria-hidden": true
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    className: "min-w-[3.5rem] px-2 text-center text-xs text-muted-foreground tabular-nums",
                    "aria-live": "polite",
                    children: [
                        currentPly,
                        " / ",
                        maxPly
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                    type: "button",
                    variant: "outline",
                    size: "icon-sm",
                    onClick: onNext,
                    disabled: currentPly >= maxPly,
                    "aria-label": t('next'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* default */.A, {
                        className: "size-4",
                        "aria-hidden": true
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                    type: "button",
                    variant: "outline",
                    size: "icon-sm",
                    onClick: onLast,
                    disabled: currentPly >= maxPly,
                    "aria-label": t('last'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevrons_right/* default */.A, {
                        className: "size-4",
                        "aria-hidden": true
                    })
                })
            ]
        })
    });
}
function XiangqiViewer({ fen, pgn, src, format, title, className, boardWidth = 405, orientation = 'red', showNavigation, showMoveList, interactive = true, showCoordinates = false, showChineseNotation = true, showLegalMoves = true, showLastMove = true, boardTheme, pieceTheme }) {
    const t = (0,react_client/* useTranslations */.c)('xiangqi');
    const [loading, setLoading] = react.useState(Boolean(src?.trim() && !fen?.trim() && !pgn?.trim()));
    const [error, setError] = react.useState(null);
    const [snapshot, setSnapshot] = react.useState(null);
    const [viewPly, setViewPly] = react.useState(0);
    const [userBranch, setUserBranch] = react.useState(null);
    const [interactiveLastMove, setInteractiveLastMove] = react.useState(null);
    const [sourceText, setSourceText] = react.useState(()=>pgn?.trim() || fen?.trim() || null);
    const rootRef = react.useRef(null);
    const inputKey = `${fen ?? ''}|${pgn ?? ''}|${src ?? ''}|${format ?? ''}`;
    react.useEffect(()=>{
        let cancelled = false;
        const needsFetch = Boolean(src?.trim() && !pgn?.trim() && !fen?.trim());
        setLoading(needsFetch);
        setError(null);
        setSourceText(pgn?.trim() || fen?.trim() || null);
        void resolveXiangqiInput({
            fen,
            pgn,
            src,
            format
        }).then((result)=>{
            if (cancelled) return;
            setLoading(false);
            if (result.ok === false) {
                setSnapshot(null);
                setSourceText(pgn?.trim() || fen?.trim() || null);
                setError(result.error);
                return;
            }
            setSnapshot(result.snapshot);
            setSourceText(result.sourceText);
            setViewPly(0);
            setUserBranch(null);
            setInteractiveLastMove(null);
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        inputKey,
        fen,
        pgn,
        src,
        format
    ]);
    const maxPly = snapshot ? snapshot.fensByPly.length - 1 : 0;
    const tipPly = (0,game_user_branch/* maxViewPly */.hx)(maxPly, userBranch);
    const isPgn = snapshot?.mode === 'pgn';
    const navigationEnabled = showNavigation ?? isPgn;
    const moveListEnabled = showMoveList ?? isPgn;
    const boardHeight = Math.round(boardWidth * 10 / 9);
    const goToMoveListPly = react.useCallback((ply)=>{
        if (!snapshot) return;
        setInteractiveLastMove(null);
        setViewPly((0,game_user_branch/* clampViewPly */.Gi)(ply, maxPly, userBranch));
    }, [
        snapshot,
        maxPly,
        userBranch
    ]);
    const resetReplayToPly = react.useCallback((ply)=>{
        if (!snapshot) return;
        setUserBranch(null);
        setInteractiveLastMove(null);
        setViewPly(Math.max(0, Math.min(ply, maxPly)));
    }, [
        snapshot,
        maxPly
    ]);
    const goFirst = react.useCallback(()=>resetReplayToPly(0), [
        resetReplayToPly
    ]);
    const goPrev = react.useCallback(()=>resetReplayToPly(viewPly - 1), [
        resetReplayToPly,
        viewPly
    ]);
    const goNext = react.useCallback(()=>resetReplayToPly(viewPly + 1), [
        resetReplayToPly,
        viewPly
    ]);
    const goLast = react.useCallback(()=>resetReplayToPly(maxPly), [
        resetReplayToPly,
        maxPly
    ]);
    react.useEffect(()=>{
        const el = rootRef.current;
        if (!el || !navigationEnabled) return;
        const onKeyDown = (e)=>{
            if (!el.contains(document.activeElement) && document.activeElement !== el) return;
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goPrev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                goNext();
            } else if (e.key === 'Home') {
                e.preventDefault();
                goFirst();
            } else if (e.key === 'End') {
                e.preventDefault();
                goLast();
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return ()=>window.removeEventListener('keydown', onKeyDown);
    }, [
        navigationEnabled,
        goPrev,
        goNext,
        goFirst,
        goLast
    ]);
    const displayFen = snapshot ? (0,game_user_branch/* fenAtViewPly */.$9)(snapshot.fensByPly, userBranch, viewPly) : '';
    const displayMoves = snapshot ? userBranch ? (0,game_user_branch/* combinedMoveList */.Zx)(snapshot.moves, userBranch.anchorPly, userBranch.moves) : snapshot.moves : [];
    const displayMoveLabels = snapshot ? userBranch ? [
        ...snapshot.moveLabels.slice(0, userBranch.anchorPly),
        ...userBranch.moveLabels
    ] : snapshot.moveLabels : [];
    const comment = snapshot?.commentsByPly[(0,game_user_branch/* commentPlyForView */.rr)(viewPly, userBranch)];
    const subtitle = snapshot ? formatHeaderSubtitle(snapshot.headers) : undefined;
    const panelTitle = title?.trim() || subtitle || t('defaultTitle');
    const srcTrimmed = src?.trim();
    const headerActions = /*#__PURE__*/ (0,jsx_runtime.jsx)(GameSourceHeaderActions/* GameSourceHeaderActions */.S, {
        sourceText: sourceText,
        downloadHref: srcTrimmed || null,
        downloadFilename: srcTrimmed ? (0,GameSourceHeaderActions/* filenameFromGameSrc */.e)(srcTrimmed) : undefined,
        copyAriaLabel: t('copySource'),
        downloadAriaLabel: t('downloadSource')
    });
    const showSidePanel = Boolean(isPgn && snapshot && !loading);
    const canInteract = interactive && !loading && Boolean(snapshot) && Boolean(displayFen);
    const lastMoveHighlight = react.useMemo(()=>{
        if (!showLastMove || !snapshot || viewPly <= 0) return null;
        if (userBranch && viewPly > userBranch.anchorPly) {
            if (viewPly === tipPly && interactiveLastMove) return interactiveLastMove;
            const branchIndex = viewPly - userBranch.anchorPly - 1;
            const iccs = userBranch.moves[branchIndex];
            return iccs ? lastMoveFromIccs(iccs) : null;
        }
        return lastMoveFromIccs(snapshot.moves[viewPly - 1] ?? '');
    }, [
        showLastMove,
        snapshot,
        userBranch,
        interactiveLastMove,
        viewPly,
        tipPly
    ]);
    const handleFenChange = react.useCallback((nextFen)=>{
        if (!canInteract || !snapshot) return;
        const fenBefore = displayFen;
        const transition = detectSingleMoveBetweenFens(fenBefore, nextFen);
        if (!transition) return;
        setInteractiveLastMove({
            from: transition.from,
            to: transition.to
        });
        if ((0,game_user_branch/* isMainLineContinued */.BQ)(snapshot.fensByPly, viewPly, nextFen)) {
            setUserBranch(null);
            setViewPly(viewPly + 1);
            return;
        }
        const record = buildXiangqiMoveRecord(fenBefore, transition.from, transition.to, nextFen);
        const startingFen = (0,game_user_branch/* fenAtViewPly */.$9)(snapshot.fensByPly, null, viewPly);
        let nextBranch;
        if (!userBranch || viewPly <= userBranch.anchorPly) {
            nextBranch = startXiangqiBranch(viewPly, startingFen, record);
        } else if (viewPly < userBranch.anchorPly + userBranch.moves.length) {
            const keepMoves = viewPly - userBranch.anchorPly;
            nextBranch = appendXiangqiBranch(truncateXiangqiBranch(userBranch, keepMoves), record);
        } else {
            nextBranch = appendXiangqiBranch(userBranch, record);
        }
        setUserBranch(nextBranch);
        setViewPly(nextBranch.anchorPly + nextBranch.moves.length);
    }, [
        canInteract,
        snapshot,
        userBranch,
        displayFen,
        viewPly
    ]);
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("figure", {
            className: (0,utils.cn)('my-4 overflow-hidden rounded-lg border border-border bg-muted p-6 text-center not-prose', className),
            role: "alert",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(grid_3x3/* default */.A, {
                    className: "mx-auto mb-2 size-10 text-muted-foreground",
                    "aria-hidden": true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "font-medium text-foreground",
                    children: panelTitle
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "mt-1 text-sm text-destructive",
                    children: error
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(article_card_panel/* ArticleCardPanelRoot */.T, {
        className: (0,utils.cn)('xiangqi-viewer not-prose', className),
        "data-xiangqi-viewer": true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelHeader */.Cx, {
                left: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(grid_3x3/* default */.A, {
                            className: "size-4 shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (0,utils.cn)('truncate', article_card_panel/* articleCardPanelHeaderText */.J0),
                            children: panelTitle
                        }),
                        subtitle && title?.trim() ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "truncate text-xs text-muted-foreground",
                            children: [
                                "(",
                                subtitle,
                                ")"
                            ]
                        }) : null
                    ]
                }),
                right: headerActions
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelBody */.fY, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    ref: rootRef,
                    tabIndex: navigationEnabled ? 0 : undefined,
                    className: "flex flex-col items-center gap-4 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "aria-label": panelTitle,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:items-start sm:justify-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "shrink-0",
                                    children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center justify-center bg-muted text-muted-foreground",
                                        style: {
                                            width: boardWidth,
                                            height: boardHeight
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.A, {
                                                className: "size-8 animate-spin",
                                                "aria-hidden": true
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "sr-only",
                                                children: t('loading')
                                            })
                                        ]
                                    }) : displayFen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(XiangqiBoard, {
                                        fen: displayFen,
                                        boardWidth: boardWidth,
                                        orientation: orientation,
                                        interactive: canInteract,
                                        showCoordinates: showCoordinates,
                                        showLegalMoves: showLegalMoves,
                                        lastMove: lastMoveHighlight,
                                        boardTheme: boardTheme,
                                        pieceTheme: pieceTheme,
                                        onFenChange: handleFenChange
                                    }) : null
                                }),
                                showSidePanel ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex w-full max-w-xs flex-col overflow-hidden rounded-md border border-border bg-muted/30 text-sm sm:w-56 sm:max-w-none",
                                    style: {
                                        minHeight: boardHeight,
                                        maxHeight: boardHeight
                                    },
                                    children: [
                                        moveListEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(XiangqiMoveList, {
                                            moves: displayMoves,
                                            moveLabels: displayMoveLabels,
                                            anchorPly: userBranch?.anchorPly ?? snapshot.moves.length,
                                            displayPly: viewPly,
                                            onGoToPly: goToMoveListPly,
                                            showChineseNotation: showChineseNotation
                                        }) : null,
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "max-h-[60%] min-h-0 shrink-0 overflow-y-auto border-t border-border px-3 py-2",
                                            "aria-label": t('commentAria'),
                                            children: comment ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-foreground whitespace-pre-wrap",
                                                children: comment
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-muted-foreground italic",
                                                children: t('noComment')
                                            })
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        navigationEnabled && snapshot && !loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(XiangqiNavigation, {
                            currentPly: viewPly,
                            maxPly: maxPly,
                            onFirst: goFirst,
                            onPrev: goPrev,
                            onNext: goNext,
                            onLast: goLast
                        }) : null
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 93520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel),
/* harmony export */   CarouselContent: () => (/* binding */ CarouselContent),
/* harmony export */   CarouselDots: () => (/* binding */ CarouselDots),
/* harmony export */   CarouselItem: () => (/* binding */ CarouselItem),
/* harmony export */   CarouselNext: () => (/* binding */ CarouselNext),
/* harmony export */   CarouselPrevious: () => (/* binding */ CarouselPrevious)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50910);
/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43459);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41641);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21362);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40980);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89239);
/* __next_internal_client_entry_do_not_use__ Carousel,CarouselContent,CarouselItem,CarouselDots,CarouselNext,CarouselPrevious auto */ 






const CarouselContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
function useCarousel() {
    const ctx = react__WEBPACK_IMPORTED_MODULE_1__.useContext(CarouselContext);
    if (!ctx) {
        throw new Error('Carousel components must be used within a Carousel');
    }
    return ctx;
}
const Carousel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ orientation = 'horizontal', opts, setApi, plugins, className, children, centerMode = false, ...props }, ref)=>{
    const mergedOpts = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>{
        const axis = orientation === 'horizontal' ? 'x' : 'y';
        const base = {
            ...opts,
            axis
        };
        if (centerMode) {
            return {
                ...base,
                align: 'center',
                loop: true,
                slidesToScroll: 1
            };
        }
        return base;
    }, [
        opts,
        orientation,
        centerMode
    ]);
    const [emblaRef, api] = (0,embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(mergedOpts, plugins);
    const [selectedIndex, setSelectedIndex] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!api || !setApi) return;
        setApi(api);
    }, [
        api,
        setApi
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!api) return;
        const onSelect = ()=>{
            setSelectedIndex(api.selectedScrollSnap());
        };
        api.on('select', onSelect);
        onSelect();
        return ()=>{
            api.off('select', onSelect);
        };
    }, [
        api
    ]);
    const contextValue = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>({
            api,
            emblaRef,
            selectedIndex,
            centerMode
        }), [
        api,
        emblaRef,
        selectedIndex,
        centerMode
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CarouselContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('relative', centerMode && 'embla-center-mode', className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children: children
        })
    });
});
Carousel.displayName = 'Carousel';
const CarouselContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>{
    const { emblaRef, centerMode } = useCarousel();
    const mergedRef = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((node)=>{
        emblaRef(node);
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
    }, [
        emblaRef,
        ref
    ]);
    const slides = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>{
        if (!centerMode) return children;
        return react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index)=>{
            if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child)) {
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, {
                    ...child.props,
                    index
                });
            }
            return child;
        });
    }, [
        children,
        centerMode
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: mergedRef,
        className: "overflow-hidden",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('flex', centerMode ? '-ml-0' : '-ml-4', 'motion-reduce:overflow-auto', className),
            children: slides || children
        })
    });
});
CarouselContent.displayName = 'CarouselContent';
const CarouselItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, index, ...props }, ref)=>{
    const { selectedIndex, centerMode } = useCarousel();
    const isSelected = centerMode && index !== undefined && index === selectedIndex;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        role: "group",
        "aria-roledescription": "slide",
        "data-carousel-index": index,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('min-w-0 shrink-0 grow-0', centerMode ? 'w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]' : 'basis-full pl-4', isSelected && 'is-selected', className),
        ...props
    });
});
CarouselItem.displayName = 'CarouselItem';
const CarouselDots = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    const { api, selectedIndex } = useCarousel();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('carousel');
    const [scrollSnaps, setScrollSnaps] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!api) return;
        setScrollSnaps(api.scrollSnapList());
        const onReInit = ()=>setScrollSnaps(api.scrollSnapList());
        api.on('reInit', onReInit);
        return ()=>{
            api.off('reInit', onReInit);
        };
    }, [
        api
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('flex items-center justify-center gap-2 py-4', className),
        ...props,
        children: scrollSnaps.map((_, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                type: "button",
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('h-2 w-2 rounded-full transition-all', index === selectedIndex ? 'bg-foreground w-4' : 'bg-foreground/30'),
                "aria-label": t('goToSlide', {
                    n: index + 1
                }),
                onClick: ()=>api?.scrollTo(index)
            }, index))
    });
});
CarouselDots.displayName = 'CarouselDots';
const CarouselPrevious = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant = 'outline', size = 'icon', onClick, ...props }, ref)=>{
    const { api } = useCarousel();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('carousel');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
        ref: ref,
        variant: variant,
        size: size,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('absolute h-8 w-8 rounded-full', 'top-1/2 -translate-y-1/2 left-2', className),
        "aria-label": t('prevSlide'),
        "data-carousel-nav": "prev",
        onClick: (e)=>{
            api?.scrollPrev();
            onClick?.(e);
        },
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
            className: "size-4"
        })
    });
});
CarouselPrevious.displayName = 'CarouselPrevious';
const CarouselNext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant = 'outline', size = 'icon', onClick, ...props }, ref)=>{
    const { api } = useCarousel();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('carousel');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
        ref: ref,
        variant: variant,
        size: size,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('absolute h-8 w-8 rounded-full', 'top-1/2 -translate-y-1/2 right-2', className),
        "aria-label": t('nextSlide'),
        "data-carousel-nav": "next",
        onClick: (e)=>{
            api?.scrollNext();
            onClick?.(e);
        },
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
            className: "size-4"
        })
    });
});
CarouselNext.displayName = 'CarouselNext';



/***/ }),

/***/ 96054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  JsonView: () => (/* binding */ JsonView)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next/dist/api/app-dynamic.js
var app_dynamic = __webpack_require__(37206);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.mjs
var dist = __webpack_require__(70460);
// EXTERNAL MODULE: ./node_modules/next-intl/dist/esm/production/react-client/index.js
var react_client = __webpack_require__(50910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/braces.js
var braces = __webpack_require__(51610);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(6296);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
;// ./src/lib/json-view/shiki-palette.ts
/**
 * JSON syntax colors from Shiki themes used by rehype-pretty-code
 * (see rehypePrettyCodeOptions in compile-mdx.ts).
 * Extracted via tokenization of sample JSON — keep in sync if themes change.
 */ const JSON_VIEW_SHIKI_THEME_NAMES = {
    light: 'github-light',
    dark: 'one-dark-pro'
};
/** Shiki github-light JSON token colors. */ const JSON_VIEW_SHIKI_LIGHT = {
    foreground: '#24292E',
    key: '#005CC5',
    string: '#032F62',
    number: '#005CC5',
    boolean: '#005CC5',
    null: '#005CC5',
    punctuation: '#24292E'
};
/** Shiki one-dark-pro JSON token colors. */ const JSON_VIEW_SHIKI_DARK = {
    foreground: '#ABB2BF',
    key: '#E06C75',
    string: '#98C379',
    number: '#D19A66',
    boolean: '#D19A66',
    null: '#D19A66',
    punctuation: '#ABB2BF'
};
function getJsonViewShikiPalette(mode) {
    return mode === 'dark' ? JSON_VIEW_SHIKI_DARK : JSON_VIEW_SHIKI_LIGHT;
}

;// ./src/lib/json-view/theme.ts

function readCssHsl(varName, fallback) {
    if (typeof document === 'undefined') return fallback;
    const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    return raw ? `hsl(${raw})` : fallback;
}
/**
 * Map Shiki JSON token colors (github-light / one-dark-pro) onto react-json-view
 * base16 slots. Panel background follows site tokens like CodeBlock panels.
 */ function buildJsonViewTheme(mode = 'light') {
    const shiki = getJsonViewShikiPalette(mode);
    const background = readCssHsl('--background', mode === 'dark' ? 'hsl(0 0% 5%)' : 'hsl(0 0% 100%)');
    const muted = readCssHsl('--muted', mode === 'dark' ? 'hsl(0 0% 18%)' : 'hsl(210 40% 96%)');
    const border = readCssHsl('--border', mode === 'dark' ? 'hsl(0 0% 18%)' : 'hsl(214 32% 91%)');
    return {
        base00: background,
        base01: muted,
        base02: border,
        base03: shiki.punctuation,
        base04: shiki.foreground,
        base05: shiki.foreground,
        base06: shiki.foreground,
        base07: shiki.foreground,
        base08: shiki.boolean,
        base09: shiki.number,
        base0A: shiki.key,
        base0B: shiki.string,
        base0C: shiki.null,
        base0D: shiki.key,
        base0E: shiki.punctuation,
        base0F: shiki.key
    };
}

// EXTERNAL MODULE: ./src/components/business/GameSourceHeaderActions.tsx
var GameSourceHeaderActions = __webpack_require__(80130);
// EXTERNAL MODULE: ./src/components/ui/article-card-panel.tsx
var article_card_panel = __webpack_require__(15891);
// EXTERNAL MODULE: ./src/contexts/PostAssetBaseContext.tsx
var PostAssetBaseContext = __webpack_require__(44272);
;// ./src/components/mdx/JsonView.tsx
/* __next_internal_client_entry_do_not_use__ JsonView auto */ 










const ReactJsonView = (0,app_dynamic["default"])(()=>__webpack_require__.e(/* import() */ 8822).then(__webpack_require__.bind(__webpack_require__, 28822)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(5043)
            ]
    },
    ssr: false,
    loading: ()=>null
});
function normalizeInlineData(data) {
    if (data == null) return {
        value: null,
        error: false
    };
    if (typeof data === 'object') return {
        value: data,
        error: false
    };
    if (typeof data === 'string') {
        const trimmed = data.trim();
        if (!trimmed) return {
            value: null,
            error: false
        };
        try {
            const parsed = JSON.parse(trimmed);
            if (parsed !== null && typeof parsed === 'object') {
                return {
                    value: parsed,
                    error: false
                };
            }
            return {
                value: {
                    value: parsed
                },
                error: false
            };
        } catch  {
            return {
                value: null,
                error: true
            };
        }
    }
    return {
        value: {
            value: data
        },
        error: false
    };
}
function prettyJson(value) {
    return JSON.stringify(value, null, 2);
}
function JsonView({ data, src, title = 'JSON', collapsed = 1, displayDataTypes = false, displayObjectSize = true, name = 'root', collapseStringsAfterLength = false }) {
    const t = (0,react_client/* useTranslations */.c)('jsonView');
    const { resolvedTheme } = (0,dist/* useTheme */.D)();
    const resolvedSrc = (0,PostAssetBaseContext/* useResolvedPostAssetUrl */.t9)(src) ?? src;
    const shikiMode = resolvedTheme === 'dark' ? 'dark' : 'light';
    const [theme, setTheme] = react.useState(()=>buildJsonViewTheme('light'));
    const [loadedJson, setLoadedJson] = react.useState(null);
    const [fetchStatus, setFetchStatus] = react.useState('idle');
    const inline = react.useMemo(()=>normalizeInlineData(data), [
        data
    ]);
    react.useEffect(()=>{
        setTheme(buildJsonViewTheme(shikiMode));
    }, [
        shikiMode
    ]);
    react.useEffect(()=>{
        if (!resolvedSrc?.trim()) {
            setLoadedJson(null);
            setFetchStatus('idle');
            return;
        }
        let cancelled = false;
        setFetchStatus('loading');
        setLoadedJson(null);
        fetch(resolvedSrc).then((res)=>{
            if (!res.ok) throw new Error('fetch failed');
            return res.text();
        }).then((text)=>{
            if (cancelled) return;
            const parsed = JSON.parse(text);
            if (parsed !== null && typeof parsed === 'object') {
                setLoadedJson(parsed);
                setFetchStatus('ready');
                return;
            }
            setLoadedJson({
                value: parsed
            });
            setFetchStatus('ready');
        }).catch(()=>{
            if (!cancelled) {
                setLoadedJson(null);
                setFetchStatus('error');
            }
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        resolvedSrc
    ]);
    const viewData = inline.value ?? loadedJson;
    const hasInline = data != null && String(data).trim() !== '';
    const hasSrc = Boolean(resolvedSrc?.trim());
    const showLoading = hasSrc && fetchStatus === 'loading';
    const showFetchError = hasSrc && fetchStatus === 'error';
    const showParseError = hasInline && inline.error;
    const showEmptyError = !showLoading && !viewData && !showFetchError && !showParseError && !hasInline && !hasSrc;
    const showInlineEmpty = hasInline && !inline.error && inline.value == null;
    const copyText = viewData ? prettyJson(viewData) : '';
    const ready = Boolean(viewData) && !showParseError && !showFetchError;
    const srcTrimmed = src?.trim();
    const headerActions = /*#__PURE__*/ (0,jsx_runtime.jsx)(GameSourceHeaderActions/* GameSourceHeaderActions */.S, {
        sourceText: copyText || null,
        downloadHref: srcTrimmed ? resolvedSrc ?? srcTrimmed : null,
        downloadFilename: srcTrimmed ? (0,GameSourceHeaderActions/* filenameFromGameSrc */.e)(resolvedSrc ?? srcTrimmed) : undefined,
        copyAriaLabel: t('copyJson'),
        downloadAriaLabel: t('downloadSource')
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(article_card_panel/* ArticleCardPanelRoot */.T, {
        className: "json-view-panel group not-prose",
        "data-json-view-panel": true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelHeader */.Cx, {
                as: "figcaption",
                left: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(braces/* default */.A, {
                            className: "size-4 shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (0,utils.cn)('truncate', article_card_panel/* articleCardPanelHeaderText */.J0),
                            children: title.trim() || 'JSON'
                        })
                    ]
                }),
                right: headerActions
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(article_card_panel/* ArticleCardPanelBody */.fY, {
                className: "p-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "json-view-viewport relative min-h-[8rem] max-h-[70vh] overflow-auto bg-background",
                    role: "region",
                    "aria-label": t('viewportAria'),
                    "data-json-view-ready": ready ? '1' : undefined,
                    children: [
                        showLoading && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "json-view-loading absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-background",
                            "aria-live": "polite",
                            "aria-busy": "true",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.A, {
                                    className: "size-8 animate-spin text-muted-foreground",
                                    "aria-hidden": true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: t('loading')
                                })
                            ]
                        }),
                        showEmptyError && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex min-h-[8rem] items-center justify-center px-4 text-sm text-muted-foreground",
                            children: t('emptySource')
                        }),
                        showInlineEmpty && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex min-h-[8rem] items-center justify-center px-4 text-sm text-muted-foreground",
                            children: t('emptySource')
                        }),
                        (showFetchError || showParseError) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex min-h-[8rem] items-center justify-center px-4 text-sm text-destructive",
                            children: t('loadFailed')
                        }),
                        ready && viewData && /*#__PURE__*/ (0,jsx_runtime.jsx)(ReactJsonView, {
                            src: viewData,
                            name: name,
                            theme: theme,
                            collapsed: collapsed,
                            displayDataTypes: displayDataTypes,
                            displayObjectSize: displayObjectSize,
                            collapseStringsAfterLength: collapseStringsAfterLength,
                            enableClipboard: true,
                            iconStyle: "triangle",
                            indentWidth: 2,
                            style: {
                                backgroundColor: 'transparent',
                                fontFamily: 'inherit',
                                fontSize: '0.875rem',
                                padding: '0.75rem 1rem'
                            }
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 96389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ lastMoveSquareGlowClassName),
/* harmony export */   f: () => (/* binding */ lastMoveSquareGlowStyle)
/* harmony export */ });
/** Semi-transparent yellow inner glow for last-move square highlight. */ const lastMoveSquareGlowStyle = {
    boxShadow: 'inset 0 0 10px 2px hsl(var(--last-move-glow) / 0.38), inset 0 0 0 2px hsl(var(--last-move-glow) / 0.58)'
};
const lastMoveSquareGlowClassName = '[box-shadow:inset_0_0_10px_2px_hsl(var(--last-move-glow)/0.38),inset_0_0_0_2px_hsl(var(--last-move-glow)/0.58)]';


/***/ }),

/***/ 96585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageGrid: () => (/* binding */ ImageGrid),
/* harmony export */   ImageGridItem: () => (/* binding */ ImageGridItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _components_business_FadeInNextImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54378);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40980);
/* harmony import */ var _contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44272);
/* harmony import */ var _contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90682);
/* __next_internal_client_entry_do_not_use__ ImageGrid,ImageGridItem auto */ 




/**
 * CSS Grid image grid.
 * Renders children in a fixed-column grid with configurable gap.
 */ function ImageGrid({ columns = 2, gap = 12, className, style, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("my-5 mx-auto grid", className),
        style: {
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`,
            ...style
        },
        children: children
    });
}
function ImageGridItem({ src, alt = "", children, className, aspect = "4/3", ...imgProps }) {
    const rawSrc = typeof src === "string" ? src : String(src ?? "");
    const resolvedSrc = (0,_contexts_PostAssetBaseContext__WEBPACK_IMPORTED_MODULE_2__/* .useResolvedPostAssetUrl */ .t9)(rawSrc) ?? rawSrc;
    const { imageFadeInEnabled = false } = (0,_contexts_SiteConfigContext__WEBPACK_IMPORTED_MODULE_3__/* .useSiteConfig */ .z)();
    // When children are provided, render them in a simple div wrapper
    if (children != null) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("overflow-hidden rounded-md", // Apply aspect-ratio only when rendering native <img> children
            // so <Img> (Fancybox) can keep its natural height.
            className),
            children: children
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("relative overflow-hidden rounded-md", className),
        style: {
            aspectRatio: aspect
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_business_FadeInNextImage__WEBPACK_IMPORTED_MODULE_1__/* .FadeInNextImage */ .A, {
            enabled: imageFadeInEnabled,
            src: resolvedSrc,
            alt: alt,
            fill: true,
            className: "object-cover",
            sizes: "(max-width: 768px) 100vw, 50vw",
            ...imgProps
        })
    });
}



/***/ }),

/***/ 98319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Steps: () => (/* binding */ Steps),
/* harmony export */   StepsItem: () => (/* binding */ StepsItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ Steps,StepsItem auto */ 


/**
 * Single step in a Steps timeline. Use inside <Steps>.
 * Renders a numbered circle, title, and body content.
 */ function StepsItem({ step = 1, title, children, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('relative pb-2 last:pb-0', className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "absolute left-0 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-muted text-sm",
                style: {
                    left: 'calc(-33px)'
                },
                "aria-hidden": true,
                children: step
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                        className: "mb-1.5 text-base font-semibold text-foreground",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "prose-content prose-content--in-card text-muted-foreground",
                        children: children
                    })
                ]
            })
        ]
    });
}
/**
 * Vertical timeline / steps list. Renders an ordered list with numbered circles
 * and a connecting line. Use with <StepsItem title="...">...</StepsItem>.
 *
 * @example
 * <Steps>
 *   <StepsItem title="Install Git for Windows">
 *     <p>Download and install the latest version of <a href="...">Git for Windows</a>.</p>
 *   </StepsItem>
 *   <StepsItem title="Set up an editor or IDE">
 *     <p>Consider installing an <a href="...">editor with Flutter support</a>.</p>
 *   </StepsItem>
 * </Steps>
 */ function Steps({ children, className }) {
    const withStep = react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index)=>{
        if (/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(child) && child.props.title != null) {
            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, {
                step: index + 1
            });
        }
        return child;
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('ml-6 list-none border-l-2 border-border pl-8', className),
        children: withStep
    });
}



/***/ }),

/***/ 99078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ ContentLinkCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98500);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40980);



const pillStyles = 'no-underline rounded-lg border-ui transition-[color,background-color,border-color] duration-150 hover:bg-muted bg-background text-foreground dark:bg-card dark:hover:bg-muted';
function ContentLinkCard({ href, children, className, external }) {
    const linkProps = external ? {
        target: '_blank',
        rel: 'noopener noreferrer'
    } : {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(pillStyles, 'flex flex-row items-start gap-3 p-3', className),
        ...linkProps,
        children: children
    });
}


/***/ })

}]);