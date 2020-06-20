sap.ui.define(["sap/ui/core/mvc/Controller",
				"sap/m/MessageToast"],
				function(Controller,MessageToast){
					"use strict";
					return Controller.extend("sap.ui.demo.walkthrough.HelloPanel",{
						
						onOpenDialog: function(){
							//console.log("open dialog pressed");
							this.getOwnerComponent().openHelloDialog();
						},
						onShowHello : function(){
							//console.log("show hello text");
							var oBundle = this.getView().getModel("i18n").getResourceBundle();
							var sRecipient = this.getView().getModel().getProperty("/recipient/name");
							var sMsg = oBundle.getText("showHelloMsg",[sRecipient]);
							MessageToast.show(sMsg,{duration:1000});
						}
						
					});
				});