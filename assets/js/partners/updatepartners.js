//Build testimonial section
const buildpartnerscardwrapper = (partners) => {
    const $cardwrapper = document.createElement("div");
    const $a = document.createElement("a");
    $cardwrapper.classList.add("card-wrapper");
    var $card = buildpartnerscard(partners);
    $a.setAttribute("href", "https://" + partners.link)
    $a.setAttribute("target", "_blank")
    $a.setAttribute("rel", "noreferrer")
    $a.appendChild($card);
    $cardwrapper.appendChild($a);
    return $cardwrapper;
  };
  
  const buildpartnerscard = (partners) => {
    const $div = document.createElement("div");
    $div.classList.add("card", "text-center");
  
    const $img = document.createElement("img");
    $img.classList.add("card-img-top");
    $img.setAttribute("src", "/assets/img/partners/" + partners.image);
    $img.setAttribute("alt", partners.name);
    $div.appendChild($img);
  
    const $cardbody = document.createElement("div");
    $cardbody.classList.add("card-body");
  
    const $h5 = document.createElement("h5");
    $h5.innerText = partners.name;
    $cardbody.appendChild($h5);
    const $q = document.createElement("q");
    const $i = document.createElement("i");
  
    const $p = document.createElement("p");
    $p.classList.add("card-text");
    $q.innerText = partners.blurb;
  
    $i.appendChild($q);
    $p.appendChild($i);
  
    $cardbody.appendChild($p);
    $div.appendChild($cardbody);
    return $div;
  };
  
  let partnerswrap = document.querySelector("#partners-wrap");
  
  for (let i = 0; i < partners.length; i++) {
    let $partners = buildpartnerscardwrapper(partners[i]);
    partnerswrap.appendChild($partners);
  }
  
  //Testimonial slider using owlcarousel
  (function () {
    "use strict";
  
    const carousels = () => {
      $(".owl-carousel2").owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 750,
        touchDrag: false,
        mouseDrag: false,
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