//Build testimonial section
const buildcardwrapper = (testimonialsArr) => {
  const $cardwrapper = document.createElement("div");
  $cardwrapper.classList.add("card-wrapper");
  var $card = buildcard(testimonialsArr);
  $cardwrapper.appendChild($card);
  return $cardwrapper;
};

const buildcard = (testimonialsArr) => {
  const $div = document.createElement("div");
  $div.classList.add("card", "text-center");

  const $pfp = document.createElement("img");
  $pfp.classList.add("card-img-top");
  $pfp.setAttribute("src", "/assets/img/testimonials/" + testimonialsArr.pfpsrc);
  $pfp.setAttribute("alt", testimonialsArr.name);
  $div.appendChild($pfp);

  const $cardbody = document.createElement("div");
  $cardbody.classList.add("card-body");

  const $h5 = document.createElement("h5");
  $h5.innerText = testimonialsArr.name;
  $cardbody.appendChild($h5);
  const $q = document.createElement("q");
  const $i = document.createElement("i");

  const $p = document.createElement("p");
  $p.classList.add("card-text");
  $q.innerText = testimonialsArr.testimonial;

  $i.appendChild($q);
  $p.appendChild($i);

  $cardbody.appendChild($p);
  $div.appendChild($cardbody);
  return $div;
};

var testimonialwrap = document.querySelector("#testimonial-wrap");

for (var i = 0; i < testimonialsArr.length; i++) {
  var $testimonials = buildcardwrapper(testimonialsArr[i]);
  testimonialwrap.appendChild($testimonials);
}

//Testimonial slider using owlcarousel
(function () {
  "use strict";

  const carousels = () => {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 750,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        680: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();