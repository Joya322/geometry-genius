// Triangle
function triangleArea() {
    // get base
    const base = getFieldValueById("triangle-base-field");

    // get height
    const height = getFieldValueById("triangle-height-field");

    // validate base and height
    if (isNaN(base) || isNaN(height)) {
        alert("Invalid Input");
        return;
    }

    // calculate area
    const area = 0.5 * base * height;

    // set area into Area Calculation
    setCalculatedArea("Triangle", area);
}

// Rectangle
function rectangleArea() {
  // get base
  const width = getFieldValueById("rectangle-width-field");

  // get height
  const length = getFieldValueById("rectangle-length-field");

  // validate base and height
  if (isNaN(width) || isNaN(length)) {
    alert("Invalid Input");
    return;
  }

  // calculate area
  const area = length * width;

  // set area into Area Calculation
  setCalculatedArea("Rectangle", area);
}

// Parallelogram
function parallelogramArea() {
    // get base
    const base = getFieldValueById("parallelogram-base-field");

    // get height
    const height = getFieldValueById("parallelogram-height-field");

    // validate base and height
    if (isNaN(base) || isNaN(height)) {
        alert("Invalid Input");
        return;
    }

    // calculate area
    const area = base * height;

    // set area into Area Calculation
    setCalculatedArea("Parallelogram", area);
}

// Rhombus
function rhombusArea() {
  // get Diagonal1
  const d1 = getFieldValueById("rhombus-d1-field");

  // get Diagonal2
  const d2 = getFieldValueById("rhombus-d2-field");

  // validate d1 and d2
  if (isNaN(d1) || isNaN(d2)) {
    alert("Invalid Input");
    return;
  }

  // calculate area
  const area = 0.5 * d1 * d2;

  // set area into Area Calculation
  setCalculatedArea("Rhombus", area);
}

// Pentagon
function pentagonArea() {
  // get perimeter
  const perimeter = getFieldValueById("pentagon-perimeter-field");

  // get apothem
  const apothem = getFieldValueById("pentagon-apothem-field");

  // validate perimeter and apothem
  if (isNaN(perimeter) || isNaN(apothem)) {
    alert("Invalid Input");
    return;
  }

  // calculate area
  const area = 0.5 * perimeter * apothem;

  // set area into Area Calculation
  setCalculatedArea("Pentagon", area);
}

// Ellipse
function ellipseArea() {
  // get aAxis
  const aAxis = getFieldValueById("ellipse-aAxis-field");

  // get bAxis
  const bAxis = getFieldValueById("ellipse-bAxis-field");

  // validate aAxis and bAxis
  if (isNaN(aAxis) || isNaN(bAxis)) {
    alert("Invalid Input");
    return;
  }

  // calculate area
  const area = (Math.PI * aAxis * bAxis).toFixed(2);

  // set area into Area Calculation
  setCalculatedArea("Ellipse", area);
}

// common functions
function getFieldValueById(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldValueText = field.value;
    field.value = "";
    const fieldValue = parseFloat(fieldValueText);
    return fieldValue;
}

function setCalculatedArea(areaType, area) {
    // get Parent element
    const div = document.getElementById("calculatedArea");
    // create an p element
    const count = div.childElementCount;
    const p = document.createElement("p");

    // count created element
    p.innerHTML = `${count + 1}. <span class="w-[100px]">${areaType}</span> ${area} cm<sup>2</sup> <button class = "btn btn-sm bg-btn-primary text-white ml-1">Convert to m<sup class="-left-0.5">2</sup></button>`;
    
    p.classList.add("py-2");

    div.appendChild(p);
}

