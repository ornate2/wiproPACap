const axios = require('axios');

module.exports = {
  updateSAP
};

async function updateSAP(poNumber, status) {
  try {
    await axios.patch(`https://url/sap/opu/odata/sap/ZMM_PO_SAVING_SRV/EntitySet('${poNumber}')`, {
      TriggerStatus: status
    });
    console.log(`PO ${poNumber} updated successfully with status ${status}`);
  } catch (error) {
    console.error('Error updating SAP with trigger status:', error);
    throw error;
  }
}
