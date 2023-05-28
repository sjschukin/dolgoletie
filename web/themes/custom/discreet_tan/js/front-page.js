/**
 * @file
 */

(function () {
  "use strict";

  // Sticky
  window.onscroll = function () {
    var header_navbar = document.getElementById("header_navbar");
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
    } else {
        header_navbar.classList.remove("sticky");
    }
  };

  // WOW Scroll Spy
  let wow = new WOW({
    //disabled for mobile
    mobile: false
  });
  wow.init();

})();
