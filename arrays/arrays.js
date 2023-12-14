const grades = [
    {name: "Thomann", grade: 5.0},
    {name: "Bürgis", grade: 5.0},
    {name: "Norris", grade: 7.0},
    {name: "Lopez", grade: 6.5},
    {name: "Smith", grade: 4.8},
    {name: "Patel", grade: 6.2},
    {name: "Kim", grade: 5.7},
    {name: "Garcia", grade: 6.0},
    {name: "Zhang", grade: 7.1},
    {name: "Kumar", grade: 5.5}
  ]

//1.
console.log(grades.filter(schüler => schüler.grade > 6.0))

//2.
const names = grades.map(obj => obj.name);
console.log(names)

//3.
grades.forEach(grade => {
    grade.grade + 0.1;
});
console.log(grades)

//4.
const average = grades.reduce(
    (accumulator, grade) => accumulator + grade.grade,0
  );
  console.log(average)

//5.
const found = grades.find((grade) => grade.grade == 5);
console.log(found);

