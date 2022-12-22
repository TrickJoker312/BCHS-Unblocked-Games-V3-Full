var buildFaqSection = function(faq) {
  var $details = document.createElement("details");
  var $question = buildQ(faq);
  var $answer = buildA(faq);
  $details.appendChild($question);
  $details.appendChild($answer);
  return $details;
};

var buildQ = function(faq) {
  var $summary = document.createElement("summary");
  var question = faq.question;
  $summary.innerText = question;
  return $summary;
};

var buildA = function(faq) {
  var $p = document.createElement("p");
  var answer = faq.answer;
  $p.innerHTML = answer; //innerHTML so elements can be added inline (<a>)
  return $p;
};

const faqwrapper = document.querySelector(".faq-wrapper");

for (var i = 0; i < faqArr.length; i++) {
  var $details = buildFaqSection(faqArr[i]);
  faqwrapper.appendChild($details);
}
