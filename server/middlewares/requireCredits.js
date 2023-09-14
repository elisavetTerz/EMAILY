module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "You don't have enough credits" });
  }
  //next is a function that we call when our middleware is finished running
  next();
};
