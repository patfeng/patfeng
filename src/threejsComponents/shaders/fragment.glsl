varying vec4 clipPosition; 
uniform float u_time;
void main(){
    gl_FragColor= vec4(0.5*sin(0.001*u_time)+0.5,0.5*sin(clipPosition.z)+0.5,0.5*sin(0.3*clipPosition.x)+0.5,1.0);
}