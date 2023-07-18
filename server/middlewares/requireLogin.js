module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }
  //next is a function that we call when our middleware is finished running
  next();
};
