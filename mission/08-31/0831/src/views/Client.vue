<template>
    <div>
        <h1>这是客户页面</h1>
        <p @click="changeAge">click me to change the age {{this.$store.state.age}}</p>
        <router-link to="/client/one">111</router-link>
        <router-link to="/client/two">222</router-link>
        <router-view></router-view>
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

<style lang="scss" scoped>
// 过渡动画
// vue提供了transition标签
// 元素被transition标签包裹时，vue会给这个元素添加六个类名
    // 进场动画
    // v-enter:当vue检查到transition属性时，在动画开始时添加此类名，之后移除
    // v-enter-active:~~在动画开始时添加此类名，动画结束时移除
    // v-enter-to:~~动画开始时添加，动画结束时移除
    // 退场动画
    // enter --> leave
</style>

