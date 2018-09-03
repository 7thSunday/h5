<template>
    <div>
        <h1>这是客户页面</h1>
        <p @click="changeAge">click me to change the age {{this.$store.state.age}}</p>
    </div>
</template>

<script>
export default {
    name:"client",
    methods: {
        changeAge() {
            this.$store.commit("changeAge",{age:17});
        }
    }
}
</script>
