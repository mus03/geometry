function pentagon() {
  const input1 = getTriangle("pentagon-a");
  const input2 = getTriangle("pentagon-b");
  const area = 0.5 * input1 * input2;
  const valueArea = getText("pentagon-area", area);
  display("Area of a Pentagon:", area);
}
