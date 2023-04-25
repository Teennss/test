const btnNavEl = document.querySelector(".navphonebut");
const headerEl = document.querySelector(".yokobar");
const btnNavcloseEl = document.querySelector(".yokobarbut");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

btnNavcloseEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });

  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");
  
      // Scroll back to top
      if (href === "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
  
      // Scroll to other links
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
  
      // Close mobile naviagtion
      if (link.classList.contains("nav-list-button"))
        headerEl.classList.toggle("nav-open");
    });
  });


  // scrollbar 

  var element = document.querySelector('.shopxbox');
  var scrollWidth = element.scrollWidth;
  var clientWidth = element.clientWidth;
  var scrollLeft = (scrollWidth - clientWidth) / 2;
  element.scrollLeft = scrollLeft;
  