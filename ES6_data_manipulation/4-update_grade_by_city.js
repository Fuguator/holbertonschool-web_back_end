/*eslint-disable */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const loc = getListStudents.filter(obj => obj.location === city)

  loc.map((obj) => {
    const grades = newGrades.find(obj => obj.studentId === obj.id);
    if (grades)
      obj.grade = grades.grade;
    else
      obj.grade = 'N/A';
  });
  return loc;
}