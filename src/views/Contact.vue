<template>
    <ul class="list-links">
        <li class="links"><router-link :to="'/login'">LOGIN</router-link></li>
        <li style="display: inline"><router-link :to="'/'">HOME</router-link></li>
    </ul>
    <br />
    <h1>Contact</h1>
</template>

<script>
export default {
    name: "Contact"
}
</script>
