const cds = require('@sap/cds');

module.exports = {
    updateSAP
};


async function updateSAP(poNumber, status) {
    const odataService = await cds.connect.to('WiproOdata');
    const updateResponse = await odataService.send({
        method: 'PATCH',
        path: `/ZMM_PO_SAVING_SRV(${poNumber})`,
        data: {
            TriggerStatus: status
        }
    });
    return updateResponse;
}