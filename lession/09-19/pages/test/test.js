// pages/test/test.js
Page({

  /**
   * Page initial data
   */
  data: {
    arr: ["html","css","javascript"],
    card: ["card1","card2","card3"],
    idx: 0,
    date: ""
  },

  change: function(e) {
    this.setData({
      idx: e.currentTarget.dataset.idx
    })
  },

  taptest: function() {
    console.log("tap");
  },

  selectDate: function(e) {
    // console.log(e);
    this.setData({
      date: e.detail.value
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