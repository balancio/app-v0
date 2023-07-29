const tokenUtil = {
  tokenKey: 'auth-token',

  storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token)
  },

  loadToken() {
    return localStorage.getItem(this.tokenKey)
  },

  deleteToken() {
    localStorage.removeItem(this.tokenKey)
  },
}

export default tokenUtil
