sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models) {
        "use strict";

        return Controller.extend("wiprofrm.workflowuimodule.controller.MyTaskUI", {
            onInit: function () {
                

            this.getView().setModel(models.createviewInfoModel(), "viewInfo")
                

            
            },
            onClick: function(){
                var savingDis =    this.getView().byId("savingdistribution").getSelected();
                if(savingDis === true){
                   this.getView().byId("table_column").setVisible(true);
                }else{
                    this.getView().byId("table_column").setVisible(false);
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
        onDelete: function(){
            
			
        }
       
            
        });
    });
