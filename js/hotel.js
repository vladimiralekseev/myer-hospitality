let hotelSlider = new Splide('.js-hotel-splide', {
    perPage: 1,
    rewind: true,
    type: 'loop',
    pagination: false
});
hotelSlider.mount();

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

let gallerySlider = new Splide('.js-gallery-splide', {
    perPage: 1,
    rewind: true,
    type: 'loop',
    pagination: false
});
gallerySlider.on('moved', function (newIndex, prevIndex, destIndex) {
    console.log(newIndex, prevIndex, destIndex)
    extendImages.setExtendImages(newIndex)
});
gallerySlider.mount();

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
        $('.js-splide-info > div').text((i+1) + '/' + gallerySlider.r.length)
        console.log(gallerySlider.r.length)
    }
}
extendImages.init();


