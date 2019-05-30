const fs = require("fs");
const colors = require("colors");

fs.readdir(".", (err, files) =>
    fs.writeFile("./tekst.txt", files.join("\n"), function(err) {
        if (err) throw err;
        console.log("Zapisano!".blue);
    })
);
