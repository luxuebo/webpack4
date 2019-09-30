import '../css/other.scss';
function component() {
    var element = document.createElement('div');
    element.innerHTML = 'other';
    return element;
}
document.body.appendChild(component());