function Student(fname, lname, id, grades) {
    this.fname = fname;
    this.lname = lname;
    this.id = id;
    this.grades = grades;
    this.info = function() {
        return this.fname + " " + this.lname + " - " + grades.reduce((a, b) => a+b)/grades.length;
    }
}

const st = new Student("Bill", "Lester", 1, [4, 4.5, 3.5]);
console.log(st.info());