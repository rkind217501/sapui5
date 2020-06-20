sap.ui.define(["sap/ui/core/ComponentContainer"],
			function(ComponentContainer){
				"use strict";
				//alert("Before Container");
				new ComponentContainer(
					{	async:true,
						name:"sap.ui.demo.walkthrough",
						settings:{id:"walkthrough"}
					}
					).placeAt("content");
				//alert("after container");
			});