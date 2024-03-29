const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("api/stripe", requireLogin, async (req, res) => {
    //ensure that user is logged in
    // if (!req.user) {
    //   return res.status(401).send({ error: "You must log in!" });
    // } instead of checking it all the time, we create a new middleware

    // console.log(req.body)
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id,
    });
    // console.log(charge);
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
