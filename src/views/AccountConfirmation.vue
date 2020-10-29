<template>
  <div class="container has-text-centered">
    <p v-if="success">Account has been verified!</p>
    <p v-if="failure">Failure activating the account!</p>
    <button v-if="success" class="button is-success" @click="toLogin()">
      Login
    </button>
  </div>
</template>

<script>
import { http } from "../httpRequests";
export default {
  data() {
    return {
      success: false,
      failure: false
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    }
  },
  created() {
    let activationToken = this.$route.params.activationToken;
    http("activateAccount?token=" + activationToken, "GET", {}).then(
      response => {
        if (response.data.status == "accountActivated") {
          this.success = true;
        } else {
          this.failure = true;
        }
      }
    );
  }
};
</script>

<style scoped>
button {
  margin-top: 50px;
}
</style>
