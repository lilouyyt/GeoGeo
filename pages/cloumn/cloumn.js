const app = getApp();
const data = require('./data.js')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    newscloumn:data.news,
    techcloumn:data.tech,
    hasUserInfo:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    cloumnname:1,
    TabCur:0,
    loadProgress: 0,
    searching:false,
    moto:null,
    scrollLeft:0,
    hidden:false
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: app.globalData.userInfo,
      })
    }
  },
  onShow(){
    this.setData({
      hidden:false
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  },
  search(e){
    console.log(e);
    this.setData({
      searching:true,
      moto:e.detail.value
    })
    this.loadProgress();
    //当点击确认搜索按钮后会由记载条
  },
  loadProgress() {
    console.log(this.data.loadProgress)
    this.setData({
      loadProgress: this.data.loadProgress + 3
    })
    if (this.data.loadProgress < 100) {
      setTimeout(() => {
        this.loadProgress();
      }, 100)
    } else {
      this.setData({
        loadProgress: 0,
        moto:'你搜索了'+this.data.moto
      })
    }
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target,
      hidden: true
    })
  },
  hideModal(e) {
    console.log(e)
    this.setData({
      modalName: null,
      hidden: false
    })
  },
  toggle(e){
    this.setData({
      cloumnname:(-1)*this.data.cloumnname
    })
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }

})