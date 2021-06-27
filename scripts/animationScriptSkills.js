const lottieAnimation = document.getElementById('lottie-animation-skills');
const number_of_frames = 154;
var lottie_animation = bodymovin.loadAnimation({
    container: lottieAnimation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
        progressiveLoad: true,
    },
    path: 'animations/animation.json',
    // path: 'https://assets.codepen.io/4358584/01.json',
    // path: 'animations/animation-skills.json'
    // path: 'https://assets1.lottiefiles.com/packages/lf20_jaejabqz.json'
    // path: 'https://assets10.lottiefiles.com/packages/lf20_lln7m43m.json'
    // path: 'https://assets10.lottiefiles.com/packages/lf20_xsnsvpbs.json'
})
LottieInteractivity.create({
    mode: 'scroll',
    player: lottie_animation,
    container: lottieAnimation,
    actions: [{
        visibility: [0, 1],
        type: 'seek',
        frames: [60, number_of_frames],
    }, ],
});