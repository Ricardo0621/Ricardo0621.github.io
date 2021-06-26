const container = document.getElementById('lottie-animation');
const frameToStop = 154;
var animation = bodymovin.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad: true,
        },
        path: 'animations/animation.json',
        // path: 'https://assets.codepen.io/4358584/01.json',
        // path: 'https://assets10.lottiefiles.com/packages/lf20_44gjzh9a.json' //Typing in floor broken background
        // path: 'https://assets1.lottiefiles.com/packages/lf20_jaejabqz.json' //Dude typing
        // path: 'https://assets10.lottiefiles.com/packages/lf20_lln7m43m.json'
        // path: 'https://assets10.lottiefiles.com/packages/lf20_xsnsvpbs.json' //Programming
    })
    // container.addEventListener('enterFrame', () => {
    //     console.log('enterFrame', animation.currentFrame);
    // });
animation.addEventListener('DOMLoaded', function() {
    animation.addEventListener('enterFrame', repeat);
    animation.play();

    function repeat() {
        if (animation.currentRawFrame > frameToStop) {
            animation.addEventListener('enterFrame', repeat);
            animation.goToAndPlay(0, true);
        }
    }
})