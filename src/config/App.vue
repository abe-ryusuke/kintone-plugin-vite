<template>
  <div>
    <h1>Hello, Vue!</h1>
    <p>This is a sample Vue component.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
