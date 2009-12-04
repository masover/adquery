function remove(rows) {
  $.each(rows, function() {
    for (var i in this.value) {
      $(this.value[i]).remove();
    }
  });
}

var pending = [];
var loaded = false;
var port = chrome.extension.connect();

port.onMessage.addListener(function(message) {
  if (loaded) {
    // remove more stuff we found after the document's loaded
    remove(message.rows);
  } else {
    // memorize everything, to be removed later
    pending.push.apply(pending, message.rows);
  }
});
port.postMessage({domain: window.location.host});

// remove everything when the document's loaded
jQuery(function($) {
  loaded = true;
  remove(pending);
  pending = undefined;
});
