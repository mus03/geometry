function getTriangle(idname) {
  const v = document.getElementById(idname);
  vNumber = parseFloat(v.value);
  return vNumber;
}
function getText(idname, result) {
  const v = document.getElementById(idname);
  v.innerText = result;
}
