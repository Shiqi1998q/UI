<template>
  <div>导航栏|<router-link to="/">Shiqi</router-link>|<router-link to="/xxx">Shiqi2</router-link></div>
  <hr/>
  <router-view/>
</template>

<script>
import Shiqi from './components/Shiqi.vue'

export default {
  name: 'App'
}
</script>
