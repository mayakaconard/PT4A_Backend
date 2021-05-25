const query = require('../config/dbconfig')

exports.getPatients = async (req, res) =>
{
    // Get name if user passes for a search
    const name = req.params.name;

    // Delare a variable to hold the query dynamically
    const currentYear = new Date().getFullYear()
    var sql = '';
    try
    {

        if (name == null || name == undefined || name == '')
        {
            sql = `select p.name, p.gender,p.dob,TIMESTAMPDIFF(YEAR, dob, CURDATE())as age,p.phone_number,f.htn_status, f.dm_status from patient p inner join flat_cdm_summary f on f.patient_id=p.patient_id`;
        }
        else
        {
            sql = `select p.name, p.gender,p.dob,TIMESTAMPDIFF(YEAR, dob, CURDATE())as age,p.phone_number,f.htn_status, f.dm_status from patient p
                    inner join flat_cdm_summary f on f.patient_id=p.patient_id where(name LIKE '%${name}%')`;
        }
        // Get patient records
        const result = await query(sql)
        res.json({
            status: true,
            status_code: 200,
            message: 'Success',
            patients: result,


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