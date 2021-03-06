const container = document.getElementById('lottie-animation');
const frameToStop = 60;
var animation = bodymovin.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
        progressiveLoad: true,
        // preserveAspectRatio: 'xMinYMin slice',
    },
    path: 'https://assets4.lottiefiles.com/packages/lf20_doafgsap.json'

    // path: 'https://assets5.lottiefiles.com/packages/lf20_qtjr5u1m.json'
    // path: 'https://assets2.lottiefiles.com/packages/lf20_i9mxcD.json'
    // path: 'https://assets.codepen.io/4358584/01.json',
    // path: 'https://assets10.lottiefiles.com/packages/lf20_44gjzh9a.json' //Typing in floor broken background
    // path: 'https://assets1.lottiefiles.com/packages/lf20_jaejabqz.json' //Dude typing
    // path: 'https://assets10.lottiefiles.com/packages/lf20_lln7m43m.json'
    // path: 'https://assets10.lottiefiles.com/packages/lf20_xsnsvpbs.json' //Programming
})
LottieInteractivity.create({
    mode: 'scroll',
    player: animation,
    container: container,
    actions: [{
        visibility: [0, 1],
        type: 'seek',
        frames: [47, frameToStop],
    }, ],
});