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
