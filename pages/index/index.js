//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navData: [
      { title: '计步中心', active: true, sign: 'preList' },
      { title: '排行榜', active: false, sign: 'ingList' },
      { title: '活动规则', active: false, sign: 'endList' }
    ],
    curNavIndex: 0, // 当前tab索引
  },
  

  /**
   * 顶部菜单切换
   */
  switchNavData: function (e) {
    var _this = this
    var dataset = e.currentTarget.dataset
    var curNavIndex = dataset.index
    var navData = _this.data.navData
    for (var i = 0, len = navData.length; i < len; ++i) {
      if (i == curNavIndex) {
        navData[i].active = true
      } else {
        navData[i].active = false
      }
    }
    wx.setNavigationBarTitle({
      title: navData[curNavIndex].title,
    })
    switch (curNavIndex) {
      case 0:
        // that.getClubDetail();
        break;
      case 1:
        // that.getClubAct(1);
        break;
      case 2:
        // that.getClubImg(1);
        break;
    }
    _this.setData({
      navData: navData,
      curNavIndex: curNavIndex
    });
  },

  onLoad: function () {
    
  }
})
