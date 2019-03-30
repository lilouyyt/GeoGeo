//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '站在巨人的肩膀上',
    userInfo: {},
    hasUserInfo: false,
    height:0,
     canIUse: wx.canIUse('button.open-type.getUserInfo'),
     hiden:false
  },


  onLoad: function () {
    //从全局加载app中查看是否存在用户信息，如果存在则直接获取
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    this.setData({
      height: app.globalData.screenHeight,
    })
    
  },

  //触发button open-type回调信息后触发getUserInfo回调函数
  getUserInfo: function (e) {
    console.log(e)
    //打印获得触发事件并记录用户信息
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showModal(e) {
    this.setData({
      hidden:true,
      modalName: e.currentTarget.dataset.target,
    })
  },
  hideModal(e) {
    console.log(e)
    //特别注意，这里使用了直接的数字165，特别注意
    if(e.detail.y<app.globalData.pxHeight-63){
      this.setData({
        modalName: null,
        hidden:false
      })
    }

  },

})
