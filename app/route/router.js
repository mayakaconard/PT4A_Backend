module.exports = (app) =>
{
    const { getPatients } = require('../controllers/Patients')

    app.get("/api/patients", getPatients);
    app.get("/api/patients/:name", getPatients);
};