const Cardboard = require("../models/Cardboard");


module.exports = {

  add: function (req, res) {
    let body = req.body.data;
    let temp = new Date();
    body.date = `${temp.getMonth() + 1}/${temp.getDate()}/${temp.getFullYear()}`;
    Cardboard.find(
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
            message:"This has already been reported.  Please ensure that a ticket has been created.", 
            data: data})
        }
        else {
          Cardboard.create(body)
            .then((success, err) => {
              if (err) {
                // console.log(err);
                res.json(err);
              }
              if (success) {
                // console.log(success)
                res.status(200).send("Cardboard Report added successfully!");
              }
            })
        }
      })
  },

  get: function (req, res) {
    Cardboard.find().sort({ customer: "asc" })
      .then((success, err) => {
        if (err)
          console.log(err);
        if (success)
          res.send(success)
      })
  },

  remove: function (req, res) {
    let body = req.body;
    Cardboard.findOneAndDelete(body)
      .then((suc, err) => {
        if (err)
          console.log(err)
        if (suc)
          res.send(suc)
      })
  }
}
