<template>
  <div>
    <header>
        <h1>{{ propsdata }}</h1>
        <button v-on:click="sendEvent">send</button>
    </header>
  </div>
</template>

<script>

export default {
    props:['propsdata'],
    methods:{
        sendEvent:function(){
            this.$emit('renew');
        }
    }
}
</script>

<style>

</style>