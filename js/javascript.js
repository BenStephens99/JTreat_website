window.onscroll = function () { scrollFunction() };
window.onresize = function () { resizeBanner() };

resizeBanner();

function resizeBanner() {
  if (screen.height > screen.width) {
    document.getElementById("bannerBackground").style.height = "100%";
    document.getElementById("bannerBackground").style.width = "auto";
  } else {
    document.getElementById("bannerBackground").style.width = "100%";
    document.getElementById("bannerBackground").style.height = "auto";
  }
}


function scrollFunction() {

  if (screen.width > 800) {
    if (document.body.scrollTop > screen.height - 300 || document.documentElement.scrollTop > screen.height - 300) {
      document.getElementById("header").style.backgroundColor = "black";
      document.getElementById("header").style.color = "white";
    } else {
      document.getElementById("header").style.backgroundColor = "#ffffff00";
      document.getElementById("header").style.color = "white";
    }
  } else {
    if (menuOpen) {
      closeMenu();
    }
  }
}

let menuOpen = false;
function toggleMenu() {
  if (screen.width < 800) {
    if (!menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }
}

function openMenu() {
  document.getElementById("lineTop").style.top = "100%";
  document.getElementById("lineTop").style.rotate = "45deg";
  document.getElementById("lineBottom").style.rotate = "135deg";

  document.getElementById("header").style.top = "0";
  menuOpen = true;
}

function closeMenu() {

  document.getElementById("lineTop").style.rotate = "0deg";
  document.getElementById("lineTop").style.top = "0px";

  document.getElementById("lineBottom").style.rotate = "0deg";

  document.getElementById("header").style.top = "-250px";
  menuOpen = false;
}
