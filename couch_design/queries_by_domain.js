function(doc) {
  var queries = (doc.queries || []);
  if(doc.query) {
    queries = queries.concat([doc.query]);
  }
  if(doc.domain) {
    emit(doc.domain, queries);
  }
  if(doc.domains) {
    for (var i in doc.domains) {
      emit(doc.domains[i], queries);
    }
  }
}
