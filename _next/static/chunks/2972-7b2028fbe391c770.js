"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2972],{

/***/ 1606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('rounded-lg p-1 text-card-foreground', className),
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* reexport safe */ _mermaid_runner__WEBPACK_IMPORTED_MODULE_1__.MermaidRunner),
/* harmony export */   g: () => (/* reexport safe */ _mermaid_panel__WEBPACK_IMPORTED_MODULE_0__.MermaidPanel)
/* harmony export */ });
/* harmony import */ var _mermaid_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74026);
/* harmony import */ var _mermaid_runner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60846);




/***/ }),

/***/ 9116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('min-w-0 space-y-0.5 text-sm', className),
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

/***/ 13663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 15412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MdxContent: () => (/* binding */ MdxContent)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
var jsx_runtime_namespaceObject = /*#__PURE__*/__webpack_require__.t(jsx_runtime, 2);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/lib/post-date.ts
var post_date = __webpack_require__(44380);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 29 modules
var format = __webpack_require__(342);
// EXTERNAL MODULE: ./src/components/ui/panel-list.tsx
var panel_list = __webpack_require__(9116);
;// ./src/components/mdx/ArchivesPageContent.tsx




function formatMonthLabel(key) {
    const [, m] = key.split('-');
    const date = new Date(0, parseInt(m, 10) - 1, 1);
    return (0,format/* default */.A)(date, 'MM');
}
const archivesListWrapper = 'my-2 flex flex-col' + ' [&_a]:no-underline [&_a]:!text-foreground [&_a]:flex [&_a]:items-baseline [&_a]:justify-between [&_a]:gap-4 [&_a]:rounded-md [&_a]:px-4 [&_a]:py-2 [&_a]:transition-colors [&_a]:duration-150' + ' [&_a:hover]:!bg-accent [&_a:hover]:!text-accent-foreground' + ' [&_a_time]:!text-foreground [&_a:hover_time]:!text-accent-foreground' + ' dark:[&_a]:!text-white dark:[&_a_time]:!text-white dark:[&_a:hover]:!text-accent-foreground dark:[&_a:hover_time]:!text-accent-foreground';
function ArchivesPageContent({ grouped }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: archivesListWrapper,
        children: grouped.map(({ key, year, posts }, index)=>{
            const prevYear = index > 0 ? grouped[index - 1]?.year : undefined;
            const showYear = prevYear !== year;
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "space-y-4",
                children: [
                    showYear && /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        id: `year-${year}`,
                        children: year
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        id: key,
                        children: formatMonthLabel(key)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                        className: "list-none space-y-2 !px-0 !my-0",
                        children: posts.map((post)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(panel_list/* PanelLink */.h_, {
                                    href: post.url,
                                    title: post.title,
                                    trailing: (0,post_date/* formatPostArchivesMonthDay */.Rb)(post),
                                    trailingDateTime: post.date
                                })
                            }, post._id))
                    })
                ]
            }, key);
        })
    });
}

// EXTERNAL MODULE: ./src/components/mdx/CategoriesPageContent.tsx
var CategoriesPageContent = __webpack_require__(27322);
;// ./src/components/mdx/ChildPostsList.tsx


const listWrapper = 'mt-5 flex flex-col' + ' [&_a]:no-underline [&_a]:!text-foreground [&_a]:flex [&_a]:items-baseline [&_a]:rounded-md [&_a]:px-4 [&_a]:py-2 [&_a]:transition-colors [&_a]:duration-150' + ' [&_a:hover]:!bg-accent [&_a:hover]:!text-accent-foreground' + ' dark:[&_a]:!text-white dark:[&_a:hover]:!text-accent-foreground';
/**
 * Renders a list of child posts (posts whose slug is under the current post’s slug).
 * Used in parent posts: add <ChildPostsList /> in MDX; the server injects the `posts` prop.
 * If there are no child posts, renders nothing.
 */ function ChildPostsList({ posts, title = '' }) {
    if (!posts || posts.length === 0) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: listWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            className: "space-y-4",
            children: [
                title ? /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                    id: "child-posts",
                    children: title
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                    className: "list-none space-y-2 !px-0 !my-0",
                    children: posts.map((post)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(panel_list/* PanelLink */.h_, {
                                href: post.url,
                                title: post.title
                            })
                        }, post._id))
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/ui/content-link-card.tsx
var content_link_card = __webpack_require__(99078);
;// ./src/components/mdx/LinksPageContent.tsx


