document.addEventListener('DOMContentLoaded', function () {
    // Clear Search 
    function clearSearch() {
        const input = document.querySelector('.searchbar input');
        input.value = ''; 
        input.focus(); 
        document.querySelector('.clear-button').style.display = 'none'; 
    }

    const searchInput = document.querySelector('.searchbar input');
    const clearButton = document.querySelector('.clear-button');

    if (searchInput && clearButton) {
        searchInput.addEventListener('input', function () {
            clearButton.style.display = this.value ? 'inline' : 'none'; 
        });

        clearButton.addEventListener('click', clearSearch);
    }

    //  Swiper slide for cards
    const swiper2 = new Swiper(".cardimg", {
        slidePerView: 1, 
        loop: true,
        autoplay: {
            delay: 3000, 
        },
        speed: 400,
        pagination: {
            el: '.slider__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
