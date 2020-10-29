<template>
  <div class="container is-hero">
    <div class="is-size-1 has-text-centered">Welcome to booking page</div>
    <p class="has-text-centered">To continue, please login or sign up.</p>
    <div class="columns is-centered">
      <div class="column is-1">
        <b-button class="is-success" @click="goToLogin()">Login</b-button>
      </div>
      <div class="column is-1">
        <b-button class="is-success" @click="goToSignup()">Sign up</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push("login");
    },
    goToSignup() {
      this.$router.push("signup");
    }
  }
};
</script>
