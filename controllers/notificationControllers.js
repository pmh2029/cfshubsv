const Notification = require("../models/Notification");

const getNotifications = async (req, res) => {
  try {
    const userId = req.params.userId;

    const notifications = await Notification.find({
      userId: userId,
      read: false,
    });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getNotifications };
