function keyMirror (obj) {
  if (obj instanceof Object) {
    var mirrorObj = { ...obj}
    var keyArray = Object.keys(obj)
    keyArray.forEach(key => {
      mirrorObj[key] = key
    })
    return mirrorObj
  }
}

export default keyMirror({
	'CHANGE_MODAL':null
})
