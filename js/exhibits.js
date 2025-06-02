var exhibitsCount = 0;

class Exhibits {
    constructor(ravity, img, title, desc="", quote="") {
        this.exhibitsContainer = $('<div>').addClass('exhibits-container').addClass(ravity);
        exhibitsCount += 1;
        if (exhibitsCount % 2 == 0) {
            this.exhibitsContainer.addClass('reverse');
        }
        const exhibitsContainerLeft = $('<div>').addClass('exhibits-container-left');
        const exhibitsImgContainer = $('<div>').addClass('exhibits-img-container');

        if (img.length == 1) {
            exhibitsImgContainer.append($('<img>').attr('no-figcaption', '').attr('src', img[0][0]).attr('alt', img[0][1]));
        }
        else {
            const fCarousel = $('<div>').addClass('f-carousel');
            const fCarouselViewport = $('<div>').addClass('f-carousel__viewport');
            fCarousel.append(fCarouselViewport);
            const fCarouselTrack = $('<div>').addClass('f-carousel__track');
            fCarouselViewport.append(fCarouselTrack);

            for (const item of img) {
                let fCarouselSlide = $('<div>').addClass('f-carousel__slide');
                fCarouselSlide.append($('<img>').attr('no-figcaption', '').attr('src', item[0]).attr('alt', item[1]));
                fCarouselTrack.append(fCarouselSlide);
            }
            exhibitsImgContainer.append(fCarousel);
            new Carousel(fCarousel.get(0), {});
        }

        exhibitsContainerLeft.append(exhibitsImgContainer);
        const exhibitsContainerRight = $('<div>').addClass('exhibits-container-right');
        const titlePara = $('<p>').addClass('title').text(title);

        exhibitsContainerRight.append(titlePara);

        if (desc.length > 0) {
            const descPara = $('<p>').addClass('desc').text(desc);
            exhibitsContainerRight.append(descPara);
        }

        if(quote.length > 0) {
            const quotePara = $('<blockquote>').append($('<p>').text(quote));
            exhibitsContainerRight.append(quotePara);
        }
        
        this.exhibitsContainer.append(exhibitsContainerLeft).append(exhibitsContainerRight);
    }

    render() {
        $(document.currentScript).before(this.exhibitsContainer);
    }
}
