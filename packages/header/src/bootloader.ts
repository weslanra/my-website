import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.scss";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
    },
    sets: {
      mdi,
    },
  },
});

createApp(App).use(vuetify).use(createPinia()).mount("#app");
