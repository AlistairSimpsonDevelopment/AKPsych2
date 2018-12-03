function heroChange() {
    var hero = document.getElementById('hero');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    hero.style.width = windowWidth + 'px';
    hero.style.height = (windowHeight * 0.98) + 'px';

}
heroChange();
window.addEventListener('resize', function() {
  heroChange();
}, true);
