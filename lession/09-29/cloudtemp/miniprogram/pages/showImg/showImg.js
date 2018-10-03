// miniprogram/pages/showImg/showImg.js
Page({

  /**
   * Page initial data
   */
  data: {
    imgList: [],
  },
  doLike(e) {
    var that = this;
    var db = wx.cloud.database();
    var event = e;
    db.collection("imgList").doc(e.currentTarget.dataset.xid).update({
      data: {
        like: !e.currentTarget.dataset.status
      },
      success() {
        var bool = !event.currentTarget.dataset.status;
        for(var $i in that.data.imgList) {
          if (that.data.imgList[$i]._id == event.currentTarget.dataset.xid) {
            var key = "imgList[" + $i + "].like";
            that.setData({
              [key]: bool
            })
          }
        }
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var db = wx.cloud.database();
    var that = this;
    db.collection("imgList").get({
      success: res => {
        // console.log(res);
        that.setData({
          imgList: res.data
        });
        // console.log(that.data.imgList)
      }
    })
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