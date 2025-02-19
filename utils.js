const fs = require("fs")      // The fs module deals with the file system

function writeDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
        if(err) {
            console.log(err)
        }
    })
}

module.exports = {
    writeDataToFile
}




