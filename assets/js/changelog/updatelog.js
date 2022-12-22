var buildLogSection = function(log) {
    var $section = document.createElement("section");
    $section.classList.add("log");
    var $version = buildLogVer(log);
    var $date = buildLogTitle(log);
    var $list = buildLogList(log);
    $section.appendChild($version);
    $section.appendChild($date);
    $section.appendChild($list);
    return $section;
  };

  const buildLogVer = (log) => {
    const $ver = document.createElement("h1");
    const v = log.version;
    $ver.innerText = "v" + v;
    $ver.style.fontSize = "2.5rem";
    return $ver;
  }

  var buildLogTitle = function(log) {
    var $title = document.createElement("h2");
    var date = log.date;
    $title.innerText = date;
    return $title;
  };

  var buildLogList = function(log) {
    var $ul = document.createElement("ul");
    var list = log.list || [];
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var $li = buildLogItem(item);
      $ul.appendChild($li);
    }
    return $ul;
  };

  var buildLogItem = function(item) {
    var $li = document.createElement("li");
    var $labels = document.createElement("div");
    $labels.classList.add("label-wrapper");
    var $detail = document.createElement("div");
    $detail.classList.add("detail-wrapper");

    item.label.forEach(function(label) {
      var $label = document.createElement("span");
      $label.classList.add("label", "label-" + label.toLowerCase());
      $label.innerText = label;
      $labels.appendChild($label);
    });

    $detail.innerHTML = item.detail;

    $li.appendChild($labels);
    $li.appendChild($detail);

    return $li;
  };

  const logwrapper = document.querySelector(".log-wrapper");

  for (var i = 0; i < logArr.length; i++) {
    var $section = buildLogSection(logArr[i]);
    logwrapper.appendChild($section);
  }