$(document).ready(function () {
  $(".main-page-slider").slick({
    arrows: false,
    slidesToShow: 1,
    dots: true,
    dotsClass: "main-slider-dots",
    // appendDots: $(".main-slider-dots"),
    // responsive: [
    //   {
    //     breakpoint: 1240,
    //     settings: {
    //       slidesToShow: 2,
    //       // slidesPerRow: 2,
    //       // rows: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //       // slidesPerRow: 1,
    //       // rows: 4,
    //     },
    //   },
    // ],
  });

  $(".promo-slider").slick({
    variableWidth: true,
    // arrows: false,
    // slidesToShow: 4,
    dots: true,
    dotsClass: "promo-slider-dots",
    // appendDots: $(".slider-dots"),
    // slidesMargin: 20,
    responsive: [
      {
        breakpoint: 779,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });

  // $(".start-slider").slick({
  //   variableWidth: true,
  //   // arrows: false,
  //   // slidesToShow: 4,
  //   dots: true,
  //   dotsClass: "promo-slider-dots",
  //   // appendDots: $(".slider-dots"),
  //   // slidesMargin: 20,
  //   // responsive: [
  //   //   {
  //   //     breakpoint: 779,
  //   //     settings: {
  //   //       slidesToShow: 1,
  //   //       variableWidth: false,
  //   //     },
  //   //   },
  //   // ],
  // });

  $(".start-slider").slick({
    // variableWidth: true,
    slidesToShow: 4,
    dots: true,
    dotsClass: "promo-slider-dots",
    arrows: true,
    prevArrow: $(".start-slider-arr .start-slick-prev"), // jQuery-элемент кнопки "назад"
    nextArrow: $(".start-slider-arr .start-slick-next"),
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1090,
        settings: {
          variableWidth: true,
        },
      },
    ],
  });

  $(".store-slider").slick({
    // variableWidth: true,
    slidesToShow: 4,
    dots: true,
    dotsClass: "promo-slider-dots",
    arrows: true,
    // prevArrow: $(".start-slider-arr .start-slick-prev"), // jQuery-элемент кнопки "назад"
    // nextArrow: $(".start-slider-arr .start-slick-next"),
    // responsive: [
    //   {
    //     breakpoint: 1470,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 1090,
    //     settings: {
    //       variableWidth: true,
    //     },
    //   },
    // ],
  });

  $(".special-slider").slick({
    variableWidth: true,
    arrows: true,
    dots: true,
    dotsClass: "promo-slider-dots",
    prevArrow: $(".spec-buttons .spec-prev"),
    nextArrow: $(".spec-buttons .spec-next"),
  });

  $(".rev-slider").slick({
    variableWidth: true,
    // arrows: false,
    // slidesToShow: 4,
    // arrows: true,
    dots: true,
    dotsClass: "promo-slider-dots",
  });

  // $(".gal-slider").slick({
  //   // variableWidth: true,
  //   arrows: true,
  //   slidesToShow: 2,
  //   prevArrow: $(".gal-slick-prev"),
  //   nextArrow: $(".gal-slick-next"),
  //   // dots: true,
  //   // dotsClass: "promo-slider-dots",
  // });

  if ($(".eq-slider").length) {
    $(".eq-slider").slick({
      arrows: true,
      slidesToShow: 1,
      dots: true,
      // dotsClass: "promo-slider-dots",
      dotsClass: "main-slider-dots",
      prevArrow: $(".eq-slider-arr .eq-slick-prev"),
      nextArrow: $(".eq-slider-arr .eq-slick-next "),
      // responsive: [
      //   {
      //     breakpoint: 640,
      //     settings: {
      //       slidesToShow: 1,
      //     },
      //   },
      // ],ab-eq-slider
    });
  }

  if ($(".ab-eq-slider").length) {
    $(".ab-eq-slider").slick({
      arrows: true,
      slidesToShow: 1,
      dots: true,
      dotsClass: "promo-slider-dots",
      // dotsClass: "main-slider-dots",
      prevArrow: $(".ab-slider-arr .ab-slick-prev"),
      nextArrow: $(".ab-slider-arr .ab-slick-next"),
      // responsive: [
      //   {
      //     breakpoint: 640,
      //     settings: {
      //       slidesToShow: 1,
      //     },
      //   },
      // ],
    });
  }

  if ($(".part-slider").length) {
    $(".part-slider").slick({
      arrows: true,
      slidesToShow: 4,
      dots: true,
      dotsClass: "promo-slider-dots",
      // dotsClass: "main-slider-dots",
      prevArrow: $(".part-slick-prev"),
      nextArrow: $(".part-slick-next"),
      responsive: [
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }
  if ($(".sertificates-slider").length) {
    $(".sertificates-slider   ").slick({
      arrows: true,
      slidesToShow: 4,
      dots: true,
      // dotsClass: "promo-slider-dots",
      dotsClass: "main-slider-dots",
      prevArrow: $(".sert-slider-arr .sert-slick-prev"),
      nextArrow: $(".sert-slider-arr .sert-slick-next"),
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
});

// document.getElementById("direct-btn").addEventListener("click", function () {
//   var hiddenElements = document.querySelectorAll(".direct-hidden");
//   var span = document.querySelector(".eee");
//   hiddenElements.forEach(function (element) {
//     element.style.display = "block";
//   });
//   span.innerHTML = "Новый текст";
// });

// direct button
// var button = document.getElementById("direct-btn");
// var hiddenElements = document.querySelectorAll(".direct-hidden");
// var isHidden = true;
// button.addEventListener("click", function () {
//   if (isHidden) {
//     hiddenElements.forEach(function (element) {
//       element.style.display = "block";
//     });
//     document.querySelector(".direction-btn-text").textContent = "Скрыть";
//   } else {
//     hiddenElements.forEach(function (element) {
//       element.style.display = "none";
//     });

//     document.querySelector(".direction-btn-text").textContent = "Показать все";
//   }
//   isHidden = !isHidden;
// });

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("direct-btn");
  var hiddenElements = document.querySelectorAll(".direct-hidden");
  var isHidden = true;

  if (button && hiddenElements.length > 0) {
    button.addEventListener("click", function () {
      if (isHidden) {
        hiddenElements.forEach(function (element) {
          element.style.display = "block";
        });
        document.querySelector(".direction-btn-text").textContent = "Скрыть";
      } else {
        hiddenElements.forEach(function (element) {
          element.style.display = "none";
        });

        document.querySelector(".direction-btn-text").textContent =
          "Показать все";
      }
      isHidden = !isHidden;
    });
  }
});

// like button

/*var likeButton = document.querySelector(".like-btn");
var likeIcon = document.querySelector(".like-icon");

var likeStatus = false;

if (likeIcon) {
  likeButton.addEventListener("click", function () {
    likeStatus = !likeStatus;
    if (likeStatus) {
      likeIcon.src = "assets/template/images/active_like.svg"; //
    } else {
      likeIcon.src = "assets/template/images/like.svg"; //
    }
  });
}*/

// gallery tabs

const tabButtons = document.querySelectorAll(".gal-tab");
const tabContents = document.querySelectorAll(".gal-slider-wrapper");




const sliders = document.querySelectorAll(".gal-slider");
sliders.forEach((slider) => {
  $(slider).slick({
    arrows: true,
    slidesToShow: 2,
    // dots: true,
    dotsClass: "promo-slider-dots",
    prevArrow: $(slider).closest(".gal-slider-wrapper").find(".gal-slick-prev"),
    nextArrow: $(slider).closest(".gal-slider-wrapper").find(".gal-slick-next"),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    const tabId = button.id.replace("tab", "");
    const contentId = `content${tabId}`;
    const tabContent = document.getElementById(contentId);

    tabContent.classList.add("active");

    const activeSlider = tabContent.querySelector(".gal-slider");
    $(activeSlider).slick("unslick");
    $(activeSlider).slick({
      arrows: true,
      slidesToShow: 2,
      // dots: true,
      dotsClass: "promo-slider-dots",
      prevArrow: $(tabContent).find(".gal-slick-prev"),
      nextArrow: $(tabContent).find(".gal-slick-next"),
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

const menuBurger = document.getElementById("menu-burger");
const mobMenu = document.querySelector(".mob-menu");
menuBurger.addEventListener("click", function (e) {
  e.preventDefault();
  menuBurger.classList.toggle("active");
  mobMenu.classList.toggle("active");
});

// const mobSub = document.getElementById("mob-sub");
// const mobSubList = document.querySelector(".mob-sub");

// mobSub.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (mobSubList.style.display === "none") {
//     mobSubList.style.display = "block";
//   } else {
//     mobSubList.style.display = "none";
//   }
// });

const mobSub = document.getElementById("mob-sub");
const mobSubList = document.querySelector(".mob-sub");

mobSub.addEventListener("click", function (e) {
  e.preventDefault();


  const computedStyle = window.getComputedStyle(mobSubList);


  if (computedStyle.display === "none") {
    mobSubList.style.display = "block";
  } else {
    mobSubList.style.display = "none";
  }
});

const footMenuLis = document.querySelectorAll(".foot-menu-li");

footMenuLis.forEach((li) => {
  const footSubBtn = li.querySelector(".foot-sub-btn");
  li.addEventListener("click", function (e) {
    e.preventDefault();
    li.classList.toggle("active");
  });
});

//  phone mask

$(function () {
  $(".phone-input").mask("+7(999) 999-99-99");
});

// registration_scroll
/*
const directionSection = document.querySelector(".directions");
const registrationBlock = document.querySelector(".doc-p-r");
const footer = document.querySelector(".footer");

const registrationHeight = registrationBlock.offsetHeight;
let isSticky = false;

window.addEventListener("scroll", () => {
  const directionSectionBottom =
    directionSection.getBoundingClientRect().bottom;
  const footerTop = footer.getBoundingClientRect().top;

  if (window.innerWidth >= 1240) {
    const directionSectionBottom =
      directionSection.getBoundingClientRect().bottom;
    const footerTop = footer.getBoundingClientRect().top;

    if (
      directionSectionBottom < registrationHeight &&
      footerTop > registrationHeight + 120
    ) {
      if (!isSticky) {
        registrationBlock.classList.add("sticky");
        isSticky = true;
      }
    } else {
      if (isSticky) {
        registrationBlock.classList.remove("sticky");
        isSticky = false;
      }
    }
  }
});

*/

const timBtn = document.querySelectorAll(".tim-btn");
const timHidden = document.querySelectorAll(".t-hidden");

let hidden = true;

timBtn.forEach((button) => {
  button.addEventListener("click", () => {
    timHidden.forEach((element) => {
      if (hidden) {
        element.classList.remove(".t-hidden");
      } else {
        element.classList.add("hidden");
      }
    });

    hidden = !hidden;
  });
});
// Показать список врачей spec-select

const showSpec = document.getElementById("show-spec");
const specList = document.querySelector(".spec-select-sel");

if (specList) {
  showSpec.addEventListener("click", function (e) {
    e.preventDefault();
    specList.classList.toggle("active");
  });
}

const tomBtn = document.getElementById("tim-btn");
const timCards = document.querySelector(".tim-cards");

// if (timCards) {
//   tomBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     timCards.classList.toggle("active");
//     timCards.classList.toggle("blur");
//   });
//   if (tomBtn.innerHTML === "Показать все") {
//     tomBtn.innerHTML = "Скрыть";
//   } else {
//     tomBtn.innerHTML = "Показать все";
//   }
// }

if (document.querySelector("[data-fancybox]")) {
  Fancybox.bind("[data-fancybox]", {
    // overlayColor: "green",
  });
}

// popup

const prBtn1 = document.getElementById("pr-btn-1");
const prWrap1 = document.querySelector(".pr-wrap-1");
const prWrap2 = document.querySelector(".pr-wrap-2");
const closePr = document.getElementById("close-pr");

if (prWrap1 && prWrap2) {
  prBtn1.addEventListener("click", function (e) {
    prWrap1.classList.toggle("active");
    prWrap2.classList.toggle("active");
  });
  closePr.addEventListener("click", function () {
    $.fn.fancybox.close();
  });
}

if (document.querySelector("[data-fancybox]")) {
  Fancybox.bind("[data-fancybox]", {
    // overlayColor: "green",
  });
}

if (prWrap1 && prWrap2) {
  prBtn1.addEventListener("click", function (e) {
    prWrap1.classList.toggle("active");
    prWrap2.classList.toggle("active");
  });
  closePr.addEventListener("click", function () {
    $.fn.fancybox.close();
  });
}

if (timCards) {
  tomBtn.addEventListener("click", function (e) {
    e.preventDefault();
    timCards.classList.toggle("active");
    timCards.classList.toggle("blur");

    if (tomBtn.innerHTML === "Показать все") {
      tomBtn.innerHTML = "Скрыть";
    } else {
      tomBtn.innerHTML = "Показать все";
    }
  });
}

// Fancybox
// Fancybox.bind("[data-fancybox]", {});

// dms btn

const dmsBtn = document.getElementById("dms");
const dmsUl = document.querySelector(".dms-ul");

function moreBtn(btn, content) {
  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      content.classList.toggle("active");
      if ((btn.dataset.blur = "true")) {
        content.classList.toggle("blur");
      }
      if (btn.innerHTML.trim() === "Показать все") {
        btn.innerHTML = "Скрыть";
      } else {
        btn.innerHTML = "Показать все";
      }
    });
  }
}

function moreBtn_2(btn, content) {
  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      content.classList.toggle("active");
      if ((btn.dataset.blur = "true")) {
        content.classList.toggle("blur");
      }
      if (btn.innerHTML.trim() === "Показать еще") {
        btn.innerHTML = "Скрыть";
      } else {
        btn.innerHTML = "Показать еще";
      }
    });
  }
}

const search_page_btn = document.getElementById("search-page-btn");
const search_res = document.querySelector(".search-res");

const price_btn = document.getElementById("price-btn");
const price_list = document.getElementById("price-list");

moreBtn_2(price_btn, price_list);

moreBtn(dmsBtn, dmsUl);
moreBtn_2(search_page_btn, search_res);

// if (dmsUl) {
//   dmsBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     dmsUl.classList.toggle("active");
//     dmsUl.classList.toggle("blur");
//     dmsBtn.classList.toggle("active");
//     if (dmsBtn.innerHTML === "Показать все") {
//       dmsBtn.innerHTML = "Скрыть";
//     } else {
//       dmsBtn.innerHTML = "Показать все";
//     }
//   });
// }

const promoBtn = document.getElementById("promo-btn");
const promoCard = document.querySelectorAll(".promo-card");

if (promoBtn) {
  promoBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // promoCard.classList.toggle("active");
    promoCard.forEach((card) => {
      card.classList.toggle("active");
    });
    if (promoBtn.innerHTML === "Показать еще") {
      promoBtn.innerHTML = "Скрыть";
    } else {
      promoBtn.innerHTML = "Показать еще";
    }
  });
}

const specAll = document.getElementById("spec-all");
const specPageWrap = document.querySelector(".spec-page-wrap");

moreBtn(specAll, specPageWrap);

const historyBtn = document.querySelector(".history-btn");
const history = document.querySelector(".history");

moreBtn(historyBtn, history);

const orCardBtn = document.querySelectorAll(".or-card-btn");
const orderList = document.querySelectorAll(".order-list");

// orCardBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     orderList.forEach((list) => {
//       list.classList.toggle("active");
//     });
//   });
// });

// orCardBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     orderList.forEach((list) => {
//       list.classList.toggle("active");
//     });
//     btn.classList.toggle("active");
//   });
// });

const orCardBtns = document.querySelectorAll(".or-card-btn");

orCardBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const targetBlock = document.getElementById(targetId);

    if (targetBlock) {
      targetBlock.classList.toggle("active");
      btn.classList.toggle("active");
    }
  });
});

