const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());

const port = 1234;

app.get("/", (req, res) => {
    res.send("Try requests: /hello, /form, /formdata, /jsondata");
});

app.get("/hello", (req, res) => {
    res.send("hello world");
});

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "/form.html"));
});

app.post("/formdata", (req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    const colour = req.body.colour;

    res.render("formResponse", {name: name, number: number, colour: colour});
});

app.post("/jsondata", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const soup = req.body.soup;

    res.render("jsonDataResponse", {name: name, age: age, soup: soup});
});

app.listen(port, () => {
    console.log(`Listening at http://localhost: ${port}`);
});