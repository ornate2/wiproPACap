const cds = require("@sap/cds");
module.exports = {
    fetchData
};

async function fetchData() {
    const db = await cds.connect.to("db");
    const {ProcessAutomation} = db.entities;

    try {
        const result = await db.read(ProcessAutomation).columns('PONumber', 'Savings');
        console.log("fetched Result!!", result);

        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}