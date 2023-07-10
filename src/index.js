const header = document.querySelector('.header');
const offer = document.querySelector('.offer');

const headerHeight = header.offsetHeight;
const offerHeight = offer.offsetHeight;

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance >= offerHeight - headerHeight) {
        header.classList.add('header-fixed');
        offer.style.marginTop = `{$headerHeight}px`;
    } else {
        header.classList.remove('header-fixed');
        offer.style.marginTop = null;
    }
});

$('.header a').mPageScroll2id({
    offset: headerHeight,
    scrollSpeed: 1000,
    scrollEasing: 'easeInOutQuint',
});
