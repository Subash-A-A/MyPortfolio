import "./style.css"
import * as THREE from "three"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
// import * as dat from "dat.gui"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import gsap from "gsap"

// Debug
// const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl")

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.IcosahedronGeometry(0.55, 0)
const cubeGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.7, 1, 1, 1)
// const geometry1 = new THREE.IcosahedronGeometry(0.69, 0);

const rotatePhone = document.getElementById("rotate__phone")
const sectionContainer = document.querySelector(".section__container")

if (window.innerWidth < window.innerHeight) {
  rotatePhone.style.display = "block"
  sectionContainer.style.display = "none"
} else {
  rotatePhone.style.display = "none"
}

// Materials

const material = new THREE.MeshBasicMaterial()
material.wireframe = true
material.wireframeLinewidth = 6
material.color = new THREE.Color(0x3490de)

const material1 = new THREE.MeshBasicMaterial()
material1.wireframe = true
// material1.wireframeLinewidth = 6;
// material1.wireframe = true;
material1.color = new THREE.Color(0xff2e63)

// const material1 = new THREE.MeshStandardMaterial();
// material1.roughness = 0.5;
// material.metalness = 0.5;
// material1.color = new THREE.Color(0x050505);

// Mesh
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)
const cube = new THREE.Mesh(cubeGeometry, material1)
scene.add(cube)

// const sphere1 = new THREE.Mesh(geometry1, material1);
// scene.add(sphere1);

// Timeline

const timeline = gsap.timeline()

// if (window.innerWidth <= 1085) {
//   distX = 1.0;
//   distY = 0.5;
// }
let distX = 0
let distY = 0
if (window.innerWidth >= 945 && window.innerWidth >= window.innerHeight) {
  distX = 1.353
  distY = 0
} else {
  distX = 0.7 * (window.innerWidth / window.innerHeight)
  distY = 0.55
  cube.scale.set(0.7, 0.7, 0.7)
  sphere.scale.set(0.7, 0.7, 0.7)
}

timeline.paused(true)

window.addEventListener("load", () => {
  loader.style.display = "none"
  timeline.play(true)
})

timeline
  .fromTo(
    ".navbar",
    { opacity: 0, y: "-100%" },
    { opacity: 1, y: "0%", duration: 1, ease: "power" }
  )
  .add("start")
  .fromTo(
    sphere.position,
    { z: 3, x: 0 },
    { z: 0, x: 0, duration: 1, ease: "power" },
    "start"
  )
  .fromTo(
    cube.position,
    { z: 3, x: 0 },
    { z: 0, x: 0, duration: 1, ease: "power" },
    "start"
  )
  .add("seperateGeometries")
  .to(
    sphere.position,
    {
      x: distX,
      y: -distY,
      duration: 1.3,
    },
    "seperateGeometries"
  )
  .to(
    cube.position,
    { x: -distX, y: distY, duration: 1.3 },
    "seperateGeometries"
  )
  .fromTo(
    ".intro",
    { opacity: 0, y: "20%" },
    { opacity: 1, y: "0%", duration: 2 }
  )

// Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1);
// pointLight.position.x = 2;
// pointLight.position.y = 3;
// pointLight.position.z = 4;
// scene.add(pointLight);

const light = new THREE.AmbientLight(0xffffff, 6) // soft white light
light.position.x = 2
light.position.y = 3
light.position.z = 4
scene.add(light)

// const pointLight2 = new THREE.PointLight(0x00ffff, 3);
// pointLight2.position.set(-5.49, -4.84, 1.23);
// scene.add(pointLight2);
// gui.add(pointLight2.position, "x").min(-10).max(10).step(0.01);
// gui.add(pointLight2.position, "y").min(-10).max(10).step(0.01);
// gui.add(pointLight2.position, "z").min(-10).max(10).step(0.01);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

window.addEventListener("resize", () => {
  // Update sizes
  location.reload()
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
// sphere.position.x = -1.5;
// sphere.position.y = 0;
// sphere.position.z = 0;

// const scrollAnimate = () => {
//   sphere.position.y = window.scrollY * 0.001;
//   sphere.position.z = window.scrollY * 0.003;
//   sphere.position.x = window.scrollY * 0.002;

//   // sphere1.position.y = window.scrollY * 0.001;
//   // sphere1.position.x = window.scrollY * 0.002;
//   // sphere1.position.z = window.scrollY * 0.003;

//   if (scrollY > 100) {
//     console.log(scrollY);
//   }
// };

document.addEventListener("mousemove", onDocumentMouseMove)
// window.addEventListener("scroll", scrollAnimate);

let mouseX = 0
let mouseY = 0
let targetX = 0
let targetY = 0

const windowX = window.innerWidth / 2
const windowY = window.innerHeight / 2

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowX
  mouseY = event.clientY - windowY
}

const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  targetX = mouseX * 0.001
  targetY = mouseY * 0.001

  // Update objects
  sphere.rotation.y = 0.45 * elapsedTime
  cube.rotation.y = -0.45 * elapsedTime
  // sphere.rotation.x = -0.1 * elapsedTime;
  // sphere.rotation.z = 0.1 * elapsedTime;
  // sphere1.rotation.y = 0.1 * elapsedTime;
  // sphere1.rotation.x = -0.1 * elapsedTime;
  // sphere1.rotation.z = 0.1 * elapsedTime;

  sphere.rotation.y += 0.3 * (targetX - sphere.rotation.y)
  sphere.rotation.x += 0.3 * (targetY - sphere.rotation.x)
  cube.rotation.y += 0.3 * (targetX - cube.rotation.y)
  cube.rotation.x += 0.3 * (targetY - cube.rotation.x)
  // sphere1.rotation.x = 0.5 * elapsedTime;
  // sphere1.rotation.y += 0.5 * (targetX - sphere1.rotation.y);
  // sphere1.rotation.y = 0.5 * elapsedTime;
  // sphere1.rotation.x += 0.5 * (targetY - sphere1.rotation.x);

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
