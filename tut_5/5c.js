function Student(fname, lname, id) {
    this.fname = fname;
    this.lname = lname;
    this.id = id;
}

const courses = ["TIN", "ZPR", "GRK"];
Student.prototype.courses = courses;

const st = new Student();
console.log(st.courses);