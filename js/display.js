function display(name, area) {
  const boxArea = document.getElementById("box-area");
  const p = document.createElement("p");
  p.innerText = area;
  boxArea.appendChild(p);
  p.before(name);
}
