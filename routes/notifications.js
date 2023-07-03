const express = require("express");
const router = express.Router();
const notificationControllers = require("../controllers/notificationControllers");

router.get("/:id", notificationControllers.getNotifications);

module.exports = router;
