<template>
    <div class="top-nav">
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div :key="index" class="swiper-slide" v-for="(item,index) in imglist">
                    <img :src="item.src" alt="img">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 导航 -->
        <ul class="nav-bar">
            <li>
                <router-link to="/photograph">
                    <div class="img"><img src="../assets/icon/nav-cam.png" alt="摄影"></div>
                    <span>摄影</span>
                </router-link>
            </li>
            <li>
                <router-link to="/video">
                    <div class="img"><img src="../assets/icon/nav-video.png" alt="影视"></div>
                    <span>影视</span>
                </router-link>
            </li>
            <li>
                <router-link to="/design">
                    <div class="img"><img src="../assets/icon/nav-design.png" alt="设计"></div>
                    <span>设计</span>
                </router-link>
            </li>
            <li>
                <router-link to="/editing">
                    <div class="img"><img src="../assets/icon/nav-edit.png" alt="修图"></div>
                    <span>修图</span>
                </router-link>
            </li>
            <li>
                <router-link to="/model">
                    <div class="img"><img src="../assets/icon/nav-model.png" alt="模特"></div>
                    <span>模特</span>
                </router-link>
            </li>
            <li>
                <router-link to="/client">
                    <div class="img"><img src="../assets/icon/nav-client.png" alt="客户"></div>
                    <span>客户</span>
                </router-link>
            </li>
            <li>
                <router-link to="/vip">
                    <div class="img"><img src="../assets/icon/nav-vip.png" alt="会员"></div>
                    <span>会员</span>
                </router-link>
            </li>
            <li>
                <router-link to="/about/Aya">
                    <div class="img"><img src="../assets/icon/nav-about.png" alt="关于"></div>
                    <span>关于</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name:"topnav",
    props:["imglist"],
    data: function(){
        return {}
    },
    mounted: function(){
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
}
</script>

<style lang="scss">
.top-nav {
    background: #fff;
    padding-bottom: 2px;
    margin-bottom: 20px;
    width: 100%;
}
.swiper-pagination .swiper-pagination-bullet-active {
    background: #fff;
}
.swiper-slide {
    position: relative;
    padding-top: 50%;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
}
.nav-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 4% 0;
    font-size: 15px;;
    li {
        width: 25%;
        margin: 2% 0;
        .img {
            margin: 0 auto;
            height: 32px; 
            width: 32px;
            overflow: hidden;
            position: relative;
            margin-bottom: 8%;
            img {
                width: 100%;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
            }
        }
        span {
            color: #454545;
        }
        &:nth-child(5),
        &:nth-last-child(2) {
            .img img {
                width: auto;
                height: 100%;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
}
</style>
