<template>
    <div class="studio-box">
        <div class="title-box">
            <h2>{{obj.num}}</h2>
            <p class="title">{{obj.title}}</p>
            <p class="msg">{{obj.msg}}</p>
        </div>
        <div class="front-cover"><img :src="obj.frontcover" alt="front"></div>
        <ul class="content">
            <li :key="index" v-for="(item,index) in obj.contentlist">
                <div class="img"><img :src="item.src" alt="image"></div>
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
.studio-box {
    background: #fff;
    padding: 20px;
    font-family: "微软雅黑";
    .title-box {
        h2 {
            color: #e7e7e7;
            font-size: 45px;
            line-height: 45px;
            margin-bottom: 6px;
        }
        .title {
            margin-bottom: 4px;
            font-size: 16px;
            line-height: 16px;
            color: #202020;
        }
        .msg {
            font-size: 12px;
            color: #666;
            margin-bottom: 10px;
        }
    }
    .front-cover {
        margin-bottom: 10px;
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
            margin-bottom: 10px;
            .img {
                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>