// $("body").on("click", ".password-control", function () {
//   if ($("#password-input").attr("type") == "password") {
//     $(this).addClass("view");
//     $("#password-input").attr("type", "text");
//   } else {
//     $(this).removeClass("view");
//     $("#password-input").attr("type", "password");
//   }
//   return false;
// });

// $("body").on("click", ".password-control", function () {
//   if ($("#password-input").attr("type") == "password") {
//     $(this).addClass("view");
//     $("#password-input").attr("type", "text");
//   } else {
//     $(this).removeClass("view");
//     $("#password-input").attr("type", "password");
//   }
//   return false;
// });

$("body").on("click", ".password-control", function () {
  var passwordInput = $(this).closest(".password").find(".password-input");

  if (passwordInput.attr("type") == "password") {
    $(this).addClass("view");
    passwordInput.attr("type", "text");
  } else {
    $(this).removeClass("view");
    passwordInput.attr("type", "password");
  }
  return false;
});

document.addEventListener("DOMContentLoaded", function () {
  var tabButtons = document.querySelectorAll(".pr-tab");
  var tabContents = document.querySelectorAll(".p-a-form");

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var tabId = this.getAttribute("data-tab");

      tabContents.forEach(function (tabContent) {
        tabContent.style.display = "none";
      });
      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      document.getElementById(tabId).style.display = "flex";
      this.classList.add("active");
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   var tabButtons = document.querySelectorAll(".reg-tab");

//   tabButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       var tabId = this.getAttribute("data-tab");
//       openTab(tabId);
//     });
//   });

//   function openTab(tabId) {
//     var tabContents = document.querySelectorAll(".reg-content");
//     tabContents.forEach(function (tabContent) {
//       tabContent.style.display = "none";
//     });

//     document.getElementById(tabId).style.display = "block";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  var tabButtons = document.querySelectorAll(".reg-tab");
  var tabContents = document.querySelectorAll(".reg-content");

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var tabId = this.getAttribute("data-tab");

      tabContents.forEach(function (tabContent) {
        tabContent.style.display = "none";
      });
      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      document.getElementById(tabId).style.display = "flex";
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var tabButtons = document.querySelectorAll(".p-tab");
  var tabContents = document.querySelectorAll(".price-tab-content");

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var tabId = this.getAttribute("data-tab");

      tabContents.forEach(function (tabContent) {
        tabContent.style.display = "none";
      });
      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      document.getElementById(tabId).style.display = "block";
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".s-card-ar");
  var historyBlock = document.querySelector(".history");
  if (button) {
    button.addEventListener("click", function () {
      historyBlock.classList.toggle("hidden");
      button.classList.toggle("active");
    });
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const tabs = document.querySelectorAll(".select-tab");
//   const tabContents = document.querySelectorAll(".s-content");
//   const lkActCard = document.getElementById("lk-act-card");

//   tabs.forEach((tab) => {
//     tab.addEventListener("click", function () {
//       tabs.forEach((t) => t.classList.remove("active"));

//       tab.classList.add("active");

//       tabContents.forEach((content) => content.classList.remove("active"));

//       if (tab.getAttribute("data-tab") === "lk-cards") {
//         lkActCard.classList.remove("active");
//       } else {
//         lkActCard.classList.add("active");
//       }

//       const tabId = tab.getAttribute("data-tab");
//       const tabContent = document.getElementById(tabId);
//       if (tabContent) {
//         tabContent.classList.add("active");
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const tabs = document.querySelectorAll(".select-tab");
//   const tabContents = document.querySelectorAll(".tab-content");
//   const lkActCard = document.getElementById("lk-act-card");

//   tabs.forEach((tab) => {
//     tab.addEventListener("click", function () {
//       tabs.forEach((t) => t.classList.remove("active"));

//       tab.classList.add("active");

//       tabContents.forEach((content) => content.classList.remove("active"));

//       if (lkActCard) {
//         if (tab.getAttribute("data-tab") === "lk-cards") {
//           lkActCard.classList.remove("active");
//         } else {
//           lkActCard.classList.add("active");
//         }
//       }

//       const tabId = tab.getAttribute("data-tab");
//       const tabContent = document.getElementById(tabId);
//       if (tabContent) {
//         tabContent.classList.add("active");
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const tabs = document.querySelectorAll(".select-tab");
//   const contents = document.querySelectorAll(".s-content");
//   const lkActCard = document.querySelector(".lk-act-card");

//   tabs.forEach((tab) => {
//     tab.addEventListener("click", function () {
//       tabs.forEach((t) => t.classList.remove("active"));

//       tab.classList.add("active");

//       contents.forEach((content) => content.classList.remove("active"));

//       const tabId = tab.getAttribute("data-tab");
//       const content = document.getElementById(tabId);
//       if (content) {
//         content.classList.add("active");
//       }

//       if (lkActCard) {
//         if (tabId === "lk-cards") {
//           lkActCard.style.display = "none";
//         } else {
//           lkActCard.style.display = "block";
//         }
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const tabs = document.querySelectorAll(".select-tab");
//   const contents = document.querySelectorAll(".s-content");
//   const lkActCard = document.querySelector(".lk-act-card");

//   const initialTab = tabs[0];
//   const initialTabId = initialTab.getAttribute("data-tab");
//   const initialContent = document.getElementById(initialTabId);
//   if (initialContent) {
//     initialContent.classList.add("active");
//   }

//   tabs.forEach((tab) => {
//     tab.addEventListener("click", function () {
//       tabs.forEach((t) => t.classList.remove("active"));

//       tab.classList.add("active");

//       contents.forEach((content) => content.classList.remove("active"));

//       const tabId = tab.getAttribute("data-tab");
//       const content = document.getElementById(tabId);
//       if (content) {
//         content.classList.add("active");
//       }

//       if (lkActCard) {
//         if (tabId === "lk-cards") {
//           lkActCard.style.display = "none";
//         } else {
//           lkActCard.style.display = "block";
//         }
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".select-tab");
  const contents = document.querySelectorAll(".s-content");
  const lkActCard = document.querySelector(".lk-act-card");

  if (tabs.length > 0) {
    const initialTab = tabs[0];
    const initialTabId = initialTab.getAttribute("data-tab");
    const initialContent = document.getElementById(initialTabId);
    if (initialContent) {
      initialContent.classList.add("active");
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        contents.forEach((content) => content.classList.remove("active"));

        const tabId = tab.getAttribute("data-tab");
        const content = document.getElementById(tabId);
        if (content) {
          content.classList.add("active");
        }

        if (lkActCard) {
          if (tabId === "lk-cards") {
            lkActCard.style.display = "none";
          } else {
            lkActCard.style.display = "block";
          }
        }
      });
    });
  }
});

