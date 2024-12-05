
window.addEventListener('scroll', scrollPosition = () => {
    let maxGap = 70;
    let minGap = 0;

    let newTop = maxGap - scrolled;
    if (newTop < minGap) {
                newTop = minGap;
            }
    stickyElement.style.top = newTop + 'px';
    document.getElementsByClassName("scroll__bar")[0].style.width = 0 + scrollPercent + "%"
})