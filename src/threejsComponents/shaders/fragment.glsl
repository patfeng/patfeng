varying vec4 clipPosition; 
uniform float u_time, u_flag_thinking;
void main(){
    gl_FragColor= vec4(-0.5*cos(u_flag_thinking*0.05)+0.5,0.5*sin(clipPosition.z+u_time*0.005)+0.5,0.5*sin(0.3*clipPosition.x+u_time*0.005)+0.5,1.0);
    //gl_FragColor= vec4(0.5*sin(u_flag_thinking)+0.5,0,0,1.0);

}