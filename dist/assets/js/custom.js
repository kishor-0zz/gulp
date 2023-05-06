"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function () {
  /* ========= modal buttons ======== */
  // function updateActiveClass() {
  //   var myContainerDivs = $('.item').find('.item-inner');

  //   myContainerDivs.removeClass('active');

  //   $('.item-inner').on('mouseleave', function () {
  //     myContainerDivs.removeClass('active');
  //     $(this).addClass('active');
  //   });
  // }

  // updateActiveClass();

  // $('.btn-close').on('click', function () {
  //   $('.item-inner.active').removeClass('active');
  // });

  /* ========= drag & drop ======== */
  var dropzoneSource = document.querySelector(".source");
  var dropzone = document.querySelector(".target");
  var dropzones = _toConsumableArray(document.querySelectorAll(".dropzone"));
  var draggables = _toConsumableArray(document.querySelectorAll(".draggable"));
  function getDragAfterElement(container, y) {
    var draggableElements = _toConsumableArray(container.querySelectorAll(".draggable:not(.is-dragging)"));
    return draggableElements.reduce(function (closest, child) {
      var box = child.getBoundingClientRect();
      var offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return {
          offset: offset,
          element: child
        };
      } else {
        return closest;
      }
    }, {
      offset: Number.NEGATIVE_INFINITY
    }).element;
  }
  draggables.forEach(function (draggable) {
    draggable.addEventListener("dragstart", function (e) {
      draggable.classList.add("is-dragging");
    });
    draggable.addEventListener("dragend", function (e) {
      draggable.classList.remove("is-dragging");
    });
  });
  dropzones.forEach(function (zone) {
    zone.addEventListener("dragover", function (e) {
      e.preventDefault();
      var afterElement = getDragAfterElement(zone, e.clientY);
      var draggable = document.querySelector(".is-dragging");
      if (afterElement === null) {
        zone.appendChild(draggable);
      } else {
        zone.insertBefore(draggable, afterElement);
      }
    });
  });

  /* ========= modal slider. ======== */

  var swiper = new Swiper(".swiper1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 5000
    }
  });
  var swiper2 = new Swiper(".swiper2", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: swiper
    }
  });

  /* ========= sidebar toggle ======== */
  var sidebarNavWrapper = document.querySelector(".sidebar");
  var mainWrapper = document.querySelector(".main-wrapper");
  var menuToggleButton = document.querySelector("#menu-toggle");
  var menuToggleButtonIcon = document.querySelector("#menu-toggle span");
  var overlay = document.querySelector(".overlay");
  menuToggleButton.addEventListener("click", function () {
    sidebarNavWrapper.classList.toggle("active");
    overlay.classList.add("active");
    mainWrapper.classList.toggle("active");
    if (document.body.clientWidth > 1200) {
      if (menuToggleButtonIcon.classList.contains("open-menu")) {
        menuToggleButtonIcon.classList.remove("open-menu");
        menuToggleButtonIcon.classList.add("close-menu");
      } else {
        menuToggleButtonIcon.classList.remove("close-menu");
        menuToggleButtonIcon.classList.add("open-menu");
      }
    } else {
      if (menuToggleButtonIcon.classList.contains("open-menu")) {
        menuToggleButtonIcon.classList.remove("open-menu");
        menuToggleButtonIcon.classList.add("close-menu");
      }
    }
  });
  document.addEventListener("click", function (event) {
    if (event.target.matches(".overlay") || event.target.matches(".sidebar__close") || event.target.matches(".sidebar__close i")) {
      sidebarNavWrapper.classList.remove("active");
      overlay.classList.remove("active");
      mainWrapper.classList.remove("active");
    }
  });
})();
var dataTable = new simpleDatatables.DataTable("#myTable", {
  searchable: true,
  fixedHeight: true
}); //testimonial slider 

var swiper = new Swiper(".testimonial__slider-bottom", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical"
});
var swiper2 = new Swiper(".testimonial__slider-top", {
  loop: true,
  spaceBetween: 10,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiper
  }
});

// Anchor link scrolling,use by adding "data-scroll"
// document.addEventListener("DOMContentLoaded", () => {
//   const root = (() => {
//     if ("scrollingElement" in document) return document.scrollingElement;
//     const start = document.documentElement.scrollTop;
//     document.documentElement.scrollTop = start + 1;
//     const end = document.documentElement.scrollTop;
//     document.documentElement.scrollTop = start;
//     return end > start ? document.documentElement : document.body;
//   })();

//   const ease = (duration, elapsed, start, end) =>
//     Math.round(end * (-Math.pow(2, (-10 * elapsed) / duration) + 1) + start);

//   const hash = link => link.getAttribute("href");

//   const target = link => document.querySelector(hash(link));

//   const getCoordinates = link => {
//     const start = root.scrollTop;
//     const top = Math.round(target(link).getBoundingClientRect().top);
//     const max = root.scrollHeight - window.innerHeight;
//     const end = start + top < max ? top : max - start;
//     return new Map([
//       ["start", start],
//       ["end", end]
//     ]);
//   };

//   const scroll = link => {
//     const progress = new Map([
//       ["duration", 850]
//     ]);
//     const coordinates = getCoordinates(link);
//     const tick = timestamp => {
//       progress.set("elapsed", timestamp - start);
//       root.scrollTop = ease(...progress.values(), ...coordinates.values());
//       progress.get("elapsed") < progress.get("duration") ?
//         requestAnimationFrame(tick) :
//         history.pushState(null, null, hash(link));
//     };
//     const start = performance.now();
//     requestAnimationFrame(tick);
//   };

//   Array.from(document.querySelectorAll("[data-scroll]")).forEach(link =>
//     link.addEventListener("click", event => {
//       event.preventDefault();
//       scroll(link);
//     })
//   );
// });

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('theme', 'light');
//   }
// }

// $(document).ready(function () {
//   $("#item li").click(function () {
//     $(".listblock li.active").removeClass("active");
//     $(this).addClass("active")
//   })
// });