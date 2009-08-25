var port = chrome.extension.connect();
window.collected = [];
port.onMessage.addListener(function(message) {
  $.each(message.rows, function() {
    // jQuery each barfs on strings
    for (var i in this.value) {
      $(this.value[i]).remove();
    }
  });
});
port.postMessage({domain: window.location.host});
