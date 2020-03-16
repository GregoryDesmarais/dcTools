const router = require("express").Router();
const cardboardController = require("../../controllers/cardboardController");

router.route("/add")
  .post(cardboardController.add);

router.route("/get")
  .get(cardboardController.get);

router.route("/remove")
  .delete(cardboardController.remove);

module.exports = router;
