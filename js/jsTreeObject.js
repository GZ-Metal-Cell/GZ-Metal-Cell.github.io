class jsTreeObject {
    constructor(id, data) {
        this.div = $('<div></div>').attr('id', id);
        this.div.jstree({
            'core': {
                'data': function (_, cb) {
                    fetch(data)
                        .then(response => response.json())  // 解析 JSON 数据
                        .then(data => cb(data))  // 调用回调函数传递数据
                        .catch(error => console.error('加载' + data + '失败：' + error));  // 错误处理
                }
            }
        });
    }

    render() {
        $(document.currentScript).before(this.div);
    }
}