const defaultGridCols = 'sm:grid-cols-2 lg:grid-cols-3';
function LinksPageContent({ links, gridCols = defaultGridCols, showIcon = true, showUrl = false }) {
    const safeLinks = Array.isArray(links) ? links : [];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: [
            'my-5 grid gap-4',
            gridCols
        ].filter(Boolean).join(' '),
        children: safeLinks.map((link)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(content_link_card/* ContentLinkCard */.O, {
                href: link.url,
                external: true,
                className: "!w-full min-w-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-row items-start gap-3",
                    children: [
                        showIcon && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "relative size-10 shrink-0 overflow-hidden rounded bg-muted/30",
                            children: link.avatar ? /* eslint-disable-next-line @next/next/no-img-element */ /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: link.avatar,
                                alt: "",
                                width: 40,
                                height: 40,
                                className: "size-10 object-cover"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "flex size-10 items-center justify-center text-xs text-muted-foreground",
                                "aria-hidden": true,
                                children: link.name.slice(0, 1)
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "min-w-0 flex-1 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "font-medium text-foreground",
                                    children: link.name
                                }),
                                link.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "mt-0.5 !mb-0 text-sm text-muted-foreground",
                                    children: link.description
                                }),
                                showUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
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

// EXTERNAL MODULE: ./src/lib/app-path.ts
var app_path = __webpack_require__(69082);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
;// ./src/components/mdx/TagsPageContent.tsx




const seriesSet = (names)=>names ? new Set(names.map((s)=>s.normalize('NFC').trim())) : new Set();
const pillLayout = 'inline-flex items-baseline gap-0.5 px-2.5 py-1.5';
function TagsPageContent({ tags, seriesNames }) {
    const isSeries = seriesSet(seriesNames);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "my-5 flex flex-wrap gap-3",
        children: tags.map(({ name, count })=>{
            const highlight = isSeries.has(name.normalize('NFC').trim());
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(content_link_card/* ContentLinkCard */.O, {
                href: (0,app_path/* internalHref */.dI)(`/tags/${encodeURIComponent(name)}`),
                className: (0,utils.cn)(pillLayout, highlight && 'border-ui-highlight'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "text-foreground",
                        children: [
                            "# ",
                            name
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "pl-1.5 font-medium italic text-highlight",
                        children: count
                    })
                ]
            }, name);
        })
    });
}

// EXTERNAL MODULE: ./src/components/business/FancyboxRoot.tsx
var FancyboxRoot = __webpack_require__(71445);
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
// EXTERNAL MODULE: ./node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(98500);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(5772);
// EXTERNAL MODULE: ./src/components/business/CodeBlock.tsx + 2 modules
var business_CodeBlock = __webpack_require__(67081);
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

// EXTERNAL MODULE: ./src/components/business/EncryptedFragment.tsx
var business_EncryptedFragment = __webpack_require__(46281);
// EXTERNAL MODULE: ./src/components/business/TableWithCopy.tsx
var business_TableWithCopy = __webpack_require__(66954);
// EXTERNAL MODULE: ./src/components/mdx/Carousel.tsx
var Carousel = __webpack_require__(93520);
// EXTERNAL MODULE: ./src/components/mdx/Details.tsx
var Details = __webpack_require__(44748);
// EXTERNAL MODULE: ./src/components/mdx/EncryptedBlock.tsx
var EncryptedBlock = __webpack_require__(58761);
;// ./src/components/mdx/Figure.tsx

