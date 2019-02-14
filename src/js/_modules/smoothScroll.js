var smoothScrollLinks = document.querySelectorAll('.smoothScroll')
for(var i=0; i<smoothScrollLinks.length; i++) {
    var ssl = smoothScrollLinks[i];
    ssl.addEventListener('click', function(event) {
      event.preventDefault();
    
      var scrollPosition = document.querySelector(event.target.hash).offsetTop;
      window.scrollTo({"behavior": "smooth", 'top': scrollPosition});
    });
}
