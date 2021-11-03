function Student(fname, lname, id, grades) {
    this.fname = fname;
    this.lname = lname;
    this.id = id;
    this.grades = grades;
    this.info = function() {
        return this.fname + " " + this.lname + " - " + grades.reduce((a, b) => a+b)/grades.length;
    }
}

Object.defineProperties(Student.prototype, {
    avgGrade: {
        get: function () {
            return this.grades.reduce((a, b) => a+b)/this.grades.length;
        }
    },

    fullName: {
        get: function () {
            return this.fname + " " + this.lname;
        },

        set: function (fullName) {
            let arr = fullName.split(" ");
            this.fname = arr[0] || "";
            this.lname = arr[1] || "";
        }
    },

    info: {
        get: function () {
            return this.fname + " " + this.lname + " - " + this.avgGrade;
        }
    }
});

const st = new Student("Bill", "Lester", 1, [4, 4.5, 3.5]);
console.log(st.info);
st.fullName = "Bob Waters";
console.log(st.avgGrade);
console.log(st.info);