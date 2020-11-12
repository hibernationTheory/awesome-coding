function getGrade(score) {
  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (80 <= score && score < 90) {
    grade = "B";
  } else if (70 <= score && score < 80) {
    grade = "C";
  } else if (60 <= score && score < 70) {
    grade = "D";
  } else {
    grade = "F";
  }

  return grade;
}

let grade;
grade = getGrade(59);
console.log(grade);

grade = getGrade(71);
console.log(grade);

grade = getGrade(100);
console.log(grade);
