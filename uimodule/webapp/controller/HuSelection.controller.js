sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller)=>{
    "use strict";

    return Controller.extend("com.myorg.humonitor.controller.HuSelection",{
        onInit(){

        },

        onNavToHuEdit(){
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("huEdit");
        }
    });
});

