const btnNavEl = document.querySelector(".navphonebut");
const headerEl = document.querySelector(".yokobar");
const btnNavcloseEl = document.querySelector(".yokobarbut");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

btnNavcloseEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });

  const allLinks = document.querySelectorAll(".nav-list-button");

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



  // topbut


  var backButton = document.querySelector('.topbut');

  window.addEventListener('scroll', function() {

    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    

    if (scrollPosition > window.innerHeight) {
      backButton.classList.add('show');
    } else {
      backButton.classList.remove('show');
    }
  });
  






  // scrollbar 

  window.onload = function() {
    var elements = document.querySelectorAll('.shopxbox');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var scrollWidth = element.scrollWidth;
      var clientWidth = element.clientWidth;
      var scrollLeft = (scrollWidth - clientWidth) / 2;
      element.scrollLeft = scrollLeft;
    }
    
  };
  
  

  //cvbox

  const cvbtnNavEl = document.querySelectorAll(".cvbut");
  const cvheaderEl = document.querySelectorAll(".cvtext1");
  
  cvbtnNavEl.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      cvheaderEl[index].classList.toggle("cvtextopen");
    });
  });
  
  // qabox

  const qabtnNavEl = document.querySelectorAll(".qabut");
  const qaheaderEl = document.querySelectorAll(".qatext1");
  
  qabtnNavEl.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      qaheaderEl[index].classList.toggle("qatextopen");
    });
  });
  
// moreshopinfo


  const morebarbtnNavEl = document.querySelectorAll(".moreshopbar");
  const morebarheaderEl = document.querySelectorAll(".moreshopinfo");

  morebarbtnNavEl.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      morebarheaderEl[index].classList.toggle("moreshopinfo-open");
    });
  });