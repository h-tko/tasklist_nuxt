export const state = () => ({
  email: "",
  password: "",
  authenticated: false
})

export const mutations = {
  updateEmail(state, email) {
    state.email = email
  },
  updatePassword(state, password) {
    state.password = password
  },
  isAuthenticated(state) {
    state.authenticated = true
  }
}
