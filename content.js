const styles = [
    'my-awesome-gs-c1',
    'my-awesome-gs-c4',
    'my-awesome-gs-c8',
    'my-awesome-gs-c16']

function toggleGreyscale(idx) {
    idx -= 1
    const b = document.querySelector('html')
    let cur = -1
    for (let i = 0; i < styles.length; i++) {
        if (b.classList.contains(styles[i])) {
            cur = i
            break
        }
    }

    if (cur == idx) {
        b.classList.remove(styles[cur])
    } else {
        for (let stl of styles) {
            b.classList.remove(stl)
        }

        b.classList.add(styles[idx])
    } 
}

function initialize() {
    window.addEventListener('keydown', evt => { 
        if (evt.altKey) {
            switch(evt.code) {
                case 'Digit1':
                    toggleGreyscale(1)
                    break        
                case 'Digit2':
                    toggleGreyscale(2)
                    break
                case 'Digit3':
                    toggleGreyscale(3)
                    break
                case 'Digit4':
                    toggleGreyscale(4)
                    break
            }
        }
    })
}

if (document.readyState !== 'loading') {
    initialize()
} else {
    document.addEventListener('DOMContentLoaded', function() { initialize() }) 
}