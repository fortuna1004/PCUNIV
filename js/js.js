var jsImport = [
	"../../js/jquery-3.4.1.min.js",
	"../../js/jquery-ui.min.js", 
	"../../js/confirm-3.3.4.js",
	"../../js/bxslider-4.1.2.js",
	"../../js/scrollify-1.0.21.js",
	"../../js/jqcloud-2.0.3.min.js",
];

for(var i=0; i < jsImport.length; i++){
    document.write('<script type="text/javascript" src="'+ jsImport[i] + '"></script>');
}   