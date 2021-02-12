const vertexShader = `
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = 10.0;
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  uniform vec3 color;

  void main() {
    gl_FragColor = vec4( color, 1.0 );
  }
`

export { vertexShader, fragmentShader }
