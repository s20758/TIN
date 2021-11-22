const fs = require("fs");

function watchDir(path) {
    let readDir = fs.readdirSync(path);
    console.log(`Files in the directory "${path}":\n\n` + readDir + "\n");

    fs.watch(path, (event, fileName) => {
        console.log(`${fileName} was modified - ${event}`);
        fs.readFile(path + fileName, "utf8", (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
        });
    });
}

watchDir("\\");