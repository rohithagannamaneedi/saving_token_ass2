const encrypt = (payload, secret) => {
  // your code here and return token
  const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // Generate a JWT with 1 hour expiry
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};


};

module.exports = encrypt;
