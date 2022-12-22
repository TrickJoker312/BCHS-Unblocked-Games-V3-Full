var buildboxdiv = function(slider) {
    var $boxdiv = document.createElement("div");
    $boxdiv.classList.add("box");
    $boxdiv.classList.add(slider.boxdivclass);
    var $bgdiv = buildbgdiv(slider);
    var $detailsdiv = builddetailsdiv(slider);
    var $illustrationdiv = buildillustrationdiv(slider);
    $boxdiv.appendChild($bgdiv);
    $boxdiv.appendChild($detailsdiv);
    $boxdiv.appendChild($illustrationdiv);
    return $boxdiv;
  };

  const buildbgdiv = () => {
    var $div = document.createElement("div");
    $div.classList.add("bg");
    return $div;
  };

  const builddetailsdiv = (slider) => {
    const $div = document.createElement("div");
    $div.classList.add("details");
    const $h1 = document.createElement("h1");
    $h1.classList.add("slider-title");
    $h1.innerText = slider.title;
    $div.appendChild($h1);
    const $p = document.createElement("p");
    $p.classList.add("slider-desc");
    $p.innerText = slider.desc;
    $div.appendChild($p);
    const $a = document.createElement("a");
    $a.setAttribute("target", "_top");
    $a.setAttribute("href", "/" + slider.link + ".html");
    const $button = document.createElement("button");
    $button.innerText = "Play Now";
    $a.appendChild($button);
    $div.appendChild($a);
    return $div;
  };

  const buildillustrationdiv = (slider) => {
    const $div = document.createElement("div");
    $div.classList.add("illustration");
    const $img = document.createElement("img");
    $img.classList.add("show");
    $img.setAttribute("src", "/assets/img/games/" + slider.imgsrc);
    $img.setAttribute("alt", slider.title);
    $div.appendChild($img);
    return $div;
  };

  var arr = [];

  for (var i = 0; i < sliderArr.length; i++) {
    var $boxdiv = buildboxdiv(sliderArr[i]);
    arr.push($boxdiv.outerHTML);
  }

  document.querySelector(".slider").innerHTML = arr.join("");