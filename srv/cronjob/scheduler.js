const cds = require("@sap/cds");
const cron = require("node-cron");

module.exports = {
  scheduleJob
};
function scheduleJob() {
  cron.schedule('*/20 * * * *', async () => {
    console.log('Cron job is running successfully!');

    try {
      const srv = await cds.connect.to('POService');
      await srv.tx().run('fetchData');
    } catch (error) {
      console.error('Something went wrong. Scheduled task failed:', error);
      throw error;
    }
  });
}