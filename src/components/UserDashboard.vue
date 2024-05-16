<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to your Dashboard, {{ username }}!!!</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const username = ref('Guest');

    onMounted(() => {
      const storedUsername = sessionStorage.getItem('username');
      if (storedUsername) {
        username.value = storedUsername;
      }
    });

    return { username };
  }
}
</script>
