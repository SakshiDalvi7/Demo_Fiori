sap.ui.define(
  [
    "tcs/fin/ap/controller/BaseController",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (BaseController, MessageBox, Filter, FilterOperator) {
    "use strict";
    return BaseController.extend("tcs.fin.ap.controller.View1", {
      onInit: function() {
        // this how we obtain router object inside a controller
        this.oRouter = this.getOwnerComponent().getRouter();
        // register the RMH event
        this.oRouter.getRoute("detail").attachMatched(this.herculis.bind(this));
      },

      herculis: function(oEvent) {
        //  extract the parameter
        var fruitId = oEvent.getParameter("arguments").fruitId;
        // build the path again
        var sPath = "/ProductSet/" + fruitId;
        var oList = this.getView().byId("idList"); // Get the list control
        oList.setSelectedItem();
        var aItems = oList.getItems(); // Get all items in the list

        for (let i = 0; i < aItems.length; i++) {
          const element = aItems[i];
          var sItemPath = element.getBindingContextPath();
          if (sItemPath === sPath) {
            oList.setSelectedItem(element);
            return;
          }
        }
      },

      onGoTo: function(sIndex) {
        this.oRouter.navTo("detail", {
          fruitId: sIndex,
        });
        // MessageBox.confirm("this functionality is under construction");
        // var oAppCon = this.getView().getParent();
        // oAppCon.to("idView2");
      },

      onItemPress: function (oEvent) {
        // Step 1: Which item was selected by user
        var oSelectedItem = oEvent.getParameter("listItem");
        // Step 2: path of the element
        var sPath = oSelectedItem.getBindingContextPath();
        // Step 3: get the object of target which is view2
        // var oView2 = this.getView().getParent().getPages()[1];

        // detail page
        // var oView2 = this.getView().getParent().getParent().getDetailPages()[0];
        // // Step 4: perform element binding with View2
        // oView2.bindElement(sPath);

        // extract the index which is unique for every fruit
        var sIndex = sPath.split("/")[sPath.split("/").length - 1];

        this.onGoTo(sIndex);
        // this.onGoTo();
      },

      onItemDelete: function (oEvent) {
        // Step 1: get object of item
        var oItemToBeDeleted = oEvent.getParameter("listItem");
        // Step 2: get the list control object
        this.getView().byId("idList");
        var oList = oEvent.getSource();
        // Step 3: perform deletion of the item
        oList.removeItem(oItemToBeDeleted);
      },

      onItemsDelete: function () {
        // Step 1: get the list object
        var oList = this.getView().byId("idList");
        // Step 2: get all the selected items on that list
        var aSelItems = oList.getSelectedItems();
        // Step 3: Loop at all these items
        for (let i = 0; i < aSelItems.length; i++) {
          const element = aSelItems[i];
          // Step 4: Delete each item one by one
          oList.removeItem(element);
        }
      },

      onSearch: function (oEvent) {
        // step1: what is the value user is searching
        var sVal = oEvent.getParameter("query");
        // step2: construct a filter object using model class
        // like IF condition OP1 operator and OP2 - name CONTAINS
        var oFilter = new Filter("CATEGORY", FilterOperator.Contains, sVal);
        var oFilterCat = new Filter("color", FilterOperator.Contains, sVal);
        // var oFilter = new Filter("name", FilterOperator.Contains, sVal);
        // var oFilterCat = new Filter("color", FilterOperator.Contains, sVal);
        // step3: it is mandatory to add this filter or multiple filter in an array
        // var aFilter = [oFilter, oFilterCat];

        // construct a special or filter
        // var oFilterMain = new Filter({
        //   filters: aFilter,
        //   and: false,
        // });
        // step4: get the filtering of list for items
        var oBinding = this.getView().byId("idList").getBinding("items");
        // step 5: apply the filtering on our binding
        // oBinding.filter(oFilterMain);
        oBinding.filter(oFilter);
      },

      onAddProduct: function() {
        this.oRouter.navTo("add");
      }
    });
  }
);
