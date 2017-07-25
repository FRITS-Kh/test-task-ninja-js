function drawNestedSetsTree(data, node) {
  // Удалите весь код ниже и замените его на свою реализацию
  /* const ul = document.createElement('ul');
  data.forEach(({ title }) => {
    const li = document.createElement('li');
    li.textContent = title;
    ul.appendChild(li);
  }); */

  function compareLeftNumber(numA, numB) {
    return numA.left-numB.left;
  }
  data.sort(compareLeftNumber);
  
  /* const ul = document.createElement('ul');
  for(var i = 0; i < data.length; i++) {     
    if (data[i].left === 1) {
      const liMain = document.createElement('li');
      liMain.textContent = data[i].title;
      ul.appendChild(liMain);
      return liMain;
    } else {
      const ulInner = document.createElement('li');
      const li = document.createElement('li');
      li.textContent = data.level;
      ulInner.appendChild(li);
      liMain.appendChild(ulInner);
      ul.appendChild(liMain);
    }
  }; */
  var getChilds = function(trgt, list) {
      console.log("target" + trgt);
      console.log("list" + list);
      var childs = Array();
      var length = list.length;
      for (var i = 0; i < length; i++) {
          var l_in = (list[i].left > trgt.left);
          var r_in = (list[i].right < trgt.right);
          if (l_in && r_in) {
            childs.push(list[i]);
          }
      }
      return childs;
  }
  /* var cleanDuplicates = function(from, elements){
    var length = from.length;
    for (var i = 0; i < length; i++){
      if (elements.indexOf(from[i]) > -1) {
          delete from[i]
      }
    }
    return from;
  } */

  var ul = function(list) {
    var html = '<ul>';
    var length = list.length;
    for (var i = 0; i < length; i++){
      var el = list[i];
      var childs = getChilds(el, list);
      /* list = cleanDuplicates(list, childs) */
      html += '<li>'+ el.title
      html += ul(childs)
      html += '</li>'
    }
    return html + '</ul>'
  }

/*   data.forEach((demoData) => {
    for(var i = 0; i < data.legth; i++) { 
      data.level = i;
    };
    if (demoData.left === 1) {
      const li = document.createElement('li');
      li.textContent = data.level;
      ul.appendChild(li);
    } else if (demoData.left + 1 < demoData.right) {
      const li = document.createElement('li');
      const ulInner = document.createElement('ul');      
      const liInner = document.createElement('li');
      liInner.textContent = demoData.level;
      ulInner.appendChild(liInner);
      li.appendChild(ulInner);
      ul.appendChild(li);
    } else {
      const li = document.createElement('li');
      li.textContent = data.title;
      ul.appendChild(li);
    }
  }); */

  node.innerHTML=ul(data);
}



if (typeof module !== 'undefined') {
  module.exports = drawNestedSetsTree;
}