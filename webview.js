module.exports = (Franz) => {
  function getMessages() {
    let count = 0;

    // Get message tab element and get notification dot image
    const messageTabElement = document.querySelector('#message-tab');

    if (messageTabElement) {
      const countElement = messageTabElement.querySelector('img.tab-red-dot');

      if (countElement) {
        // Parse the number in file name
        const url = countElement.src + '';
        let str = url.replace('https://zalo-chat-static.zadn.vn/message_notification_', '');
        str = str.replace('.png', '');

        // Zalo use 'more' when there is more than 5 messages, in that case str is not a number
        if (isNaN(str)) {
          count = 6;
        } else {
          count = str;
        }
      }
    }

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);

  Franz.onNotify(notification => {
    if (typeof notification.title !== 'string') {
      notification.title = ((notification.title.props || {}).content || [])[0] || 'Zalo';
    }

    return notification;
  });
}