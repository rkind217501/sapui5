sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/model/resource/ResourceModel","sap/ui/model/json/JSONModel"],
		function(Controller,MessageToast,ResourceModel,JSONModel){
			"use strict";
			return Controller.extend("sap.ui.demo.walkthrough",{
				onInit:function(){
					//JSON Model Data for small data
					var oData = {recipient:{name:"World"}};
					var oModel = new JSONModel(oData);
					this.getView().setModel(oModel);
					
					//Set resource Model i18n
					var i18nModel = new ResourceModel({bundleName:"sap.ui.demo.walkthrough.i18n.i18n"});
					this.getView().setModel(i18nModel,"i18n");
					
					
					
				},
				onShowHelp: function(){
					var oBundle = this.getView().getModel("i18n").getResourceBundle();
					var sRecipient = this.getView().getModel().getProperty("/recipient/name");
					var sMsg=oBundle.getText("helloMsg",[sRecipient]);
					MessageToast.show(sMsg);
					
				}
				
				
				
				
			});
		});