//index.js
//获取应用实例
//const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  /*组件跳转 index 跳转   九宫格 动态壁纸 */
  handleTap: function (e) {
    //1:获取自定义属性值
    var id = e.target.dataset.id;
    // console.log(e)
    var page = "/pages/dongtaibz/dongtaibz"
    //2:判断跳转美食组件
    if (id == 1) {
      page = "/pages/dongtaibz/dongtaibz";
    }else if(id==2){
      page = "/pages/zhuanji/zhuanji";
    }
    wx.navigateTo({ url: page});
  },

  data: {
    list:[
      // { id: 1, img_url: "http://127.0.0.1:3000/img/lunbo/lunbo1.jpg" },
      // { id: 2, img_url: "http://127.0.0.1:3000/img/lunbo/lunbo2.jpg" },
      // { id: 3, img_url: "http://127.0.0.1:3000/img/lunbo/lunbo3.jpg" },
      // { id: 4, img_url: "http://127.0.0.1:3000/img/lunbo/lunbo4.jpg" }
    ],
    navList:[
      // { id: 1, img_url:"http://127.0.0.1:3000/img/jiugongg/jgg1.png",title:"动态壁纸"},
      // { id: 2, img_url:"http://127.0.0.1:3000/img/jiugongg/jgg2.png",title:"专辑"},
      // { id: 3, img_url:"http://127.0.0.1:3000/img/jiugongg/jgg3.png",title:"头像"},
      // { id: 4, img_url:"http://127.0.0.1:3000/img/jiugongg/jgg4.png",title:"表情"},
      // { id: 5, img_url:"http://127.0.0.1:3000/img/jiugongg/jgg5.png",title:"聊天背景"},
      // { id: 6, img_url:"http://127.0.0.1:3000/img/jiugongg/jgg6.png",title:"排行榜"},
      // { id: 7, img_url:"http://127.0.0.1:3000/img/jiugongg/jgg7.png",title:"天生一对"},
      // { id: 8, img_url:"http://127.0.0.1:3000/img/jiugongg/jgg8.png",title:"套图"},
      // { id: 9, img_url:"http://127.0.0.1:3000/img/jiugongg/jgg9.png",title:"限免专区"},
      // { id: 10, img_url:"http://127.0.0.1:3000/img/jiugongg/jgg10.png",title:"途游捕鱼"}
    ],
    enterList:[
      { id: 1, img_url:"http://127.0.0.1:3000/img/za/remen2.jpg",title:"支付宝福字"},
      { id: 2, img_url:"http://127.0.0.1:3000/img/za/remen1.jpg",title:"小可爱 童心可爱手绘治愈可爱可爱"}
    ],

    // shuxianList:[
    //   { id: 1, img_url: "http://127.0.0.1:3000/img/za/shuxian.png",title:"圈子动态"}
    // ]
    bizhiList:[
      { id: 1, img_url: "http://127.0.0.1:3000/img/bizhi/1.jpg"},
      { id: 2, img_url: "http://127.0.0.1:3000/img/bizhi/2.jpg"},
      { id: 3, img_url: "http://127.0.0.1:3000/img/bizhi/3.jpg"},
      { id: 4, img_url: "http://127.0.0.1:3000/img/bizhi/4.jpg"},
      { id: 5, img_url: "http://127.0.0.1:3000/img/bizhi/5.jpg"},
      { id: 6, img_url: "http://127.0.0.1:3000/img/bizhi/6.jpg"}
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*轮播图 */
    var url = "http://127.0.0.1:3000/lunbo";
    wx.request({
      url:url,
      method:"GET",
      success:(res)=>{
        this.setData({
          list: res.data
        })
        //console.log(this.list);
      },
      fail:(res)=>{
        console.log("fail:");
        console.log(res);
      }
    })
    /*九宫格 */
    var url = "http://127.0.0.1:3000/jiugongge";
    wx.request({
      url: url,
      method: "GET",
      success: (res) => {
        this.setData({
          navList: res.data
        })
      },
      fail: (res) => {
        console.log("fail:");
        console.log(res);
      }
    })
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
    
  }
})