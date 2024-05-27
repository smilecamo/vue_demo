//
(function () {})();
(function () {
  // aaa
  let canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  cwidth = ctx.canvas.width;
  cHeight = ctx.canvas.height;
  class Clock {
    constructor() {
      this.r = cwidth / 2;
      this.hours = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
      this.T = null;
    }
    init() {
      this.draw();
      this.t = setInterval(this.draw.bind(this), 1000);
    }
    draw() {
      ctx.clearRect(0, 0, cwidth, cHeight); // 清除画布 ,因为每次绘制都会加深颜色
      const { hour, minutes, seconds } = fetTime();
      ctx.save(); // 通过将当前状态放入栈中，保存 canvas 全部状态的方法
      this.drawPancel();
      this.drawClockNums();
      this.drawHourIndicator(hour, minutes);
      this.drawMinuteIndicator(minutes);
      this.drawSecondIndicator(seconds);
      //   在前面的先绘制
      this.drawCentralPointer();
      ctx.restore(); // sava保存的 通过在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法。如果没有保存状态，此方法不做任何改变。
    }
    drawPancel() {
      ctx.beginPath();
      ctx.translate(this.r, this.r); // 对当前网格添加平移变换的方法
      ctx.fillStyle = "#fff";
      ctx.arc(0, 0, this.r - 20, 0, 2 * Math.PI, false); // 绘制圆弧路径的方法。
      ctx.fill();
    }
    drawClockNums() {
      //   使用fillText 指定颜色
      // ctx.font 需要加"40px serif";
      // CanvasRenderingContext2D.textAlign 是 Canvas 2D API 描述绘制文本时，文本的对齐方式的属性
      // CanvasRenderingContext2D.textBaseline 是 Canvas 2D API 描述绘制文本时，当前文本基线的属性
      ctx.fillStyle = "#000";
      ctx.font = "40px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      var radius, x, y;
      this.hours.forEach((item, index) => {
        radius = ((2 * Math.PI) / 12) * index;
        x = (this.r - 60) * Math.cos(radius);
        y = (this.r - 60) * Math.sin(radius);
        ctx.beginPath();
        ctx.fillText(item, x, y); //填充文本的方法
      });
    }
    drawCentralPointer() {
      ctx.beginPath();
      ctx.fillStyle = "#333";
      ctx.arc(0, 0, 13, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#666";
      ctx.arc(0, 0, 6, 0, 2 * Math.PI, false);
      ctx.fill();
    }
    drawHourIndicator(hour, minutes) {
      let radius = ((2 * Math.PI) / 12) * hour,
        mRadius = ((2 * Math.PI) / 12 / 60) * minutes; // 根据分针走的角度 相加
      ctx.save(); // 旋转前保存画布信息
      ctx.beginPath(); // 创建一个新的路径
      ctx.lineWidth = 5; // 设置线段厚度的属性
      ctx.lineCap = "round"; // 绘制每一条线段末端的属性
      ctx.rotate(radius + mRadius); // 旋转角度，需要在绘制前旋转
      ctx.moveTo(0, 0); // 起点坐标 将一个新的子路径的起始点移动到 (x，y) 坐标的方法
      ctx.lineTo(0, -this.r / 2); // 终点坐标Canvas 2D API 使用直线连接子路径的终点到 x，y 坐标的方法
      ctx.stroke(); // 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法
      ctx.restore(); // 重置 恢复保存的画布信息
    }
    drawMinuteIndicator(minutes) {
      let radius = ((2 * Math.PI) / 60) * minutes;
      ctx.save(); // 旋转前保存画布信息
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.rotate(radius); // 旋转角度，需要在绘制前旋转
      ctx.moveTo(0, 0); // 七点坐标
      ctx.lineTo(0, -this.r / 1.7); // 终点坐标
      ctx.stroke();
      ctx.restore(); // 重置 恢复保存的画布信息
    }
    drawSecondIndicator(seconds) {
      let radius = ((2 * Math.PI) / 60) * seconds;
      ctx.save(); // 保存
      ctx.beginPath();
      ctx.strokeStyle = "orange";
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.rotate(radius);
      ctx.moveTo(0, 0); // 七点坐标
      ctx.lineTo(0, -this.r / 1.5); // 终点坐标
      ctx.stroke();
      ctx.restore(); // 重置
    }
  }
  function fetTime() {
    let date = new Date();
    return {
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
  }
  window.Clock = Clock;
})();