/**
 * Generic figure wrapper with optional figcaption. Use src+alt for images (reliable);
 * children may not render reliably in some MDX setups. Full width by default.
 */ function Figure({ src, alt = '', children, caption }) {
    const content = src != null ? // eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        src: src,
        alt: alt,
        className: "rounded-lg block w-full max-w-full h-auto"
    }) : children;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("figure", {
        className: "block my-5 w-full",
        "data-photo-figure": true,
        children: [
            content,
            caption != null && caption.trim() !== '' && /*#__PURE__*/ (0,jsx_runtime.jsx)("figcaption", {
                className: "text-center text-sm text-muted-foreground",
                children: caption.trim()
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/mdx/FileTree.tsx
var FileTree = __webpack_require__(52384);
// EXTERNAL MODULE: ./src/components/mdx/FileTreeViewer.tsx
var FileTreeViewer = __webpack_require__(14314);
// EXTERNAL MODULE: ./src/components/mdx/MasonryGrid.tsx
var MasonryGrid = __webpack_require__(68687);
// EXTERNAL MODULE: ./src/components/mdx/MusicPlayer.tsx
var MusicPlayer = __webpack_require__(19600);
// EXTERNAL MODULE: ./src/components/mdx/PdfViewer.tsx
var PdfViewer = __webpack_require__(50206);
// EXTERNAL MODULE: ./src/components/mdx/ProgressWithLabel.tsx
var ProgressWithLabel = __webpack_require__(13663);
;// ./src/components/mdx/RawHtml.tsx

function RawHtml({ html }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        dangerouslySetInnerHTML: {
            __html: html
        }
    });
}

// EXTERNAL MODULE: ./src/components/mdx/Search.tsx
var Search = __webpack_require__(81990);
// EXTERNAL MODULE: ./src/components/mdx/Steps.tsx
var Steps = __webpack_require__(98319);
// EXTERNAL MODULE: ./src/components/mdx/Tabs.tsx
var Tabs = __webpack_require__(67326);
;// ./scripts/mdx-shortcode-components.generated.ts
// Auto-generated by scripts/generate-mdx-components.mjs — do not edit by hand.
// Output: scripts/mdx-shortcode-components.generated.ts (all .generated.ts live under scripts/).
// Registers all .tsx components under src/components/mdx/ as MDX shortcodes.




















const mdx_shortcode_components_generated_mdxShortcodeComponents = {
    ArchivesPageContent: ArchivesPageContent,
    Callout: Callout,
    Carousel: Carousel.Carousel,
    CarouselContent: Carousel.CarouselContent,
    CarouselItem: Carousel.CarouselItem,
    CarouselNext: Carousel.CarouselNext,
    CarouselPrevious: Carousel.CarouselPrevious,
    CategoriesPageContent: CategoriesPageContent.CategoriesPageContent,
    ChildPostsList: ChildPostsList,
    Details: Details.Details,
    EncryptedBlock: EncryptedBlock.EncryptedBlock,
    Figure: Figure,
    FileTree: FileTree.FileTree,
    FileTreeViewer: FileTreeViewer.FileTreeViewer,
    LinksPageContent: LinksPageContent,
    MasonryGrid: MasonryGrid.MasonryGrid,
    MasonryFrame: MasonryGrid.MasonryFrame,
    MasonryImage: MasonryGrid.MasonryImage,
    MusicPlayer: MusicPlayer.MusicPlayer,
    PdfViewer: PdfViewer.PdfViewer,
    ProgressWithLabel: ProgressWithLabel.ProgressWithLabel,
    RawHtml: RawHtml,
    Search: Search.Search,
    Steps: Steps.Steps,
    StepsItem: Steps.StepsItem,
    Tabs: Tabs.Tabs,
    TabsList: Tabs.TabsList,
    TabsTrigger: Tabs.TabsTrigger,
    TabsContent: Tabs.TabsContent,
    TagsPageContent: TagsPageContent
};

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
    return type === business_CodeBlock.CodeBlock || type === MdxFigure || type === business_TableWithCopy.TableWithCopy || type === mermaid/* MermaidPanel */.g || type === Callout || type === business_EncryptedFragment.EncryptedFragment || type === FileTreeViewer.FileTreeViewer || type === FileTreeViewer.FileTreeViewerFolder || type === FileTreeViewer.FileTreeViewerFile;
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
function PostBodyLink(props) {
    const { href, children, className, ...rest } = props;
    if (href == null || String(href).trim() === '') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: className,
            ...rest,
            children: children
        });
    }
    const h = String(href).trim();
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
    const isPreOrCodeBlock = /*#__PURE__*/ react.isValidElement(second) && (second.type === 'pre' || second.type === business_CodeBlock.CodeBlock);
    if (isTitleCaption && isPreOrCodeBlock) {
        const firstProps = first.props;
        const secondProps = second.props;
        const filename = getTextContent(firstProps.children);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(business_CodeBlock.CodeBlock, {
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
/** Boolean HTML attrs (e.g. `no-facybox`) often serialize as `""`; treat presence as opt-out unless explicitly false. */ function isImgBooleanOptOut(record, key) {
    if (!(key in record)) return false;
    const v = record[key];
    if (v === false) return false;
    const s = typeof v === 'string' ? v.toLowerCase() : '';
    if (s === 'false' || s === '0') return false;
    return true;
}
const IMG_OPT_OUT_FANCYBOX_KEYS = [
    'no-facybox',
    'no-fancybox',
    'noFacybox',
    'noFancybox'
];
const IMG_OPT_OUT_FIGCAPTION_KEYS = [
    'no-figcaption',
    'noFigcaption'
];
function stripImgMediaOptOutAttrs(restFiltered) {
    for (const k of IMG_OPT_OUT_FANCYBOX_KEYS)delete restFiltered[k];
    for (const k of IMG_OPT_OUT_FIGCAPTION_KEYS)delete restFiltered[k];
}
function imgSkipsFancybox(record) {
    return IMG_OPT_OUT_FANCYBOX_KEYS.some((k)=>isImgBooleanOptOut(record, k));
}
function imgSkipsFigcaption(record) {
    return IMG_OPT_OUT_FIGCAPTION_KEYS.some((k)=>isImgBooleanOptOut(record, k));
}
function createMdxImg(fancyboxEnabled, photoFigcaptionEnabled) {
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
        stripImgMediaOptOutAttrs(restFiltered);
        const srcStr = typeof src === 'string' ? src : undefined;
        const useFancybox = !skipFancybox && (parseBoolAttr(dataFancybox) ?? fancyboxEnabled) && !!srcStr;
        const dataFigcaptionExplicit = parseBoolAttr(dataFigcaption);
        const figcaptionOptIn = dataFigcaptionExplicit ?? photoFigcaptionEnabled;
        const captionText = (title ?? alt ?? '').trim();
        const useFigcaption = !skipFigcaption && figcaptionOptIn && (captionText.length > 0 || dataFigcaptionExplicit === true);
        const imgEl = // eslint-disable-next-line @next/next/no-img-element
        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            ...restFiltered,
            src: src,
            className: (0,utils.cn)('rounded-lg', className),
            style: style,
            alt: alt ?? '',
            title: title
        });
        const innerWrapperClass = useFigcaption ? 'block' : (0,utils.cn)(IMG_WRAPPER_CLASS, STANDALONE_IMG_WRAPPER_CLASS);
        let content = imgEl;
        if (useFancybox && srcStr) {
            content = /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                href: srcStr,
                className: (0,utils.cn)('cursor-pointer', innerWrapperClass),
                "data-fancybox": "gallery",
                "data-src": srcStr,
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
function createDivWithEncryptSlots(encryptedSlotMap, fancyboxEnabled, photoFigcaptionEnabled) {
    return function DivWithSlots(props) {
        if (hasMdEncSlotClass(props.className)) {
            const raw = props['data-md-enc-slot'];
            const idx = raw != null ? parseInt(String(raw), 10) : NaN;
            if (!Number.isNaN(idx)) {
                const slot = encryptedSlotMap.get(idx);
                if (slot) {
                    return /*#__PURE__*/ _jsx(EncryptedFragment, {
                        encryptedHex: slot.encryptedHex,
                        keySaltHex: slot.keySaltHex,
                        ivSaltHex: slot.ivSaltHex,
                        hmacHex: slot.hmacHex,
                        contentKind: "html",
                        abstract: slot.abstract,
                        message: slot.message,
                        fancyboxEnabled: fancyboxEnabled,
                        photoFigcaptionEnabled: photoFigcaptionEnabled
                    });
                }
            }
        }
        return /*#__PURE__*/ _jsx("div", {
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
        return /*#__PURE__*/ _jsx(MermaidPanel, {
            source: source,
            title: title || undefined
        });
    };
}
const baseMdxComponents = {
    p: MdxParagraph,
    a: (p)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PostBodyLink, {
            ...p
        }),
    Image: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
            className: "rounded-lg",
            ...props
        }),
    blockquote: MdxBlockquote,
    figure: MdxFigure,
    figcaption: MdxFigcaption,
    pre: business_CodeBlock.CodeBlock,
    table: business_TableWithCopy.TableWithCopy,
    MermaidPanel: mermaid/* MermaidPanel */.g,
    EncryptedFragment: business_EncryptedFragment.EncryptedFragment,
    ...mdx_shortcode_components_generated_mdxShortcodeComponents,
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
    const mdxImg = createMdxImg(opts.fancyboxEnabled, opts.photoFigcaptionEnabled);
    const slotMap = opts.encryptedSlotMap ?? new Map();
    const shortcodes = buildShortcodeHastComponents();
    return {
        p: MdxParagraph,
        a: PostBodyLink,
        blockquote: MdxBlockquote,
        figure: MdxFigure,
        figcaption: MdxFigcaption,
        pre: CodeBlock,
        table: TableWithCopy,
        img: mdxImg,
        div: createDivWithEncryptSlots(slotMap, opts.fancyboxEnabled, opts.photoFigcaptionEnabled),
        'mermaid-panel': createRehypeMermaidPanel(),
        ...shortcodes
    };
}

;// ./src/components/business/MdxContent.tsx
/* __next_internal_client_entry_do_not_use__ MdxContent auto */ 










const MdxContent_baseMdxComponents = getBaseMdxComponentsForPosts();
const PAGE_CONTENT_REGISTRY = {
    ArchivesPageContent: ArchivesPageContent,
    CategoriesPageContent: CategoriesPageContent.CategoriesPageContent,
    ChildPostsList: ChildPostsList,
    LinksPageContent: LinksPageContent,
    TagsPageContent: TagsPageContent
};
function MdxContent({ mdxSource, fancyboxEnabled = false, photoFigcaptionEnabled = false, extraComponentNames, extraComponentProps }) {
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
    const mdxImg = createMdxImg(fancyboxEnabled, photoFigcaptionEnabled);
    const components = {
        ...MdxContent_baseMdxComponents,
        img: mdxImg,
        Img: mdxImg,
        ...extraComponents
    };
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MdxRemote, {
                ...mdxSource,
                components: components
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(mermaid/* MermaidRunner */.U, {})
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FancyboxRoot/* FancyboxRoot */.T, {
        enabled: fancyboxEnabled,
        children: content
    });
}


/***/ }),

/***/ 15891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/** Body area: background, padding */ const articleCardPanelBody = 'bg-background px-4 py-3.5';
/** Body padding only (e.g. CodeBlock pre has its own background) */ const articleCardPanelBodyPadding = 'px-4 py-3.5';
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

/***/ 19600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MusicPlayer: () => (/* binding */ MusicPlayer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50910);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10029);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38194);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74643);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34152);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20232);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41641);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21362);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98817);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77314);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69747);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5121);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40980);
/* harmony import */ var _components_ui_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1606);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15891);
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
function MusicPlayer(props) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_4__/* .useTranslations */ .c)('music');
    const tracks = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>getTracksFromProps(props), [
        props
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
        setPlayMode((m)=>m === 'list' ? 'single' : m === 'single' ? 'list-loop' : 'list');
    };
    if (!currentTrack) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)('my-5 overflow-hidden rounded-lg border-ui bg-card', props.className),
        children: [
            isPlaylist && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        onClick: ()=>setListFolded((f)=>!f),
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .articleCardPanelHeader */ .w, 'w-full cursor-pointer hover:bg-muted/60 transition-colors border-b-0'),
                        "aria-expanded": !listFolded,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .articleCardPanelHeaderLeft */ .bc,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .articleCardPanelHeaderRightIcon */ .lu, 'transition-transform', !listFolded && 'rotate-90'),
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
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)('flex w-full items-center rounded-md py-1 pr-2 pl-2 text-left text-[13px] leading-relaxed font-normal truncate transition-colors outline-none', 'hover:bg-accent hover:text-accent-foreground', i === currentIndex && 'bg-accent text-accent-foreground'),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)('shrink-0 tabular-nums mr-2', i === currentIndex ? 'text-accent-foreground' : 'text-muted-foreground'),
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
                className: "flex items-center gap-3 px-5 py-3",
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
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                                            className: "size-6"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                        type: "button",
                                        onClick: togglePlay,
                                        "aria-label": playing ? 'Pause' : 'Play',
                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)('absolute rounded-full bg-black/50 hover:bg-black/60 text-white flex items-center justify-center transition-all duration-200 ease-out', playing ? 'bottom-1 right-1 size-7' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-10'),
                                        children: playing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                                            className: "size-3.5 ml-0.5 shrink-0",
                                            "aria-hidden": true
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
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
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
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
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_progress__WEBPACK_IMPORTED_MODULE_2__/* .Progress */ .k, {
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
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_progress__WEBPACK_IMPORTED_MODULE_2__/* .Progress */ .k, {
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
                                                        children: muted || volume === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                                                            className: "size-4",
                                                            "aria-hidden": true
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
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
                                                    playMode === 'list' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                                                        className: "size-4",
                                                        "aria-hidden": true
                                                    }),
                                                    playMode === 'single' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
                                                        className: "size-4",
                                                        "aria-hidden": true
                                                    }),
                                                    playMode === 'list-loop' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronLeft_ChevronRight_List_ListOrdered_Music_Pause_Play_Repeat_Repeat1_Volume2_VolumeX_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
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

