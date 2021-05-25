const query = require('../config/dbconfig')

// Generate report
exports.getReport = async (req, res) =>
{

    // Delare a variable to hold the query dynamically

    try
    {
        const sql = `select p.name, p.gender,p.dob,TIMESTAMPDIFF(YEAR, dob, CURDATE())as age,p.phone_number,f.htn_status, f.dm_status from patient p inner join flat_cdm_summary f on f.patient_id=p.patient_id`

        // Get patient records
        const result = await query(sql)
        res.json({
            status: true,
            status_code: 200,
            message: 'Success',
            report: result
        })

    } catch (error)
    {
        console.log(error)
        res.json({
            status: false,
            patients: null,
            status_code: 500,
            message: 'Fail: ' + error

        })
    }
}