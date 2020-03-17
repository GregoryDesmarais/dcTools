const router = require("express").Router();
const combustibleController = require("../../controllers/combustibleController");

router.route("/add")
  .post(combustibleController.add);

router.route("/get")
  .get(combustibleController.get);

router.route("/remove")
  .delete(combustibleController.remove);

module.exports = router;
