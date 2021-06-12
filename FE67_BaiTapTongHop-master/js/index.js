// Handle Header
const handleHeader = () => {
  const header = document.getElementById("headerHome");
  if (header) {
    document.addEventListener("scroll", () => {
      let heightScreen = pageYOffset;
      if (heightScreen > 60) {
        header.classList.remove("header-transparent");
      } else {
        header.classList.add("header-transparent");
      }
    });
  }
};

handleHeader();

// Handle Sidebar
const handleSidebar = () => {
  const open = document.getElementById("openSidebar");
  const close = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("sidebar");
  const body = document.querySelector("body");

  open.addEventListener("click", () => {
    sidebar.classList.add("open");
    body.classList.add("sidebarShow");
  });

  close.addEventListener("click", () => {
    sidebar.classList.remove("open");
    body.classList.remove("sidebarShow");
  });
};

handleSidebar();

// Handle sidebar dropdown
$(function () {
  $(".sidebar-dropdown").click((e) => {
    const content = e.currentTarget.querySelector(".dropdown__content");
    if (e.currentTarget.classList.toggle("active")) {
      $(content).slideDown();
    } else {
      $(content).slideUp();
    }
  });
});

// Handle footer
$(function () {
  $(".footer-top__item").click((e) => {
    if ($(document).width() < 576) {
      const content = e.currentTarget.querySelector(".footer-top__links");
      if (e.currentTarget.classList.toggle("active")) {
        $(content).slideDown();
      } else {
        $(content).slideUp();
        setTimeout(() => content.setAttribute("style", ""), 500);
      }
    }
  });
});

// slick js cover
$(function () {
  $(".cover-content").slick({
    loop: true,
    autoplay: true,
    fade: true,
    speed: 3000,
    arrows: false,
    // dots: true,
  });
});

// slick js Services
$(function () {
  $(".services-content").slick({
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow:
      '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// slick js feedback
$(function () {
  $(".feedback-content").slick({
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow:
      '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

// slick js carousel
$(function () {
  $(".carousel-content").slick({
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow:
      '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Quest (selling)

// var myEle = function (ele) {
//   return document.getElementById(ele);
// };

// var sellClick = function () {
//   var sell = myEle("sell");
//   var sellBlock = myEle("sellblock");
//   var sell_icon = myEle("sell-icon");
//   var sell_block = myEle("sell-block");

//   if (sellBlock.style.display === "block") {
//     sellBlock.style.display = "none";
//     sell.style.height = "70px";
//     sell_icon.style.display = "block";
//     sell_block.style.display = "none";
//   } else {
//     sellBlock.style.display = "block";
//     sell.style.height = "120px";
//     sell_icon.style.display = "none";
//     sell_block.style.display = "block";
//   }
// };

// var moneyClick = function () {
//   var money = myEle("money");
//   var moneyBlock = myEle("moneyblock");
//   var money_icon = myEle("money-icon");
//   var money_block = myEle("money-block");

//   if (moneyBlock.style.display === "block") {
//     moneyBlock.style.display = "none";
//     money.style.height = "70px";
//     money_icon.style.display = "block";
//     money_block.style.display = "none";
//   } else {
//     moneyBlock.style.display = "block";
//     money.style.height = "120px";
//     money_icon.style.display = "none";
//     money_block.style.display = "block";
//   }
// };

// var costClick = function () {
//   var cost = myEle("cost");
//   var costBlock = myEle("costblock");
//   var cost_icon = myEle("cost-icon");
//   var cost_block = myEle("cost-block");

//   if (costBlock.style.display === "block") {
//     costBlock.style.display = "none";
//     cost.style.height = "70px";
//     cost_icon.style.display = "block";
//     cost_block.style.display = "none";
//   } else {
//     costBlock.style.display = "block";
//     cost.style.height = "120px";
//     cost_icon.style.display = "none";
//     cost_block.style.display = "block";
//   }
// };

// var timesClick = function () {
//   var times = myEle("times");
//   var timesBlock = myEle("timesblock");
//   var times_icon = myEle("times-icon");
//   var times_block = myEle("times-block");

//   if (timesBlock.style.display === "block") {
//     timesBlock.style.display = "none";
//     times.style.height = "70px";
//     times_icon.style.display = "block";
//     times_block.style.display = "none";
//   } else {
//     timesBlock.style.display = "block";
//     times.style.height = "120px";
//     times_icon.style.display = "none";
//     times_block.style.display = "block";
//   }
// };

// var serviceClick = function () {
//   var service = myEle("service");
//   var serviceBlock = myEle("serviceblock");
//   var service_icon = myEle("service-icon");
//   var service_block = myEle("service-block");

//   if (serviceBlock.style.display === "block") {
//     serviceBlock.style.display = "none";
//     service.style.height = "70px";
//     service_icon.style.display = "block";
//     service_block.style.display = "none";
//   } else {
//     serviceBlock.style.display = "block";
//     service.style.height = "120px";
//     service_icon.style.display = "none";
//     service_block.style.display = "block";
//   }
// };

// var paldClick = function () {
//   var pald = myEle("pald");
//   var paldBlock = myEle("paldblock");
//   var pald_icon = myEle("pald-icon");
//   var pald_block = myEle("pald-block");

//   if (paldBlock.style.display === "block") {
//     paldBlock.style.display = "none";
//     pald.style.height = "70px";
//     pald_icon.style.display = "block";
//     pald_block.style.display = "none";
//   } else {
//     paldBlock.style.display = "block";
//     pald.style.height = "120px";
//     pald_icon.style.display = "none";
//     pald_block.style.display = "block";
//   }
// };

// var justOneBlock = function () {
//   var sellBlock = myEle("sellblock");
//   var moneyBlock = myEle("moneyblock");

//   if (sellBlock.style.display === "block") {
//     moneyBlock.style.display = "none";
//   } else {
//     moneyBlock.style.display = "block";
//   }
// };

// Xử lý phần q&a
const handleQuestionSelling = () => {
  // Lấy danh sách toàn bộ câu hỏi
  const questionList = document.querySelectorAll(".questions__item");

  // Nếu questionList không tồn tại thì return
  if (!questionList) return;

  // Lặp qua từng câu hỏi
  questionList.forEach((quest) => {
    // Mỗi câu hỏi add thêm sự kiện click
    quest.addEventListener("click", () => {
      // Lấy câu hỏi đã được mở
      const questOpened = document.querySelector(".questions__item.open");

      // Nếu câu hỏi đã được mở tồn tại và không phải là câu đang được click thì xoá class open
      if (questOpened && questOpened !== quest) {
        questOpened.classList.remove("open");
      }

      // Nếu câu hỏi được click chưa có class open thì thêm vào, ngược lại thì xoá đi
      quest.classList.toggle("open");
    });
  });
};

handleQuestionSelling();

// var paldClick = function () {
//   var pald = myEle("pald");
//   var paldBlock = myEle("paldblock");
//   var pald_icon = myEle("pald-icon");
//   var pald_block = myEle("pald-block");

//   if (paldBlock.style.display === "block") {
//     paldBlock.style.display = "none";
//     pald.style.height = "70px";
//     pald_icon.style.display = "block";
//     pald_block.style.display = "none";
//   } else {
//     paldBlock.style.display = "block";
//     pald.style.height = "120px";
//     pald_icon.style.display = "none";
//     pald_block.style.display = "block";
//   }
// };
