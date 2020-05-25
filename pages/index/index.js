Page({
  // 获取openId
   getOpenId(){
     wx.cloud.callFunction({
       // 云函数名称
       name: 'getOpenId',
       // 传给云函数的参数
       data: {
         title: "测试数据"
       },
       success: function (res) {
         console.log(res)
         console.log("openId:" + res.result.event.userInfo.openId)
       },
       fail: console.error
     })
   } ,

  //  突破20条数据
  getBreach(){
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getBreach',
      success: function (res) {
        console.log(res)
      },
      fail: console.error
    })
  }
})
