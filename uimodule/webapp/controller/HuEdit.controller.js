sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller, History)=>{
    "use strict";

    return Controller.extend("com.myorg.humonitor.controller.HuEdit",{
        onInit(){

        },

        onNavBack(){
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("HuSelection", {}, true);
            }
        }
    });
});

