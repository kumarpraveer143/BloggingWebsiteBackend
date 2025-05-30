import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  //middleware
  const token = req.cookies.token;
  try {
    const payload = jwt.verify(token, process.env.secret_key);
    req.userId = payload.userId;
    req.email = payload.email;
  } catch (err) {
    return res.json({ message: "Your Session is Expired!" });
  }
  next();
};

export default authMiddleware;
