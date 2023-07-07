const multer = require('multer')
const path = require('path')
const { dirname } = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(dirname(__dirname), './public/uploads'))
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const extname = file.mimetype.split('/')[1]
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extname)
  },
})

// const upload = multer({ storage }).array('images', 5)
const upload = multer({ storage }).any();

function multerMiddleware(req, res, next) {
  next()
}

module.exports =  { multerMiddleware, upload }