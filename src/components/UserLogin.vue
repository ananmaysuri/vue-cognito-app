<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Enter your email" required />
      <input type="password" v-model="password" placeholder="Enter your password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'UserLogin',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    async function login() {
      try {
        const response = await axios.post('https://o5gyzm0fw7.execute-api.us-east-2.amazonaws.com/loginLambda', {
          email: email.value,
          password: password.value,
        });

        if (response.data.success) {
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('username', email.value);
          router.push('/dashboard');
        } else {
          alert('Login failed');
        }
      } catch (error) {
        alert(error.message);
      }
    }

    return { email, password, login };
  },
};
</script>