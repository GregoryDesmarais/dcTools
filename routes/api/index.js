const router = require("express").Router();
const amberRoutes = require("./amber")
const combustibleRoutes = require("./combustible")
const handoffRoutes = require("./handoff")


router.use("/amber",amberRoutes)
router.use("/combustible",combustibleRoutes)
router.use("/handoff",handoffRoutes)

module.exports = router;