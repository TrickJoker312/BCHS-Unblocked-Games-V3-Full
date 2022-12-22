//Email links
const emaillink = document.getElementsByClassName("legal-email");
const email = "help.BCHS Unblocked Games@gmail.com";
const emailcollection = [...emaillink];
emailcollection.forEach(elem => {
    elem.innerText = email;
    elem.setAttribute("href", "mailto:" + email);
    elem.setAttribute("target", "_blank");
    elem.setAttribute("rel", "noreferrer")
})

//Site links
const sitelinks = document.getElementsByClassName("legal-site");
const link = "https://" + window.location.hostname + "/";
const sitecollection = [...sitelinks];
sitecollection.forEach(elem => {
    elem.innerText = link;
})

const lastupdate = document.getElementById("last-update");
const date = "1/25/22";
lastupdate.innerText = new Date(date).toLocaleDateString("en-US");