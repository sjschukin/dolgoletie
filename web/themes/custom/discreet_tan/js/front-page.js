/**
 * @file
 */

(function () {
  "use strict";

  window.onscroll = function () {
    // Sticky
    let header_navbar = document.getElementById("header_navbar");
    let sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
    } else {
        header_navbar.classList.remove("sticky");
    }

    // Back to top button
    let backToTop = document.querySelector(".back-to-top");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };

  // WOW Scroll Spy
  let wow = new WOW({
    //disabled for mobile
    mobile: false
  });
  wow.init();

})();
