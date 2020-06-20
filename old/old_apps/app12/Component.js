sap.ui.define(["sap/ui/core/UIComponent",
				"sap/ui/model/json/JSONModel",
				"sap/ui/model/resource/ResourceModel"],
				function(UIComponent,JSONModel,ResourceModel){
					"use strict";
					//alert("in component");
					return UIComponent.extend(
						"sap.ui.demo.walkthrough.Component",
						{metadata:
									{manifest:"json"	
									},
									init:function(){
										UIComponent.prototype.init.apply(this,arguments);
										//alert("in component after prototype");
										//JSON Model
										var oData={recipient:{name:"World"}};
										var oModel=new JSONModel(oData);
										this.setModel(oModel);
										//internationalization i18n Resource Model

									}
							
						}
					);
				}
			);