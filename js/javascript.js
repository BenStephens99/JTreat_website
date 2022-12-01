window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > screen.height - 250 || document.documentElement.scrollTop > screen.height - 250) {
      document.getElementById("header").style.backgroundColor = "black";
      document.getElementById("header").style.color = "white";


    } else {
      document.getElementById("header").style.backgroundColor = "#ffffff00";
      document.getElementById("header").style.color = "white";
    }

}


