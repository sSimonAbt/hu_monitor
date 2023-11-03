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
        },

        onDataToSecondTable(){
            const oFirstTable = this.byId("firstTable");
            const oSecondTable = this.byId("secondTable");
            const aSelectedItems = oFirstTable.getSelectedItems();

            aSelectedItems.forEach((oSelectedItem) => {
                const oCells = oSelectedItem.getCells();
                const sName = oCells[0].getText();
                const sSurname = oCells[1].getText(); 
                const sDescription = oCells[2].getText(); 

                // new item to be added to second table
                const oNewItem = new sap.m.ColumnListItem({
                    cells: [
                        new sap.m.Text({ text: sName }),
                        new sap.m.Text({ text: sSurname }),
                        new sap.m.Text({ text: sDescription })
                    ]
                });

                // item to second table
                oSecondTable.addItem(oNewItem);

                // remove selected item from first table
                oFirstTable.removeItem(oSelectedItem);
            });

            // clear selection from first table
            oFirstTable.removeSelections();
        }
    });
});

