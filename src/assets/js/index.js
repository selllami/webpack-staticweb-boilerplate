import '../css/style.css';
import _ from 'lodash';


function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'from INDEX page'], ' ');
    return element;
}

document.body.appendChild(component());