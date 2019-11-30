//发现包不是最全的，所以更改路径
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

import login from './login.vue'

/*var login = {
  template:'<h1>这是login</h1>'
}*/

var vm = new Vue({
  el:'#app',
  data:{ msg:123 },
  // components:{ login },
  /*render:function(createElements){
    return createElements(login)
  }*/
  //更简便的写法：
  render:c=>c(login)
})

import m1,{ title,title2 } from './test.js'
console.log(m1);
console.log( title + ' --- ' + title2 );
