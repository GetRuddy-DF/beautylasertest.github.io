function slowScroll(id) {
    $('html, body') .animate({
        scrollTop: $(id).offset().top,
        scrollPeeling: $(id).offset().peeling,
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
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-slide";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// 
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }