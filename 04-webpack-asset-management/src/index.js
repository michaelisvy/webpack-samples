import _ from 'lodash';
import './style.css';
import Icon from './logo.png'

function component() {
    const element = document.createElement("div");

    // requires Lodash to be imported
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    const myBackgroundImage = new Image();
    myBackgroundImage.src = Icon;
    element.appendChild(myBackgroundImage);

    return element;
}

document.body.appendChild(component());