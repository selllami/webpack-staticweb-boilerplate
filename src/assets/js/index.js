import '../css/style.css';
import aboutus from './aboutus.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = "HELLO WEBPACK";

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = aboutus;

    element.appendChild(btn);

    return element;
}

let element = component(); // Store the element to re-render on aboutus.js changes
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./aboutus.js', function () {
        console.log('Accepting the updated aboutus module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}