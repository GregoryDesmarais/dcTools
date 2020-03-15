const router = require("express").Router();
const amberRoutes = require("./amber")
const handoffRoutes = require("./handoff")


router.use("/handoff",handoffRoutes)
router.use("/amber",amberRoutes)

module.exports = router;