<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to your Dashboard, {{ username }}!</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'UserDashboard',
  setup() {
    const username = ref('Guest');

    onMounted(async () => {
      try {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            username.value = storedUsername;
        }
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    });

    return { username };
  }
}
</script>