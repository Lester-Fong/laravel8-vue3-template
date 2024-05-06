const HomePage = () =>
    import(/* webpackChunkName: "js/1001" */ "./components/homepage.vue");
const AboutPage = () =>
    import(/* webpackChunkName: "js/1002" */ "./components/about.vue");

const routes = [
    {
        path: "/",
        name: "IndexPage",
        component: HomePage,
    },
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage,
    },
];

export default routes;
