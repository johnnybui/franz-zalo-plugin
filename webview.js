module.exports = (Franz) => {
  function getMessages() {
    let count = 0;

    // Get main tab element and count notification badge
    const mainTabElement = document.querySelector('#main-tab');

    if (mainTabElement) {
      count = mainTabElement.querySelectorAll('img.tab-red-dot').length;
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