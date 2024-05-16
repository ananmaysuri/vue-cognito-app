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
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

export default {
  name: 'UserRegister',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const userPool = new CognitoUserPool({
      UserPoolId: process.env.VUE_APP_COGNITO_USER_POOL_ID,
      ClientId: process.env.VUE_APP_COGNITO_CLIENT_ID
    });

    function register() {
      const attributeList = [
        new CognitoUserAttribute({ Name: 'email', Value: email.value })
      ];

      userPool.signUp(email.value, password.value, attributeList, null, (err, result) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        alert('Registration successful, please check your email for verification link.');
        console.log('Registration details:', result);
        router.push('/confirm');
      });
    }

    return { email, password, register };
  }
}
</script>
