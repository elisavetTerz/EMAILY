const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  //check if the user is logedin & if has enough credits
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      recipients: recipients.split(",").map((email) => {
        return { email: email.trim() };
        //ES6 we can write: map(email => ({email: email.trim()}))
      }),
      //we need to identify the current user
      _user: req.user.id,
      dateSent: Date.now(),
    });
  });
};
