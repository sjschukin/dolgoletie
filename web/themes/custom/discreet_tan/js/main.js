/**
 * @file
 */

(function () {
  "use strict";

  document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
      // Close the offcanvas menu
      var bsOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
      bsOffcanvas.hide();
    });
  });

})();
