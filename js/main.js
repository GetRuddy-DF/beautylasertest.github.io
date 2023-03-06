function slowScroll(id) {
    $('html, body') .animate({
        scrollTop: $(id).offset().top,
        scrollServices: $(id).offset().services,
        scrollPrice: $(id).offset().price,
        scrollAdvantages: $(id).offset().advantages,
        scrollMaster: $(id).offset().master
    }, 500);
}


$(document).on("scroll", function () {
    if($(window).scrollTop() === 0)
    $("header").removeClass("fixed");
    else
    $("header").attr("class","fixed");
});

document.querySelector('.humburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('#about').classList.toggle('open');
})