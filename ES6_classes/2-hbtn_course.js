export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    else if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    else if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }
    else if (students.every((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._syudents = students;
  }
}