document.addEventListener("input", function (e) {
  var input = e.target;

  if (input.classList.contains("digit-input") && input.value.length === 1) {
    var nextInput = input.nextElementSibling;

    if (nextInput) {
      nextInput.focus();
    }
  }
});

// registration-popup
if (document.getElementById("registration")) {
  document
    .getElementById("registration")
    .addEventListener("click", function () {
      openPopup("registration-popup");
    });
}
document.querySelectorAll(".close-popup").forEach(function (button) {
  button.addEventListener("click", function () {
    closePopup();
  });
});
if (document.getElementById("overlay")) {
  document.getElementById("overlay").addEventListener("click", function () {
    closePopup();
  });
}

function openPopup(popupId) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById(popupId).style.display = "flex";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.querySelectorAll(".registration-popup").forEach(function (popup) {
    popup.style.display = "none";
  });
}

// store sidebar

// const storeNavEl = document.querySelector(".store-nav-el");
// const storeElUl = document.querySelector(".store-el-ul");

// if (storeNavEl) {
//   storeNavEl.addEventListener("click", function (e) {
//     e.preventDefault();
//     storeElUl.classList.toggle("active");
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // Получаем все ссылки с классом "store-nav-el"
//   var navLinks = document.querySelectorAll(".store-nav-el");

