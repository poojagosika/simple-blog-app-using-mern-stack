async function validateBlogRequest(req, res, next) {
  try {
    if (!req.body.title || !req.body.body || !req.body.authorId) {
      return res.status(400).json({ message: "All fields are required" });
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Internal Server Error" });
  }
}

async function validateIdRequest(req, res, next) {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "All fields are required" });
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Internal Server Error" });
  }
}

module.exports = { validateBlogRequest, validateIdRequest };
