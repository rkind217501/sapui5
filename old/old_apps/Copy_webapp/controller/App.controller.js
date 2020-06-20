/*
sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello : function () {
         // show a native JavaScript alert
         alert("Hello World");
      }
   });
});
*/

/*
sap.ui.define(["sap/ui/core/mvc/Controller"],
	function (oController) {
		"use strict";
		return oController.extend("sap.ui.demo.walkthrough.controller.App", {
			onShowHello: function () {
				alert("Hello World");
			}
		});
	});
*/

sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],
				function(Controller,MessageToast){
					return Controller.extend(
						"sap.ui.demo.walkthrough.controller.App",{
						onShowHello:function(){
							MessageToast.show("Hello World");
						}
						
						});
				});