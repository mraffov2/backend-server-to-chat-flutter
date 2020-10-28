const User = require('../models/user');
const Message = require('../models/message');

const userConected = async  (id = '') => {
    const user = await User.findById( id );

    if (user){
        user.online = true
        await user.save()
        return user

    }
};

const userDisconected = async  (id = '') => {
    const user = await User.findById( id );

    if (user){
        user.online = false;
        await user.save()
        return user

    }
};

const saveMessage = async ( payload ) => {
/* 
    payload = {
        from: '',
        to: '',
        message: ''
    }

*/

    try {
        const message = new Message( payload );
        await message.save();

        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {
    userConected,
    userDisconected,
    saveMessage
};