import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  //middleware
  const token = req.cookies.token;
  try {
    const isValid = jwt.verify(token, process.env.secret_key);
  } catch (err) {
    return res.json({ message: "Your Session is Expired!" });
  }
  next();
};

export default authMiddleware;
