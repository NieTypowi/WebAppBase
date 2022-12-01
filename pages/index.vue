<template>
    <div class="flex flex-col justify-center items-center min-h-screen">
        <h1 v-if="userData" class="text-4xl mb-5">{{userData}}</h1>
        <h1 v-else class="text-4xl mb-5"> Hello nuxt 3 base </h1>
        <div class="flex gap-5">
            <nuxt-link :to="'/login'" class="button-default" >Login</nuxt-link>
            <nuxt-link :to="'/register'" class="button-default" >Register</nuxt-link>
        </div>
    </div>
</template>

<script>
import { authStore } from '~/store/auth'

export default {
    setup(){
        definePageMeta({
            title: 'My home page'
        })
    },
    computed:{
        userData(){
            return authStore().getUser
        }
    }

}
</script>
