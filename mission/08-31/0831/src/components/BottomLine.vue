<template>
    <div class="bottom-line">
        <div class="menu"><img src="../assets/icon/btnav1.jpg" alt="menu"></div>
        <div class="qq"><img src="../assets/icon/btnav2.jpg" alt="qq"></div>
        <div class="logo"><img src="../assets/icon/logo.png" alt="logo"></div>
        <div class="wechat"><img src="../assets/icon/btnav3.jpg" alt="wechat"></div>
        <div class="ali"><img src="../assets/icon/btnav4.jpg" alt="ali"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.bottom-line {
    height: 48px;
    width: 100%;
    background: #f9f9f9;
    display: flex;
    justify-content: space-around;
    div {
        height: 100%;
        width: 18%;
        img {
            height: 100%;
            padding-top: 9px;
            padding-bottom: 10px;
        }
    }
    .logo {
        background: #f9f9f9;
        border-radius: 35px;
        margin-top: -20px;
        width: 70px;
        height: 70px;
    }
}
</style>
