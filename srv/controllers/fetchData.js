const cds = require('@sap/cds');
// const triggerWorkflow = require("./triggerWorkflow");
const updateSAP = require("./updateSap");

async function fetchData(req) {
    try {
        const odataService = await cds.connect.to('WiproOdata');
        const response = await odataService.send({
            method: 'GET',
            path: '/ZMM_PO_SAVING_SRV/'
        });
        const poData = response.d.results;

        for (const po of poData) {
            // await triggerWorkflow(po);
            // await updateSAP(po.PONumber, 'Triggered');
            console.log(po.PONumber)

            return po.PONumber
        }

        return { message: 'Workflows triggered successfully' };
    } catch (error) {
        console.error('Error:', error);
        return { error: 'Failed to trigger workflows' };
    }
}