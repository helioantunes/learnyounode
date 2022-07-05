const fs = require('fs')
const path = require('path')
let dir = process.argv[2]
let ext = '.' + process.argv[3]

fs.readdir(dir, function (err, list) {
    if (!err) {
        for (archive of list) {
            if (path.extname(archive) === ext) {
                console.log(archive)
            }
        }
    }
});