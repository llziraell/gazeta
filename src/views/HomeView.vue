<script>
import axios from "axios"


export default {
    data() {
        return {
            email: "",
            password: "",
            name: localStorage.getItem('name')
        }
    },
    methods: {
        // async login() {
        //     const loginData = {
        //         email: this.email,
        //         password: this.password,
        //     }

        //     try {
        //         const response = await fetch(
        //             "http://localhost:8085/auth/signin",
        //             {
        //                 method: "POST",
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                 },
        //                 body: JSON.stringify(loginData),
        //             }
        //         )

        //         if (!response.ok) {
        //             throw new Error("Authentication failed")
        //         }

        //         const responseData = await response.json()
        //         const jwtToken = responseData.accessToken

        //         // Теперь у вас есть JWT токен, который вы можете использовать для дальнейших запросов
        //         console.log("JWT Token:", jwtToken)

        //         // Здесь вы можете сохранить токен в localStorage или в состояние Vue компонента
        //         // localStorage.setItem('jwtToken', jwtToken);
        //         // или
        //         // this.$store.commit('setJwtToken', jwtToken);
        //     } catch (error) {
        //         console.error("Authentication error:", error)
        //     }
        // },
    },
}
</script>

<template>
    <div>
        <h1>Снова здарвствуйте, {{ this.name  }}</h1>
    </div>
</template>
