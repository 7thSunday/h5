// pages/test/test.js
Page({

  /**
   * Page initial data
   */
  data: {
    msg: "ayayayaya~",
    arr: ["html","css","javascript"],
    list: ["one","two","three"]
  },

  show: function() {
    wx.showToast({
      title: 'Oh Yeah!',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log("running onshow function");
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    console.log("running onhide function");
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
    return {
      title: "test",
      path: "/path",
      imageUrl: "../../images/test.png"
    }
  },
  onTabItemTap: function() {
    console.log("tap");
  }
})