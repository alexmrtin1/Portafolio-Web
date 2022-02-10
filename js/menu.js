document.querySelectorAll('.scroll').forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault()
        document.querySelector(element.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

if(window.innerWidth < 521) {
    function toggleMenu() {
        let toggleElement = document.getElementById('menu')
        let backButton = document.getElementById('btn')
    
        if(toggleElement.className === 'hidden') {
            backButton.style.display = 'none'
            toggleElement.classList.remove('hidden')
            toggleElement.classList.add('visible')
        } else {
            backButton.style.display = 'block'
            toggleElement.classList.remove('visible')
            toggleElement.classList.add('hidden')
        }
        
        toggleElement.hidden = !toggleElement.hidden
    }
}
