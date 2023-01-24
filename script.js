// Navbar Component
const navbar = document.querySelector("#navbar");
const navbarComponent = `<div class="container-xl">
    <div class="navbar-brand">
      <a href="http://"><img src="images/logo-black.png" alt="logo-black" /></a>
    </div>
    <div class="navbar-items">
      <div class="head-menu">
        <div class="navbar-brand">
          <a href="http://"><img src="images/logo-black.png" alt="logo-black" /></a>
        </div>
        <button class="btn-hide"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="list-menu">
        <a href="http://" class="links">Link 1</a>
        <a href="http://" class="links">Link 2</a>
        <a href="http://" class="links">Link 3</a>
        <a href="http://" class="links">Link 4</a>
        <a href="http://" class="links">Link 5</a>
      </div>
    </div>
    <button class="btn-menu"><i class="fa-solid fa-bars"></i></button>
  </div>`;
navbar.innerHTML = navbarComponent;

// Button in navbar
const btnMenu = document.querySelector(".btn-menu");
const btnHide = document.querySelector(".btn-hide");
const navItems = document.querySelector(".navbar-items");
btnMenu.onclick = () => {
  navItems.classList.add("show");
};
btnHide.onclick = () => {
  navItems.classList.remove("show");
};

// Scroll efect
const width = screen.width;
let scrollPosition = 0;
window.addEventListener("scroll", function () {
  if (width > 576) {
    if (scrollPosition > this.scrollY) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px";
    }
  }

  scrollPosition = this.scrollY;
});

// Hero Section
const heroSectionComponent = `<div class="container-xl">
<div class="row align-items-center">
  <div class="col-lg-6 col-md-12 col-sm-12">
    <div class="hero-section-text">
      <h1 class="hero-section-title">Medium length display headline</h1>
      <h5>Separated they live in Bookmarks right at the coast of the famous Semantics, large language</h5>
      <div class="head-group">
        <a href="http://" class="btn-custom">Action</a>
        <p>5,000 people like you have purchased this product!</p>
      </div>
    </div>
  </div>
  <div class="col-lg-6 col-md-12 col-sm-12">
    <div class="hero-section-image">
      <img src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg" alt="" />
    </div>
  </div>
</div>
</div>`;
document.querySelector(".hero-section").innerHTML = heroSectionComponent;

// Features section
const featuresSectionComponent = ` <div class="container-xl">
<div class="row">
  <div class="col-lg-4 col-md-4 col-sm-12 card-features">
    <div class="card-title">
      <span></span>
      <h5>Features 1</h5>
    </div>
    <div class="card-text">
      <p>All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>
    </div>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-12 card-features">
    <div class="card-title">
      <span></span>
      <h5>Features 1</h5>
    </div>
    <div class="card-text">
      <p>All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>
    </div>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-12 card-features">
    <div class="card-title">
      <span></span>
      <h5>Features 1</h5>
    </div>
    <div class="card-text">
      <p>All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>
    </div>
  </div>
</div>
</div>`;
document.querySelector(".features-section").innerHTML = featuresSectionComponent;

// About us Section
const aboutUsComponent = `<div class="container-xl">
<div class="row">
  <div class="col-lg-6 col-md-12 col-sm-12">
    <div class="about-us-image">
      <img src="https://cdn.pixabay.com/photo/2022/04/18/04/37/mountain-7139402_960_720.jpg" alt="" />
    </div>
  </div>
  <div class="col-lg-6 col-md-12 col-sm-12">
    <div class="about-us-text">
      <div class="col-lg-12 col-md-6 col-sm-12">
        <h4>Long headline on two lines to turn your visitors into users and achieve more</h4>
      </div>
      <div class="col-lg-12 col-md-6 col-sm-12">
        <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean</p>
        <ul>
          <li>Showcase and embed your work with</li>
          <li>Publish across social channels in a click</li>
          <li>Sell your videos worldwide</li>
          <li>Embed your work with</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>`;
document.querySelector(".about-us-section").innerHTML = aboutUsComponent;
