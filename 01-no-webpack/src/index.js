function component() {
    const element = document.createElement("div");

    // requires Lodash to be imported
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    return element;
}

document.body.appendChild(component());