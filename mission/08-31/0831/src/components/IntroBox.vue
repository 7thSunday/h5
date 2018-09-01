<template>
    <div class="intro-box">
        <div class="title-box">
            <router-link :to="obj.link">
                <div class="cntitle">
                    {{obj.title}}
                    <div class="img"><img src="../assets/icon/arrow.png" alt="arrow"></div>
                </div>
                <span class="entitle">{{obj.entitle}}</span>
            </router-link>
            <div class="msg">{{obj.msg}}</div>
        </div>
        <div class="front-cover"><img :src="obj.frontcover" alt="front"></div>
        <ul class="content">
            <li :key="index" v-for="(item,index) in obj.contentlist">
                <div class="img"><img :src="item.img" alt="image"></div>
                <p class="sub">{{item.subtitle}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "introbox",
    props: ["obj"],
}
</script>

<style lang="scss">
.intro-box {
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    .title-box {
        font-size: 0;
        margin-bottom: 20px;
        .cntitle {
            line-height: 24px;
            font-size: 24px;
            color: #333;
            text-align: center;
            position: relative;
            .img {
                width: 16px;
                height: 16px;
                margin-left: 5px;
                position: absolute;
                left: 58%;
                top: 0;
                img {
                    width: 100%;
                }
            }
        }
        .entitle {
            line-height: 12px;
            font-size: 12px;
            color: #999;
        }
        .msg {
            margin-top: 8px;
            font-size: 14px;
            line-height: 14px;
            color: #666;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .front-cover {
        margin-bottom: 16px;
        img {
            width: 100%;
        }
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
            width: 48%;
            color: #454545;
            font-size: 15px;
            .img {
                img {
                    width: 100%;
                }
            }
            .sub {
                margin-top: 6px;
                margin-bottom: 16px;
            }
        }
    }
}
</style>

