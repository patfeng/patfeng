export function updateCamera(camera,text){
    console.log(text.textRenderInfo)
    const change = text.textRenderInfo.visibleBounds[1]-3
    camera.position.z -= change
    return change
}