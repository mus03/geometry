function rectangle() {
  const input1 = getTriangle("rectangle-width");
  const input2 = getTriangle("rectangle-length");
  const area = input1 * input2;
  const valueArea = getText("rectangle-area", area);
  display("Area of a Reactangle:", area);
}
