function ellipse() {
  const input1 = getTriangle("ellipse-a");
  const input2 = getTriangle("ellipse-b");
  const area = (Math.PI * input1 * input2).toFixed(2);
  const valueArea = getText("ellipse-area", area);
  display("Area of an Ellipse:", area);
}
