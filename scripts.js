function getWordCount(node) {
  return node.textContent.trim().split(" ").length;
}
var paragraphs = document.querySelectorAll("p")
for ( var i = 0; i < paragraphs.length; i++ ) {
  p = paragraphs[i];
  if (!p.id) continue;
  var counter = document.getElementById(p.id + "count");
  if (!counter) continue;
  counter.textContent = getWordCount(p);
}
