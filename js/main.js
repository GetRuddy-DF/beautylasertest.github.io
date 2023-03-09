function slowScroll(id) {
    $('html, body') .animate({
        scrollTop: $(id).offset().top,
        scrollServices: $(id).offset().services,
        scrollPrice: $(id).offset().price,
        scrollAdvantages: $(id).offset().advantages,
        scrollMaster: $(id).offset().master,
        scrollContacts: $(id).offset().contacts
    }, 500);
}

$("#sendMail").on("click", function() {
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();

    if(name == "") {
        $("#errorMess").text("Введите имя");
        return false;
    } else if (phone == "") {
        $("#errorMess").text("Введите номер");
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'phone': phone},
        dataType: 'html',
        beforSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        succes: function(data) {
            if(!data)
            alert("Произошла ошибка сообщение не отправлено!");
            else 
            $("#form_input").trigger("reset");

            $("#sendMail").prop("disabled", false);
        }
    });
});

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

// 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}