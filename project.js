var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function registeredFunction() {
    const name = document.getElementById("psw");
    if (!name.checkValidity()) {
        document.getElementById("demo").innerHTML = name.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    }

    const text = document.getElementById("subject");
    if (!inpObj3.checkValidity()) {
        document.getElementById("demo3").innerHTML = text.validationMessage;
    } else {
        document.getElementById("demo3").innerHTML = "Input OK";
    }

}
