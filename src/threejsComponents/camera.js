export function updateCamera(camera,torus,text){
    console.log(text.textRenderInfo)
    const change = text.textRenderInfo.visibleBounds[1]-3
    camera.position.z -= change
    torus.position.z -= change
    return change
}