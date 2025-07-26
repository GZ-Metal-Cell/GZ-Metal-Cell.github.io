class CodeFileTreeNode {
    constructor(id, isFolder, linkOrFolderName, children, lang, fileName, icon, opened = true) {
        this.id = id;
        this.isFolder = isFolder;
        this.opened = opened;
        if (isFolder) {
            this.folderName = linkOrFolderName;
            this.children = children;
            this.icon = icon || "far fa-folder";
        } else {
            this.link = linkOrFolderName;
            this.fileName = CodeFile.getFileName(linkOrFolderName, fileName);
            this.lang = CodeFile.getLang(linkOrFolderName, lang);
            this.icon = icon || "far fa-file-code";
            if (children) {
                throw new Error("CodeFileTreeNode should not have children if it is a file.");
            }
        }
    }

    // 添加转换到 jsTree 数据的方法
    convertToJsTreeData() {
        let node;
        if (this.isFolder) {
            node = {
                id: this.id,
                text: this.folderName,
                children: [],
                state: {
                    opened: this.opened
                },
                icon: this.icon,
                data: {
                    isFolder: true,
                },
            };
        } else {
            node = {
                id: this.id,
                text: this.fileName,
                children: [],
                state: {
                    opened: this.opened
                },
                icon: this.icon,
                data: {
                    isFolder: false,
                    link: this.link,
                    lang: this.lang,
                    fileName: this.fileName,
                }
            };
        }

        if (this.children && Array.isArray(this.children)) {
            node.children = this.children.map(childNode => childNode.convertToJsTreeData());
        }

        return node;
    }
}

class CodeFileTree {
    constructor(id, root, defaultNode) {
        this.id = id;
        this.root = root;
        this.defaultNode = defaultNode;
        this.jsTreeData = "";
        this.codeFile = null;
        this.jsTree = null;
        this.container = null;
    }

    render() {
        this.jsTreeData = this.root.convertToJsTreeData();
        this.jsTree = $(`<div id="${this.id}"></div>`).insertBefore(document.currentScript);
        this.container = this.jsTree.wrap(`<div class="code-file-tree-container"></div>`);

        const $this = this;

        $(document).ready(function () {
            $("#" + $this.id).jstree({
                'core': {
                    'data': $this.jsTreeData,  // 将解析后的数据传递给 jsTree
                }
            }).on('select_node.jstree', function (e, data) {
                const node = data.node;

                if (!node.data.isFolder) {
                    // console.log('你点击了文件：' + node.text, node);  // 弹出点击的节点文本
                    try {
                        if (!$this.codeFile || 
                            $this.codeFile.link !== node.data.link || 
                            $this.codeFile.lang !== node.data.lang || 
                            $this.codeFile.fileName !== node.data.fileName) {
                            
                            if ($this.codeFile) {
                                $this.codeFile.destroy();
                            }
                            
                            $this.codeFile = new CodeFile(node.data.link, node.data.lang, node.data.fileName, true);
                            $this.codeFile.render($this.jsTree);
                        }
                    } catch (error) {
                        console.error("代码文件加载失败：", error);
                    }
                    
                } else {
                    // console.log('你点击了文件夹：' + node.text, node);  // 弹出点击的节点文本
                }
            }).on('ready.jstree', function() {
                if($this.defaultNode) {
                    $("#" + $this.id).jstree('select_node', $this.defaultNode.id);
                }
            });
        });
    }
}