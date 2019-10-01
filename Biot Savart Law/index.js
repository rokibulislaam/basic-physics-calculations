function calucalteMagField() {
  let turns;
  let permiability = 0.0000001;
  let current = parseFloat(document.getElementById("current").value);
  let radius = parseFloat(document.getElementById("radius").vlue);
  document.getElementById("turns").value
    ? (turns = parseFloat(document.getElementById("turns").value))
    : 1;
  let distance1 = parseFloat(document.getElementById("distance1").value);
  let distance2 = parseFloat(document.getElementById("distance2").value);
  let distance3 = parseFloat(document.getElementById("distance3").value);

  let magField1 =
    (permiability * 2 * Math.PI.turns * radius * radius) /
    Math.pow(Math.pow(distance1, 2) + Math.pow(radius, 2), 3 / 2);
  let magField2 =
    (permiability * 2 * Math.PI.turns * radius * radius) /
    Math.pow(Math.pow(distance2, 2) + Math.pow(radius, 2), 3 / 2);
  let magField3 =
    (permiability * 2 * Math.PI.turns * radius * radius) /
    Math.pow(Math.pow(distance3, 2) + Math.pow(radius, 2), 3 / 2);
}
