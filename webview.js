module.exports = (Franz) => {
  function getMessages() {
    let count = 0;

    const conversationListElement = document.querySelector('#conversationListId');

    if (conversationListElement) {
      count = conversationListElement.querySelectorAll('img.func-unread').length;
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