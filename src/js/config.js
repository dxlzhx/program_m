require.config({
	baseUrl : "/", 
	paths : {
		"jquery" : ["https://code.jquery.com/jquery-1.12.4.min", "lib/jquery/jquery-1.12.4.min"],
		"cookie" : "/lib/jquery_plugins/jquery.cookie",
		"zoom" : "/lib/jquery_plugins/jquery.elevateZoom-3.0.8.min",
		"fly" : "/lib/jquery_plugins/jquery.fly.min",
		"template" : "/lib/arttemplate/template",
		"load" : "/js/loadHeaderFooter",
		"carousel":"/js/carousel"
	},
	shim : {
		"zoom" : {
			deps : ["jquery"]
		},
		"fly":{
			deps : ["jquery"]
		},
		"carousel":{
			deps:["jquery"]
		}
	}
});