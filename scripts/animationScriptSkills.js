const lottieAnimation = document.getElementById('lottie-animation-skills');
var lottie_animation = bodymovin.loadAnimation({
    container: lottieAnimation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
        progressiveLoad: true,
    },
    // path: 'https://assets.codepen.io/4358584/01.json',
    // path: 'animations/animation-skills.json'
    // path: 'https://assets1.lottiefiles.com/packages/lf20_jaejabqz.json'
    // path: 'https://assets10.lottiefiles.com/packages/lf20_lln7m43m.json'
    path: 'https://assets10.lottiefiles.com/packages/lf20_xsnsvpbs.json'
})
lottieAnimation.addEventListener('enterFrame', () => {
    lottie_animation.playSegments([0, 50], true);
});