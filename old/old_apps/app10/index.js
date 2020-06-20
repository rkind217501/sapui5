sap.ui.define(["sap/ui/core/mvc/XMLView"],
	function(XMLView){
		XMLView.create({viewName:"sap.ui.demo.walkthrough.view.app"})
			.then(function(oView){
				oView.placeAt("content");
			});
	});