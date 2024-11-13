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
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],function(Controller){
  return Controller.extend("sap.ui.walkthrough.controller.App",{
    onShowHello:()=>{
        alert("hello controller")
    }
  })
})