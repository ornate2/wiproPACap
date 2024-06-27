sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },
        createviewInfoModel: function () {
            var jsonData = {
                items: [
                  { id: 1, quarter: "001", price: 10 },
                  { id: 2, quarter: "002", price: 20 },
                  { id: 3, quarter: "003", price: 30 }
                ]
              };
            var oModel = new JSONModel(jsonData);
            oModel.setDefaultBindingMode("TwoWay");
            return oModel;
    }
    };
});