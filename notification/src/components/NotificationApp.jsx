import React, { useState } from "react";

const messages = ["Message One", "Message Two", "Message Three", "Message Four"];
const types = ["info", "success", "error"];

const NotificationApp = () => {
  const [notifications, setNotifications] = useState([]);

  const createNotification = (message = null, type = null) => {
    const newNotification = {
      id: Date.now(),
      message: message || getRandomMessage(),
      type: type || getRandomType(),
    };

    setNotifications((prev) => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
    }, 3000);
  };

  const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const getRandomType = () => types[Math.floor(Math.random() * types.length)];

  return (
    <div>
      <div id="toasts">
        {notifications.map((notif) => (
          <div key={notif.id} className={`toast ${notif.type}`}>
            {notif.message}
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => createNotification()}>Show Notification</button>
    </div>
  );
};

export default NotificationApp;
