<script setup>
import NavBar from "@/components/NavBar.vue"
import FormBlock from '@/components/FormBlock.vue'
</script>

<template>
    <div style = "min-height: 100vh;">
        <header>
            <slot name="header">
                <nav-bar></nav-bar>
            </slot>
        </header>
        <div class="container">
            <slot name="container">
                <form-block></form-block>
            </slot>
        </div>
        <footer class="footer">
            <slot name="footer"> </slot>
        </footer>
    </div>
</template>

<style>
.container {
    background-color: #a298d3;
    min-width: 100vw;
    margin: 0 auto;
    height: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 91vh;
}

.footer {
    background-color: #1a191f;
}
</style>
