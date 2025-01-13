const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization")

    if (!token) {
        return res.status(403).json({message: "Access denied. Token is required"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({message: "Invalid token. Access Denied!"})
    }
}

const authorizeUserToken = (req, res, next) => {
    const { username } = req.body;
    if (req.user.username !== username) {
        return res.status(403).json({ message: "Forbidden. User mismatch." });
    }
    next();
}

module.exports = {verifyToken, authorizeUserToken}