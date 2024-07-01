sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models) {
        "use strict";

        return Controller.extend("wipro.workflowuimodule.controller.MyTaskUI", {
            onInit: function () {
            this.getView().setModel(models.createviewInfoModel(), "viewInfo")
            var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZMM_PO_SAVING_SRV/", true );

            // Set model to view
            this.getView().setModel(oModel);
            

           },
            onAfterRendering: function(){

                
            },
           
            handleChangeEnd: function(oEvent){
               
                var startDate =  this.getView().byId("Saving_start").getDateValue ();
                var endDate =  this.getView().byId("Saving_End").getDateValue();
        
        if (startDate && endDate) { // Check if dates are valid
            var diff = Math.abs(startDate.getTime() - endDate.getTime());
            var diffD = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Difference in days
        
            var table = this.getView().byId("table_column");
        
            if (diffD < 90) {
                table.setVisibleRowCount(1);
                table.setVisible(true);
            } else if (diffD < 180) {
                table.setVisibleRowCount(2);
                table.setVisible(true);
            } else if (diffD < 270) {
                table.setVisibleRowCount(3);
                table.setVisible(true);
            }else if (diffD < 360) {
                table.setVisibleRowCount(4);
                table.setVisible(true);
            } else {
                // Handle other cases or set default behavior
                table.setVisibleRowCount(0); // Hide the table or set to default state
                table.setVisible(false);
            }
        } else {
            // Handle case where dates are not valid
            console.error("Invalid dates selected");
        }
                

                
            },
            
            
           
            
        onCreate: function () {
            var oModel = this.getView().getModel("viewInfo");
            var oData = oModel.getProperty("/items") || [];
            var oNewEntry = {
                quarter: "",
                price: null,
            };
            oData.push(oNewEntry);
            this.getView()
                .getModel("viewInfo")
                .setProperty("/items", oData);
        },
        onSaveData: function(){
            this.getView().byId("table_column").getValue();
			
        },
        
       
            
        });
    });
