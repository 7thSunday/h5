<template>
  <div class="home">
    <top-nav :imglist="imgarr"></top-nav>
    <intro :key="index" v-for="(item,index) in intro" :obj="item"></intro>
    <div class="studio-list">
      <h1>三大影棚</h1>
      <h1 class="en">THREE STUDIO</h1>
      <studio :key="index" v-for="(item,index) in studio" :obj="item"></studio>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopNav from '@/components/TopNav.vue'
import Intro from '@/components/IntroBox.vue'
import Studio from '@/components/Studio.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TopNav,
    Intro,
    Studio
  },
  data: function(){
    return {
      imgarr: [
        {src:require("../assets/img/roll01.jpg")},
        {src:require("../assets/img/roll01.jpg")},
        {src:require("../assets/img/roll01.jpg")}
      ],
      intro: [
        {
          title: "摄影",
          entitle: "PHOTOGRAPHY",
          msg: "精心定制摄影服务 打造视觉大片",
          link: "/photograph",
          frontcover: require("../assets/img/img_03.jpg"),
          contentlist: [
            {subtitle:"服装摄影",img:require("../assets/img/img_06.jpg")},
            {subtitle:"美妆摄影",img:require("../assets/img/img_08.jpg")},
            {subtitle:"皮具摄影",img:require("../assets/img/img_12.jpg")},
            {subtitle:"产品摄影",img:require("../assets/img/img_14.jpg")},
            {subtitle:"食品摄影",img:require("../assets/img/img_18.jpg")},
            {subtitle:"建筑摄影",img:require("../assets/img/img_20.jpg")},
          ]
        },
        {
          title: "影视",
          entitle: "TELEVISON",
          msg: "我们的专业不仅仅只是影视制作的流程及设备，更多的是策略和战术！",
          link: "/video",
          frontcover: require("../assets/img/img_25.jpg"),
          contentlist: [
            {subtitle:"广告片",img:require("../assets/img/img_29.jpg")},
            {subtitle:"宣传片",img:require("../assets/img/img_31.jpg")},
            {subtitle:"形象片",img:require("../assets/img/img_34.jpg")},
            {subtitle:"产品片",img:require("../assets/img/img_35.jpg")},
          ]
        },
        {
          title: "设计",
          entitle: "DESIGN",
          msg: "无设计，不品牌，金田设计开启您闭塞的视觉",
          link: "/design",
          frontcover: require("../assets/img/img_38.jpg"),
          contentlist: [
            {subtitle:"整案设计",img:require("../assets/img/img_42.jpg")},
            {subtitle:"详情页设计",img:require("../assets/img/img_45.jpg")},
            {subtitle:"海报设计",img:require("../assets/img/img_49.jpg")},
            {subtitle:"画册设计",img:require("../assets/img/img_51.jpg")},
          ]
        },
        {
          title: "修图",
          entitle: "DESIGN",
          msg: "手底真功夫",
          link: "/editing",
          frontcover: require("../assets/img/img_55.jpg"),
          contentlist: [
            {subtitle:"化妆品修图",img:require("../assets/img/img_58.jpg")},
            {subtitle:"人像修图",img:require("../assets/img/img_60.jpg")},
            {subtitle:"产品修图",img:require("../assets/img/img_65.jpg")},
            {subtitle:"服装修图",img:require("../assets/img/img_68.jpg")},
          ]
        },
        {
          title: "模特",
          entitle: "MODEL",
          msg: "专业模特  品质呈现",
          link: "/model",
          frontcover: require("../assets/img/img_72.jpg"),
          contentlist: [
            {subtitle:"女模",img:require("../assets/img/img_74.jpg")},
            {subtitle:"男模",img:require("../assets/img/img_77.jpg")},
          ]
        },
      ],
      studio: [
        {
          num: "01",
          title: "广州白云区M3创意园店",
          msg: "广州市白云区黄边时代玫瑰园旁M3创意园B123～B125",
          frontcover: require("../assets/img/img_81.jpg"),
          contentlist: [
            {src:require("../assets/img/img_83.jpg")},
            {src:require("../assets/img/img_85.jpg")},
            {src:require("../assets/img/img_90.jpg")},
            {src:require("../assets/img/img_91.jpg")},
          ]
        },
        {
          num: "02",
          title: "广州海珠区东方红创意园店",
          msg: "广州市海珠区工业大道中313号东方红创意园东8栋首层",
          frontcover: require("../assets/img/img_96.jpg"),
          contentlist: [
            {src:require("../assets/img/img_99.jpg")},
            {src:require("../assets/img/img_101.jpg")},
            {src:require("../assets/img/img_104.jpg")},
            {src:require("../assets/img/img_106.jpg")},
          ]
        },
        {
          num: "03",
          title: "深圳南山区创客小镇店",
          msg: "深圳市南山区留仙大道1201号大学城创客小镇17栋1楼101-103室",
          frontcover: require("../assets/img/img_110.jpg"),
          contentlist: [
            {src:require("../assets/img/img_113.jpg")},
            {src:require("../assets/img/img_116.jpg")},
            {src:require("../assets/img/img_120.jpg")},
            {src:require("../assets/img/img_121.jpg")},
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.home {
  background: #e5e5e5;
}
.studio-list {
  background: #fff;
  padding-top: 30px;
  h1 {
    font-size: 20px;
    font-weight: normal;
    color: #202020;
  }
  .en {
    font-size: 12px;
    color: #b0b0b0;
  }
}
</style>