/***/ 27322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 28710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A7: () => (/* binding */ getLanguageIcon)
/* harmony export */ });
/* unused harmony exports LANGUAGE_ICON_MAP, CODE_EXTENSIONS */
/* harmony import */ var _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10762);
/* harmony import */ var _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48274);
/* harmony import */ var _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33282);


/**
 * Map of language identifiers and file extensions to icon components.
 * Used by CodeBlock (language from Shiki) and FileTree (extension from filename).
 */ const LANGUAGE_ICON_MAP = {
    // TypeScript / JavaScript
    ts: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiTypescript */ .cyb,
    tsx: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiTypescript */ .cyb,
    typescript: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiTypescript */ .cyb,
    js: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJavascript */ .AeH,
    jsx: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJavascript */ .AeH,
    mjs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJavascript */ .AeH,
    cjs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJavascript */ .AeH,
    javascript: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJavascript */ .AeH,
    rescript: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRescript */ .hj4,
    assemblyscript: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiAssemblyscript */ .Eo1,
    // Data / config
    json: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCoder */ .woj,
    jsonc: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCoder */ .woj,
    yaml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiYaml */ .WDB,
    yml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiYaml */ .WDB,
    toml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiToml */ .blH,
    xml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiXml */ .Q_I,
    // Python & data
    py: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPython */ .ptC,
    pyw: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPython */ .ptC,
    python: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPython */ .ptC,
    jupyter: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJupyter */ .OLj,
    // Shell
    bash: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGnubash */ .$V9,
    sh: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGnubash */ .$V9,
    zsh: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGnubash */ .$V9,
    shell: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGnubash */ .$V9,
    powershell: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    pwsh: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    ps1: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    bat: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    cmd: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    // Markup / docs
    md: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiMarkdown */ .S_6,
    markdown: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiMarkdown */ .S_6,
    mdx: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiMarkdown */ .S_6,
    txt: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    text: _barrel_optimize_names_FileCode_Terminal_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    html: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiHtml5 */ .$gB,
    htm: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiHtml5 */ .$gB,
    css: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCss3 */ .jrh,
    scss: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSass */ .$Ue,
    sass: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSass */ .$Ue,
    less: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCss3 */ .jrh,
    // Systems / C family
    c: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiC */ .Cbr,
    cpp: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCplusplus */ .Qin,
    'c++': _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCplusplus */ .Qin,
    cxx: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCplusplus */ .Qin,
    h: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiC */ .Cbr,
    hpp: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCplusplus */ .Qin,
    // Java / JVM
    java: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiOpenjdk */ .mYv,
    kt: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiKotlin */ .sjH,
    kotlin: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiKotlin */ .sjH,
    scala: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiScala */ .laJ,
    clj: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiClojure */ .P6J,
    cljs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiClojure */ .P6J,
    clojure: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiClojure */ .P6J,
    gradle: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGradle */ .WDC,
    groovy: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiScala */ .laJ,
    // C# / .NET
    csharp: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSharp */ .lb$,
    cs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSharp */ .lb$,
    'c#': _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSharp */ .lb$,
    fsharp: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiFsharp */ .BVK,
    fs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiFsharp */ .BVK,
    fable: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiFsharp */ .BVK,
    // Go / Rust / Swift
    go: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGo */ .ZRx,
    golang: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGo */ .ZRx,
    rust: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRust */ .xZd,
    rs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRust */ .xZd,
    swift: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSwift */ .cp,
    // Scripting
    rb: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRuby */ .LfU,
    ruby: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRuby */ .LfU,
    php: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPhp */ .XeU,
    lua: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiLua */ .Prs,
    pl: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPerl */ .jro,
    perl: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPerl */ .jro,
    // FP / other langs
    elixir: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiElixir */ .QeS,
    ex: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiElixir */ .QeS,
    exs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiElixir */ .QeS,
    erlang: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiErlang */ .KTs,
    erl: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiErlang */ .KTs,
    haskell: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiHaskell */ .zq2,
    hs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiHaskell */ .zq2,
    ocaml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiOcaml */ .Rdd,
    ml: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiOcaml */ .Rdd,
    reason: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiReason */ .LBD,
    re: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiReason */ .LBD,
    res: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiReason */ .LBD,
    dart: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiDart */ .A7B,
    nim: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiNim */ .PO1,
    crystal: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCrystal */ .fZP,
    cr: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCrystal */ .fZP,
    zig: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiZig */ .B6p,
    julia: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJulia */ .W$S,
    jl: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiJulia */ .W$S,
    racket: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRacket */ .zgI,
    rkt: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRacket */ .zgI,
    solidity: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSolidity */ .SKD,
    sol: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSolidity */ .SKD,
    // Frontend
    vue: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiVuedotjs */ .Zmg,
    vuejs: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiVuedotjs */ .Zmg,
    react: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiReact */ .GWR,
    // Query / infra
    graphql: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGraphql */ .S9M,
    gql: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGraphql */ .S9M,
    sql: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPostgresql */ .$Wy,
    postgres: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPostgresql */ .$Wy,
    postgresql: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiPostgresql */ .$Wy,
    mysql: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiMysql */ .z33,
    sqlite: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSqlite */ .H$_,
    mongodb: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiMongodb */ .$pK,
    redis: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiRedis */ .mIs,
    // DevOps / config
    docker: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiDocker */ .tih,
    dockerfile: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiDocker */ .tih,
    kubernetes: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiKubernetes */ .tev,
    k8s: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiKubernetes */ .tev,
    nginx: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiNginx */ .$AU,
    env: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCoder */ .woj,
    config: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCoder */ .woj,
    ini: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCoder */ .woj,
    cfg: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiCoder */ .woj,
    gitignore: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiGit */ .rYG,
    editorconfig: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiEditorconfig */ .eB7,
    // Editors
    vim: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiVim */ .Jn8,
    neovim: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiNeovim */ .V5U,
    // Frontend (continued)
    svelte: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiSvelte */ .Qmm,
    // Data / stats
    r: _barrel_optimize_names_SiAssemblyscript_SiC_SiClojure_SiCoder_SiCplusplus_SiCrystal_SiCss3_SiDart_SiDocker_SiEditorconfig_SiElixir_SiErlang_SiFsharp_SiGit_SiGnubash_SiGo_SiGradle_SiGraphql_SiHaskell_SiHtml5_SiJavascript_SiJulia_SiJupyter_SiKotlin_SiKubernetes_SiLua_SiMarkdown_SiMongodb_SiMysql_SiNeovim_SiNginx_SiNim_SiOcaml_SiOpenjdk_SiPerl_SiPhp_SiPostgresql_SiPython_SiR_SiRacket_SiReact_SiReason_SiRedis_SiRescript_SiRuby_SiRust_SiSass_SiScala_SiSharp_SiSolidity_SiSqlite_SiSvelte_SiSwift_SiToml_SiTypescript_SiVim_SiVuedotjs_SiXml_SiYaml_SiZig_react_icons_si__WEBPACK_IMPORTED_MODULE_0__/* .SiR */ .vXp
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

/***/ 40980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 44380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 44748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 46281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncryptedFragment: () => (/* binding */ EncryptedFragment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50910);
/* harmony import */ var _lib_encrypt_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47534);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15891);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89239);
/* harmony import */ var _components_ui_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61360);
/* harmony import */ var _barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25777);
/* harmony import */ var _barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93164);
/* harmony import */ var _components_business_MdxContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15412);
/* __next_internal_client_entry_do_not_use__ EncryptedFragment auto */ 
/**
 * Renders an encrypted fragment: shows a password form until decryption succeeds,
 * then renders the decrypted content. When contentKind is "serialized", the decrypted
 * JSON (compiled MDX) is passed to MdxContent. Uses the same algorithm as full-post
 * encryption. Styled like article card panels. Used by :::encrypt{password="..."} container syntax
 * (not as <EncryptedFragment>content</EncryptedFragment> in MDX).
 */ 







