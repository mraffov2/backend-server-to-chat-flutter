const {response} = require('express');
const Message = require('../models/message')
const User = require('../models/user')

const getMessages = async (req, res = response) => {
    const id = req._id;
    const to = req.params.to

    const last30 = await Message.find({
        $or: [{from: id, to: to}, {from: to, to: id}]
    }).sort({ createdAt: 'desc'}).limit(30)

    return res.status(200).json({
        ok: true,
        messages: last30
    })
};

module.exports = {
    getMessages
}