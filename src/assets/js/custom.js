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
  const dropzoneSource = document.querySelector(".source");
  const dropzone = document.querySelector(".target");
  const dropzones = [...document.querySelectorAll(".dropzone")];
  const draggables = [...document.querySelectorAll(".draggable")];

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.is-dragging)")];
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return {
          offset,
          element: child
        };
      }
      else {
        return closest;
      }
    },
      {
        offset: Number.NEGATIVE_INFINITY
      }
    ).element;
  }
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", (e) => {
      draggable.classList.add("is-dragging");
    }
    );
    draggable.addEventListener("dragend", (e) => {
      draggable.classList.remove("is-dragging");
    }
    );
  }
  );

  dropzones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(zone, e.clientY);
      const draggable = document.querySelector(".is-dragging");
      if (afterElement === null) {
        zone.appendChild(draggable);
      }
      else {
        zone.insertBefore(draggable, afterElement);
      }
    }
    );
  }
  );


  /* ========= modal slider. ======== */

  var swiper = new Swiper(".swiper1", {

    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 5000,
    },
  }

  );

  var swiper2 = new Swiper(".swiper2", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  }
  );

  /* ========= sidebar toggle ======== */
  const sidebarNavWrapper = document.querySelector(".sidebar");
  const mainWrapper = document.querySelector(".main-wrapper");
  const menuToggleButton = document.querySelector("#menu-toggle");
  const menuToggleButtonIcon = document.querySelector("#menu-toggle span");
  const overlay = document.querySelector(".overlay");

  menuToggleButton.addEventListener("click", () => {
    sidebarNavWrapper.classList.toggle("active");
    overlay.classList.add("active");
    mainWrapper.classList.toggle("active");

    if (document.body.clientWidth > 1200) {
      if (menuToggleButtonIcon.classList.contains("open-menu")) {
        menuToggleButtonIcon.classList.remove("open-menu");
        menuToggleButtonIcon.classList.add("close-menu");
      }

      else {
        menuToggleButtonIcon.classList.remove("close-menu");
        menuToggleButtonIcon.classList.add("open-menu");
      }
    }

    else {
      if (menuToggleButtonIcon.classList.contains("open-menu")) {
        menuToggleButtonIcon.classList.remove("open-menu");
        menuToggleButtonIcon.classList.add("close-menu");
      }
    }
  }

  );

  document.addEventListener("click", function (event) {
    if (event.target.matches(".overlay") || event.target.matches(".sidebar__close") || event.target.matches(".sidebar__close i")) {
      sidebarNavWrapper.classList.remove("active");
      overlay.classList.remove("active");
      mainWrapper.classList.remove("active");
    }
  }

  );

}

)();


const dataTable = new simpleDatatables.DataTable("#myTable", {
  searchable: true,
  fixedHeight: true,
}

)  //testimonial slider 

var swiper = new Swiper(".testimonial__slider-bottom", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",

}

);

var swiper2 = new Swiper(".testimonial__slider-top", {

  loop: true,
  spaceBetween: 10,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }

  ,
  thumbs: {
    swiper: swiper,
  }

  ,
}

);



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