function EncryptedFragment({ encryptedHex, keySaltHex, ivSaltHex, hmacHex, contentKind = 'serialized', abstract, message, fancyboxEnabled = false, photoFigcaptionEnabled = false }) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_6__/* .useTranslations */ .c)('encrypt');
    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
        status: 'idle'
    });
    const tryDecrypt = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async (pwd)=>{
        setState({
            status: 'loading'
        });
        const result = await (0,_lib_encrypt_client__WEBPACK_IMPORTED_MODULE_7__/* .decrypt */ .Yc)(encryptedHex, keySaltHex, ivSaltHex, hmacHex, pwd);
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
        }
    }, [
        encryptedHex,
        keySaltHex,
        ivSaltHex,
        hmacHex,
        contentKind,
        t
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
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "prose prose-sm dark:prose-invert max-w-none",
                dangerouslySetInnerHTML: {
                    __html: state.html
                }
            });
        }
        return null;
    };
    const isDecrypted = state.status === 'decrypted-mdx' || state.status === 'decrypted-html';
    const passwordFieldLabel = message ?? t('passwordLabel');
    const headerLeft = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Lock_Unlock_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
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

/***/ 50206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfViewer: () => (/* binding */ PdfViewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50910);
/* harmony import */ var _barrel_optimize_names_FileText_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48368);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ PdfViewer auto */ 




