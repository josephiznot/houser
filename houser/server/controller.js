module.exports = {
  getter: (req, res, next) => {
    const db = req.app.get("db");

    db.get_all().then(products => {
      res.status(200).send(products);
    });
  },
  postForm: (req, res, next) => {
    const { body } = req;
    req.session.form.push(body);
    res.status(200).send(body);
    console.log(req.session);
  },
  deleteForm: (req, res, next) => {
    const { id } = req.params;

    const db = req.app.get("db");
    db
      .delete_product(id)
      .then(() => res.status(200).send("Item deleted successfuly"));
  },
  editme: (req, res, next) => {
    const { name, id } = req.body;
    const db = req.app.get("db");
    console.log(req.body);

    db.edit_data([name, id]).then(() => {
      res.status(200).send("successful");
    });
  }
};
