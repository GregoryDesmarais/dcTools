const router = require("express").Router();
const amberController = require("../../controllers/amberController");

router.route("/add")
  .post(amberController.addAmber);

router.route("/get")
  .get(amberController.getAmber);

router.route("/remove")
  .delete(amberController.removeAmber);

module.exports = router;
