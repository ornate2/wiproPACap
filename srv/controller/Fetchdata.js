// const cds = require("@sap/cds");

// module.exports = {
//     fetchData
// };

// async function fetchData() {
//     const db = await cds.connect.to("db");
//     const { ProcessAutomation } = db.entities;

//     try {
//         const result = await db.read(ProcessAutomation).columns('PONumber', 'Savings');
//         console.log("Fetched Result!!", result);

//         const newRecords = result.filter(record => record.PONumber && record.Savings);
        
//         if (newRecords.length > 0) {
//             console.log("something went wrong!")
//         }

//         return "Prefilled forms checked and sent if applicable";
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// }


const axios = require('axios');

module.exports = {
  fetchOData
};

async function fetchOData() {
  try {
    const response = await axios.get('https://url/sap/opu/odata/sap/ZMM_PO_SAVING_SRV/EntitySet');
    const data = response.data.d.results;
    return data;
  } catch (error) {
    console.error('Error fetching data from OData service:', error);
    throw error;
  }
}
