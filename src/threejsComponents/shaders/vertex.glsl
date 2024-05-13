// uniform float u_time;
// varying vec4 clipPosition;
// void main() {
//     clipPosition = 0.5*projectionMatrix * modelViewMatrix *vec4(position, 1.0) + 0.5*vec4(position, 1.0) ;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }

varying vec3 vNormal;
varying vec3 vViewDir;
varying vec4 clipPosition;

void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    clipPosition = 0.5*projectionMatrix * modelViewMatrix *vec4(position, 1.0) + 0.5*vec4(position, 1.0) ;
    vNormal = normalize(mat3(transpose(inverse(modelMatrix))) * normal);
    vViewDir =  normalize(cameraPosition - worldPosition.xyz);
    
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
}