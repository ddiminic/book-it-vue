<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <div class="field">
                <label for="" class="label">Username</label>
                <div class="control">
                  <b-input
                    class="is-fullwidth"
                    v-model="username"
                    placeholder="Username"
                  ></b-input>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control">
                  <b-input
                    class="is-fullwidth"
                    v-model="password"
                    placeholder="Password"
                    type="password"
                  ></b-input>
                </div>
              </div>
              <div class="field">
                <button class="button is-success" @click="submitLogin">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { http } from "../httpRequests";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async submitLogin(event) {
      event.preventDefault();
      http("login", "POST", {
        username: this.username,
        password: this.password
      })
        .then(result => {
          if (result.data.status != "failed") {
            this.$store.commit("setToken", result.data.token);
            this.$router.push("/arrivalDate");
          } else {
            this.$buefy.dialog.alert("Login failed!");
          }
        })
        .catch(() => this.$buefy.dialog.alert("Login failed!"));
    },
    goToLogin() {
      this.$router.push("login");
    },
    goToSignup() {
      this.$router.push("signup");
    }
  }
};
</script>
