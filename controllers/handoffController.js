const Handoff = require("../models/Handoff");

module.exports = {
    addHandoff: function (req, res) {
        let body = {
            names: req.body.data.names,
            shift: req.body.data.shift,
            datacenter: req.body.data.datacenter,
            date: req.body.data.date,
            items: req.body.data.items
        }

        Handoff.create(body)
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
    },
    getHandoff: function (req, res) {
        let body = req.body.data;
        Handoff.find(body)
            .then((err, data) => {
                if (err) res.json(err);
                res.send(data)
            })
    },
    getShifts: function (req, res) {
        Handoff.find({}, { shift: 1 }).distinct("shift")
            .then((err, data) => {
                if (err) res.json(err);
                res.send(data)
            })
    },
    getDCs: function (req, res) {
        Handoff.find({}, { datacenter: 1 }).distinct("datacenter")
            .then((err, data) => {
                if (err) res.json(err);
                res.send(data)
            })
    },
}