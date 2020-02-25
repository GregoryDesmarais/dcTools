const Handoff = require("../models/Handoff");

module.exports = {
    addHandoff: function (req, res) {
        let shift = req.body.data.shift;
        let datacenter = req.body.data.datacenter;
        let date = req.body.data.date;
        let body = req.body.data.body;

        Handoff.create({
            shift: shift,
            datacenter: datacenter,
            date: date,
            body: body
        })
            .then((err, success) => {
                if (err) {
                    console.log(err);
                    res.json(err);
                }
                if (success) {
                    console.log(sucess)
                    res.status(200).send("Handoff added successfully!");
                }
            })
    }
}