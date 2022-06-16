const contact = require('../../models/contact/contact.model');
const errorMessage = require('../../helper/error.helper');

getAllContacts = (req, res) => {
    contact.find({})
        .exec((err, contact) => {
            if (err) {
                res.send(JSON.stringify({ status: 404, msg: 'Error fetching contacts!' }));
            }
            else {
                res.send(JSON.stringify({ status: 200, data: contact }));
            }
        });
}

getContactById = (req, res) => {
    contact.findOne({
        _id: req.id
    })
        .exec((err, user) => {
            if (err) {
                res.send(JSON.stringify({ status: 404, msg: 'Error fetching contact!' }));
            }
            else {
                res.send(JSON.stringify({ status: 200, data: contact }));
            }
        });
}

createContact = (req, res) => {
    contact.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        address: req.body.address
    }, (err, contact) => {
        if (err) {
            res.send(JSON.stringify({ status: 404, msg: errorMessage.errorMessage(err) || err }));
        }
        else {
            res.send(JSON.stringify({ status: 200, msg: 'Contact successfully created!', data: contact }));
        }
    });
}

deleteContact = (req, res) => {
    contact.findOneAndRemove({
        _id: req.body.id
    })
        .exec((err, contact) => {
            if (err) {
                res.send(JSON.stringify({ status: 404, msg: err }));
            }
            else {
                res.send(JSON.stringify({ status: 200, msg: 'Contact successfully deleted!', data: contact }));
            }
        });
}

updateContact = (req, res) => {
    contact.findOneAndUpdate({
        _id: req.body.id
    }, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            address: req.body.address
        }
    })
        .exec((err, contact) => {
            if (err) {
                res.send(JSON.stringify({ status: 404, msg: errorMessage(err) || err }));
            }
            else {
                res.send(JSON.stringify({ status: 200, msg: 'Contact successfully updated!', data: contact }));
            }
        });
}

module.exports = { getAllContacts, getContactById, createContact, deleteContact, updateContact };