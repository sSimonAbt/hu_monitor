sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Sorter, Filter, FilterOperator)=>{
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
        },

        onSortAscending(){
            this.sortTable(true);
        },

        onSortDescending(){
            this.sortTable(false);
        },

        sortTable: function(bool_ascending) {

            let oTable = this.getView().byId("firstTable");
            let aAllItems = oTable.getItems();
        
            // sorting items based on "Name"
            let aSortedItems = aAllItems.sort((item1, item2) => {

                let txt1 = item1.getCells()[0].getText();
                let txt2 = item2.getCells()[0].getText(); 
        
                return bool_ascending ? txt1.localeCompare(txt2) : txt2.localeCompare(txt1);
            });
        
            // Removing items from table
            oTable.removeAllItems();
        
            // Adding back the sorted items to first table
            aSortedItems.forEach((item) => {
                oTable.addItem(item);
            });
        }
    });
});

