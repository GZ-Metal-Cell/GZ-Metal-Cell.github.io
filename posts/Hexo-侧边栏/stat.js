function wordCount() {
    function stripHTML(html) {
        return html.replace(/<[^>]*>/g, "");
    }

    function counter(content) {
        content = stripHTML(content);
        const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length;
        const en = (content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length;
        return cn + en;
    };

    var count = counter($('.post-content-info').text());

    return Math.round(count / 100) / 10 + 'k';
}