//   // Добавляем обработчик события для каждой ссылки
//   navLinks.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();

//       // Получаем соответствующий список "store-el-ul" для текущей ссылки
//       var sublist = link.nextElementSibling;

//       // Переключаем видимость списка
//       sublist.style.display =
//         sublist.style.display === "none" ? "block" : "none";

//       // Скрываем остальные списки
//       hideOtherSublists(sublist);
//     });
//   });

//   function hideOtherSublists(currentSublist) {
//     navLinks.forEach(function (link) {
//       var sublist = link.nextElementSibling;

//       // Скрываем список, если он не является текущим
//       if (sublist !== currentSublist) {
//         sublist.style.display = "none";
//       }
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {

  var navLinks = document.querySelectorAll(".store-nav-el");


  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var sublist = link.nextElementSibling;

      if (sublist) {
 
        sublist.style.display =
          sublist.style.display === "none" ? "block" : "none";


        hideOtherSublists(sublist);
      }
    });
  });

  function hideOtherSublists(currentSublist) {
    navLinks.forEach(function (link) {
      var sublist = link.nextElementSibling;

      if (sublist && sublist !== currentSublist) {
        sublist.style.display = "none";
      }
    });
  }
});

// specialization--------------------------------------------------------------

const specLink = document.querySelectorAll(".spec-ul-link");
const doctorCards = document.querySelectorAll(".doctor-card");

// function filterDoctors(spec) {
//   doctorCards.forEach((card) => {
//     const doctorSpec = card.dataset.spec.toLowerCase();
//     if (doctorSpec === spec) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });

// }

function filterDoctors(spec) {
  doctorCards.forEach((card) => {
    const doctorSpec = card.dataset.spec.toLowerCase();
    if (doctorSpec === spec) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

specLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const spec = e.target.dataset.filter.toLowerCase();
    filterDoctors(spec);
  });

  const allSpecButton = document.querySelector(".all-spec-2");
  if (allSpecButton) {
    allSpecButton.style.display = "none";
  }
});

const timeline_btn = document.getElementById("timeline-btn");
const timeline = document.getElementById("timeline");

timeline_btn.addEventListener("mouseover", () => {
  timeline.classList.add("active");
});

timeline_btn.addEventListener("mouseout", () => {
  timeline.classList.remove("active");
});
