class CodeFile {
    // 静态变量，用来检查初始化函数是否已经调用
    static isInitialized = false;
    // 静态变量，用来记录所有的实例
    static Instances = [];

    constructor(link, lang = "", fileName = "", needRender = true) {
        this.link = link;
        this.fileName = CodeFile.getFileName(link, fileName)
        this.lang = CodeFile.getLang(this.fileName, lang);
        this.text = "";
        this.$codeElement = null;
        this.$preElement = null;
        this.$root = null;

        this.needRender = needRender;
        this.rendered = false;

        if (!CodeFile.isInitialized) {
            CodeFile.isInitialized = true;

            try {
                hljs.configure({
                    languages: [] // 禁用所有语言自动检测
                });

            } catch (error) {
                console.log('初始化代码高亮时出错：', error);
            }
        }

        CodeFile.Instances.push(this);  // 记录实例

    }

    static getFileName(link,fileName = "") {
        return fileName || link.split('/').pop();
    }

    static getLang(fileName, lang = "") {
        return lang || CodeFile.getLanguageFromExtension(fileName.split('.').pop());
    }

    async loadFile() {
        return fetch(this.link)
            .then(response => {
                if (!response.ok) {
                    throw new Error('网络响应失败');
                }
                return response.text();
            }).then(data => {
                this.text = data;
            })
            .catch(error => {
                console.log('读取文件失败: ' + error.message);
            });
    }

    render(anchor) {
        if (this.rendered) {
            throw new Error('代码块已渲染');
        }
        if (!this.needRender) {
            throw new Error('代码块不需要渲染');
        }
        if (!anchor) {
            anchor = $(document.currentScript);
        }
        this.loadFile().then(() => {
            let $preElement = $('<pre></pre>');
            let $codeElement = $('<code></code>').text(this.text.trim());  // 创建 <code> 元素并设置文本内容
            $preElement.addClass('hljs');
            $preElement.addClass(this.lang);
            $preElement.append($codeElement);
            this.$preElement = $preElement;
            this.$codeElement = $codeElement;
            this.$root = this.$preElement;

            anchor.before($preElement);

            hljs.highlightBlock(this.$codeElement[0]);
            this.rendered = true;
            CodeFile.initLineNumbers();
            $(document).trigger('CodeFileRendered', [this]);
        });
    }

    destroy() {
        this.needRender = false;
        this.rendered = false;
        this.$root.remove();
    }

    static initLineNumbers() {
        // 判定是否所有代码块都已经渲染完成
        CodeFile.Instances.forEach((el) => {
            if (!el.rendered && el.needRender) {
                return;
            }
        });
        // 启用行号
        try {
            hljs.initLineNumbersOnLoad();
        }
        catch (error) {
            console.log('初始化行号时出错:', error);
        }
    }

    static getLanguageFromExtension(extension) {
        const languageMap = {
            'c': 'C',
            'cpp': 'C++',
            'cc': 'C++',
            'cxx': 'C++',
            'cs': 'C#',
            'java': 'Java',
            'py': 'Python',
            'js': 'JavaScript',
            'ts': 'TypeScript',
            'html': 'HTML',
            'htm': 'HTML',
            'css': 'CSS',
            'less': 'LESS',
            'sass': 'Sass',
            'scss': 'SCSS',
            'php': 'PHP',
            'rb': 'Ruby',
            'swift': 'Swift',
            'go': 'Go',
            'rs': 'Rust',
            'kt': 'Kotlin',
            'kts': 'Kotlin',
            'm': 'Objective-C',
            'h': 'Objective-C',
            'r': 'R',
            'sql': 'SQL',
            'sh': 'Shell',
            'bat': 'Batch',
            'ps1': 'PowerShell',
            'md': 'Markdown',
            'json': 'JSON',
            'xml': 'XML',
            'yaml': 'YAML',
            'yml': 'YAML',
            'toml': 'TOML',
            'lua': 'Lua',
            'hs': 'Haskell',
            'pl': 'Perl',
            'vhd': 'VHDL',
            'vhdl': 'VHDL',
            'v': 'Verilog',
            'sv': 'Verilog',
            'asm': 'Assembly',
            'tex': 'LaTeX',
            'sty': 'LaTeX',
            'styl': 'Stylus',
            'vue': 'Vue',
            'hlsl': 'HLSL',
            'glsl': 'GLSL',
            'ini': 'INI',
            'conf': 'INI',
            'cfg': 'INI',
        };

        // 获取后缀并转换为小写，避免大小写不一致
        extension = extension.toLowerCase();

        // 返回对应的语言，若没有找到则返回未知
        return languageMap[extension] || 'plaintext';
    }
}