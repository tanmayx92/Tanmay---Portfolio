particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});
var options = {
    strings: ['WEB DEVELOPER ', 'SOFTWARE ENGINEER', 'SOFTWARE DEVELOPER'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 40,
    backDelay: 1500,
    startDelay: 1000
};

var typed = new Typed('.specials', options);

