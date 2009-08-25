var domain_parts = window.location.href.split('.');
var view_url = 'http://localhost:5984/adquery/_design/queries/_view/queries_by_domain';
while(domain_parts.length > 0) {
  $.get(view_url,
    {key: domain_parts.join('.')},
    function (data) {
      alert(data);
    }
  );
  domain_parts.shift();
}