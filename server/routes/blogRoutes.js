const { Router } = require("express");

const {
  validateBlogRequest,
  validateIdRequest,
} = require("../middleware/blogMiddleware");

const {
  handelNewBlogPost,
  handelAllBlogPost,
  handelBlogById,
  handeleDeleteBlogById,
  handeleEditBlogById,
  handleAllAuthorBlogPost,
} = require("../controllers/authBlogController");
const blogRoutes = Router();

blogRoutes.post("/", validateBlogRequest, handelNewBlogPost);
blogRoutes.get("/", handelAllBlogPost);

blogRoutes.get("/myblogs/:id", validateIdRequest, handleAllAuthorBlogPost);
blogRoutes.get("/:id", validateIdRequest, handelBlogById);
blogRoutes.put("/:id", validateIdRequest, handeleEditBlogById);
blogRoutes.delete("/:id", validateIdRequest, handeleDeleteBlogById);

module.exports = blogRoutes;