/** A4 portrait height for ~596px width: 297/210 * 596 ≈ 842px. Ensures viewport fits one full A4 page. */ const DEFAULT_HEIGHT = '842px';
/**
 * Browsers often omit the iframe `load` event when the URL is a PDF (native viewer).
 * Without a fallback, the loading overlay would never disappear.
 */ const LOAD_FALLBACK_MS = 6000;
/**
 * Renders a PDF in an iframe. Works with static export (no server).
 * Put PDFs in public/ and use a root-absolute path (e.g. `/files/doc.pdf` or `/posts/my-slug/doc.pdf`).
 * Relative `src` resolves against the current page URL (with `trailingSlash: true`, post URLs end with `/`).
 */ function PdfViewer({ src, title, className, height = DEFAULT_HEIGHT }) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_2__/* .useTranslations */ .c)('pdf');
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
        src,
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
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('flex flex-col items-center justify-center rounded-lg border border-border bg-muted p-8 text-center', height, className),
            role: "alert",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FileText_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
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
                            href: src,
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
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('my-5 block w-full overflow-hidden rounded-lg border border-border bg-card', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative block w-full",
            style: {
                height: explicitHeight
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
                    src: src,
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

/***/ 52384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 58761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MermaidRunner: () => (/* binding */ MermaidRunner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ MermaidRunner auto */ 
const RENDERED_DATA = 'data-mermaid-rendered';
function processElement(el, mermaid, index) {
    if (el.hasAttribute(RENDERED_DATA)) return;
    let output = el.querySelector('.mermaid-output');
    if (!output) {
        output = document.createElement('div');
        output.className = 'mermaid-output min-w-0 flex-1';
        el.appendChild(output);
    }
    const source = el.getAttribute('data-mermaid-source') ?? el.getAttribute('dataMermaidSource') ?? el.getAttribute('datamermaidsource');
    const raw = source ? source.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&') : null;
    if (raw) {
        const id = 'mermaid-' + index + '-' + Math.random().toString(36).slice(2, 9);
        mermaid.render(id, raw).then(({ svg })=>{
            output.innerHTML = svg;
            el.setAttribute(RENDERED_DATA, '1');
        }).catch(()=>{
            output.textContent = 'Mermaid diagram failed to render.';
            el.removeAttribute(RENDERED_DATA);
        });
    }
}
/**
 * Runs Mermaid on .mermaid elements. Renders SVG into .mermaid-output.
 * Loading (.mermaid-loading) is hidden via CSS when SVG appears.
 */ function MermaidRunner() {
    const mermaidRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let cancelled = false;
        function run() {
            const nodes = document.querySelectorAll('.mermaid');
            if (mermaidRef.current) {
                nodes.forEach((el, i)=>processElement(el, mermaidRef.current, i));
            }
        }
        const obs = new MutationObserver(()=>{
            if (cancelled) return;
            run();
        });
        obs.observe(document.body, {
            childList: true,
            subtree: true
        });
        run();
        Promise.all(/* import() */[__webpack_require__.e(221), __webpack_require__.e(8776)]).then(__webpack_require__.bind(__webpack_require__, 28776)).then((mod)=>{
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
                    diagramPadding: 12
                },
                sequence: {
                    useMaxWidth: false
                }
            });
            mermaidRef.current = mermaid;
            const nodes = document.querySelectorAll('.mermaid');
            nodes.forEach((el, i)=>processElement(el, mermaidRef.current, i));
        }).catch(()=>{});
        return ()=>{
            cancelled = true;
            obs.disconnect();
        };
    }, []);
    return null;
}


