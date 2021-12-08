const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

const port = 1234;

app.get("/", (req, res) => {
    res.send("Send request to /calculator with params num1, num2, oper (add/sub/mul/div)");
});

app.post("/calculator", (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const oper = req.body.oper;

    let result;

    res.status(200);
    switch (oper) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mul":
            result = num1 * num2;
            break;
        case "div":
            result = num1 / num2;
            break; 
    }
    res.send({result});
});

app.listen(port, () => {
    console.log(`Listening at http://localhost: ${port}`);
});