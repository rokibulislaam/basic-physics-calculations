function calucalteMagField() {
  let turns;
  let permiability = (4 * Math.PI * Math.pow(10, -7)) / 2;
  let current = parseFloat(document.getElementById("current").value);
  let radius = parseFloat(document.getElementById("radius").value);
  document.getElementById("turns").value
    ? (turns = parseFloat(document.getElementById("turns").value))
    : 1;
  let distance1 = parseFloat(document.getElementById("distance1").value);
  let distance2 = parseFloat(document.getElementById("distance2").value);
  let distance3 = parseFloat(document.getElementById("distance3").value);

  let magField1 =
    (permiability * current * 2 * Math.PI * turns * radius * radius) /
    Math.pow(Math.pow(distance1, 2) + Math.pow(radius, 2), 3 / 2);
  let magField2 =
    (permiability * current * 2 * Math.PI * turns * radius * radius) /
    Math.pow(Math.pow(distance2, 2) + Math.pow(radius, 2), 3 / 2);
  let magField3 =
    (permiability * current * 2 * Math.PI * turns * radius * radius) /
    Math.pow(Math.pow(distance3, 2) + Math.pow(radius, 2), 3 / 2);
  document.getElementById(
    "result"
  ).innerText = `B1 is ${magField1}, B2 is ${magField2} & B3 is ${magField3}`;
}

function getGraph() {
  document.getElementById("chartContainer").style.display = "block";
  let turns;
  let permiability = 4 * Math.PI * Math.pow(10, -7);
  let current = parseFloat(document.getElementById("current").value);
  let radius = parseFloat(document.getElementById("radius").value);
  document.getElementById("turns").value
    ? (turns = parseFloat(document.getElementById("turns").value))
    : 1;
  let distance1 = parseFloat(document.getElementById("distance1").value);
  let distance2 = parseFloat(document.getElementById("distance2").value);
  let distance3 = parseFloat(document.getElementById("distance3").value);

  let magField1 =
    (permiability * current * 2 * Math.PI * turns * radius * radius) /
    Math.pow(Math.pow(distance1, 2) + Math.pow(radius, 2), 3 / 2);
  let magField2 =
    (permiability * current * 2 * Math.PI * turns * radius * radius) /
    Math.pow(Math.pow(distance2, 2) + Math.pow(radius, 2), 3 / 2);
  let magField3 =
    (permiability * current * 2 * Math.PI * turns * radius * radius) /
    Math.pow(Math.pow(distance3, 2) + Math.pow(radius, 2), 3 / 2);

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Graph between Magnetic field (B) and distance (x)"
    },
    axisY: {
      title: "Magnetic Field (B)",
      suffix: "Tesla"
    },
    axisX: {
      title: "Distance (x)",
      suffix: "Metres"
    },
    data: [
      {
        yValueFormatString: "",
        xValueFormatString: "",
        type: "spline",
        dataPoints: [
          { x: distance1, y: magField1 },
          { x: distance2, y: magField2 },
          { x: distance3, y: magField3 }
        ]
      }
    ]
  });
  chart.render();
}
