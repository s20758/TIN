const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Format: http://localhost:1234/add?num1=1&num2=6\n\nAvailable operations: addition (add), subtraction (sub), multiplication (mul) and division (div)");
        res.end();
    }
    const query = url.parse(req.url, true);
    const oper = query.pathname;

    switch(oper) {
        case "/add": {
            const qdata = query.query;
            const num1 = parseFloat(qdata.num1);
            const num2 = parseFloat(qdata.num2);

            if (num1 && num2) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`${num1} + ${num2} = ${num1 + num2}`);
                res.end();
            } else {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.end("Wrong parameters");
            }
            break;
        }
        case "/sub": {
            const qdata = query.query;
            const num1 = parseFloat(qdata.num1);
            const num2 = parseFloat(qdata.num2);

            if (num1 && num2) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`${num1} - ${num2} = ${num1 - num2}`);
                res.end();
            } else {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.end("Wrong parameters");
            }
            break;
        }
        case "/mul": {
            const qdata = query.query;
            const num1 = parseFloat(qdata.num1);
            const num2 = parseFloat(qdata.num2);

            if (num1 && num2) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`${num1} * ${num2} = ${num1 * num2}`);
                res.end();
            } else {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.end("Wrong parameters");
            }
            break;
        }
        case "/div": {
            const qdata = query.query;
            const num1 = parseFloat(qdata.num1);
            const num2 = parseFloat(qdata.num2);

            if (num1 && num2) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`${num1} / ${num2} = ${num1 / num2}`);
                res.end();
            } else {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.end("Wrong parameters");
            }
            break;
        }
        default: {
            res.writeHead(400, { "Content-Type": "text/html" });
            res.end("Wrong operation");
            break;
        }
    }
});

server.listen(1234);

console.log("Server running at http://localhost:1234/");