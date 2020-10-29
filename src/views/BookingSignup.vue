<template>
  <section>
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <b-field label="First name">
          <b-input v-model="firstName"></b-input>
        </b-field>
        <b-field label="Surname">
          <b-input v-model="surname"></b-input>
        </b-field>
        <b-field label="Email">
          <b-input v-model="email" type="email" value="email@" maxlength="40">
          </b-input>
        </b-field>

        <b-field label="Username">
          <b-input v-model="username" value="johndoe" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" v-model="password" password-reveal>
          </b-input>
        </b-field>

        <button class="button is-success" @click="signUp()">
          Sign up
        </button>
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
      password: "",
      email: "",
      firstName: "",
      surname: ""
    };
  },
  methods: {
    signUp() {
      http("addUser", "post", {
        username: this.username,
        password: this.password,
        email: this.email,
        firstName: this.firstName,
        surname: this.surname
      })
        .then(() => {
          this.$buefy.dialog.alert(
            "Account successfully created, please check your E-mail inbox for confirmation!"
          );
          this.$router.push("/");
        })
        .catch(() => this.$buefy.dialog.alert("Failure creating account!"));
    }
  }
};
</script>
