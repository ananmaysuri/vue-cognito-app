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
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

export default {
  setup() {
    const email = ref('');
    const code = ref('');
    const router = useRouter();

    const userPool = new CognitoUserPool({
      UserPoolId: process.env.VUE_APP_COGNITO_USER_POOL_ID,
      ClientId: process.env.VUE_APP_COGNITO_CLIENT_ID
    });

    function confirmRegistration() {
      const userData = {
        Username: email.value,
        Pool: userPool
      };

      const cognitoUser = new CognitoUser(userData);

      cognitoUser.confirmRegistration(code.value, true, function(err, result) {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        alert('Your account has been confirmed!');
        console.log('Confirmation details:', result);
        router.push('/login');
      });
    }

    return { email, code, confirmRegistration };
  }
}
</script>
