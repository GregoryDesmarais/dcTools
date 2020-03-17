const router = require("express").Router();
const amberRoutes = require("./amber")
const cardboardRoutes = require("./cardboard")
const handoffRoutes = require("./handoff")


router.use("/amber",amberRoutes)
router.use("/cardboard",cardboardRoutes)
router.use("/handoff",handoffRoutes)

module.exports = router;