(function () {
  var WaterFall = function (opt) {
    // 瀑布流
    // 1. 获取到整个画布的宽度
    // 2. 获取到是几个列几个间隔间隔是多少
    // 3、设置每个图片的宽度
    // 4 . 第一行的设置头皮值为0 ，后面行找到第一行的最低处填充，
    this.el = document.getElementsByClassName(opt.el)[0];
    this.oItems = this.el.getElementsByTagName("div");
    this.elWidth = this.el.offsetWidth; // 获取到画布的宽度
    this.column = opt.column;
    this.gap = opt.gap;
    this.itemsHeightArr = [];
    this.imgWidth = (this.elWidth - (this.column - 1 * this.gap)) / this.column;
    this.init();
  };
  //   通过原型链的方式挂载上去
  WaterFall.prototype.init = function () {
    this.render();
  };
  WaterFall.prototype.render = function () {
    let item = null;
    minIdx = -1;
    for (let i = 0; i < this.oItems.length; i++) {
      item = this.oItems[i];
      item.style.width = this.imgWidth + "px";
      //   第一行 设置top为0 ，left为当前索引的宽度加gap
      if (i < this.column) {
        item.style.top = "0px";
        item.style.left = i * (this.imgWidth + this.gap) + "px";
        // 放置 第一行的高度
        this.itemsHeightArr.push(item.offsetHeight);
      } else {
        minIdx = getMinIdx(this.itemsHeightArr);
        // 左边距 就是 索引项的左边距
        item.style.left = this.oItems[minIdx].offsetLeft + "px";
        // top 间距 就是 第一行的高度 + 间距
        item.style.top = this.itemsHeightArr[minIdx] + this.gap + "px";
        //    更新第一行最低处的高度
        this.itemsHeightArr[minIdx] += this.gap + item.offsetHeight;
      }
    }
    // 找到最小的索引
    function getMinIdx(arr) {
      return arr.indexOf(Math.min(...arr));
    }
  };

  window.WaterFall = WaterFall;
})();
