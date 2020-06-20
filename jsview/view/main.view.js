sap.ui.jsview("sap.ui.demo.walkthrough.view.main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.ui.demo.walkthrough.view.main
	 */
	getControllerName: function () {
		return "sap.ui.demo.walkthrough.controller.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sap.ui.demo.walkthrough.view.main
	 */
	createContent: function (oController) {
		var oButton = new sap.m.Button("Button1");
		return oButton;
	}

});