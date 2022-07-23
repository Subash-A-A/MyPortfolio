const coolGuy = document.querySelector(".cool__guy__img")
const weapon = document.querySelector(".cool__guy__weapon")
const test = document.querySelector(".target")
const audio = document.getElementById("audio")
const about__page = document.querySelector(".about__page")

const canvas = document.querySelector("#about__canvas")
const attackPoint = document.getElementById("attack__point")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const mousePos = {
  mouseX: 0,
  mouseY: 0,
}

const gunPos = {
  x: 0,
  y: 0,
}

let weaponRotation = 0

const scrollOffset = {
  x: 0,
  y: 0,
}

window.addEventListener("mousemove", (event) => {
  scrollOffset.x = window.pageXOffset
  scrollOffset.y = window.pageYOffset

  mousePos.mouseX = event.clientX - window.innerWidth / 2
  mousePos.mouseY = event.clientY - window.innerHeight / 2
  var rect = attackPoint.getBoundingClientRect()
  gunPos.x = rect.x
  gunPos.y = rect.y
})

about__page.addEventListener(
  "click",
  function (e) {
    draw(canvas, e)
    audio.currentTime = 0 // rewind the clip to beginning
    audio.play()
    about__page.classList.add("shake")
    setTimeout(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      about__page.classList.remove("shake")
    }, 100)
  },
  false
)

function clamp(n, min, max) {
  if (n >= max) {
    return max
  } else if (n <= min) {
    return min
  } else {
    return n
  }
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect()
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  }
}

function getGunPos(canvas) {
  var rect = canvas.getBoundingClientRect()
  return {
    x: gunPos.x - rect.left,
    y: gunPos.y - rect.top,
  }
}

function draw(canvas, evt) {
  var pos = getMousePos(canvas, evt)
  ctx.strokeStyle = "red"
  ctx.lineWidth = 7
  ctx.beginPath()
  ctx.moveTo(pos.x, pos.y)
  ctx.lineTo(gunPos.x, gunPos.y)
  ctx.stroke()
}

function tick() {
  // Rad2Deg const = (180 / Math.PI)
  weaponRotation =
    Math.atan2(mousePos.mouseY - 70, Math.abs(mousePos.mouseX)) *
    (180 / Math.PI)
  weapon.style.transform = `rotate(${weaponRotation}deg)`

  if (mousePos.mouseX < 0) {
    coolGuy.classList.add("flip")
  } else {
    coolGuy.classList.remove("flip")
  }
  window.requestAnimationFrame(tick)
}

tick()
