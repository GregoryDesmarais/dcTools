const Amber = require("../models/Amber");


module.exports = {

  addAmber: function (req, res) {
    let body = req.body.data;
    let temp = new Date();
    body.date = `${temp.getMonth() + 1}/${temp.getDate()}/${temp.getFullYear()}`;
    Amber.find(
      {
        cab: body.cab,
        rmu: body.rmu,
        device: body.device,
      }
    )
      .then((data, err) => {
        if (data.length > 0){
          // console.log(data);
          res.status(409).json({
            message:"Device already in database.  Please ensure that a ticket has been created, then delete the alert.", 
            data: data})
        }
        else {
          Amber.create(body)
            .then((success, err) => {
              if (err) {
                // console.log(err);
                res.json(err);
              }
              if (success) {
                // console.log(success)
                res.status(200).send("Amber Report added successfully!");
              }
            })
        }
      })
  },

  getAmber: function (req, res) {
    Amber.find().sort({ customer: "asc" })
      .then((success, err) => {
        if (err)
          console.log(err);
        if (success)
          res.send(success)
      })
  },

  removeAmber: function (req, res) {
    let body = req.body;
    Amber.findOneAndDelete(body)
      .then((suc, err) => {
        if (err)
          console.log(err)
        if (suc)
          res.send(suc)
      })
  }
}
