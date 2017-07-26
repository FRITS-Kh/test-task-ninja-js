function drawNestedSetsTree(data, node) {

  function compareLeftNumber(numL, numR) {
    return numL.left-numR.left;
  }
  data.sort(compareLeftNumber);

  var ul = function(list) {
    var oldItem = null;
    var level = 0;
    var html = '<ul>';
    var length = list.length;
    var clouseEl = '</ul></li>';
    for (var i = 0; i < length; i++){
      var el = list[i];
      if(oldItem != null && oldItem.right > el.left) {
        level++;
      } else if(oldItem != null && (oldItem.right+1) < el.left) {
        var step = el.left - (oldItem.right + 1);
        level -= step;
        html += clouseEl.repeat(step);
      }
      if ((el.right - el.left) == 1) {
        html += '<li>'+ el.title + '</li>'
      } else {
        html += '<li>'+ el.title + '<ul>'
      }
      oldItem = el;
    }
    if (level > 0) {

      html += clouseEl.repeat(level);
    }
    return html
  }
  node.innerHTML=ul(data);
}

if (typeof module !== 'undefined') {
  module.exports = drawNestedSetsTree;
}