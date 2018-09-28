<template>
  <section class="container">
    <div>
      <input type="text" placeholder="email" :value="email" @input="updateEmail">
      <input type="password" placeholder="password" :value="password" @input="updatePassword">
      <button type="button" @click="login">Login</button>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    ...mapState({
      email: state => state.login.email,
      password: state => state.login.password
    })
  },
  methods: {
    updateEmail(e) {
      this.$store.commit("updateEmail", e.target.value);
    },
    updatePassword(e) {
      this.$store.commit("updatePassword", e.target.value);
    },
    login() {}
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
