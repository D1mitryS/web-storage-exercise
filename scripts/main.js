if (!localStorage.getItem('bgcolor') ||
    !localStorage.getItem('font') ||
    !localStorage.getItem('src')) {
    setLocalStorage();
} else {
    setStyles();
}

function setLocalStorage () {
    localStorage.setItem('bgcolor', document.getElementById('bgcolor-switcher').value);
    localStorage.setItem('font', document.getElementById('font-switcher').value);
    localStorage.setItem('src', document.getElementById('src-switcher').value);

    setStyles();
}

function setStyles () {
    const main = document.getElementById('main');
    const p = document.getElementById('paragraph');
    const img = document.getElementById('image');

    main.style.backgroundColor = `#${localStorage.getItem('bgcolor')}`;
    p.style.fontFamily = `'${localStorage.getItem('font')}'`;
    img.setAttribute('src', localStorage.getItem('src'))
}

const bgcolorSwitcher = document.getElementById('bgcolor-switcher');
const fontSwitcher = document.getElementById('font-switcher');
const srcSwitcher = document.getElementById('src-switcher');

bgcolorSwitcher.value = localStorage.getItem('bgcolor');
fontSwitcher.value = localStorage.getItem('font');
srcSwitcher.value = localStorage.getItem('src');

const switchers = [bgcolorSwitcher, fontSwitcher, srcSwitcher];
setEventHandlers(switchers);

function setEventHandlers (switchers) {
    for (let i = 0; i < switchers.length; i++) {
        switchers[i].addEventListener('change', () => {
            setLocalStorage();
        })
    }
}