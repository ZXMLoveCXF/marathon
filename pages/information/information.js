// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: '/resources/images/',
    aSex: ['男', '女'],
    nSex: '',
    aRegion: [],
    aCloth: ['S', 'M', 'L', 'XL', 'XXL'],
    nCloth: '',
    aPants: ['S', 'M', 'L', 'XL', 'XXL'],
    nPants: '',
    aShoes: ['35', '40', '45', '50', '55'],
    nShoes: '',
    options: ['zipCode', 'username', 'phone', 'detailAdd', 'cloth', 'region']
  },
  /**
   * 领取
   */
  accept(e) {
    console.log(e.detail.formId);
    console.log(e.detail.value);
    var data = e.detail.value;
    var username = data.username,
      idCard = data.idCard,
      phone = data.phone,
      detailAdd = data.detailAdd,
      zipCode = data.zipCode,
      VIP = data.VIP,
      VIPPhone = data.VIPPhone,
      VIPPhone = data.VIPPhone1;
    console.log(data.zipCode == '');
    console.log(VIPPhone);
  },
  /**
   * 鞋子选择器
   */
  shoesPicker(e) {
    console.log('shoesPicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      nShoes: e.detail.value
    })
  },
  /**
   * 裤子选择器
   */
  pantsPicker(e) {
    console.log('pantsPicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      nPants: e.detail.value
    })
  },
  /**
   * 衣服选择器
   */
  clothPicker(e) {
    console.log('clothPicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      nCloth: e.detail.value
    })
  },
  /**
   * 三级联动
   */
  regionPicker: function(e) {
    console.log('regionPicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      aRegion: e.detail.value
    })
  },
  /**
   * 性别选择器
   */
  sexPicker: function(e) {
    console.log('sexPicker发送选择改变，携带值为', e.detail.value);
    this.setData({
      nSex: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(!this.data.aRegion)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})