let jwt = require('jsonwebtoken');
const config = require('../config.js');

let checkToken = (req, res, next) => {


    let token = req.body.sessionToken || req.query.sessionToken || req.headers['authorization'];


    if (token) {
        jwt.verify(token, config.DevNote, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token not supplied'
        });
    }
};

module.exports = checkToken;