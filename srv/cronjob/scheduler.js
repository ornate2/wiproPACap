const cds = require("@sap/cds");
const cron = require("node-cron");
const {fetchData} = require("../controller/Fetchdata");

cron.schedule("0 0 * * *", async () => {
    console.log("Cronjob is runnig successfully!");

    try {
        await fetchData();
    } catch (error) {
        console.log("Something went wrong Scheduled tash failed!!");
        throw error
    }
})

