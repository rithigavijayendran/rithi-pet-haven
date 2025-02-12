import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ success: false, message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid Token" });
  }
};

export default authMiddleware;
