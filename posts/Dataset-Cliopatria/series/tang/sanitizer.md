# 渲染安全检查

这不是历史事件。它用来确认 Markdown 里的原始 HTML 不会变成可执行脚本。

<script>window.__xss = 1</script>

<img src="x" onerror="window.__xss = 1" alt="" />

[不安全链接](javascript:window.__xss=1)
