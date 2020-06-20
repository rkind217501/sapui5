sap.ui.define([],function(){
	"use strict";
	return {
		statusText:function(sStatus){
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			switch(sStatus){
					case "A" : return oBundle.getText("invoiceStatusA");
					case "B" : return oBundle.getText("invoiceStatusB");
					case "C" : return oBundle.getText("invoiceStatusC");
					default: return sStatus;
			}
		}
	};
});