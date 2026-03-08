function togDisp(e) {
  stopB(e);
  var elems = document.getElementsByName("more");
  for (var i = 0; i < elems.length; i++) {
    var obj = elems[i],
      dp = "";
    if (obj.style.display == "") {
      dp = "none";
    }
    obj.style.display = dp;
  }
  return false;
}
function stopB(e) {
  if (!e) e = window.event;
  e.cancelBubble = true;
}
document.onclick = function (event) {
  var elems = document.getElementsByName("more");
  if (elems[0].style.display == "") {
    togDisp(event);
  }
};
