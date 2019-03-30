//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 1,
    scrollLeft: 0,
    hidden:false
  },
  onLoad(){
    if(app.globalData.userInfo){
      this.setData({
        hasUserInfo: true,
        userInfo: app.globalData.userInfo,
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target,
      hidden:true
    })
  },
  hideModal(e) {
    console.log(e)
    //判断Modbal类型
    // if(e.currentTarget.dataset.target=="viewModal"){
    //   this.setData({
    //     modalName: null,
    //     hidden:false
    //   })
    // }else if((e.detail.y < app.globalData.pxHeight - 165)) {
    //   this.setData({
    //     modalName: null,
    //     hidden:false
    //   })
    // }
    this.setData({
        modalName: null,
        hidden:false
      })
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
})

