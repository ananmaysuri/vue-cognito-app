<template>
  <div>
    <h1>Confirm Registration</h1>
    <form @submit.prevent="confirmRegistration">
      <input type="email" v-model="email" placeholder="Enter your email" required />
      <input type="text" v-model="code" placeholder="Enter your verification code" required />
      <button type="submit">Confirm Registration</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'ConfirmUser',
  setup() {
    const email = ref('');
    const code = ref('');
    const router = useRouter();

    async function confirmRegistration() {
      try {
        const response = await axios.post('https://o5gyzm0fw7.execute-api.us-east-2.amazonaws.com/confirmLambda', {
          email: email.value,
          code: code.value,
        });

        if (response.data.success) {
          alert('Your account has been confirmed!');
          router.push('/login');
        } else {
          alert('Confirmation failed');
        }
      } catch (error) {
        alert(error.message);
      }
    }

    return { email, code, confirmRegistration };
  },
};
</script>