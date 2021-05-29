// Handle Header
const handleHeader = () => {
  const header = document.getElementById("header");
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
          infinite: true,
          dots: true,
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
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  });
});
