sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models) {
        "use strict";

        return Controller.extend("wipro.workflowuimodule.controller.List", {
            onInit: function () {
           // this.getView().setModel(models.createviewInfoModel(), "viewInfo")
            // var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZMM_PO_SAVING_SRV/", true );
                
            // // Set model to view
            // this.getView().setModel(oModel);
           
           // this.onReadPoData();

           },
           onReadPoData: function(){
            var oModelData = this.getOwnerComponent().getModel();
            var oJSONModel = new sap.ui.model.json.JSONModel();
            oModelData.read("/SavingsPOSet", {
                success: function(response){
                    oJSONModel.setData(response.results);
                    this.getView().setModel(oJSONModel, "PoDataModel");
                }.bind(this),
                error: function(error){

                }
            })
           },
            onAfterRendering: function(){

                
            },
        
            TigerButtonfunction: function(oEvent) {
                var oBindingContext = oEvent.getSource().getBindingContext("PoDataModel");
                var oData = oBindingContext.getObject();
                //var that = this
               // var oModel = this.getView().getModel();
                //var oView = this.getView()
                var oEntry = {
                        "PONumber": oData.PONumber,
                    "Buyer": oData.Buyer,
                    "POValue": oData.POValue,
                    "POCurrency": oData.POCurrency,
                    "VendorName": oData.VendorName,
                    "StartDate": oData.StartDate,
                    "EndDate": oData.EndDate
                    
                }
                
                var sUrl = "/sap/opu/odata/sap/ZMM_PO_SAVING_SRV/";
                    $.ajax({
                        url: sUrl,
                        method: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(oEntry),
                        success: function (data) {
                            console.log("Success",data)
                           // MessageToast.show("Data submitted successfully!");
                        },
                        error: function (err) {
                            //MessageToast.show("Error submitting data!");
                            console.log("Error:", err)
                        }
                    });




            },
           
           
            
            
           
       
        
       
            
        });
    });
