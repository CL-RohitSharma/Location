
const db = require('./db.config');
const frontofficeuser = db.frontofficeuser;


function createuser(req, res) {

    if (!req.body.FirstName || !req.body.MiddleName || !req.body.LastName || !req.body.PhoneNo || !req.body.Email || !req.body.LoginID || !req.body.Location || req.body.Location === "" || req.body.Location === null || !req.body.Role || !req.body.Tempass || !req.body.Status) {

        return res.status(400).send({
            message: "Incorrect Data"
        })
    }

    // Creating object/////
    const frontofficeuserobj = {

        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        PhoneNo: req.body.PhoneNo,
        Email: req.body.Email,
        LoginID: req.body.LoginID,
        Location: req.body.Location,
        Role: req.body.Role,
        Tempass: req.body.Tempass,
        Status: req.body.Status

    }


    frontofficeuser.create(frontofficeuserobj).then(data => {

        res.send(data);

    }).catch(error => {

        res.status(500).send(error);
    })

}

module.exports = {  createuser };