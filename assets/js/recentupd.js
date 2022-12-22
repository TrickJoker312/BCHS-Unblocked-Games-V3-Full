const buildLogSection = (log) => {
  const $section = document.createElement("section");
  $section.classList.add("log");
  const $version = buildLogVer(log);
  const $date = buildLogTitle(log);
  const $list = buildLogList(log);
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

const buildLogTitle = (log) => {
  const $title = document.createElement("h2");
  const date = log.date;
  $title.innerText = date;
  return $title;
};

const buildLogList = (log) => {
  const $ul = document.createElement("ul");
  const list = log.list || [];
  for (var i = 0; i < list.length; i++) {
    let item = list[i];
    let $li = buildLogItem(item);
    $ul.appendChild($li);
  }
  return $ul;
};

const buildLogItem = (item) => {
  var $li = document.createElement("li");
  var $labels = document.createElement("div");
  $labels.classList.add("label-wrapper");
  var $detail = document.createElement("div");
  $detail.classList.add("detail-wrapper");

  item.label.forEach(function (label) {
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

const $section = buildLogSection(logArr[0]);
document.querySelector(".recent-upd-container").appendChild($section);