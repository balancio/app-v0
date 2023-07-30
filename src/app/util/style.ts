const styleUtil = {
  accentColor: {
    change(color: string) {
      document.body.style.color = color;
      localStorage.setItem('accent', color)
    },
    refresh() {
      const color = localStorage.getItem('accent') ?? '#ccc'
      document.body.style.color = color;
    },
    get() {
      return localStorage.getItem('accent') ?? '#ccc'
    },
  }
}

export default styleUtil
