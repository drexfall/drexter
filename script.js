var canvas, ctx, imgElem;
var canDrag = false;

var pos={x:0,y:0}

window.onload = function() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  pos.x = canvas.width/2;
  pos.y = canvas.height/2;
  
};

function _insert_image() {
    imgElem = document.querySelector("#srcImg")
  _MouseEvents();

  setInterval(function() {
    _ResetCanvas();
    _DrawImage();
  }, 1000/30);
}
function _ResetCanvas() {
  ctx.fillStyle = getComputedStyle(canvas).backgroundColor;
  ctx.fillRect(0,0, canvas.width, canvas.height);
}
function _MouseEvents() {
  canvas.addEventListener("mousedown",function (e){
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    if (mouseX >= (pos.x - imgElem.width/2) &&
        mouseX <= (pos.x + imgElem.width/2) &&
        mouseY >= (pos.y - imgElem.height/2) &&
        mouseY <= (pos.y + imgElem.height/2)) {
      canDrag = true;
    }
  });
  canvas.addEventListener("mousemove",function (e){

    if (canDrag) {
      pos.x = e.pageX - this.offsetLeft;
      pos.y = e.pageY - this.offsetTop;
    }
  });
  canvas.addEventListener("mouseup",function (e){
    canDrag = false;
  });
}
function _DrawImage() {
  ctx.drawImage(imgElem, pos.x-(imgElem.width/2), pos.y-(imgElem.height/2));
}