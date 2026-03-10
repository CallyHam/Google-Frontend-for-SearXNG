window.gbar = {
  open: null,

  qs: function () {},
  tg: function (e, id) {
    (e || window.event).cancelBubble = true;

    var menu = document.getElementById(id);

    if (this.open && this.open !== menu) {
      this.open.style.visibility = "hidden";
    }

    if (menu.style.visibility === "hidden") {
      menu.style.visibility = "visible";
      this.open = menu;
    } else if (menu.style.visibility === "visible") {
      menu.style.visibility = "hidden";
      this.open = null;
    }

    document.onclick = function (e) {
      menu.style.visibility = "hidden";
    };
  }
};
