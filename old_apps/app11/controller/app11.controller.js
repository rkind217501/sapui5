sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],
		function(Controller,MessageToast){
			"use strict";
			return Controller.extend("sap.ui.demo.walkthrough.controller.app11",{
				onShowHello:function(){
					//read Message from i18n Model
					var oBundle = this.getView().getModel("i18n").getResourceBundle();
					var sRecipient = this.getView().getModel().getProperty("/recipient/name");
					var sMsg = oBundle.getText("helloMsg", [sRecipient]);
					MessageToast.show(sMsg);
				}
			});
		});