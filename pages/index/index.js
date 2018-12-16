// pages/index/index.js

const regeneratorRuntime = require('../../utils/runtime.js')
const fetch = require('../../utils/fetch.js').fetch
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodity:"",
    imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782013&di=0fc4b5dbb2d7a9996997c8da97cb9852&imgtype=jpg&er=1&src=http%3A%2F%2Fimage13.m1905.cn%2Fuploadfile%2F2018%2F0426%2F20180426035739175560.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.apiCallback()
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
  async onSearch(event){
    let detail = event.detail
    console.log(detail)
    if(!detail){
      this.apiCallback()
      return false;
    }
    let getCommodityTitleRes = await this.getCommodityTitle(detail)

    this.setData({
      'commodity.list': getCommodityTitleRes.list
    })
    console.log(getCommodityTitleRes)
  },
  async apiCallback(){
    let getCommodityListRes = await this.getCommodityList()
    console.log(getCommodityListRes)
    this.setData({
      commodity:getCommodityListRes
    })
  },
  getCommodityList(){
    return fetch('/commodity/list','GET','',{
      status:1
    })
  },
  getCommodityTitle(title){
    return fetch('/commodity/title','GET','',{
      title:title
    })
  },
})