<template>
    <div class="flex flex-col justify-center items-center min-h-screen">
        <div class="p-5 bg-white">
            <h1 class="text-4xl mb-5"> Register </h1>
            <form method="post" @submit.prevent="register" class="w-full max-w-md">
                <input type="text" name="username" id="username" placeholder="User name" class="input-field">
                <input type="text" name="password" id="password" placeholder="Password" class="input-field">
                <button class="button-default"> Register </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        register(){
            console.log('register form sent');
        }
    }
}
</script>

<style scoped>
.input-field{
    @apply w-full mb-5 text-2xl px-4 py-2 rounded-xl bg-white border border-teal-400 focus:border-teal-600 transition outline-none focus:outline-none
}
</style>