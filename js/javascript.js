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

  if (document.body.scrollTop > screen.height - 300 || document.documentElement.scrollTop > screen.height - 300) {
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("header").style.color = "white";


  } else {
    document.getElementById("header").style.backgroundColor = "#ffffff00";
    document.getElementById("header").style.color = "white";
  }

}
