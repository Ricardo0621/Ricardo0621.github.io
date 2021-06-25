const lottieAnimation = document.getElementById('lottie-animation')

var animation = bodymovin.loadAnimation({
    container: lottieAnimation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    // path: 'animations/animation.json',
    path: 'https://assets10.lottiefiles.com/packages/lf20_44gjzh9a.json' //Typing in floor broken background
        // path: 'https://assets1.lottiefiles.com/packages/lf20_jaejabqz.json' //Dude typing
        // path: 'https://assets10.lottiefiles.com/packages/lf20_lln7m43m.json'
        // path: 'https://assets10.lottiefiles.com/packages/lf20_xsnsvpbs.json' //Programming
})
lottieAnimation.addEventListener('click', (e) => {
    animation.play();
    console.log('Playing');
});