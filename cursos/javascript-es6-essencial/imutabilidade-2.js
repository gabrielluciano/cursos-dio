/**
 * 
 * O método filter de um Array também utiliza o conceito de imutabilidade,
 * pois retorna um novo array
 * 
 */

const students = [
  {
    name: "Grace",
    grade: 7,
  },
  {
    name: "Jennifer",
    grade: 10,
  },
  {
    name: "Paul",
    grade: 4,
  },
];

function getApprovedStudents(studentsList) {
  return studentsList.filter(student => student.grade >= 7);
}

const approvedStudents = getApprovedStudents(students);

console.log(students);
console.log(approvedStudents);