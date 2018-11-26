const models = require("../models");

exports.getAll = (req, res) => {
  models.Artist.findAll({ limit: 10, order: [["createdAt", "DESC"]] })
    .then(accounts => res.send(accounts))
    .catch(err => res.send(err));
};

exports.createArtist = (req, res) => {
  models.Artist.create(req.body)
    .then(Artist => res.send(Artist))
    .catch(err => console.log(err));
};

// exports.deleteOne = (req, res) => {
//   models.accounts
//     .findOne({ where: { id: req.params.id } })
//     .then(accounts => accounts.destroy())
//     .then(result => res.send(result))
//     .catch(err => res.send(err));
// };

// exports.deleteAll = (req, res) => {
//   models.accounts
// }

exports.search = (req, res) => {
  models.Artist.findAll({
    where: req.query
  })
    .then(accounts => res.send(accounts))
    .catch(err => res.send(err));
};

exports.update = (req, res) => {
  models.Artist.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};
