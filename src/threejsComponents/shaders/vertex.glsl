uniform float u_time;
varying vec4 clipPosition;
void main() {
    clipPosition = 0.5*projectionMatrix * modelViewMatrix *vec4(position, 1.0) + 0.5*vec4(position, 1.0) ;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}