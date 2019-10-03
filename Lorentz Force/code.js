function resetInput() {
  document.getElementById("vector").checked = false;
  document.getElementById("scalar").checked = false;
  document.getElementById("vector").disabled = false;
  document.getElementById("scalar").disabled = false;
  document.getElementById("vector_input").style.display = "none";
  document.getElementById("scalar_input").style.display = "none";
  document.getElementById("calculate_button").style.display = "none";
  document.getElementById("charge_container").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById(
    "result"
  ).innerText = `Click on 'Calculate Lorentz Force' button to get the result`;
}
function radioChecked() {
  if (document.getElementById("vector").checked === true) {
    document.getElementById("scalar").disabled = true;
    document.getElementById("vector_input").style.display = "block";
  }
  if (document.getElementById("scalar").checked === true) {
    document.getElementById("vector").disabled = true;
    document.getElementById("scalar_input").style.display = "block";
  }
  document.getElementById("calculate_button").style.display = "block";
  document.getElementById("result").style.display = "block";
  document.getElementById("charge_container").style.display = "block";
  document.getElementById("info").style.display = "block";
}
function calcLorentzForce() {
  let elecArray = [];
  let charge =
    Math.pow(10, -19) * parseFloat(document.getElementById("charge").value);
  console.log(`Charge is ${charge}`);
  elecArray[0] = document.getElementById("elec_i").value
    ? parseFloat(document.getElementById("elec_i").value)
    : 0;
  elecArray[1] = document.getElementById("elec_j").value
    ? parseFloat(document.getElementById("elec_j").value)
    : 0;
  elecArray[2] = document.getElementById("elec_k").value
    ? parseFloat(document.getElementById("elec_k").value)
    : 0;
  let electricalForce = [
    charge * elecArray[0],
    charge * elecArray[1],
    charge * elecArray[2]
  ];
  let crsossProduct = [];
  if (document.getElementById("vector").checked === true) {
    let velArray = [];
    let magArray = [];
    // Velocity Array
    velArray[0] = document.getElementById("vel_i").value
      ? parseFloat(document.getElementById("vel_i").value)
      : 0;
    velArray[1] = document.getElementById("vel_j").value
      ? parseFloat(document.getElementById("vel_j").value)
      : 0;
    velArray[2] = document.getElementById("vel_k").value
      ? parseFloat(document.getElementById("vel_k").value)
      : 0;
    // Magnetic Field Array
    magArray[0] = document.getElementById("mag_i").value
      ? parseFloat(document.getElementById("mag_i").value)
      : 0;
    magArray[1] = document.getElementById("mag_j").value
      ? parseFloat(document.getElementById("mag_j").value)
      : 0;
    magArray[2] = document.getElementById("mag_k").value
      ? parseFloat(document.getElementById("mag_k").value)
      : 0;
    crsossProduct[0] = velArray[1] * magArray[2] - velArray[2] * magArray[1];
    crsossProduct[1] = velArray[2] * magArray[0] - velArray[0] * magArray[2];
    crsossProduct[2] = velArray[0] * magArray[1] - velArray[1] * magArray[0];
    let lorentzForce = [
      crsossProduct[0] + electricalForce[0] * charge,
      crsossProduct[1] + electricalForce[1] * charge,
      crsossProduct[2] + electricalForce[2] * charge
    ];
    console.log(
      `${lorentzForce[0]}i^ (+) ${lorentzForce[1]}j^ (+) ${lorentzForce[2]}k^`
    );
    document.getElementById("result").innerHTML = `
    <div class="alert success">
    The value of Lorentz Force is <strong>${lorentzForce[0]}i^ (+) ${
      lorentzForce[1]
    }j^ (+) ${lorentzForce[2]}k^ N</strong> </div>`;
    M.toast({
      html: `The value of Lorentz Force is ${lorentzForce[0]}i^ (+) ${
        lorentzForce[1]
      }j^ (+) ${lorentzForce[2]}k^ N`
    });
  }
  if (document.getElementById("scalar").checked === true) {
    let magField = parseFloat(document.getElementById("scalar_mag").value);
    let velocity = parseFloat(document.getElementById("scalar_vel").value);
    let angle = parseFloat(document.getElementById("angle").value);
    let electricField = parseFloat(
      document.getElementById("scalar_elec").value
    );
    let lorentzForce =
      charge * electricField +
      charge * velocity * magField * Math.sin((Math.PI / 180) * angle);
    document.getElementById("result").innerHTML = `
    <div class="alert success">
    The value of Lorentz Force is <strong>${lorentzForce} N</strong> 
</div>
    `;
    console.log(lorentzForce);
    M.toast({ html: `The value of Lorentz Force is ${lorentzForce} N` });
  }
}
function alert() {
  var close = document.getElementById("info");
  close.style.opacity = "0";

  setTimeout(function() {
    close.style.display = "none";
  }, 600);
}
