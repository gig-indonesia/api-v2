const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getAll = (req, res) => {
  models.accounts
    .findAll()
    .then(accounts => res.send(accounts))
    .catch(err => console.log(err));
};

exports.login = (req, res) => {
  models.accounts
    .findOne({
      where: {
        email: req.body.email
      }
    })
    .then(account => {
      if (account === null) {
        return res.send("account not found");
      }
      const valuePassword = bcrypt.compareSync(
        req.body.password,
        account.password
      );

      if (valuePassword === false) {
        return res.send("password is not valid");
      }
      const token_data = {
        payload: {
          id: account.id,
          name: account.name,
          email: account.email
        },
        secret: process.env.JWT_SECRET,
        options: {
          expiresIn: "7d"
        }
      };
      const token = jwt.sign(
        token_data.payload,
        token_data.secret,
        token_data.options
      );

      res.send({
        message: "You are logged in",
        id: account.id,
        token: token
      });
    })
    .catch(err => res.send(err));
};

//insert data---------------------
exports.post = (req, res) => {
  const SALT_WORK_FACTOR = 7;
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);

  req.body.password = bcrypt.hashSync(req.body.password, salt);
  models.accounts
    .create(req.body)
    .then(account => res.send(account))
    .catch(err => res.send(err));
};

exports.deleteOne = (req, res) => {
  models.accounts
    .findOne({ where: { id: req.params.id } })
    .then(accounts => accounts.destroy())
    .then(result => res.send(result))
    .catch(err => res.send(err));
};

// exports.deleteAll = (req, res) => {
//   models.accounts
// }

exports.search = (req, res) => {
  models.accounts
    .findAll({
      where: req.query
    })
    .then(accounts => res.send(accounts))
    .catch(err => res.send(err));
};

exports.update = (req, res) => {
  models.accounts
    .update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};
