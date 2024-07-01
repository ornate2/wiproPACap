// // 

// const cds = require('@sap/cds');

// module.exports = {
//   scheduleJob
// };

// async function scheduleJob() {
//   const schedulerService = await cds.connect.to('job-scheduler');
//   await schedulerService.run({
//     job: {
//       name: 'FetchDataJob',
//       action: '/ProcessAutomationService/fetchData',
//       schedule: '0 0 * * *'
//     },
//     onError: err => {
//       console.error('Error scheduling job:', err);
//     },
//     onSuccess: async () => {
//       console.log('Job scheduled successfully!');
//       try {
//         const result = await schedulerService.triggerAction({
//           action: '/ProcessAutomationService/submitFilledForm',
//           data: {
//             filledForm: {
//               PONumber: '12345',
//               BuyerDetails: 'Sample Buyer',
//               Comments: 'Sample Comment'
//             }
//           }
//         });
//         console.log('Triggered submitFilledForm action:', result);
//       } catch (err) {
//         console.error('Error triggering submitFilledForm action:', err);
//       }
//     }
//   });
// }


const cds = require("@sap/cds");
const cron = require("node-cron");

module.exports = {
  scheduleJob
};

async function scheduleJob() {
  cron.schedule("0 0 * * *", async () => {
    console.log("Cron job is running successfully!");

    try {
      const srv = await cds.connect.to('ProcessAutomationService');
      await srv.tx().run('fetchData');
    } catch (error) {
      console.error("Something went wrong. Scheduled task failed:", error);
      throw error;
    }
  });
}
