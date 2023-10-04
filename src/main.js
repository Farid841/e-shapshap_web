import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/css/main.css';


// Créez vos composants et importez-les ici
import LandigPage from "./views/LandingPage.vue";
import LoginPage from './views/LoginPage.vue';
import SignUpPage from "./views/SignUpPage.vue";
import ForgotPasswordPage from "./views/ForgotPasswordPage.vue";
import AdminPage from "./views/AdminPage.vue";
import PageNotFound from "./views/PageNotFound.vue";
import LegalMentions from '@/views/LegalMentionsPage.vue'
import AboutUs from '@/views/AboutUsPage.vue'
import Legal from '@/views/legalPage.vue'

const routes = [
    { path: "/", component: LandigPage },
    { path: '/login', component: LoginPage },
    { path: "/signup", component: SignUpPage },
    { path: "/forgot-password", component: ForgotPasswordPage },
    { path: "/admin", component: AdminPage },
    { path: "/legal-mentions", component: LegalMentions },
    { path: "/legal", component: Legal },
    { path: "/about-us", component: AboutUs },
    { path: "/:catchAll(.*)", component: PageNotFound },
    
  ];
  
const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');