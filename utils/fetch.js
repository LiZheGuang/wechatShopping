// 当前host
const url_host = 'http://192.168.0.112:3000' 
// 192.168.0.112: 3000 / order / list ? userId = 5c10c4ec88532770d91d26b1

// 调用fetch方法，然后依次链式传入
// url, method, header, data, loading(是否显示loading) 

function fetch(url, method, header, data, loading) {
  // 判断给服务端传递undefined的问题
  let fetchP = new Promise(function (resolve, reject) {
    wx.request({
      url: url_host + url,
      method: method ? method : 'GET',
      header: {
        'content-type': 'application/json', // 默认值 
        'version': 'currentVersion',
        'pagePath': 'currentPagePath',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMTg4MTA3OTgyMzEiLCJwYXNzd29yZCI6IjEyMyIsImlhdCI6MTU0NDYwMjg2MCwiZXhwIjozMDg5MjA5MzIwfQ.aEdGqf865QqjiiROEpY1juPqW8RfgxGdc8aW6NTPsSU'
      },
      data: data,
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        showError()
        reject(err)
      },
      complete: function (comp) {
        if (loading) {
          wx.hideLoading()
        }
      }
    })
  })
  return fetchP
}



module.exports = {
  fetch
}