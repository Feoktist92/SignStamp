var header=document.querySelector(".header"),offer=document.querySelector(".offer"),headerHeight=header.offsetHeight,offerHeight=offer.offsetHeight;window.addEventListener("scroll",(function(){window.scrollY>=offerHeight-headerHeight?(header.classList.add("header-fixed"),offer.style.marginTop="{$headerHeight}px"):(header.classList.remove("header-fixed"),offer.style.marginTop=null)})),$(".header a").mPageScroll2id({offset:headerHeight,scrollSpeed:1e3,scrollEasing:"easeInOutQuint"});
//# sourceMappingURL=index.53548172.js.map