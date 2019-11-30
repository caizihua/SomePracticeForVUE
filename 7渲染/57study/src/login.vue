//纯粹的.vue文件
<template>
 <div>
   <h1>这是登录组件 --- {{ msg }} </h1>
 </div>
</template>

<script>
export default{
  data(){//组件中的data必须是Function
    return { msg:'123' }
  },
  marthods:{
    show(){
      console.log(1);
      
    }
  }
}
</script>