import { createRouter, createWebHistory } from "vue-router"
import AuthorizationView from "@/views/AuthorizationView.vue"
import RegistrationView from "@/views/RegistrationView.vue"
import NomeView from "@/views/HomeView.vue"

// import { useAuthStore } from "@/stores/AuthStore.vue"

 const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    routes: [
        {
            path: "/signin",
            name: "signIn",
            component: AuthorizationView,
        },
        {
            path: "/signup",
            name: "signup",
            component: RegistrationView,
        },
        {
            path: "/",
            name: "home",
            component: NomeView,
        },
    ],
})

// router.beforeEach(async (to) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ["/signin"]
//     const authRequired = !publicPages.includes(to.path)
//     const auth = useAuthStore()

//     if (authRequired && !auth.user) {
//         auth.returnUrl = to.fullPath
//         return "/signin"
//     }
// })

export default router
