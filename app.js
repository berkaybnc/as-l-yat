(function () {
    var options = {
        whatsapp: "+905067770046",
        call_to_action: "Merhaba nasıl yardımcı olabiliriz?",
        position: "right",
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () {
        WhWidgetSendButton.init(host, proto, options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
})();

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// yorumlar
document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide-yorum');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto play
    setInterval(nextSlide, 3000);
});


// sıkça sorulan sorular
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


// checkbox için

// Başlangıç fiyatlarını belirle
var baslangicFiyatlari = {
    checkbox1: 7000, // Paket 1 için başlangıç fiyatı
    checkbox2: 5000,  // Paket 2 için başlangıç fiyatı
    checkbox3: 4000,
    checkbox4: 4500,

};

function topla(checkboxClass, resultElement) {
    var checkboxes = document.querySelectorAll('.' + checkboxClass + ':checked');
    var toplam = baslangicFiyatlari[checkboxClass]; // Başlangıç fiyatı ile başla

    checkboxes.forEach(function(checkbox) {
        toplam += parseInt(checkbox.value);
    });

    document.querySelector('.' + resultElement).innerText = 'Toplam: ' + toplam + '₺';
}

document.querySelectorAll('.paket').forEach(function(paket, index) {
    var checkboxClass = 'checkbox' + (index + 1);
    var resultElement = 'sonuc' + (index + 1);

    topla(checkboxClass, resultElement);

    paket.addEventListener('change', function() {
        topla(checkboxClass, resultElement);
    });
});



// slider-fiyat

