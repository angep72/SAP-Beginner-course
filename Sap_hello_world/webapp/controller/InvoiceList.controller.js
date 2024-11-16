sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "ui5/walkthrough/model/Formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, Formatter, Filter, FilterOperator) {
    return Controller.extend("ui5.walkthrough.controller.invoiceList", {
      formatter: Formatter,
      onInit: function () {
        var oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },
      onFilterInvoices(oEvent) {
        // build filter array
        const aFilter = [];
        const sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }

        // filter binding
        const oList = this.byId("invoiceList");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
    });
  }
);
