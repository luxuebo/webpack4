// import _ from 'lodash';
import './css/index.css';
import './css/index.scss';
import bg from './assets/image/laobi.png';
import DataXml from './mock/data.xml';
import DataJson from './mock/data.json';

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = 'Hellow webpack';

    element.classList.add('hello');//css
    element.classList.add('fontsize');//sass

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = bg;
    // element.appendChild(myIcon);

    // console.log(DataXml);
    // console.log(DataJson);
    return element;
}



document.body.appendChild(component());
/*es6,7,8语法,需要babel */
let arrFn = () => {
    // console.log('111')
}
arrFn();

@log
class A {
    // a = 1;
}
let a = new A();
function log(target) {
    console.log(target)
}

