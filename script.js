let theme = localStorage.getItem('theme') //This variable can have any name. It can be theme, hi or anything
console.log('default', theme)
let themeDots = document.getElementsByClassName('theme-dot')
if (theme == null) {
    setTheme('main') //Sets main mode first time the website is accessed
} else {
    setTheme(theme)
}

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() { //Adds an event for each mode clicked
        let mode = this.dataset.mode
        console.log('Curent mode: ', mode)
        setTheme(mode) //Sets the current mode
    })
}

function setTheme(mode) {
    document.getElementById('theme-style').href = 'css/' + mode + '.css' //Sets the theme-style varibale defined at the beginning of the HTML file with whatever option is selected
    localStorage.setItem('theme', mode) //Sets the localStoarge var with the current mode
}