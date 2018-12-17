// pages/orderDeatail/orderDetail.js

const regeneratorRuntime = require('../../utils/runtime.js')
const fetch = require('../../utils/fetch.js').fetch


Page({

  /**
   * 页面的初始数据
   */
  data: {
    options:'',
    orderDetail:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      options: options
    })
    this.orderDetail()
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
  // 获取订单详情确认订单
  async orderDetail(){
    // /order/verify
    let that = this
    let orderDetailRes = await fetch('/order/verify','POST','',{
      "abbrId": that.data.options.abbrId,
      "userId": "5c10c3fe88532770d91d26b0",
      "price": that.data.options.price,
      "amount": that.data.options.amount
    })
    console.log(orderDetailRes)
    this.setData({
      orderDetail: orderDetailRes
    })
  },
  clickPostOrder(){
    let that = this
    wx.showLoading({
      title: '支付中',
    })
    setTimeout(()=>{
      fetch('/order', 'POST', '', {
        "abbrId": that.data.options.abbrId,
        "userId": "5c10c4ec88532770d91d26b1",
        "orderPrice": that.data.options.price,
        "amount": that.data.options.amount
      }).then((res) => {
        console.log(res)
        wx.showToast({
          title: '支付成功',
        })
      })
    },3000)
  }
})