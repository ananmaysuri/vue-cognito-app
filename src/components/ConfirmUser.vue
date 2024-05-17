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
import { confirmSignUp } from 'aws-amplify/auth';

export default {
  name: 'ConfirmUser',
  setup() {
    const email = ref('');
    const code = ref('');
    const router = useRouter();

    async function confirmRegistration() {
      try {
        await confirmSignUp({
          username: email.value,
          confirmationCode: code.value
        });
        alert('Your account has been confirmed!');
        router.push('/login');
      } catch (error) {
        alert(error.message);
      }
    }

    return { email, code, confirmRegistration };
  }
}
</script>
