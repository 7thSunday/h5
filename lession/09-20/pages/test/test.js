// pages/test/test.js
import allUrl from "../../utils/config.js";
Page({

  /**
   * Page initial data
   */
  data: {
    isPlaying: false,
    player: {},
    markers: [{
      iconPath: "../../media/location.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30
    }],
    // polyline: [{
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color: "#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    // controls: [{
    //   id: 1,
    //   iconPath: '/resources/location.png',
    //   position: {
    //     left: 0,
    //     top: 300 - 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },

  playAndPause: function() {
    if(this.data.isPlaying) {
      this.data.player.pause();
    }else {
      this.data.player.play();
    }
    this.setData({
      isPlaying: !this.data.isPlaying
    })
    // innerAudioContext.onPlay(() => {
    //   console.log('开始播放')
    // })
    // innerAudioContext.onError((res) => {
    //   console.log(res.errMsg)
    //   console.log(res.errCode)
    // })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // console.log(options);
    this.setData({
      player: wx.createInnerAudioContext()
    })
    // this.data.player.src = 'https://m10.music.126.net/20180920115905/8255b9b4b4cb4cb0fe4a33e7eac6dc9a/ymusic/e465/a7a9/8ce9/2983c8083e71b8944c82bb9af3037f5e.mp3';
    this.data.player.src = "media/凋叶棕 - 今やファインダァは彼方から.mp3";
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    console.log(allUrl);
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})