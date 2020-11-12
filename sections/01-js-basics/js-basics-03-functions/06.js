function getCircleData(radius) {
  const piNumber = 3.14;

  const diameter = radius * 2;
  const circumference = diameter * piNumber;
  const area = piNumber * radius * radius;

  console.log("For the circle of radius: " + radius);
  console.log("Diameter is: " + diameter);
  console.log("Circumference: " + circumference);
  console.log("Area is: " + area);

  return diameter, circumference, area;
}

const result = getCircleData(5);
console.log(result);
