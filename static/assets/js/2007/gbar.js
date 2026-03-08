window.gbar = {};
(function () {
  var h = window.gbar,
    a,
    g,
    f;
  function m(b, e, d) {
    b.display = b.display == "block" ? "none" : "block";
    b.left = e + "px";
    b.top = d + "px";
  }
  h.tg = function (b) {
    var e = 0,
      d,
      c,
      i,
      j = 0,
      k = window.navExtra;
    !g && (g = document.getElementById("gbar"));
    !f && (f = g.getElementsByTagName("div"));
    (b || window.event).cancelBubble = true;
    if (!a) {
      a = document.createElement(Array.every || window.createPopup ? "iframe" : "div");
      a.frameBorder = "0";
      a.id = "gbi";
      a.scrolling = "no";
      a.src = "#";
      document.body.appendChild(a);
      if (k)
        for (var n in k) {
          var l = document.createElement("div");
          l.appendChild(k[n]);
          l.className = "gb2";
          g.appendChild(l);
        }
      document.onclick = h.close;
    }
    for (; f[j]; j++) {
      c = f[j];
      i = c.className;
      if (i == "gb3") {
        d = c.offsetLeft;
        while ((c = c.offsetParent)) d += c.offsetLeft;
        m(a.style, d, 24);
      } else if (i == "gb2") {
        m(c.style, d + 1, 25 + e);
        e += 20;
      }
    }
    a.style.height = e + "px";
  };
  h.close = function (b) {
    a && a.style.display == "block" && h.tg(b);
  };
})();
