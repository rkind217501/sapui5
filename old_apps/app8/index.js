/*

sap.ui.define([],function(){
	"use strict";
	alert("UI5 is ready");
}
	);
*/

/*
sap.ui.define(["sap/m/Text"],function(Text){
	"use strict";
	new Text({text:"Hello World"}).placeAt("content");
	
});
*/

sap.ui.define(["sap/ui/core/mvc/XMLView"],function(XMLView){
	"use strict";
	XMLView.create({
		viewName:"sap.ui.demo.walkthrough.view.App8"
	}).then(
		function(oView){
			oView.placeAt("content");
		}
		);
	
});
