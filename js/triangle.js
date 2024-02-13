function triangle() {
  //   const triangleBreadth = document.getElementById("triangle-breadth");
  //   triangleBreadthValue = parseFloat(triangleBreadth.value);

  //   const triangleHeight = document.getElementById("triangle-height");
  //   triangleHeightValue = parseFloat(triangleHeight.value);

  //   const triangleArea = document.getElementById("triangle-area");
  //   const triangleAreaValue = triangleBreadthValue * triangleHeightValue;
  // triangleArea.innerText = triangleAreaValue;

  const input1 = getTriangle("triangle-breadth");
  const input2 = getTriangle("triangle-height");
  const area = 0.5 * input1 * input2;
  const valueArea = getText("triangle-area", area);
  display("Area of a Triangle:", area);
}
// function getTriangle(idname) {
//   const v = document.getElementById(idname);
//   vNumber = parseFloat(v.value);
//   return vNumber;
// }
// function getText(idname, reult) {
//   const v = document.getElementById(idname);
//   v.innerText = reult;
// }
