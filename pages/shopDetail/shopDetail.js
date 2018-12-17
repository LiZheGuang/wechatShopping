// pages/shopDetail/shopDetail.js
const regeneratorRuntime = require('../../utils/runtime.js')
const fetch = require('../../utils/fetch.js').fetch

Page({

  /**
   * 页面的初始数据
   */
  data: {
    options:"",
    shopDeatil:"",
    activeNames: ['1']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      options:options
    })
    this.getCommodityDeatail(options.goodsId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  async getCommodityDeatail(id){
    
    let shopDeatil = await fetch('/commodity/detail','GET','',{
      id: id
    })
    this.setData({
      shopDeatil: shopDeatil
    })
  },
  clickPostPushCarts(){
    let abbrId = this.data.shopDeatil.data.abbrId[0]._id
    this.postPushCarts(abbrId, 5,'5c10c4ec88532770d91d26b1')
  },
  // 加入购物车
  postPushCarts(abbrId, amount, userId){
    fetch('/commodity/shoppingCart','POST','',{
      abbrId: abbrId,
      amount: amount,
      userId: userId
    }).then((res)=>{
      if(res.code === 200){
        wx.showToast({
          title: res.data,
        })
      }
    })
  },
  clickCarts(){
    wx.navigateTo({
      url: '/pages/shopCarts/shopCarts',
    })
  }
})