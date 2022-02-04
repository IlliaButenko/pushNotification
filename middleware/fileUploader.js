const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const path = require("path");

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "../"));
    },
    filename: (req, file, cb) => {
        cb(null, 'blockchaindb.tar');
    },
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).single("File");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;