async function validateSignUpRequest(req, res, next) {
  try {
    if (
      !req.body.firstName ||
      !req.body.email ||
      !req.body.password ||
      !req.body.phoneNumber
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Internal Server Error" });
  }
}

async function validateLoginRequest(req, res, next) {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Internal Server Error" });
  }
}

module.exports = { validateSignUpRequest, validateLoginRequest };
