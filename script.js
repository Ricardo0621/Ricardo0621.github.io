console.log('Yup, it works')

let theme = localStorage.getItem('holi')

if (theme == null) {
    setTheme('main')
} else {
    setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('CLico', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'main') {
        document.getElementById('theme-style').href = 'css/main.css'
    }

    if (mode == 'dark') {
        document.getElementById('theme-style').href = 'css/dark.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'css/green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'css/purple.css'
    }

    localStorage.setItem('holi', mode)
}