// pages/shopCarts/shopCarts.js
const regeneratorRuntime = require('../../utils/runtime.js')
const fetch = require('../../utils/fetch.js').fetch

Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShoppingList()
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
  async getShoppingList(){
    let shoppingListRes = await fetch('/commodity/shopping/List','GET','',{
      userId:"5c10c4ec88532770d91d26b1"
    })
    this.setData({
      carts: shoppingListRes
    })
    console.log(shoppingListRes)
  },
  clickOrder(event){
    let that = this
    const index = event.currentTarget.dataset.index

    let item = this.data.carts.cartsList[index]
    wx.navigateTo({
      url: `/pages/orderDeatail/orderDetail?abbrId=${item.abbrId._id}&price=${item.price}&amount=${item.amount}`,
    })
  }
})