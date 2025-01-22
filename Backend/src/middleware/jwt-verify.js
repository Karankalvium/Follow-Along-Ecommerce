const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: '../config/.env', // Ensure this path is correct
  });
}

const verifyUser = (req, res, next) => {
  const { token } = req.query;

  if (!token) {
    return res.status(404).send({ message: 'Send token over request' });
  }

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY); 

    req.userEmailAddress = data.email;
    req.UserId = data.id;
    
    next();
  } catch (err) {
    return res.status(403).send({ message: 'Invalid or expired token', error: err.message });
  }
};

module.exports = verifyUser;