/***/ }),

/***/ 61360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 66954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        className: "group relative w-full",
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", {
                ref: tableRef,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('w-full', className),
                ...props,
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 67081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(94514);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/copy.js
var copy = __webpack_require__(67635);
// EXTERNAL MODULE: ./src/lib/language-icons.ts
var language_icons = __webpack_require__(28710);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(40980);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(89239);
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
        "data-language": language,
        "data-theme": theme,
        ...props,
        children: ensureLineNumbers(children)
    });
}

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
function CopyButton({ preRef, className, ariaLabel }) {
    const [copied, setCopied] = react.useState(false);
    const handleCopy = react.useCallback(()=>{
        const pre = preRef.current;
        if (!pre) return;
        const code = pre.querySelector('code');
        const text = code?.textContent ?? pre.textContent ?? '';
        navigator.clipboard.writeText(text).then(()=>{
            setCopied(true);
            const t = setTimeout(()=>setCopied(false), 2000);
            return ()=>clearTimeout(t);
        }, ()=>{});
    }, [
        preRef
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
        type: "button",
        variant: "ghost",
        size: "icon-sm",
        className: (0,utils.cn)(article_card_panel/* articleCardPanelHeaderActionButton */.io, className),
        onClick: handleCopy,
        "aria-label": ariaLabel,
        children: copied ? /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* default */.A, {
            className: "size-4 text-foreground",
            "aria-hidden": true
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(copy/* default */.A, {
            className: "size-4",
            "aria-hidden": true
        })
    });
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
                right: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton, {
                    preRef: preRef,
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
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_2__/* .articleCardPanelHeaderText */ .J0, "inline-flex h-full -mb-px items-center justify-center whitespace-nowrap border-b border-transparent px-4 font-medium transition-all", "text-muted-foreground hover:border-highlight hover:text-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", "data-[state=active]:border-highlight data-[state=active]:text-foreground", className),
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

/***/ 68687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasonryFrame: () => (/* binding */ MasonryFrame),
/* harmony export */   MasonryGrid: () => (/* binding */ MasonryGrid),
/* harmony export */   MasonryImage: () => (/* binding */ MasonryImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _masonry_grid_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48896);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5772);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40980);
/* __next_internal_client_entry_do_not_use__ MasonryGrid,MasonryFrame,MasonryImage auto */ 



