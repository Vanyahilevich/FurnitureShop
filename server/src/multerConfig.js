const multer = require('multer');
const { nanoid } = require('nanoid');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/user-avatars/');  // Destination folder on the server  
  },
  filename: function (req, file, cb) {
    // Rename the file to avoid name conflicts (you can customize the filename)
    cb(null,req.user.id + nanoid() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

module.exports = upload.single('image');
