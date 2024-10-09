sap.ui.define([
    'tcs/fin/ap/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast',
    'sap/ui/core/routing/History'
], function(BaseController, MessageBox, MessageToast, History) {
    'use strict';
    return BaseController.extend("tcs.fin.ap.controller.View3",{

        onInit: function() {
        // get my router
        this.oRouter = this.getOwnerComponent().getRouter();
        // register the RMH event
        this.oRouter.getRoute("supplier").attachMatched(this.herculis.bind(this));
        },
        herculis: function(oEvent) {
            //  extract the parameter
            var suppId = oEvent.getParameter("arguments").suppId;
            // build the path again
            var sPath = "/supplier/" + suppId;
            // perform element binding
            this.getView().bindElement(sPath);
        },
        onBack: function() {
            // MessageBox.confirm("this functionality is under construction");
            // var oAppCon = this.getView().getParent();
            // oAppCon.to("idView1");
            const oHistory = History.getInstance();
			const sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				const oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("detail", {fruitId: 0}, true);
			}
        }
    });
});