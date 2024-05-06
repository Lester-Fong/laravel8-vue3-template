import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import App from "./App.vue";
import routes from "./router";
require("./bootstrap");

// creating the app and reding the App.vue file
const app = createApp(App);

// creating the router and reading the routes file
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// using the router
app.use(router);

// Vue3's way of mounting the app to the div with id app which is in the Welcome.blade.php file
app.mount("#app");
