import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import TheHeader from "./components/TheHeader.vue";
import TheNavigation from "./components/TheNavigation.vue";
import router from "./router";
import store from "./store";
import { authChange } from "./firebase";
import { auth } from "./firebase";

let app;

authChange(auth, (user) => {
  if (user) {
    store.dispatch("setUser", user);

    store.dispatch("fetchAllPosts");
    store.dispatch("fetchProfile");
  }

  if (!app) {
    app = createApp(App);
    app.use(router);
    app.use(store);
    app.component("the-header", TheHeader);
    app.component("the-navigation", TheNavigation);

    app.mount("#app");
  }
});
