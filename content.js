function isMozilla() {
    return  navigator.userAgentData === undefined ||
            navigator.userAgentData.brands === undefined ||
            !navigator.userAgentData.brands.some(el => el.brand === 'Google Chrome')
}

const styleTargetElementSelector = isMozilla() ? 'body' : 'html'

const gsStyles = [
    'squint-gs-c1',
    'squint-gs-c4',
    'squint-gs-c8',
    'squint-gs-c16']

const cursorStyles = [
    'squint-cursor-transp',
    'squint-cursor-transp',
    'squint-cursor-transp',
    'squint-cursor-transp']

function toggleGreyscale(idx) {
    const el = document.querySelector(styleTargetElementSelector)
    toggleStyle(el, gsStyles, idx)
    toggleStyle(el, cursorStyles, idx)
}

function toggleStyle(element, stylesList, idx) {
    idx -= 1
    let cur = -1
    for (let i = 0; i < stylesList.length; i++) {
        if (element.classList.contains(stylesList[i])) {
            cur = i
            break
        }
    }

    if (cur == idx) {
        element.classList.remove(stylesList[cur])
    } else {
        for (let stl of stylesList) {
            element.classList.remove(stl)
        }

        element.classList.add(stylesList[idx])
    } 
}

function addSvgFiltersToThePage() {
    if (document.querySelector('svg#shader-matrices')) return

    const b = document.querySelector('body')
    b.insertAdjacentHTML(
        'beforeend',
        `<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0" id="shader-matrices">
        <filter id="grayscale-std" color-interpolation-filters="linearRGB">
            <feColorMatrix type="matrix" values="
                0.2126 0.7152 0.0722 0 0
                0.2126 0.7152 0.0722 0 0
                0.2126 0.7152 0.0722 0 0
                0      0      0      1 0"></feColorMatrix>
        </filter>`
    )
}

function initialize() {
    window.addEventListener('keydown', evt => { 
        addSvgFiltersToThePage()
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