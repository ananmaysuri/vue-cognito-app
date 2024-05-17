<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="email" v-model="email" placeholder="Enter your email" required />
      <input type="password" v-model="password" placeholder="Enter your password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signUp } from 'aws-amplify/auth';

export default {
  name: 'UserRegister',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    async function register() {
      try {
        await signUp({
          username: email.value,
          password: password.value,
          attributes: {
            email: email.value,
          }
        });
        alert('Registration successful, please check your email for verification link.');
        router.push('/confirm');
      } catch (error) {
        alert(error.message);
      }
    }

    return { email, password, register };
  }
}
</script>
