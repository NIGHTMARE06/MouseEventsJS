var c = document.getElementById('canvas')
var canvas = c.getContext('2d')
var width = c.width
var height = c.height
var x,y
var click = false

drawBorders()

c.addEventListener('mousedown', (e) => {
  x = e.layerX
  y = e.layerY
  click = true
})

c.addEventListener('mouseup', (e) => {
  click = false
})

c.addEventListener('mousemove', (e) => {
  if(click) {
    drawLine('blue', x, y, e.layerX, e.layerY, 10)
    x = e.layerX
    y = e.layerY
  }
})

document.addEventListener('keyup', (e) => {
  if(e.keyCode == 17) {
    canvas.clearRect(0,0,width,height)
    drawBorders()
  }
})

function drawBorders() {
  drawLine('#f7533d',0,0,width,0,2)
  drawLine('#f7533d',width,0,width,height,2)
  drawLine('#f7533d',width,height,0,height,2)
  drawLine('#f7533d',0,height,0,0,2)
}

function drawLine(color,x,y,dx,dy,lw) {
  canvas.beginPath()
  canvas.strokeStyle = color
  canvas.lineWidth = lw
  canvas.moveTo(x,y)
  canvas.lineTo(dx,dy)
  canvas.stroke()
  canvas.closePath()
}
