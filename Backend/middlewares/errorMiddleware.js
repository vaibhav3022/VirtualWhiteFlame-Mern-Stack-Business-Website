const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  console.log("🛑 ERROR CAUGHT BY MIDDLEWARE:", {
    code: err.code,
    name: err.name,
    message: err.message
  });

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // 1) Handle Mongoose/MongoDB Duplicate Key Error (E11000)
  if (err.code === 11000 || (err.message && err.message.includes('E11000'))) {
    statusCode = 400;
    message = 'User already exists with this email. Please use another one.';
  }

  // 2) Handle Mongoose Validation Error
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors).map(val => val.message).join(', ');
  }

  // 3) Handle JWT Errors
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token. Please log in again.';
  }

  console.log("💎 FINAL MESSAGE TO SEND:", message);

  res.status(statusCode).json({
    status: 'fail',
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
