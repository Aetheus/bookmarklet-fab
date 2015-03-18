//copy-pasta this code into the app's webview execution onpageload so it will call bmk.js
// this WILL NOT WORK ON SOME WEBSITES. ONLY USE FOR TESTING WITH WEBSITES IT WILL WORK ON. OTHRWISE, USE THE ACTUAL BMK.JS!!!!!
javascript:(function(){
	var jqscript = document.createElement("script");
	jqscript.src = "https://raw.githubusercontent.com/Aetheus/bookmarklet-fab/master/bmk.js";
	document.head.appendChild(jqscript);
})();
