<template>
    <div id="app">
        <router-view></router-view>
        <mu-container class="align-bottom" style="padding: 0">
            <mu-bottom-nav color="deepOrange300" shift>
                <mu-bottom-nav-item title="Home" icon="home" to="/"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="Album" icon="burst_mode" to="/"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="Article" icon="book" to="/articleList"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="Phone" icon="phone" to="/addressBook"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    methods: {}
  }
</script>

<style>
    #app {
        height: 100%;
        padding-bottom: 56px;
    }

    .align-bottom {
        position: fixed;
        bottom: 0;
    }
</style>
