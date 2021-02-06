/*
 * @Description: 简单的图形二维码
 * @Author: yaolin
 * @Date: 2021-02-06 16:31:39
 * @LastEditors: yaolin
 */

function produceCode(options) {
  let code = ''
  let randomArray = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * 62)
    code += randomArray[index]
  }
  options.txt = code

}

function randomNum(min, max){
  return Math.floor(Math.random()*(max-min)+min);
}

function randomColor(min, max){
  var r = randomNum(min, max);
  var g = randomNum(min, max);
  var b = randomNum(min, max);
  return "rgb("+r+","+g+","+b+")";
}

export function code(options) {
  produceCode(options)
  // let canvas = this.$refs.myCanvas
  let canvas = document.getElementById(options.id)

  // console.log(canvas); 
  canvas.width = options.width || 300
  canvas.height = options.height || 50
  
  let ctx = canvas.getContext('2d')
  ctx.textBaseline="middle"
  ctx.fillStyle=randomColor(60, 255)
  ctx.fillRect(0,0,canvas.width,canvas.height)

  // 向上移半个高度
  ctx.translate(0, options.height / 2)
  for(var i=0; i<options.txt.length; i++){
    var txt=options.txt.charAt(i);
    ctx.font='50px SimHei';
    ctx.fillStyle = randomColor(60, 180); /**随机生成字体颜色*/
    ctx.shadowOffsetY = randomNum(-3, 3); // 阴影垂直偏移距离的float类型的值
    ctx.shadowBlur = randomNum(-3, 3); // 阴影的模糊级数。
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)"; // 阴影颜色
    
    // 偏移量
    var x = options.width / (options.txt.length+1);
    // var y = options.height / 2;
    var deg = randomNum(-30, 30);
    
    /**设置旋转角度和坐标原点*/
    ctx.translate(x, 0);
    ctx.rotate(deg * Math.PI / 180);

    ctx.fillText(txt, 0, 0);
    /*恢复旋转角度*/
    ctx.rotate(-deg * Math.PI / 180);
    // ctx.translate(0, -y);
  }
  // 随机的线
  for (var i = 0; i < randomNum(1,4); i++) {
    ctx.strokeStyle = randomColor(40, 180);
    ctx.beginPath();
    ctx.moveTo(randomNum(0, options.width), randomNum(0, options.height));
    ctx.lineTo(randomNum(0, options.width), randomNum(0, options.height));
    ctx.stroke();
  }
  // 随机的点
  for (var i = 0; i < options.width / 6; i++) {
    ctx.fillStyle = randomColor(0, 255);
    ctx.beginPath();
    ctx.arc(randomNum(0, options.width), randomNum(0, options.height), 1, 0, 2 * Math.PI);
    ctx.fill();
  }
}


