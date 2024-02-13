function rhom() {
  const input1 = getTriangle("rhom-d1");
  const input2 = getTriangle("rhom-d2");
  const area = 0.5 * input1 * input2;
  const valueArea = getText("rhom-area", area);
  display("Area of a Rombus:", area);
}
