const axios = require('axios');

module.exports = {
  triggerWorkflow
};

async function triggerWorkflow(poNumber, context) {
  try {
    const response = await axios.post('https://workflow-api-url/workflow-service/rest/v1/workflow-instances', {
      definitionId: '001',
      context: {
        poNumber,
        ...context
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error triggering workflow:', error);
    throw error;
  }
}
