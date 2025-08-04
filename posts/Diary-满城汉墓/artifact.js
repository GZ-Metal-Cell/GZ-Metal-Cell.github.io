class Artifact {
    constructor(imgSrc, imgTSrc, title, content) {
        this.imgSrc = imgSrc;
        this.imgTSrc = imgTSrc;
        this.title = title;
        this.content = content;
    }

    render() {
        // 创建元素
        const artifactContainer = $('<div>').addClass('artifact-container');

        const artifactContainerLeft = $('<div>').addClass('artifact-container-left');

        const artifactImgContainer = $('<div>').addClass('artifact-img-container');

        const button1 = $('<button>').text('保定仿品');
        const button2 = $('<button>').text('庄里真品');

        var img1;
        
        if(this.imgSrc)
        {
            img1 = $('<img>').attr('no-figcaption', '').attr('src', this.imgSrc).attr('alt', '保定仿品');
            artifactImgContainer.append(img1);
            button1.addClass('pressed');
        } else {
            button1.prop('disabled', true);
        }

        var img2;

        if(this.imgTSrc)
        {
            var img2 = $('<img>').attr('no-figcaption', '').attr('src', this.imgTSrc).attr('alt', '庄里真品');
            if(this.imgSrc)
                img2.addClass('hidden');
            else
                button2.addClass('pressed');
            artifactImgContainer.append(img2);
        } else {
            button2.prop('disabled', true);
        }

        const artifactButtonContainer = $('<div>').addClass('artifact-button-container');

        // 绑定按钮点击事件
        if (img1 && img2){
            button1.on('click', () => {
                button2.removeClass('pressed');
                button1.addClass('pressed');
                img1.removeClass('hidden');
                img2.addClass('hidden');
            });

            button2.on('click', () => {
                button1.removeClass('pressed');
                button2.addClass('pressed');
                img2.removeClass('hidden');
                img1.addClass('hidden');
            });
        }

        artifactButtonContainer.append(button1).append(button2);

        artifactContainerLeft.append(artifactImgContainer).append(artifactButtonContainer);

        const artifactContainerRight = $('<blockquote>').addClass('artifact-container-right');

        const titlePara = $('<p>').addClass('title').text(this.title);

        const contentPara = $('<p>').text(this.content);

        artifactContainerRight.append(titlePara).append(contentPara);

        artifactContainer.append(artifactContainerLeft).append(artifactContainerRight);

        return artifactContainer;
    }
}
