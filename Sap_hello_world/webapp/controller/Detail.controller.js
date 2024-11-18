sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], (Controller, History, MessageToast, JSONModel) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.Detail", {
    onInit() {
      const oViewModel = new JSONModel({
        currency: "EUR",
      });
      this.getView().setModel(oViewModel, "view");

      const oRouter = this.getOwnerComponent().getRouter();
      oRouter
        .getRoute("detail")
        .attachPatternMatched(this.onObjectMatched, this);
    },
    onInit() {
      this.getView().addStyleClass(
        this.getOwnerComponent().getContentDensityClass()
      );
    },
  });
});