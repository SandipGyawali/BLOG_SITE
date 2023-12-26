const router = require("express").Router();
const {
  handleBlogPost,
  getBlogs,
  getSingleBlog,
  removeBlog,
} = require("../controllers/blogController.js");
const {
  handleLogin,
  handleSignUp,
} = require("../controllers/userController.js");
const { restricted } = require("../middlewares/auth.js");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/login", handleLogin);
router.post("/signup", handleSignUp);
router.post("/blog", restricted, upload.single("photo"), handleBlogPost);
router.get("/blogs", getBlogs);
router.route("/blogs/:id").get(getSingleBlog).delete(removeBlog);

module.exports = router;
