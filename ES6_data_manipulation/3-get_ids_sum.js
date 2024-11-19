/*eslint-disable */
export default function getStudentIdsSum(getListStudents) {
  if(Array.isArray(getListStudents)) {
    const res = getListStudents.reduce((sum, obj) => obj.id + sum, 0);
    return res;
  }
}