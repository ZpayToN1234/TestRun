import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify, {
    theme: {
        primary: "#dd5928",
        secondary: "#6e6f71",
        accent: "#9c27b0",
        error: "yellow",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50"
      }
})

export default new Vuetify()
