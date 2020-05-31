import '../css/aboutus.css';
import _ from 'lodash';


function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'from ABOUT US page'], ' ');
    return element;
}

document.body.appendChild(component());