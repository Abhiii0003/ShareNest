/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});

// ====================== Like & DisLike =====================
let likeCount = 0;
    let dislikeCount = 0;
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeCountDisplay = document.getElementById('likeCount');
    const dislikeCountDisplay = document.getElementById('dislikeCount');

    likeBtn.addEventListener('click', () => {
      if (!likeBtn.classList.contains('active')) {
        likeCount++;
        likeBtn.classList.add('active');
        if (dislikeBtn.classList.contains('active')) {
          dislikeCount--;
          dislikeBtn.classList.remove('active');
        }
      } else {
        likeCount--;
        likeBtn.classList.remove('active');
      }
      updateCounts();
    });

    dislikeBtn.addEventListener('click', () => {
      if (!dislikeBtn.classList.contains('active')) {
        dislikeCount++;
        dislikeBtn.classList.add('active');
        if (likeBtn.classList.contains('active')) {
          likeCount--;
          likeBtn.classList.remove('active');
        }
      } else {
        dislikeCount--;
        dislikeBtn.classList.remove('active');
      }
      updateCounts();
    });

    function updateCounts() {
      likeCountDisplay.textContent = likeCount;
      dislikeCountDisplay.textContent = dislikeCount;
    }

    // loading script
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.main-content').style.display = 'block';
      }, 3000); // 3 seconds delay
    });

    // js countdown
    