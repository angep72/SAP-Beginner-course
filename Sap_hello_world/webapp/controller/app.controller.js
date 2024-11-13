// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ],function(Controller){
// "use strict"
// return Controller.extend("sap.ui.walkthrough.controller.App",{
// onShowHello:function (){
// alert('hello this is the pop')
// }
// })
// })

// Step 5(controllers)
// ========================
// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ],function(Controller){
//   return Controller.extend("ui5.walkthrough.controller.App",{
//     onShowHello:()=>{
//         alert("hello controller")
//     }
//   })
// })

// Step 6 Modules
// ==================
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast"
// ],function(Controller,MessageToast){
//     "use strict"
//     Controller.extend("ui5.walkthrough.controller.App",{
//         onShowHello:()=>{
//         MessageToast.show("hello there ")
//         }
//     })
// })

// //  Step 7 JSONMODEL
// // ====================
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//     "sap/ui/model/json/JSONModel"
// ],function(Controller,MessageToast,JSONModel){
// return Controller.extend("ui5.walkthrough.controller",{
//     onInit:function(){
//         //set the data model on the view
//        const oData = {
//         recipient:{
//             name:"Angep"
//         },
//        }
//        const oModel = new JSONModel(oData)
//        this.getView().setModel(oModel)
//     },
//     onShowHello:()=>{

//         MessageToast.show("hello kit")
//     }
// })
// })

// step 9 translatable
// =========================
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], (Controller, MessageToast) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.App", {
       onShowHello() {
          // read msg from i18n model
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg", [sRecipient]);
 
          // show message
          MessageToast.show(sMsg);
       }
    });
 });
 