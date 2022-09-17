const toggleNavbar = () => {
  let x = document.getElementById("js-navbar");
  if (x.className === "hamburger-items") {
    x.className += " hamburger-show"
  }
  else {
    x.className = "hamburger-items";
  }
}