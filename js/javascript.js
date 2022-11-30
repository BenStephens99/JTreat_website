window.onscroll = function () { scrollFunction() };

function scrollFunction() {

  if (window.innerWidth > 850) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.backgroundColor = "white";
      document.getElementById("header").style.color = "black";

    } else {
      document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0)";
      document.getElementById("header").style.color = "white";

    }
  }

}