using { app.db as db } from '../db/db';

service ProcessAutomationService {
    entity ProcessAutomations as projection on db.ProcessAutomation;
    action fetchData() returns String;
}