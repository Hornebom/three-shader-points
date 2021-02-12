import { Scene, PerspectiveCamera, WebGLRenderer} from 'three'
import Visualizer from './visualizer'

export function app() {
  const scene = new Scene()
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

  const renderer = new WebGLRenderer()
  renderer.setSize( window.innerWidth, window.innerHeight )
  document.body.appendChild( renderer.domElement )

  window.addEventListener("resize", resizeHandler)

  const visualizer = new Visualizer()
  scene.add(visualizer)

  camera.position.z = 10

  function resizeHandler() {
    const { innerWidth, innerHeight } = window
    renderer.setSize(innerWidth, innerHeight)
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
  }

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  
  animate();
}
