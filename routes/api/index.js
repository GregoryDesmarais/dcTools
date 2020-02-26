const router = require("express").Router();
// const userRoutes = require("./user")
const handoffRoutes = require("./handoff")


router.use("/handoff",handoffRoutes)
// router.use("/user",userRoutes)

module.exports = router;