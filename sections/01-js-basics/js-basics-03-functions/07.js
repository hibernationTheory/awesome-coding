function getDiameter(radius) {
  return radius * 2;
}

function getCircumference(radius) {
  const piNumber = 3.14;
  const diameter = getDiameter(radius);

  return diameter * piNumber;
}

function getArea(radius) {
  const piNumber = 3.14;

  return piNumber * radius * radius;
}

function getCircleData(radius) {
  const diameter = getDiameter(radius);
  const circumference = getCircumference(radius);
  const area = getArea(radius);

  console.log("For the circle of radius: " + radius);
  console.log("Diameter is: " + diameter);
  console.log("Circumference: " + circumference);
  console.log("Area is: " + area);

  return diameter, circumference, area;
}

const result = getCircleData(5);
console.log(result);
