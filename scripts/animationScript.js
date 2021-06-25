var lottieAnimation = document.getElementById('lottie-animation');
var state = 'play';
var animation = bodymovin.loadAnimation({
    container: lottieAnimation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json'
        // path: 'animations/animation.json',
        // path: 'https://assets10.lottiefiles.com/packages/lf20_44gjzh9a.json' //Typing in floor broken background
        // path: 'https://assets1.lottiefiles.com/packages/lf20_jaejabqz.json' //Dude typing
        // path: 'https://assets10.lottiefiles.com/packages/lf20_lln7m43m.json'
        // path: 'https://assets10.lottiefiles.com/packages/lf20_xsnsvpbs.json' //Programming
})
animation.goToAndStop(14, true);
lottieAnimation.addEventListener('click', () => {
    if (state === 'play') {
        animation.playSegments([14, 27], true);
        state = 'pause';
    } else {
        animation.playSegments([0, 14], true);
        state = 'play';
    }
});