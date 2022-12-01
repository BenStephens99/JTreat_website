window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > screen.height/2 || document.documentElement.scrollTop > screen.height/2) {
      document.getElementById("header").style.backgroundColor = "black";
      document.getElementById("header").style.color = "white";
      document.getElementById("logo").innerHTML = '<img src="./images/JTreatLogo_white.png" id="title"></img>'


    } else {
      document.getElementById("header").style.backgroundColor = "#ffffff00";
      document.getElementById("header").style.color = "white";
      document.getElementById("logo").innerHTML = '<img src="./images/JTreatLogo_white.png" id="title"></img>';
    }

}


