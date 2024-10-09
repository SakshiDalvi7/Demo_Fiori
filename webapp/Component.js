sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    // Component.js inherits from standard SAP UI5 class
    return UIComponent.extend("tcs.fin.ap.Component",{
        metadata: {
            manifest: "json"
        },

        init: function() {
            // here we call the base class constructor - prototype to invoke parent 
            // this is the object of the current component js
            UIComponent.prototype.init.apply(this);
            
            // get the router object 
            var oRouter = this.getRouter();

            // initialization of the router
            oRouter.initialize();
        },

        // createContent: function() {
        //     // return new sap.m.Button({text: "Click"});

        //     // create object of root view
        //     var oView = new sap.ui.view({
        //         id: "idRoot",
        //         viewName: "tcs.fin.ap.view.App",
        //         type: "XML"

        //     });

        //     // create object of our Views = V1, V2
        //     var oView1 = new sap.ui.view({
        //         id: "idView1",
        //         viewName: "tcs.fin.ap.view.View1",
        //         type: "XML"

        //     });

        //     var oView2 = new sap.ui.view({
        //         id: "idView2",
        //         viewName: "tcs.fin.ap.view.View2",
        //         type: "XML"

        //     });
        //     // get the object of container control from root view
        //    var oAppCon =  oView.byId("idAppCon");
        //     // inculcate(Add) view1 and view2 to the container control
        //     // oAppCon.addPage(oView1).addPage(oView2);

        //     // Master Page and Detail Page
        //     oAppCon.addMasterPage(oView1).addDetailPage(oView2);
        //     return oView;
        // },

        destroy: function() {

        }

    });
});