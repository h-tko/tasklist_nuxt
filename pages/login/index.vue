<template>
  <section class="container">
    <div class="columns">
      <div class="column">
        <input class="input" type="text" placeholder="email" v-model="email">
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <input class="input" type="password" placeholder="password" v-model="password">
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <button class="button is-primary" type="button" @click="login">Login</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    email: {
      get() {
        return this.$store.state.login.email;
      },
      set(value) {
        this.$store.commit("login/updateEmail", value);
      }
    },
    password: {
      get() {
        return this.$store.state.login.password;
      },
      set(value) {
        this.$store.commit("login/updatePassword", value);
      }
    }
  },
  methods: {
    login() {
      alert(this.$store.state.login.email);
    }
  }
};
</script>
