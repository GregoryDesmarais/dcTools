const router = require("express").Router();
const handoffController = require("../../controllers/handoffController");

router.route("/add")
  .post(handoffController.addHandoff);

module.exports = router;
