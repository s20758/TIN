const student = {
    id: 1,
    name: "Greg",
    alive: true,
    status: function() {
        console.log(this.name + " is " + (this.alive ? "alive" : "dead"));
    },
    getId: function() {
        console.log(this.name + "'s id is " + this.id);
    }
}

function getProperties(obj) {
    let arr = new Array();
    let tmp = Object.getOwnPropertyNames(obj);
    for (let i = 0; i < tmp.length; i++) {
        let prop = tmp[i];
        arr.push(prop + " [" + typeof(obj[prop]) + "]");
    }
    return arr;
}

console.log(getProperties(student));