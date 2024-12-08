// search.js
// A local search script with the help of hexo-generator-search
// Copyright (C) 2015 
// Joseph Pan <http://github.com/wzpan>
// Shuhao Mao <http://github.com/maoshuhao>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
// 
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
// 
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA

var searchFunc = function (path, input_id, content_id, result_id) {
    var $input = $("#" + input_id);
    var $content = $("#" + content_id);
    var $result = $("#" + result_id);
    
    $result.html("搜索功能加载中……");
    $.ajax({
        url: path,
        dataType: "xml",
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            // 绑定 progress 事件，用于获取加载进度
            xhr.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;
                    $result.html("搜索功能加载中…… " + percentComplete.toFixed(2) + "%");
                }
            }, false);
            return xhr;
        },
        success: function (xmlResponse) {
            $result.empty();  // 隐藏加载提示
            
            // 从搜索数据中获取内容
            var datas = $("entry", xmlResponse).map(function () {
                return {
                    title: $("title", this).text(),
                    content: $("content", this).text(),
                    url: $("url", this).text()
                };
            }).get();
            
            search();
            
            $input.on('input', function () { search(); });

            function search() {
                var str = '<ul class="search-result-list">';
                var keywords = $input.val().trim().split(/[\s\-]+/);  
                $content.empty();
                
                if ($input.val().trim().length <= 0) {
                    $result.text("");
                    return;
                }
                
                datas.forEach(function (data) {
                    var isMatch = true;
                    if (!data.title || data.title.trim() === '') {
                        data.title = "Untitled";
                    }
                    var data_title = data.title.trim();
                    var data_content = data.content.trim().replace(/<[^>]+>/g, "");
                    var data_url = data.url;
                    var index_title = -1;
                    var index_content = -1;
                    var first_occur = -1;

                    if (data_content !== '') {
                        keywords.forEach(function (keyword, i) {
                            index_title = data_title.indexOf(keyword);
                            index_content = data_content.indexOf(keyword);
                            
                            if (index_title < 0 && index_content < 0) {
                                isMatch = false;
                            } else {
                                if (index_content < 0) {
                                    index_content = 0;
                                }
                                if (i == 0) {
                                    first_occur = index_content;
                                }
                            }
                        });
                    } else {
                        isMatch = false;
                    }

                    if (isMatch) {
                        str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
                        var content = data.content.trim().replace(/<[^>]+>/g, "");
                        if (first_occur >= 0) {
                            var start = first_occur - 20;
                            var end = first_occur + 80;
                            start = Math.max(0, start);
                            end = Math.min(content.length, end);
                            var match_content = content.substr(start, end);
                            
                            keywords.forEach(function (keyword) {
                                var regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                            });
                            str += "<p class=\"search-result\">" + match_content + "...</p>"
                        }
                        str += "</li>";
                    }
                });
                
                str += "</ul>";
                if (str.indexOf('<li>') === -1) {
                    $result.text("");
                    return $content.html("<ul><span class='result-empty'>没有找到内容，更换下搜索词试试吧~<span></ul>");
                } else {
                    $result.html("匹配到 <b><font size=\"5px\">" + str.match(/<li>/g).length + "</font></b> 个结果。");
                }
                
                $content.html(str);
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX Request Failed: ", status, error);
            $result.html("搜索功能加载失败，请检查控制台日志了解详细信息。");
        }
    });
}