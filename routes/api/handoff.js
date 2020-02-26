const router = require("express").Router();
const handoffController = require("../../controllers/handoffController");

router.route("/add")
  .post(handoffController.addHandoff);

router.route("/get")
  .post(handoffController.getHandoff);

router.route("/getshifts")
  .post(handoffController.getShifts);

router.route("/getdcs")
  .post(handoffController.getDCs);

  

module.exports = router;
