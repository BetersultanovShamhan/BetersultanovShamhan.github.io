// Language detection

function LanguageInfo(){
  var n = navigator;
  this.UALanguage = n.language ? n.language : n.browserLanguage ? n.browserLanguage : null;
  this.userLanguage = n.userLanguage ? n.userLanguage : n.systemLanguage ? systemLanguage : null;
}
 
function getCookie ( lg )
{
  var results = document.cookie.match ( '(^|;) ?' + lg + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}
 
var oLanguage = new LanguageInfo(),
    lg = getCookie("lg"),
    locat = window.location;

if (!navigator.cookieEnabled || lg == 1) {

}
else if (locat != "http://sunauto.pl/") {
    document.cookie = "lg=1";
}
else if (oLanguage.userLanguage == "uk" || oLanguage.userLanguage == "uk-UA" || oLanguage.UALanguage == "uk" || oLanguage.UALanguage == "uk-UA") {
  document.cookie = "lg=1";
  location.href="/ru/";
}
else if (oLanguage.userLanguage == "ru" || oLanguage.userLanguage == "ru-RU" || oLanguage.UALanguage == "ru" || oLanguage.UALanguage == "ru-RU") {
  document.cookie = "lg=1";
  location.href="/ru/";
}
else if (oLanguage.userLanguage == "bu" || oLanguage.userLanguage == "bu-BU" || oLanguage.UALanguage == "bu" || oLanguage.UALanguage == "bu-BU") {
  document.cookie = "lg=1";
  location.href="/ru/";
}
else if (oLanguage.userLanguage == "pl" || oLanguage.userLanguage == "pl-PL" || oLanguage.UALanguage == "pl" || oLanguage.UALanguage == "pl-PL") {
  document.cookie = "lg=1";
  location.href="/";
}
else if (oLanguage.userLanguage == "en" || oLanguage.userLanguage == "en-EN" || oLanguage.UALanguage == "en" || oLanguage.UALanguage == "en-EN") {
  document.cookie = "lg=1";
  location.href="/en/";
}

// END Language detection