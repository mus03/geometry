function para() {
  const input1 = getTriangle("para-breadth");
  const input2 = getTriangle("para-height");
  const area = input1 * input2;
  const valueArea = getText("para-area", area);
  display("Area of a Parallelogram:", area);
}
