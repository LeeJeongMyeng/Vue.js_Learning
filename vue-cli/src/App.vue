<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성이름="상위 컴포넌트의 데이터이름"></app-header> -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewSrt"
      ></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: function(){
    return{
      str:'Header'
    }
  },
  components:{
    //위에 import로 들어온거 연결
    'app-header':AppHeader
  },
  methods:{
    renewSrt:function(){
      this.str = 'hi'
    }
  }

  
}
</script>

<style>

</style>