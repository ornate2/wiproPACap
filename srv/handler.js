const cds =  require("@sap/cds");
const {fetchData} =  require("./controller/Fetchdata");

module.exports = cds.service.impl(async function () {
    this.on('fetchData', async (req, res) => {
        try {
            const result = await fetchData();
            return result
        } catch (error) {
            console.error('Error fetching data:', error);
            res.error(500, 'Error fetching data');
        }
    })
})