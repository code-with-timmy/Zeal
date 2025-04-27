import { createRouter, createWebHistory } from "vue-router";
import CreatePost from "./components/CreatePost.vue";
import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import MyProfile from "./components/pages/MyProfile.vue";
import SelectProfileImage from "./components/pages/SelectProfileImage.vue";
import ExpandPost from "./components/ExpandPost.vue";
import { auth } from "./firebase";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      meta: { requiresAuth: true },
    },
    {
      path: "/account/login",
      component: LoginPage,
    },
    {
      path: "/account/sign-up",
      component: SignupPage,
    },
    {
      path: "/blog/create-post",
      component: CreatePost,
      meta: { requiresAuth: true },
    },
    {
      path: "/avater",
      component: SelectProfileImage,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile/:name",
      component: MyProfile,
      name: "UserProfile",
      meta: { requiresAuth: true },
      props: true,
    },
    {
      path: "/:name/:postId",
      component: ExpandPost,
      name: "ExpandPost",
      meta: { requiresAuth: true },
      props: true,
    },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    return {
      path: "/account/login/",

      query: { redirect: to.fullPath },
    };
  }
});

export default router;
