import { 
  Points,
  BufferGeometry,
  Float32BufferAttribute,
  MathUtils,
  // PointsMaterial,
  Color,
  ShaderMaterial
} from 'three'
import { vertexShader, fragmentShader } from './shader'

class Visualizer extends Points {
  constructor() {
    super()

    this.initGeometry()
    this.initMaterial()

    this.uniforms
  }

  initGeometry() {
    const vertices = []
    const spread = 5
    for (let i = 0; i < 10; i ++) {
      const x = MathUtils.randFloatSpread(spread)
      const y = MathUtils.randFloatSpread(spread)
      const z = MathUtils.randFloatSpread(spread)

      vertices.push(x, y, z)
    }

    this.geometry = new BufferGeometry()
    this.geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3))
  }

  initMaterial() {
    this.uniforms = {
      color: { value: new Color( 0xffff00 ) },
    };

    this.material = new ShaderMaterial( {
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
      transparent:  true

    });
  }
}

export default Visualizer
