const jwt = require("jsonwebtoken");

module.exports = verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decode) => {
      if (error) {
        reject(error);
      } else {
        resolve(decode ? { isValid: true, data: decode } : { isValid: false });
      }
    });
  });
};
