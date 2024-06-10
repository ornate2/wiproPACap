const cds =  require("@sap/cds");
require('./handler');
require('./cronjob/scheduler');

try {
    cds.serve('all')
        .in(__dirname + '/../')
        .catch(err => {
            console.error('Error while serving the CDS application:', err);
            process.exit(1);
        });
} catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
}
