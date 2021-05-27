<template>
    <div id="app">
        <router-link to="/">home</router-link>|
        <router-link to="/form">form</router-link>|
        <router-link to="/hello">HelloWorld</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    created(){
        
    }
}
</script>
