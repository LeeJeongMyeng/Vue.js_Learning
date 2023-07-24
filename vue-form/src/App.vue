<template>
  <!--submit.prevent는 submit이벤트가 일어나면 스크립트단에서 event.preventDefault();라는
      submit시 페이지 새로고침을 막는것와 동일하다.-->
  <div>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw:</label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit" >login</button>
  </form>
  
     <app-header></app-header>
  
  </div>

</template>

<script>
import axios from 'axios';
import AppHeaderVue from './components/AppHeader.vue';

export default {
  data: function(){
    return {
      username: '',
      password: '',
    }
  },
  components: {
    'app-header': AppHeaderVue
  },
  methods:{
    //
    
    submitForm:function(){
      //새로고침을 막는방법, submit이되면 새로고침이 되는데 그걸 막는다.
      //event.preventDefault();
      console.log(this.username,this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url,data)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
      }
    }
    
  }

</script>

<style>

</style>