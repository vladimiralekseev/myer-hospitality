if ($('.js-hotel-splide').length) {
    let hotelSlider = new Splide('.js-hotel-splide', {
        perPage: 1,
        rewind: true,
        type: 'loop',
        pagination: false
    });
    hotelSlider.mount();
}

if ($('.js-rooms-splide').length) {
    let roomsSlider = new Splide('.js-rooms-splide', {
        perPage: perPageCount(),
        rewind: true,
        type: 'loop',
        gap: '1rem',
        pagination: false
    });
    roomsSlider.on('resize', function () {
        roomsSlider.options = {
            perPage: perPageCount(),
        };
    });
    roomsSlider.mount();
}

if ($('.js-awards-list-splide').length) {
    const arr = []
    $('.js-awards-list-splide').each(function(i) {
        console.log('.js-awards-list-splide-' + i)
        arr.push(new Splide('.js-awards-list-splide-' + i, {
            rewind: true,
            type: 'loop',
            gap: '1rem',
            pagination: false,
            autoWidth: true,
        }));
        arr[i].mount();
    });
}

if ($('.js-tickets-splide').length) {
    let ticketsSlider = new Splide('.js-tickets-splide', {
        perPage: perPageCount(),
        rewind: true,
        type: 'loop',
        gap: '1rem',
        pagination: false
    });
    ticketsSlider.on('resize', function () {
        ticketsSlider.options = {
            perPage: perPageCount(),
        };
    });
    ticketsSlider.mount();
}

if ($('.js-packages-splide').length) {
    let packagesSlider = new Splide('.js-packages-splide', {
        perPage: perPageCount(),
        rewind: true,
        type: 'loop',
        gap: '1rem',
        pagination: false
    });

    packagesSlider.on('resize', function () {
        packagesSlider.options = {
            perPage: perPageCount(),
        };
    });
    packagesSlider.mount();
}

if ($('.js-reviews-splide').length) {
    let reviewsSlider = new Splide('.js-reviews-splide', {
        perPage: perPageCount(),
        rewind: true,
        type: 'loop',
        gap: '1rem',
        pagination: false
    });

    reviewsSlider.on('resize', function () {
        reviewsSlider.options = {
            perPage: perPageCount(),
        };
    });
    reviewsSlider.mount();
}

if ($('.js-gallery-splide').length) {
    const arrGallery = []

    let extendImages = {
        init: function() {
            this.setExtendImages(0)
            $('.js-extend-images > div').eq(0).click(function(){
                $('.js-gallery-splide .splide__arrow--next').trigger('click')
            });
            $('.js-extend-images > div').eq(1).click(function(){
                $('.js-gallery-splide .splide__arrow--next').trigger('click')
                $('.js-gallery-splide .splide__arrow--next').trigger('click')
            });
        },
        setExtendImages: function(i) {
            const c = $('.js-gallery-splide').find('li').length
            const img1 = $('.js-gallery-splide').find('li').eq(c > i ? i : 0)
            const img2 = $('.js-gallery-splide').find('li').eq(c > i+1 ? i+1 : 1)
            $('.js-extend-images > div').eq(0).css('background-image', 'url(' + img1.data('img') + ')')
            $('.js-extend-images > div').eq(1).css('background-image', 'url(' + img2.data('img') + ')')
        }
    }
    extendImages.init();

    $('.js-gallery-splide').each(function(i) {
        const jsId = 'js-gallery-splide-' + i
        $(this).addClass(jsId)

        arrGallery.push(
            new Splide('.' + jsId, {
                perPage: 1,
                rewind: true,
                type: 'loop',
                pagination: false
            })
        )
        arrGallery[i].on('moved ready', function (newIndex, prevIndex, destIndex) {
            extendImages.setExtendImages(newIndex)
            if (!newIndex) {
                newIndex = 0
            }
            console.log(newIndex)
            console.log('.' + jsId + ' .js-splide-info > div')
            $('.' + jsId).closest('.gallery').find('.js-splide-info > div').text((newIndex+1) + '/' + arrGallery[i].r.length)
        });
        arrGallery[i].mount();
    });
}


