export const state = () => ({
  email: "",
  password: ""
})

export const mutations = {
  change(state, email, password) {
    state.email = email
    state.password = password
  }
}
