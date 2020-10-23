const jwt = require('jsonwebtoken');

const generateJWT = (id) => {
    return new Promise((resolve, reject) => {
        const payload = {
            id
        };
    
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: '24h'
        }, (err, token ) => {
            if(err) {
                //Can not get token
                reject('Can not get token')
            }else{
                resolve(token)
            }
        })
    })
};

module.exports = {
    generateJWT
}
