import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    default: "dark",
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined
    },
    themes: {
      dark: {
        primary: "#FFF",
        secondary: "#FFF",
        accent: "#FF4081",
        error: "#FF5252",
        info: "#FFF",
        success: "#4CAF50",
        warning: "#FB8C00"
      }
    }
  }
});
