export default {//Login Action
  login(context) {
    context.commit('setAuth', { isAuth: true });
  },//LogOut action
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  }
};
