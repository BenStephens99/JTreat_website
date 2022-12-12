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

  if (screen.width > 750) {
    if (document.body.scrollTop > screen.height - 300 || document.documentElement.scrollTop > screen.height - 300) {
      document.getElementById("header").style.backgroundColor = "black";
      document.getElementById("header").style.color = "white";
    } else {
      document.getElementById("header").style.backgroundColor = "#ffffff00";
      document.getElementById("header").style.color = "white";
    }
  } else {
    if (document.body.scrollTop > screen.height - 100 || document.documentElement.scrollTop > screen.height - 100) {
      if (!menuOpen) {
        document.getElementById("menuIcon").innerHTML = '<img src="./images/menuIconBlack.png" onclick="toggleMenu()"></img>'
      }
    } else {
      document.getElementById("menuIcon").innerHTML = '<img src="./images/menuIconWhite.png" onclick="toggleMenu()"></img>'
    }
  }
}

let menuOpen = false;
function toggleMenu() {
  if (screen.width < 750) {
    if (!menuOpen) {
      document.getElementById("menuIcon").style.rotate = "90deg";
      document.getElementById("header").style.top = "0";
      document.getElementById("menuIcon").innerHTML = '<img src="./images/menuIconWhite.png" onclick="toggleMenu()"></img>';
      menuOpen = true;
    } else {
      document.getElementById("menuIcon").style.rotate = "0deg";
      document.getElementById("header").style.top = "-250px";
      if (document.body.scrollTop > screen.height - 100 || document.documentElement.scrollTop > screen.height - 100) {
        setTimeout(function () {
          document.getElementById("menuIcon").innerHTML = '<img src="./images/menuIconBlack.png" onclick="toggleMenu()"></img>'
        }, 500);
      }
      menuOpen = false;
    }
  }
}