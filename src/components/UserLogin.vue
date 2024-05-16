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
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

export default {
  name: 'UserLogin',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const userPool = new CognitoUserPool({
      UserPoolId: process.env.VUE_APP_COGNITO_USER_POOL_ID,
      ClientId: process.env.VUE_APP_COGNITO_CLIENT_ID
    });

    function login() {
      const userData = {
        Username: email.value,
        Pool: userPool
      };
      const authenticationDetails = new AuthenticationDetails({
        Username: email.value,
        Password: password.value
      });
      const cognitoUser = new CognitoUser(userData);

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          alert('Login successful. Access token: ' + result.getAccessToken().getJwtToken());
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('username', userData.Username);
          router.push('/dashboard');
        },
        onFailure: function(err) {
          alert(err.message || JSON.stringify(err));
        },
      });
    }

    return { email, password, login };
  }
}
</script>
