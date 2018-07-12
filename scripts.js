function getWordCount(node) {
  return node.textContent.trim().split(" ").length;
}
var paragraphs = document.querySelectorAll(".counter")
for ( var i = 0; i < paragraphs.length; i++ ) {
  p = paragraphs[i];
  c = p.textContent.trim().split(" ").length;
  p.innerHTML = p.innerHTML + " <span style='color: gray'><em>(" + c + " words</em>)</span>";
}
