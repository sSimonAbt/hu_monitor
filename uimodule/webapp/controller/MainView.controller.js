sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myorg.humonitor.controller.MainView", {
            onInit: () => {},

            onNavToHuEdit(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("huEdit");
            }
        });
    },
);
