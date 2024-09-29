const script = document.createElement('script');
script.src = chrome.runtime.getURL('scripts/inject.js');
(document.head || document.documentElement).appendChild(script);



const styleSheet = document.styleSheets[0];
function insertRule(rule) {
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
}
let colorfff = "{ color: #fff; }";
insertRule("body { background: #000; }");
insertRule(".settings-table tr td{ color: #fff; }");
insertRule(".ui-arrow-info-name"+colorfff);
insertRule(".ui-arrow-info-text"+colorfff);
insertRule(".ui-saved-item{ background-color: #555; }");
insertRule(".ui-new-item{ background-color: #222; }");
insertRule(".ui-maps-menu-item-name"+colorfff);