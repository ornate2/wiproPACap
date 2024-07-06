const cds = require('@sap/cds');
const scheduleJob = require("./cronjob/scheduler");

const fetchData = require("./controllers/fetchData");

module.exports = cds.service.impl(async function () {
    this.on('fetchData', fetchData);
    await scheduleJob();
});




