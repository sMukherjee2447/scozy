var productDb = require('../models/product')

exports.delete = (req, res) => {
    const id = req.params.id;

    productDb.findOneAndDelete({
            "_id": id
        })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot Delete with id ${id}. Maybe id is wrong`
                })
            } else {
                res.send({
                    message: "Package was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete the package"
            })
        })
}