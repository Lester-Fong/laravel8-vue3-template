require("./bootstrap");

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import App from "./App.vue";
import routes from "./router";

console.log(routes);

const app = createApp(App);

const router = new createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

app.use(router).mount("#app");
