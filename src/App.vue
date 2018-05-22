<template>
  <b-container fluid>
    <router-link to="/queryStudent">QueryStudent</router-link>
    <router-link to="/batchDate">BatchDate</router-link>
    <router-view></router-view>
  </b-container>
</template>

<script>

export default {
 name: 'app'
}
</script>