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
import { signIn, signOut } from 'aws-amplify/auth';

export default {
  name: 'UserLogin',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    async function login() {
      try {
        await signOut();
      } catch (error) {
        // No existing session, continue to sign in
        // Debug here to check if signed in already
      }

      try {
        await signIn({ username: email.value, password: password.value });
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', email.value);
        router.push('/dashboard');
      } catch (error) {
        alert(error.message);
      }
    }

    return { email, password, login };
  }
}
</script>