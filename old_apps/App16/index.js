sap.ui.define(["sap/ui/core/ComponentContainer"],
		function(ComponentContainer){
			"use strict";
			
			new ComponentContainer({
				name:"sap.ui.demo.walkthrough",
				async:true,
				settings:{
					"id":"walkthrough"
				}
			}).placeAt("content");
			
		});


/*
sap.ui.define(["sap/ui/core/ComponentContainer"],
		function(ComponentContainer){
			"use strict";
			console.log("Calling New Component Cotainer");
			new ComponentContainer({
				name:"sap.ui.demo.walkthrough",
				async:true,
				settings:{
					id:"walkthrough"
				}
				
			}).placeAt("content");
		});
		
		*/