/** Grid container with vertical margin; does not affect internal masonry layout. */ function MasonryGrid({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masonry_grid_react__WEBPACK_IMPORTED_MODULE_2__/* .RegularMasonryGrid */ .yx, {
        ...props,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("my-5", className)
    });
}
const MasonryFrame = _masonry_grid_react__WEBPACK_IMPORTED_MODULE_2__/* .Frame */ .wI;
/** Wrapper to make Img (or any child) fill the Frame. Overrides Img's block/my-5/w-fit. */ const FILL_WRAPPER_CLASS = "size-full [&_span]:!m-0 [&_span]:!block [&_span]:!size-full [&_img]:!size-full [&_img]:!object-cover";
/** Convenience component: img or Img inside MasonryFrame for waterfall layout. */ function MasonryImage({ src, alt = "", width: ratioW = 4, height: ratioH = 3, className, children, ...imgProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masonry_grid_react__WEBPACK_IMPORTED_MODULE_2__/* .Frame */ .wI, {
        width: ratioW,
        height: ratioH,
        className: "overflow-hidden rounded-md",
        children: children != null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(FILL_WRAPPER_CLASS, className),
            children: children
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "relative size-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: typeof src === 'string' ? src : String(src ?? ''),
                alt: alt,
                fill: true,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("object-cover", className),
                sizes: "(max-width: 768px) 100vw, 50vw"
            })
        })
    });
}



/***/ }),

/***/ 69082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 71445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MermaidPanel: () => (/* binding */ MermaidPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50910);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94514);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67635);
/* harmony import */ var _barrel_optimize_names_Check_Copy_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6296);
/* harmony import */ var _barrel_optimize_names_SiMermaid_react_icons_si__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33282);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40980);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89239);
/* harmony import */ var _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15891);
/* __next_internal_client_entry_do_not_use__ MermaidPanel auto */ 







function CopyButton({ source, ariaLabel }) {
    const [copied, setCopied] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const handleCopy = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        navigator.clipboard.writeText(source).then(()=>{
            setCopied(true);
            const t = setTimeout(()=>setCopied(false), 2000);
            return ()=>clearTimeout(t);
        }, ()=>{});
    }, [
        source
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
        type: "button",
        variant: "ghost",
        size: "icon-sm",
        className: _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .articleCardPanelHeaderActionButton */ .io,
        onClick: handleCopy,
        "aria-label": ariaLabel,
        children: copied ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
            className: "size-4 text-foreground",
            "aria-hidden": true
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
            className: "size-4",
            "aria-hidden": true
        })
    });
}
function MermaidPanel({ source, title = 'Mermaid' }) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_6__/* .useTranslations */ .c)('mermaid');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .ArticleCardPanelRoot */ .T, {
        className: "mermaid-panel not-prose",
        "data-mermaid-panel": true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .ArticleCardPanelHeader */ .Cx, {
                as: "figcaption",
                left: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_SiMermaid_react_icons_si__WEBPACK_IMPORTED_MODULE_7__/* .SiMermaid */ .iUP, {
                            className: "size-4 shrink-0",
                            "aria-hidden": true
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__.cn)('truncate', _components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .articleCardPanelHeaderText */ .J0),
                            children: title.trim() || 'Mermaid'
                        })
                    ]
                }),
                right: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CopyButton, {
                    source: source,
                    ariaLabel: t('copyCode')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_article_card_panel__WEBPACK_IMPORTED_MODULE_3__/* .ArticleCardPanelBody */ .fY, {
                className: "relative flex min-h-[120px] justify-center overflow-x-auto p-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mermaid flex min-w-0 flex-1 flex-col items-center justify-center",
                    "data-mermaid-source": source,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mermaid-loading flex min-h-[120px] flex-col items-center justify-center gap-2",
                            "aria-live": "polite",
                            "aria-busy": "true",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_Copy_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                                    className: "size-8 animate-spin text-muted-foreground",
                                    "aria-hidden": true
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Loading diagram…"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "mermaid-output min-w-0 flex-1"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 81477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 89239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 93520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel),
/* harmony export */   CarouselContent: () => (/* binding */ CarouselContent),
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
/* __next_internal_client_entry_do_not_use__ Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious auto */ 






const CarouselContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
function useCarousel() {
    const ctx = react__WEBPACK_IMPORTED_MODULE_1__.useContext(CarouselContext);
    if (!ctx) {
        throw new Error('Carousel components must be used within a Carousel');
    }
    return ctx;
}
const Carousel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref)=>{
    const [emblaRef, api] = (0,embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y'
    }, plugins);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (!api || !setApi) return;
        setApi(api);
    }, [
        api,
        setApi
    ]);
    const contextValue = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>({
            api,
            emblaRef
        }), [
        api,
        emblaRef
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CarouselContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('relative', className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children: children
        })
    });
});
Carousel.displayName = 'Carousel';
const CarouselContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>{
    const { emblaRef } = useCarousel();
    const mergedRef = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((node)=>{
        emblaRef(node);
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
    }, [
        emblaRef,
        ref
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: mergedRef,
        className: "overflow-hidden",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('flex -ml-4', 'motion-reduce:overflow-auto', className),
            children: children
        })
    });
});
CarouselContent.displayName = 'CarouselContent';
const CarouselItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        role: "group",
        "aria-roledescription": "slide",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('min-w-0 shrink-0 grow-0 basis-full pl-4', className),
        ...props
    }));
CarouselItem.displayName = 'CarouselItem';
const CarouselPrevious = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant = 'outline', size = 'icon', onClick, ...props }, ref)=>{
    const { api } = useCarousel();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__/* .useTranslations */ .c)('carousel');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
        ref: ref,
        variant: variant,
        size: size,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)('absolute h-8 w-8 rounded-full', 'top-1/2 -translate-y-1/2 left-2', className),
        "aria-label": t('prevSlide'),
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

/***/ 98319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('relative pb-4 last:pb-0', className),
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
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(pillStyles, 'flex flex-row items-start gap-3 px-4 py-2.5', className),
        ...linkProps,
        children: children
    });
}


/***/ })

}]);