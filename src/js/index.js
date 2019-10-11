import utils from './utils';
import _ from 'lodash';
import '../css/index.scss';
import hmr from './hmr';
$('#toOtherPage').click(function(){
    // window.location.href = './other.html';
    window.open('./other.html')
})
$('#lazyLoad').click(()=>{
    let data  = import('../mock/lazyload.js');
    data.then((res)=>{
        console.log(res.default)
    })
})
//全局常量ENV
// console.log(ENV)
//热更新
if (module.hot) {
    
    module.hot.accept('./utils', function() {
      console.log(utils)
    })

    module.hot.accept('./hmr', function() {
        hmr();
    })
  }

