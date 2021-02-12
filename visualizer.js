import { 
  Points,
  Color,
  ShaderMaterial,
  BufferAttribute,
  PlaneGeometry
} from 'three'
import { vertexShader, fragmentShader } from './shader'

class Visualizer extends Points {
  constructor() {
    super()

    this.geometry = new PlaneGeometry(10, 10, 10, 10)
    this.createMaterial()
    this.createAttributes()

    this.vertexCount
    this.yPosition
  }

  createMaterial() {
    const uniforms = {
      color: { value: new Color( 0xffff00 ) },
    };

    this.material = new ShaderMaterial( {
      uniforms,
      vertexShader,
      fragmentShader,
      transparent:  true

    });
  }

  createAttributes() {
    this.vertexCount = this.geometry.attributes.position.count
    this.yPosition = new Float32Array( this.vertexCount * 1 ).fill(0) // 1 values per vertex

    this.geometry.setAttribute( 'y_Position', new BufferAttribute( this.yPosition, 1 ) )
  }

  updatePosition(offsetArray) {
    const position = this.geometry.attributes['y_Position']
    offsetArray.forEach((point, index) => {
      position.array[index] = point
    })

    position.needsUpdate = true
  }
}

export default Visualizer
