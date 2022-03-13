const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (error, user) => {
      if (error) {
        return res.status(403).json("Token is not valid!");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Auth Failed");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Access Denied");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, async () => {
    const isAdmin = await Users.findById(req.user.id);

    if (isAdmin.isAdmin) {
      next();
    } else {
      res.status(403).json("Access Denied");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
