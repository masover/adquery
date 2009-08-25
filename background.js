var view_url = 'http://localhost:5984/adquery/_design/queries/_view/queries_by_domain';
chrome.self.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(message) {
    if(message.domain) {
      var parts = message.domain.split('.');
      while (parts.length > 0) {
        $.get(view_url,
          {key: '"'+parts.join('.')+'"'},
          function(data) {
            port.postMessage(data);
          },
          'json'
        );
        parts.shift();
      }
    }
  });
});